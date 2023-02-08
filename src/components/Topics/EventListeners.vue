<!-- 
    Intercettazione degli eventi (v-on)
-->
<script>
export default {
    name: 'EventListeners',
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        handleButtonClick() {
            alert('Manigoldo!! Hai cliccato sul pulsante!');
        },
        handleFormSubmit() {
            alert('...ma invece di sottomettere il form, ti mostro questo messaggio :)');
        },
        handleDivClick() {
            alert('Marrano! Hai cliccato sul div!');
        },
        handleButtonClickWithStop() {
            alert('...ma la funzione handleDivClick non viene eseguita perché è stato aggiunto il modificatore.stop');
        }
    }
}
</script>

<template>

    <section id="event-listeners">
        <!--
            Utilizzando la direttiva v-on, possiamo intercettare qualsiasi evento definito in JS (click, submit, keyup...). Questa direttiva, ha 2 sintassi:
            - v-on:nomeevento="callbackFunction()"     -> sintassi estesa
            - @nomeevento="callbackFunction()"         -> sintassi compatta
        -->
        <div>
            <button @click="handleButtonClick">
                Non cliccarmi!
            </button>
        </div>

        <div>
            <!-- E' anche possibile scrivere direttamente il corpo della funzione come callback function (attenzione quando usate questa soluzione) -->
            <button @click="counter--">
                -
            </button>
            {{ counter }}
            <button @click="counter++">
                +
            </button>
        </div>

        <div>
            <!-- Per prevenire il comportamento di default (quello definito in JS) di un evento, possiamo usare la direttiva @nomeevento.prevent -->
            <form action="" @submit.prevent="handleFormSubmit">
                <button type="submit">
                    Questo bottone dovrebbe sottomettere il form...
                </button>
            </form>
        </div>

        <div>
            <!-- Esistono anche altre "sottodirettive" (chiamate event modifiers), ad esempio @nomeevento.stop stoppa la propagazione dell'evento verso il genitore  -->
            <div @click="handleDivClick()">
                <button @click.stop="handleButtonClickWithStop()">
                    Cliccando su questo bottone, si dovrebbero mostrare 2 alert perché il bottone è figlio del div, quindi cliccando sul bottone, in realtà, sto cliccando anche il div...
                </button>
            </div>
        </div>
    </section>

</template>

<style scoped>
</style>