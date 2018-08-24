<template>
  <div></div>
</template>

<script>
import { apiService } from './../core/api.service';
export default {
  name: 'TodoList',
  beforeCreate() {
    console.log('beforeCreate');
    apiService.getTodos().then((todos) => {
      console.log('[TodoList component] get todos', todos);
    }).catch((err) => { });
  }
}
</script>
