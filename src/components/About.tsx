import { Avatar } from "./ui";
import { Lucide } from "./icons";

export default () => {
	return (
		<div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 pt-6">
			<div className="flex flex-row items-center gap-4">
				<Avatar src="/midnightapes.png" alt="profile-picture">
					<Lucide.IconUser className="size-2/3" />
				</Avatar>

				<div className="flex flex-col items-start gap-2">
					<h1 className="font-medium text-lg lg:text-xl">🌑midnight.</h1>
					<h2 className="font-medium text-2xl lg:text-3xl">
						Liquid Art NFT Collection
					</h2>
					<h3 className="font-medium text-md lg:text-md">Solana SPL404</h3>
				</div>
			</div>

			<div>One place for all of our important links and channels.</div>
		</div>
	);
};
