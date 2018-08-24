<template>
  <div>
    <h1>ToDo List</h1>
    <TodoList />
    <Form />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import Form from './components/Form.vue';

export default {
  components: {
    TodoList,
    Form
  }
}
</script>

<style>

</style>


