// Project categories drive the filter chips and the gradient theme of each card.
// Keep these strings in sync with CATEGORY_STYLES in project-card.jsx.
export const projectCategories = [
  'All',
  'Voice AI',
  'Agentic AI',
  'Document AI',
  'LLM Infra',
  'Enterprise',
];

export const projectsData = [
  // ───────────────────────── Flagship · Voice AI ─────────────────────────
  {
    id: 1,
    name: 'Eve — Emotionally Intelligent Voice AI for Insurance',
    description:
      'Full-stack real-time voice assistant for insurance: customers authenticate by voice and converse about policies, claims and coverage. Pairs Amazon Nova Sonic speech-to-speech with LiveKit WebRTC for sub-500ms latency, grounded by dual-source RAG (Bedrock KB + ChromaDB fallback) and emotion-adaptive responses.',
    tools: ['Nova Sonic', 'LiveKit', 'AWS Bedrock', 'LangChain', 'ChromaDB', 'React 18', 'ECS Fargate'],
    role: 'Full-Stack AI Engineer',
    category: 'Voice AI',
    featured: true,
    code: '',
    demo: '',
  },
  {
    id: 2,
    name: 'Amazon Connect Voice AI Contact-Center Agent',
    description:
      'Serverless voice agent that answers live phone calls through Amazon Connect, understands speech via Nova Sonic, and retrieves answers with agentic RAG. AGNO multi-agent orchestration (coordinator + RAG + escalation), dual-layer Bedrock Guardrails, and a 4-stack AWS CDK infrastructure-as-code topology.',
    tools: ['Amazon Connect', 'Nova Sonic', 'AGNO', 'Bedrock Guardrails', 'OpenSearch', 'AWS CDK', 'DynamoDB'],
    role: 'AI / Cloud Architect',
    category: 'Voice AI',
    featured: true,
    code: '',
    demo: '',
  },
  {
    id: 3,
    name: 'AI Avatar — Talking-Head Call Center',
    description:
      'Real-time conversational AI where users talk to a lip-synced animated avatar. End-to-end pipeline of 8 services: Whisper STT → Zep knowledge graph → GLM-4.5-Air → Maya1 TTS → Ditto motion-space diffusion → progressively streamed video, with fallback chains throughout.',
    tools: ['Faster-Whisper', 'Ditto TalkingHead', 'Maya1 TTS', 'Zep Cloud', 'FastAPI', 'TensorRT', 'CUDA'],
    role: 'Multimodal AI Engineer',
    category: 'Voice AI',
    featured: true,
    code: '',
    demo: '',
  },
  {
    id: 4,
    name: 'Friday Jarvis — Voice AI Personal Assistant',
    description:
      'A J.A.R.V.I.S.-style voice-only assistant running as a LiveKit agent on AWS Nova Sonic (single-call STT+LLM+TTS). Persistent Mem0 memory, Silero VAD + noise cancellation, and custom tools for weather, web search, email, and TF-IDF search over 13.6 MB of Evoke content.',
    tools: ['LiveKit Agents', 'Nova Sonic', 'Mem0', 'Silero VAD', 'LangChain', 'Python asyncio'],
    role: 'Voice AI Engineer',
    category: 'Voice AI',
    code: '',
    demo: '',
  },

  // ───────────────────────── Agentic AI ─────────────────────────
  {
    id: 5,
    name: 'Intelligent Vendor Onboarding Platform',
    description:
      'AI platform automating vendor registration, document validation and follow-ups (Evoke Hackathon 2025). A 7-agent AGNO system on Azure with Document-Intelligence-powered form validation, fuzzy cross-checking, LLM guardrails, and a secure OTP-authenticated Next.js procurement dashboard.',
    tools: ['AGNO AgentOS', 'Azure OpenAI', 'Document Intelligence', 'Cosmos DB', 'Next.js 14', 'FastAPI'],
    role: 'AI Full-Stack Engineer',
    category: 'Agentic AI',
    featured: true,
    code: '',
    demo: '',
  },
  {
    id: 6,
    name: 'Unified AI Platform — On-Prem Production Stack',
    description:
      'A privacy-first AI platform serving an entire team over LAN with zero cloud dependency. Five microservices on a single RTX 4080 — vLLM-served Gemma-3, embeddings, an autonomous Agent Zero, feedback, and a streaming chat UI — with watchdog cron jobs and GPU OOM auto-recovery.',
    tools: ['vLLM', 'LiteLLM', 'Gemma-3', 'FastAPI', 'Agent Zero', 'nvidia-ml-py', 'Bash'],
    role: 'AI Infrastructure Engineer',
    category: 'Agentic AI',
    code: '',
    demo: '',
  },
  {
    id: 7,
    name: 'AI Market & Business Strategy Analysis',
    description:
      'A CrewAI system for market-demand analysis, technical-feasibility assessment and business-strategy evaluation, with LangChain tools and LLMs producing structured reports through a Streamlit interface.',
    tools: ['CrewAI', 'LangChain', 'Streamlit', 'Python'],
    role: 'Lead Developer',
    category: 'Agentic AI',
    code: '',
    demo: '',
  },
  {
    id: 8,
    name: 'Job Search Crew — CrewAI + Langchain-Groq',
    description:
      'A multi-agent resume-optimization tool: a crew of agents performs resume analysis, market research and tailoring, with integrated tools for verification, web search and resume modification.',
    tools: ['CrewAI', 'Langchain-Groq', 'Python'],
    role: 'Lead Developer',
    category: 'Agentic AI',
    code: '',
    demo: '',
  },
  {
    id: 9,
    name: 'AI-Powered Testing Assistant',
    description:
      'An AI-driven automated-testing system using Selenium and Cucumber. CrewAI orchestrates SeleniumScrapingTool, ChatGroq and SerperDevTool to generate and retrieve high-quality test artifacts.',
    tools: ['Selenium', 'Cucumber', 'CrewAI', 'ChatGroq', 'SerperDevTool'],
    role: 'Automation Engineer',
    category: 'Agentic AI',
    code: '',
    demo: '',
  },
  {
    id: 10,
    name: 'Agile Development Simulation',
    description:
      'A CrewAI simulation of an Agile development team — generating user stories, building bash scripts, and running code reviews with sequential task management to ensure software quality.',
    tools: ['CrewAI', 'Bash', 'Python'],
    role: 'Team Lead',
    category: 'Agentic AI',
    code: '',
    demo: '',
  },

  // ───────────────────────── Document AI ─────────────────────────
  {
    id: 11,
    name: 'PDF Agents — Enterprise Document Intelligence (MinerU)',
    description:
      'Converts any PDF — scanned, native, or complex layout — into clean Markdown/JSON/text across 109 languages, preserving reading order and extracting tables (HTML) and formulas (LaTeX). Multi-GPU "Tianshu" microservice architecture isolates parsing in separate processes to eliminate CUDA segfaults.',
    tools: ['DocLayout-YOLO', 'PaddleOCR', 'Qwen2.5-VL', 'vLLM', 'LitServe', 'MinIO', 'FastAPI'],
    role: 'ML Engineer',
    category: 'Document AI',
    featured: true,
    code: '',
    demo: '',
  },
  {
    id: 12,
    name: 'Sparrow — Structured Data Extraction',
    description:
      'Schema-driven structured-JSON extraction from invoices, bank statements, forms and financial tables using vision-language models. An InferenceFactory swaps 5 VLM backends behind one interface, with Prefect-orchestrated multi-step document workflows and bounding-box output.',
    tools: ['Qwen2.5-VL', 'Mistral-Small', 'Prefect', 'MLX-VLM', 'Ollama', 'FastAPI', 'Pydantic'],
    role: 'ML Engineer',
    category: 'Document AI',
    code: '',
    demo: '',
  },
  {
    id: 13,
    name: 'PaddleOCR-VL Production Server',
    description:
      'A hardened FastAPI server wrapping PaddleOCR-VL for OCR, layout analysis, table and formula recognition behind OpenAI-compatible endpoints. Full production middleware stack — bearer auth, per-IP rate limiting, Prometheus metrics, and SSE streaming.',
    tools: ['PaddleOCR-VL', 'FastAPI', 'PyTorch', 'Transformers', 'Prometheus', 'CUDA'],
    role: 'ML Platform Engineer',
    category: 'Document AI',
    code: '',
    demo: '',
  },
  {
    id: 14,
    name: 'OLLAMA Mistral RAG — Web Content QA',
    description:
      'A web app for content Q&A: users submit a URL and a question; the system scrapes the page with BeautifulSoup and answers via Ollama chat integrated with a RAG chain.',
    tools: ['Streamlit', 'BeautifulSoup', 'Ollama', 'RAG Chain'],
    role: 'Full-Stack Developer',
    category: 'Document AI',
    code: '',
    demo: '',
  },

  // ───────────────────────── LLM Infra ─────────────────────────
  {
    id: 15,
    name: 'LiveKit Agents Framework',
    description:
      'A production framework for real-time voice & multimodal AI agents over WebRTC — VAD, semantic turn detection, STT/LLM/TTS pipelines, a 40+ plugin ecosystem, multi-agent handoff, preemptive generation and an IPC process pool. The foundation behind Friday Jarvis and the AI Avatar demo.',
    tools: ['Python asyncio', 'WebRTC', 'PyAV', 'OpenTelemetry', 'MCP', 'uv'],
    role: 'Framework Contributor',
    category: 'LLM Infra',
    code: '',
    demo: '',
  },
  {
    id: 16,
    name: 'Local AI Assistant — Offline Voice Agent',
    description:
      'A fully offline voice assistant — zero internet, zero cloud. Whisper transcribes locally while Ollama + Llama 3.2 handle intent and tool-calling for file management and task tracking, all surfaced through a Gradio UI. Suited to air-gapped and edge deployments.',
    tools: ['Whisper', 'Ollama', 'Llama 3.2', 'Gradio', 'PyTorch', 'Pandas'],
    role: 'AI Engineer',
    category: 'LLM Infra',
    code: '',
    demo: '',
  },
  {
    id: 17,
    name: 'RepoChat — GitHub Repository Chatbot',
    description:
      'A CodeLLaMA-powered chatbot that loads a GitHub repository sequentially and lets you interrogate the codebase through a Streamlit chat interface.',
    tools: ['Streamlit', 'CodeLLaMA', 'Python'],
    role: 'Lead Developer',
    category: 'LLM Infra',
    code: '',
    demo: '',
  },
  {
    id: 18,
    name: 'Interactive Test-Case Chat Interface',
    description:
      'A Streamlit interface where users enter test-case details and receive generated feature files and step definitions, driven by a custom prompt template for an LlamaCpp LLM.',
    tools: ['Streamlit', 'LlamaCpp', 'Python'],
    role: 'Lead Developer',
    category: 'LLM Infra',
    code: '',
    demo: '',
  },

  // ───────────────────────── Enterprise / Modernization ─────────────────────────
  {
    id: 19,
    name: 'RAISE — Enterprise ExtJS → React Migration (BMS)',
    description:
      'Migration of two legacy ExtJS 7.x pharmaceutical BPM apps (~53K LOC) to a type-safe React 18 + TypeScript stack using the Strangler Fig pattern — 24 feature modules, HIPAA-aware PHI containment, a reusable component library, and 900+ automated tests (Vitest + Playwright).',
    tools: ['React 18', 'TypeScript', 'Vite', 'MUI', 'AG Grid', 'TanStack Query', 'Playwright'],
    role: 'Lead Frontend / Modernization',
    category: 'Enterprise',
    featured: true,
    code: '',
    demo: '',
  },
  {
    id: 20,
    name: 'SDLC Automation Platform + Website Engine',
    description:
      'A 15-agent DAG pipeline that turns raw meeting transcripts into complete deliverables — requirements, BRD/FRD/SOW, sprint plans, tickets, architecture, code, tests, deployment — over a peer-to-peer JSON-contract protocol, plus a CSV-to-Cloudflare engine that generates and deploys production sites for local businesses.',
    tools: ['Python', 'YAML pipelines', 'JSON contracts', 'Astro', 'Gemini API', 'Cloudflare Pages'],
    role: 'AI Automation Architect',
    category: 'Enterprise',
    featured: true,
    code: '',
    demo: '',
  },
  {
    id: 21,
    name: 'TAXCALC — AI COBOL → MSTX Legacy Migration',
    description:
      'A 6-agent AGNO system that converts legacy COBOL tax calculations into modern XML-based MSTX with a proprietary DSL — combining a local quantized Qwen 2.5 endpoint with Gemini and a curated 50+ pattern library to cut a 26–60h manual job by ~75% with far fewer errors.',
    tools: ['AGNO', 'Qwen 2.5 (AWQ)', 'Gemini 2.5', 'python-docx', 'XML/MSTX', 'Pandas'],
    role: 'AI Engineer',
    category: 'Enterprise',
    code: '',
    demo: '',
  },
  {
    id: 22,
    name: 'RSDLC — Rita\'s Daily Shop Tool',
    description:
      'A franchise operations portal for Rita\'s Italian Ice. Phase 1 ships a React 18 + TypeScript Flavor Portal with a shared pure-logic domain layer and atomic publish; Phase 2 documents a full 12-gateway AWS serverless replication spec with Okta OIDC and 8-role RBAC.',
    tools: ['React 18', 'TypeScript', 'Vite', 'Zustand', 'Express', 'Vitest', 'AWS (spec)'],
    role: 'Full-Stack Engineer',
    category: 'Enterprise',
    code: '',
    demo: '',
  },
];
