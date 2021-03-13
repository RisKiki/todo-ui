<template>
    <div class="header">
      <h1>Todo</h1>
    </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    
  },
  setup() {
    let msg = "Menu"

    return {
      msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/variables';

.header {
  height: 100%;
  text-align: center;
  background-color: $color-1-3;
  color: $color-1-5;
}
</style>
