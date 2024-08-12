"use client";

import { getReservations } from "@/service/adminService";
import React, { useEffect, useState } from "react";
import ReservationCards from "@/components/reservation-card/ReservationCards";
import { getClientSideCookie } from "@/lib/client-side-cookies";

const AdminPage = () => {
	const [data, setData] = useState<Reservation[]>([]);
	const token: any = getClientSideCookie();

	const fetchData = async () => {
		const result = await getReservations({ token });
		setData(result);
	};
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		const intervalId = setInterval(fetchData, 5000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div>
			<ReservationCards data={data} />
		</div>
	);
};

export default AdminPage;
