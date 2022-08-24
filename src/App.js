import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import City from "./City.jsx";

function App() {
	const key = "17574b3f26ea6862ad4242bac500a80d";
	const [search, setSearch] = useState("");

	const [city, setCity] = useState();

	useEffect(() => {
		async function getApi() {
			try {
				const response = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric `
				);
				console.log(response);
				setCity(response.data);
			} catch (error) {
				console.error(error);
			}
		}
		getApi();
	}, [search]);
	console.log(search);
	return (
		<body class="body">
			<div className="App">
				<div className="p-5 w-[650px] h-[350px]" id="weather-div">
					<input
						id="weather-input"
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="LÜTFEN ŞEHİR GİRİNİZ"
					/>

					<City city={city} id="city-place" />
				</div>
			</div>
		</body>
	);
}

export default App;

//
