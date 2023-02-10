<!-- 
    Proprietà calcolate/elaborate (computed properties) 
-->
<script>
export default {
    name: 'ComputedProperties',
    data() {
        return {
            firstName: 'Ciccio',
            lastName: 'Pasticcio',
            counter: 0
        }
    },
    methods: {
        getFullName() {
            console.log('getFullName() - Richiamato Metodo');

            return this.firstName + ' ' + this.lastName;
        }
    },
    computed: {
        fullName() {
            console.log('fullName - Richiamata Computed Property');

            return this.firstName + ' ' + this.lastName;
        }
    }
}
</script>

<template>

    <!-- Sia il metodo, sia la computed property, vengono richiamati la prima volta al caricamento della pagina -->
    <section id="computed-properties">
        <div class="flex-container">
            <div>
                <h2>
                    Metodo
                </h2>
                <!-- Il metodo viene richiamato ogni volta che cambia un QUALSIASI dato in questo componente -->
                Nome completo: {{ getFullName() }}
            </div>
            <div>
                <h2>
                    Computed Property
                </h2>
                <!-- La computed property, invece, viene richiamata solo quando cambia una delle proprietà da cui dipende (quindi firstName o lastName) -->
                Nome completo: {{ fullName }}
            </div>
        </div>
        <div class="flex-container">
            <!-- Quando vengono modificati firstName o lastName, vengono richiamati sia il metodo, sia la computed property -->
            <div>
                <label for="first-name">
                    Nome
                </label>
                <input id="first-name" type="text" v-model="firstName">
            </div>
            <div>
                <label for="last-name">
                    Cognome
                </label>
                <input id="last-name" type="text" v-model="lastName">
            </div>
        </div>
        <div class="flex-container">
            <!-- Quando viene modificato counter, viene richiamato solo il metodo (perché la computed property NON DIPENDE da counter) -->
            <div>
                <button @click="counter--">
                    - Decrementa counter
                </button>
                <span>
                    {{ counter }}
                </span>
                <button @click="counter++">
                    + Incrementa counter
                </button>
            </div>
        </div>
    </section>

</template>

<style scoped>
.flex-container{
    display: flex;
    justify-content: center;
}
.flex-container > *{
    width: 50%;
    text-align: center;
}
span {
    display: inline-block;
    padding: 5px;
    font-weight: bold;
}
</style>