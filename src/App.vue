
<template>
  <router-view @item = "proverka"
  @countPlus = 'countPlus'
  @countMinus = 'countMinus'></router-view>
</template>
<script>
export default {
  methods:{
    proverka(elem){
      elem.count = 1;
      this.$store.commit('AddItem', elem)
      this.$store.commit('Subtotal');
    },
    countPlus(item){
      this.$store.commit('CountPlus', item);
    },
    countMinus(item){
      this.$store.commit('CountMinus', item);
    },  
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url('https://fonts.cdnfonts.com/css/clash-display');
  *{
    box-sizing: border-box;
  }
  img{
    max-width: 100%;
  }
</style>