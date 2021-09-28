import { URL_API } from "./base";

export function getResumo(){
    return fetch(`${URL_API}/resumo`, {mode:'cors'}).then(data => data.json());
}