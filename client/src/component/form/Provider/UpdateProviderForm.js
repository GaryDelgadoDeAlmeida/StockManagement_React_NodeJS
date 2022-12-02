import { useState } from "react"
import { returnCountries } from "../../../functions"

export default function UpdateProviderForm({entity}) {
    const countries = returnCountries()

    const [name, setName] = useState(entity.name)
    const [socialName, setSocialName] = useState(entity.socialName)
    const [legalStatus, setLegalStatus] = useState(entity.legalStatus)
    const [siren, setSiren] = useState(entity.siren)
    const [siret, setSiret] = useState(entity.siret)
    const [address, setAddress] = useState(entity.address)
    const [zipCode, setZipCode] = useState(entity.zipCode)
    const [city, setCity] = useState(entity.city)
    const [country, setCountry] = useState(entity.country)

    const handleChange = (e) => {
        console.log("Hello handleChange")
    }

    const handleSubmit = (e) => {
        console.log("Hello handleSubmit")
    }
    
    return (
        <form className={"form"} onSubmit={(e) => handleSubmit(e)}>
            <div className={"form-field"}>
                <label htmlFor={"provider-name"}>Name</label>
                <input id={"provider-name"} type={"text"} value={name} onChange={(e) => handleChange(e)} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"provider-socialname"}>Social name</label>
                <input id={"provider-socialname"} type={"text"} value={socialName} onChange={(e) => handleChange(e)} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"provider-legalstatus"}>Legal status</label>
                <input id={"provider-legalstatus"} type={"text"} value={legalStatus} onChange={(e) => handleChange(e)} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"provider-siren"}>n°SIREN</label>
                <input id={"provider-siren"} type={"text"} value={siren} maxLength={14} onChange={(e) => handleChange(e)} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"provider-siret"}>n°SIRET</label>
                <input id={"provider-siret"} type={"text"} value={siret} maxLength={9} onChange={(e) => handleChange(e)} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"provider-address"}>Address</label>
                <input id={"provider-address"} type={"text"} value={address} onChange={(e) => handleChange(e)} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"provider-zipcode"}>Zip Code</label>
                <input id={"provider-zipcode"} type={"text"} value={address} maxLength={10} onChange={(e) => handleChange(e)} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"provider-city"}>City</label>
                <input id={"provider-city"} type={"text"} value={city} onChange={(e) => handleChange(e)} />
            </div>

            <div className={"form-field"}>
                <label htmlFor={"provider-country"}>Country</label>
                <select id={"provider-country"} multiple={false} onChange={(e) => handleChange(e)}>
                    {countries.map((ctr, i) => {
                        return (
                            <option key={i} value={ctr.name} selected={country === ctr.name ? true : false}>{ctr.name}</option>
                        )
                    })}
                </select>
            </div>
            
            <div className={"form-button"}>
                <button type={"reset"}>Reset</button>
                <button type={"submit"}>Submit</button>
            </div>
        </form>
    )
}