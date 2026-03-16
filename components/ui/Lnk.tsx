import Link from "next/link";

export default function Lnk({children, href}){
	return(
		<Link href={href} className="font-bold underline">{children}</Link>
	);
}
