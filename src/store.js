// Passo 0: creo il file store.js
// Import la funzione reactive() dal pacchetto Vue perché voglio che la mia costante store contenga un oggetto reattivo (come se fosse una proprietà di data())
import { reactive } from 'vue';

// Esporto la mia costante da questo file per renderla disponibile ad altri componenti
export const store = reactive({
    counter: 0
});