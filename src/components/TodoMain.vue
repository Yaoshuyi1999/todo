<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:item.done}" v-for="(item,index) in info" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" @click="chooseFn(index)"/>
        <label>{{item.name}}</label>
        <button class="destroy" @click="delFn(index)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
export default {
  computed: {
    info(){
      return this.$store.state.todoMain.info
    }
  },
  methods: {
    delFn(index){
      this.$store.dispatch('todoMain/asyncDel',index)
    },
    chooseFn(index){
      this.$store.dispatch('todoMain/asyncChoose',index)
    }
  }
}
</script>
