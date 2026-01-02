'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';

export function LanguageToggle() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const toggleLocale = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';

        // Set cookie and refresh
        document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
        startTransition(() => {
            router.refresh();
        });
    };

    return (
        <motion.button
            onClick={toggleLocale}
            disabled={isPending}
            className={`
        relative px-4 py-2 rounded-full glass font-medium text-sm
        hover:scale-105 transition-all flex items-center gap-2
        ${isPending ? 'opacity-50 cursor-wait' : ''}
      `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
        >
            <span className="text-lg">🌐</span>
            <span>{locale === 'ar' ? 'EN' : 'عربي'}</span>
        </motion.button>
    );
}
