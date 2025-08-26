import { Mail } from 'lucide-react';
import { CountdownTimer } from '@/components/countdown-timer';
import { TaglineGenerator } from '@/components/tagline-generator';
import { Button } from '@/components/ui/button';

export default function Home() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 1); // Set launch for tomorrow

  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 text-center text-foreground font-body">
      <div className="flex flex-col items-center space-y-8 max-w-4xl w-full">
        <header className="space-y-4">
          <h1
            className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-blue-400"
            style={{ textShadow: '0 0 10px hsl(var(--primary)/0.7), 0 0 20px hsl(var(--primary)/0.7), 0 0 40px hsl(var(--primary)/0.5)' }}
          >
            Pravrutti
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground tracking-wide">
            The Future is Now. Events Unveiling Soon.
          </p>
        </header>
        
        <CountdownTimer targetDate={launchDate.toISOString()} />

        <TaglineGenerator />

        <footer className="w-full pt-8">
          <a href="mailto:contact@pravrutti.tech">
            <Button variant="outline" className="group text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300">
              Inquiries? Contact Us
              <Mail className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </a>
        </footer>
      </div>
    </main>
  );
}
