<!-- 
    Invio di un messaggio da componente figlio a componente padre ($emit())
-->
<script>
export default {
    name: 'FromSonToFather'
}
</script>

<template>

    <section id="from-son-to-father">
        <!-- Scateno l'evento randomEvent verso il padre -->
        <button @click="$emit('randomEvent')">
            Invia messaggio a papà
        </button>

        <!-- Scateno l'evento otherRandomEvent verso il padre, passandogli anche un contenuto informativo (cioè la stringa 'TVB') -->
        <button @click="$emit('otherRandomEvent', 'TVB')">
            Invia altro messaggio a papà
        </button>
    </section>

</template>

<style scoped>
</style>