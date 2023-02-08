import { createApp } from 'vue'
// Nel caso in cui volessimo usare SASS, è consigliabile rimuovere l'importazione del file style.css da qui (e cancellarlo eventualmente)
// Non è obbligatorio, ma potremmo creare inutili conflitti
// import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
