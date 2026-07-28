import Head from 'next/head';
import Icons from '../components/modules/Icons/Icons';

export default function Home() {
	return (
		<>
			<Head>
				<title>Project SKY — Windows 11 Desktop Companion</title>
				<meta
					name="description"
					content="Project SKY is your desktop-native AI companion for Windows 11. It lives on your desktop, understands your context, and gets things done."
				/>
				<meta property="og:title" content="Project SKY — Windows 11 Desktop Companion" />
				<meta
					property="og:description"
					content="Project SKY is your desktop-native AI companion for Windows 11."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<Icons />
			</div>
		</>
	);
}
