import { Hero } from '@/components/Hero';
import { Timeline } from '@/components/Timeline';
import { Statistics } from '@/components/Statistics';
import { Pillars } from '@/components/Pillars';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/ui/Navigation';
import { Loader } from '@/components/Loader';

export default function Home() {
  return (
    <>
      <Loader />
      <Navigation />
      <main>
        <Hero />
        <Timeline />
        <Statistics />
        <Pillars />
      </main>
      <Footer />
    </>
  );
}
