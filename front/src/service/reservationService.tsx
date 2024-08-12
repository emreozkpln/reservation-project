type Reservation = {
	name: string;
	phoneNumber: string;
	startingPlace: string;
	destination: string;
	date: string;
	description?: string | undefined;
};

const baseUrl = process.env.NEXT_PUBLIC_LOCAL_URL;

export default async function createReservation(value: Reservation) {
	const response = fetch(`${baseUrl}/api/v1/reservations/create`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: value.name,
			phoneNumber: value.phoneNumber,
			startingPlace: value.startingPlace,
			destination: value.destination,
			date: value.date,
			description: value.description,
		}),
	});
	const result = (await response).json();
	return result;
}
