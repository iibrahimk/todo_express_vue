<template>
    <div>
        <div id="header">
            <div id="leftItems">
                <div>
                    <img id="vueViteImg" src="https://repository-images.githubusercontent.com/419951272/4313c939-0318-43bf-ba85-b78cca43dedc">
                </div>
                <div>
                   <img id="vueViteImg" src="https://miro.medium.com/v2/resize:fit:1400/1*i2fRBk3GsYLeUk_Rh7AzHw.png">
                </div>
                <div>
                    <img id="vueViteImg" style="background-color: white;" src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png">
                </div>

            </div>
            <div id="rightItems">
                <div>
                    <p>Daily Tasks, {{ time }} , {{ date }} - {{ month }} - {{ year }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "Header",
    data(){
        return{
            currentTimestamp: Date.now(),
            date: "",
            month:"",
            year:"",
            time:"",

        }
    },
    methods:{
        checkTime(){
            let minuite = parseInt(new Date(this.currentTimestamp).getMinutes())
            let hours = parseInt(new Date(this.currentTimestamp).getHours())
            if(minuite<10){
                minuite = "0"+minuite
            }
            if(hours < 10){
                hours = "0"+hours
            }
            this.time = hours + " : " + minuite
        }
    },
    mounted(){
        this.date = parseInt(new Date(this.currentTimestamp).getDate())
        if(this.date<10){
            this.date = "0"+this.date
        }
        this.month = parseInt(new Date(this.currentTimestamp).getMonth()+1)
        if(this.month<10){
            this.month = "0"+this.month
        }
        this.year = parseInt(new Date(this.currentTimestamp).getFullYear())
        let minuite = parseInt(new Date(this.currentTimestamp).getMinutes())
        let hours = parseInt(new Date(this.currentTimestamp).getHours())
        if(minuite<10){
                minuite = "0"+minuite
            }
            if(hours < 10){
                hours = "0"+hours
            }
        this.time = hours + " : " + minuite
        setInterval(()=>{
            this.checkTime()
        },60000)
    }

}
</script>
<style>
#header{
    width: 70vw;
    margin: auto;
    color:white;
    background-color: grey;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#leftItems{
    display: flex;
    flex-direction: row;
}
#vueViteImg{
    height: 50px;
    aspect-ratio: 3/1.5;
    margin-right: 10px;
}
</style>