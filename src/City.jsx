import React from "react";

const City = ({ city }) => {
	console.log(city);

	return (
		<div>
			<div id="city-place" className="mt-4 p-3 shadow-xl w-[450px]  ">
				<h1 className="text-5xl"> {city?.name} </h1>
				<h1 className="text-3xl"> {city?.main?.temp} </h1>
				<h1 className="text-2xl"> {city?.weather[0]?.main} </h1>
			</div>
		</div>
	);
};

export default City;
