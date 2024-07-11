'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Portfolio from "@/components/Portfolio";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function Home() {
	const { activeSection, backSection } = useActiveSection();

	return (
		<>
			<main>
				<Hero section={activeSection} backSection={backSection} />
				<About section={activeSection} backSection={backSection} />
				<Portfolio section={activeSection} backSection={backSection} />
				<Hobbies section={activeSection} backSection={backSection} />
				<Contact section={activeSection} backSection={backSection} />
			</main>
		</>
	);
}
