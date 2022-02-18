import axios from 'axios'

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_ONE_COUNTRY="GET_ONE_COUNTRY";
export const GET_HOUSE = 'GET_HOUSE';
export const DELETE_HOUSE = 'DELETE_HOUSE';

export function getAllCountries(){
    return async function(dispatch){
        let response=await axios.get("http://localhost:3001/countries")
        return dispatch({
            type:GET_ALL_COUNTRIES, payload: response.data
        })
    }
}
export function getOneCountry(ID){
    return async function(dispatch){
        let response= await axios.get(`http://localhost:3001/countries/${ID}`)
        return dispatch({
            type:GET_ONE_COUNTRY, payload:response.data
        })
    }
};

// export const createCharacter = (character) => dispatch => {
//     return axios.post("http://localhost:3004/character/create", character)
//         .then((data)=>{
//             dispatch({type:CREATE_CHARACTER, payload: data})
//         })
// };