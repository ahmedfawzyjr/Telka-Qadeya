'use client';

import { useScrollProgress } from './ScrollProgressProvider';

export function BloodOverlay() {
    const { bloodLevel, scrollProgress } = useScrollProgress();

    return (
        <>
            {/* Blood red overlay that intensifies on scroll */}
            <div
                className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-500"
                style={{
                    background: `radial-gradient(ellipse at center, transparent 0%, rgba(139, 0, 0, ${bloodLevel * 0.15}) 100%)`,
                    opacity: bloodLevel,
                }}
            />

            {/* Top blood drip effect */}
            <div
                className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-[2] transition-opacity duration-500"
                style={{
                    background: `linear-gradient(to bottom, rgba(139, 0, 0, ${bloodLevel * 0.3}) 0%, transparent 100%)`,
                    opacity: scrollProgress > 0.2 ? 1 : 0,
                }}
            />

            {/* Bottom blood pool effect */}
            <div
                className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none z-[2] transition-opacity duration-500"
                style={{
                    background: `linear-gradient(to top, rgba(139, 0, 0, ${bloodLevel * 0.4}) 0%, transparent 100%)`,
                    opacity: scrollProgress > 0.5 ? 1 : 0,
                }}
            />

            {/* Side vignette effect */}
            <div
                className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-500"
                style={{
                    boxShadow: `inset 0 0 ${100 + bloodLevel * 200}px rgba(139, 0, 0, ${bloodLevel * 0.3})`,
                    opacity: bloodLevel,
                }}
            />
        </>
    );
}
