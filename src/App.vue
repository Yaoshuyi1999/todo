<template>
  <div>
    <button @click="changeSkin">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>

    <Button></Button>
    <!-- type:danger,primary -->
    <Button type="danger" text='危险按钮'></Button>
    <Button type="primary" text='主要按钮'></Button>
    <!-- text:默认按钮 -->
    <Button text='我喜欢的按钮' disabled=true></Button>
    <!-- -->


  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import Button from './components/button'
export default {
  data() {
    return {}
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
    Button
  },

  created() {},

  methods: {
    changeSkin(){
      this.$store.dispatch('peeling/changeSkin')
    }
  },
}
</script>

<style scoped></style>
