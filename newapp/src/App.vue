<template>
    <div id="app">
        <add-product @on-add="addItem" :items="sharedState.items"></add-product>
        <product-list @on-remove="removeItem" @on-sort="sort" :items="sharedState.items"></product-list>
    </div>
</template>

<script>
    import ProductList from './components/ProductList';
    import AddProduct from './components/AddProduct';
    import store from './store/index';

    export default {
        name: 'app',
        components: {
            ProductList,
            AddProduct
        },
        created() {
          store.fetchItems();
        },
        data() {
            return {
                sharedState: store.state
            }
        },
        methods: {
            sort(criterium) {
                if (criterium === 'id') {
                    this.sharedState.items.sort((a, b) => a.id > b.id);
                } else if (criterium === 'age') {
                    this.sharedState.items.sort((a, b) => a.age > b.age);
                } else {
                    console.log('coś nie działa');
                }
            },
            removeItem(item) {
                const itemQuantity = this.sharedState.items.length;
                if (itemQuantity === 1) {
                    this.sharedState.items = [];
                } else {
                    const index = this.sharedState.items.indexOf(item);
                    store.removeItem(item.id).then(this.sharedState.items.splice(index, 1));
                }
            },
            addItem(newName) {
                const id = this.findLastId() + 1,
                    name = newName,
                    age = this.getRandomAge();
                const newItem = {id, name, age};
                store.addItem(newItem).then(() => {
                    this.sharedState.items.push(newItem);
                    this.$validator.reset();
                    this.newName = '';
                });
            },
            findLastId() {
                let tempLastId = 0;
                this.sharedState.items.map(item => {
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
        padding: 0 10vw;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
