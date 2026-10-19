
export default async function Layout({
	children,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: string }>
}) {
	return (
		<>
				<main className="h-dvh w-full max-w-(--breakpoint-md) flex-1">
					{children}
				</main>
		</>
  );
}
