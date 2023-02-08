<!-- 
    
-->
<script>
export default {
    name: 'LifecycleHooks',
    data() {
        return {
        }
    },
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