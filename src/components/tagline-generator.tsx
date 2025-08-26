'use client';

import { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { handleGenerateTaglines } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export function TaglineGenerator() {
  const [taglines, setTaglines] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTaglines([]);

    const result = await handleGenerateTaglines({ techfestName: 'Pravrutti' });

    setIsLoading(false);

    if ('error' in result) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    } else if (result.taglines) {
      setTaglines(result.taglines);
    }
  };

  return (
    <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-sm border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="h-6 w-6 text-primary" />
          <span>AI Tagline Generator</span>
        </CardTitle>
        <CardDescription>
          Feeling creative? Generate some taglines for our techfest!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <Button type="submit" disabled={isLoading} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Generate Taglines
              </>
            )}
          </Button>
        </form>

        {taglines.length > 0 && (
          <div className="mt-6 text-left">
            <h3 className="text-lg font-semibold text-center mb-4">Generated Taglines:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {taglines.map((tagline, index) => (
                <li key={index} className="bg-secondary p-3 rounded-md text-secondary-foreground text-sm">
                  {tagline}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
