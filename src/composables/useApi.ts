import { AxiosError } from "axios";
import HTTP from "../http";
import { ICharacterRequest } from "../interfaces/Characters";



export function useAPI() {

    const apiGetCharacters = (payload: IOnlineRequest): Promise<ICharacterRequest|null> => {
        return new Promise((resolve, reject) => {
            HTTP<ICharacterRequest>({
                url: "character",
                method: "GET",
                params: {
                    page: payload.page,
                    name: payload.filters.name,
                    status: payload.filters.status
                }
            })
                .then((response) => {
                    if (response && response.status === 200 && response.data) {
                        resolve(response.data)
                    }
                    else {
                        alert("No data found")
                    }
                })
                .catch((error: AxiosError) => {
                    alert(error)
                    reject(error)
                })
        })

        
    }
    return {
        apiGetCharacters
    }
}