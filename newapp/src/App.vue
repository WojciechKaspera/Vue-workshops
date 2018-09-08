<template>
    <div id="app">
        <ul vi-if="!items.length" class="item-list">
            <li v-for="item of items" class="item"><p class="item-name">{{item.name}}, lat {{item.age}}</p>
                <md-button class="md-raised" @click="removeItem(item)">remove</md-button>
            </li>
        </ul>
        <h1 vi-if="items.length">Nie masz żadnych ziomków na liście</h1>
        <div class="add-item-box">
            <form @submit.prevent="addItem()">
                <md-field>
                    <label>Initial Value</label>
                    <md-input v-validate.initial="{required: true}" name="newName" v-model="newName" placeholder="Wpisz imię nowego ziomka"></md-input>
                </md-field>
                <md-button :disabled="this.errors.has('newName')" type="submit" class="md-raised">add item</md-button>
            </form>
        </div>    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {newName: '',
                greetings: 'yo',
                items: [
                    {
                        id: 0,
                        name: "Grzegorz",
                        age: 23
                    },
                    {
                        id: 1,
                        name: 'Bobek',
                        age: 43
                    }
                ]}
        },
        methods: {
            removeItem(item) {
                const itemQuantity = this.items.length;
                if (itemQuantity === 1) {
                    this.items = [];
                } else {
                    const index = this.items.indexOf(item);
                    this.items.splice(index, 1);
                }
            },
            addItem() {
                const id = this.findLastId() + 1,
                    name = this.newName,
                    age = this.getRandomAge();
                const newItem = {id, name, age};
                this.items.push(newItem);
            },
            findLastId() {
                let tempLastId = 0;
                this.items.map(item => {
                    if (item.id > tempLastId) {
                        tempLastId = item.id;
                    }
                });
                return tempLastId;
            },
            getRandomAge() {
                return Math.floor(Math.random() * 100);
            }
    }
    }
</script>
<style lang="scss">
    .item {
        display: flex;
        flex-direction: row;
    }
    .item-list {
        padding: 0px;
    }
    .add-item-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    #app {
        padding: 10vw;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
