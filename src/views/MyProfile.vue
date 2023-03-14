<template >
    <div>
        <MyHeader></MyHeader>
        <div class="soon">there is nothing here yet(</div>
    </div>
</template>
<script>
import MyHeader from "@/components/MyHeader";
export default {
    components:{
        MyHeader,
    }
    
}
</script>
<style lang="scss" scoped>
.soon{
    color: #2A254B;
    font-size: 36px;
    font-family: 'Clash Display', sans-serif;   
}
    
</style>