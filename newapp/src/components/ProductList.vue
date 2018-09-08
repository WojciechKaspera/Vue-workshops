<template>
    <div class="item-list-box">
        <hr class="line">
        <md-table>
            <md-table-row>
                <md-table-head md-numeric>ID</md-table-head>
                <md-table-head>Name</md-table-head>
                <md-table-head>Age</md-table-head>
                <md-table-head></md-table-head>
            </md-table-row>
            <md-table-row v-for="item of items">
                <md-table-cell md-numeric>{{item.id}}</md-table-cell>
                <md-table-cell>{{item.name}}</md-table-cell>
                <md-table-cell>{{item.age}}</md-table-cell>
                <md-table-cell>
                    <md-button class="md-raised" @click="removeItem(item)">remove</md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
        <hr class="line">
        <div class="button-wrapper">
            <md-button class="md-raised" @click="sort('id')">Sortuj po kolejności dodania</md-button>
        </div>
        <div class="button-wrapper">
            <md-button class="md-raised" @click="sort('age')">Sortuj po wieku</md-button>
        </div>
        <h1 v-if="!items.length">Nie masz żadnych ziomków na liście</h1>
    </div>
</template>

<script>
    export default {
        name: 'ProductList',
        props: {
            items: {
                type: Array
            }
        },
        methods: {
            removeItem(item) {
                this.$emit('on-remove', item);
            },
            sort(criterium) {
                this.$emit('on-sort', criterium);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .line {
        width: 100%;
    }

    .item-list-box {
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
        padding: 50px 0;
    }
</style>
