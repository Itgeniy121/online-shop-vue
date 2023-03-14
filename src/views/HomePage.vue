<template >
    <div class = "container" id = 'cont'>
      <MyHeader></MyHeader>
      <MainImage @scrollUp = 'scrollUp'></MainImage>
      <MyFeatures></MyFeatures>
      <MyListings id = 'products'></MyListings>
      <MyFeatures2 @scrollUp = 'scrollUp'></MyFeatures2>
      <MyEmailSignUp></MyEmailSignUp>
      <MyFooter></MyFooter>
    </div>
</template>
<script>
import MyHeader from "@/components/MyHeader";
import MainImage from "@/components/MainImage";
import MyFeatures from "@/components/MyFeatures.vue";
import MyListings from "@/components/MyListings.vue";
import MyFeatures2 from "@/components/MyFeatures2.vue";
import MyEmailSignUp from "@/components/MyEmailSignUp.vue";
import MyFooter from "@/components/MyFooter.vue";
export default {
    components:{
    MyHeader, MainImage, MyFeatures, MyListings, MyFeatures2, MyEmailSignUp, MyFooter,
   
},
methods:{
    scrollUp(){
        let collection = document.getElementById('products');
        collection.scrollIntoView({block: "center", behavior: "smooth"});
        

    }
    }
}

</script>
<style lang="scss" scoped>
@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url('https://fonts.cdnfonts.com/css/clash-display');
body{
    font-family: 'Satoshi', sans-serif;
    // font-family: 'Clash Display', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 16px;
                                                
                                                
}
    .container{
        max-width: 1440px;
        margin: auto;
        // display: flex;
        // flex-direction: column;
    }
</style>