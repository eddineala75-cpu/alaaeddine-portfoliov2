import { ExpertiseItem, ProjectItem, SampleDoc, Publication, TimelineItem } from './types';

export const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'exp-1',
    code: 'EXP-01',
    title: 'Gouvernance & Conformité',
    desc: 'Structuration de démarches de gouvernance et de programmes de conformité alignés sur les référentiels reconnus et les exigences réglementaires.',
    deliverables: ['Revue du cadre de gouvernance', 'Analyse des écarts de conformité (Gap Analysis)', 'Alignement des politiques et procédures'],
    benefits: ['Structures de responsabilité claires', 'Exposition réglementaire réduite'],
    icon: 'ShieldCheck'
  },
  {
    id: 'exp-2',
    code: 'EXP-02',
    title: 'Gestion des Risques',
    desc: 'Identification, analyse et cartographie des risques organisationnels pour une prise de décision éclairée et priorisée.',
    deliverables: ["Ateliers d'identification des risques", 'Registre des risques et opportunités', 'Cartographie des risques (Risk Mapping)'],
    benefits: ['Traitement priorisé des risques', 'Visibilité claire pour la direction'],
    icon: 'BarChart3'
  },
  {
    id: 'exp-3',
    code: 'EXP-03',
    title: 'Documentation ISO',
    desc: 'Élaboration et revue de la documentation des systèmes de management ISO 9001, 14001, 45001 et ISO/IEC 27001.',
    deliverables: ['Structuration de la gestion documentaire', 'Rédaction de procédures et modes opératoires', 'Revue des écarts documentaires'],
    benefits: ["Documentation prête pour l'audit", 'Exécution des processus homogène'],
    icon: 'FileText'
  },
  {
    id: 'exp-4',
    code: 'EXP-04',
    title: "Appui à l'Audit Interne",
    desc: 'Préparation des organisations aux audits internes et de certification à travers des revues de conformité structurées.',
    deliverables: ["Préparation de checklists d'audit", 'Vérification des preuves documentaires', 'Suivi des non-conformités'],
    benefits: ['Audits de certification plus fluides', 'Moins de non-conformités relevées'],
    icon: 'CheckSquare'
  },
  {
    id: 'exp-5',
    code: 'EXP-05',
    title: "Sécurité de l'Information",
    desc: "Appui à la mise en œuvre du SMSI et aux pratiques de gestion des risques liés à la sécurité de l'information, selon ISO/IEC 27001.",
    deliverables: ['Appui documentaire au SMSI', 'Évaluation des risques de sécurité', 'Taxonomie des actifs et menaces (ISO 27002, ANSSI)'],
    benefits: ['Posture de sécurité renforcée', 'Meilleure préparation à la certification'],
    icon: 'Lock'
  },
  {
    id: 'exp-6',
    code: 'EXP-06',
    title: 'Amélioration Continue',
    desc: "Application du PDCA, de l'analyse des causes racines et des CAPA pour renforcer la performance opérationnelle.",
    deliverables: ['Cartographie des processus', 'Analyse des causes racines', 'Plans CAPA (actions correctives/préventives)'],
    benefits: ['Moins de dysfonctionnements récurrents', "Gains d'efficacité mesurables"],
    icon: 'RefreshCw'
  },
  {
    id: 'exp-7',
    code: 'EXP-07',
    title: 'Veille Réglementaire',
    desc: 'Suivi des évolutions réglementaires — RGPD, NIS2, DORA et réglementation tunisienne — applicables à votre organisation.',
    deliverables: ['Rapports de veille réglementaire', "Analyses d'applicabilité", 'Suivi des actions de mise en conformité'],
    benefits: ['Anticipation des nouvelles obligations', 'Risque de non-conformité réduit'],
    icon: 'Scale'
  },
  {
    id: 'exp-8',
    code: 'EXP-08',
    title: 'ESG / Développement Durable',
    desc: "Appui aux démarches ESG et de développement durable, en s'appuyant sur l'expérience QHSE et systèmes de management (ISO 26000, SA8000).",
    deliverables: ['Appui documentaire ESG', 'Contribution au reporting de durabilité', 'Revue des risques environnementaux et sociaux'],
    benefits: ['Fondations ESG structurées', 'Reporting prêt pour les parties prenantes'],
    icon: 'Leaf'
  },
  {
    id: 'exp-9',
    code: 'EXP-09',
    title: 'Documentation Professionnelle',
    desc: "Production de documents professionnels clairs et prêts pour l'audit — des procédures aux rapports de pilotage.",
    deliverables: ['Rédaction de rapports et procédures', 'Mise en forme et maîtrise documentaire', 'Tableaux de bord KPI'],
    benefits: ['Livrables professionnels et homogènes', 'Gain de temps sur la rédaction interne'],
    icon: 'FileSpreadsheet'
  },
  {
    id: 'exp-10',
    code: 'EXP-10',
    title: 'Optimisation CV & LinkedIn',
    desc: 'Accompagnement des professionnels GRC, QHSE et conformité pour présenter leur parcours avec clarté et crédibilité.',
    deliverables: ['Restructuration du CV', 'Optimisation du profil LinkedIn', 'Positionnement professionnel'],
    benefits: ['Discours professionnel plus clair', 'Meilleure première impression'],
    icon: 'UserCheck'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'prj-1',
    code: 'PRJ-01',
    tag: 'SMI',
    title: 'Diagnostic Documentaire du SMI',
    desc: "Diagnostic documentaire du Système de Management Intégré selon ISO 9001:2015 et ISO/IEC 27001:2022, avec identification des écarts et recommandations d'amélioration.",
    context: 'Stage PFE · Qualipro By Imagine Human · fév.–juin 2026',
    frameworks: ['ISO 9001', 'ISO/IEC 27001'],
    icon: 'FileText'
  },
  {
    id: 'prj-2',
    code: 'PRJ-02',
    tag: "Sécurité de l'Information",
    title: 'Cartographie des Risques SI',
    desc: "Contribution à l'élaboration et à la mise à jour de la cartographie des risques liés à la sécurité de l'information.",
    context: 'Stage PFE · Qualipro By Imagine Human · fév.–juin 2026',
    frameworks: ['ISO/IEC 27001', 'ISO/IEC 27002'],
    icon: 'BarChart3'
  },
  {
    id: 'prj-3',
    code: 'PRJ-03',
    tag: 'Cybersécurité',
    title: 'Taxonomie des Risques Cyber',
    desc: "Conception d'une taxonomie des risques cyber basée sur les contrôles ISO/IEC 27002:2022 et le référentiel de menaces de l'ANSSI.",
    context: 'Stage PFE · Qualipro By Imagine Human · fév.–juin 2026',
    frameworks: ['ISO/IEC 27002', 'ANSSI'],
    icon: 'ShieldAlert'
  },
  {
    id: 'prj-4',
    code: 'PRJ-04',
    tag: 'Gestion des Risques',
    title: 'Registre des Risques et Opportunités',
    desc: "Analyse, évaluation et mise à jour du registre des risques et opportunités selon l'approche Risk-Based Thinking des référentiels ISO.",
    context: 'Stage PFE · Qualipro By Imagine Human · fév.–juin 2026',
    frameworks: ['ISO 9001', 'ISO/IEC 27001'],
    icon: 'CheckSquare'
  },
  {
    id: 'prj-5',
    code: 'PRJ-05',
    tag: 'Conformité Réglementaire',
    title: 'Veille RGPD, NIS2 & DORA',
    desc: 'Veille réglementaire et juridique portant sur le RGPD, la NIS2, la DORA ainsi que la réglementation tunisienne relative à la protection des données.',
    context: 'Stage PFE · Qualipro By Imagine Human · fév.–juin 2026',
    frameworks: ['RGPD', 'NIS2', 'DORA'],
    icon: 'Scale'
  },
  {
    id: 'prj-6',
    code: 'PRJ-06',
    tag: 'ISO/IEC 27001',
    title: 'Gestion des Risques SMSI',
    desc: "Participation aux activités de gestion des risques dans le cadre d'un SMSI conforme à ISO/IEC 27001, avec veille réglementaire et mise à jour documentaire.",
    context: "Stage d'été · Qualipro By Imagine Human · juil.–août 2025",
    frameworks: ['ISO/IEC 27001'],
    icon: 'Lock'
  }
];

export const SAMPLES_DATA: SampleDoc[] = [
  {
    id: 'sample-1',
    type: 'docx',
    badge: 'DOCX',
    title: 'Modèle de Fiche de Processus',
    desc: "Modèle de description et de cartographie d’un processus selon l’approche processus ISO 9001, incluant responsabilités, indicateurs et risques associés.",
    size: 'DOCX · Modèle',
    file: 'samples/01_modele_de_fiche_de_processus.docx'
  },
  {
    id: 'sample-2',
    type: 'docx',
    badge: 'DOCX',
    title: 'Procédure de Gestion des Risques et Opportunités',
    desc: "Procédure structurée pour l’identification, l’évaluation, le traitement et le suivi des risques et opportunités selon l’approche Risk-Based Thinking.",
    size: 'DOCX · Procédure',
    file: 'samples/02_procedure_gestion_risques_opportunites.docx'
  },
  {
    id: 'sample-3',
    type: 'xlsx',
    badge: 'XLSX',
    title: 'Taxonomie des Risques',
    desc: "Classification structurée des risques organisationnels et des risques liés à la sécurité de l’information basée sur les bonnes pratiques ISO/IEC 27002.",
    size: 'XLSX · Matrice',
    file: 'samples/03_taxonomie_des_risques.xlsx'
  },
  {
    id: 'sample-4',
    type: 'xlsx',
    badge: 'XLSX',
    title: 'Registre des Opportunités',
    desc: "Modèle de suivi permettant d’identifier, d’évaluer et de piloter les opportunités d’amélioration continue.",
    size: 'XLSX · Registre',
    file: 'samples/04_registre_des_opportunites.xlsx'
  },
  {
    id: 'sample-5',
    type: 'docx',
    badge: 'DOCX',
    title: 'Checklist d’Audit Interne ISO',
    desc: "Checklist d’audit interne permettant de vérifier la conformité documentaire et opérationnelle selon les exigences ISO.",
    size: 'DOCX · Checklist',
    file: 'samples/05_checklist_template.docx'
  },
  {
    id: 'sample-6',
    type: 'docx',
    badge: 'DOCX',
    title: 'Procédure de Communication',
    desc: "Procédure définissant les modalités de communication interne et externe, les responsabilités et les canaux de diffusion.",
    size: 'DOCX · Procédure',
    file: 'samples/06_fiche_procedure_communication.docx'
  },
  {
    id: 'sample-7',
    type: 'docx',
    badge: 'DOCX',
    title: 'Procédure de Gestion Documentaire',
    desc: "Procédure de maîtrise documentaire couvrant création, validation, diffusion, mise à jour et archivage des documents.",
    size: 'DOCX · Procédure',
    file: 'samples/07_fiche_procedure_gestion_documentaire.docx'
  }
];

export const PUBLICATIONS_DATA: Publication[] = [
  {
    id: 'pub-1',
    tag: "Sécurité de l'Information",
    title: "Comment l'ISO/IEC 27001 renforce la résilience des organisations",
    excerpt: "Une approche fondée sur les risques en sécurité de l'information aide les organisations à anticiper les incidents plutôt qu'à les subir.",
    readTime: '5 min',
    icon: 'Lock'
  },
  {
    id: 'pub-2',
    tag: 'Gestion des Risques',
    title: 'Construire un registre des risques efficace',
    excerpt: "Un bon registre des risques est bien plus qu'un tableau — il exige une responsabilité claire, un statut de traitement et une revue régulière.",
    readTime: '4 min',
    icon: 'BarChart3'
  },
  {
    id: 'pub-3',
    tag: 'Audit Interne',
    title: 'Se préparer aux audits internes',
    excerpt: "Des preuves structurées et une documentation claire transforment un audit interne d'un moment de stress en un point de contrôle de routine.",
    readTime: '4 min',
    icon: 'CheckSquare'
  },
  {
    id: 'pub-4',
    tag: 'Cybersécurité',
    title: "Taxonomie des risques cyber : s'appuyer sur l'ISO/IEC 27002 et l'ANSSI",
    excerpt: "Construire une taxonomie de risques cyber sur des contrôles reconnus et un référentiel de menaces solide facilite l'identification et la classification des risques.",
    readTime: '6 min',
    icon: 'ShieldAlert'
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'tml-1',
    date: '2022 – 2024',
    type: 'Expérience',
    rev: 'Rév. 01',
    title: 'Stages Hospitaliers',
    desc: "Participation aux contrôles qualité et calibrations des équipements, application des procédures de stérilisation et désinfection, rédaction de documents qualité — CHU Habib Bourguiba et CHU Hedi Chaker, Sfax."
  },
  {
    id: 'tml-2',
    date: '2024 – 2026',
    type: 'Formation',
    rev: 'Rév. 02',
    title: 'Mastère Professionnel en Management QHSE — Mention Très Bien',
    desc: "Spécialisation en gouvernance, gestion des risques, conformité et systèmes de management — le socle académique de sa transition vers le conseil GRC."
  },
  {
    id: 'tml-3',
    date: 'Juil. – Août 2025',
    type: 'Expérience',
    rev: 'Rév. 03',
    title: "Stage d'été — Qualipro By Imagine Human",
    desc: "Participation aux activités de gestion des risques dans le cadre d'un SMSI conforme à ISO/IEC 27001, veille réglementaire RGPD et mise à jour de la documentation."
  },
  {
    id: 'tml-4',
    date: 'Fév. – Juin 2026',
    type: 'Expérience',
    rev: 'Rév. 04',
    title: 'Stage PFE — Qualipro By Imagine Human',
    desc: "Diagnostic documentaire du SMI, registre des risques et opportunités, cartographie des risques, taxonomie des risques cyber (ISO/IEC 27002 & ANSSI), veille réglementaire RGPD / NIS2 / DORA."
  }
];

export const SKILL_GROUPS = [
  {
    category: "Cybersécurité & Sécurité de l'Information",
    skills: ['ISMS / SMSI', "Gouvernance de la sécurité de l'information", 'Gestion des risques de sécurité', 'RGPD', 'NIS2', 'DORA', 'Référentiel ANSSI']
  },
  {
    category: 'Audit & Systèmes de Management',
    skills: ['Audit interne', 'Préparation des audits', 'Vérification de conformité', 'Gestion documentaire', 'Amélioration continue', 'Non-conformités', 'CAPA', 'Pilotage des KPI', 'Management des processus']
  },
  {
    category: 'Gouvernance, Risques & Conformité',
    skills: ['Gouvernance des SI', 'Enterprise Risk Management', 'Identification & évaluation des risques', 'Cartographie des risques', 'Registre des risques et opportunités', 'Taxonomie des risques', 'Gap Analysis', 'Veille réglementaire', 'Contrôle interne', 'Compliance']
  },
  {
    category: 'Référentiels & Normes',
    skills: ['ISO 9001:2015 / 2026', 'ISO/IEC 27001:2022', 'ISO/IEC 27002:2022', 'ISO 14001:2015', 'ISO 45001:2018', 'ISO 26000', 'SA8000']
  },
  {
    category: 'Outils & Logiciels',
    skills: ['Microsoft Office (Excel, Word)', 'Microsoft Forms', 'Canva', 'Qualipro']
  }
];
