<template>
  <div id="app">
    <nb/>
    <pc/>
    <crm/>
    <!-- <rm></rm> -->
    <!-- <cc></cc> -->
  </div>
</template>

<script>
import nb from './components/NavBar'
import pc from './components/PriceCard'
import crm from './components/ResourceManage'
import rm from './pages/resourceManagement'
import cc from './pages/ContainerCreation'
export default {
  name: 'App',
  components:{nb,rm,cc,pc,crm}
 
}
</script>

<style>
body{
  /* background-color: rgb(215, 210, 210); */
}

</style>
