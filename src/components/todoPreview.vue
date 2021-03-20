<template>
  <div class="container">
    <div class="name">{{ todo.name }}</div>
    <div class="description">{{ todo.description }}</div>
    <div class="trash"><i class="fas fa-trash" @click="deleteTodo()"></i></div>
  </div>
</template>


<script>


export default {
  name: 'todo',
  props: {
    todo : Object
  },
  methods: {
    deleteTodo() {
      this.$store.dispatch('deleteTodo', {todo: this.todo})
    }
  }
}
</script>

<style scoped>
.container {
    display: grid;
    border: 1px solid black;
    background-color: rgba(111,29,27,1);
    font-size: 20px;
    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
    margin: 5%;
    cursor: pointer;
}

.name {
  grid-column: 1 / 20;
  grid-row: 1;
  font-weight: bold;
  margin-bottom: 2%;
  margin: 5px;
}

.description {
  grid-column: 1 / 20;
  grid-row: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px;
}
.trash {
  grid-column: 20 ;
  grid-row: 1;
  text-align: right;
  margin: 5px;
}

i:hover {
  color: #ff000080;
}
</style>