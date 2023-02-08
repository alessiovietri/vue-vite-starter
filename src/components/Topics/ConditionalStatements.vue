<!-- 
    Istruzioni condizionali (v-if e v-show)
-->
<script>
export default {
    name: 'ConditionalStatements',
    data() {
        return {
            numberOne: 1,
            numberTwo: 2
        }
    }
}
</script>

<template>

    <section id="conditional-statements">
        <!-- v-if rimuove dall'HTML se la condizione non è soddisfatto -->
        <div v-if="numberOne % 2 == 0">
            numberOne è pari
        </div>
        <div v-else>
            numberOne è dispari
        </div>

        <!-- Mentre v-show semplicemente applica lo stile display: none; -->
        <div v-show="numberTwo % 2 == 0">
            numberTwo è pari
        </div>
        <div v-show="numberTwo % 2 != 0">
            numberTwo è dispari
        </div>
    </section>

</template>

<style scoped>
</style>