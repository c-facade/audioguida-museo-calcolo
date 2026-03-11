//TRACKVISIT
'use client';
import { useEffect} from 'react';

export default function TrackVisit({ lang }) {
	useEffect(() => {
		fetch('/api/track', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				event: 'page_view',
				path: window.location.pathname,
				language: lang,
				browserLang: navigator.language,
				referrer: document.referrer,
				selectedLang: null,
			})
		});
	}, []);

	return null;
}
