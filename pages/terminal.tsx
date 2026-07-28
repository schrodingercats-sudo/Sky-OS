import Head from 'next/head';
import Icons from '../components/modules/Icons/Icons';
import { default as TerminalComponent } from '../components/windows/Terminal/Terminal';

function Terminal() {
	return (
		<>
			<Head>
				<title>Project SKY — Terminal</title>
				<link rel="canonical" href="https://www.kassq.dev/terminal" />

				{/* Description */}
				<meta
					name="description"
					content="Project SKY Interactive PowerShell / Bash Terminal"
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Project SKY — Terminal" />
				<meta
					property="og:url"
					content="https://www.kassq.dev/terminal"
				/>
				<meta
					property="og:description"
					content="Project SKY Interactive PowerShell / Bash Terminal"
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<TerminalComponent />
				<Icons />
			</div>
		</>
	);
}

export default Terminal;
