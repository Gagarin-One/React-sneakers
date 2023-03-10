import { createSlice, PayloadAction } from "@reduxjs/toolkit"

 export type Products = {
  id: number,
  price:number,
    name:string,
    img:string,
}
type MainState = {
  isLoading:boolean,
  error:string,
  sortCategory:string,
  products:Array<Products>|undefined
}

const initialState: MainState = {
  isLoading:false,
  error:'',
  sortCategory:'all',
  products:[]
}

export const MainSlice = createSlice({
  name:'Main',
  initialState,
  reducers:{
    adsFetching(state){
      state.isLoading = true;
    },
    changeCategory(state, action:PayloadAction<string>){
      state.sortCategory = action.payload
    },

    adsFetchingSuccess(state, action:PayloadAction<Array<Products>|undefined>){
      state.isLoading = false;
      state.error = ''
      state.products = action.payload
    },
    adsFetchingError(state, action:PayloadAction<string>){
      state.isLoading = false;
      state.error = action.payload
    }
  }
})

export default MainSlice.reducer