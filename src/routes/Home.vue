<!--
VFS VUE Single File Component

<pgPlayerInGame name="User"></pgPlayerInGame>

Copyright (c) 2018.Haojun All Rights Reserved.
-->
<template>

    <section class="home-container">
        <div class = "header">
            <h1>Welcome to {{ name }}</h1>
           
            <button  @click="readFireStore">Read</button>
 

            <div>{{firestoreData}}</div>


            
            Replace your name here:<br>
            <input type="text"  v-model="userName" ><br>
               
        <button @click="replaceName">submit</button>
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
            }
            this.props = {
                name: String,
            }

            this.injectGetters(['firestoreData']);
            this.injectActions(['changeDataFireStore','readFireStore','testingHelloWorld']);

        }
            replaceName(){
            this.changeDataFireStore(this.userName);
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
