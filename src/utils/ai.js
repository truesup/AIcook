import { HfInference } from '@huggingface/inference'
import { AI_TOKEN } from './ai-token'

const HF_ACCESS_TOKEN = AI_TOKEN

const MODEL_NAME = 'mistralai/Mistral-7B-Instruct-v0.3'

const hf = new HfInference(HF_ACCESS_TOKEN)

export async function getRecipe(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(', ')

  const prompt = `You are a creative cooking companion.
  The user currently has these ingredients on hand: ${ingredientsString}.
  Your task is to propose a flavorful recipe using some or all of these ingredients, without feeling compelled to include them all.
  Feel free to add minimal extra ingredients if needed, but keep them within reason.

  The response must be formatted in Markdown and follow this exact structure:
  - First, include a heading Ingredients: followed by a bullet list of ingredients with approximate measurements in grams (or other suitable units).
  - Second, include a heading Instructions: followed by a bullet list of step-by-step cooking instructions.

  At the end, please include a brief serving suggestion or garnish tip to elevate the dish.
  Have fun, and let your culinary imagination soar!
  ---`

  try {
    const response = await hf.textGeneration({
      model: MODEL_NAME,
      inputs: prompt,
      parameters: {
        max_new_tokens: 700,
        temperature: 0.7,
        top_p: 0.5,
      },
    })

    return response.generated_text
  } catch (error) {
    console.error('Error generating recipe:', error)
    return 'Error generating recipe'
  }
}
