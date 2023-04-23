import { Button, Center, Column, Footer, Grid, H1, H2, H3, H4, Image, Input, Overlay, Row, Text, Select, Option, H5, Toggle } from "@components";
import { joinCls, randomImgUrl } from "@utilities";

export const HomePage = ({}: HomePageProps) => {
	return (
		<div className="container mx-auto">
			<H1 className="text-dark pt-24">Shop The Latest</H1>

			<Grid className="grid-cols-12 grid-rows-1 mt-10 gap-9">
				<Column className="col-span-3">
					<Input placeholder="Search..." />

					<Select className="mt-10">
						<Option>123123</Option>
						<Option>123123</Option>
						<Option>123123</Option>
					</Select>

					<Select className="mt-4">
						<Option>123123</Option>
						<Option>123123</Option>
						<Option>123123</Option>
					</Select>

					<Text className="mt-10">TODO: Range</Text>

					<Row className="justify-between items-center mt-10">
						<H5>On sale</H5>
						<div>
							<Toggle checked={true} />
						</div>
					</Row>

					<Row className="justify-between items-center mt-10">
						<H5>On sale</H5>
						<Toggle checked={true} />
					</Row>
				</Column>

				<Grid className="grid-cols-3 grid-rows-2 gap-14 col-span-9">
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
			</Grid>
		</div>
	);
};

// Using for lazy loading page
export default HomePage;
