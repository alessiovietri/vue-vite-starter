<!-- 
    Reattività e stampa in pagina di valori
-->
<script>
export default {
    name: 'MethodsInVue',
    // Nella proprietà data (che è una funzione) dei nostri componenti inseriamo i dati che vogliamo utilizzare nel SINGOLO componente
    data() {
        // Questa funzione restituisce un oggetto. Ogni proprietà di questo oggetto corrisponderà ad una variabile utilizzabile nel template e nei methods
        return {
            greetings: 'Hello from MethodsInVue!'
        }
    },
    // In questa proprietà definiamo tutte le funzioni che vogliamo rendere utilizzabili in questo componente
    methods: {
        sayHello() {
            return this.greetings;
        }
    }
}
</script>

<template>

    <section id="methods-in-vue">
        <h1>
            <!-- Per stampare in pagina una proprietà di data() o utilizzare un metodo uso la sintassi con le doppie parentesi graffe -->
            {{ sayHello() }}
        </h1>
    </section>

</template>

<style scoped>
</style>