import Car, { CarType } from "../components/car"
import axios from "axios"
import { useEffect, useState } from "react"

const Cars = () => {
	const search = (term: string) => {
		if (term) {
			let searched_cars = cars.filter((item: CarType) => {
				return term
					.toLowerCase()
					.split(" ")
					.every((v) => {
						return (
							item.car_name.toLowerCase().includes(v) ||
							String(item.price).toLowerCase().includes(v)
						)
					})
			})

			setCars(searched_cars)
		} else {
			setCars(allCars)
		}
	}
	const [cars, setCars] = useState([])
	const [allCars, setAllCars] = useState([])
	const [skip, setSkip] = useState(0)
	const [limit, setLimit] = useState(500)

	useEffect(() => {
		var date = new Date()
		date.setDate(date.getDate() - 2)
		const finaldate = date.toISOString().split("T")[0]

		axios
			.get(`https://www.roomie.pk/car/cars/?date_gt=${finaldate}&skip=${skip}&limit=${limit}`)
			.then((x) => {
				//   this.cars = x["data"];
				x["data"].sort(function (a: any, b: any) {
					return Number(new Date(b["entry_date"])) - Number(new Date(a["entry_date"]))
				})
				x["data"] = x["data"].filter((car: CarType) => car.price <= 35000)

				setCars(x["data"])
				setAllCars(x["data"])
				//   this.allcars = this.cars;
			})
			.catch((e) => console.log(e))
	}, [])

	if (!cars.length) {
		return <h3>Loading Cars... Please Wait </h3>
	}
	return (
		<>
			<div className="container px-4 mx-auto xs:bg-red-700">
				<div className="mb-4">
					<label className="block mb-2 text-sm font-bold text-gray-700">Filter Cars</label>
					<input
						className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
						type="text"
						onChange={(e) => search(e.target.value)}
						placeholder="enter search term here"
					/>
				</div>
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
