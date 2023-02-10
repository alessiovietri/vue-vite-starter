<!-- 
    Magazzino di informazioni globali (store.js)
-->
<script>
// Passo 0: vedi file store.js
// Passo 1: importo la costante store nel mio componente
import { store } from '../../store.js';

export default {
    name: 'GlobalInformations',
    data() {
        return {
            // Passo 2: registro store in data() (per accedervi con this)
            store
        }
    },
    methods: {
        increment() {
            // Posso sia leggere, sia scrivere in store, sia dall'oggetto esportato (methods o altro)...
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
        <!-- ...sia nel template -->
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