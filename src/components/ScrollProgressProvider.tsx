'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
    scrollProgress: number; // 0 to 1
    bloodLevel: number; // 0 to 1 - how "bloody" the page should be
}

const ScrollContext = createContext<ScrollContextType>({
    scrollProgress: 0,
    bloodLevel: 0,
});

export function useScrollProgress() {
    return useContext(ScrollContext);
}

export function ScrollProgressProvider({ children }: { children: ReactNode }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [bloodLevel, setBloodLevel] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(window.scrollY / totalHeight, 1);
            setScrollProgress(progress);

            // Blood level increases as you scroll, with acceleration after 50%
            const blood = progress < 0.3
                ? progress * 0.5
                : progress < 0.6
                    ? 0.15 + (progress - 0.3) * 1.5
                    : 0.6 + (progress - 0.6) * 1.5;
            setBloodLevel(Math.min(blood, 1));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ScrollContext.Provider value={{ scrollProgress, bloodLevel }}>
            {children}
        </ScrollContext.Provider>
    );
}
