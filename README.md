# Vue-Vite Starter template

## Funzionalità
- Inizializzazione di Vue
- Inizializzazione progetto Vue con Vite
- Funzionalità e caratteristiche di Vue
-- Reattività e stampa in pagina di valori
-- Istruzioni condizionali (v-if e v-show)
-- Cicli (v-for)
-- "Dinamicizzazione" degli attributi dei tag html (v-bind)
-- Monitoraggio dei valori negli input (v-model)
-- Intercettazione degli eventi (v-on)
-- Metodi
-- Lifecycle hooks
-- Componenti
-- Passaggio di dati da componente padre a componente figlio (props)
-- Invio di un messaggio da componente figlio a componente padre ($emit())
-- Proprietà calcolate/elaborate (computed properties)
- SASS
- Installazione pacchetti via NPM

### Inizializzazione progetto Vue con Vite
1. Apro terminale (powershell)
2. Eseguo il comando npm create vite@latest . (se sono nella cartella del progetto, altrimenti solo npm create vite@latest)
3. Se chiede di eliminare eventuali file, rispondere "y" (se sono file eliminabili)
4. Seleziono il framework giusto (cioè Vue)
5. Seleziono la variante di JS giusta (cioè JavaScript)
6. Una volta completata l'inizializzazione del progetto tramite il pacchetto Vite, possiamo provarlo direttamente eseguendo i 2 comandi:
    6a. npm install -> Serve per installare tutte le dipendenze del nostro progetto (che troviamo nel file package.json divise in 2 sezioni)
    6b. npm run dev -> Avvia il server locale che ci consente di compilare il progetto e di visualizzarlo nel browser
    6c. (Per eseguirli insieme, sulla powershell si scrive "npm install ; npm run dev", su altri terminali si scrive "npm install & npm run dev")

Passi successivi:
1. Portiamo tutti i componenti che abbiamo nel progetto alle Options API => Quindi, modifichiamo App.vue e HelloWorld.vue
2. Nel componente App.vue, rimuoviamo l'attributo scoped sul tag <style>