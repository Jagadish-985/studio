import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 text-foreground font-body overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-background z-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)/0.05) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)/0.05) 1px, transparent 1px),
            linear-gradient(hsl(var(--accent)/0.03) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--accent)/0.03) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
          backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
          animation: 'move-background 120s linear infinite',
        }}
      ></div>
      
      {/* Background shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 flex flex-col items-center space-y-16 max-w-5xl w-full text-center">
        <header className="space-y-4 animate-fade-in-down">
          <h1
            className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-blue-400"
            style={{
              textShadow:
                '0 0 10px hsl(var(--primary)/0.7), 0 0 20px hsl(var(--primary)/0.7), 0 0 40px hsl(var(--primary)/0.5)',
            }}
          >
            Pravrutti
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground tracking-wide max-w-3xl mx-auto">
            Ramaiah University of Applied Sciences proudly presents Pravrutti 2025 – The National Tech Fest of RUAS.
            <br/><br/>
            Pravrutti embodies the spirit of innovation and action, bringing together the brightest young minds to compete, collaborate, and create impact. Over three electrifying days, participants will push boundaries across 10+ domains—from coding duels and circuit design to business debates, medical diagnostics, and entrepreneurial challenges.
            <br/><br/>
            With a ₹10,00,000 prize pool, Pravrutti is not just a competition, it’s a celebration of talent, teamwork, and transformative thinking.
          </p>
          <div className="pt-6">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Registrations starting soon
            </Button>
          </div>
        </header>
      </div>
    </main>
  );
}
