<template >
    <div class = "footer">
        <div class = "footer-top">
            <div class="footer-top-components">
                <div class="footer-top__menu">
                <span class="title">Menu</span>
                <span class="point">New arrivals</span>
                <span class="point">Best sellers</span>
                <span class="point">Recently viewed</span>
                <span class="point">Popular this week</span>
                <span class="point">All products</span>
            </div>
            <div class="footer-top__categories">
                <span class="title">Categories</span>
                <span class="point">Crockery</span>
                <span class="point">Furniture</span>
                <span class="point">Homeware</span>
                <span class="point">Plant pots</span>
                <span class="point">Chairs</span>
                <span class="point">Crockery</span>
            </div>
            <div class="footer-top__companies">
                <span class="title">Our company</span>
                <span class="point">About us</span>
                <span class="point">Vacancies</span>
                <span class="point">Contact us</span>
                <span class="point">Privacy</span>
                <span class="point">Returns policy</span>
            </div>
            </div>
            <div class="footer-top-email" id="inpuut">
                <span class="footer-top-email__title">Join our mailing list</span>
                <div class = 'input-emaill'>
                    <input class ="input" placeholder="your@email.com" v-model="input">
                    <button class = 'btn' @click = "ClearEmail">Sign up</button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div>
            <span class = 'point'>Copyright 2022 Avion LTD</span>
            </div>

            <div class="icons">
                <img src="/svg/linkedin.svg" alt="linkedin" class = 'img'>
                <img src="/svg/facebook.svg" alt="facebook" class = 'img'>
                <img src="/svg/instagram.svg" alt="inst" class = 'img'>
                <img src="/svg/skype.svg" alt="skype" class = 'img'>
                <img src="/svg/twitter.svg" alt="twit" class = 'img'>
                <img src="/svg/pinterest.svg" alt="pinterest" class = 'img'>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            input: '',
        }
    },
    methods:{
        ClearEmail(){
        if((this.input.indexOf('@') != -1) && (this.input.indexOf('.com') != -1) ||(this.input.indexOf('@') != -1) && (this.input.indexOf('.ru') != -1) ){
        this.input = '';
        document.getElementById('alertt').remove();
        } else{
          let div = document.createElement('div');
          div.id = 'alertt'
          div.style = 'color: red; margin-top: 5px; font-family: "Satoshi", sans-serif; font-weight: 100; '
          // div.classList.add('attention');
          div.innerHTML = "Unccorect email adress";
          let box = document.getElementById('inpuut')
          box.append(div);
          this.input = '';
        }
       
      }
    }
}
</script>
<style lang="scss" scoped>
     .footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 380px;
        background-color: #2A254B;
        &-top{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            height: 310px;
            width: 1300px;
            border-bottom: 2px solid #4E4D93;
            &-components{
                display: flex;
                justify-content: space-between;
                align-items: start;
                flex-direction: row;
                width: 650px;
            }
            &-email{
                display: flex;
                justify-content: start;
                align-items: start;
                flex-direction: column;
                width: 650px;
                height: 206px;
                margin-left: 80px;
                &__title{
                    color: white;
                    font-family: 'Clash Display', sans-serif;
                    font-size: 16px;
                    font-weight: 300;
                    margin-bottom: 10px;
                }
            }
            &__menu{
                display: flex;
                align-items: start;
                justify-content: space-between;
                flex-direction: column;               
                width: 108px;
                height: 175px;
            };
            &__categories{
                display: flex;
                align-items: start;
                justify-content:space-between;
                flex-direction: column;             
                width: 84px;
                height: 206px;
            };
            &__companies{
                display: flex;
                align-items: start;
                justify-content: space-between;
                flex-direction: column;
                width: 105px;
                height: 175px;
            }
        };
        &-bottom{
            display: flex;
            justify-content: space-between;
            height: 78px;
            width: 1300px;
            align-items: center;
            flex-direction: row;
        }
     }
     .title{
        color: white;
        font-family: 'Clash Display', sans-serif;
        font-weight: 350;
     }
     .point{
        color: white;
        font-family: 'Satoshi', sans-serif;
        font-weight: 100;
        font-size: 14px;
        cursor: pointer;
     }
     .input{
        border: none;
        outline: none;
        width: 409px;
        height: 54px;
        background-color: #4E4D93;
        color: white;
        &::placeholder{
            text-align: center;
            color: #8282a0;
            font-family: 'Satoshi', sans-serif;
            font-size: 14px;
        }
     }
     .btn{
    width: 118px;
    height: 56px;
    border: none;
    background-color: white;
    color: #4E4D93;
    font-family: 'Satoshi', sans-serif;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
     }
     .input-emaill{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
     }
     .img{
        cursor: pointer;
     }
     .icons{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 264px;
     }

</style>