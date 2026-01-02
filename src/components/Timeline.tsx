'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { timelineEvents, TimelineEvent } from '@/lib/data';

function TimelineEventCard({ event, index }: { event: TimelineEvent; index: number }) {
    const locale = useLocale() as 'ar' | 'en';
    const t = useTranslations();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isEven = index % 2 === 0;

    return (
        <motion.article
            ref={ref}
            data-year={event.year}
            className={`
        relative grid gap-6 lg:gap-12 items-center
        grid-cols-1 lg:grid-cols-[1fr_auto_1fr]
        ${event.featured ? 'lg:scale-105' : ''}
      `}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            {/* Content - alternates sides on desktop */}
            <motion.div
                className={`
          order-2 lg:order-${isEven ? '1' : '3'}
          p-6 rounded-2xl glass card-hover
          ${event.featured ? 'border-palestinian-red/30' : ''}
          ${event.ongoing ? 'animate-pulse-red' : ''}
        `}
                whileHover={{ scale: 1.02 }}
            >
                <div className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}>
                    {/* Date badge */}
                    <span className={`
            inline-block px-3 py-1 rounded-full text-sm font-medium mb-3
            ${event.featured
                            ? 'bg-palestinian-red/20 text-palestinian-red'
                            : 'bg-palestinian-green/20 text-palestinian-green'}
          `}>
                        {event.date}
                        {event.ongoing && ` - ${t('ongoing')}`}
                    </span>

                    {/* Year watermark */}
                    <div className="text-5xl lg:text-6xl font-bold text-foreground/10 mb-2">
                        {event.year}
                    </div>

                    {/* Title */}
                    <h3 className={`
            text-xl lg:text-2xl font-bold mb-2
            ${event.featured ? 'text-palestinian-red' : ''}
          `}>
                        {event.title[locale]}
                    </h3>

                    {/* Category */}
                    <span className="inline-block px-2 py-0.5 text-xs uppercase tracking-wider border border-border rounded mb-3">
                        {event.category[locale]}
                    </span>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        {event.description[locale]}
                    </p>

                    {/* Stats */}
                    {event.stats && (
                        <div className="pt-4 border-t border-border flex items-baseline gap-3">
                            <span className={`
                text-3xl font-bold stat-value
                ${event.featured ? 'text-palestinian-red' : 'text-palestinian-green'}
              `}>
                                {event.stats.value}
                            </span>
                            <span className="text-muted-foreground">
                                {event.stats.label[locale]}
                            </span>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Timeline Marker - center on desktop */}
            <div className="hidden lg:flex order-2 justify-center">
                <motion.div
                    className={`
            w-5 h-5 rounded-full border-4 border-background
            ${event.featured
                            ? 'bg-palestinian-red animate-pulse-red'
                            : 'bg-palestinian-green animate-pulse-glow'}
            ${event.ongoing ? 'w-7 h-7' : ''}
          `}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                />
            </div>

            {/* Image placeholder - alternates sides */}
            <motion.div
                className={`
          order-1 lg:order-${isEven ? '3' : '1'}
          aspect-video rounded-2xl overflow-hidden
          bg-gradient-to-br from-muted to-muted/50
          flex items-center justify-center
        `}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="text-center p-4">
                    <span className="text-4xl mb-2 block">
                        {event.featured ? '🕯️' : '📷'}
                    </span>
                    <span className="text-sm text-muted-foreground">
                        {event.title[locale]}
                    </span>
                </div>
            </motion.div>
        </motion.article>
    );
}

export function Timeline() {
    const t = useTranslations('sections.timeline');
    const locale = useLocale();

    return (
        <section id="timeline" className="py-24 lg:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 lg:mb-24"
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

                {/* Timeline Container */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="timeline-line hidden lg:block" />

                    {/* Events */}
                    <div className="space-y-16 lg:space-y-24">
                        {timelineEvents.map((event, index) => (
                            <TimelineEventCard key={`${event.year}-${index}`} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
