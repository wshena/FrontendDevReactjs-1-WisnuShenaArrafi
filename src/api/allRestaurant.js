import axios from "axios"

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
					'x-rapidapi-key': 'd12ac72316msh83c3e7aa7b6586cp1dbe2fjsnf8360065335b',
					'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
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