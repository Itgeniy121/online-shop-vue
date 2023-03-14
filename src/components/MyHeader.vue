<template >
    <header class="header">
        <div class="header_top">
            <div class="header_top_search">
                <img  src="/svg/Search.svg" alt="search">
            </div>
            <router-link to="/" class = 'header_logo'>Avion</router-link>
            <div class="header_top_right">
                <div class="header_top_right_cart">
                    <a href="#">
                        <img @click="RouterToCart" src="/svg/Shopping--cart.svg" alt="cart">
                    </a>
                </div>
                <div class="header_top_right_avatar">
                    <a href="#">
                        <img @click = "RouterToProfile" src="/svg/User--avatar--filled--alt.svg" alt="avatar">
                    </a>
                </div>
            </div>
        </div>
        <div class="header-menu">
            <router-link  :to="element.path" v-for="(element, i) of this.$store.state.menu" :key="i" class ='header-menu_link'>
                {{ element.name }}
            </router-link>
        </div>
    </header>
</template>
<script>
export default {
    methods:{
        RouterToCart(){
            this.$router.push('/shopingcart');
        }, 
        RouterToProfile(){
            this.$router.push('/profile');
        }, 

    }
}
</script>
<style lang="scss" scoped>
    .header{
        height: 123px;
        background-color: white;
        align-items: center;
        &-menu{
            height: 62px;
            display: flex;
            justify-content: center;
            align-items: center;
            &_link{
                margin: 0 22px;
                color: #726E8D;
                font-size: 16px;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
    .header_top{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 70px;
        border-bottom: 1px solid #0000001A;
        margin: 0 28px;
    }
    .header_top_right_cart{
        margin-right: 16px;
    }
    .header_top_right{
        display: flex;
        flex-direction: row;
        justify-content: end;
    }
    .header_logo{
        color: black;
        font-family: 'Clash Display', sans-serif;
        text-decoration: none;
        text-align: center;
        &:hover{
            text-decoration: underline;
        }
    }

</style>