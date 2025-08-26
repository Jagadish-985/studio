import { Code, Cpu, Dna, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Cpu className="h-12 w-12 text-accent" />,
    title: 'AI & Machine Learning',
    description: 'Explore the frontiers of artificial intelligence.',
    color: 'border-accent/30',
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: 'Competitive Coding',
    description: 'Challenge your problem-solving skills.',
    color: 'border-primary/30',
  },
  {
    icon: <Rocket className="h-12 w-12 text-orange-400" />,
    title: 'Aerospace Innovations',
    description: 'Discover the future of space exploration.',
    color: 'border-orange-400/30',
  },
  {
    icon: <Dna className="h-12 w-12 text-purple-400" />,
    title: 'Biotechnology',
    description: 'Witness the intersection of tech and biology.',
    color: 'border-purple-400/30',
  },
];

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

        <section className="w-full animate-fade-in-up animation-delay-500">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What to Expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className={`bg-card/50 backdrop-blur-sm border ${feature.color} hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2`}>
                <CardContent className="p-6 flex flex-col items-center space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="w-full animate-fade-in-up animation-delay-1000">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Our Sponsors</h2>
           <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
              <span className="text-2xl font-semibold text-muted-foreground/50 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300">Sponsor 1</span>
              <span className="text-2xl font-semibold text-muted-foreground/50 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300">Sponsor 2</span>
              <span className="text-2xl font-semibold text-muted-foreground/50 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300">Sponsor 3</span>
              <span className="text-2xl font-semibold text-muted-foreground/50 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-300">Sponsor 4</span>
           </div>
        </section>
      </div>
    </main>
  );
}