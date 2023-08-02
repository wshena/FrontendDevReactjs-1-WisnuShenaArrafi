/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { AllRestaurant } from '../api/allRestaurant';
import Card from './Card';

function Restaurant() {
	const [data, setData] = useState([]);
	const filteredData = data.filter(item => item.cuisine !== undefined)

	const longestName = filteredData.reduce((prev, current) => {
    return current.name.length > prev.name.length ? current : prev;
  }, filteredData[0]);

	const [visibleItems, setVisibleItems] = useState(8);
  const totalItems = 30; // total restourant yang di fetch dari API
	const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 8);
  };

	const fetchData = async () => {
		const apiData = await AllRestaurant();
		if(apiData) setData(apiData)
	}
	
	useEffect(() => {
		fetchData();
	},[])

  return (
	<div className='w-[100%]'>
		<h1 className='mb-[30px] text-[30px]'>All Restaurant</h1>
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[50px]'>

			<Card {...longestName}/>

			{filteredData.slice(0, visibleItems).map((item, index) => (
				<Card key={index} {...item}/>
			))}
		</div>

		{
			visibleItems < totalItems && (
				<div className="flex items-center justify-center w-[100%]">
					<button onClick={handleLoadMore} className='my-[3rem] w-[30%] h-[2rem] border border-blue-950 text-[12px] text-blue-950'>LOAD MORE</button>
				</div>
			)
		}
	</div>
  )
}

export default Restaurant