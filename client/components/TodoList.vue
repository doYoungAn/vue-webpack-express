<template>
  <div>
    <b-card-group v-for="todo in todos" v-bind:key="todo._id" deck>
      <b-card :img-src="todo.image" img-alt="Card image" :title="todo.title" img-top>
        <p class="cart-text">
          {{ todo.content }}
        </p>
        <b-button v-on:click="remove(todo._id)">삭제</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { apiService } from './../core/api.service';
export default {
  name: 'TodoList',
  data() {
    return {
      todos: []
    }
  },
  methods: {
    getTodos() {
      apiService.getTodos().then((todos) => {
        console.log('[TodoList component] get todos', todos);
        this.todos = todos;
      }).catch((err) => {

      });
    },
    remove(id) {
      apiService.deleteTodo(id).then(() => {
        this.getTodos();
      }).catch(() => {

      })
    }
  },
  created() {
    console.log('beforeCreate');
    this.getTodos();
  }
}
</script>
