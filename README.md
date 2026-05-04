# AI Web Developer CLI

Conversational CLI agent for Assignment 02.

It supports:

- normal terminal chat
- multi-step reasoning with tools
- homepage cloning from a website URL

## Setup

Install dependencies:

```bash
pip install openai requests beautifulsoup4 python-dotenv
```

Create a `.env` file:

```env
HUGGINGFACE_API_KEY=hf_your_token_here
MODEL_NAME=Qwen/Qwen2.5-7B-Instruct
```

## Run

```bash
python3 agent.py
```

## Usage

Normal chat:

```text
What is Tailwind CSS?
```

Clone a website:

```text
Clone https://www.scaler.com for me
```

If you ask to clone without a URL, the CLI will ask for the website URL.

## Notes

- The agent always uses a JSON step loop: `THINK -> TOOL -> OBSERVE -> OUTPUT`
- Generated clones should include `index.html`, `styles.css`, and `script.js`
- `.env` should stay uncommitted
