<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2021.Haojun All Rights Reserved.
-->
<template>

    <section class="home-container">
        <div class = "header">
            <h1>Charts</h1>
            <button @click="backHome">Home</button>    
        </div>
                                      
        <div><pgBarChart></pgBarChart></div>
        <div><pgPieChart></pgPieChart></div>
        <div><pgHeatMap></pgHeatMap></div>
        <div><pgLineChart></pgLineChart></div>
        
    </section>
</template>

<script>
    import pgBarChart from '@/components/barChart.vue'
    import Controller from '@/mixins/controller'
    import pgLineChart from '@/components/lineChart.vue'
    import pgPieChart from '@/components/pieChart.vue'
    import pgHeatMap from '@/components/heatMap.vue'

    class ChartsController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {

                    userName:"",
            }
            this.props = {
                name: String,
            }

            this.injectGetters(['firestoreData']);
            this.injectActions(['changeDataFireStore','readFireStore','testingHelloWorld']);

        }
            backHome(){
                this.$router.push("/");
            };
                   
    }

    export default new ChartsController('pgCharts',{pgBarChart,pgLineChart,pgPieChart,pgHeatMap});

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
