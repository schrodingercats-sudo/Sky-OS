import Head from 'next/head';
import Icons from '../../components/modules/Icons/Icons';
import Notepad from '../../components/windows/Notepad/Notepad';

function AboutSKY() {
	const textContent = () => {
		return `=====================================================
PROJECT SKY — YOUR DESKTOP COMPANION
=====================================================

SKY lives on your desktop. It sees what you see,
hears what you say, and gets things done — silently.

What SKY does:
1. Contextual Awareness — Understands your screen in real time.
2. Voice-First Interaction — Speak naturally, SKY responds.
3. Persistent Memory — Remembers your files, notes, and context.
4. Desktop Automation — Manages files, launches apps, runs tasks.
5. Always Present — Floating capsule, always one word away.

Philosophy:
"Technology should disappear. Presence should remain."

Status: In Development & Private Testing
Website: sky-waitlist (localhost:5173)
`;
	};

	return (
		<>
			<Head>
				<title>Project SKY — About</title>
				<meta
					name="description"
					content="About Project SKY Desktop Companion"
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<Notepad initialText={textContent()} />
				<Icons />
			</div>
		</>
	);
}

export default AboutSKY;
