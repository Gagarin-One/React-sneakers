import { createSlice } from "@reduxjs/toolkit"

type Products = {
  id: number,
  price:number,
    name:string,
    img:string,
}
type MainState = {
  AllProducts:Array<Products>
}

const initialState: MainState = {
    AllProducts:[
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      {"id":0,"price":177, "name":"nike", "img":"https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg"},
      
    ]
}

export const MainSlice = createSlice({
  name:'Main',
  initialState,
  reducers:{

  }
})

export default MainSlice.reducer