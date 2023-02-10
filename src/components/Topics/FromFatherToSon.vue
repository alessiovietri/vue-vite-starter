<!-- 
    Passaggio di dati da componente padre a componente figlio (props)
-->
<script>
export default {
    name: 'FromFatherToSon',
    // Sintassi 1
    props: {
        message: String,
        count: Number,
    },
    // Sintassi 2
    // props: {
    //     message: {
    //         type: String,
    //         default: 'Ciao dal figlio'
    //     },
    //     count: Number,
    // },
    // Sintassi 3
    // props: [
    //     'message',
    //     'count'
    // ]
}
</script>

<template>

    <section id="from-father-to-son">
        <h1>
            {{ message }}
        </h1>
        <div>
            {{ count }}
        </div>
    </section>

</template>

<style scoped>
</style>