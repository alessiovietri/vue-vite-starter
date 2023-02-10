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
import ConditionalStatements from './components/Topics/ConditionalStatements.vue';
import LoopsInVue from './components/Topics/LoopsInVue.vue';
import DynamicHtmlAttributes from './components/Topics/DynamicHtmlAttributes.vue';
import MonitoringInputValues from './components/Topics/MonitoringInputValues.vue';
import EventListeners from './components/Topics/EventListeners.vue';
import LifecycleHooks from './components/Topics/LifecycleHooks.vue';
import FromFatherToSon from './components/Topics/FromFatherToSon.vue';
import FromSonToFather from './components/Topics/FromSonToFather.vue';
import ComputedProperties from './components/Topics/ComputedProperties.vue';
import ApiCalls from './components/Topics/ApiCalls.vue';
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
        ConditionalStatements,
        LoopsInVue,
        DynamicHtmlAttributes,
        MonitoringInputValues,
        EventListeners,
        LifecycleHooks,
        FromFatherToSon,
        FromSonToFather,
        ComputedProperties,
        ApiCalls,
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

    <ConditionalStatements />

    <LoopsInVue />

    <DynamicHtmlAttributes />

    <MonitoringInputValues />

    <EventListeners />

    <LifecycleHooks />

    <!-- Per passare una prop, posso sia usare il v-binding, sia usare attributi normali (se ho bisogno di passare stringhe normali) -->
    <!-- Uso il v-bind quando devo passare qualcosa che è il risultato di un'operazione in JS (o un tipo di valore diverso da stringa, come i numeri) -->
    <FromFatherToSon :count="3" message="Ciao dal padre" />

    <!-- Posso reagire ad emit differenti -->
    <FromSonToFather @randomEvent="reactToRandomEvent" @otherRandomEvent="reactToOtherRandomEvent" />

    <ComputedProperties />

    <ApiCalls />

    <div class="test-scss">
        <h3>
            <!-- Qui sto leggendo il contenuto di store (nello specifico, la proprietà counter) -->
            {{ store.counter }}
        </h3>

        <GlobalInformations />
    </div>
</template>

<!-- Nel componente App.vue, rimuoviamo anche l'attributo scoped su <style> -->
<!-- E se voglio utilizzare sass, aggiungo l'attributo lang="scss" -->
<style lang="scss">
// Qui possiamo anche importare dei file .scss (attenzione al percorso)
@import './styles/main';

section {
    border: 1px solid black;
    padding: 10px;
}

.test-scss {
    border: 3px solid red;

    > h3 {
        text-decoration: underline;
    }
}
</style>
