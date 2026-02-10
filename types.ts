
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: 'AI' | 'Backend' | 'Automation';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Languages' | 'Frameworks' | 'AI & Tools' | 'Infrastructure';
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
}
