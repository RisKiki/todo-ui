<template>
  <div class="todoLists">
    <div class="title">Mes listes</div>
    <div class="add-new-list">
      <input class="input-add-new-list" type="text" placeholder="Ajouter une nouvelle liste" v-model="newTodoList.name">
      <button @click="createList()" class="btn-add-new-list"><i class="fas fa-plus icon-add-todo"></i></button>
    </div>
    <div class="flex">
      <div class="item" v-for="todoList in todoLists" :key="todoList.id">
        <todoListPreview :todoList="todoList"/>
      </div>
    </div>
  </div>
</template>


<script>
import todoListPreview from "@/components/todoListPreview.vue"

export default {
  name: 'todoLists',
  components: {
    todoListPreview
  },
  data: () => ({
    newTodoList : {}
  }),
  computed: {
    todoLists() {
      return this.$store.getters.getTodoLists;
    }
  },
  mounted() {
    this.$store.dispatch('getTodoLists')
  },
  methods: {
    createList() {
      this.$store.dispatch('createTodoList', { name : this.newTodoList.name})

      this.newTodoList = {
          name : ''
      }
    }
  }

}
</script>

<style scoped>

.todoLists {
  margin-right: 20%;
  margin-left: 20%;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.item {
  margin: 10px 10px 10px 10px;
}
.title {
  margin-bottom: 2%;
  margin-top: 4%;
  font-size: 40px;
  text-align: center;
}

.btn-add-new-list{
    border: solid black 1px;
    margin-left: 1%;
    font-size: 15px;
    padding: 1%;
    cursor: pointer;
    border-radius: 10px;
    background-color: #bb9557a9;
}

.btn-add-new-list:hover {
    background-color: #BB9457;
    box-shadow: 0px 0px 1px 1px black;
}

.input-add-new-list {
    border: none;
    height: 100%;
    font-size: 20px;
    text-align: center;
    background-color: #99582A;
    border:1px solid  black;
}
</style>