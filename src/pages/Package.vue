<template>
    <div class="container">
        <PriceCard :packageData="item" v-for='item in packageData' :key="item.package_id"/>     
    </div>
</template>

<script>
import PriceCard from "@/components/PriceCard.vue";
export default {
    name:'Package',
    components:{
        PriceCard
    },
    data() {
        return {
            packageData:[
                  { package_id:1,
                    type:"套餐一",
                    description:"70GB高校云盘，限峰值带宽7M",
                    created_at:"111",
                    update_at:"20230312",
                    money:1233
                  },
                  { package_id:2,
                    type:"套餐二",
                    description:"50GB高校云盘，限峰值带宽5M",
                    created_at:"222",
                    update_at:"20230312",
                    money:1233
                  },
                  { package_id:3,
                    type:"套餐三",
                    description:"30GB高校云盘，限峰值带宽3M",
                    created_at:"333",
                    update_at:"20230312",
                    money:1233
                  },
                ]
        }
    },
}
</script>

<style>
.container{
    display:flex;
    flex-wrap: wrap;
}
</style>