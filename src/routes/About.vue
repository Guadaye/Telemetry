<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2021.Haojun All Rights Reserved.
-->
<template>


    <section class="about-container">

        <div class="about">{{ name }} your Vue.js App</div>
    </section>

</template>
<script>
    import Controller from '@/mixins/controller'

    class AboutController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'About',
            }
        }
    }

    export default new AboutController('pgAbout');

</script>
<style scoped>
/* Local styles for this template */
    .about-container {
        display: inline-block;
        width: 100%;
    }

    .about {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }
</style>
