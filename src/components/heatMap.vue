<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2021.Haojun All Rights Reserved.
-->
<template>

    <section class="HeatMap">  <!-- Just one main element per template -->
        <div>{{ title }}</div>
        <div>
            <!-- Put your HTML template here-->
            <slot>This is the HeatMap</slot>
        
        <div class = "chart-area">
           
              <GChart
                    type="BubbleChart"
                    :data="heatMapData"
                    :options="chartOptions"
                    :resizeDebounce="100"
                />
        </div>
        <div>You can filter the result from day 1 to the most recent day</div>
                    <input type="text"  v-model.number="dayCheck" ><br>
           
               <button @click="loadMap">GetGamesLogForHeatMap</button>
        </div>
       
    </section>

</template>

<script>
    import Controller from '@/mixins/controller'
    import {GChart} from 'vue-google-charts'

    class HeatMapController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )

            // the vm date does not exist until the component is created
            this.vm = {
                someData: "Hello world",                
                    dayCheck:0,
                    chartOptions: {
                        chart: {
                        title: 'Games Played Time Every Day',
                        width:100,
                        height:500,
                        frontSize:50,
                        }
                    }
                }
                
            // props passed in when using this component
            this.props = {
                title: String
            }
            
            this.injectGetters(['chartData','heatMapData']);
            this.injectActions(['getGamesLogForHeatMap',]);
        }        

        loadMap(){
            this.getGamesLogForHeatMap(this.dayCheck);
        }

    }

    export default new HeatMapController('pgHeatMap' , {GChart}  );

</script>
<style scoped>
    /*
    Add "scoped" attribute to limit CSS to this component only <style scoped>
    styles that are specific to this component only, not sub-children
    */
    .component-style {
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-evenly;
        align-content: flex-start;
        align-items:flex-start;
    }
    .chart-area{
        width:100;
    }
    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>