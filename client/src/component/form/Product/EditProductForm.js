import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkBrands, checkMaxCharacters, checkNumber } from "../../../functions";
import Notification from "../../part/Notification";
import { updateProductAction } from "../../../redux/product/selectors"

export default function EditProductForm({productID}) {
    const dispatch = useDispatch()
    const product = useSelector(({products}) => products.filter((prd) => prd.id === productID)[0])
    
    const [notifMessage, setNotifMessage] = useState("")
    const [notifClassname, setNotifClassname] = useState("")
    
    const [name, setName] = useState(product.name)
    const [category, setCategory] = useState(product.category)
    const [brands, setBrands] = useState(product.brands)
    const [model, setModel] = useState(product.model)
    const [classification, setClassification] = useState(product.classification)
    const [subClassification, setSubClassification] = useState(product.subClassification)
    const [caracteristics, setCaracteristics] = useState(product.caracteristics)
    const [stock, setStock] = useState(product.stock)
    const [price, setPrice] = useState(product.price)

    const setResponse = (className, message) => {
        setNotifMessage(message)
        setNotifClassname(className)
    }

    const handleChange = (e, fieldName) => {
        let fieldValue = e.target.value
        setResponse("", "")

        switch(fieldName) {
            case "name":
                setName(fieldValue)
                break

            case "category":

                // Check if the max caracters length has been respected
                if(!checkMaxCharacters(fieldValue, 255)) {
                    setResponse("warning", "The category must be inferior to 255 caracters length")
                    return
                }

                setCategory(fieldValue)
                break

            case "brands":

                // Check if the max caracters length has been respected
                if(!checkMaxCharacters(fieldValue, 255)) {
                    setResponse("warning", "The brand must be inferior to 255 caracters lenght")
                    return
                }

                // Check if the brand exist
                if(!checkBrands(fieldValue)) {
                    setResponse("warning", `The brand ${fieldValue} don't exist.`)
                    return
                }

                setBrands(fieldValue)
                break

            case "model":
                if(!checkMaxCharacters(fieldValue, 150)) {
                    setResponse("warning", "The model must be in inferior to 150 caracters length")
                }

                setModel(fieldValue)
                break

            case "classification":
                setClassification(fieldValue)
                break

            case "sub_classification":
                setSubClassification(fieldValue)
                break

            case "caracteristics":
                caracteristics.push({
                    name: "",
                    value: fieldValue
                })
                setCaracteristics(caracteristics)
                break

            case "price":
                if(!checkNumber(fieldValue)) {
                    setResponse("warning", "An error has been found the price. It can't be inferior to 0 and must be a number")
                    return
                }

                setPrice(fieldValue)
                break

            case "stock":
                if(!checkNumber(fieldValue)) {
                    setResponse("warning", "An error has been found the stock. It can't be inferior to 0 and must be a number")
                    return
                }

                setStock(fieldValue)
                break

            default:
                setResponse("danger", `An error has been found with the unknown field name "${fieldName}".`)
                break
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(updateProductAction(0, {
            name: name,
            category: category,
            brands: brands,
            model: model,
            classification: classification,
            subClassification: subClassification,
            caracteristics: caracteristics,
            price: price,
            stock: stock
        }))
    }

    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>

            {notifMessage !== "" && (
                <Notification className={notifClassname} message={notifMessage} />
            )}

            <div className={"form-field"}>
                <label>Name</label>
                <input type={"text"} value={name} maxLength={"255"} onChange={(e) => handleChange(e, "name")} />
            </div>

            <div className={"form-field"}>
                <label>Category</label>
                <input type={"text"} value={category} maxLength={"255"} onChange={(e) => handleChange(e, "category")} />
            </div>
            
            <div className={"form-field"}>
                <label>Brands</label>
                <input type={"text"} value={brands} maxLength={"150"} onChange={(e) => handleChange(e, "brands")} />
            </div>

            <div className={"form-field"}>
                <label>Model</label>
                <input type={"text"} value={model} maxLength={"150"} onChange={(e) => handleChange(e, "model")} />
            </div>
            
            <div className={"form-field"}>
                <label>Classfication</label>
                <input type={"text"} value={classification} maxLength={"150"} onChange={(e) => handleChange(e, "classification")} />
            </div>
            
            <div className={"form-field"}>
                <label>Sub classification</label>
                <input type={"text"} value={subClassification} maxLength={"150"} onChange={(e) => handleChange(e, "sub_classification")} />
            </div>
            
            <div className={"form-field"}>
                <label>Caracteristics</label>
                <div className={"form-multiple-fields"}>
                    {caracteristics.map((field, i) => {
                        return (
                            <div key={i} className={"form-field"}>
                                <label>{field.label}</label>
                                <input type={"text"} value={field.description} maxLength={"255"} onChange={(e) => handleChange(e, "caracteristics")} />
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div className={"form-field"}>
                <label>Price</label>
                <input type={"number"} value={price} min={"0"} onChange={(e) => handleChange(e, "price")} />
            </div>
            
            <div className={"form-field"}>
                <label>Stock</label>
                <input type={"number"} value={stock} min={"0"} onChange={(e) => handleChange(e, "stock")} />
            </div>
            
            <div className={"form-button"}>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}