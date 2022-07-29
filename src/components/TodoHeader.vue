<template>
  <header class="header">
    <h1 :style="{color:skin}">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" >
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="things"
      @keyup.enter='enterFn(things)'
    />
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      things:''
    }
  },
  computed: {
    ...mapGetters(['skin'])
  },
  methods:{
    enterFn(things){
      this.$store.dispatch('todoMain/asyncEnterFn',things)
      this.things=''
    }
  }
}
</script>
