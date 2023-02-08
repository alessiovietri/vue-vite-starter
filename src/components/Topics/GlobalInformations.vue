<!-- 
    
-->
<script>
import { store } from '../../store.js';

export default {
    name: 'GlobalInformations',
    data() {
        return {
            store
        }
    },
    methods: {
        increment() {
            this.store.counter++;
        }
    }
}
</script>

<template>

    <section id="global-informations">
        <button @click="increment">
            Incrementa counter con method
        </button>
        <button @click="store.counter++">
            Incrementa counter direttamente
        </button>
    </section>

</template>

<style scoped>
h3 {
    text-align: center;
}
</style>