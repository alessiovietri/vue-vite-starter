<!-- 
    
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
            <li v-for="singleInfo in randomInformations">
                {{ singleInfo }}
            </li>
        </ul>

        <ul>
            <li v-for="(otherSingleInfo, i) in randomInformations">
                {{ i }}. {{ otherSingleInfo }}
            </li>
        </ul>

        <ul>
            <li v-for="singleNumber in 10">
                {{ singleNumber }}
            </li>
        </ul>
    </section>

</template>

<style scoped>
</style>