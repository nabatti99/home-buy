import { forwardRef } from "react";
import { Title } from "./Title";
import { joinCls } from "@utilities";
import { H1, H2, H5, Row } from "@components";
import { Link } from "react-router-dom";

export const Navigator = forwardRef<HTMLDivElement, NavigatorProps>(({ className, ...props }, ref) => {
	return (
		<>
			<Title />

			<nav ref={ref} className={joinCls("fixed top-0 left-0 w-full h-16 border-b border-in-gray bg-white z-10", className)} {...props}>
				<Row className="container mx-auto h-full justify-between items-center gap-14">
					<Link to="/">
						<H2 className="text-black">HOME BUY</H2>
					</Link>

					<Row className="items-center gap-16">
						<Row className="items-center gap-20">
							<Link to="/shop">
								<H5 className="text-black">Shop</H5>
							</Link>
							<Link to="/blog">
								<H5 className="text-black">Blog</H5>
							</Link>
							<Link to="/blog">
								<H5 className="text-black">Our Story</H5>
							</Link>
						</Row>

						<div className="h-5 w-[1px] bg-dark-gray" />

						<Row className="items-center gap-16">
							<i className="ri-search-line text-base ri-lg" />
							<i className="ri-shopping-cart-line ri-lg" />
							<i className="ri-user-line ri-lg" />
						</Row>
					</Row>
				</Row>
			</nav>
		</>
	);
});
