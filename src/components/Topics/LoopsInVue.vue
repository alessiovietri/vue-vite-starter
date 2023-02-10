<!-- 
    Cicli (v-for)
-->
<script>
export default {
    name: 'LoopsInVue',
    data() {
        return {
            randomInformations: ['A', 'B', 'C']
        }
    }
}
</script>

<template>

    <section id="loops-in-vue">
        <!-- NON mischiare mai v-for e v-if (cioè non inserire v-if e v-for sullo stesso tag) -->
        <ul>
            <!-- Sintassi semplice per ciclare su un array -->
            <li v-for="singleInfo in randomInformations">
                {{ singleInfo }}
            </li>
        </ul>

        <ul>
            <!-- Sintassi con indice di iterazione per ciclare su un array -->
            <li v-for="(otherSingleInfo, i) in randomInformations">
                {{ i }}. {{ otherSingleInfo }}
            </li>
        </ul>

        <ul>
            <!-- Sintassi semplice per ciclare un tot di volte (come un for base classico) -->
            <li v-for="singleNumber in 10">
                {{ singleNumber }}
            </li>
        </ul>
    </section>

</template>

<style scoped>
</style>