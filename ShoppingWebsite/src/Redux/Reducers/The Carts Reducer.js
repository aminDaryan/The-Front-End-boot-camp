
import { ADDTOCARTTHEITEM, SUBTRACTTOCARTTHEITEM, GIVETHEAMOUNTOFITEM, DELETETHECARTTHEITEM } from "./../Actions/Type Actions";


const initialState = JSON.parse(sessionStorage.getItem("Picked Products")) || {
    items: [],
    quantity: 0

};

function handleAddingToOrSubtractingFromCart(state, theAddedItem, arithmaticOperator) {

    let matchedItem = state.items.filter((item) => {
        if (item.product.name === theAddedItem.name) return true
        return false
    })
    switch (arithmaticOperator) {
        case "+":
            return matchedItem[0] ?

                {
                    items: state.items.map((item) => {
                        return (
                            item === matchedItem[0] ?
                                { product: item.product, quantity: item.quantity + 1 }
                                :
                                item)
                    }),
                    quantity: state.quantity + 1,
                }
                :
                { items: [...state.items, { product: theAddedItem, quantity: 1 }], quantity: state.quantity + 1 }

        case "-":

            return {
                items: state.items.map((item) => {
                    return (
                        item === matchedItem[0] ?
                            { product: item.product, quantity: item.quantity - 1 }
                            :
                            item)
                }),
                quantity: state.quantity - 1,
            }

        default:
            return state;
    }
}

function handleDeleteItemFromCart(state, theAddedItem) {

    let selectedItem = state.items.filter((item) => {
        if (item.product.name === theAddedItem.name) return true
        return false
    })

    return {
        items: state.items.filter((item) => {
            if (item.product.name === theAddedItem.name) return false
            return true
        })
        ,
        quantity: state.quantity - selectedItem[0].quantity,
    }
}

function handleChangeOfTheNumberOfProductByInput(state, theAddedItem, numberOfItem) {
    let theSelectedItem = state.items.filter((item) => {
        if (item.product.name === theAddedItem.name)
            return true
        return false
    })
    console.log(numberOfItem)

    return {
        items: state.items.map((item) => {
            if (item.product.name === theAddedItem.name) {
                return { product: theAddedItem, quantity: numberOfItem }
            } else {
                return item
            }
        }),
        quantity: state.quantity + (numberOfItem - theSelectedItem[0].quantity)
    }
}

const addressReducer = function (state = initialState, action) {
    switch (action.type) {
        case ADDTOCARTTHEITEM: {
            let newState = handleAddingToOrSubtractingFromCart(state, action.payload, "+");
            sessionStorage.setItem("Picked Products", JSON.stringify(newState))
            return newState
        }
        case SUBTRACTTOCARTTHEITEM: {
            let newState = handleAddingToOrSubtractingFromCart(state, action.payload, "-");
            sessionStorage.setItem("Picked Products", JSON.stringify(newState))
            return newState
        }
        case DELETETHECARTTHEITEM: {
            let newState = handleDeleteItemFromCart(state, action.payload);
            sessionStorage.setItem("Picked Products", JSON.stringify(newState))
            return newState
        }
        case GIVETHEAMOUNTOFITEM: {
            let newState = handleChangeOfTheNumberOfProductByInput(state, action.payload, action.inputNumber);
            sessionStorage.setItem("Picked Products", JSON.stringify(newState))
            return newState
        }
        default:
            return state;
    }
};

export default addressReducer