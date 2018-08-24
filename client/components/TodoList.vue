<template>
  <div>
    <b-card-group v-for="todo in todos" v-bind:key="todo._id" deck>
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" :title="todo.title" img-top>
        <p class="cart-text">
          {{ todo.content }}
        </p>
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
  beforeCreate() {
    console.log('beforeCreate');
    apiService.getTodos().then((todos) => {
      console.log('[TodoList component] get todos', todos);
      this.todos = todos;
    }).catch((err) => {

    })
  }
}
</script>
