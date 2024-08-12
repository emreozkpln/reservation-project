"use client";

import { getClientSideCookie } from "@/lib/client-side-cookies";
import { deleteReservation } from "@/service/adminService";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

export const DeleteReservation = ({ id }: { id: number }) => {
	const router = useRouter();
	const token: any = getClientSideCookie();
	const handleDelete = async () => {
		const data = await deleteReservation({ token, id });
		console.log(data);

		if (data.status === "OK") {
			toast.success("Reservation deleted successfully");
		}
		router.refresh();
	};
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
			onClick={() => {
				handleDelete();
			}}
			aria-disabled={pending}
		>
			Taksi Gönderildi
		</button>
	);
};
