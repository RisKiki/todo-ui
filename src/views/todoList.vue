<template>
  <div class="todoLists">
    <div class="title">
        <div v-if="!editMode" class="inline">{{ todoList.name }}</div>
        <i v-if="!editMode" @click="switchMode()" class="fas fa-edit icon"></i>
        <input type="text" v-if="editMode" class="inline input-edit-name" v-model="todoList.name"/>
        <i v-if="editMode" @click="validate()" class="fas fa-check-square icon"></i>
    </div>
    <div class="date-creation">Crée le : {{ getDate() }}</div>
    <div class="flex">
        <div class="block">
            <div class="item" v-for="todo in todoList.todo_list" :key="todo.id">
                <todoPreview :todo="todo"/>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import todoPreview from "@/components/todoPreview.vue"


export default {
  name: 'todoList', 
  data: () => ({
        editMode : false
  }),
  components: {
        todoPreview
  },
  computed: {
    todoList() {
        return this.$store.getters.getTodoList;
    },
    idTodo() {
        return this.$route.params.id
    }
  },
  mounted() {
        this.$store.dispatch('getTodoList', {id :this.$route.params.id})
  },
  methods: {
        getDate() {
            if (this.todoList.created_on)
                return this.todoList.created_on.split(' ')[0]
            else 
                return ''
        },
        switchMode() {
            this.editMode = !this.editMode
        },
        validate() {
            this.switchMode();
            const newTodoList = {
                id : this.todoList.id,
                name : this.todoList.name,
                todo_list : this.todoList.todo_list
            }
            this.$store.dispatch('updateTodoList', newTodoList)
        }
    }
}
</script>

<style scoped>
.input-edit-name {
    border: none;
    height: 100%;
    font-size: 40px;
    text-align: center;
    background-color: #99582A;
    border:1px solid  black;
}

.todoLists {
  margin-right: 20%;
  margin-left: 20%;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.inline {
    display: inline-block;
    margin-right: 2%;
}
.icon {
    cursor: pointer;
}

.item {
  width: 100%;
}

.date-creation {
    margin-bottom: 4%;
    margin-top: 1%;
    font-size: 20px;
    text-align: center;
}
.title {
  margin-bottom: 1%;
  margin-top: 4%;
  font-size: 40px;
  text-align: center;
}

.block {
    height: 500px;
    width: 400px;
    margin: auto;
    background-color: #BB9457;
}
</style>