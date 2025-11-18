import Image from 'next/image';

export default function Home() {
	return (
		<main className="flex flex-col items-center p-4">
			<Image
				src="/images/mvg.jpg"
				alt="IMAGE"
				width={1000}
				height={800}
				priority
			/>
		</main>
	);
}
