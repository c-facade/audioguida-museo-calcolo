'use client';

import Link from 'next/link';

export default function TrackedLink({ href, lang, children }) {
  const handleClick = () => {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'language_selected',
				path: href,
				language: lang,
				browserLang: navigator.language,
				referrer: document.referrer
      })
    });
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}

