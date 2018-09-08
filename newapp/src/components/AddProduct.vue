<template>
    <div>
        <form @submit.prevent="addItem(newName)" class="add-item-box">
            <md-field>
                <label>Initial Value</label>
                <md-input v-validate.initial="{required: true}" name="newName" v-model="newName"
                          placeholder="Wpisz imię nowego ziomka"></md-input>
            </md-field>
            <md-button :disabled="this.errors.has('newName')" type="submit" class="md-raised">add item</md-button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'AddProduct',
        props: {
            items: {
                type: Array
            },
        },
        data() {
            return {
                newName: ''
            }
        },
        methods: {
            addItem(newName) {
                this.$emit('on-add', this.newName);
                this.newName = newName = '';
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .add-item-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .item {
        display: flex;
        flex-direction: row;
    }

    .item-list {
        padding: 0px;
    }
</style>
