<template>
    <div>
        <h3 style="text-align:center;">Current Tasks</h3>
    </div>
    <div v-if="fetchinTask">
        <div class="spinner"></div>
    </div>
    <div id="taskList" v-else>
        <div v-if="allTaks.length == 0">
            <h3 style="text-align: center; margin: 50px; color: green;">No pending tasks!</h3>
        </div>
        <div v-for="task in allTaks" id="tasks" v-else>
            <div id="individualTasks" :class="{ pendigTask: !task.completed }">
                <p id="taskName" :class="{ taskDone: task.completed, taskPending: !task.completed }">{{ task.body }}<span
                        v-if="task.completed" style="color:green"> &#10003;</span></p>
                <p v-if="task.completed" style="color:green"> Done</p>
                <div v-else style="display: flex; flex-direction: row;">
                <p style="color:peru" >In Progress</p>
                <button v-if="!task.completed" id="doneIcon" @click.prevent="markasDone(task)" >Mark done!</button>
            </div>
            </div>
            <div id="buttons">
                
                <img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" id="deleteIcon" @click.prevent="deleteTask(task)">
            </div>

        </div>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    name: 'TaksList',
    data() {
        return {
            allTaks: [],
            fetchinTask: true
        }
    },
    methods: {
        gettingAlltasks() {
            this.fetchinTask = true
            setTimeout(() => {
                console.log(import.meta.env.VITE_PORT)
                axios.get(import.meta.env.VITE_PORT + 'getalltodos').then((res) => {
                    this.allTaks = res.data
                    this.fetchinTask = false
                })
            }, 1000)
        },
        deleteTask(task){
            axios.delete(import.meta.env.VITE_PORT+`deletetask/${task.taskid}`).then((res)=>{
                if(res.status == 200){
                    this.gettingAlltasks()
                }
            }, (err)=>{
                alert("Sorry! Something went wrong!")
            })
        },
        markasDone(task){
            axios.put(import.meta.env.VITE_PORT+`updateTask/${task.taskid}`).then((res)=>{
                if(res.status == 200){
                    this.gettingAlltasks()
                }
            }, (err)=>{
                alert("Sorry! Something went wrong!")
            })
        }
    },
    mounted() {
        this.gettingAlltasks()
    }
}
</script>
<style scoped>
#taskList {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    max-height: 80vh;
    overflow: auto;
}

#tasks {
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
}

#taskName {
    text-align: left;
}

#individualTasks {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50vw;
    border: 1px solid #97bf0d;
    border-radius: 10px;
    margin: 10px 0px;
    padding: 5px 10px;
}

#buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 4vw;
    border-radius: 10px;
    margin: 10px 0px;
    padding: 5px 10px;
}

#deleteIcon {
    height: 25px;
    margin-top: 25%;
}

#deleteIcon:hover {
    transform: scale(1.1);
    cursor: pointer;
}
#doneIcon{
    background-color:green;
    color: white;
    border: none;
    padding: 3px 8px !important;
    margin-left: 10px;
    text-align: center;
    height: 20px !important;
    margin-top: 10%;
}
#doneIcon:hover {
    cursor: pointer;
}

.pendigTask {
    border: 1px solid peru !important;
}

.taskDone {
    color: green;
}

.pendigTask {
    color: peru;
}

.spinner {
    position: absolute;
    top: 45%;
    left: 45%;
    width: 68px;
    height: 68px;
    border: 15px solid rgba(0, 0, 0, 0.1);
    border-top: 15px solid #97bf0d;
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