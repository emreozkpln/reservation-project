import { formatCreatedDate, formatSimpleDate } from "@/lib/utils/formatTimestamp";
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { DeleteReservation } from "../delete-reservation/DeleteReservation";

const ReservationCards = ({ data }: { data: Reservation[] }) => {
	return (
		<div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{data.length > 0 ? (
				data.map((reservation: Reservation, index: number) => (
					<div key={reservation.id} className="bg-gray-100 rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105">
						<div className="relative p-6 flex flex-col items-center text-center text-gray-800">
							<div className="mb-1">
								<h2 className="text-2xl font-bold mb-2">{reservation.name}</h2>
								<p className="text-lg">{reservation.phoneNumber}</p>
							</div>
							<div className="w-full border-t border-gray-300 my-4"></div>
							<div className="text-sm">
								<p className="mb-2">
									<strong>Başlangıç Yeri:</strong> {reservation.startingPlace}
								</p>
								<p className="mb-2">
									<strong>Varış Yeri:</strong> {reservation.destination}
								</p>
								<p className="mb-2">
									<strong>Tarih:</strong> {formatSimpleDate(reservation.date)}
								</p>
								<p className="mb-2">
									<strong>Oluşturulma Tarihi:</strong> {formatCreatedDate(reservation.createdDate)}
								</p>
								<p className="mb-2">
									<strong>Açıklama:</strong> {reservation.description}
								</p>
							</div>
							<div className="mt-6 flex justify-center gap-4">
								<Dialog>
									<DialogTrigger asChild>
										<Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Detay</Button>
									</DialogTrigger>
									<DialogContent className="sm:max-w-[425px]">
										<DialogHeader>
											<DialogTitle>Detay</DialogTitle>
										</DialogHeader>
										<div className="grid gap-4 py-4">
											<div className="grid grid-cols-4 items-center gap-4">
												<Label htmlFor="name" className="text-right">
													İsim
												</Label>
												<Textarea id="name" defaultValue={reservation.name} disabled className="col-span-3" />
											</div>
											<div className="grid grid-cols-4 items-center gap-4">
												<Label htmlFor="username" className="text-right">
													Telefon Numarası
												</Label>
												<Textarea id="username" defaultValue={reservation.phoneNumber} disabled className="col-span-3" />
											</div>
											<div className="grid grid-cols-4 items-center gap-4">
												<Label htmlFor="name" className="text-right">
													Başlangıç Yeri
												</Label>
												<Textarea id="name" defaultValue={reservation.startingPlace} disabled className="col-span-3" />
											</div>
											<div className="grid grid-cols-4 items-center gap-4">
												<Label htmlFor="name" className="text-right">
													Bitiş Yeri
												</Label>
												<Textarea id="name" defaultValue={reservation.destination} disabled className="col-span-3" />
											</div>
											<div className="grid grid-cols-4 items-center gap-4">
												<Label htmlFor="name" className="text-right">
													Tarih
												</Label>
												<Textarea id="name" defaultValue={formatSimpleDate(reservation.date)} disabled className="col-span-3" />
											</div>
											<div className="grid grid-cols-4 items-center gap-4">
												<Label htmlFor="name" className="text-right">
													Oluşturulma Tarihi
												</Label>
												<Textarea id="name" defaultValue={formatCreatedDate(reservation.createdDate)} disabled className="col-span-3" />
											</div>
											<div className="grid grid-cols-4 items-center gap-4">
												<Label htmlFor="name" className="text-right">
													Açıklama
												</Label>
												<Textarea id="name" defaultValue={reservation.description} disabled className="col-span-3" />
											</div>
										</div>
									</DialogContent>
								</Dialog>
								<DeleteReservation id={reservation.id} />
							</div>
						</div>
					</div>
				))
			) : (
				<p>Rezervasyon bulunamadı.</p>
			)}
		</div>
	);
};

export default ReservationCards;
