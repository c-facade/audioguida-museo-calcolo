// app/admin/page.tsx
import VisitorsLineChart from "@/components/charts/VisitorsLineChart";
import VisitorsPieChart from '@/components/charts/VisitorsPieChart';
import { prisma } from "@/lib/prisma";

export type DailyLineEntry = {
  day: string;        // e.g. "11/03/2026"
  new: number;        // count of new visitors
  returning: number;  // count of returning visitors
};

function buildLineData(dailyStats) {
  const lineData : DailyLineEntry[] = [];

  // 1. Group by day
  const grouped = {};

  for (const entry of dailyStats) {
    if (!grouped[entry.day]) {
      grouped[entry.day] = { new: 0, returning: 0 };
    }

    if (entry.isNew) {
      grouped[entry.day].new = entry._count.id;
    } else {
      grouped[entry.day].returning = entry._count.id;
    }
  }

  // 2. Determine date range
  const [d, m, y] = dailyStats[0].day.split("/").map(Number);
  let current = new Date(y, m - 1, d);
	const today = new Date();

  // 3. Fill all days from start to today
  while (current <= today) {
    const key = current.toLocaleDateString("it");

    lineData.push({
      day: key,
      new: grouped[key]?.new ?? 0,
      returning: grouped[key]?.returning ?? 0
    });

    current.setDate(current.getDate() + 1);
  }

  return lineData;
}



export default async function AdminPage() {
	// just a count of total visits in database
	const visits = await prisma.visit.count();
	// how many new and recurring visitors for each day
	const dailyStats = await prisma.visit.groupBy({
		by: ['day', 'isNew'],
		_count: {id: true},
		orderBy: { day : 'asc'}
	});
	

	const lineData : DailyLineEntry[] = buildLineData(dailyStats);
	console.log(lineData);	

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
	
	// 3. New visitors by browser language
  const Browserlang = await prisma.visit.groupBy({
    by: ["browserLang"],
    where: { isNew: true },
		_count: { id: true },
		orderBy: { browserLang:"desc"}
  });

  const browserData = Browserlang.map((l) => ({
    language: l.browserLang,
    count: l._count.id,
  }));
	

	return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="mt-2 text-xl font-extrabold" >Analisi degli accessi all&apos;audioguida</h1>
			<p>Accessi totali: {visits}</p>
      <div className="rounded-xl bg-neutral-900 p-6" >
        <h2 className="mb-4 text-xl">Accessi al giorno:</h2>
        <VisitorsLineChart data={lineData} />
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="m-1 max-w-[600px] rounded-xl bg-neutral-900 p-6" >
					<h2 className="mb-4 text-xl">Lingue dei nuovi accessi:</h2>
					<VisitorsPieChart data={pieData} />
				</div>
				<div className="m-1 max-w-[600px] rounded-xl bg-neutral-900 p-6" >
					<h2 className="mb-4 text-xl">Lingue Browser dei nuovi accessi:</h2>
					<VisitorsPieChart data={browserData} />
				</div>
			</div>
		</section>
  );
}
