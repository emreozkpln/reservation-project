"use client";
import Image from "next/image";
import img from "@/images/cantaxi-img.webp";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
	return (
		<div className="container mx-auto p-4">
			<Carousel plugins={[Autoplay({ delay: 1500 })]} className="w-full lg:hidden">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<span className="text-4xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			<div className=" lg:grid lg:grid-cols-3 gap-3 hidden">
				<div className="col-span-2">
					<Image src={img} alt="Large Photo" className="object-center w-full h-[150px] lg:h-full  rounded-xl lg:rounded-l-3xl" />
				</div>
				<div className="flex flex-col justify-between">
					<div>
						<Image src={img} alt="Small Photo 1" width={300} className="object-center lg:object-cover w-full h-[150px] rounded-xl lg:rounded-tr-3xl" />
					</div>
					<div className="mt-3">
						<Image src={img} alt="Small Photo 2" width={300} className="object-center lg:object-cover w-full h-[150px] rounded-xl" />
					</div>
					<div className="mt-3">
						<Image src={img} alt="Small Photo 3" width={300} className="object-center lg:object-cover w-full h-[150px] rounded-xl lg:rounded-br-3xl" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
