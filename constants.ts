
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'fac-ai',
    title: 'FAC.AI',
    description: 'Plataforma multi-agente para síntese de conteúdo inteligente.',
    longDescription: 'Sistema capaz de processar vídeos do YouTube, áudios do Spotify e documentos PDF para gerar resumos, insights e uma base de conhecimento pesquisável. Construído com foco em produtividade e IA aplicada.',
    tags: ['Python', 'NiceGUI', 'Whisper', 'OpenAI', 'LangChain'],
    image: 'https://picsum.photos/seed/facai/800/600',
    category: 'AI'
  },
  {
    id: 'jarvis-agent',
    title: 'JARVIS-Style Agent',
    description: 'Assistente pessoal controlado por voz integrado ao ambiente de desenvolvimento.',
    longDescription: 'Agente autônomo que utiliza Whisper para transcrição em tempo real e LLMs para execução de comandos de sistema, automação de tarefas na IDE e controle de fluxo de trabalho.',
    tags: ['Python', 'Whisper', 'Groq', 'Automation', 'Voice Control'],
    image: 'https://picsum.photos/seed/jarvis/800/600',
    category: 'AI'
  },
  {
    id: 'laravel-api',
    title: 'Enterprise REST API',
    description: 'Arquitetura robusta para sistemas escaláveis em Laravel.',
    longDescription: 'Desenvolvimento de APIs com foco em segurança, implementação de Rate Limiting, autenticação JWT/Sanctum e documentação via Swagger/L5-Swagger.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Docker'],
    image: 'https://picsum.photos/seed/laravel/800/600',
    category: 'Backend'
  },
  {
    id: 'automation-vdl',
    title: 'Media Automation Suite',
    description: 'Pipeline de automação para download e processamento de mídia.',
    longDescription: 'Integração de yt-dlp com workflows de pós-processamento para extração de dados, conversão de formatos e indexação automática em bancos de dados vetoriais.',
    tags: ['Python', 'yt-dlp', 'Bash', 'FFmpeg'],
    image: 'https://picsum.photos/seed/media/800/600',
    category: 'Automation'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Laravel', level: 90, category: 'Frameworks' },
  { name: 'PHP', level: 85, category: 'Languages' },
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'REST APIs', level: 95, category: 'Infrastructure' },
  { name: 'LLM Integration', level: 88, category: 'AI & Tools' },
  { name: 'AI Agents', level: 85, category: 'AI & Tools' },
  { name: 'Whisper/Speech', level: 80, category: 'AI & Tools' },
  { name: 'NiceGUI', level: 75, category: 'Frameworks' },
  { name: 'React', level: 65, category: 'Frameworks' },
  { name: 'Docker', level: 70, category: 'Infrastructure' },
];

export const TIMELINE: Experience[] = [
  {
    year: '2024 - Presente',
    title: 'Foco em Agentes Autônomos',
    company: 'Projetos Independentes',
    description: 'Desenvolvimento do ecossistema FAC.AI e integração de modelos Groq para baixa latência em agentes de voz.'
  },
  {
    year: '2023 - 2024',
    title: 'Especialização em Backend',
    company: 'Estudos de Engenharia',
    description: 'Aprofundamento em arquitetura de microsserviços com Laravel e padrões de design em Python.'
  },
  {
    year: '2022',
    title: 'Início na Engenharia de Software',
    company: 'Acadêmico',
    description: 'Fundamentos de algoritmos, estruturas de dados e os primeiros passos com PHP e automação.'
  }
];
