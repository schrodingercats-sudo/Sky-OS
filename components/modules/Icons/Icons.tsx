import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Selecto from 'react-selecto';
import styles from './Icons.module.css';

const ESCAPE_KEYS = ['46', 'Delete'];

interface DynamicFile {
	id: string;
	name: string;
	icon: string;
}

function Icons() {
	const [deleted, setDeleted] = useState(false);
	const [dynamicFiles, setDynamicFiles] = useState<DynamicFile[]>([]);

	const handleDelete = () => {
		const selected = document.querySelectorAll(`.selected`);
		selected.forEach((element) => {
			if (!element.classList.contains('recycleBin')) {
				element.classList.add(`${styles.deleted}`);
				element.classList.add('deleted');
				setDeleted(true);
			}
		});
	};

	useEffect(() => {
		const eventListener = (e: KeyboardEvent) => {
			if (ESCAPE_KEYS.includes(String(e.key))) {
				handleDelete();
			}
		};
		document.addEventListener('keydown', eventListener);
		return () => {
			document.removeEventListener('keydown', eventListener);
		};
	}, []);

	// Listen for postMessage commands from parent window (sky-waitlist ProductShowcase)
	useEffect(() => {
		const handleMessage = (event: MessageEvent) => {
			if (!event.data || !event.data.type) return;

			if (event.data.type === 'sky-create-file') {
				const fileName = event.data.fileName || 'Untitled.txt';
				const ext = fileName.split('.').pop()?.toLowerCase() || 'txt';
				let icon = '/icons/notes/notes.png';
				if (['py', 'js', 'ts', 'tsx', 'jsx'].includes(ext)) icon = '/icons/notes/notes.png';
				if (['md', 'txt', 'log'].includes(ext)) icon = '/icons/notes/notes.png';
				if (['json', 'xml', 'yaml', 'yml'].includes(ext)) icon = '/icons/notes/notes.png';
				if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(ext)) icon = '/icons/pictures/pictures.png';

				setDynamicFiles(prev => [
					...prev,
					{ id: `sky-${Date.now()}`, name: fileName, icon }
				]);
				setDeleted(false);
			}

			if (event.data.type === 'sky-delete-file') {
				const fileName = event.data.fileName || '';
				// First try to remove from dynamically created files
				setDynamicFiles(prev => {
					const idx = prev.findIndex(f => f.name.toLowerCase() === fileName.toLowerCase());
					if (idx !== -1) {
						const next = [...prev];
						next.splice(idx, 1);
						return next;
					}
					return prev;
				});
				// Also visually hide a static desktop icon at random for demo effect
				const allIcons = document.querySelectorAll(`.selectoItem:not(.recycleBin):not(.deleted):not(.sky-dynamic-file)`);
				if (allIcons.length > 0) {
					const randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)];
					randomIcon.classList.add(`${styles.deleted}`);
					randomIcon.classList.add('deleted');
				}
				setDeleted(true);
			}
		};

		window.addEventListener('message', handleMessage);
		return () => window.removeEventListener('message', handleMessage);
	}, []);

	return (
		<>
			<Selecto
				dragContainer={'.elements'}
				selectableTargets={[`.selecto-area .selectoItem`]}
				hitRate={0}
				selectByClick={true}
				selectFromInside={true}
				ratio={0}
				onSelect={(e) => {
					e.added.forEach((el) => {
						el.classList.add(`${styles.selected}`);
						el.classList.add(`selected`);
					});
					e.removed.forEach((el) => {
						el.classList.remove(`${styles.selected}`);
						el.classList.remove(`selected`);
					});
				}}
			/>
			<div className={`elements ${styles.container}`}>
				<div className={`selecto-area ${styles.wrapper}`} id="selecto1">
					<Link href={'/notepad/about'} passHref>
						<div className={`${styles.item} selectoItem`}>
							<Image
								src="/icons/notes/notes.png"
								alt="icon"
								width={40}
								height={40}
							></Image>
							<p>About SKY</p>
						</div>
					</Link>
					<Link href={'/explorer/projects'} passHref>
						<div className={`${styles.item} selectoItem`}>
							<Image
								src="/icons/folder/folder.png"
								alt="icon"
								width={40}
								height={40}
							></Image>
							<p>Projects</p>
						</div>
					</Link>
					<Link href={'/explorer/tools'} passHref>
						<div className={`${styles.item} selectoItem`}>
							<Image
								src="/icons/folder/folder.png"
								alt="icon"
								width={40}
								height={40}
							></Image>
							<p>Tools</p>
						</div>
					</Link>
					<Link href={'/explorer/links'} passHref>
						<div className={`${styles.item} selectoItem`}>
							<Image
								src="/icons/links/links.png"
								alt="icon"
								width={40}
								height={40}
							></Image>
							<p>Links</p>
						</div>
					</Link>

					{/* DYNAMICALLY CREATED FILES VIA SKY CHATBOX postMessage */}
					{dynamicFiles.map((file) => (
						<div key={file.id} className={`${styles.item} selectoItem sky-dynamic-file`} style={{ animation: 'fadeIn 0.4s ease' }}>
							<Image
								src={file.icon}
								alt="icon"
								width={40}
								height={40}
							></Image>
							<p>{file.name}</p>
						</div>
					))}

					<div className={`${styles.item} selectoItem recycleBin`}>
						{deleted ? (
							<Image
								src="/icons/trash/trash_full.png"
								alt="icon"
								width={40}
								height={40}
							></Image>
						) : (
							<Image
								src="/icons/trash/trash_empty.png"
								alt="icon"
								width={40}
								height={40}
							></Image>
						)}
						<p>Recycle Bin</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Icons;
