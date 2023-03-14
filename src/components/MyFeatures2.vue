<template >
    <div class = 'features'>
        <div class="hero-info">
        <div class="hero-info-titlee">
        <h2 class="hero-info-title">
            It started with a small idea
        </h2>
        <span class="hero-info-desc">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</span>
        </div>
        <button @click="scrollUp" class = 'hero-info-btn'>View collection</button> 
    </div>
    <div class="img">
    </div>
    </div>
</template>
<script>
export default {
    methods:{
        scrollUp(){
            this.$emit('scrollUp');
        }
    }
}
</script>
<style lang="scss" scoped>
    .features{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 598px;
    }
    .hero-info{
            display: flex;
            flex-direction: column;

            justify-content: start;
            border: none;
            background-color: #2A254B;
            width: 634px;
            height: 478px;
            &-titlee{
                display: flex;
                flex-direction: column;
                margin-top: 48px;
                margin-left: 56px;
                height: 90px;
                width: 513px;
            }
        }
    .hero-info-title{
        // font-family: 'Satoshi', sans-serif;
        font-family: 'Clash Display', sans-serif;
        font-weight: 400;
        color: white;
    }
    .hero-info-desc{
        font-family: 'Satoshi', sans-serif;
        color: white;
        font-size: 18px;
        font-size: large;
    }
    .hero-info-btn{
                border: none;
                width: 170px;
                height: 56px;
                color: white;
                background-color: #4E4D93;
                margin-top: 220px;
                font-family: 'Satoshi', sans-serif;
                cursor: pointer;
                margin-left: 40px;
                text-align: center;
                &:hover{
                    text-decoration: underline;
                }
            };
.img{
    background: url('/src/assets/ImageBlock.jpg');
    width: 630px;
    height: 478px;
}
</style>