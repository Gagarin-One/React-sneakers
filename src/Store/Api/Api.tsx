import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
type Products = {
  id: number,
  price:number,
  name:string,
  img:string,
}
type ProductsResponse = Products[]


export const sneakersApi = createApi({
  reducerPath:'sneakersApi',
  tagTypes:['products'],
  baseQuery: fetchBaseQuery({baseUrl:'https://63da109719fffcd620c02bef.mockapi.io'}),
  endpoints:(build) =>({
    getSnekers: build.query<ProductsResponse,string>({
      query: () => 'All',
      providesTags:(result) => result
        ?[...result.map(({id}) => (
          {type: 'products' as const ,id})), 
          {type: 'products',id:'LIST'}]
        :[{type: 'products',id:'LIST'}]
    }),

    addToCart: build.mutation<ProductsResponse,string>({
      query: (body) =>({
        url:'cart',
        method:'POST',
        body
      }),
      invalidatesTags:[{type: 'products',id:'LIST'}]
    }),

    deleteFromCart: build.mutation<ProductsResponse,string>({
      query:()=>({
        url:'cart',
        method:'DELETE'
      }),
      invalidatesTags:[{type: 'products',id:'LIST'}]
    })
  })
})

export const {useGetSnekersQuery} = sneakersApi
export const {useAddToCartMutation} = sneakersApi
export const {useDeleteFromCartMutation} = sneakersApi