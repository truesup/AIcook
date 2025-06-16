import { HfInference } from '@huggingface/inference'
import { AI_TOKEN } from './ai-token'

const HF_ACCESS_TOKEN = AI_TOKEN
const MODEL_NAME = 'openchat/openchat-3.5-0106'

const hf = new HfInference(HF_ACCESS_TOKEN)

export async function getRecipe(ingredientsArr, lang = 'ru') {
  const ingredientsString = ingredientsArr.join(', ')

  const promptEn = `You are a creative cooking companion.
The user currently has these ingredients on hand: ${ingredientsString}.
Your task is to propose a flavorful recipe using some or all of these ingredients, without feeling compelled to include them all.
Feel free to add minimal extra ingredients if needed, but keep them within reason.

The response must be formatted in Markdown and follow this exact structure:
- First, include a heading Ingredients: followed by a bullet list of ingredients with approximate measurements in grams (or other suitable units).
- Second, include a heading Instructions: followed by a bullet list of step-by-step cooking instructions.

At the end, please include a brief serving suggestion or garnish tip to elevate the dish.
Have fun, and let your culinary imagination soar!
---`

  const promptRu = `Ты — креативный кулинарный помощник.
У пользователя есть следующие ингредиенты: ${ingredientsString}.
Твоя задача — предложить вкусный рецепт, используя некоторые или все из этих ингредиентов (необязательно все).
Можно добавить немного дополнительных продуктов, если нужно, но без фанатизма.

Ответ должен быть отформатирован в Markdown и строго в такой структуре:
- Сначала заголовок **Ингредиенты:** и список с буллетами (с примерным количеством в граммах или других единицах).
- Затем заголовок **Инструкция:** и список шагов приготовления.

В конце добавь небольшой совет по сервировке или украшению блюда.
Фантазируй и получай удовольствие!
---`

  const prompt = lang === 'ru' ? promptRu : promptEn

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
