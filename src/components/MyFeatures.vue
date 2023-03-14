<template >
    <div class="features">
     <div class="features-title">
        <h3 class= 'features-h3'>What makes our brand different</h3>
     </div>
     <div class="features-blocks-place">
     <div  class="features-block" v-for="(brend, i) of this.$store.state.brends" :key="i">
            <img :src= brend.img  :alt="brend.title" class ="img">
            <h4 class = 'title'>{{ brend.title }}</h4>
            <span class="description">{{ brend.description }}</span>
     </div>
     
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .features{
        height: 476px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        &-title{
            width: 366px;
            height: 34px;
            display: flex;
            margin-top: 80px;
        };
    }
    .features-h3{
        text-align: center;
        color: #2A254B;
        font-weight: 400;
        // font-family: 'Satoshi', sans-serif;
        font-family: 'Clash Display', sans-serif;
    }
    .features-block{
        height: 244px;
        width: 305px;
        background-color: white;
        margin: 10px;
        display: flex;
        align-items: start;
        justify-content: space-between;
        flex-direction: column;
    } 
    .features-blocks-place{
            display: flex;
            justify-content: space-between;
            margin-top: 70px;
        }
    .img{
        height: 24px;
        width: 24px;
        margin-left: 30px;
        margin-top: 40px;
    }
    .title{
        font-family: 'Clash Display', sans-serif;
        font-weight: 500;
        color: #2A254B;
        margin-left: 30px;
    }
    .description{
        font-family: 'Clash Display', sans-serif;
        color: #2A254B;
        font-size: 16px;
        margin-left: 30px;
        margin-bottom: 40px;
    }
</style>