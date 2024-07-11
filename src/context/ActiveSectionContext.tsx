'use client'
import React, { createContext, useState, useContext, ReactNode } from "react";

type ActiveSectionContextType = {
	activeSection: string;
	setActiveSection: (section: string) => void;
	backSection: string;
	setBackSection: (section: string) => void;
};

const ActiveSectionContext = createContext<
	ActiveSectionContextType | undefined
>(undefined);

export const ActiveSectionProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [backSection, setBackSection] = useState<string>("contact");

	return (
		<ActiveSectionContext.Provider value={{ activeSection, setActiveSection, backSection, setBackSection }}>
			{children}
		</ActiveSectionContext.Provider>
	);
};

export const useActiveSection = () => {
	const context = useContext(ActiveSectionContext);
	if (!context) {
		throw new Error(
			"useActiveSection must be used within an ActiveSectionProvider"
		);
	}
	return context;
};
