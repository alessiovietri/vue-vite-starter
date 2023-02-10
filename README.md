# Vite + Vue Starter/Recap

## Funzionalità
- Inizializzazione di Vue                                                       | Componente: nessuno, vedi README
- Inizializzazione progetto Vue con Vite                                        | Componente: nessuno, vedi README
- Funzionalità e caratteristiche di Vue:                                        | ---------------------------------------------------
    - Reattività e stampa in pagina di valori                                   | Componente: DataAndMoustaches
    - Metodi                                                                    | Componente: MethodsInVue
    - Istruzioni condizionali (v-if e v-show)                                   | Componente: ConditionalStatements
    - Cicli (v-for)                                                             | Componente: LoopsInVue
    - "Dinamicizzazione" degli attributi dei tag html (v-bind)                  | Componente: DynamicHtmlAttributes
    - Monitoraggio dei valori negli input (v-model)                             | Componente: MonitoringInputValues
    - Intercettazione degli eventi (v-on)                                       | Componente: EventListeners
    - Lifecycle hooks                                                           | Componente: LifecycleHooks
    - Componenti                                                                | Componente: tutti
    - Passaggio di dati da componente padre a componente figlio (props)         | Componente: FromFatherToSon
    - Invio di un messaggio da componente figlio a componente padre ($emit())   | Componente: FromSonToFather
    - Proprietà calcolate/elaborate (computed properties)                       | Componente: ComputedProperties
    - Magazzino di informazioni globali (store.js)                              | Componente: GlobalInformations
    - Chiamate API (axios)                                                      | Componente: ApiCalls
- SASS                                                                          | Componente: qualsiasi
- Installazione pacchetti via NPM                                               | Componente: nessuno, vedi README

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
    1. npm install -> Serve per installare tutte le dipendenze del nostro progetto (che troviamo nel file package.json divise in 2 sezioni)
    2. npm run dev -> Avvia il server locale che ci consente di compilare il progetto e di visualizzarlo nel browser
    3. (Per eseguirli insieme, sulla powershell si scrive "npm install ; npm run dev", su altri terminali si scrive "npm install & npm run dev")

Passi successivi:
1. Portiamo tutti i componenti che abbiamo nel progetto alle Options API => Quindi, modifichiamo App.vue e HelloWorld.vue
2. Nel componente App.vue, rimuoviamo l'attributo scoped sul tag <style>



### Installazione SASS
1. Installare SASS via npm tramite il comando "npm add -D sass"
2. Aggiungere attributo lang="scss" nei componenti nei quali vogliamo usare SASS
3. Eliminare il file style.css da src
4. Rimuovere l'importazione del file style.css da main.js
5. Creare la cartella styles nella cartella src al cui interno inseriremo i file .scss che necessitiamo
    - Solitamente, creiamo almeno il file main.scss in cui poi facciamo tutte le importazioni che ci servono e/o mettiamo lo stile di base


### Installare pacchetti via NPM (Bootstrap, axios, Font Awesome...)
1. Apro la documentazione del pacchetto
2. Vado alla sezione Getting started/Introduction/First steps
3. Vedo come installare via NPM [qual è il comando e qual è il pacchetto da installare (o i pacchetti, come per Bootstrap che vuole popper)]
4. Vedo se c'è altro da configurare (come per Font Awesome con Vue)