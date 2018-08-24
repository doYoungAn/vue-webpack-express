<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="title"
        label="title"
        description="제목을 입력하세요"
      >
        <b-form-input
          id="title"
          type="text"
          v-model="form.title"
          placeholder="정확한 제목을 입력해주세요."
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="content"
        label="content"
        description="내용을 입력해주세요"
      >
        <b-form-textarea
          id="content"
          v-model="form.content"
          placeholder="정확한 내용을 입력해주세요"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { apiService } from './../core/api.service';

export default {
  name: 'Form',
  data() {
    return {
      form: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      console.log('[Form component] Submit');
      apiService.addTodo(this.form.title, this.form.content).then(() => {
        this.form.title = '';
        this.form.content = '';
        this.$emit('created');
      }).catch((err) => {

      });
    },
    onReset(e) {
      e.preventDefault();
      console.log('[Form component] Reset');
      this.form.title = '';
      this.form.content = '';
    }
  }
}
</script>
