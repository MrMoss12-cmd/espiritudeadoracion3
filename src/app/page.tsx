import Hero from '@/components/Hero';
import PresentationComponent from '@/components/PresentationComponent';
import DoctrineComponent from '@/components/DoctrineComponent';
import VideoComponent from '@/components/VideoComponent';
import PastorComponent from '@/components/PastorComponent';
import PrefooterComponent from '@/components/PrefooterComponent';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <PresentationComponent />
      <DoctrineComponent />
      <VideoComponent />
      <PastorComponent />
      <PrefooterComponent />
    </main>
  );
}
