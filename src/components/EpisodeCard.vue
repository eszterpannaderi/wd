<template>
  <div class="card-group col-12 col-md-4 mb-2"
        v-for="item in seasonList"
        :key="item.id">
  <div class="card">
    <img 
    v-if="item.image"
    class="card-img-top" 
    :src="item.image.medium" 
    alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <p class="card-text" v-html="item.summary"></p>
      <div class="card-footer">
          <a href="item.url" target="_blank" class="btn btn-primary d-flex justify-conent-center">Go to webpage</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:'episode-card',
    props:['seasonList']

}
</script>

<style>

</style>