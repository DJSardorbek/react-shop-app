import {toast} from "react-toastify";

export default function reducer(state, {type, payload}) {
    switch (type) {
        case 'ADD_TO_BASKET' :
            let newOrder = null;
            const orderIndex = state.order.findIndex(order => order.id === payload.id);
            if(orderIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                };
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if(index === orderIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1
                        };
                    } else {
                        return orderItem;
                    }
                });
            }
            return {
                ...state,
                order: newOrder
            };
        case 'INCREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((item) => {
                    if(item.id === payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    } else {
                        return item;
                    }
                })
            };
        case 'DECREMENT_QUANTITY':
            return {
                ...state,
                order: state.order.map((item) => {
                    if(item.id === payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    } else {
                        return item;
                    }
                })
            };
        case 'DELETE_ORDER':
            return {
                ...state,
                order: state.order.filter(order => order.id !== payload.id)
            }
        case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            };
        case 'SET_GOODS':
            return {
                ...state,
                goods: payload || [],
                isLoading: false
            }
        default:
            return state;
    }
}