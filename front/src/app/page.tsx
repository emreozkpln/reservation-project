import Description from "@/components/description/Description";
import ImageList from "@/components/image-list/Gallery";
import Map from "@/components/map/Map";
import ReservationForm from "@/components/reservation-form/ReservationForm";

export default function Home() {
	return (
		<div className="p-3 md:p-5 lg:p-10">
			<div className="flex lg:flex-row flex-col gap-6">
				<div className="flex flex-col gap-6 w-full">
					<ImageList />
					<Description />
				</div>
				<div>
					<ReservationForm />
					<Map />
				</div>
			</div>
		</div>
	);
}
