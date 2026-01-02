'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

const navLinks = [
    { key: 'home', href: '#hero' },
    { key: 'timeline', href: '#timeline' },
    { key: 'statistics', href: '#statistics' },
    { key: 'pillars', href: '#pillars' },
];

export function Navigation() {
    const t = useTranslations('nav');
    const locale = useLocale();
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);

            // Update active section
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 inset-x-0 z-50 h-20 glass hidden md:flex items-center justify-between px-8"
            >
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-2xl">🇵🇸</span>
                    <span className="text-xl font-bold gradient-text-green">
                        {locale === 'ar' ? 'تلك القضية' : 'The Cause'}
                    </span>
                </motion.div>

                {/* Nav Links */}
                <div className="flex items-center gap-6">
                    {navLinks.map((link) => (
                        <motion.button
                            key={link.key}
                            onClick={() => scrollToSection(link.href)}
                            className={`
                relative px-3 py-2 text-sm font-medium transition-colors
                ${activeSection === link.href.substring(1)
                                    ? 'text-palestinian-green'
                                    : 'text-muted-foreground hover:text-foreground'}
              `}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t(link.key)}
                            {activeSection === link.href.substring(1) && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-palestinian-green"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </motion.nav>

            {/* Mobile Navigation */}
            <div className="fixed top-4 inset-x-4 z-50 md:hidden flex justify-between items-center">
                <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center"
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div className="flex flex-col gap-1.5">
                        <motion.span
                            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                            className="block w-5 h-0.5 bg-foreground"
                        />
                        <motion.span
                            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                            className="block w-5 h-0.5 bg-foreground"
                        />
                        <motion.span
                            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                            className="block w-5 h-0.5 bg-foreground"
                        />
                    </motion.div>
                </motion.button>

                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-20 inset-x-4 z-40 glass rounded-2xl p-6 md:hidden"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link, index) => (
                                <motion.button
                                    key={link.key}
                                    onClick={() => scrollToSection(link.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`
                    text-lg font-medium text-start p-3 rounded-lg transition-colors
                    ${activeSection === link.href.substring(1)
                                            ? 'bg-palestinian-green/20 text-palestinian-green'
                                            : 'hover:bg-muted'}
                  `}
                                >
                                    {t(link.key)}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
