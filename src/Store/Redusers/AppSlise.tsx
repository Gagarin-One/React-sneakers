import { createSlice } from "@reduxjs/toolkit"

type Products = {
  price:number,
    name:string,
    img:string,
}
type MainState = {
  AllProducts:Array<Products>
}

const initialState: MainState = {
    AllProducts:[
      {price:177, name:'nike', img:'https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg'},
      {price:1, name:'nike', img:'https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg'},
      {price:1, name:'nike', img:'https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg'},
      {price:177, name:'nike', img:'https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg'},
      {price:1, name:'nike', img:'https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg'},
      {price:1, name:'nike', img:'https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg'},
      {price:177, name:'nike', img:'https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg'},
      {price:1, name:'nike', img:'https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg'},
      {price:1, name:'nike', img:'https://img1.akspic.ru/attachments/crops/1/3/6/8/4/148631/148631-odezhda-kedy-chernyy-karmin-nike-1920x1080.jpg'},
    ]
}

export const MainSlice = createSlice({
  name:'Main',
  initialState,
  reducers:{

  }
})

export default MainSlice.reducer