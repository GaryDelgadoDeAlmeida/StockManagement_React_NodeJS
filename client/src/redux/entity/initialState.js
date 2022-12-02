import { ADD_ENTITY_ACTION, DELETE_ENTITY_ACTION, SEARCH_ENTITY_ACTION, UPDATE_ENTITY_ACTION } from "./actions"

const initialEntityState = [
    {
        id: 1,
        name: "",
        socialName: "",
        legalStatus: "",
        siren: "",
        siret: "",
        address: "",
        zipCode: "",
        city: "",
        country: "",
        contactPersonEmail: "",
        contactPersonPhone: "",
        createdAt: new Date()
    }
]

export const entityReducer = (state = initialEntityState, action) => {
    
    switch(action.type) {
        case ADD_ENTITY_ACTION:
            return state

        case UPDATE_ENTITY_ACTION:
            return state

        case DELETE_ENTITY_ACTION:
            return state.filter((entity) => entity.id !== action.payload)

        case  SEARCH_ENTITY_ACTION:
            return state.filter((entity) => entity.name.indexOf(action.payload))

        default: 
            return state
    }
}