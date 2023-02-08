<!-- 
    Monitoraggio dei valori negli input (v-model)
-->
<script>
export default {
    name: 'MonitoringInputValues',
    data() {
        return {
            inputValue: 'My default text',
            selectValue: 2,
            textareaValue: 'Lorem ipsum dolor sit amet',
        }
    }
}
</script>

<template>

    <section id="monitoring-input-values">
        <!--
            Grazie alla direttiva v-model, possiamo monitorare il valore di qualunque tipo di input
        -->
        <div>
            <div>
                <strong>
                    Valore nell'input:
                </strong>
                {{ inputValue }}
            </div>
            <div>
                <input type="text" v-model="inputValue">
            </div>
        </div>

        <div>
            <div>
                <strong>
                    Valore selezionato nella select:
                </strong>
                {{ selectValue }}
            </div>
            <div>
                <select v-model="selectValue">
                    <option value="1">First</option>
                    <option value="2">Second</option>
                    <option value="3">Third</option>
                </select>
            </div>
        </div>

        <div>
            <div>
                <strong>
                    Testo nella textarea:
                </strong>
                <!-- Attenzione che qui non si vedranno gli a capo -->
                {{ textareaValue }}
            </div>
            <div>
                <textarea v-model="textareaValue"></textarea>
            </div>
        </div>
    </section>

</template>

<style scoped>
</style>