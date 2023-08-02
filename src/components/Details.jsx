import { useEffect, useState } from 'react';
import Rating from "./Rating"
import { GoDotFill } from 'react-icons/go';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { DetailRestourant } from '../api/detailRestourant';
import { Link } from 'react-router-dom';
import { Navigationlinks } from '../const';

// eslint-disable-next-line react/prop-types
function Details() {
	const [data, setData] = useState({});

	const fetchData = async () => {
		const apiData = await DetailRestourant(data.location_id);
		if(apiData) setData(apiData)
	}
	
	useEffect(() => {
		fetchData();
	},[])

  return (
		<>
		<Link to={Navigationlinks[0].to} className='flex items-center gap-4 px-[5rem] text-[40px] uppercase'><AiOutlineArrowLeft /> Back</Link>
		<div className='w-[100%] flex flex-col gap-[30px] px-[5rem] pb-[5rem] mt-[1rem]'>
			<div className='w-[100%] h-[500px]'>
				<img src={data?.photo?.images?.large?.url || ''} alt={data.name} className='h-[100%] w-[100%]'/>
			</div>
			<div className='flex flex-col gap-3 text-start'>
				<div className="flex items-center justify-between">
					<div className='flex items-center gap-3'>
						<h1 className='text-[2em]'>{data.name}</h1>
						<Rating rating={data?.rating || ''}/>
					</div>
					
					{
					data.open_now_text ? (
						<div className="flex items-center gap-[5px]">
							<GoDotFill className='text-green-500'/>
							<p className='text-[20px]'>OPEN NOW</p>
						</div>
					) : (
						<div className="flex items-center gap-[5px]">
							<GoDotFill className='text-red-500'/>
							<p className='text-[20px]'>CLOSED</p>
						</div>
					)
				}

				</div>
				<p className='text-[15px]'>{data.description}</p>

				<h5 className='text-[20px]'>Menu :</h5>
				<div className='grid grid-cols-3 gap-[10px]'>
					{
						data.dishes === undefined ? (
							''
						) : (
							data.dishes.map((items, index) => (
								<div className="flex items-center gap-[5px]" key={index}>
									<GoDotFill />
									<p>{items.name}</p>
								</div>
							))
						)
					}
				</div>
			</div>
		</div>
		<h1 className='hidden'>{data.name}</h1>
		</>
  )
}

export default Details