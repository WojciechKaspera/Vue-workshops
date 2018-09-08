import axios from 'axios';

const store = {
    state: {
     items: []
    },
    fetchItems() {
        axios.get('http://localhost:3000/items').then(res => this.state.items = res.data);
    },
    addItem(item) {
        return axios.post('http://localhost:3000/items', item);
    },
    removeItem(id) {
        return axios.delete(`http://localhost:3000/items/${id}`);
    }
};

export default store;
