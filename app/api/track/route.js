import { prisma } from '@/lib/prisma';
import { isbot } from 'isbot';
import { cookies } from 'next/headers';

export async function POST(req) {
	const ua = req.headers.get('user-agent') || '';
	const body = await req.json();
	
	if(body.length > 500){
		return new Response(null, {status: 400});
	}
	// scarta i bot
	if (isbot(ua)) {
		return new Response(null, {status: 204});
	}

	const cookieStore = await cookies();
	
	const recent = cookieStore.get('recent-visit');
	if ( recent?.value === 'true') {
		return new Response(null, {status: 204});
	}

	cookieStore.set('recent-visit', 'true', {
		maxAge: 60*10,
		sameSite: 'lax',
		path: '/'
	});
	
	const visited = cookieStore.get('visited');
	const isNewVisitor = !visited;

	if (!visited) {
		cookieStore.set('visited', 'true', {
			maxAge: 60*60*24*30,
			sameSite: 'lax',
			path: '/'
		});
	}

	// per ora mettiamo valori fissi
	await prisma.visit.create({
		data: {
			path: body.path,
			language: body.language || null,
			browserLang: body.browserLang || null,
			selectedLang: null,
			referrer: body.referrer || null,
			isNew: isNewVisitor,
			userAgent: ua
		}
	});

	console.log('Tracking:', body);

	return new Response(null, {status: 204});
}
