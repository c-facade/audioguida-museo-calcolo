// app/admin/page.tsx
import VisitorsLineChart from "@/components/charts/VisitorsLineChart";
import VisitorsPieChart from '@/components/charts/VisitorsPieChart';
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

	// adapting it to fit for chartjs

	const lineData = Object.values(
		dailyStats.reduce((acc, row) => {
			if(!acc[row.day]) {
				acc[row.day] = { day: row.day, new: 0, returning: 0 };
      }
      if (row.isNew) acc[row.day].new = row._count.id;
      else acc[row.day].returning = row._count.id;
      return acc;
    }, {})
	);

	// 2. New visitors by language
  const lang = await prisma.visit.groupBy({
    by: ["language"],
    where: { isNew: true },
		_count: { id: true },
		orderBy: { language:"desc"}
  });

  const pieData = lang.map((l) => ({
    language: l.language,
    count: l._count.id,
  }));
	

	return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="mt-2 text-xl font-extrabold" >Analisi degli accessi all'audioguida</h1>
			<p>Accessi totali: {visits}</p>
      <div className="rounded-xl bg-neutral-900 p-6" >
        <h2 className="mb-4 text-xl">Accessi al giorno:</h2>
        <VisitorsLineChart data={lineData} />
      </div>
      <div className="rounded-xl bg-neutral-900 p-6" >
        <h2 className="mb-4 text-xl">Lingue dei nuovi accessi:</h2>
        <VisitorsPieChart data={pieData} />
			</div>
		</section>
  );
}
