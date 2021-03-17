<template>
  <div class="todoLists">
    <div class="title">Mes listes</div>
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
  computed: {
    todoLists() {
      return this.$store.getters.getTodoLists;
    }
  },
  mounted() {
    this.$store.dispatch('setTodoLists')
  },
  methods: {
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
}
.item {
  margin: auto;
}
.title {
  margin-bottom: 4%;
  margin-top: 4%;
  font-size: 40px;
  text-align: center;
}
</style>