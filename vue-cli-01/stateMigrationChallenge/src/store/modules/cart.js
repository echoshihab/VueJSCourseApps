export default {
    namespaced: true,
    state() {
        return {
            cart: { 
                items: [], 
                total: 0, 
                qty: 0}
        };
    },
    mutations: {
        addProductToCart(state, payload) {
            const productData = payload;
            const productInCartIndex = state.items.findIndex(
              (ci) => ci.productId === productData.id
            );
      
            if (productInCartIndex >= 0) {
                state.items[productInCartIndex].qty++;
            } else {
              const newItem = {
                productId: productData.id,
                title: productData.title,
                image: productData.image,
                price: productData.price,
                qty: 1,
              };
              state.items.push(newItem);
            }
            state.qty++;
            state.total += productData.price;
          },

          removeProductFromCart(state, payload) {
            const productInCartIndex = state.items.findIndex(
              (cartItem) => cartItem.productId === payload.prodId
            );
            const prodData = state.items[productInCartIndex];
            state.items.splice(productInCartIndex, 1);
            state.qty -= prodData.qty;
            state.total -= prodData.price * prodData.qty;
          },
    },
    actions: {
        addToCart(context, payload) {
            context.commit('addProductToCart', payload)
        },
        removeFromCart(context, payload) {
            context.commit('removeProductFromCart', payload)
        }
    },
    getters: {
        products(state) {
            return state.cart.items
        }   ,
        totalSum(state){
            return state.cart.total.toFixed(2);
        },
        quantity(state){
            return state.cart.qty;
        } 
    }
}