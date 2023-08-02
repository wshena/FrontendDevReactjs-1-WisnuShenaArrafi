/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Navigationlinks } from "../const";
import Rating from "./Rating"
import { GoDotFill } from 'react-icons/go';

function Card(props) {
  return (
	<>
		<div key={props.id} className=''>
			<div className="border h-[250px]">
				<img src={props?.photo?.images?.large?.url || ''} alt={props.name} className='h-[100%] w-[100%]'/>
			</div>
			<h1 className="my-[10px]">{props.name}</h1>
			<Rating rating={props?.rating || ''}/>

			<div className="flex items-center justify-between my-[1rem]">
				<div className="flex items-center gap-[5px]">
					{
						props.cuisine === undefined ? (
							''
						) : (
							<p className="text-[10px]">{props?.cuisine[0]?.name || ''}</p>
						)
					}
					<p className="text-[10px]">{props.price_level}</p>
				</div>

				{
					props.open_now_text === 'Open Now' ? (
						<div className="flex items-center gap-[5px]">
							<GoDotFill className='text-green-500'/>
							<p className='text-[10px]'>OPEN NOW</p>
						</div>
					) : (
						<div className="flex items-center gap-[5px]">
							<GoDotFill className='text-red-500'/>
							<p className='text-[10px]'>CLOSED</p>
						</div>
					)
				}
			</div>
			
				<Link to={Navigationlinks[1].to}>
					<button className='block bg-blue-950 text-white w-[100%] p-[0.6rem]'>LEARN MORE</button>
				</Link>
		</div>		
	</>
  )
}

export default Card