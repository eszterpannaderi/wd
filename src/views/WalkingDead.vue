<template>
  <div class="container my-5">
      <div class="row mb-5"><select-season :seasons="seasons"></select-season></div>
      <div class="row"></div>
      <episode-card
      :seasonList="seasonList" :seasonNumber="seasonNumber"></episode-card>
  </div>

</template>

<script>
import DataService from '@/services/dataservice'
import EpisodeCard from '@/components/EpisodeCard.vue'
import SelectSeason from '@/components/SelectSeason.vue'
import dataservice from '@/services/dataservice'
export default {
    name:'walking-dead',
    components:{EpisodeCard, SelectSeason},
    data(){
        return{
            seasonList:[],
            seasons:[],
            seasonNumber:1
        }
    },
    created(){
        DataService.getAllEpisodes()
        .then(result=>{
            this.seasons=[...new Set(result.map(x => x.season))]
            console.log(this.seasons)
            //this.seasonList=result
            dataservice.getEpisodesBySeason(this.seasons[9])
            .then(result=>{
                this.seasonList=result});
            console.log(this.seasonList)
        })
    },
    methods:{
        onSelectedSeason(event){
            this.seasonNumber=event.target.value;
            dataservice.getEpisodesBySeason(event.target.value)
            .then(result=>{
                //this.seasonList=result
                this.seasonList=result.map(x =>{
                    if(x.image == null){
                        x.image = {
                            medium:'https://via.placeholder.com/170x120'
                        }
                    }
                    return x
                  })
                })

        }
    }

}
</script>

<style>

</style>