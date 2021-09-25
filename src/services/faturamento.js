import { URL_API } from "./base";

export function getFaturamento(){
    return fetch(`${URL_API}/faturamento`).then(data => data.json());
}