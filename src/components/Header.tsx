// Header.tsx
// Renders the top navigation bar with site links, chat toggle, and theme toggle.

"use client";

import Link from "next/link";
import ChatToggle from "./ChatToggle";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect, useCallback } from "react";

const navLinks = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Projects",
		href: "/projects",
	},
	{
		name: "Blog",
		href: "/blog",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];

export default function Header() {
	const pathname = usePathname();
	const [indicatorStyle, setIndicatorStyle] = useState({});
	const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
	const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const setLinkRef = useCallback(
		(idx: number) =>
			(el: HTMLAnchorElement | null) => {
				linkRefs.current[idx] = el;
			},
		[]
	);

	useEffect(() => {
		let idx = hoveredIdx;
		if (idx === null) {
			// Find the best match for the current pathname (exact or prefix match)
			idx = navLinks.findIndex(n =>
				n.href === "/"
					? pathname === "/"
					: pathname === n.href || pathname.startsWith(n.href + "/")
			);
			if (idx === -1) idx = 0;
		}
		const el = linkRefs.current[idx];
		const parent = el?.parentElement?.parentElement; // ul element
		if (el && parent) {
			const elRect = el.getBoundingClientRect();
			const parentRect = parent.getBoundingClientRect();
			setIndicatorStyle({
				left: elRect.left - parentRect.left,
				width: elRect.width,
				transition: "all 200ms cubic-bezier(.4,0,.2,1)",
			});
		}
	}, [hoveredIdx, pathname]);

	return (
		<header className="sticky top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
			<nav className="flex items-center justify-between">
				<ul className="relative flex gap-0 border-2 rounded-full px-1 py-1 border-muted bg-muted/30 overflow-hidden">
					{/* Animated indicator */}
					<span
						className="absolute top-0 bottom-0 bg-primary rounded-full z-0"
						style={indicatorStyle}
					/>
					{navLinks.map((nav, id) => {
						const isActive = pathname === nav.href;
						const isHovered = hoveredIdx === id;
						return (
							<li key={id} className="flex-1 relative z-10">
								<Link href={nav.href} legacyBehavior>
									<a
										ref={setLinkRef(id)}
										onMouseEnter={() => setHoveredIdx(id)}
										onMouseLeave={() => setHoveredIdx(null)}
										className={`px-4 py-1 transition-colors font-medium block relative
											${id === 0 ? "rounded-l-full" : ""}
											${id === navLinks.length - 1 ? "rounded-r-full" : ""}
											${isActive
												? "text-primary-foreground"
												: "text-muted-foreground hover:text-primary-foreground"
											}
										`}
										style={{ background: "transparent" }}
									>
										<span
											className={`
												absolute inset-0 rounded-full pointer-events-none
												transition-all duration-200
												${isActive && !isHovered ? "border-2 border-white/30 bg-white/10" : ""}
												${isHovered ? "border-2 border-white/60 bg-white/20" : ""}
											`}
										/>
										<span className="relative z-10">{nav.name}</span>
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
				<div className="flex gap-0 sm:gap-4">
					<ChatToggle /> {/* Chatbot toggle button */}
					<ThemeToggle /> {/* Theme toggle button */}
				</div>
			</nav>
		</header>
	);
}
