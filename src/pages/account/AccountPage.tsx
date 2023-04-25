import {
	Button,
	Center,
	Column,
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
	Toggle,
	Footer,
	TabGroup,
	TabList,
	TabItem,
	TabPanels,
	TabPanel,
	Animation,
} from "@components";
import { CardItem } from "@pages/home/components";
import { joinCls, randomImgUrl } from "@utilities";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const Account = ({}: AccountProps) => {
	const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);

	return (
		<Column className="container mx-auto h-full">
			<section className="relative grow">
				<H1 className="text-center pt-24">My Account</H1>
				<TabGroup className="mt-16" onChange={setCurrentTabIndex}>
					<TabList>
						<Link to="">
							<TabItem>Dashboard</TabItem>
						</Link>
						<Link to="orders">
							<TabItem>Orders</TabItem>
						</Link>
						<Link to="deliveries">
							<TabItem>Deliveries</TabItem>
						</Link>
						<Link to="payments">
							<TabItem>Payments</TabItem>
						</Link>
						<TabItem>Settings</TabItem>
					</TabList>

					<Animation watching={currentTabIndex} animation={[{ name: "fadeIn", duration: "0.4s" }]} className="mt-10">
						<Outlet />
					</Animation>
				</TabGroup>
			</section>

			<Footer className="mt-52" />
		</Column>
	);
};

// Using for lazy loading page
export default Account;
