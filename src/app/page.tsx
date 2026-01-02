import { Hero } from '@/components/Hero';
import { Timeline } from '@/components/Timeline';
import { Statistics } from '@/components/Statistics';
import { Pillars } from '@/components/Pillars';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/ui/Navigation';
import { Loader } from '@/components/Loader';
import { ScrollProgressProvider } from '@/components/ScrollProgressProvider';
import { BloodOverlay } from '@/components/BloodOverlay';

export default function Home() {
  return (
    <ScrollProgressProvider>
      <Loader />
      <Navigation />
      <BloodOverlay />
      <main>
        <Hero />
        <Timeline />
        <Statistics />
        <Pillars />
      </main>
      <Footer />
    </ScrollProgressProvider>
  );
}
