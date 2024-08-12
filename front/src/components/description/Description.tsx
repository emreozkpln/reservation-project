import React from "react";
import { FaClock, FaCar, FaUser, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";
import { FaForwardFast } from "react-icons/fa6";

const Description = () => {
	return (
		<div className="ml-4 flex flex-col gap-3">
			<div className="flex gap-3 items-center">
				<div className="bg-[#E8F7F0] p-1 text-[#39C375] w-9 h-9 rounded-lg text-lg">5.0</div>
				<div className="text-[#39C375] text-lg">Perfect</div>
				<div className="flex">
					{Array(5)
						.fill()
						.map((_, index) => (
							<svg key={index} className="w-6 h-6 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
								<path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
							</svg>
						))}
				</div>
			</div>
			<div className="text-[#222933] text-3xl font-semibold mt-2">Can Taksi</div>
			<div className="text-[#607185]">Camikebir, Kemal Arıkan Sk. No:2, 09400 Kuşadası/Aydın</div>
			<div>
				<div className="relative inline-block">
					<p className="text-[#318AFF] text-sm font-medium">Description</p>
					<div className="absolute left-0 right-0 bottom-[-9px] h-[4px] bg-[#318AFF] w-6" />
				</div>
			</div>
			<div className="text-[#6A798E] leading-7 text-sm mt-5">
				Can Taxi set out with the mission of providing the most reliable and comfortable travel experience in the city. With our professional and friendly drivers, we ensure that every journey is enjoyable and trouble-free. Whether it is for a business meeting, a meeting with friends, or just for your daily tasks, Can Taxi is always with you. Set off with our modern vehicle fleet and customer-oriented service approach and experience the difference!
			</div>
			<div className="text-[#242833] text-lg font-medium mt-3">Özellikler</div>
			<div>
				<div className="flex gap-5 lg:flex-row flex-col">
					<div className="flex items-center gap-2">
						<FaClock size={20} /> 7/24 Hizmet
					</div>
					<div className="flex items-center gap-2">
						<FaUser /> Güvenilir ve Deneyimli Şoförler
					</div>
					<div className="flex items-center gap-2">
						<FaCar /> Modern Araç Filosu
					</div>
					<div className="flex items-center gap-2">
						<FaForwardFast /> Hızlı Rezervasyon
					</div>
					<div className="flex items-center gap-2">
						<FaMoneyBillWave /> Şeffaf Ücretlendirme
					</div>
					<div className="flex items-center gap-2">
						<FaCheckCircle /> Müşteri Memnuniyeti
					</div>
				</div>
			</div>
		</div>
	);
};

export default Description;
