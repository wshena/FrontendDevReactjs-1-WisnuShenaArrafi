import axios from "axios"
import { RAPID_API_KEY, RAPID_API_HOST } from "../../env";
export const AllRestaurant =  async () =>{
	const check = localStorage.getItem('restourant');
	
	if (check) {
		// setData(JSON.parse(check))
		return JSON.parse(check)

	} else {
		try {
			const config = {
				method: 'GET',
				url: 'https://travel-advisor.p.rapidapi.com/restaurants/list',
				headers: {
					'x-rapidapi-key': {RAPID_API_KEY},
					'x-rapidapi-host': {RAPID_API_HOST},
				},
				params: {
					location_id: '293919',
					limit: '30'
				}
			}

			const respones = await axios.request(config);
			localStorage.setItem('restourant', JSON.stringify(respones.data.data))
			// setData(respones.data.data);

			console.log(respones.data.data)
			return respones.data.data;
			
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}
}