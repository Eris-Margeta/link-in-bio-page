import { IconButton } from "./ui/index.ts";
import { cn } from "./ui/utils.ts";
import { Lucide, Simple } from "./icons/index.ts";

const teams = [
	{
		name: "Project Owner",
		category: "@NotForTalk",
		icon: Simple.IconTeam,
		url: "https://x.com/notfortalk",
	},
	{
		name: "Core Team",
		category: "Project Manager / Dev",
		icon: Simple.IconTeam,
		url: "https://eris.midnightapes.com",
	},
	{
		name: "Core Team",
		category: "Writer / Content Manager",
		icon: Simple.IconTeam,
		url: "https://sara.midnightapes.com",
	},
	{
		name: "Core Team",
		category: "X Space Host / Project Dev",
		icon: Simple.IconTeam,
		url: "https://nick.midnightapes.com",
	},
	{
		name: "Comunity-Promoted Team",
		category: "Discord Admin",
		icon: Simple.IconTeam,
		url: "https://xanah.midnightapes.com",
	},
	{
		name: "Comunity-Promoted Team",
		category: "Telegram Admin",
		icon: Simple.IconTeam,
		url: "https://ogemperor.midnightapes.com",
	},
];

export default () => {
	return (
		<div>
			<h2 className="font-medium text-xl mb-3">Team</h2>
			<ul className="grid grid-cols-1 gap-3 p-1">
				{teams.map((team) => {
					return (
						<li
							key={team.name}
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
									<team.icon
										size={24}
										className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
									/>
								</div>

								<div>
									<h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
										{team.name}
									</h3>
									<div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
										{team.category}
									</div>
								</div>
							</div>

							<IconButton
								as="a"
								role="button"
								href={team.url}
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
