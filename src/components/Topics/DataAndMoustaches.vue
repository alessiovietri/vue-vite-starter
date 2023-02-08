<!-- 
    Reattività e stampa in pagina di valori
-->
<script>
export default {
    name: 'DataAndMoustaches',
    // Nella proprietà data (che è una funzione) dei nostri componenti inseriamo i dati che vogliamo utilizzare nel SINGOLO componente
    data() {
        // Questa funzione restituisce un oggetto. Ogni proprietà di questo oggetto corrisponderà ad una variabile utilizzabile nel template e nei methods
        return {
            greetings: 'Hello from DataAndMoustaches!'
        }
    }
}
</script>

<template>

    <section id="data-and-moustaches">
        <h1>
            <!-- Per stampare in pagina una proprietà di data() uso la sintassi con le doppie parentesi graffe -->
            {{ greetings }}
        </h1>
    </section>

</template>

<style scoped>
</style>