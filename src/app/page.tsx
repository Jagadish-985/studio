import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, CircuitBoard, BrainCircuit, Trophy, Users } from 'lucide-react';

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
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-12 shadow-2xl animate-fade-in-up w-full">
          <header className="space-y-4">
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
          </header>
        </div>

        <div className="w-full mt-8 grid gap-8 animate-fade-in-up animation-delay-500">
          <Card className="bg-card/50 backdrop-blur-sm border border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">About The Fest</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                Pravrutti embodies the spirit of innovation and action, bringing together the brightest young minds to compete, collaborate, and create impact. It’s a celebration of talent, teamwork, and transformative thinking.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-accent/10 backdrop-blur-sm border-accent/20 shadow-2xl border">
            <CardHeader className="flex-row items-center gap-4 justify-center">
              <Trophy className="w-10 h-10 text-accent" />
              <CardTitle className="text-3xl text-accent">₹10,00,000 Prize Pool</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-lg">
                Compete for a massive prize pool and earn recognition for your innovative solutions and skills.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 animate-fade-in-up animation-delay-1000">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-shadow hover:shadow-[0_0_25px_hsl(var(--primary)/0.7)]">
            Registrations starting soon
          </Button>
        </div>
      </div>
    </main>
  );
}
