<template>
    <button class="my-btn" :class="type" :disabled='disabled'>
        {{text}}
    </button>
</template>

<script>
export default {
    props: {
        text:{
            type: String,
            default:'默认按钮'
        },
        type: {
            type: String,
            default:''
        },
        disabled:{
            type: Boolean,
            default: false
        } 
    },
}
</script>

<style scoped>
.my-btn {
    margin-left: 10px;
    background-color: #fff;
    border-radius: 5px;
    border: none;
    border: 1px solid #ccc;
    outline: none;
    width: 100px;
    height: 40px;
    margin-left: 10px;
    margin-bottom: 10px;
    font-weight: 700;
}
.danger{
    background-color: red;
}
.primary{
    background-color: green;
}
</style>
