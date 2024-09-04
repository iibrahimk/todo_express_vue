<template>
    <div id="addTaskContainer">
        <div>
            <form @submit.prevent = "addNewTask">
            <input type="text" v-model="taskNmae" :class="{focused:focused}" focus>
            <button type="submit" v-if="addingTask"> Add </button>
            <button type="submit" v-else> <div class="spinner"></div> </button>
         </form>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
export default{
    name:"AddTask",
    data(){
        return{
            taskNmae:'',
            addingNewTask: false,
            focused: true,
            addingTask: true
        }
    },
    methods:{
        addNewTask(){
            if(this.taskNmae == ''){
                alert("Task name can't be empty!")
            }
            else{
            this.addingTask = false
            axios.post(import.meta.env.VITE_PORT+'addnewtask', { name: this.taskNmae}).then((res)=>{
                if(res.status == 200){
                    window.location.reload()
                    this.addingTask = false
                    this.taskNmae = ""
                }
            }, (err)=>{
                this.addingTask = false
                alert("Sorry! Something went wrong!")
               
            })
        }
        }
    }
}
</script>
<style scoped>
.focused{
    border: 1px solid blue;
}
#addTaskContainer{
    display: flex;
    justify-content: center;
    margin: 20px;
}
input{
    height: 40px;
    width: 45vw;
    margin: 5px;
    border-radius: 10px;
    font-size: large;
    padding: 0px 5px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
}
button{
    height: 41px;
    background-color: #97bf0d;
    padding: 8px 25px;
    margin: 5px;
    color: white;
    font-weight: 700;
    border:none;
    border-radius: 10px;
    width: auto;

}
button:hover{
    box-shadow: 4px 4px 14px #97bf0d;
    cursor: pointer;
}
form{
    display: flex;
    flex-direction: row;
}
.spinner {
  width: 18px;
  height: 18px;
  border: 5px solid rgba(0, 0, 0, 0.1);  
  border-top: 5px solid white;          
  border-radius: 50%;                    
  animation: spin 1s linear infinite;   
}

@keyframes spin {
  0% {
    transform: rotate(0deg);            
  }
  100% {
    transform: rotate(360deg);       
  }
}
</style>