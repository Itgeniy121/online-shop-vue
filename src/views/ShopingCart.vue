<template >
    <div class = 'cart'>
      <router-link class = 'cart-logo' to="/"> Avion</router-link>
      <div class="cart-name">
        <span class = 'CartHeader'>Your shopping cart</span>
      </div>
      <div class="cart-parts">
        <span class = 'part-name'>Product</span>
        <span class = 'part-name'>Quantity</span>
        <span class = 'part-name'>Total</span>
      </div>
      <div v-if="this.$store.state.cart.length > 0">
      <router-link :to="item.path" class="cart-item" v-for="(item, i) of this.$store.state.cart" :key="i" >
        <div class="img-and-disc">
            <img class ='cart-item__img' :src=item.img :alt="item.name">
            <div class="desc">
                <h3>{{ item.name }}</h3> 
            </div>    
            </div>
            <div class = "main-description__stepper">
                        <button class ="main-description__stepper__btn" @click.prevent="$emit('countMinus', item)">-</button>
                        <input disabled class ="main-description__stepper__count" v-model="item.count" >
                        <button class ="main-description__stepper__btn" @click.prevent="$emit('countPlus', item)">+</button> 
            </div>
            <span class = 'cart-item__price'>${{ item.newprice }}</span>
        </router-link>
        <div class = 'cart-total'>
        <h3>Subtotal:  $ {{ this.$store.state.subtotal }}</h3>
        <button class = 'btn' @click="alert">Go to checkout</button>
    </div>
</div>
<div v-else>
    <h2 >Cart is empty yet</h2>
</div>
    </div>
    
</template>
<script>
export default {
    methods:{
        alert(){
            alert('Тут должен быть переход на страницу оформления заказа');
        }
    }
    
}
</script>
<style lang="scss" scoped>
.cart{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-item{
        display: flex;
        margin-top: 10px;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        width: 1164px;
        height: 134px;
        text-decoration: none;
        &__img{
            width: 109px;
            height: 134px;
        }
        &__description{
            height: 134px;
            width: 180px;
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
        }
        &__price{
            font-size: 18px;
            color: #2A254B;
            font-family: 'Clash Display', sans-serif;
            font-weight: 500;
        }

    }
    &-name{
        display: flex;
        align-items: center;
        justify-content: start;
        width: 1164px;
        margin: 64px;
    }
    &-parts{
        display: flex;
        align-items: start;
        justify-content: space-between;
        width: 1164px;
        border-bottom: 2px solid #EBE8F4;
    }
    &-logo{
        color: black;
        font-family: 'Clash Display', sans-serif;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
}
.CartHeader{
    color: #2A254B;
    font-size: 36px;
    font-family: 'Clash Display', sans-serif;
}
.part-name{
    color: #2A254B;
    font-family: 'Clash Display', sans-serif;

}
.img-and-disc{
    display: flex;
    align-items: center;
    justify-content: start;
    width: 310px;
    height: 134px;
    flex-direction: row;
}
.desc{
    display: flex;
    margin-left: 20px;
    align-items: start;
    justify-content: center;
    height: 164px;
    flex-direction: column;
}
h3{
        color: #2A254B;
        text-decoration: none;
        font-size: 20px;
        font-family: 'Clash Display', sans-serif;
        font-weight: 400;
    }
h2{
    color: #2A254B;
        text-decoration: none;
        font-size: 20px;
        font-family: 'Clash Display', sans-serif;
        font-weight: 400; 
}

.cart-total{
            display: flex;
            justify-content: center;
            align-items: end;
            border-top: 2px solid #EBE8F4;
            width: 1164px;
            flex-direction: column;
            margin-top: 30px;
        }


.main-description__stepper{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
                background-color: #EBE8F4;
                width: 122px;
                height: 46px;
                margin-right: 240px;
                &__btn{
                    border: none;
                    cursor: pointer;
                    background-color: #EBE8F4;
                    font-family: 'Satoshi', sans-serif;
                    font-size: 16px;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                &__count{
                    font-family: 'Satoshi', sans-serif;
                    font-size: 16px;
                    width: 30px;
                    border: none;
                    outline: none;
                    text-align: center;
                    background-color: #EBE8F4;

                }
            }
    .btn{
    width: 172px;
    height: 56px;
    border: none;
    background-color: #2A254B;
    color: white;
    font-family: 'Satoshi', sans-serif;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
     }


</style>