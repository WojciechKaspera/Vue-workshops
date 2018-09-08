<template>
    <div class="item-list-box">
        <ul v-if="items.length" class="item-list">
            <li v-for="item of items" class="item"><p class="item-name">{{item.name}}, lat {{item.age}}</p>
                <md-button class="md-raised" @click="removeItem(item)">remove</md-button>
            </li>
        </ul>
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
        padding: 0px;
    }
</style>
