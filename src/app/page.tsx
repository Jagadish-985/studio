import { ArrowRight, Code, Cpu, Dna, Rocket } from 'lucide-react';
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
    icon: <Rocket className="h-12 w-12 text-red-400" />,
    title: 'Aerospace Innovations',
    description: 'Discover the future of space exploration.',
    color: 'border-red-400/30',
  },
  {
    icon: <Dna className="h-12 w-12 text-green-400" />,
    title: 'Biotechnology',
    description: 'Witness the intersection of tech and biology.',
    color: 'border-green-400/30',
  },
];

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 text-foreground font-body overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="flex flex-col items-center space-y-16 max-w-5xl w-full text-center">
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
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground tracking-wide max-w-2xl mx-auto">
            Where Innovation Converges. A Celebration of Technology, Creativity, and the Future.
          </p>
          <div className="pt-6">
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Explore Events
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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

// Add custom animation classes to globals.css if they don't exist
// globals.css
/*
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes fade-in-down {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-500 {
  animation-delay: 0.5s;
  animation-fill-mode: both; 
}
.animation-delay-1000 {
  animation-delay: 1s;
  animation-fill-mode: both; 
}
*/
