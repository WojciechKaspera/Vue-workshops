<template>
    <div id="app">
        <add-product @on-add="addItem" :items="this.items"></add-product>
        <product-list @on-remove="removeItem" @on-sort="sort" :items="this.items"></product-list>
    </div>
</template>

<script>
    import ProductList from './components/ProductList';
    import AddProduct from './components/AddProduct';

    export default {
        name: 'app',
        components: {
            ProductList,
            AddProduct
        },
        data() {
            return {
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
                ]
            }
        },
        methods: {
            sort(criterium) {
                if (criterium === 'id') {
                    this.items.sort((a, b) => a.id > b.id);
                } else if (criterium === 'age') {
                    this.items.sort((a, b) => a.age > b.age);
                } else {
                    console.log('coś nie działa');
                }
            },
            removeItem(item) {
                const itemQuantity = this.items.length;
                if (itemQuantity === 1) {
                    this.items = [];
                } else {
                    const index = this.items.indexOf(item);
                    this.items.splice(index, 1);
                }
            },
            addItem(newName) {
                const id = this.findLastId() + 1,
                    name = newName,
                    age = this.getRandomAge();
                const newItem = {id, name, age};
                this.items.push(newItem);
                this.$validator.reset();
                this.newName = '';
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
