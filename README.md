# 👨‍🍳 AIcook

**AIcook** is a simple and creative web app that generates cooking recipes based on the ingredients you currently have.

## 🍳 What it does

Just enter a list of ingredients — AIcook will use a neural language model to generate a full recipe for you.  
The output includes:

- A structured **Ingredients** list (with approximate measurements)
- A step-by-step **Instructions** section
- A short **serving suggestion or garnish tip**

All responses are generated using an open-source LLM via Hugging Face Inference API.

## 🌐 Who it's for

AIcook is perfect for:

- People with random leftovers in the fridge
- Anyone looking for quick inspiration without browsing recipes
- Cooking hobbyists exploring AI-generated dishes

## ⚙️ How it works

- Built entirely in **React** (frontend only, no backend)
- Connects to a hosted LLM (`Mistral-7B-Instruct`) via Hugging Face API
- Sends a structured prompt with your ingredients
- Receives and displays a full recipe in Markdown format

## 🧪 Status

This is a non-commercial **pet project**, created to explore LLMs and natural language generation in a practical, everyday context.

## 📌 Disclaimer

The recipes are AI-generated and should be reviewed before actual cooking. Ingredient measurements may not always be precise.

---

Made with 🍅 + 🧄 by a human & an AI.
