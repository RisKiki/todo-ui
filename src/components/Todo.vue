<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    
  },
  setup(props,ctx) {
    let msg = "Todo"

    return {
      msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
