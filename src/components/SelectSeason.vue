<template>
  <label for="season" class="col-sm-1 col-form-label">Season</label>
  <div class="col-sm-2">
<select  
  @change="$emit('onSelectedSeason', $event)"
  id="season">
      <option
      v-for="(s,i) in seasons"
      :key="i"
      :value="s"
      >{{s}}
      </option>
  </select></div>
</template>

<script>
export default {
    name:'select-season',
    props:['seasons']

}
</script>

<style>

</style>