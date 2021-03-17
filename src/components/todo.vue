<template>
  <div class="todo">
    <div>
      <p>Nom</p>
      <p>{{ todo.name }}</p>
    </div>

    <div>
      <p>Descripton</p>
      <p>{{ todo.descripton }}</p>
    </div>

    <div>
      <p>Date de création</p>
      <p>{{ todo.created_on }}</p>
    </div>

  </div>
  
</template>

<script>
export default {
  name: 'todo',
  data: () => ({
    todo : {}
  }),
  mounted() {
    this.todo = this.$store.getters.getCurrentTodo;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

</style>
