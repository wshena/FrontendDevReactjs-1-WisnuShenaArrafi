import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Navigationlinks, NavigationCategory, NavigationPrice } from '../const';

const CategoriesDropdown = () => {
	return (
		<div className='shadow-[0px_20px_20px_10px_#00000024] w-[150%] absolute flex flex-col p-[2rem] bg-white border rounded-[10px] top-[3rem] gap-[15px]'>
			{
				NavigationCategory.map((item, index) => (
					<a href={item.to} key={index}>{item.link}</a>
				))
			}
		</div>
	)
}

const PriceDropDown = () => {
	return (
		<div className='z-10 shadow-[0px_20px_20px_10px_#00000024] w-[200%] absolute flex flex-col p-[2rem] bg-white border rounded-[10px] top-[3rem] gap-[15px] -left-[3rem]'>
			{
				NavigationPrice.map((item, index) => (
					<a href={item.to} key={index}>{item.link}</a>
				))
			}
		</div>
	)
}

function Filter() {
	const [isClick, setIsClick] = useState(false);
	const [isDropdownCategory, setIsDropdownCategory] = useState(false);
	const [isDropdownPrice, setIsDropdownPrice] = useState(false);

	const toggleDropDownCategory = () => {
		setIsDropdownCategory(!isDropdownCategory)
	}
	const toggleDropDownPrice = () => {
		setIsDropdownPrice(!isDropdownPrice);
	}

	const handleClick = () => {
		setIsClick(!isClick);
	}
  return (
    <div className="py-[3rem]">
			<div className="w-[100%] lg:w-[70%] px-[5rem]">
				<h1 className="text-[3em]">Restaurants</h1>
				<p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, tenetur id. Excepturi eos ipsa repellendus aliquid autem illo maxime sapiente?</p>
			</div>

			<div className="mt-[5rem] border-b border-t px-[5rem] py-[1rem] flex flex-col md:flex-row md:items-center gap-6 w-[100%]">
				<p>Filter By: </p>
				<Link to={isClick ? Navigationlinks[2].to : Navigationlinks[0].to}>
					<button onClick={handleClick} className='flex items-center gap-1 border-b-2'> <span className={`block w-[15px] h-[15px] rounded-full border ${isClick ? 'bg-white' : 'bg-black'}`}></span> Open Now </button>
				</Link>

				<div className="relative">
					<button onClick={toggleDropDownPrice} className='flex items-center gap-3 md:gap-8 justify-between border-b-2'> Price {isDropdownPrice ? <FaAngleUp /> : <FaAngleDown />}</button>
					{
						isDropdownPrice && (
							<PriceDropDown />
						)
					}
				</div>

				<div className="relative">
					<button onClick={toggleDropDownCategory} className='flex items-center md:gap-[3rem] justify-between border-b-2'> Categories {isDropdownCategory ? <FaAngleUp /> : <FaAngleDown />}</button>
					{
						isDropdownCategory && (
							<CategoriesDropdown />
						)
					}
				</div>
			</div>
		</div>
  )
}

export default Filter