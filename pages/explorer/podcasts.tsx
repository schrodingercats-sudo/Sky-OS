import Head from 'next/head';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/GridList.module.css';

function Podcasts({
	data,
}: {
	data: {
		koodikrapulaTime: string;
		webbidevausTime: string;
		koodiapinnanallaTime: string;
	};
}) {
	const content = () => {
		return (
			<div className={styles.wrapper}>
				<div className={styles.podcastItem}>
					<h3>SKY Architecture Podcast</h3>
					<p>Latest Episode: {data?.koodiapinnanallaTime || '2025-05-24'}</p>
				</div>
			</div>
		);
	};

	return (
		<>
			<Head>
				<title>Project SKY — Audio & Podcasts</title>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					icon="folder"
					folder="Podcasts"
					component={content()}
					topNav={true}
				/>
				<Icons />
			</div>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {
			data: {
				koodikrapulaTime: '2025-05-24',
				webbidevausTime: '2025-05-24',
				koodiapinnanallaTime: '2025-05-24',
			},
		},
	};
}

export default Podcasts;
