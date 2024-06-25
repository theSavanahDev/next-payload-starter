import Image from "next/image";

const LabelIcon = () => {
	return (
		<div>
			<Image src="/icon.svg" alt="Logo" width={32} height={32} priority={true} />
		</div>
	);
};

export default LabelIcon;
