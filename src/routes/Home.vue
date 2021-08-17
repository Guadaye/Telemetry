<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>

    <section class="home-container">
        <div class = "header">
            <h1>Welcome to {{ name }}</h1>
            <div>
                <button  @click="goToCharts">GoToCharts</button>
            </div>
            <button  @click="readFireStore">Read</button>
 

            <div>{{firestoreData}}</div>

             <div>   
                <h2>Add/change a player's stats</h2>       
                Add a player's name here:<br>
                <input type="text"  v-model="userName" ><br>
                How many games this person won?<br>
                <input type="number"  v-model.number="gamesWon" ><br> 
                <button @click="replaceName">submit</button>
            </div>

            <div>
                <h2>Add/Change the games played at day x:</h2>
                 Which day is it?(Enter a day number from day 1 to day x)<br>
                <input type="number"  v-model.number="localDay" ><br>
                How many games have been played at different time frame that day?<br>
                0-6<br>
                <input type="number"  v-model.number="timeFrame1" ><br> 
                7-12<br>
                <input type="number"  v-model.number="timeFrame2" ><br> 
                13-18<br>
                <input type="number"  v-model.number="timeFrame3" ><br> 
                19-24<br>
                <input type="number"  v-model.number="timeFrame4" ><br> 
                <button @click="replaceDay">submit</button>
            </div>

        </div>
    </section>
</template>

<script>

    import Controller from '@/mixins/controller'

    class PlayerHomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                    userName:"",
                    gamesWon:0,
                    localDay:1,
                    timeFrame1:0,
                    timeFrame2:0,
                    timeFrame3:0,
                    timeFrame4:0,

            }
            this.props = {
                name: String,
            }

            this.injectGetters(['firestoreData']);
            this.injectActions(['changeDataFireStore','readFireStore','testingHelloWorld','uploadDayGameStats']);

        }
            replaceName(){
            this.changeDataFireStore({uName:this.userName,theGamesWon:this.gamesWon});
        }

        replaceDay(){
            this.uploadDayGameStats({day:this.localDay,timeFrame:{1:this.timeFrame1,2:this.timeFrame2,3:this.timeFrame3,4:this.timeFrame4}});
        }
            goToCharts(){
                 this.$router.push("/Charts");
            }
    }

    export default new PlayerHomeController('pgHome');

</script>
<style scoped>
    /* Local styles for this template */
    .home-container {
        display: inline-block;
        width: 200vh;
         height: 100vh;
                background-color: rgb(184, 76, 76);
                        color: rgb(255, 255, 255);                            
    }

    .header {
        margin:2vw;
        border: 1px solid black;
        text-align: center;
    }

    select, input, button {
        font-size: 1em;
        font-weight: 300;
        height: 1.4em;
        width: 20em;
    }

    button {
        padding: .5em;
        margin: .25em;
        padding-bottom: 1.5em;
    }
</style>
