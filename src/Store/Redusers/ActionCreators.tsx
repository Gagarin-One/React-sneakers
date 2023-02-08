import { AppDispatch } from "../store"
import { MainSlice } from "./AppSlise"



export const FetchProducts = (category: string|undefined) => async (dispatch: AppDispatch) => {
  try{
    
    dispatch(MainSlice.actions.adsFetching())
    let response

    category === 'All' ? 
    response = await axios.get<Array<any>>('https://624fd576f0ae10a8ea4fba2f.mockapi.io/Products') : 
    response = await axios.get<Array<any>>(
      `https://63da109719fffcd620c02bef.mockapi.io/Products?${category}&sortBy=${}`
      )

    dispatch(MainSlice.actions.adsFetchingSuccess(response.data))
    dispatch(MainSlice.actions.changeContentArr(response.data))
  } catch (e:any) {
    dispatch(MainSlice.actions.adsFetchingError(e.massage))
  }
}
