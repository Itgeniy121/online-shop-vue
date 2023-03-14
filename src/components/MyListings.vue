<template >
    <div class = 'listings'>
        <div class="title-place">
        <h3 class = 'main-title'>Collection</h3>
    </div>
        <div class="cards">
         <router-link class="listings-card" v-for="(product, i) of this.$store.state.products" :key="i" :to="product.path">
            <img :src=product.img :alt="product.title">
            <h4 class = 'title'>{{ product.title }}</h4>
            <span class = 'price'>${{ product.price }}</span>
        </router-link>
    </div>
    </div>
</template>
<script>


export default {
    
}
</script>
<style lang="scss" scoped>
    .listings{
        height: 634px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &-card{
            text-decoration: none;
            cursor: pointer;
            width: 305px;
            height: 375px;
            display: flex;
            flex-direction: column;
            margin: 10px;
            &:hover{
                text-decoration: underline;
            }
        }
        .title{
        color: #2A254B;
        font-weight: 400;
        font-family: 'Clash Display', sans-serif;
        }
        .main-title{
        color: #2A254B;
        font-weight: 500;
        font-family: 'Clash Display', sans-serif;
        }
        .price{
            font-size: 18px;
            font-family: 'Clash Display', sans-serif;
            color: #2A254B;
        }
        .title-place{
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1440px;
        }
        .cards{
            height: 504px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
        }
    }
</style>