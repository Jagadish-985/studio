'use server';

import {
  generateTaglines,
  type GenerateTaglinesInput,
  type GenerateTaglinesOutput,
} from '@/ai/flows/generate-taglines';

export async function handleGenerateTaglines(
  input: GenerateTaglinesInput
): Promise<GenerateTaglinesOutput | { error: string }> {
  try {
    const result = await generateTaglines(input);
    return result;
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { error: `Failed to generate taglines. ${errorMessage}` };
  }
}
