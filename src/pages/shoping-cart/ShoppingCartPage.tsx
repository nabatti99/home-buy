import { Button, Center, Column, Grid, H1, H2, H3, H4, Image, Input, Overlay, Row, Text, Select, H5, Toggle, Footer, Counter } from "@components";
import { CardItem } from "@pages/home/components";
import { joinCls, randomImgUrl } from "@utilities";

export const ShoppingCartPage = ({}: ShoppingCartPageProps) => {
	return (
		<div className="container mx-auto">
			<H1 className="text-center pt-24">Shopping Cart</H1>

			<Grid className="grid-cols-12 grid-rows-1 mt-10 gap-20">
				<Column className="col-span-7 divide-y divide-in-gray">
					{[...Array(3)].map((_) => (
						<Row className="gap-10 py-10 items-stretch">
							<Image src={randomImgUrl({ width: 400, height: 600 })} className="w-32 h-32 shrink-0 rounded" />
							<Column className="grow">
								<H3>Lira Earrings</H3>
								<H5 className="text-dark-gray mt-4">Black / Medium</H5>
								<H5 className="!font-body text-accent mt-2">$ 25.00</H5>
							</Column>
							<Column className="justify-between items-end">
								<Counter value={1} />
								<H5 className="text-accent">Remove</H5>
							</Column>
						</Row>
					))}
				</Column>

				<Column className="col-span-5">
					<H2>Cart totals</H2>

					<Grid className="grid-cols-12 grid-rows-1 mt-10">
						<H5 className="col-span-4">SUBTOTAL</H5>
						<H5 className="col-span-8 !font-body">$ 65,00</H5>
					</Grid>

					<Grid className="grid-cols-12 grid-rows-1 mt-10">
						<H5 className="col-span-4">SHIPPING</H5>
						<Column className="col-span-8 gap-8">
							<H5 className="!font-body">Shipping costs will be calculated once you have provided address.</H5>
							<Select options={[{ label: "Viet Nam", value: "vietnam" }]} onChange={console.log} placeholder="Country" className="z-[2]" />
							<Select options={[{ label: "Da Nang", value: "danang" }]} onChange={console.log} placeholder="City" className="z-[1]" />
							<Input placeholder="Post code / ZIP" />
						</Column>
					</Grid>

					<div className="h-[1px] bg-dark-gray my-10" />

					<Row className="justify-between">
						<H4>TOTAL</H4>
						<H4 className="!font-body">$ 65,00</H4>
					</Row>

					<Button variant="fill" className="mt-10">
						PROCEED TO CHECKOUT
					</Button>
				</Column>
			</Grid>

			<Footer className="mt-52" />
		</div>
	);
};

// Using for lazy loading page
export default ShoppingCartPage;
