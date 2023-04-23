import { Tab as BaseTab } from "@headlessui/react";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const Tab = forwardRef<HTMLDivElement, TabProps>(({ className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls(className)} {...props}>
			<BaseTab.Group>
				<BaseTab.List>
					<BaseTab>BaseTab 1</BaseTab>
					<BaseTab>BaseTab 2</BaseTab>
					<BaseTab>BaseTab 3</BaseTab>
				</BaseTab.List>
				<BaseTab.Panels>
					<BaseTab.Panel>Content 1</BaseTab.Panel>
					<BaseTab.Panel>Content 2</BaseTab.Panel>
					<BaseTab.Panel>Content 3</BaseTab.Panel>
				</BaseTab.Panels>
			</BaseTab.Group>
		</div>
	);
});
