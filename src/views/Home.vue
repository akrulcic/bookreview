<template>
<div class="container" id="home">
  <div class="row">
    <div class="col-1"></div>

    <div class="col-10">
      <br>
      <br>
      <h3>Preporuke</h3>
      <hr>
      <BookCard v-for="card in cards" :key="card" :autor="card" :info="card"/>

    </div>
    <div class="col-1"></div>
  </div>
</div>
</template>

<script>
import BookCard from '@/components/BookCard.vue'

let cards = [];

cards = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300',
];

export default {
  name: 'Home',
  data: function(){
    return{
      cards: cards,
    };
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
</style>