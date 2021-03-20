<template>
  <div class="todoLists">
    <router-link :to="{name : 'todoLists'}" tag="div">
          <div class="go-back"><i class="fas fa-arrow-left"></i> Revenir à mes listes</div>
    </router-link>

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
        <div class="block flex block-2">

            <div class="nom">
                <p class="item-label">Nom du todo</p>
                <input class="item-input" type="text" v-model="newTodo.name">
            </div>

            <div class="description">
                <p class="item-label">Description du todo</p>
                <textarea class="item-input" type="text" v-model="newTodo.description">

                </textarea>
            </div>

            <div class="block-add-todo" @click="addTodo()">
                <button class="btn-add-todo"><i class="fas fa-plus icon-add-todo"></i>Ajouter un todo</button>
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
    editMode : false,
    newTodo : {
        name : "",
        description : ""
    }
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
        },
        addTodo() {
            this.$store.dispatch('addTodo', { todo : this.newTodo, todoList : this.todoList})

            this.newTodo = {
                name : '',
                description : ''
            }
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

.block-2 {
    display: flex;
    justify-content: center;
}

.block-add-todo{ 
    text-align: center;
    flex-grow: 1;
    margin: auto;
    margin-top: 1%;
    margin-bottom: 1%;
}

.description{ 
    text-align: center;
    flex: 1;
}
.nom{ 
    text-align: center;
    flex: 1;
    margin: auto;
}

textarea {
    width: 350px;
    height: 280px;
    box-sizing:border-box
}

.btn-add-todo{
    border: solid black 1px;
    font-size: 20px;
    padding: 1%;
    cursor: pointer;
    border-radius: 10px;
    background-color: #bb9557a9;
}

.btn-add-todo:hover {
    background-color: #BB9457;
    box-shadow: 0px 0px 1px 1px black;
}

.icon-add-todo {
    margin-right: 10px;
}

.go-back {
    cursor: pointer;
    font-size: 30px;
}

.go-back:hover {
    text-decoration: underline;
}

</style>