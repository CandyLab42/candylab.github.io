// Lab data — single source of truth for all content

export const LAB = {
  name: { en: "CandyLab", zh: "CandyLab 课题组" },
  tagline: {
    en: "Complexity · Intelligence · Emergence",
    zh: "复杂性 · 智能 · 涌现",
  },
  description: {
    en: "CandyLab at Beihang University (BUAA) studies complex networks, social big data, swarm intelligence, and brain cognition-driven AI. We pursue fundamental science and engineering that reveals how collective intelligence emerges in natural and artificial systems.",
    zh: "北京航空航天大学 CandyLab 聚焦复杂网络、社会大数据、群体智能与脑认知驱动的人工智能研究，探索自然与人工系统中集体智能涌现的基础科学与工程方法。",
  },
  affiliation: {
    en: "School of Artificial Intelligence, Beihang University",
    zh: "北京航空航天大学人工智能学院",
  },
  affiliationUrl: "https://iai.buaa.edu.cn/",
  email: "tangshaoting@buaa.edu.cn",
  founded: 2016,
};

export type Lang = "en" | "zh";

export interface Member {
  slug: string;
  name: { en: string; zh: string };
  role: { en: string; zh: string };
  group: "pi" | "researcher" | "phd" | "master" | "alumni";
  bio: { en: string; zh: string };
  interests: { en: string[]; zh: string[] };
  education?: { degree: { en: string; zh: string }; institution: { en: string; zh: string }; year: number }[];
  email?: string;
  avatar?: string;
}

export const MEMBERS: Member[] = [
  {
    slug: "tang-shaoting",
    name: { en: "Tang Shaoting", zh: "唐绍婷" },
    role: { en: "Professor, Doctoral Supervisor", zh: "教授、博士生导师" },
    group: "pi",
    bio: {
      en: "Tang Shaoting is a Professor and Doctoral Supervisor at BUAA School of AI. Recipient of the National Distinguished Young Scientist Fund (NSFC). Director of the Applied Mathematics & Intelligent Foundations Research Center and Deputy Director of the MOE Key Laboratory. She has published 60+ papers in Nature Communications, Communications Biology, and more, leading 10+ national projects.",
      zh: "唐绍婷，教授，博士生导师，国家杰出青年科学基金获得者。现任应用数学与智能基础研究中心主任、教育部重点实验室副主任。在 Nature Communications、Communications Biology 等期刊发表论文 60 余篇，主持国家级项目 10 余项。",
    },
    interests: {
      en: ["Complex Networks", "Social Big Data", "Swarm Intelligence", "Brain Cognition-Driven AI"],
      zh: ["复杂网络", "社会大数据", "群体智能", "脑认知驱动的人工智能"],
    },
    email: "tangshaoting@buaa.edu.cn",
  },
  {
    slug: "wang-xin",
    name: { en: "Wang Xin", zh: "王鑫" },
    role: { en: "Associate Professor, Doctoral Supervisor", zh: "副教授、博士生导师" },
    group: "researcher",
    bio: {
      en: "Associate Professor at BUAA School of AI. B.S. and Ph.D. from BUAA (2015, 2021), joint training at Dartmouth College (2018–2020). Published 20+ SCI papers in Physical Review X, Nature Communications, etc. Recipient of Beijing Outstanding Doctoral Dissertation award.",
      zh: "副教授，博士生导师。2015 年本科、2021 年博士毕业于北航，曾赴达特茅斯学院联合培养。在 Physical Review X、Nature Communications 等期刊发表 SCI 论文 20 余篇，获北京市优秀博士论文奖。",
    },
    interests: {
      en: ["Big Data & Complex Social Systems", "Swarm Intelligence", "Brain Science & AI"],
      zh: ["大数据与复杂社会系统", "群体智能", "脑科学与人工智能"],
    },
    education: [
      { degree: { en: "Ph.D. in Mathematics", zh: "理学博士（数学）" }, institution: { en: "Beihang University", zh: "北京航空航天大学" }, year: 2021 },
      { degree: { en: "B.S. in Mathematics", zh: "理学学士（数学）" }, institution: { en: "Beihang University", zh: "北京航空航天大学" }, year: 2015 },
    ],
    email: "wangxin_1993@buaa.edu.cn",
  },
  {
    slug: "chen-xingru",
    name: { en: "Chen Xingru", zh: "陈星如" },
    role: { en: "Associate Professor, Master's Supervisor", zh: "副教授、硕士生导师" },
    group: "researcher",
    bio: {
      en: "Associate Professor at BUAA School of AI. B.S. from Peking University, Ph.D. from Dartmouth College (2022). Research in evolutionary game theory, cooperative AI, and behavior-disease systems. Published in PNAS, AAAI, Physics of Life Reviews.",
      zh: "副教授，硕士生导师。本科毕业于北京大学，博士毕业于美国达特茅斯学院（2022）。研究方向涵盖演化博弈论、合作型人工智能等，成果发表于 PNAS、AAAI 等。",
    },
    interests: {
      en: ["Evolutionary Game Theory", "Cooperative AI & MARL", "Behavior-Disease Systems", "Computational Economics"],
      zh: ["演化博弈论", "合作型人工智能与多智能体强化学习", "公共卫生行为-疾病耦合系统", "计算经济学"],
    },
    education: [
      { degree: { en: "Ph.D. in Mathematics", zh: "数学博士" }, institution: { en: "Dartmouth College", zh: "美国达特茅斯学院" }, year: 2022 },
      { degree: { en: "B.S. in Mechanics", zh: "力学学士" }, institution: { en: "Peking University", zh: "北京大学" }, year: 2017 },
    ],
    email: "xingrucz@gmail.com",
  },
  {
    slug: "liu-longzhao",
    name: { en: "Liu Longzhao", zh: "刘龙招" },
    role: { en: "Assistant Professor, Master's Supervisor", zh: "助理教授、硕士生导师" },
    group: "researcher",
    bio: {
      en: "Assistant Professor at BUAA School of AI. B.S. and Ph.D. from BUAA, visiting researcher at Northwestern University (2019–2020). Research in complex systems, network science, opinion dynamics, and spreading processes.",
      zh: "助理教授，硕士生导师。本科及博士均毕业于北航，曾赴美国西北大学复杂系统研究中心访问。研究聚焦复杂系统与网络科学、舆论动力学及传播动力学。",
    },
    interests: {
      en: ["Complex Systems & Network Science", "Collective Behavior & Opinion Dynamics", "Spreading Dynamics"],
      zh: ["复杂系统与网络科学", "集体行为与舆论动力学", "传播动力学"],
    },
    education: [
      { degree: { en: "Ph.D. in Mathematics", zh: "理学博士（数学）" }, institution: { en: "Beihang University", zh: "北京航空航天大学" }, year: 2022 },
      { degree: { en: "B.S. in Mathematics", zh: "理学学士（数学）" }, institution: { en: "Beihang University", zh: "北京航空航天大学" }, year: 2017 },
    ],
    email: "longzhao@buaa.edu.cn",
  },
];

export interface ResearchArea {
  id: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  keywords: { en: string[]; zh: string[] };
}

export const RESEARCH: ResearchArea[] = [
  {
    id: "complex-networks",
    title: { en: "Complex Networks", zh: "复杂网络" },
    description: {
      en: "We study the structure and dynamics of large-scale networked systems — from social networks to biological systems — uncovering the universal mechanisms behind collective phenomena.",
      zh: "研究大规模网络系统的结构与动力学，涵盖社交网络到生物系统，揭示集体现象背后的普适机制。",
    },
    keywords: {
      en: ["Network topology", "Spreading dynamics", "Resilience", "Community detection"],
      zh: ["网络拓扑", "传播动力学", "鲁棒性", "社区发现"],
    },
  },
  {
    id: "swarm-intelligence",
    title: { en: "Swarm Intelligence", zh: "群体智能" },
    description: {
      en: "Inspired by collective behaviors in nature, we design decentralized algorithms for multi-agent coordination, optimization, and emergent computation.",
      zh: "受自然界集体行为启发，研究面向多智能体协调、优化与涌现计算的去中心化算法。",
    },
    keywords: {
      en: ["Multi-agent systems", "Collective behavior", "Evolutionary algorithms", "Opinion dynamics"],
      zh: ["多智能体系统", "集体行为", "演化算法", "舆论动力学"],
    },
  },
  {
    id: "game-theory-ai",
    title: { en: "Game Theory & AI", zh: "博弈论与人工智能" },
    description: {
      en: "We apply evolutionary game theory to understand cooperation, competition, and strategic interaction in both human societies and AI systems.",
      zh: "运用演化博弈论理解人类社会与人工智能系统中的合作、竞争与策略互动。",
    },
    keywords: {
      en: ["Evolutionary games", "Cooperative AI", "MARL", "Mechanism design"],
      zh: ["演化博弈", "合作型人工智能", "多智能体强化学习", "机制设计"],
    },
  },
  {
    id: "brain-ai",
    title: { en: "Brain Cognition & AI", zh: "脑认知与人工智能" },
    description: {
      en: "We draw insights from neuroscience and cognitive science to build AI systems with human-like reasoning, perception, and decision-making capabilities.",
      zh: "借鉴神经科学与认知科学，构建具备类人推理、感知与决策能力的人工智能系统。",
    },
    keywords: {
      en: ["Computational neuroscience", "Cognitive modeling", "Brain-inspired AI", "Neural dynamics"],
      zh: ["计算神经科学", "认知建模", "脑启发人工智能", "神经动力学"],
    },
  },
];

export interface NewsItem {
  date: string;
  title: { en: string; zh: string };
  content: { en: string; zh: string };
  tag: { en: string; zh: string };
}

export const NEWS: NewsItem[] = [
  {
    date: "2025-05",
    title: { en: "Paper accepted at PNAS", zh: "论文被 PNAS 接收" },
    content: {
      en: "Our work on cooperative dynamics in social networks has been accepted by the Proceedings of the National Academy of Sciences.",
      zh: "我们关于社交网络合作动力学的研究被美国国家科学院院刊（PNAS）接收。",
    },
    tag: { en: "Publication", zh: "发表" },
  },
  {
    date: "2025-03",
    title: { en: "NSFC Distinguished Young Scientist Fund awarded", zh: "获批国家杰出青年科学基金" },
    content: {
      en: "Prof. Tang Shaoting has been awarded the National Distinguished Young Scientist Fund by NSFC.",
      zh: "唐绍婷教授荣获国家自然科学基金杰出青年科学基金资助。",
    },
    tag: { en: "Award", zh: "获奖" },
  },
  {
    date: "2024-12",
    title: {
      en: "2024 International Conference on Evolutionary Game Theory & AI",
      zh: "2024 演化博弈理论与人工智能国际会议",
    },
    content: {
      en: "Prof. Tang served as General Chair of the 2024 International Conference on Evolutionary Game Theory & AI.",
      zh: "唐绍婷教授担任 2024 年演化博弈理论与人工智能国际会议大会主席。",
    },
    tag: { en: "Event", zh: "活动" },
  },
  {
    date: "2024-06",
    title: { en: "Recruiting PhD students for 2025", zh: "2025 年博士研究生招募" },
    content: {
      en: "We are actively recruiting motivated PhD students with interests in AI, complex systems, or game theory. Contact us to learn more.",
      zh: "我们正积极招募对人工智能、复杂系统或博弈论有热情的博士研究生，欢迎联系咨询。",
    },
    tag: { en: "Recruiting", zh: "招募" },
  },
];

export const NAV = {
  en: [
    { label: "Research", href: "#research" },
    { label: "Publications", href: "#publications" },
    { label: "Members", href: "#members" },
    { label: "News", href: "#news" },
    { label: "Join Us", href: "#join" },
  ],
  zh: [
    { label: "研究方向", href: "#research" },
    { label: "学术成果", href: "#publications" },
    { label: "团队成员", href: "#members" },
    { label: "最新动态", href: "#news" },
    { label: "加入我们", href: "#join" },
  ],
};
