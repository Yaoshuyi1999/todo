export default{
    namespaced: true,
    state: {
        info:[
            {
              name: '吃饭',
              done: false,
              id: 1,
            },
            {
              name: '睡觉',
              done: false,
              id: 2,
            },
            {
              name: '打豆豆',
              done: false,
              id: 3,
            },
          ]
    },
    getters: {
    },
    mutations: {
        del(state,index){
            state.info.splice(index,1)
        },
        choose(state,index){
            state.info[index].done=!state.info[index].done
        },
        enter(state,item){
            state.info.push({
                name:item,
                done:false,
                id:state.info.length+1
            })
        }
    },
    actions: {
        asyncDel(context,index){
            setTimeout(()=>{
                context.commit('del',index);
            },100)
        },
        asyncChoose(context,index){
            setTimeout(()=>{
                context.commit('choose',index);
            },100)
        },
        asyncEnterFn(context,item){
            setTimeout(()=>{
                context.commit('enter',item);
            },100)
        }
    },
}