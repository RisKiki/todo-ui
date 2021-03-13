<template>
  <div class="page-container">

    <div class="header">
      <Menu />
    </div>

    <div class="content">
      <router-view/>
    </div>

  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
export default {
  components:{
    Menu,
  },
  setup() {
    
  }
}

</script>

<style lang="scss">

.page-container {
    position: relative;
    min-height: 100vh;
}
  
.content {
    padding-bottom: 5rem;
}
</style>
