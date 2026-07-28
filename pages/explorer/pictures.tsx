import Head from 'next/head';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Icons from '../../components/modules/Icons/Icons';
import { handleWindowPriority } from '../../components/utils/WindowPriority/WindowPriority';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import MediaPlayer from '../../components/windows/MediaPlayer/MediaPlayer';
import { Context } from '../../context/ContextProvider';
import styles from '../../styles/utils/MediaGrid.module.css';
import { MediaType } from '../../typings';

function Pictures({ data }: { data: MediaType[] }) {
	const [openImage, setOpenImage] = useState<MediaType | null>(null);

	const DraggableWindowContext = useContext(Context);
	const [windowState, setWindowState] =
		DraggableWindowContext.windowPriorityState;

	const ImageContent = () => {
		return (
			<div className={styles.wrapper}>
				{data.map((image) => (
					<div
						className={`${styles.mediaItem} no_click`}
						key={image.filename}
						onClick={async () => {
							setOpenImage(image);

							const newWindowState = await handleWindowPriority({
								windowName: 'mediaPlayer',
								windowPriority: windowState,
							});
							if (!newWindowState) return;
							setWindowState(newWindowState);
						}}
					>
						<div className={styles.imageWrapper}>
							<Image
								className="no_click"
								src={image.url}
								alt="icon"
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<p className="no_click">
							{image.filename.slice(0, -7)}.{image.format}
						</p>
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<Head>
				<title>kassq - Pictures</title>
				<link
					rel="canonical"
					href="https://www.kassq.dev/explorer/pictures"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Funny memes and pictures from the internet."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Kassq - Pictures" />
				<meta
					property="og:url"
					content="https://www.kassq.dev/explorer/pictures"
				/>
				<meta
					property="og:description"
					content="Funny memes and pictures from the internet."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				{openImage && (
					<MediaPlayer
						media={openImage}
						closeMedia={setOpenImage}
						component={
							<Image
								src={openImage.url}
								alt="icon"
								layout="fill"
								objectFit="contain"
							/>
						}
					/>
				)}
				<FileExplorer
					folder="Pictures"
					topNav={false}
					icon="pictures"
					component={<ImageContent />}
				/>
				<Icons />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const data: MediaType[] = [
		{
			url: '/hero-desktop.png',
			secure_url: '/hero-desktop.png',
			thumbnail: '/hero-desktop.png',
			public_id: 'SKY_Desktop_Companion',
			filename: 'SKY_Desktop_Companion',
			format: 'png',
		},
		{
			url: '/hero-phone.png',
			secure_url: '/hero-phone.png',
			thumbnail: '/hero-phone.png',
			public_id: 'SKY_Mobile_Companion',
			filename: 'SKY_Mobile_Companion',
			format: 'png',
		},
		{
			url: '/footer.jpg',
			secure_url: '/footer.jpg',
			thumbnail: '/footer.jpg',
			public_id: 'SKY_Cloud_Texture',
			filename: 'SKY_Cloud_Texture',
			format: 'jpg',
		},
	];

	return {
		props: {
			data: data || [],
		},
	};
}

export default Pictures;
