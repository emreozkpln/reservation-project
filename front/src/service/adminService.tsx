const baseUrl = process.env.NEXT_PUBLIC_LOCAL_URL;

export const loginFunc = async ({ username, password }: Admin) => {
	try {
		const response = await fetch(`${baseUrl}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
	}
};

export const getReservations = async ({ token }: { token: string }) => {
	try {
		const response = await fetch(`${baseUrl}/admin_only`, {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			next: { revalidate: 10 },
		});

		const result = await response.json();
		return result;
	} catch (error: any) {
		return {
			message: error.message,
		};
	}
};

export const deleteReservation = async ({ token, id }: { token: string; id: number }) => {
	try {
		const response = await fetch(`${baseUrl}/admin_only/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		});
		const result = await response.json();
		return result;
	} catch (error: any) {
		return {
			message: error.message,
		};
	}
};
