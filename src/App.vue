<!--
    Per passare da Composition API a Options API dobbiamo:
    1. Rimuovere l'attributo setup da <script>
    2. Aggiungere l'export default {}
    3. Aggiungere la proprietà name nell'oggetto esportato che avrà come valore il nome del componente (opzionale, ma buona pratica)
-->
<script>
// Passi per utilizzare sottocomponenti
// 1. Importazione
import DataAndMoustaches from './components/Topics/DataAndMoustaches.vue';
import MethodsInVue from './components/Topics/MethodsInVue.vue';
import ConditionalOperators from './components/Topics/ConditionalOperators.vue';
import LoopsInVue from './components/Topics/LoopsInVue.vue';

export default {
    name: "App",
    // 2. Registrazione
    components: {
        DataAndMoustaches,
        MethodsInVue,
        ConditionalOperators,
        LoopsInVue,
    }
};
</script>

<template>
    <!-- 3. Utilizzo (nuovo tag HTML self-closing) -->
    <DataAndMoustaches />

    <MethodsInVue />

    <ConditionalOperators />
    
    <LoopsInVue />
</template>

<!-- Nel componente App.vue, rimuoviamo anche l'attributo scoped su <style> -->
<style>
section {
    border: 1px solid white;
    padding: 10px;
}
</style>
