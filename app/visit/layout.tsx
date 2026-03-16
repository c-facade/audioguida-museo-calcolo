
export default async function Layout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>
}) {
	return (
		<>
				<main className="h-dvh w-full max-w-screen-md flex-1">
					{children}
				</main>
		</>
  );
}
