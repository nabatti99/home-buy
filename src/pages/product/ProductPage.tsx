import { Button, Center, Column, Footer, Grid, H1, H2, H3, H4, Image, Input, Overlay, Row, Text, Select, Option, H5 } from "@components";
import { CardItem } from "@pages/home/components";
import { joinCls, randomImgUrl } from "@utilities";

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
						<H4 className="font-body text-accent mt-6">$ 20,00</H4>

						<Row className="mt-16 gap-6">
							<Row className="gap-2">
								{[...Array(5)].map((_, index) => (
									<i className="ri-star-fill" />
								))}
							</Row>
							<H5 className="text-dark-gray">1 customer review</H5>
						</Row>

						<Text className="text-dark-gray mt-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.
							Sed quis mauris eget arcu facilisis consequat sed eu felis.{" "}
						</Text>

						<Row className="items-center gap-6 mt-12">
							<div className="shrink-0">TODO: Counter</div>
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

			<section className="relative mt-28">TODO: Tab</section>

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
