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
        <BookCard v-for="card in cards" :key="card.url" :info="card" />
        </div>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</div>
</template>

<script>
import BookCard from '@/components/BookCard.vue';
import store from '@/store.js'

let cards = [];

cards = [
  {url: 'https://picsum.photos/id/1/200/300', autor: 'W. Bruce Cameron', naziv: 'Putovanje jednoga psa'},
  {url: 'https://picsum.photos/id/2/200/300', autor: 'Kristin Hannah', naziv: 'Slavujeva pjesma'},

];

export default {
  name: 'Home',
  data: function(){
    return{
      cards: cards,
      store,
    };
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