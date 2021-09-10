import {REQUEST_ERROR, REQUEST_PENDING, REQUEST_SUCCES} from "./actionTypes";
import {API_URL_ANIMALS} from "../../constants";

const getAnimalsPending = () => ({
    type: REQUEST_PENDING
});
const getAnimalsSucces = (animals) => ({
    type: REQUEST_SUCCES,
    payload: animals
});
const getAnimalsError = (error) => ({
    type: REQUEST_ERROR,
    payload: error
});
export const getAnimals = () => async (dispatch) => {
    dispatch(getAnimalsPending());

    try{
        const response = await fetch(API_URL_ANIMALS);
        console.log(response);
        if(!response.ok){
            throw new Error(`Запрс утерян: ${response.status}`);
        }
        const result = await response.json();
        dispatch(getAnimalsSucces(result));
    } catch (err) {
        dispatch(getAnimalsError(true));
    }
}