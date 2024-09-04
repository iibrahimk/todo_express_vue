<template>
    <div>
        
        <Header/>
        <AddTask/>
        <TodoList/>
    </div>
</template>
<script>
import Header from '../components/Header.vue';
import AddTask from '../components/AddTask.vue';
import TodoList from '../components/TodoList.vue';
export default{
    name:"mainView",
    components:{
        Header,
        AddTask,
        TodoList
    }
}
</script>
