import { createStore } from 'vuex';

import productsModule from './modules/product.js';
import cartModule from './modules/cart.js';

const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule
    }
});

export default store;

