import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 text-foreground font-body overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute inset-0 bg-grid animate-grid-scroll"></div>
        <div className="absolute inset-0 bg-stars animate-stars-scroll"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      
      {/* Background shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center max-w-5xl w-full text-center">
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl pb-8 sm:pb-12 px-8 sm:px-12 shadow-2xl animate-fade-in-up w-full">
          <header className="space-y-4">
            <div className="flex justify-between items-center mb-6 pt-2 sm:pt-4">
              <Image
                src="/123.png"
                width={240}
                height={85}
                alt="College Logo"
                className="rounded-lg"
                data-ai-hint="college logo"
              />
              <Image
                src="/1.png"
                width={240}
                height={90}
                alt="Pravrutti Logo"
                className="rounded-lg"
                data-ai-hint="event logo"
              />
            </div>
            <h1
              className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-blue-400"
              style={{
                textShadow:
                  '0 0 10px hsl(var(--primary)/0.8), 0 0 25px hsl(var(--primary)/0.6), 0 0 50px hsl(var(--primary)/0.4)',
              }}
            >
              Pravrutti
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground tracking-wide max-w-3xl mx-auto">
              Ramaiah University of Applied Sciences proudly presents Pravrutti 2025 – The National Tech Fest of RUAS.
            </p>
            <div className="flex justify-center items-center gap-2 pt-2">
              <Calendar className="w-6 h-6 text-accent" />
              <p className="text-xl sm:text-2xl md:text-3xl text-foreground font-semibold">
                15th, 16th & 17th October
              </p>
            </div>
          </header>
        </div>

        <div className="w-full mt-8 grid gap-8 animate-fade-in-up animation-delay-500">
          <Card className="bg-success/10 backdrop-blur-sm border-success/20 shadow-2xl border">
            <CardHeader className="flex-row items-center gap-4 justify-center">
              <Trophy className="w-10 h-10 text-success" />
              <CardTitle className="text-3xl text-success">₹10,00,000 Prize Pool</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                Compete for a massive prize pool and earn recognition for your innovative solutions and skills.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 animate-fade-in-up animation-delay-1000">
          <p className="text-2xl sm:text-3xl font-bold text-accent tracking-wider animate-blink" style={{ textShadow: '0 0 10px hsl(var(--accent)/0.8), 0 0 20px hsl(var(--accent)/0.6)' }}>
            Registrations Opening Soon
          </p>
        </div>
      </div>
    </main>
  );
}
