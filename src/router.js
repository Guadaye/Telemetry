/*
VUE App's MAIN Component.
Copyright (c) 2021. Haojun Liu. All Rights Reserved.
*/
'use strict';

import Vue from 'vue'
import Router from 'vue-router';
Vue.use( Router );

import Home from '@/routes/Home.vue'
import About from '@/routes/About.vue'




export default new Router({
    routes: [
        { path:"/",      name:"Home",  component: Home, props: { name: "Telemetry"} },
        { path:"/about", name:"About", component: About },

    ]
});