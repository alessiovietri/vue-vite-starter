<!-- 
    Chiamate API (axios)
-->
<!-- 
    Passo 1: installare libreria axios
    - Documentazione: https://axios-http.com/docs/intro
    - Comando: npm install axios
 -->
<script>
// Passo 2: importare libreria axios
import axios from 'axios';

export default {
    name: 'ApiCalls',
    data() {
        return {
            baseUrl: 'https://flynn.boolean.careers/exercises/api/',
            numbers: [],
            minNumber: 1,
            maxNumber: 100,
            nItems: 10
        }
    },
    // Solitamente, si sceglie di recuperare i dati da reperire via API il prima possibile.
    // Il primo hook in cui possiamo far partire la chiamata è created()
    created() {
        // La sintassi da utilizzare per fare delle chiamate AJAX con axios (vedi doc.) è axios.METODO().then() -> METODO può essere get, post, put...
        axios
            .get( // Qui sto facendo una chiamata AJAX con metodo GET
                this.baseUrl + 'array/integers', // L'url al quale inviare la richiesta HTTP può essere anche costruito (come in questo caso, con la concatenazione di stringhe)
                {                                // E' inoltre possibile passare dei parametri nella nostra richiesta
                    params: {                    // Il metodo GET prevede che i parametri siano passati come un oggetto che contiene la proprietà params, che a sua volta
                        min: this.minNumber,     // è un oggetto le cui proprietà sono i nomi e i valori dei parametri da passare nella richiesta
                        max: this.maxNumber,
                        items: this.nItems
                    }
                }                                // L'url risultante (da url + parametri) sarà: https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=10
            )
            .then((response) => {   // L'unico argomento della funzione then() è una callback function (scritta come arrow function) che ha come argomento l'oggetto contenente la risposta delle API
                console.log(response); // Stampo l'intero oggetto risposta
                console.log(response.data); // Stampo solo il contenuto informativo restituito dalle API

                this.numbers = response.data.response; // Salvo il contenuto informativo che mi serve in data()
            });
    }
}
</script>

<template>

    <section id="api-calls">
        <h2>
            Numeri
        </h2>
        <ul>
            <li v-for="number in numbers">
                {{ number }}
            </li>
        </ul>
    </section>

</template>

<style scoped>
</style>