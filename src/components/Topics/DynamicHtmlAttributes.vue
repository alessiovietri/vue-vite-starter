<!-- 
    "Dinamicizzazione" degli attributi dei tag html (v-bind)
-->
<script>
export default {
    name: 'DynamicHtmlAttributes',
    data() {
        return {
            divClasses: 'green-text'
        }
    },
    methods: {
        getDivClasses() {
            const myPadding = Math.floor(Math.random() * 4);

            return 'p-' + myPadding.toString();
        }
    }
}
</script>

<template>

    <section id="dynamic-html-attributes">
        <!--
            Per rendere dinamico/reattivo un attributo HTML si usa il v-binding. Questa direttiva, ha 2 sintassi:
            - v-bind:attributo  -> sintassi estesa
            - :attributo        -> sintassi compatta
        -->

        <!-- E' possibile usare contemporaneamente l'attributo statico e l'attributo dinamico -->
        <!-- Il risultato è l'unione dei 2 valori (in questo caso: "bordered green-text") -->
        <div class="bordered" v-bind:class="divClasses">
            Div con classi applicate grazie ad una proprietà in data
        </div>

        <!-- E' anche possibile inserire nel v-binding il risultato di un metodo -->
        <div :class="getDivClasses()">
            Div con classi applicate grazie ad una proprietà in data
        </div>
    </section>

</template>

<style scoped>
.bordered{
    border: 3px solid blue;
}
.green-text{
    color: green;
}
.p-0 {
    padding: 0;
}
.p-1 {
    padding: 0.5rem;
}
.p-2 {
    padding: 0.75rem;
}
.p-3 {
    padding: 1rem;
}
</style>