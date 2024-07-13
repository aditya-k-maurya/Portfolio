'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Portfolio from "@/components/Portfolio";
import { useActiveSection } from "@/context/ActiveSectionContext";
import '@/components/css/font.css'
import { useMode } from "@/context/ModeContext";

export default function Home() {
	const { activeSection, backSection } = useActiveSection();
	const {mode} = useMode()

	return (
		<>
			<main>
				<Hero section={activeSection} backSection={backSection} theme={mode} />
				<About section={activeSection} backSection={backSection} />
				<Portfolio section={activeSection} backSection={backSection} theme={mode} />
				<Hobbies section={activeSection} backSection={backSection} />
				<Contact section={activeSection} backSection={backSection} />
			</main>
		</>
	);
}
