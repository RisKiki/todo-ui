<template>
  <div class="page-container">

    <div>
      <Menu />
    </div>

    <div class="content">
      <router-view/>
    </div>

  </div>
</template>
<script>
import menu from '@/components/menu.vue'
export default {
  components:{
    Menu : menu,
  },
}

</script>

<style scoped>

.page-container {
	display : flex;
	flex-direction : column;
	min-height : 100vh;
}
  
.content {
  flex-grow : 1;
  background-color: #99582A;
}
</style>
