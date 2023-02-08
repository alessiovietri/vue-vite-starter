<!--
    Per passare da Composition API a Options API dobbiamo:
    1. Rimuovere l'attributo setup da <script>
    2. Aggiungere l'export default {}
    3. Aggiungere la proprietà name nell'oggetto esportato che avrà come valore il nome del componente (opzionale, ma buona pratica)
-->
<script>
import { store } from './store';

// Passi per utilizzare sottocomponenti
// 1. Importazione
import DataAndMoustaches from './components/Topics/DataAndMoustaches.vue';
import MethodsInVue from './components/Topics/MethodsInVue.vue';
import ConditionalOperators from './components/Topics/ConditionalOperators.vue';
import LoopsInVue from './components/Topics/LoopsInVue.vue';
import LifecycleHooks from './components/Topics/LifecycleHooks.vue';
import FromFatherToSon from './components/Topics/FromFatherToSon.vue';
import FromSonToFather from './components/Topics/FromSonToFather.vue';
import GlobalInformations from './components/Topics/GlobalInformations.vue';

export default {
    name: "App",
    data() {
        return {
            store
        }
    },
    // 2. Registrazione
    components: {
        DataAndMoustaches,
        MethodsInVue,
        ConditionalOperators,
        LoopsInVue,
        LifecycleHooks,
        FromFatherToSon,
        FromSonToFather,
        GlobalInformations,
    },
    methods: {
        reactToRandomEvent() {
            console.log('Messaggio ricevuto, caro figlio');
        },
        reactToOtherRandomEvent(data) {
            console.log('Messaggio ricevuto, caro figlio. Mi hai detto:', data);
        },
    }
};
</script>

<template>
    <!-- 3. Utilizzo (nuovo tag HTML self-closing) -->
    <DataAndMoustaches />

    <MethodsInVue />

    <ConditionalOperators />

    <LoopsInVue />

    <LifecycleHooks />

    <FromFatherToSon :count="3" message="Ciao dal padre" />

    <FromSonToFather @randomEvent="reactToRandomEvent" @otherRandomEvent="reactToOtherRandomEvent" />

    <div>
        <h3>
            {{ store.counter }}
        </h3>

        <GlobalInformations />
    </div>
</template>

<!-- Nel componente App.vue, rimuoviamo anche l'attributo scoped su <style> -->
<style>
section {
    border: 1px solid white;
    padding: 10px;
}
</style>
