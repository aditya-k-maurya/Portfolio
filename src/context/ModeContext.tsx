'use client'
import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";

interface ModeContextType {
	mode: string;
	toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

interface ModeProviderProps {
	children: ReactNode;
}

export const ModeProvider = ({ children }: ModeProviderProps) => {
	const [mode, setMode] = useState<string>("light");

	const toggleMode = () => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	};

	useEffect(() => {
		const savedMode = localStorage.getItem("mode");
		if (savedMode) {
			setMode(savedMode);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("mode", mode);
	}, [mode]);

	return (
		<ModeContext.Provider value={{ mode, toggleMode }}>
			{children}
		</ModeContext.Provider>
	);
};

export const useMode = (): ModeContextType => {
	const context = useContext(ModeContext);
	if (context === undefined) {
		throw new Error("useMode must be used within a ModeProvider");
	}
	return context;
};
