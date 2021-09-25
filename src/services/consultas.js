import { URL_API } from "./base";

export function getConsultas(){
    return fetch(`${URL_API}/consultas`).then(data => data.json());
}