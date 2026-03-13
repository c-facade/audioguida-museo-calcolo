// app/admin/page.tsx
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const visits = await prisma.visit.count();
	
  return (
    <div>
      <h1 className="mt-2 text-xl font-extrabold" >Admin Analytics</h1>
			<p>Total visitors: <pre>{JSON.stringify(visits, null, 2)}</pre>
				</p>
			<p>Total visitors: <pre>{JSON.stringify(visits, null, 2)}</pre>
				</p>
    </div>
  );
}
