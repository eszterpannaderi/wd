<template>
  <div class="container my-5">
      <div class="row mb-5"><select-season :seasons="seasons"></select-season></div>
      <div class="row"></div>
      <episode-card
      :seasonList="seasonList"></episode-card>
  </div>

</template>

<script>
import DataService from '@/services/dataservice'
import EpisodeCard from '@/components/EpisodeCard.vue'
import SelectSeason from '@/components/SelectSeason.vue'
export default {
    name:'walking-dead',
    components:{EpisodeCard, SelectSeason},
    data(){
        return{
            seasonList:[],
            seasons:[]
        }
    },
    created(){
        DataService.getAllEpisodes()
        .then(result=>{
            this.seasons=[...new Set(result.map(x => x.season))]
            console.log(this.seasons)
            this.seasonList=result
            console.log(this.seasonList)
        })
    }

}
</script>

<style>

</style>