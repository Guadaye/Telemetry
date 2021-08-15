<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2021.Haojun All Rights Reserved.
-->
<template>

    <section class="line-chart">  <!-- Just one main element per template -->
        <div>{{ title }}</div>
        <div>
            <!-- Put your HTML template here-->
            <slot>This is the pie chart</slot>
        
        <div>
              <GChart
                    type="PieChart"
                    :data="chartData"
                    :options="chartOptions"
                />
        </div>       
               <button @click="getDataForChart">CheckTheGameWinStatus</button>
        </div>
       
    </section>

</template>

<script>
    import Controller from '@/mixins/controller'
    import {GChart} from 'vue-google-charts'

    class PieChartController extends Controller {

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
            
            this.injectGetters(['chartData']);
            this.injectActions(['getDataForChart',]);
        }
    
    
        
    }

    export default new PieChartController('pgPieChart' , {GChart}  );

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