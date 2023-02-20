import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoReducer'
import apiMiddleWare from './apiMiddleWare'
import thunk from 'redux-thunk'

const store = configureStore({
    reducer:{
       todo:todoReducer
    },
    middleware:[apiMiddleWare,thunk]
})
export default store