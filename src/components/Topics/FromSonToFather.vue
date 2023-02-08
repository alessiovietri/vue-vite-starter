<!-- 
    
-->
<script>
export default {
    name: 'FromSonToFather',
    data() {
        return {
        }
    },
}
</script>

<template>

    <section id="from-son-to-father">
        <button @click="$emit('randomEvent')">
            Invia messaggio a papà
        </button>

        <button @click="$emit('otherRandomEvent', 'TVB')">
            Invia altro messaggio a papà
        </button>
    </section>

</template>

<style scoped>
</style>