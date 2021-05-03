import {ACTION_LOAD_DATA} from './actions'


let initialState = {
    data: [
      {
        id: "product-1",
        name: "Beat Flat Pendant",
        price: 30,
        color: "Black",
        collection: "Classic",
        category: "furniture",
        img: "product-new-1.png",
        label: "new",
        brand: "RFL"
      },
      {
        id: "product-2",
        name: "Lampe Sur Pieds",
        price: 15,
        color: "Bamboo",
        collection: "Classic",
        category: "furniture",
        img: "product-new-2.png",
        label: "new",
        brand: "Brothers"
      },
      {
        id: "product-3",
        name: "Rattan Rocking",
        price: 10,
        color: "Black",
        collection: "Classic",
        category: "chair",
        img: "product-new-3.png",
        label: "new",
        brand: "Regal"
      },
      {
        id: "product-4",
        name: "Rattan Rocking",
        price: 60,
        color: "Bamboo",
        collection: "Classic",
        category: "furniture",
        img: "product-new-4.png",
        label: "new",
        brand: "Nadia"
      },
      {
        id: "product-5",
        name: "Rattan Rocking",
        price: 70,
        color: "Bamboo",
        collection: "Classic",
        category: "chair",
        img: "product-new-5.png",
        label: "new",
        brand: "Otobi"
      },
      {
        id: "product-6",
        name: "Lampe Sur Pieds",
        price: 15,
        color: "Bamboo",
        collection: "Classic",
        category: "furniture",
        img: "product-new-6.png",
        label: "new",
        brand: "RFL"
      },
      {
        id: "product-7",
        name: "Wooden radio",
        price: 29,
        color: "",
        collection: "",
        category: "furniture",
        img: "product-week-1.png",
        label: "week",
        brand: "Brothers"
      },
      {
        id: "product-8",
        name: "White chair",
        price: 29,
        color: "",
        collection: "",
        category: "chair",
        img: "product-week-2.png",
        label: "week",
        brand: "Regal"
      },
      {
        id: "product-9",
        name: "Wooden chair",
        price: 29,
        color: "",
        collection: "",
        category: "chair",
        img: "product-week-3.png",
        label: "week",
        brand: "Nadia"
      },
      {
        id: "product-10",
        name: "Retro table",
        price: 29,
        color: "",
        collection: "",
        category: "furniture",
        img: "product-week-4.png",
        label: "week",
        brand: "Otobi"
      },
      {
        id: "product-11",
        name: "Wooden radio",
        price: 29,
        color: "",
        collection: "",
        category: "furniture",
        img: "product-week-5.png",
        label: "week",
        brand: "RFL"
      },
      {
        id: "product-12",
        name: "Wooden chair",
        price: 29,
        color: "",
        collection: "",
        category: "chair",
        img: "product-week-6.png",
        label: "week",
        brand: "Brothers"
      },
      {
        id: "product-13",
        name: "White chair",
        price: 29,
        color: "",
        collection: "",
        category: "chair",
        img: "product-week-7.png",
        label: "week",
        brand: "Regal"
      },
      {
        id: "product-14",
        name: "Retro table",
        price: 29,
        color: "",
        collection: "",
        category: "furniture",
        img: "product-week-8.png",
        label: "week",
        brand: "Nadia"
      }
    ],
    categories: [
      {
        name: "All",
        value: ""
      },
      {
        name: "Furniture",
        value: "furniture"
      },
      {
        name: "Chairs",
        value: "chair"
      },
      {
        name: "Lighting",
        value: "lighting"
      },
      {
        name: "Decor",
        value: "decor"
      }
    ]
}


function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ACTION_LOAD_DATA:
          return { ...state, data: action.payload }
        default:
          return state
      }
}




export default rootReducer;
