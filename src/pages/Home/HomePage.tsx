import { Button, Center, Column, Footer, Grid, H1, H2, H3, H4, Image, Overlay, Row, Text } from "@components";
import { joinCls, randomImgUrl } from "@utilities";

export const HomePage = ({}: HomeProps) => {
	return (
		<div className="container mx-auto">
			<section className="relative mt-4">
				<Image src={randomImgUrl({ seed: 661 })} className="w-full h-[46rem]" />
				<Overlay className="flex flex-col justify-center p-10">
					<Column className="gap-12">
						<Column>
							<H1 className="text-white">Gold big hoops</H1>
							<H2 className="text-white mt-4 !font-body">$ 68,00</H2>
						</Column>

						<Button variant="outline" className="w-48 !text-white !fill-white !border-white hover:!bg-white-alpha-400">
							View Product
						</Button>
					</Column>
				</Overlay>
				<div className="absolute bottom-6 left-0 w-full ">
					<Row className="justify-center">
						{[...Array(5)].map((_, index) => (
							<Center className="w-6 h-6">
								<div
									className={joinCls(
										"rounded-full cursor-pointer hover:w-5 hover:h-5 hover:border-2 hover:border-white",
										false ? "w-5 h-5 border-2 border-white bg-transparent" : "w-3 h-3 bg-white"
									)}
								/>
							</Center>
						))}
					</Row>
				</div>
			</section>

			<section className="relative mt-16">
				<Row className="justify-between items-center">
					<H1 className="text-dark">Shop The Latest</H1>
					<H4 className="text-accent cursor-pointer">View All</H4>
				</Row>

				<Grid className="grid-cols-3 grid-rows-2 gap-14 mt-10">
					{[...Array(6)].map((_, index) => (
						<Column>
							<div className="relative rounded-lg overflow-hidden">
								<Image src={randomImgUrl({ seed: 400 })} className="h-96" />
								<Overlay className="opacity-0 cursor-pointer hover:opacity-100">
									<Column className="h-full justify-end">
										<Text className="text-center text-lg py-4 bg-white-alpha-600 hover:bg-white-alpha-800">ADD TO CART</Text>
									</Column>
								</Overlay>
								{/* <Overlay className="opacity-0">
									<Center className="w-full h-full bg-white-alpha-800">
										<Row className="gap-8 text-2xl">
											<i className="ri-shopping-cart-line" />
											<i className="ri-eye-line" />
											<i className="ri-heart-line" />
										</Row>
									</Center>
								</Overlay> */}
							</div>
							<H3 className="text-black mt-6">Lira Earning</H3>
							<Text className="text-accent mt-2">$ 20,00</Text>
						</Column>
					))}
				</Grid>
			</section>

			<Footer className="mt-52" />
		</div>
	);
};

// Using for lazy loading page
export default HomePage;
