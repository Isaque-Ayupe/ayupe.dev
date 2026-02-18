
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'Condomananger',
    title: 'CondoManager',
    description: 'Plataforma para gerenciamento de condomínios, com foco em produtividade e simplicidade.',
    longDescription: 'Sistema capaz de processar vídeos do YouTube, áudios do Spotify e documentos PDF para gerar resumos, insights e uma base de conhecimento pesquisável. Construído com foco em produtividade e IA aplicada.',
    tags: ['Python', 'Flask', 'MySQL', 'JavaScript'],
    image: 'images/Condomananger.png',
    githubUrl: 'https://github.com/Isaque-Ayupe/Condomanger',
    category: 'Fullstack'
  },
  {
    id: 'jarvis-agent',
    title: 'JARVIS',
    description: 'Assistente pessoal controlado por voz integrado ao ambiente de desenvolvimento.',
    longDescription: 'Agente autônomo que utiliza ferramentas como Whisper para transcrição em tempo real, agentes que fazem abstração do comando de voz e enviam um json completo para a IDE construir o comando a ser executado.',
    tags: ['Python','Automation', 'Voice Control'],
    image: 'images/Jarvis.png',
    githubUrl: 'https://github.com/ayupe/jarvis-agent',
    category: 'AI'
  },
];

export const SKILLS: Skill[] = [
  { name: 'Flask', level: 90, category: 'Frameworks' },
  { name: 'Python', level: 90, category: 'Languages' },
  { name: 'JavaScript', level: 90, category: 'Languages' },
  { name: 'REST APIs', level: 95, category: 'Infrastructure' },
  { name: 'REST APIs', level: 95, category: 'Infrastructure' },
  { name: 'MySQL', level: 90, category: 'Infrastructure' },
  { name: 'AI Agents', level: 85, category: 'AI & Tools' },
  { name: 'Whisper/Speech', level: 80, category: 'AI & Tools' },
  { name: 'React', level: 65, category: 'Frameworks' },
  { name: 'Docker', level: 70, category: 'Infrastructure' },

];

export const TIMELINE: Experience[] = [
  {
    year: '2025 - Presente',
    title: 'Analista de Helpdesk',
    company: 'Virtua Software',
    description: 'Suporte ao sistema, análise de requisitos de modificação e correção. Querys SQL e manutenção de banco de dados FIREBIRD'
  },
  {
    year: '2022',
    title: 'Início na Engenharia de Software',
    company: 'Acadêmico',
    description: 'Fundamentos de algoritmos, estruturas de dados e os primeiros passos com PHP e automação.'
  }
];
