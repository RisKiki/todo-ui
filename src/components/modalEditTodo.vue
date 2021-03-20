<template>
  <div :class="{'display-none' : !activated, 'modal-mask' : activated}">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <div>Modification d'un Todo</div>
        </div>

        <div class="modal-body">

          <div class="nom">
              <p class="item-label">Nom du todo</p>
              <input class="item-input" type="text" v-model="todo.name">
          </div>

          <div class="description">
              <p class="item-label">Description du todo</p>
              <textarea class="item-input" type="text" v-model="todo.description">

              </textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button class="validate" @click="validate(true)">Valider</button>
          <button class="cancel" @click="validate(false)">Annuler</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'modalEditTodo',
  props: {
    todo : Object,
    todoListid : String,
    activated : Boolean
  },
  methods: {
    validate(confirmed) {
      this.$emit("exit", {
        isToUpdate : confirmed,
        todo : this.todo
      })
    }
  }
}
</script>

<style scoped>

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

.modal-footer {
  text-align: center;
}

button {
  border: solid black 1px;
  font-size: 20px;
  padding: 1%;
  cursor: pointer;
  border-radius: 10px;
  background-color: #bb9557a9;
  margin : 2%;
}

button:hover {
    background-color: #BB9457;
    box-shadow: 0px 0px 1px 1px black;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
}

.modal-mask {
  display: table;
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

.display-none {
  display: none;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 40%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #BB9457;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  text-align: center;
  font-size: 40px;
}

.modal-body {
  margin: 20px 0;
  font-size: 20px;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>