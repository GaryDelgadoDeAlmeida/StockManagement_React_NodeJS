import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { findSpecificParent } from "../../../functions";
import { addProductAction } from "../../../redux/product/selectors";
import Notification from "../../part/Notification";

export default function NewProductForm() {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [notifMessage, setNotifMessage] = useState("")
    const [notifClassname, setNotifClassname] = useState("")
    const [category, setCategory] = useState("")
    const [brands, setBrands] = useState("")
    const [model, setModel] = useState("")
    const [classification, setClassification] = useState("")
    const [subClassification, setSubClassification] = useState("")
    const [caracteristics, setCaracteristics] = useState([])
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [countCaracteristics, setCountCaracteristics] = useState(1)

    const handleClick = (e) => {
        let parent = findSpecificParent(e.target, "form-multiple-fields", true)
        
        if([undefined, null].indexOf(parent) === -1) {
            parent.innerHTML = `
                <div id="${countCaracteristics}" class="form-multiple-bg">
                    <div class="form-field">
                        <label>Name</label>
                        <input type="text" maxLength="255" onchange="handleMultipleField" />
                    </div>
                    <div class="form-field">
                        <label>Description</label>
                        <input type="text" maxLength="255" onchange="handleMultipleField" />
                    </div>
                </div>
            `
            setCountCaracteristics(countCaracteristics + 1)
        }
    }

    const handleMultipleField = () => {
        console.log("handleMultipleField")

        // handleChange(e, "")
    }

    const handleChange = (e, fieldName) => {
        console.log("Hello handleChange")
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addProductAction({
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
                <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "name")} />
            </div>

            <div className={"form-field"}>
                <label>Category</label>
                <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "category")} />
            </div>
            
            <div className={"form-field"}>
                <label>Brands</label>
                <input type={"text"} maxLength={"150"} onChange={(e) => handleChange(e, "brands")} />
            </div>

            <div className={"form-field"}>
                <label>Model</label>
                <input type={"text"} maxLength={"150"} onChange={(e) => handleChange(e, "model")} />
            </div>
            
            <div className={"form-field"}>
                <label>Classfication</label>
                <input type={"text"} maxLength={"150"} onChange={(e) => handleChange(e, "classification")} />
            </div>
            
            <div className={"form-field"}>
                <label>Sub classification</label>
                <input type={"text"} maxLength={"150"} onChange={(e) => handleChange(e, "sub_classification")} />
            </div>
            
            <div className={"form-field"}>
                <label>Caracteristics</label>
                <div className={"form-multiple-fields"}>
                    {caracteristics.map((field, i) => {
                        return (
                            <div key={i}>
                                <div className={"form-field"}>
                                    <label>Caracteristic name</label>
                                    <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "caracteristics")} />
                                </div>
                                <div className={"form-field"}>
                                    <label>Description</label>
                                    <input type={"text"} maxLength={"255"} onChange={(e) => handleChange(e, "caracteristics")} />
                                </div>
                            </div>
                        )
                    })}
                    
                    <button type={"button"} onClick={(e) => handleClick(e)}>Add a caracteristic</button>
                </div>
            </div>
            
            <div className={"form-field"}>
                <label>Price</label>
                <input type={"number"} min={"0"} onChange={(e) => handleChange(e, "price")} />
            </div>
            
            <div className={"form-field"}>
                <label>Stock</label>
                <input type={"number"} min={"0"} onChange={(e) => handleChange(e, "stock")} />
            </div>
            
            <div className={"form-button"}>
                <button type={"submit"}>Submit</button>
                <button type={"reset"}>Reset</button>
            </div>
        </form>
    )
}