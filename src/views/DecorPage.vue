<template >
    <div class ="container">
        <MyHeader></MyHeader>
        <div class="items">
            <h2 class = 'title'>Decor:</h2>
            <div class="point">Product</div>
            <router-link :to="decor.path" class="item" v-for="(decor, i) of this.$store.state.decors" :key="i" >
            <img class ='item-img' :src=decor.img :alt="decor.name">
            <div class="description">
            <h3 to="chair.path" class = 'item-name'>{{ decor.name }}</h3>
            <span class = 'item-price'>${{ decor.price }}</span>
            <button class = 'btn' @click.prevent="$emit('item', decor)">Add to Bag</button>
            </div>
        </router-link>
        </div>
    </div>
</template>
<script>
import MyHeader from "@/components/MyHeader";
export default {
    components:{
        MyHeader,
    },
    data(){
        return{
            CurrentPath: '',
        }
    },
    methods:{
        CancelTransition(e){
            e.preventDefault();
        }

    }, 
    
    
}
</script>
<style lang="scss" scoped>
    .items{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
    }
    .title{
        font-family: 'Clash Display', sans-serif;
        // font-family: 'Satoshi', sans-serif;
        color: #2A254B;
        margin-left: 20px;
        font-weight: 500;
    }
    .item{
        text-decoration: none;
        cursor: pointer;
        margin-left: 20px;
        height: 250px;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: start;
        width: 600px;
        margin-bottom: 30px;
        background: none;
        border: none;
        &:hover{
            text-decoration: underline;
        }
        &-img{
            height: 250px;
            width: 250px;
        }
        &-name{
            color: #2A254B;
            font-weight: 400;
            font-family: 'Clash Display', sans-serif;
        }
        &-price{
            font-size: 18px;
            font-family: 'Clash Display', sans-serif;
            color: #2A254B;
        }
    }
    .description{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;
        height: 250px;
        width: 200px;
        margin-left: 20px;
    }
    .btn{
    width: 118px;
    height: 56px;
    border: none;
    background-color: lightgray;
    color: black;
    margin-top: 97px;
    font-family: 'Satoshi', sans-serif;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
}
.point{
    border-bottom: 2px solid #EBE8F4;
    color: #2A254B;
    width: 1440px;
    margin-left: 20px;
    margin-bottom: 10px;
    font-family: 'Clash Display', sans-serif;
    font-size: 16px;
}  
</style>