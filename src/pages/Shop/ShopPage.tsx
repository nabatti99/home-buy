import { Button, Center, Column, Grid, H1, H2, H3, H4, Image, Input, Overlay, Row, Text, Select, H5, Toggle, Footer } from "@components";
import { CardItem } from "@pages/home/components";
import { joinCls, randomImgUrl } from "@utilities";

export const HomePage = ({}: HomePageProps) => {
	return (
		<div className="container mx-auto">
			<H1 className="text-dark pt-24">Shop The Latest</H1>

			<Grid className="grid-cols-12 grid-rows-1 mt-10 gap-9">
				<Column className="col-span-3">
					<Input placeholder="Search..." icon={<i className="ri-search-line" />} />

					<Select
						className="mt-10 z-[2]"
						placeholder="Shop By"
						options={[
							{ label: "123", value: "123" },
							{ label: "1231", value: "1231" },
							{ label: "1232", value: "1232" },
						]}
						onChange={console.log}
					/>

					<Select
						className="mt-4 z-[1]"
						placeholder="Shop By"
						options={[
							{ label: "123", value: "123" },
							{ label: "1231", value: "1231" },
							{ label: "1232", value: "1232" },
						]}
						onChange={console.log}
					/>

					<Text className="mt-10">TODO: Range</Text>

					<Row className="justify-between items-center mt-10">
						<H5>On sale</H5>
						<div>
							<Toggle checked={false} />
						</div>
					</Row>

					<Row className="justify-between items-center mt-10">
						<H5>On sale</H5>
						<Toggle checked={true} />
					</Row>
				</Column>

				<Grid className="grid-cols-3 grid-rows-2 gap-14 col-span-9">
					{[...Array(6)].map((_, index) => (
						<CardItem imageUrl={randomImgUrl({ seed: 400 })} name="Hal Earings" price={`$ 25.00`} />
					))}
				</Grid>
			</Grid>

			<Footer className="mt-52" />
		</div>
	);
};

// Using for lazy loading page
export default HomePage;
