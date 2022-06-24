<template>
  <label class="col-sm-1 col-form-label" for="season">Seasons:</label>
  <div class="col-sm-2">
    <select 
        id="season"
        class="form-select"
        @change="$emit('onSelectedSeason',$event)">
        <option 
            v-for="(s,i) in seasons"
            :key="i"
            :value="s"
        >
        {{s}}
        </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "select-season",
  props: ["seasons"],
};
</script>

<style>
</style>

