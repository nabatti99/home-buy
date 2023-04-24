import {
	Button,
	Center,
	Column,
	Footer,
	Grid,
	H1,
	H2,
	H3,
	H4,
	Image,
	Input,
	Overlay,
	Row,
	Text,
	Select,
	H5,
	Counter,
	Textarea,
	Toggle,
	TabGroup,
	TabItem,
	TabList,
	TabPanel,
	TabPanels,
} from "@components";
import { CardItem } from "@pages/home/components";
import { joinCls, randomImgUrl } from "@utilities";
import { StarRating } from "./components";

export const ProductPage = ({}: ProductPageProps) => {
	return (
		<div className="container mx-auto">
			<section className="relative pt-24">
				<Grid className="grid-cols-12 grid-rows-1 gap-16">
					<Row className="col-span-7 gap-10 items-stretch">
						<Column className="shrink-0 gap-10">
							{[...Array(4)].map((_, index) => (
								<div className="relative rounded-lg overflow-hidden">
									<Image src={randomImgUrl({ seed: 420 })} className="w-32 h-32" />
									<Overlay>
										<Center className="w-full h-full bg-white-alpha-800">View</Center>
									</Overlay>
								</div>
							))}
						</Column>

						<div className="grow h-[40rem] rounded-lg overflow-hidden">
							<Image src={randomImgUrl({ seed: 600 })} className="w-full h-full" />
						</div>
					</Row>

					<Column className="col-span-5">
						<H2>Lira Earings</H2>
						<H4 className="font-body text-accent mt-4">$ 20,00</H4>

						<Row className="mt-16 gap-6">
							<StarRating onRate={() => {}} totalStars={5} selectedStars={3} />
							<H5 className="text-dark-gray">1 customer review</H5>
						</Row>

						<Text className="text-dark-gray mt-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.
							Sed quis mauris eget arcu facilisis consequat sed eu felis.{" "}
						</Text>

						<Row className="items-center gap-6 mt-12">
							<Counter className="shrink-0" value={12} />
							<Button variant="outline" className="grow">
								ADD TO CART
							</Button>
						</Row>

						<Row className="gap-10 mt-20 text-2xl">
							<i className="ri-heart-line text-dark-gray" />
							<div className="w-[1px] h-full bg-light-gray" />

							<Row className="gap-6">
								<i className="ri-mail-line text-dark-gray" />
								<i className="ri-facebook-line text-dark-gray" />
								<i className="ri-instagram-line text-dark-gray" />
								<i className="ri-twitter-line text-dark-gray" />
							</Row>
						</Row>

						<Row className="gap-4 mt-9">
							<H5>Available items:</H5>
							<H5 className="text-dark-gray">12</H5>
						</Row>

						<Row className="gap-4 mt-2">
							<H5>Categories:</H5>
							<H5 className="text-dark-gray">Fashion, Style</H5>
						</Row>
					</Column>
				</Grid>
			</section>

			<section className="relative mt-28">
				<TabGroup>
					<TabList>
						<TabItem>Description</TabItem>
						<TabItem>Aditional information</TabItem>
						<TabItem>Reviews (0)</TabItem>
					</TabList>

					<TabPanels>
						<TabPanel>
							<Text className="text-dark-gray">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.
								Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
							</Text>
						</TabPanel>

						<TabPanel>
							<Column className="gap-4">
								<Row className="gap-2">
									<H5>Weight:</H5>
									<Text className="text-dark-gray">0.3kg</Text>
								</Row>
								<Row className="gap-2">
									<H5>Dimensions:</H5>
									<Text className="text-dark-gray">15 x 10 x 1 cm</Text>
								</Row>
								<Row className="gap-2">
									<H5>Colors:</H5>
									<Text className="text-dark-gray">Black, Browns, White</Text>
								</Row>
								<Row className="gap-2">
									<H5>Material:</H5>
									<Text className="text-dark-gray">Metal</Text>
								</Row>
							</Column>
						</TabPanel>

						<TabPanel>
							<Grid className="grid-cols-2 grid-rows-1 gap-20">
								<Column className="col-span-1 gap-8">
									<H3>2 Reviews for lira earings</H3>

									<Column className="divide-y divide-light-gray">
										{[...Array(2)].map((_, index) => (
											<Column className="gap-6 py-10">
												<Column className="gap-2">
													<H3>Scarlet Witch</H3>
													<Text className="text-dark-gray">6 May, 2022</Text>
													<StarRating onRate={() => {}} totalStars={5} selectedStars={3} />
												</Column>

												<Text className="text-dark-gray">
													Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Lorem ipsum dolor sit amet, consectetur
													adipiscing elit. Aliquam placerat.
												</Text>
											</Column>
										))}
									</Column>
								</Column>

								<Column className="col-span-1">
									<H3>Add a Review</H3>
									<Text className="text-dark-gray text-sm mt-3">Your email address will not be published. Required fields are marked *</Text>

									<Column className="gap-4 mt-16">
										<Column className="gap-2">
											<Text>Your Review*</Text>
											<Textarea rows={3} />
										</Column>

										<Input placeholder="Enter your name*" />
										<Input placeholder="Enter your email*" />
									</Column>

									<Row className="gap-4 mt-8">
										<Toggle className="shrink-0" />
										<Text className="text-dark-gray">Save my name, email, and website in this browser for the next time I comment.</Text>
									</Row>

									<Column className="gap-2 mt-12">
										<Text>Your Rating*</Text>
										<StarRating onRate={() => {}} totalStars={5} selectedStars={0} className="text-3xl" enabled />
									</Column>

									<div className="mt-12">
										<Button variant="fill" className="px-12">
											Submit
										</Button>
									</div>
								</Column>
							</Grid>
						</TabPanel>
					</TabPanels>
				</TabGroup>
			</section>

			<section className="relative mt-28">
				<H2>Similar Items</H2>
				<Grid className="grid-cols-3 grid-rows-1 gap-16 mt-12">
					{[...Array(3)].map((_, index) => (
						<CardItem imageUrl={randomImgUrl({ seed: 400 })} name="Hal Earings" price={`$ 25.00`} />
					))}
				</Grid>
			</section>

			<Footer className="mt-52" />
		</div>
	);
};

// Using for lazy loading page
export default ProductPage;
