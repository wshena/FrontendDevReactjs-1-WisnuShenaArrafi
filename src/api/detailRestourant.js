import axios from "axios"

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
                    'x-rapidapi-key': 'd12ac72316msh83c3e7aa7b6586cp1dbe2fjsnf8360065335b',
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
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