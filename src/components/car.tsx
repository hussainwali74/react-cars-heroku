import React from "react"

export interface CarType {
	body_style: string
	car_name: string
	car_page_link: string
	city: string
	drivetrain: string
	engine: string
	entry_date: string
	exterior: string
	id: number
	img_link: string
	mileage: number
	price: number
	stock: string
	transmission: string
	vin: string
	website: string
}
function currencyFormat(num: number) {
	return "$" + num.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
const Car: React.FC<CarType> = (car) => {
	return (
		<div>
			<div className="w-full p-1 pb-4 overflow-hidden bg-white border rounded ">
				<img
					className="w-full h-64 bg-cover shadow-sm"
					src={
						car.img_link
							? car.img_link
							: "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg"
					}
					alt={car.car_name}
				/>
				<div className="px-2 mt-2">
					<div className="name-detail">
						<span className="flex">
							<h2 className="w-1/4 mt-4 font-semibold text-l">Name:</h2>
							<h2 className="w-3/4 pl-2 mt-4 font-semibold text-blue-900 text-l">
								{car.car_name}
							</h2>
						</span>
					</div>
					<div className="name-detail">
						<span className="flex">
							<h2 className="w-1/4 mt-4 font-semibold text-l">Drive Train:</h2>
							<h2 className="w-3/4 pl-2 mt-4 font-semibold text-blue-900 text-l">
								{car.drivetrain}
							</h2>
						</span>
					</div>
					<div className="name-detail">
						<span className="flex">
							<h2 className="w-1/4 mt-4 font-semibold text-l">Engine:</h2>
							<h2 className="w-3/4 pl-2 mt-4 font-semibold text-blue-900 text-l">
								{car.engine}
							</h2>
						</span>
					</div>
					<div className="name-detail">
						<span className="flex">
							<h2 className="w-1/4 mt-4 font-semibold text-l">Exterior:</h2>
							<h2 className="w-3/4 pl-2 mt-4 font-semibold text-blue-900 text-l">
								{car.exterior}
							</h2>
						</span>
					</div>
					<div className="name-detail">
						<span className="flex">
							<h2 className="w-1/4 mt-4 font-semibold text-l">Mileage:</h2>
							<h2 className="w-3/4 pl-2 mt-4 font-semibold text-blue-900 text-l">
								{car.mileage}
							</h2>
						</span>
					</div>
					<div className="name-detail">
						<span className="flex">
							<h2 className="w-1/4 mt-4 font-semibold text-l">Price:</h2>
							<h2 className="w-3/4 pl-2 mt-4 font-semibold text-blue-900 text-l">
								{currencyFormat(car.price)}
							</h2>
						</span>
					</div>
					<div className="name-detail">
						<span className="flex">
							<h2 className="w-1/4 mt-4 font-semibold text-l">Date:</h2>
							<h2 className="w-3/4 pl-2 mt-4 font-semibold text-blue-900 text-l">
								{new Date(car.entry_date).toLocaleString()}
							</h2>
						</span>
					</div>
					<div className="flex flex-row justify-around mt-4">
						<a href={car.website}>
							<button className="w-full px-4 font-bold text-white bg-green-500 border border-green-700 rounded -pt-1 h-9 hover:bg-green-700">
								Go to Website
							</button>
						</a>
						<a href={car.car_page_link}>
							<button className="w-full px-4 font-bold text-white bg-blue-500 border border-blue-700 rounded -pt-1 h-9 hover:bg-blue-700">
								Car Detail Page
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Car
