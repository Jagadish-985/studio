'use server';

/**
 * @fileOverview AI agent that generates taglines for the techfest.
 *
 * - generateTaglines - A function that generates tagline options for the techfest.
 * - GenerateTaglinesInput - The input type for the generateTaglines function.
 * - GenerateTaglinesOutput - The return type for the generateTaglines function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTaglinesInputSchema = z.object({
  techfestName: z.string().describe('The name of the techfest.'),
});

export type GenerateTaglinesInput = z.infer<typeof GenerateTaglinesInputSchema>;

const GenerateTaglinesOutputSchema = z.object({
  taglines: z.array(z.string()).describe('An array of generated taglines.'),
});

export type GenerateTaglinesOutput = z.infer<typeof GenerateTaglinesOutputSchema>;

export async function generateTaglines(input: GenerateTaglinesInput): Promise<GenerateTaglinesOutput> {
  return generateTaglinesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTaglinesPrompt',
  input: {schema: GenerateTaglinesInputSchema},
  output: {schema: GenerateTaglinesOutputSchema},
  prompt: `You are a creative marketing expert specializing in generating taglines for tech-related events. Generate multiple catchy and innovative tagline options for the techfest named "{{{techfestName}}}". Provide at least 5 different taglines. The taglines should be short, memorable, and reflect the theme of technology and innovation.`,
});

const generateTaglinesFlow = ai.defineFlow(
  {
    name: 'generateTaglinesFlow',
    inputSchema: GenerateTaglinesInputSchema,
    outputSchema: GenerateTaglinesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
