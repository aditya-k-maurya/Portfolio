'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Portfolio from "@/components/Portfolio";
import { useActiveSection } from "@/context/ActiveSectionContext";

export default function Home() {
	const { activeSection } = useActiveSection();

	return (
		<>
			<main>
				<Hero section = {activeSection} />
				<About section={activeSection} />
				<Portfolio section={activeSection} />
				<Hobbies section={activeSection} />
				<Contact section ={activeSection} />
			</main>
		</>
	);
}
