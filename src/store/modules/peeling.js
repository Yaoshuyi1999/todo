export default{
    namespaced: true,
    state: {
        color:'red',
    },
    getters: {
    },
    mutations: {
        change(state,changeColor){
            state.color=changeColor
        }
    },
    actions: {
        changeSkin(context){
            setTimeout(()=>{
                context.commit('change','green');
            },100)
        }
    },
}