import{configureStore} from "@reduxjs/toolkit"
import harryReducer from "./exampleSlice"

const store = configureStore({
    reducer :{
        harry : harryReducer
    }
})


export default store