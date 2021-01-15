<template>
<div class="container" id="home">
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <br/>
      <br/>
      <h3>Preporuke</h3>
      <hr/>
      <div class="card__wrap--outer">
        <div class="card__wrap--inner">
        <router-link to="/book"><BookCard v-for="card in cards" :key="card.url" :info="card" /></router-link>
        </div>
      </div>
    </div>
    <div class="col-1">
      </div>
  </div>
</div>
</template>

<script>
import BookCard from '@/components/BookCard.vue';
import store from '@/store.js';
import { db } from '@/firebase';

export default {
  name: 'Home',
  data: function(){
    return{
      cards: [],
      store,
      newImageUrl:'',
      newAutor:'',
      newTitle: '',
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
    postNewBook(){

      const imageUrl = this.newImageUrl;
      const autor = this.newAutor;
      const title = this.newTitle;

      db.collection('posts')
      .add({
        url: imageUrl,
        autor: autor,
        email: store.currentUser,
        posted_at: Date.now(),
        title: title,
      })
      .then((doc) =>{
        console.log('spremljeno', doc);
        this.newImageUrl = '';
        this.newAutor= '';
        this.newTitle = '';
      })
      .catch((e) =>{
        console.error(e);
      });
    },
  },

  computed:{
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.cards.filter((card) => card.autor.includes(termin));
      
    },
  },

  components: {
    BookCard,
  },
};
</script>

<style lang="scss">

#home{
  h3{
    text-align: left;
  }
}
#card{
  text-align: left;
  font-size: 13px;
  font-weight: bold;
  h6{
    color:rgb(153, 117, 92);
    font-weight: bold;
    
  }
}
.card {
    display: flex;
    flex-direction: column;
    width: 100%;
     padding: 5px;
    &__wrap {

        &--outer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
        }

        &--inner {
            display: flex;
            flex-direction: row;
            width: 50%;
        }
    }
}

</style>