<template >
    <div class = 'container'>
        <MyHeader></MyHeader>
        <div class="main">
            <div class = "main-img"> <img class ="img" src="/img/table1.jpg" alt="chair1"></div>
            <div class="main-description">
                <h1 class = "main-description__title">ADILS, Desk</h1>
                <span class = "main-description__price">$129</span>
                <span class = "main-description__description">Product description</span>
                <span class = "main-description__about">Mix and match your choice of table top and legs –
                     or choose this ready-made combination. Strong and light-weight, made with a technique
                      that uses less raw materials, reducing the impact on the environment.</span>
                      <span class = 'main-description__description'>Quantitity</span>
                      <div class = "main-description__stepper">
                        <button class ="main-description__stepper__btn" @click="CountMinus">-</button>
                        <input disabled class ="main-description__stepper__count" v-model="this.count" >
                        <button class ="main-description__stepper__btn" @click="CountPlus">+</button>
                      </div>
                      <button class = "main-description__btn" @click = 'addToCart'>Add to Bag</button>

            </div>
        </div>
    </div>
</template>
<script>
import MyHeader from '@/components/MyHeader.vue';
export default {
    components:{
        MyHeader, 
    }, 
    data(){
        return{
            count: 1,
        }
    }, 
    methods:{
        CountPlus(){
            this.count = this.count + 1;
        },
        CountMinus(){
            if(this.count > 1){
                this.count = this.count - 1;
            }else {
                this.count = 1;
            }
        },
        addToCart(){
            let obj = {};
            obj.name = "ADILS, Desk";
            obj.img = '/img/table1.jpg';
            obj.price = 129;
            obj.path = "/table1";
            obj.id = 1.2;
            obj.count = this.count;
            obj.newprice = obj.price * obj.count ; 
            this.$store.commit('addToCart', obj);
            this.$store.commit('Subtotal');
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .main{
        display: flex;
        flex-direction: row;
        align-items: start;
        justify-content: center;
        height: 580px;
        &-img{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 720px; 
        }
        &-description{
            display: flex;
            justify-content: start;
            flex-direction: column;
            align-items: start;
            width: 680px;
            height: 580px;
            margin-left: 40px;
            &__title{
                font-family: 'Clash Display', sans-serif;
                color: #2A254B;
                font-weight: 400;
            }
            &__price{
                font-family: 'Satoshi', sans-serif;
                font-size: 24px;
                color: #2A254B;
                border-bottom: 2px solid #EBE8F4;
                width: 680px;
            }
            &__description{
                font-family: 'Clash Display', sans-serif;
                color: #2A254B;
                font-size: 16px;
                margin-top: 40px;
                margin-bottom: 10px;
            }
            &__about{
                font-family: 'Satoshi', sans-serif;
                color: #2A254B;
                font-size: 16px;
            }
            &__stepper{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-evenly;
                background-color: #EBE8F4;
                width: 122px;
                height: 46px;
                &__btn{
                    border: none;
                    cursor: pointer;
                    background-color: #EBE8F4;
                    font-family: 'Satoshi', sans-serif;
                    font-size: 16px;
                }
                &__count{
                    font-family: 'Satoshi', sans-serif;
                    font-size: 16px;
                    width: 20px;
                    border: none;
                    outline: none;
                    text-align: center;
                    background-color: #EBE8F4;

                }
            }
            &__btn{
                background-color: #2A254B;
                border: none;
                color: white;
                font-family: 'Satoshi', sans-serif;
                width: 143px;
                height: 56px;
                margin-top: 60px;
                cursor: pointer;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
.img{
    width: 720px;
    height: 580px;
}
</style>