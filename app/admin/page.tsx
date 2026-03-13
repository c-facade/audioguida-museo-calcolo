// app/admin/page.tsx
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
	// just a count of total visits in database
	const visits = await prisma.visit.count();
	// how many new and recurring visitors for each day
	const dailyStats = await prisma.visit.groupBy({
		by: ['day', 'isNew'],
		_count: {id: true},
		orderBy: { day : 'asc'}
	});

	// adapting it to fit for tremor
  return (
    <div>
      <h1 className="mt-2 text-xl font-extrabold" >Admin Analytics</h1>
			<p>Total visitors:</p> <pre>{JSON.stringify(visits, null, 2)}</pre>
			<p>Dailystats: </p> <pre>{JSON.stringify(dailyStats, null, 2)}</pre>
		   </div>
  );
}
