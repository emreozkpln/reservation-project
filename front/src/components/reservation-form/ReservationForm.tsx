"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { TimePicker } from "../time-picker/time-picker";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import createReservation from "@/service/reservationService";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	name: z.string().min(1, "Full name is required"),
	phoneNumber: z.string().min(10, "Phone number must be at least 10 characters long"),
	startingPlace: z.string().min(1, "Starting place is required"),
	destination: z.string().min(1, "Destination is required"),
	date: z.date(),
	description: z.string().optional(),
});

type FormSchemaType = z.infer<typeof formSchema>;

export default function ReservationForm() {
	const router = useRouter();

	const form = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
	});

	async function onSubmit(values: FormSchemaType) {
		const formattedDateTime = format(values.date, "yyyy-MM-dd'T'HH:mm:ss");
		const formattedValues = {
			...values,
			date: formattedDateTime,
		};
		const data = await createReservation(formattedValues);

		if (data?.status === "CREATED") {
			toast.success("Reservation created successfully");
		} else {
			toast.error("Something went wrong");
		}
		router.refresh();
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full lg:w-[500px] border border-gray-300 rounded-3xl p-8 flex flex-col gap-5 mt-4">
				{/* Full Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="flex flex-col space-y-3">
							<FormLabel htmlFor="name" className="text-[#9EA6B3] text-xs">
								Full Name
							</FormLabel>
							<Input id="name" placeholder="Full Name" className="focus-visible:ring-transparent rounded-xl bg-[#F2F3F6] font-medium p-4 placeholder:text-xs placeholder:font-light" {...field} />
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Phone Number */}
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem className="flex flex-col space-y-3">
							<FormLabel htmlFor="phoneNumber" className="text-[#9EA6B3] text-xs">
								Phone Number
							</FormLabel>
							<Input id="phoneNumber" placeholder="Phone Number" className="focus-visible:ring-transparent rounded-xl bg-[#F2F3F6] font-medium p-4 placeholder:text-xs placeholder:font-light" {...field} />
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Starting Place */}
				<FormField
					control={form.control}
					name="startingPlace"
					render={({ field }) => (
						<FormItem className="flex flex-col space-y-3">
							<FormLabel htmlFor="startingPlace" className="text-[#9EA6B3] text-xs">
								Starting Place
							</FormLabel>
							<Input id="startingPlace" placeholder="Starting Place" className="focus-visible:ring-transparent rounded-xl bg-[#F2F3F6] font-medium p-4 placeholder:text-xs placeholder:font-light" {...field} />
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Destination */}
				<FormField
					control={form.control}
					name="destination"
					render={({ field }) => (
						<FormItem className="flex flex-col space-y-3">
							<FormLabel htmlFor="destination" className="text-[#9EA6B3] text-xs">
								Destination
							</FormLabel>
							<Input id="destination" placeholder="Destination" className="focus-visible:ring-transparent rounded-xl bg-[#F2F3F6] font-medium p-4 placeholder:text-xs placeholder:font-light" {...field} />
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Date */}
				<FormField
					control={form.control}
					name="date"
					render={({ field }) => (
						<FormItem className="flex flex-col items-start">
							<FormLabel className="text-[#9EA6B3] text-xs">Date</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<Button variant={"outline"} className={cn("w-full justify-start text-left font-normal", !field.value && "text-muted-foreground")}>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{field.value ? format(field.value, "PPP HH:mm:ss") : <span>Pick a date</span>}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0">
									<Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date < new Date("1900-01-01")} initialFocus />
									<div className="p-3 border-t border-border">
										<TimePicker setDate={field.onChange} date={field.value} />
									</div>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Description */}
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem className="flex flex-col space-y-3">
							<FormLabel htmlFor="description" className="text-[#9EA6B3] text-xs">
								Description
							</FormLabel>
							<Textarea id="description" placeholder="Description" className="focus-visible:ring-transparent rounded-xl bg-[#F2F3F6] font-medium p-4 placeholder:text-xs placeholder:font-light" {...field} />
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit" className="w-full text-sm rounded-xl bg-[#157DFF] hover:bg-[#157DFF]">
					Submit Reservation
				</Button>
			</form>
		</Form>
	);
}
