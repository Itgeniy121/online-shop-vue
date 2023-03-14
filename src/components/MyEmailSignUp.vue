<template >
    <div class = 'box' id="box">
        <div class="box-top-content">
            <div class="top-box">
                <h2 class = "title">Join the club and get the benefits</h2>
                <span class = 'description'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</span>
            </div>
            </div>
      <div class="checks">
        <div class="subscribe-check">
          <img src="/svg/check.svg" alt="checkimg" class="subscribe-check__img">
          <span class="subscribe-check__name">Exclusive offers</span>
        </div>

        <div class="subscribe-check">
          <img src="/svg/check.svg" alt="checkimg" class="subscribe-check__img">
          <span class="subscribe-check__name">Free events</span>
        </div>

        <div class="subscribe-check">
          <img src="/svg/check.svg" alt="checkimg" class="subscribe-check__img">
          <span class="subscribe-check__name">Large discounts</span>
        </div>  
    </div>
    <div class="email">
          <input class="email-adres" placeholder="your@email.com" v-model="input">
          <button class ="email-btn" @click="ClearEmail">Sign Up</button>
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
        document.getElementById('alert').remove();
        } else{
          let div = document.createElement('div');
          div.id = 'alert'
          div.style = 'color: red; margin-top: 5px; font-family: "Satoshi", sans-serif; font-weight: 100; '
          // div.classList.add('attention');
          div.innerHTML = "Unccorect email adress";
          let box = document.getElementById('box')
          box.append(div);
          this.input = '';
        }
       
      }
    }
}
</script>
<style lang="scss" scoped>
    .box{
        height: 444px;
        background: url('/src/assets/Email.jpg');
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &-top-content{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 494px;
            height: 165px;
        }
    }
    .top-box{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 494px;
        height: 111px;
        flex-direction: column;
    }
     .title{
        color: white;
        font-family: 'Clash Display', sans-serif;
        font-weight: 400;
     }
      .description{
        color: white;
        font-family: 'Clash Display', sans-serif;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
      }
      .checks{
        height: 54px;
        display: flex;
        justify-content: start;
        align-items: start;
        flex-direction: row;
      }
  .email{
    display: flex;
    align-items: center;
    justify-content: center;
    &-btn{
    width: 118px;
    height: 56px;
    border: none;
    background-color: #2A254B;
    color: white;
    font-family: 'Satoshi', sans-serif;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
    };
    &-adres{
        outline: none;
        width: 354px;
        height: 55px;
        border: none;
        &::placeholder{
          color:#C5BCBF;
          text-align: center;
          font-family: 'Satoshi', sans-serif;
        }
    }
  }
  .subscribe-check{
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 131px;
    height: 24px;
    &__name{
      color: white;
      font-family: 'Satoshi', sans-serif;
      font-weight: 100;
    };
    &__img{
      margin-right: 5px;
    }
  }
  
</style>