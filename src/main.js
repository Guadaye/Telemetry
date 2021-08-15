
/*
VUE App's MAIN Component.
Copyright (c) 2021. Haojun Liu. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
//import VueGoogleCharts from 'vue-google-charts'
//Vue.use(VueGoogleCharts)
//registering(globally) our router to our root #app
import store from '@/store'

import router from '@/router'

//import router from 'vue-router';
//Vue.use( router );

//This is were we register every components that is instantiated in this Main Root Component.
import App from '@/App.vue'


//import './plugins/iview.js'

class MainApp {

    constructor () {
        new Vue({
            router,
            store,
            components: { App },
            render: h => h( App ),
        }).$mount('#app');
    }

}

// Main entry point of the application
document.addEventListener('DOMContentLoaded', event => {

    const app = new MainApp();
});