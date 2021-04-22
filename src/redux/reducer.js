import {ACTION_LOAD_DATA} from './actions'


let initialState = {
    data: [
      {
        id: "product-1",
        name: "Beat Flat Pendant",
        price: "",
        color: "Black",
        collection: "Classic",
        category: "furniture",
        img: "product-new-1.png",
        label: "new"
      },
      {
        id: "product-2",
        name: "Lampe Sur Pieds",
        price: "",
        color: "Bamboo",
        collection: "Classic",
        category: "furniture",
        img: "product-new-2.png",
        label: "new"
      },
      {
        id: "product-3",
        name: "Rattan Rocking",
        price: "",
        color: "Black",
        collection: "Classic",
        category: "chair",
        img: "product-new-3.png",
        label: "new"
      },
      {
        id: "product-4",
        name: "Rattan Rocking",
        price: "",
        color: "Bamboo",
        collection: "Classic",
        category: "furniture",
        img: "product-new-4.png",
        label: "new"
      },
      {
        id: "product-5",
        name: "Rattan Rocking",
        price: "",
        color: "Bamboo",
        collection: "Classic",
        category: "chair",
        img: "product-new-5.png",
        label: "new"
      },
      {
        id: "product-6",
        name: "Lampe Sur Pieds",
        price: "",
        color: "Bamboo",
        collection: "Classic",
        category: "furniture",
        img: "product-new-6.png",
        label: "new"
      },
      {
        id: "product-7",
        name: "Wooden radio",
        price: 29,
        color: "",
        collection: "",
        category: "furniture",
        img: "product-week-1.png",
        label: "week"
      },
      {
        id: "product-8",
        name: "White chair",
        price: 29,
        color: "",
        collection: "",
        category: "chair",
        img: "product-week-2.png",
        label: "week"
      },
      {
        id: "product-9",
        name: "Wooden chair",
        price: 29,
        color: "",
        collection: "",
        category: "chair",
        img: "product-week-3.png",
        label: "week"
      },
      {
        id: "product-10",
        name: "Retro table",
        price: 29,
        color: "",
        collection: "",
        category: "furniture",
        img: "product-week-4.png",
        label: "week"
      },
      {
        id: "product-11",
        name: "Wooden radio",
        price: 29,
        color: "",
        collection: "",
        category: "furniture",
        img: "product-week-5.png",
        label: "week"
      },
      {
        id: "product-12",
        name: "Wooden chair",
        price: 29,
        color: "",
        collection: "",
        category: "chair",
        img: "product-week-6.png",
        label: "week"
      },
      {
        id: "product-13",
        name: "White chair",
        price: 29,
        color: "",
        collection: "",
        category: "chair",
        img: "product-week-7.png",
        label: "week"
      },
      {
        id: "product-14",
        name: "Retro table",
        price: 29,
        color: "",
        collection: "",
        category: "furniture",
        img: "product-week-8.png",
        label: "week"
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
