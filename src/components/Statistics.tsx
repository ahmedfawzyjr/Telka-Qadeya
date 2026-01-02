'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { overallStats, Stat } from '@/lib/data';

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Extract numeric value
    const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    const suffix = value.replace(/[0-9,]/g, '');
    const hasPlus = value.includes('+');
    const hasM = value.includes('M');

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericValue));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, numericValue, duration]);

    const formatNumber = (num: number) => {
        if (hasM) return `${(num / 1000000).toFixed(1)}M`;
        return num.toLocaleString();
    };

    return (
        <span ref={ref} className="stat-value">
            {formatNumber(count)}{hasPlus ? '+' : ''}{!hasM && suffix}
        </span>
    );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
    const locale = useLocale() as 'ar' | 'en';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className="p-6 lg:p-8 rounded-2xl glass card-hover text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="text-4xl mb-4">{stat.icon}</div>
            <div className="text-3xl lg:text-4xl font-bold text-palestinian-green mb-2">
                <AnimatedCounter value={stat.value} />
            </div>
            <div className="text-muted-foreground">
                {stat.label[locale]}
            </div>
        </motion.div>
    );
}

export function Statistics() {
    const t = useTranslations('sections.statistics');

    return (
        <section id="statistics" className="py-24 lg:py-32 bg-muted/30 relative">
            {/* Top divider */}
            <div className="section-divider absolute top-0 inset-x-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl lg:text-5xl font-bold gradient-text-green mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {t('subtitle')}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {overallStats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>

            {/* Bottom divider */}
            <div className="section-divider absolute bottom-0 inset-x-0" />
        </section>
    );
}
