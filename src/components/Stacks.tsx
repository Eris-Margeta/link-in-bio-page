import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide, Simple } from "./icons";

const stacks = [
	{
		name: "Official Updates Channel",
		category: "Telegram",
		icon: Simple.IconTelegram,
		url: "https://t.me/MAupdates",
	},
	{
		name: "🌑midnight. public Chat",
		category: "Telegram",
		icon: Simple.IconTelegram,
		url: "https://t.me/MAofficialchat",
	},
	{
		name: "Main Community",
		category: "Twitter",
		icon: Simple.IconX,
		url: "https://x.com/MidnightApes",
	},
	{
		name: "🌑midnight. collaborators",
		category: "Telegram",
		icon: Simple.IconTelegram,
		url: "https://t.me/+EVeZNnICHNIwN2U1",
	},
	{
		name: "Art/Hangout Community",
		category: "Discord",
		icon: Simple.IconDiscord,
		url: "https://discord.gg/midnightapes",
	},

	{
		name: "🌑midnight. DM Contact",
		category: "Telegram",
		icon: Simple.IconTelegram,
		url: "https://t.me/midnightapes",
	},
];

export default () => {
	return (
		<div>
			<h2 className="font-medium text-xl mb-3">Community Channels</h2>
			<ul className="grid grid-cols-1 gap-3 p-1">
				{stacks.map((stack) => {
					return (
						<li
							key={stack.name}
							className={cn(
								"group",
								"flex items-center justify-between px-4 py-3",
								"bg-neutral-2 hover:bg-neutral-3",
								"outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
								"focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
							)}
						>
							<div className="flex flex-row items-stretch gap-5 pl-2">
								<div className="flex items-center justify-center">
									<stack.icon
										size={24}
										className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
									/>
								</div>

								<div>
									<h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
										{stack.name}
									</h3>
									<div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
										{stack.category}
									</div>
								</div>
							</div>

							<IconButton
								as="a"
								role="button"
								href={stack.url}
								className="group/icon"
								target="_blank"
								aria-label="Open"
							>
								<Lucide.IconExternalLink
									aria-label="Open"
									className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
								/>
							</IconButton>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
