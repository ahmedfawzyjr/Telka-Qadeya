'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { toArabicNumerals } from '@/lib/utils';

// Dynamic import for Three.js to avoid SSR issues
const HeroScene = dynamic(
    () => import('./3d/HeroScene').then((mod) => mod.HeroScene),
    { ssr: false }
);

export function Hero() {
    const t = useTranslations('hero');
    const locale = useLocale();
    const isArabic = locale === 'ar';

    const scrollToTimeline = () => {
        document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Format stats with Arabic numerals when in Arabic
    const formatNumber = (num: string) => isArabic ? toArabicNumerals(num) : num;

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 hero-pattern opacity-50" />

            {/* Radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

            {/* 3D Scene */}
            <HeroScene />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Title */}
                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.span
                        className="block"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {t('title1')}
                    </motion.span>
                    <motion.span
                        className="block gradient-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {t('title2')}
                    </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-xl md:text-2xl text-muted-foreground mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    {t('subtitle')}
                </motion.p>

                {/* Description */}
                <motion.p
                    className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    {t('description')}
                </motion.p>

                {/* Stats */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                >
                    <div className="text-center">
                        <span className="block text-4xl md:text-5xl font-bold text-palestinian-green">
                            {formatNumber('75')}+
                        </span>
                        <span className="text-sm text-muted-foreground">{t('stats.years')}</span>
                    </div>
                    <div className="hidden sm:block w-px h-12 bg-border" />
                    <div className="text-center">
                        <span className="block text-4xl md:text-5xl font-bold text-palestinian-green">
                            {formatNumber('5.9')}{isArabic ? ' مليون' : 'M'}
                        </span>
                        <span className="text-sm text-muted-foreground">{t('stats.refugees')}</span>
                    </div>
                    <div className="hidden sm:block w-px h-12 bg-border" />
                    <div className="text-center">
                        <span className="block text-4xl md:text-5xl font-bold text-palestinian-green">
                            {formatNumber('531')}
                        </span>
                        <span className="text-sm text-muted-foreground">{t('stats.villages')}</span>
                    </div>
                </motion.div>

                {/* Scroll CTA */}
                <motion.button
                    onClick={scrollToTimeline}
                    className="group flex flex-col items-center gap-3 mx-auto cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {t('scrollCTA')}
                    </span>
                    <motion.div
                        className="w-10 h-10 rounded-full glass flex items-center justify-center"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-palestinian-green"
                        >
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </motion.div>
                </motion.button>
            </div>

            {/* Palestinian flag colors decoration */}
            <div className="absolute bottom-0 inset-x-0 h-1 flex">
                <div className="flex-1 bg-palestinian-black" />
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-palestinian-green" />
            </div>
        </section>
    );
}
