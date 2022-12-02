import { ADD_ENTITY_ACTION, UPDATE_ENTITY_ACTION, DELETE_ENTITY_ACTION, SEARCH_ENTITY_ACTION } from "../actions";

export const addEntityAction = (entity) => {
    return {
        type: ADD_ENTITY_ACTION,
        payload: entity
    }
}

export const updateEntityAction = (entityID, entity) => {
    return {
        type: UPDATE_ENTITY_ACTION,
        payload: {
            entityID: entityID,
            dataToUpdate: entity
        }
    }
}

export const deleteEntityAction = (entityID) => {
    return {
        type: DELETE_ENTITY_ACTION,
        payload: entityID
    }
}

export const searchEntityAction = (value) => {
    return {
        type: SEARCH_ENTITY_ACTION,
        payload: value
    }
}