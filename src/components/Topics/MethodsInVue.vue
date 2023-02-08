<!-- 
    Metodi
-->
<script>
export default {
    name: 'MethodsInVue',
    data() {
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
            <!-- Per stampare in pagina qualcosa che è il risultato di un metodo uso la sintassi con le doppie parentesi graffe -->
            {{ sayHello() }}
        </h1>
    </section>

</template>

<style scoped>
</style>