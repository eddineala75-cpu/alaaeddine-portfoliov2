export interface ExpertiseItem {
  id: string;
  code: string;
  title: string;
  desc: string;
  deliverables: string[];
  benefits: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  code: string;
  tag: string;
  title: string;
  desc: string;
  context: string;
  frameworks: string[];
  icon: string;
}

export interface SampleDoc {
  id: string;
  title: string;
  badge: string;
  type: 'docx' | 'xlsx';
  desc: string;
  size: string;
  file: string;
}

export interface Publication {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  icon: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  type: string;
  rev: string;
  title: string;
  desc: string;
}
