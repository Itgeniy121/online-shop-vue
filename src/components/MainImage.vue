<template >
   <div class="hero">
    <div class="hero-info">
        <div class="hero-info-titlee">
        <h2 class="hero-info-title">
            Luxury homeware for people who love timeless design quality
        </h2>
        <span class="hero-info-desc">Shop the new Spring 2022 collection today</span>
        </div>
        <button @click="scrollUp" class = 'hero-info-btn'>View collection</button> 
    </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        scrollUp(){
            this.$emit('scrollUp');
        }
    }
    
}
</script>
<style lang="scss" scoped>
    .hero{
        height: 704px;
        background: url(https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
        background-size: cover;
        display: flex;
        &-info{
            display: flex;
            flex-direction: column;

            justify-content: start;
            border: none;
            background-color: white;
            width: 630px;
            height: 444px;
            margin-left: 730px;
            margin-top: 130px;
            &-titlee{
                display: flex;
                flex-direction: column;
                margin-top: 48px;
                margin-left: 56px;
                height: 90px;
                width: 513px;
            }
        }
    }
    .hero-info-title{
        font-family: 'Satoshi', sans-serif;
        font-weight: 400;
        color: #22202E;
    }
    .hero-info-desc{
        font-family: 'Satoshi', sans-serif;
        color: #5B5676;
        font-size: 18px;
        font-size: large;
    }
    .hero-info-btn{
                border: none;
                width: 170px;
                height: 56px;
                color: #2A254B;
                background-color: #F9F9F9;
                margin-top: 200px;
                font-family: 'Satoshi', sans-serif;
                margin-left: 40px;
                text-align: center;
                cursor: pointer;
                &:hover{
                    text-decoration: underline;
                }
            }
</style>