/* eslint-disable react/prop-types */
import { FaStar, FaStarHalf } from 'react-icons/fa';

function Rating({rating}) {
  const maxStars = 5; // Set the maximum number of stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

	// Create an array with the number of full stars
  const starsArray = Array.from({ length: fullStars }, (_, index) => (
    <FaStar key={index} className="text-blue-950" />
  ));

  // Add a half star if applicable
  if (hasHalfStar) {
    starsArray.push(<FaStarHalf key="half" className="text-blue-950" />);
  }

  // Fill remaining stars with empty stars
  const emptyStars = maxStars - starsArray.length;
  for (let i = 0; i < emptyStars; i++) {
    starsArray.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
  }
  return (
		<div className="flex items-center">{starsArray}</div>
  )
}

export default Rating