'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { nakbaPillars, Pillar } from '@/lib/data';

function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
    const locale = useLocale() as 'ar' | 'en';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className="relative p-6 lg:p-8 rounded-2xl glass card-hover overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
        >
            {/* Top accent bar */}
            <motion.div
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-palestinian-green to-palestinian-olive"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            />

            <div className="text-center">
                <motion.div
                    className="text-5xl mb-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 + 0.2 }}
                >
                    {pillar.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-palestinian-green mb-3">
                    {pillar.title[locale]}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                    {pillar.description[locale]}
                </p>
            </div>
        </motion.div>
    );
}

export function Pillars() {
    const t = useTranslations('sections.pillars');

    return (
        <section id="pillars" className="py-24 lg:py-32 relative">
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

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {nakbaPillars.map((pillar, index) => (
                        <PillarCard key={index} pillar={pillar} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
