import axios from "axios"
import { RAPID_API_KEY, RAPID_API_HOST } from "../../env";

export const DetailRestourant = async (id) => {
    const check = localStorage.getItem('DetailRestourant');
    if (check) {
        return JSON.parse(check)
    } else {
        try {
            const config = {
                method: 'GET',
                url: 'https://travel-advisor.p.rapidapi.com/restaurants/get-details',
                headers: {
									'x-rapidapi-key': {RAPID_API_KEY},
									'x-rapidapi-host': {RAPID_API_HOST},
                },
                params: {
                    location_id: `${id}`,
                }
            }

            const respones = await axios.request(config);
            localStorage.setItem('DetailRestourant', JSON.stringify(respones.data))
            return respones.data;

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}