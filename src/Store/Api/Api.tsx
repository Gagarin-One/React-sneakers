import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
type Products = {
  id: number,
  price:number,
  name:string,
  currentSizes:number|undefined,
  availableSize:Array<number>,
  img:string,
  desc:string
}
type ProductsResponse = Products[]


export const sneakersApi = createApi({
  reducerPath:'sneakersApi',
  tagTypes:['products','cartItems'],
  baseQuery: fetchBaseQuery({baseUrl:'https://624fd576f0ae10a8ea4fba2f.mockapi.io'}),
  endpoints:(build) =>({
    getSneakers: build.query<ProductsResponse,string>({
      query: () => 'All',
      providesTags:(result) => result
        ?[...result.map(({id}) => (
          {type: 'products' as const ,id})), 
          {type: 'products',id:'LIST'}]
        :[{type: 'products',id:'LIST'}]
    }),
    getCartItems: build.query<ProductsResponse,string>({
      query:()=> 'shoppingCard',
      providesTags: (result) => result
      ?[...result.map(({id})=> (
        {type:'cartItems' as const , id})),
        {type:'cartItems', id: 'LIST'}]
      : [{type:'cartItems', id: 'LIST'}]  
    }),
    
    getNikes: build.query<Products,number>({
      query: id => `All/${id}`
    }),

    addToCart: build.mutation<ProductsResponse,Products>({
      query: (body) =>({
        url:'shoppingCard',
        method:'POST',
        body
      }),
      invalidatesTags:[{type: 'cartItems',id:'LIST'}]
    }),

    deleteFromCart: build.mutation<ProductsResponse,string>({
      query:()=>({
        url:'shoppingCard',
        method:'DELETE'
      }),
      invalidatesTags:[{type: 'cartItems',id:'LIST'}]
    }),
  })
})

export const {useGetSneakersQuery} = sneakersApi
export const {useAddToCartMutation} = sneakersApi
export const {useDeleteFromCartMutation} = sneakersApi
export const {useGetNikesQuery} = sneakersApi
export const {useGetCartItemsQuery} = sneakersApi
