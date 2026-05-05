#  Mini Agent: Autonomous AI Web Developer CLI

AI Agent CLI Tool 

##  Overview

**Mini Agent** is a sophisticated **Conversational CLI Agent** that reasons and acts autonomously to solve complex tasks. Built to mirror the workflow of advanced AI coding assistants like Cursor or Windsurf, Mini Agent can clone full-scale websites—specifically **Scaler Academy**—by generating high-quality HTML, CSS, and JavaScript files through a multi-step reasoning loop.

### Goal
To provide a terminal-based interface where users can chat with Mini Agent—an agent that doesn't just talk, but **executes**. It fetches real-time website data, plans its implementation, and produces production-grade frontend code.


---

##  Architecture: The Reasoning Loop

Mini Agent operates on a strict **THINK -> TOOL -> OBSERVE -> OUTPUT** loop, ensuring high reliability and transparency.

1.  **THINK (Reasoning):** Mini Agent analyzes the user's intent and plans the next logical step.
2.  **TOOL (Action):** Mini Agent selects and executes a tool (e.g., fetching a URL, writing a file, or running a shell command).
3.  **OBSERVE (Validation):** Mini Agent receives feedback from the environment (tool output) and updates its state.
4.  **OUTPUT (Communication):** Once the task is complete or more information is needed, Mini Agent communicates with the user.


---

##  Key Features

-   **Natural Language Interface:** Chat freely with Mini Agent in the terminal.
-   **Autonomous Cloning:** Automatically generates `index.html`, `styles.css`, and `script.js` from a single URL.
-   **Real-time Web Fetching:** Uses `BeautifulSoup4` to extract site structure, copy, and brand assets.
-   **Advanced UI Generation:** Produces responsive layouts with hero sections, navbars, cards, and footers.
-   **Integrated Browser Control:** Automatically opens the final result in your default browser.
-   **Protocol Safety:** Enforces strict JSON communication for deterministic behavior.

---

##  Technology Stack

-   **Language:** Python 3.9+
-   **LLM Integration:** OpenAI-compatible API (Hugging Face Inference Endpoints)
- **Engine:** Llama-3.3-70B-Instruct (via Hugging Face)
-   **Libraries:** `requests`, `beautifulsoup4`, `python-dotenv`, `openai`

---

## Getting Started

### 1. Installation

Clone the repository and install the required dependencies:

```bash
pip install openai requests beautifulsoup4 python-dotenv
```

### 2. Configuration

Create a `.env` file in the root directory:

```env
HUGGINGFACE_API_KEY=your_hf_token_here
MODEL_NAME=meta-llama/Llama-3.3-70B-Instruct
```

### 3. Running the Agent

Launch the CLI:

```bash
python agent.py
```

---

##  Usage Guide

### General Conversation
The agent can answer technical questions or explain concepts before starting a task.
> **User:** "What are the benefits of using Vanilla CSS over Tailwind?"

###  Website Cloning
To clone the Scaler website, simply provide the URL:
> **User:** "Clone https://www.scaler.com for me"

**The Agent will:**
1.   **Think:** Plan the folder structure and file creation order.
2.   **Tool:** Fetch the website data.
3.   **Tool:** Create the `scaler_clone` directory.
4.   **Tool:** Write the HTML structure (Header, Hero, Footer).
5.   **Tool:** Generate a comprehensive CSS file with modern styling.
6.   **Tool:** Add interactive JS (Mobile menu, scroll effects).
7.   **Tool:** Open the final page in your browser.

---

##  Project Structure

```text
├── agent.py            # Main entry point and Reasoning Engine
├── prompt_config.py     # System instructions and few-shot examples
├── tools.py            # Tool definitions (Fetch, Write, Shell)
├── scaler_clone/       # Generated output directory
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── README.md           # Documentation
```

---


---

-   **GitHub Repo:** https://github.com/Raghavendra1729-cell/WebCloner
-   **Video Demo:** [Insert Your YouTube Link Here]

*Built with ❤️.*
