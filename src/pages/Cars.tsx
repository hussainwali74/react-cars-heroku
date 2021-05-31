import Car from "../components/car"
import axios from "axios"
import { useEffect, useState } from "react"

const Cars = () => {
	const [cars, setCars] = useState([])
	useEffect(() => {
		var date = new Date()
		date.setDate(date.getDate() - 2)
		const finaldate = date.toISOString().split("T")[0]

		axios
			.get(
				`https://www.roomie.pk/car/cars/?date_gt=${finaldate}&skip=0&limit=100`
			)
			.then((x) => {
				//   this.cars = x["data"];
				x["data"].sort(function (a: any, b: any) {
					return (
						Number(new Date(b["entry_date"])) -
						Number(new Date(a["entry_date"]))
					)
				})
				setCars(x["data"])
				//   this.allcars = this.cars;
				console.log(cars)
			})
			.catch((e) => console.log(e))
	}, [])
	if (!cars.length) {
		return <h3>Please Wait... loading cars</h3>
	}
	return (
		<>
			<div className="container px-4 mx-auto xs:bg-red-700">
				<div className="grid grid-cols-1 gap-2 lg:gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					{cars?.map((car, index) => (
						<Car key={index} {...car} />
					))}
				</div>
			</div>
		</>
	)
}

export default Cars
