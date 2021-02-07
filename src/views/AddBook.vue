<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <br />
      <br />
      <h3>Dodaj novu knjigu</h3>
      <hr />
      <br />
      <form @submit.prevent="postNewBook">
        <div class="form-group">
          <croppa
            :width="138"
            :height="207"
            placeholder="učitaj sliku..."
            v-model="imageReference"
          ></croppa>
        </div>
        <div class="form-group">
          <label for="imageAutor">Autor</label>
          <input
            v-model="newAutor"
            type="text"
            class="form-control ml-2"
            placeholder="Unesi autora knjige"
            id="autor"
          />
        </div>
        <div class="form-group">
          <label for="imageAutor">Naziv</label>
          <input
            v-model="newTitle"
            type="text"
            class="form-control ml-2"
            placeholder="Unesi naziv knjige"
            id="title"
          />
        </div>
        <button type="submit" class="btn btn-primary ml-2">Post image</button>
      </form>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
import BookCard from '@/components/BookCard.vue';
import store from '@/store.js';
import { db, storage } from '@/firebase';

export default {
  name: 'AddBook',
  data: function(){
    return{
      cards: [],
      store,
      newImageUrl:'',
      newAutor:'',
      newTitle:'',
      imageReference: null,
    };
  },
  mounted(){
    this.getBooks();

  },
  methods:{
    getBooks(){
      console.log("firebase dohvat");

      db.collection('posts')
      .get()
      .then((query) => {
        this.cards = [];
        query.forEach((doc) => {
          const data = doc.data();
          console.log(data);

          this.cards.push({
            id: doc.id,
            time: data.posted_at,
            autor: data.autor,
            url: data.url,
            title: data.title,
          })
        });
      });
    },
    postNewBook() {
      this.imageReference.generateBlob((blobData) => {
        console.log(blobData);
        let imageName = 'posts/' + store.currentUser + '/' + Date.now() + '.png';

        storage
          .ref(imageName)
          .put(blobData)
          .then((result) => {
            result.ref.getDownloadURL()
            .then((url) => {
              console.log('javni link', url);
              const imageUrl = this.newImageUrl;
              const autor = this.newAutor;
              const title = this.newTitle;

              db.collection('posts')
              .add({
                url: url,
                autor: autor,
                email: store.currentUser,
                posted_at: Date.now(),
                title: title,
              })
              .then((doc) =>{
                console.log('spremljeno', doc);
                this.imageReference.remove();
                this.newAutor= '';
                this.newTitle = '';
              })
              .catch((e) =>{
                console.error(e);
              });
            })
            .catch((e) => {
              console.error(e);
            });
          })
          .catch((e) => {
            console.error(e);
          });
       });//generateBlob
      return
    },
    //postNewBook
  },
};
</script>

<style>
h3 {
  text-align: left;
}
</style>