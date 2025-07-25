// app/page.tsx
// temporary, we can make a "choose language" thing here

import {redirect} from 'next/navigation';

export default function RootPage() {
	redirect('it');
}
