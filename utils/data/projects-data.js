import marketAnalysis from '/public/image/Market.jpg';
import webQA from '/public/image/ollama.jpg';
import aiTesting from '/public/image/aisdet.jpg';
import chatInterface from '/public/image/chat.jpg';
import repoChat from '/public/image/ayla.jpg';
import jobSearch from '/public/image/real-estate.jpg';
import agileSimulation from '/public/image/crefin.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI-Powered Market and Business Strategy Analysis',
        description: "I developed a comprehensive AI-driven market and business strategy analysis tool. The project involved designing and implementing CrewAI setup for market demand analysis, technological feasibility assessment, and business strategy evaluation. I utilized LangChain's tools and LLMs for natural language processing and generation, creating a user-friendly interface with Streamlit for input and output reports.",
        tools: ['LangChain', 'CrewAI', 'Streamlit', 'Python'],
        role: 'Lead Developer',
        code: '',
        demo: '',
        image: marketAnalysis,
    },
    {
        id: 2,
        name: 'OLLAMA MISTRAL RAG Chain - Web Content QA System',
        description: 'This project focused on developing a web application for web content QA. I designed and developed a system that allows users to input a URL and question. The application uses web scraping with BeautifulSoup for document retrieval and integrates Ollama’s chat function with RAG Chain for question answering.',
        tools: ['Streamlit', 'BeautifulSoup', 'Ollama Chat', 'RAG Chain'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: webQA,
    },
    {
        id: 3,
        name: 'AI-Powered Testing Assistant',
        description: 'An AI-driven system for automated testing using Selenium and Cucumber. I integrated tools like SeleniumScrapingTool, ChatGroq, and SerperDevTool for efficient test case generation and retrieval, orchestrating tasks using CrewAI to ensure high-quality testing artifacts.',
        tools: ['Selenium', 'Cucumber', 'CrewAI', 'ChatGroq', 'SerperDevTool'],
        role: 'Automation Engineer',
        code: '',
        demo: '',
        image: aiTesting,
    },
    {
        id: 4,
        name: 'Interactive Chat Interface',
        description: "I developed an interactive chat interface using Streamlit, allowing users to input test case details and receive outputs as feature files and step definition files. The project involved implementing a custom prompt template for LlamaCpp LLM to generate accurate and relevant responses based on user input.",
        tools: ['Streamlit', 'LlamaCpp', 'Python'],
        role: 'Lead Developer',
        code: '',
        demo: '',
        image: chatInterface,
    },
    {
        id: 5,
        name: 'RepoChat - GitHub Repository Chatbot',
        description: "I built a GitHub repository chatbot powered by CodeLLaMA. The project involved developing a user interface using Streamlit and integrating the necessary libraries and modules. The system was designed to load repository content sequentially and interact with the chat interface.",
        tools: ['Streamlit', 'CodeLLaMA', 'Python'],
        role: 'Lead Developer',
        code: '',
        demo: '',
        image: repoChat,
    },
    {
        id: 6,
        name: 'Job Search Crew using CrewAI and Langchain-Groq',
        description: "I constructed a job search tool utilizing CrewAI and Langchain-Groq for resume optimization. The project involved assembling a crew of agents for resume analysis, market research, and resume tailoring. Various tools were integrated for resume verification, web search, and modification within the CrewAI framework.",
        tools: ['CrewAI', 'Langchain-Groq', 'Python'],
        role: 'Lead Developer',
        code: '',
        demo: '',
        image: jobSearch,
    },
    {
        id: 7,
        name: 'Agile Development Simulation',
        description: "This project simulated an Agile development team using the CrewAI framework. I created user stories, developed bash scripts, and conducted code reviews to ensure software quality. CrewAI was utilized for task management and sequential execution.",
        tools: ['CrewAI', 'Bash Scripts', 'Python'],
        role: 'Team Lead',
        code: '',
        demo: '',
        image: agileSimulation,
    },
];



// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },