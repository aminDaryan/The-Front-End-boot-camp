import { combineReducers } from "redux";
import address from './Address Reducer'
import authenticationStatus from './Verification Reducer'
import userAuthentication from './User Authentication Reducer'
import userProfileProperties from './Profile Properties Reducer'
import shownCategoryProducts from './Shown Category Products Reducer'
import theCartsItems from './The Carts Reducer'
import theChosenProduct from './Fetch Chosen Product Reducer'
import theLoadingStatus from './Loading Reducer'

const allReducers = combineReducers({
    theCurrentAddress: address,
    theCurrentAuthenticationStatus: authenticationStatus,
    theUsersAuthenticationInformation: userAuthentication,
    theUsersProfileProperties: userProfileProperties,
    theUsersChosenCategorysProductsShownOnPage: shownCategoryProducts,
    theUsersCurrentCartItems: theCartsItems,
    theUsersCurrentChosenProduct: theChosenProduct,
    theCurrentLoadingStatus: theLoadingStatus,
})

export default allReducers