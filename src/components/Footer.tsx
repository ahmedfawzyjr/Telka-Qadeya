'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { toArabicNumerals } from '@/lib/utils';

export function Footer() {
    const t = useTranslations('footer');
    const locale = useLocale();
    const isArabic = locale === 'ar';

    // Get year in Arabic or English
    const year = new Date().getFullYear();
    const displayYear = isArabic ? toArabicNumerals(year) : year;

    return (
        <footer className="py-16 lg:py-24 bg-muted/30 relative">
            {/* Top divider */}
            <div className="section-divider absolute top-0 inset-x-0" />

            <div className="max-w-4xl mx-auto px-4 text-center">
                {/* Quote */}
                <motion.blockquote
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-5xl text-palestinian-green/30 absolute -top-4 right-0 rtl:right-0 ltr:left-0">
                        &ldquo;
                    </span>
                    <span className="relative">{t('quote')}</span>
                    <span className="text-5xl text-palestinian-green/30 absolute -bottom-8 left-0 rtl:left-0 ltr:right-0">
                        &rdquo;
                    </span>
                </motion.blockquote>

                {/* Dedication */}
                <motion.p
                    className="text-lg text-muted-foreground mb-8 flex items-center justify-center gap-2 flex-wrap"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        🇵🇸
                    </motion.span>
                    <span>{t('dedication')}</span>
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        🇵🇸
                    </motion.span>
                </motion.p>

                {/* Credits */}
                <motion.div
                    className="text-sm text-muted-foreground space-y-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <p>
                        🇵🇸 {isArabic ? 'تلك القضية' : 'The Cause'} © {displayYear} 🇵🇸
                    </p>
                    <p className="font-medium">{t('slogan')}</p>
                </motion.div>
            </div>
        </footer>
    );
}

