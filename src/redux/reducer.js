import {ACTION_LOAD_DATA} from './actions'
import {ACTION_UPDATE_REVIEWS} from './actions'


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
        brand: "RFL",
        sku: "001",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Brothers",
        sku: "002",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Regal",
        sku: "003",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Nadia",
        sku: "003",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Otobi",
        sku: "004",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "RFL",
        sku: "005",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Brothers",
        sku: "006",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Regal",
        sku: "007",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Nadia",
        sku: "008",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Otobi",
        sku: "009",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "RFL",
        sku: "010",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Brothers",
        sku: "011",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Regal",
        sku: "012",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
        brand: "Nadia",
        sku: "013",
        tag: "Decorative",
        desc: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
    ],
    articles: [
      {
        id: "article1",
        image: "article1.jpg",
        date: "28 JANUARY, 2020",
        author: "BY ADMIN",
        title: "Fonsectetur adipisicing  eiusmod ",
        text: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
        category: "Chair"
      },
      {
        id: "article2",
        image: "article2.jpg",
        date: "28 JANUARY, 2020",
        author: "BY ADMIN",
        title: "Fonsectetur adipisicing  eiusmod ",
        text: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
        category: "Table"
      },
      {
        id: "article3",
        image: "article3.jpg",
        date: "28 JANUARY, 2020",
        author: "BY ADMIN",
        title: "Fonsectetur adipisicing  eiusmod ",
        text: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
        category: "Lamp"
      },
      {
        id: "article4",
        image: "article4.jpg",
        date: "28 JANUARY, 2020",
        author: "BY ADMIN",
        title: "Fonsectetur adipisicing  eiusmod ",
        text: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
        category: "Clock"
      },
      {
        id: "article5",
        image: "article1.jpg",
        date: "28 JANUARY, 2020",
        author: "BY ADMIN",
        title: "Fonsectetur adipisicing  eiusmod ",
        text: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
        category: "Chair"
      },
      {
        id: "article6",
        image: "article2.jpg",
        date: "28 JANUARY, 2020",
        author: "BY ADMIN",
        title: "Fonsectetur adipisicing  eiusmod olya",
        text: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut alLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
        category: "Watch"
      }
    ],
    reviews: [
      {
        productId: "product-1",
        productReviews: [
          {
            name: "Jhon",
            date: "29.05.2021",
            rating: 4,
            text: "Good product"
          },
          {
            name: "Dave",
            date: "29.05.2021",
            rating: 5,
            text: "Recomend"
          },
          {
            name: "Helen",
            date: "29.05.2021",
            rating: 4,
            text: "Very good"
          }
        ]
      },
      {
        productId: "product-2",
        productReviews: [
          {
            name: "Jhon",
            date: "29.05.2021",
            rating: 4,
            text: "Good product2"
          },
          {
            name: "Dave",
            date: "29.05.2021",
            rating: 3,
            text: "Recomend2"
          },
          {
            name: "Helen",
            date: "29.05.2021",
            rating: 4,
            text: "Very good2"
          }
        ]
      },
      {
        productId: "product-3",
        productReviews: [
          {
            name: "Jhon",
            date: "29.05.2021",
            rating: 4,
            text: "Good product"
          },
          {
            name: "Dave",
            date: "29.05.2021",
            rating: 5,
            text: "Recomend"
          },
          {
            name: "Helen",
            date: "29.05.2021",
            rating: 5,
            text: "Very good"
          }
        ]
      },
      {
        productId: "product-4",
        productReviews: [
          {
            name: "Jhon",
            date: "29.05.2021",
            rating: 5,
            text: "Good product"
          },
          {
            name: "Dave",
            date: "29.05.2021",
            rating: 5,
            text: "Recomend"
          },
          {
            name: "Helen",
            date: "29.05.2021",
            rating: 5,
            text: "Very good"
          }
        ]
      }

    ]
}


function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ACTION_LOAD_DATA:
          return { ...state, data: action.payload }
        case ACTION_UPDATE_REVIEWS:
          return { ...state, reviews: action.payload }
        default:
          return state
      }
}




export default rootReducer;
