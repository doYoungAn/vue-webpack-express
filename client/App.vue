<template>
  <div>
    <h1>ToDo List</h1>
    <TodoList ref="todoList"/>
    <Form @created="created" />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import Form from './components/Form.vue';

export default {
  components: {
    TodoList,
    Form
  },
  methods: {
    created() {
      console.log('ssssss', this.$refs.todoList);
      this.$refs.todoList.getTodos();
    }
  }
}
</script>

<style>

</style>


