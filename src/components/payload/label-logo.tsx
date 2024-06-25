import Image from "next/image";

const LabelLogo = () => {
	return (
		<div>
			<Image src="/icon.svg" alt="Logo" width={64} height={64} />
		</div>
	);
};

export default LabelLogo;
