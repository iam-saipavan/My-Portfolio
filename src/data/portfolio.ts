import { Project, Experience, Achievement, Publication, Certification, Skill, Mentorship, Volunteering } from '../types';

export const personalInfo = {
  name: 'Sai Pavan Vajja',
  title: 'Computer Science & Engineering Student',
  university: 'Siddharth Institute of Engineering & Technology',
  duration: 'September 2022 – May 2026',
  cgpa: '8.89/10',
  email: 'saipavan6363622@gmail.com',
  phone: '+91 6363622146',
  linkedin: 'https://linkedin.com/in/saipavan-vajja-sss',
  github: 'https://github.com/iam-saipavan',
  // portfolio: 'https://redesign-ebay-hemasri.my.canva.site/hemasri-portfolio',
  taglines: [
    // 'Product Designer',
    'Software Developer', 
    'GenAI Enthusiast',
    // 'Project Manager',
    'Research Scholar'
  ],
  bio: `Aspiring software engineer graduating in 2026 with a strong foundation in Python, SQL, cloud-native
        development, and analytics-driven systems. Experienced in building scalable applications, data-backed
        solutions, and API-based platforms. Passionate about contributing across Data Engineering, Data Science,
        and Decision Science tracks to deliver measurable business impact and grow as a future leader.`
};

export const experiences: Experience[] = [
  // {
  //   company: 'Philips Global Business Services LLP',
  //   role: 'Software Development Engineer Intern',
  //   duration: 'June 2025 – Present',
  //   description: [
  //     'Reengineered billing logic in the ITAAP AI Foundation platform using Java, Spring Boot, PostgreSQL, and schedulers—fixing cost inaccuracies and date filtering issues',
  //     'Automated cost management with cron jobs, SQL procedures, and API testing, improving reporting accuracy by 35% and building a unified admin dashboard across all environments (Dev, Acc, Prod, Test)',
  //     'Built a QA Automation POC for Philips AI Chat using Python, Azure OpenAI, SmolAgents, FastAPI, and LangChain, reducing manual testing by 60%',
  //     'Enhanced the DocAgent frontend by fixing bugs and improving UI functionality for a smoother user experience'
  //   ],
  //   techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'Python', 'Azure OpenAI', 'SmolAgents', 'FastAPI', 'LangChain', 'PostgreSQL']
  // },
  // {
  //   company: 'Broadridge Financial Solutions',
  //   role: 'Student Ambassador',
  //   duration: 'Ongoing',
  //   description: [
  //     'Representing Broadridge at SRM Institute, promoting financial technology solutions and career opportunities',
  //     'Organizing tech talks, workshops, and recruitment drives to connect students with industry professionals',
  //     'Facilitating knowledge sharing sessions on fintech innovations and emerging technologies',
  //     'Building strategic partnerships between academia and industry for mutual growth'
  //   ],
  //   techStack: ['Financial Technology', 'Leadership', 'Event Management', 'Community Building']
  // },
  // {
  //   company: 'PwC Launchpad Program',
  //   role: 'Data Analytics & AI Student Trainee',
  //   duration: 'February 2025 – June 2025',
  //   description: [
  //     'Completed core modules covering IT fundamentals, relational database management systems (RDBMS), and Python programming',
  //     'Applied concepts through hands-on coding exercises focused on data structures, control flow, and basic data handling',
  //     'Completed advanced coursework in data science, including data preprocessing, exploratory data analysis (EDA), data visualization, web scraping, and machine learning',
  //     'Utilized industry-standard tools and libraries for comprehensive data analytics training'
  //   ],
  //   techStack: ['Python', 'RDBMS', 'IT Fundamentals', 'Data Science', 'Machine Learning', 'Data Visualization', 'Web Scraping']
  // },
  // {
  //   company: 'Samsung PRISM R&D Institute India',
  //   role: 'Project Intern',
  //   duration: 'August 2024 – June 2025',
  //   description: [
  //     'Developing an AI-driven, low-complexity neural network model to enhance video quality by eliminating compression artifacts, resulting in a 20% improvement in video clarity as measured by PSNR metrics',
  //     'Configured a testbed using VTM software for video encoding and decoding, processed 500+ YUV datasets',
  //     'Trained and deployed ML models with optimized performance to achieve a 15% reduction in artifact removal processing time',
  //     'Collaborated with Samsung R&D team on cutting-edge computer vision research'
  //   ],
  //   techStack: ['Python', 'Neural Networks', 'Computer Vision', 'VTM Software', 'Machine Learning', 'PSNR Analysis']
  // },
  {
    company: 'Infosys Springboard',
    role: 'Intern',
    duration: 'Aug 2025– Oct 2025',
    description: [
      'Designed and developed a scalable Retrieval-Augmented Generation (RAG) system using FastAPI and React, applying core software engineering principles.',
      'Collaborated with cross-functional team members in an agile environment to gather requirements and deliver reliable backend APIs.',
      'Improved system performance and reliability by integrating databases and optimizing data processing pipelines.',
      // 'Designed 45+ creative AR lenses garnering 2.63B+ views, 45.65M+ shares, and 2.44B+ plays, building a 10K+ follower base'
    ],
    techStack: ['RAG', 'Python', 'OLLAMA']
  }
];

export const projects: Project[] = [
  // {
  //   title: 'GenAI QA Automation System (POC - Philips)',
  //   description: 'Built an enterprise-grade QA automation platform leveraging Azure OpenAI, AST parsing, and Docker sandboxing for secure, isolated test generation and execution. Automated end-to-end functional testing with FastAPI, enabling real-time code analysis and designed for seamless CI/CD integration. Reduced manual QA overhead by 80% and accelerated release cycles with fully automated functional test pipelines.',
  //   techStack: ['Python', 'FastAPI', 'Docker', 'Azure OpenAI', 'AST', 'RAG', 'Prompt Engineering', 'Fine-tuning', 'Agentic AI', 'SmolAgents', 'Pydantic'],
  //   featured: true
  // },
  {
    title: 'AI AudioBook Generator',
    description: 'Collaborated in an agile environment to design scalable APIs, handle data pipelines,and integrate them with an LangChain–Ollama LLM framework. Developed and deployed an intelligent RAG(Retrieval-Augmented Generation) integrating FastAPI back end and React frontend for document-based question answering.',
    techStack: ['Python', 'Streamlit', 'Google API Libraries', 'LangChain', 'OpenAI GPT API', 'Gemini Pro Model', 'Matplotlib'],
    // liveUrl: 'https://comsense.streamlit.app/',
    githubUrl: 'https://github.com/iam-saipavan/Rag-Document-AI',
    featured: true
  },
  // {
  //   title: '',
  //   description: 'Leveraged Next.js for hybrid approach, combining server-side rendering, static site generation, and client-side rendering to optimize performance. Integrated PostgreSQL for relational data management and Drizzle ORM for efficient database operations. Offers 25+ templates, including content creation tools, SEO description generation, code generation and debugging, product and blog post writing, YouTube and Instagram optimization, and immersive 3D interactive components.',
  //   techStack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Clerk', 'Three.js', 'Google Gemini AI'],
  //   liveUrl: 'https://freeflowai.vercel.app',
  //   featured: true
  // },
  {
    title: 'Credit Card Fraud Detection',
    description: 'Developed and fine-tuned a logistic regression-based machine learning model achieving an 87% accuracy rate in predicting credit card fraud. Implemented under-sampling and ensemble techniques to address class imbalance, leading to 15% improved performance.',
    techStack: ['Pandas', 'Numpy', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
  //   liveUrl: 'https://www.figma.com/proto/BCZI7k5uBAwyHMOqh454Hk/MediConnect?node-id=134-759&p=f&t=zjNxfgwwxzjXcO4u-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=113%3A9&show-proto-sidebar=1'
    githubUrl: 'https://github.com/iam-saipavan/Credit-Card-Fraud-Detection',
   }
];

export const achievements: Achievement[] = [
  // {
  //   title: 'Chancellor\'s Award for Excellence in Undergraduate Research',
  //   organization: 'SRM Institute of Science & Technology',
  //   year: '2025',
  //   description: 'Awarded the prestigious Chancellor\'s Award for Excellence in Undergraduate Research in recognition of outstanding contributions to research and innovation'
  // },
  // {
  //   title: 'National Semi-Finalist',
  //   organization: 'Flipkart GRiD 7.0',
  //   year: '2024',
  //   description: 'Selected as National Semi-Finalist out of 2.5 lakh participants in Flipkart\'s premier tech challenge. Demonstrated exceptional problem-solving skills and innovative thinking in developing scalable e-commerce solutions. Advanced through multiple rigorous selection rounds to reach the national semi-final stage.'
  // },
  // {
  //   title: 'Best Lens Creator Award (2x)',
  //   organization: 'Snapchat Inc.',
  //   year: '2023-2024',
  //   description: 'Awarded in Dec 2023 & Jan 2024. Recognized globally among AR creators for innovative, high-engagement AR lens designs, selected from a global creator pool. Designed 45+ creative lenses garnering 2.63B+ views, 45.65M+ shares, and 2.44B+ plays, building a 10K+ follower base.',
  //   prize: '$10,500'
  // },
  // {
  //   title: 'Winner',
  //   organization: 'SOASH Hackathon 2024',
  //   year: '2024',
  //   description: '1st out of 156+ teams on Devpost & SOASH. Project: EduVista21 - Engineered a full-stack cloud-based platform using Vue.js, Laravel, and Redis to bridge the digital divide through affordable, localized, and scalable education access.'
  // },
  // {
  //   title: 'Runner-Up',
  //   organization: 'Hacktivism Ideathon 2024',
  //   year: '2024',
  //   description: '2nd out of 349+ teams in Global Event by Politechs on Devpost. Project: MediConnect - Developed an AI-powered healthcare prototype using Figma & Adobe XD focused on telemedicine, pharmacy, emergency, and SDG3 compliance.'
  // },
  // {
  //   title: 'Top 5% Finalist',
  //   organization: 'Adobe GenSolve 2024',
  //   year: '2024',
  //   description: 'Top 5% of 15,000+ teams with Project: CURVETOPIA. Built an advanced curve regularization engine converting 2D polylines to cubic Bézier curves with SVG visualization for creative design enhancement.'
  // },
  // {
  //   title: 'Runner-Up',
  //   organization: 'Altair Data Science Contest 2024',
  //   year: '2024',
  //   description: '2nd out of 800+ participants in National Event by Altair & IPS Academy. Built a robust credit card fraud detection model using Altair RapidMiner and AI Studio, applying supervised learning algorithms and advanced feature engineering techniques.'
  // },
  // {
  //   title: '2nd Position',
  //   organization: 'UX Redesign Challenge 2024 (Global)',
  //   year: '2024',
  //   description: 'Global recognition by Saint Louis University & Excelerate. Revamped the UI of a legacy platform with a focus on accessibility, intuitive navigation, and seamless user flows; implemented wireframes and mockups based on real-world usability testing.'
  // },
  // {
  //   title: 'Special Mention',
  //   organization: 'Designify 2024',
  //   year: '2024',
  //   description: 'National Event by Teamify & Unstop with 200+ participants. Designed creative, human-centric UI solutions under tight deadlines; received jury appreciation for problem-solving approach and design storytelling.'
  // },
  {
    title: 'Naukri Campus Young Turks',
    organization: 'Naukri.com',
    year: '2025',
    description: 'Secured 98th percentile among approximately 5,00,000 participants.'
  }
];

export const publications: Publication[] = [
  // {
  //   title: 'Redefining Medicine: The Power of Generative AI in Modern Healthcare',
  //   venue: '5th International Conference on Smart Electronics and Communication (ICOSEC 2024), IEEE Xplore',
  //   year: '2024',
  //   type: 'conference',
  //   url: 'https://ieeexplore.ieee.org/document/10722592'
  // },
  {
    title: 'MLOps-Based Cloud Deployment Pipeline for Scalable ML Workloads',
    venue: 'International Journal of Engineering Research in Science and Technology (IJERST), Scopus',
    year: '2026',
    type: 'conference',
    url: 'https://ijersem.com/172150-2/'
  }
];

export const certifications: Certification[] = [
  // {
  //   title: 'ServiceNow Certified System Administrator',
  //   issuer: 'ServiceNow',
  //   year: '2024'
  // },
  // {
  //   title: 'ServiceNow Certified Application Developer',
  //   issuer: 'ServiceNow',
  //   year: '2025'
  // },
  {
    title: 'Oracle AI Foundations Associate',
    issuer: 'Oracle',
    year: '2026'
  },
  {
    title: 'Oracle Databases',
    issuer: 'Oracle',
    year: '2026'
  },
  // {
  //   title: 'AWS Cloud Foundations',
  //   issuer: 'Amazon Web Services',
  //   year: '2024'
  // },
  // {
  //   title: 'AWS Machine Learning Fundamentals',
  //   issuer: 'Amazon Web Services',
  //   year: '2024'
  // },
  // {
  //   title: 'GitHub Foundations',
  //   issuer: 'GitHub',
  //   year: '2024'
  // },
  {
    title: 'NPTEL Programming in The Joy of computing using Python',
    issuer: 'NPTEL',
    year: '2024'
  },
  // {
  //   title: 'Meta Version Control',
  //   issuer: 'Meta',
  //   year: '2023'
  // }
]

export const skills: Skill[] = [
  // Languages/Frameworks - Had experience working with:
  { name: 'Python', level: 95, category: 'languages' },
  { name: 'Java', level: 90, category: 'languages' },
  { name: 'JavaScript', level: 75, category: 'languages' },
  { name: 'HTML', level: 90, category: 'languages' },
  { name: 'CSS', level: 85, category: 'languages' },
  { name: 'SQL', level: 88, category: 'languages' },
  
  // Frameworks & Libraries
  { name: 'React', level: 85, category: 'frameworks' },
  { name: 'Flask', level: 88, category: 'frameworks' },
  { name: 'Spring Boot', level: 85, category: 'frameworks' },
  { name: 'Docker', level: 80, category: 'frameworks' },
  { name: 'FastAPI', level: 90, category: 'frameworks' },
  { name: 'Next.js', level: 80, category: 'frameworks' },
  
  // AI/GenAI Skills
  { name: 'Azure OpenAI', level: 93, category: 'ai' },
  { name: 'LangChain', level: 90, category: 'ai' },
  { name: 'Prompt Engineering', level: 95, category: 'ai' },
  { name: 'RAG Systems', level: 88, category: 'ai' },
  { name: 'Fine-tuning', level: 85, category: 'ai' },
  { name: 'Agentic AI', level: 82, category: 'ai' },
  { name: 'Vector Databases', level: 80, category: 'ai' },
  { name: 'OpenAI API', level: 92, category: 'ai' },
  { name: 'Gemini API', level: 85, category: 'ai' },
  { name: 'NLP', level: 88, category: 'ai' },
  { name: 'LLMs (GPT, LLaMA)', level: 90, category: 'ai' },
  { name: 'n8n Automation', level: 75, category: 'ai' },
  
  // Computer Science Fundamentals
  { name: 'Data Structures and Algorithms', level: 88, category: 'languages' },
  { name: 'Time Complexity Analysis', level: 85, category: 'languages' },
  
  // Tools & Technologies
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Linux', level: 85, category: 'tools' },
  { name: 'Figma', level: 88, category: 'tools' },
  { name: 'PostgreSQL', level: 85, category: 'tools' },
  { name: 'AWS', level: 80, category: 'tools' },
  { name: 'ServiceNow', level: 85, category: 'tools' }
];

// Add mentorship programs
export const mentorships: Mentorship[] = [
  {
    program: 'Codess Cafe',
    organization: 'Codess Cafe',
    duration: '2024',
    description: 'Selected as mentee from thousands of applicants in this prestigious program focused on empowering women in tech through mentorship, skill development, and career guidance.',
    role: 'mentee',
    selectionProcess: 'Selected from thousands of applicants'
  },
  {
    program: 'Code Without Barriers',
    organization: 'Microsoft',
    duration: '2024',
    description: 'Participated in Microsoft\'s Code Without Barriers program where I learned about AI and ML technologies, gained hands-on experience with Microsoft\'s AI tools and platforms, and developed skills in inclusive technology development.',
    role: 'mentee',
    selectionProcess: 'Competitive selection process'
  }
];

// Add volunteering and leadership experiences
export const volunteering: Volunteering[] = [
  // {
  //   organization: 'Data Science Community, SRMIST',
  //   role: 'Event Organizer',
  //   duration: '2024',
  //   description: 'Organized the Altair Data Science Challenge at SRMIST in collaboration with the Data Science Community, which attracted 800+ participants from across the country.',
  //   impact: '800+ participants engaged in data science competition'
  // },
  // {
  //   organization: 'DECO and Arts Club, SRMIST',
  //   role: 'Club Member',
  //   duration: '2022-2023',
  //   description: 'Served as an active member, contributing to Asia\'s top tech fest AARUSH at SRMIST. Participated in event planning, decoration, and creative design activities for one of the largest technical festivals in Asia.',
  //   impact: 'Contributed to Asia\'s premier tech fest with thousands of participants'
  // },
  {
    organization: 'Community Impact & Learning',
    role: 'Technology Enthusiast',
    duration: 'Ongoing',
    description: 'Ready to learn new technologies to work on any kind of project. I have the ability to adapt to any kind of technologies from scratch even if I am not that proficient initially. Passionate About Community Impact: I believe in giving back to the community through active participation in technical events, mentoring fellow students, and contributing to open-source projects that benefit everyone.',
    impact: 'Continuous learning mindset and community-focused approach'
  }
];