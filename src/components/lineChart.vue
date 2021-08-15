<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2021.Haojun All Rights Reserved.
-->
<template>

    <section class="column-chart">  <!-- Just one main element per template -->
        <div>{{ title }}</div>
        <div>
            <!-- Put your HTML template here-->
            <slot>This is the line chart</slot>
        
        <div>
              <GChart
                    type="LineChart"
                    :data="lineChartData"
                    :options="chartOptions"
                />
        </div>       
               <button @click="getGameLogForLineChart">CheckTheLineData</button>
        </div>
       
    </section>

</template>

<script>
    import Controller from '@/mixins/controller'
    import {GChart} from 'vue-google-charts'

    class LineChartController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )

            // the vm date does not exist until the component is created
            this.vm = {
                someData: "Hello world",                
 
                    chartOptions: {
                        chart: {
                        title: 'Company Performance',
                        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                        }
                    }
                }
                
            // props passed in when using this component
            this.props = {
                title: String
            }
            
            this.injectGetters(['lineChartData']);
            this.injectActions(['getGameLogForLineChart',]);
        }
    


        
    }

    export default new LineChartController('pgLineChart' , {GChart}  );

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

    .component-item {
        flex-grow: inherit;
        flex-shrink: inherit;
        order: inherit;
    }

</style>