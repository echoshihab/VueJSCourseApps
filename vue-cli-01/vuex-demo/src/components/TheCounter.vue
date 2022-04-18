<template>
    <h3>{{ counter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default { 
    computed:{
      // return this.$store.getters.finalCounter;
      ...mapGetters('numbers',['finalCounter'])
    },
  }
    
</script>