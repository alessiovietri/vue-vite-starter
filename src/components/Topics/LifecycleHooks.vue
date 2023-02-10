<!-- 
    Lifecycle hooks 
-->
<!-- Documentazione: https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram -->
<script>
export default {
    name: 'LifecycleHooks',
    data() {
        return {
        }
    },
    // Ogni hook del lifecycle di Vue corrisponde a (/è utilizzabile tramite) una funzione che prende il nome dall'hook stesso
    // Esempi di hook:
    beforeCreate() {
        console.log('beforeCreate');
    },
    created() {
        // Qui solitamente facciamo le chiamate API (o comunque otteniamo i dati che ci servono)
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    }
}
</script>

<template>

    <section id="lifecycle-hooks">
    </section>

</template>

<style scoped>
</style>