import { ADD_PRODUCT_ACTION, UPDATE_PRODUCT_ACTION, DELETE_PRODUCT_ACTION, SEARCH_PRODUCT_ACTION } from "./actions"

const initialProductState = [
    {
        id: 1,
        entityID: 1,
        name: "Laptop Asus X540LA-XX532D",
        category: "Portatil",
        brands: "Asus",
        model: "X540LA-XX532D",
        classification: "Laptop",
        subClassification: "Intel Core i3",
        description: "500U 15.6\" 4Gb 500Go HDD Webcam, Wi-Fi, Bluethoot",
        caracteristics: [
            {
                label: "CPU",
                description: "6500U 2.5Ghz"
            },
            {
                label: "RAM",
                description: "12Gb"
            },
            {
                label: "Video",
                description: "4Gb Nvidia Gtx 950M"
            },
            {
                label: "Pantalia",
                description: "15.6\""
            },
            {
                label: "Storage",
                description: "1To Hdd"
            },
            {
                label: "Others",
                description: "Windows 10, DVD, Webcam"
            }
        ],
        price: 32.20,
        stock: 2,
        imgPath: "/content/products/1.png"
    },
    {
        id: 2,
        entityID: 1,
        name: "Laptop Asus X540LA-XX532D",
        category: "Portatil",
        brands: "Asus",
        model: "X540LA-XX532D",
        classification: "Laptop",
        subClassification: "Intel Core i3",
        description: "500U 15.6\" 4Gb 500Go HDD Webcam, Wi-Fi, Bluethoot",
        caracteristics: [
            {
                label: "CPU",
                description: "6500U 2.5Ghz"
            },
            {
                label: "RAM",
                description: "12Gb"
            },
            {
                label: "Video",
                description: "4Gb Nvidia Gtx 950M"
            },
            {
                label: "Pantalia",
                description: "15.6\""
            },
            {
                label: "Storage",
                description: "1To Hdd"
            },
            {
                label: "Others",
                description: "Windows 10, DVD, Webcam"
            }
        ],
        price: 40,
        stock: 2,
        imgPath: "/content/products/1.png"
    },
    {
        id: 3,
        entityID: 1,
        name: "Laptop Asus X540LA-XX532D",
        category: "Portatil",
        brands: "Asus",
        model: "X540LA-XX532D",
        classification: "Laptop",
        subClassification: "Intel Core i3",
        description: "500U 15.6\" 4Gb 500Go HDD Webcam, Wi-Fi, Bluethoot",
        caracteristics: [
            {
                label: "CPU",
                description: "6500U 2.5Ghz"
            },
            {
                label: "RAM",
                description: "12Gb"
            },
            {
                label: "Video",
                description: "4Gb Nvidia Gtx 950M"
            },
            {
                label: "Pantalia",
                description: "15.6\""
            },
            {
                label: "Storage",
                description: "1To Hdd"
            },
            {
                label: "Others",
                description: "Windows 10, DVD, Webcam"
            }
        ],
        price: 200,
        stock: 2,
        imgPath: "/content/products/1.png"
    },
    {
        id: 4,
        entityID: 1,
        name: "Laptop Asus X540LA-XX532D",
        category: "Portatil",
        brands: "Asus",
        model: "X540LA-XX532D",
        classification: "Laptop",
        subClassification: "Intel Core i3",
        description: "500U 15.6\" 4Gb 500Go HDD Webcam, Wi-Fi, Bluethoot",
        caracteristics: [
            {
                label: "CPU",
                description: "6500U 2.5Ghz"
            },
            {
                label: "RAM",
                description: "12Gb"
            },
            {
                label: "Video",
                description: "4Gb Nvidia Gtx 950M"
            },
            {
                label: "Pantalia",
                description: "15.6\""
            },
            {
                label: "Storage",
                description: "1To Hdd"
            },
            {
                label: "Others",
                description: "Windows 10, DVD, Webcam"
            }
        ],
        price: 750,
        stock: 2,
        imgPath: "/content/products/1.png"
    },
    {
        id: 5,
        entityID: 1,
        name: "Laptop Asus X540LA-XX532D",
        category: "Portatil",
        brands: "Asus",
        model: "X540LA-XX532D",
        classification: "Laptop",
        subClassification: "Intel Core i3",
        description: "500U 15.6\" 4Gb 500Go HDD Webcam, Wi-Fi, Bluethoot",
        caracteristics: [
            {
                label: "CPU",
                description: "6500U 2.5Ghz"
            },
            {
                label: "RAM",
                description: "12Gb"
            },
            {
                label: "Video",
                description: "4Gb Nvidia Gtx 950M"
            },
            {
                label: "Pantalia",
                description: "15.6\""
            },
            {
                label: "Storage",
                description: "1To Hdd"
            },
            {
                label: "Others",
                description: "Windows 10, DVD, Webcam"
            }
        ],
        price: 3220,
        stock: 2,
        imgPath: "/content/products/1.png"
    },
    {
        id: 6,
        entityID: 1,
        name: "Laptop Asus X540LA-XX532D",
        category: "Portatil",
        brands: "Asus",
        model: "X540LA-XX532D",
        classification: "Laptop",
        subClassification: "Intel Core i3",
        description: "500U 15.6\" 4Gb 500Go HDD Webcam, Wi-Fi, Bluethoot",
        caracteristics: [
            {
                label: "CPU",
                description: "6500U 2.5Ghz"
            },
            {
                label: "RAM",
                description: "12Gb"
            },
            {
                label: "Video",
                description: "4Gb Nvidia Gtx 950M"
            },
            {
                label: "Pantalia",
                description: "15.6\""
            },
            {
                label: "Storage",
                description: "1To Hdd"
            },
            {
                label: "Others",
                description: "Windows 10, DVD, Webcam"
            }
        ],
        price: 3220,
        stock: 2,
        imgPath: "/content/products/1.png"
    },
    {
        id: 7,
        entityID: 1,
        name: "Laptop Asus X540LA-XX532D",
        category: "Portatil",
        brands: "Asus",
        model: "X540LA-XX532D",
        classification: "Laptop",
        subClassification: "Intel Core i3",
        description: "500U 15.6\" 4Gb 500Go HDD Webcam, Wi-Fi, Bluethoot",
        caracteristics: [
            {
                label: "CPU",
                description: "6500U 2.5Ghz"
            },
            {
                label: "RAM",
                description: "12Gb"
            },
            {
                label: "Video",
                description: "4Gb Nvidia Gtx 950M"
            },
            {
                label: "Pantalia",
                description: "15.6\""
            },
            {
                label: "Storage",
                description: "1To Hdd"
            },
            {
                label: "Others",
                description: "Windows 10, DVD, Webcam"
            }
        ],
        price: 3220,
        stock: 2,
        imgPath: "/content/products/1.png"
    },
    {
        id: 8,
        entityID: 1,
        name: "Laptop Asus X540LA-XX532D",
        category: "Portatil",
        brands: "Asus",
        model: "X540LA-XX532D",
        classification: "Laptop",
        subClassification: "Intel Core i3",
        description: "500U 15.6\" 4Gb 500Go HDD Webcam, Wi-Fi, Bluethoot",
        caracteristics: [
            {
                label: "CPU",
                description: "6500U 2.5Ghz"
            },
            {
                label: "RAM",
                description: "12Gb"
            },
            {
                label: "Video",
                description: "4Gb Nvidia Gtx 950M"
            },
            {
                label: "Pantalia",
                description: "15.6\""
            },
            {
                label: "Storage",
                description: "1To Hdd"
            },
            {
                label: "Others",
                description: "Windows 10, DVD, Webcam"
            }
        ],
        price: 3220,
        stock: 2,
        imgPath: "/content/products/1.png"
    }
]

export const productsReducer = (state = initialProductState, action) => {
    
    switch(action.type) {
        
        case ADD_PRODUCT_ACTION:
            break
        
        case UPDATE_PRODUCT_ACTION:
            break
        
        case DELETE_PRODUCT_ACTION:
            return state.filter((product) => product.id !== action.payload)

        case SEARCH_PRODUCT_ACTION:
            return state.filter((product) => product.name.indexOf(action.payload))

        default:
            return state
    }
}