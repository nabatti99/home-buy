import { Row, Text } from "@components";
import { Menu, Transition } from "@headlessui/react";
import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Select = forwardRef<HTMLDivElement, SelectProps>(({ options, className, value, placeholder, ...props }, ref) => {
	return (
		<Menu ref={ref} as="div" className={joinCls("relative", className)} {...props}>
			<input className="!hidden" value={value} {...props} />

			<Menu.Button className="w-full border border-light-gray p-4">
				<Row className="justify-between">
					<Text className="text-black">{value || placeholder}</Text>
					<i className="ri-arrow-down-s-line text-black" />
				</Row>
			</Menu.Button>

			<Transition
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
				<Menu.Items className="absolute left-0 right-0 divide-y divide-light-gray bg-white shadow-md focus:outline-none z-10">
					{options.map((option) => (
						<Menu.Item key={option.value}>{({ active }) => <div className={joinCls("p-4", active && "bg-light-gray")}>{option.value}</div>}</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
});
