<template>
    <div class="container">
        <PriceCard/>
        <PriceCard/>
        <PriceCard/>
        <PriceCard/>
        <PriceCard/>
        <PriceCard/>
    </div>
</template>

<script>
import PriceCard from "@/components/PriceCard.vue";
export default {
    components:{
        PriceCard
    }
}
</script>

<style>
.container{
    display:flex;
    flex-wrap: wrap;
}
</style>