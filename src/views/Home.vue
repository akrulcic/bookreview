<template>
<div class="container" id="home">
  <div class="row">
    <div class="col-1"></div>

    <div class="col-10">
      <br>
      <br>
      <h3>Preporuke</h3>
      <hr>
      <Card />

    </div>
    <div class="col-1"></div>
  </div>
</div>

</template>


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

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>
