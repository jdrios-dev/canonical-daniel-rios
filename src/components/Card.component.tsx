import Image from "next/image";
import React from "react";

const CardComponent = ({ item }) => {
	console.log("1", item);

	return (
		// <div>
		// 	<Image
		// 		alt={item?.title}
		// 		src={item?.featured_media}
		// 		width={300}
		// 		height={150}
		// 	/>
		// 	{item?.title?.rendered}
		// 	<p>{item?.type}</p>
		// </div>

		<div className="p-card">
			<h3> {item?.title?.rendered}</h3>
			<p className="p-card__content">{item?.type}</p>
		</div>
	);
};

export default CardComponent;
