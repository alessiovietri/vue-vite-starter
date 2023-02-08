# Vue-Vite Starter template/recap

## Funzionalità
- Inizializzazione di Vue                                                       FATTO - Componente: nessuno, vedi README
- Inizializzazione progetto Vue con Vite                                        FATTO - Componente: nessuno, vedi README
- Funzionalità e caratteristiche di Vue:
    - Reattività e stampa in pagina di valori                                   FATTO - Componente: DataAndMoustaches
    - Metodi                                                                    FATTO - Componente: MethodsInVue
    - Istruzioni condizionali (v-if e v-show)                                   FATTO - Componente: ConditionalStatements
    - Cicli (v-for)                                                             FATTO - Componente: LoopsInVue
    - "Dinamicizzazione" degli attributi dei tag html (v-bind)
    - Monitoraggio dei valori negli input (v-model)
    - Intercettazione degli eventi (v-on)                                      
    - Lifecycle hooks                                                           FATTO - Componente: LifecycleHooks
    - Componenti                                                                FATTO - Componente: tutti
    - Passaggio di dati da componente padre a componente figlio (props)         FATTO - Componente: FromFatherToSon
    - Invio di un messaggio da componente figlio a componente padre ($emit())   FATTO - Componente: FromSonToFather
    - Proprietà calcolate/elaborate (computed properties)                      
    - Magazzino di informazioni globali (store.js)                              FATTO - Componente: GlobalInformations
    - Chiamate API (axios)                                                     
- SASS                                                                          FATTO - Componente: qualsiasi
- Installazione pacchetti via NPM                                               FATTO - Componente: nessuno, vedi README

### Inizializzazione di Vue
1. In un file JS, importo dal pacchetto Vue (preso o da CDN o da NPM) la funzione createApp()
2. Richiamo la funzione createApp() con un parametro che sarà un oggetto
3. L'oggetto passato a createApp() conterrà tutte i dati e le funzionalità che ci servono
4. Una volta creata l'istanza Vue con createApp(), la montiamo utilizzando la funzione mount(), il cui unico argomento sarà una stringa contenente il selettore CSS che identificherà il contenitore in cui montare la nostra istanza

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



### Installazione SASS
1. Installare SASS via npm tramite il comando "npm add -D sass"
2. Aggiungere attributo lang="scss" nei componenti nei quali vogliamo usare SASS
3. Eliminare il file style.css da src
4. Rimuovere l'importazione del file style.css da main.js
5. Creare la cartella styles nella cartella src al cui interno inseriremo i file .scss che necessitiamo
5a. Solitamente, creiamo almeno il file main.scss in cui poi facciamo tutte le importazioni che ci servono


### Installare pacchetti via NPM (Bootstrap, axios, Font Awesome...)
1. Apro la documentazione del pacchetto
2. Vado alla sezione Getting started/Introduction/First steps
3. Vedo come installare via NPM (qual è il comando e qual è il pacchetto da installare (o i pacchetti, come con Bootstrap che vuole popper))
4. Vedo se c'è altro da configurare (come per Font Awesome con Vue)