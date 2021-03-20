<template>
  <div class="container">
      <div class="wrapper">
        <div class="name">{{ todo.name }}</div>
        <div class="trash"><i class="fas fa-trash" @click="deleteTodo()"></i></div>
        <div class="edit"><i class="fas fa-edit" @click="editTodo()"></i></div>
      </div>
      <div class="description">{{ todo.description }}</div>
  </div>
</template>


<script>


export default {
  name: 'todo',
  props: {
    todo : Object
  },
  data: () => ({
    editMode : false
  }),
  methods: {
    deleteTodo() {
      this.$store.dispatch('deleteTodo', {todo: this.todo})
    },
    editTodo() {
      this.$emit('editTodoClicked', {todo : this.todo})
    }
  }
}
</script>

<style scoped>
.container {
    border: 1px solid black;
    background-color: rgba(111,29,27,1);
    font-size: 20px;
    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.75);
    margin: 5%;
    cursor: pointer;
}

.wrapper {
    display: grid;
    grid-template-columns: 10fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 
    "name edit trash";
}

.name {
  grid-area: name;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  margin-bottom: 2%;
  margin: 5px;
}

.description {
  grid-area: description;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px;
}

.trash {
  display: inline-block;
  grid-area: trash;
  text-align: right;
  margin: 5px;
}

.edit {
  display: inline-block;
  grid-area: edit;
  text-align: right;
  margin: 5px;
}

.actions {
  grid-column: 2/20 ;
  grid-row: 1;
  margin: 5px;
  background-color: red;
}

i:hover {
  color: #ff000080;
}
</style>