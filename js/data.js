/* =================================
   Portfolio Data Configuration
   ================================= */

// Skills Data
const skillsData = [
  // Languages & Libraries
  { name: 'Python', category: 'Languages & Libraries' },
  { name: 'C++', category: 'Languages & Libraries' },
  { name: 'Matlab', category: 'Languages & Libraries' },
  { name: 'Simulink', category: 'Languages & Libraries' },
  { name: 'TensorFlow', category: 'Languages & Libraries' },
  { name: 'Pytorch', category: 'Languages & Libraries' },
  { name: 'Scikit-learn', category: 'Languages & Libraries' },
  { name: 'Pandas', category: 'Languages & Libraries' },
  { name: 'NumPy', category: 'Languages & Libraries' },
  { name: 'OpenCV', category: 'Languages & Libraries' },
  { name: 'Matplotlib', category: 'Languages & Libraries' },
  { name: 'SpaCy', category: 'Languages & Libraries' },
  { name: 'Keras', category: 'Languages & Libraries' },

  
  // Frameworks & Platforms
  { name: 'Hugging Face', category: 'Frameworks & Platforms' },
  { name: 'AWS', category: 'Frameworks & Platforms' },
  { name: 'Google AI Studios', category: 'Frameworks & Platforms' },
  { name: 'FastAPI', category: 'Frameworks & Platforms' },
  { name: 'LangGraph', category: 'Frameworks & Platforms' },
  { name: 'Model Context Protocol (MCP)', category: 'Frameworks & Platforms' },
  
  // ML/DL Concepts
  { name: 'Computer Vision', category: 'ML/DL Concepts' },
  { name: 'Deep Learning', category: 'ML/DL Concepts' },
  { name: 'Natural Language Processing', category: 'ML/DL Concepts' },
  { name: 'Reinforcement Learning', category: 'ML/DL Concepts' },
  { name: 'Transformers', category: 'ML/DL Concepts' },
  { name: 'Vision-Language Models', category: 'ML/DL Concepts' },
  { name: 'Agentic AI', category: 'ML/DL Concepts' },
  { name: 'LLM Guardrails', category: 'ML/DL Concepts' },

  // Tools & DevOps
  { name: 'Docker', category: 'Tools & DevOps' },
  { name: 'Git & GitHub', category: 'Tools & DevOps' },
  { name: 'PostgreSQL', category: 'Tools & DevOps' },
  { name: 'Redis', category: 'Tools & DevOps' },
  { name: 'API Integration', category: 'Tools & DevOps' },

  // IDEs & Editors
  { name: 'Jupyter Notebooks', category: 'IDEs & Editors' },
  { name: 'VS Code', category: 'IDEs & Editors' },
  { name: 'PyCharm', category: 'IDEs & Editors' },
];

// Projects Data
// TODO: Replace with your actual projects
const projectsData = [
  {
    title: 'CareerGraph: AI-Powered Multi-Agent Career Intelligence',
    description: 'Architected a multi-agent system (Orchestrator–Worker) for career upskilling automation with specialized agents for resume optimization, skill gap analysis, interview preparation, and market trend analysis. Implemented MCP (FastMCP) for dynamic tool-calling across external tools/APIs (YouTube API, Docling, DuckDuckGo) for resume parsing and content retrieval. Engineered scalable workflows with PostgreSQL + Redis state management and custom LLM guardrails for coherent context transfer and persona-consistent multi-turn reasoning.',
    tags: ['Agentic AI', 'MCP', 'FastAPI', 'PostgreSQL', 'Redis', 'API Integration', 'LangGraph', 'LLM Guardrails'],
    category: 'Agents',
    imageUrl: 'images/projects/careergraph.svg',
    sourceUrl: null,
    liveUrl: null,
  },
  {
    title: 'Agentic RAG System for Research Paper Question Answering',
    description: 'Architected an agentic RAG system with iterative planning, controllable reasoning, reranking, and memory to improve response reliability, answer quality, and contextual consistency. Implemented hybrid retrieval using BM25 plus embeddings, rank fusion, and structure-aware multi-PDF indexing for scalable cross-document QA. Built an end-to-end evaluation stack with custom QA datasets and Streamlit/FastAPI controls, achieving RAGAS scores of 87.1% relevance, 81.3% faithfulness, and 78.3% completeness with GPT-4.1.',
    tags: ['Hugging Face Embeddings', 'BM25', 'ChromaDB', 'LangChain', 'LangGraph', 'Prompt Optimization', 'RAGAS'],
    category: 'Agents',
    imageUrl: 'images/projects/agentic-rag.svg',
    sourceUrl: null, 
    liveUrl: null,
  },
  {
    title: 'Fine-Tuning LLM for Spam Classification',
    description: ' Understanding the stages of building a Large Language Model. Conversion of words into context vectors in an efficient way using multi-head attention to be fed into the LLM. Fine-tuning a pretrained transformer-based LLM with 4,000+ spam classification examples. Achieved 97.21% and 95.67% accuracy on Training and Test dataset, respectively.',
    tags: ['Python', 'PyTorch', 'NLP', 'Transformers', 'Hugging Face', 'Fine-Tuning', 'LLM'],
    imageUrl: 'images/projects/llm-spam-classification.svg',
    sourceUrl: null, 
    liveUrl: null,
  },
  {
    title: 'Image Classification Challenge on Custom Dataset',
    description: 'Trained a custom 8 Christmas classes image dataset on EfficientNet-b4, achieving 98% and 96.20% training and testing accuracy, respectively. Deployed as a REST API with Docker. Improved optimal performance by conducting fine hyperparameter tuning, scheduling, and regularization strategies. Obtained the highest test accuracy compared to all tested models',
    tags: ['Pytorch', 'openCV', 'Computer Vision', 'CNNs', 'Data Agumentation'],
    imageUrl: 'images/projects/image-classification.svg',
    sourceUrl: null,
    liveUrl: null,
  },
    {
    title: ' Robustness and Fairness in Deep Learning',
    description: 'Performed PGD training on the CIFAR-10 dataset and studied the class distribution of misclassification and introduced batch sampling to ensure an equal number of classes in a batch. Implemented PGD training while considering 3 distinct robust loss rules and achieved 84% and 76% accuracy on targeted and untargeted attacks, respectively',
    tags: ['Adversarial Training', 'Classification', 'Computer Vision', 'CNNs', 'Pytorch'],
    imageUrl: 'images/projects/robustness-fairness.svg',
    sourceUrl: null,
    liveUrl: null,
  },
    {
    title: 'Semantics Segmentation on Cityscape Dataset',
    description: 'Enhanced model performance by 10% on pre-recorded CityScapes dataset, achieving an 87% IoU accuracy. Accomplished this through transfer learning and data augmentation techniques. Developed a training, testing, and validation pipeline that reduced training time by 15% by utilizing parallel processing with GPU and optimizing batch size and learning rate.',
    tags: ['TensorFlow', 'Keras', 'Computer Vision', 'CNNs', 'Docker'],
    imageUrl: 'images/projects/semantic-segmentation.svg',
    sourceUrl: null,
    liveUrl: null,
  },
  {
    title: 'Real-time Lane Line Detection System',
    description: 'Engineered an image processing pipeline that ranges from preparing raw data to extracting relevant features to enhance lane detection with 82% IoU accuracy. Implemented advanced techniques such as Gaussian smoothing, Canny edge detection, and Hough Transform to accurately identify lane lines in real-time video feeds. Deplyoyed the system using OpenCV and optimized it for real-time performance on embedded systems.',
    tags: ['Python', 'OpenCV', 'Pandas', 'Computer Vision', 'Embedded Systems', 'Data Processing'],
    imageUrl: 'images/projects/lane-line-detection.svg',
    sourceUrl: null,
    liveUrl: null,
  },
];

// Experience Data
const experienceData = [
  {
    role: ' AI Research Master Thesis',
    company: 'IAV GmbH.',
    period: 'MAY 2025 - Present',
    description: [
      'Optimizing the scenario extraction pipeline through multi-layer fusion of computer vision (CV) and large vision language models (LVLMs), improving object detection precision by 28.57% and mAP by 3.67% over internal baselines.',
      'Collaborating with cross-functional teams to deploy a low-latency AWS microservice connected to dSPACE and CarMaker simulators for automated scenario extraction and generation.',
      'Developing a SaaS-based benchmarking framework with PySpark-based data pipelines to benchmark CV and multiple LVLMs, including GPT, Claude, Llama, and Mistral, across diverse public and private datasets.',
      'Designing and integrating a CV-LVLM reasoning pipeline with prompt optimization and temporal context, improving non-ego object motion and orientation detection accuracy by 59.68% over a CV-only baseline on off-road datasets.',
      'Implementing and optimizing CV models on real-world off-road data for the IAV Mela project, improving internal benchmark performance.'
    ], 
    logoUrl: 'https://picsum.photos/seed/logo1/40/40',
  },
  {
    role: ' Student Research Assistant',
    company: 'Universität Siegen',
    period: 'October 2023 - November 2024',
    description: [
      'Integrated deep learning based 6D pose estimation with a Kalman filter for stable motion tracking.',
      'Tuned noise parameters dynamically during training and evaluation to improve estimation quality.',
      'Developed visualization tools to analyze sensor noise profiles and trajectory deviations, enabling data-driven decisions for algorithm tuning.',
      'Increased model performance by 22.88 percent through algorithm refinement and real IMU data processing.',
      'Achieved Grade 1.0 for the project.'
    ],
    logoUrl: 'https://picsum.photos/seed/logo3/40/40',
  },
  {
    role: ' Graduate Engineering Trainee ',
    company: 'Technique Design Group',
    period: 'October 2020 - November 2021',
    description: [
      'Designed and validated 3D models and assemblies in CATIA V5 with a focus on manufacturability and performance.',
      'Analyzed fabrication metrics and defect rates to identify root causes, driving design improvements for higher yield.',
      'Led fabrication workflows and quality control across multiple client projects from concept to delivery.',
      'Collaborated with cross-functional teams to optimize design processes and improve project outcomes.'
    ],
    logoUrl: 'https://picsum.photos/seed/logo3/40/40',
  },
];

// Education Data
const educationData = [
  {
    institution: ' Universität Siegen',
    degree: 'M.S. in Mechatronics, AI Specialization',
    period: '2022 - Present',
    courses: [
      'Machine Learning',
      'Deep Learning',
      'Embedded Systems',
      'Sensorics',
      'Project Management'
    ],
    logoUrl: 'https://picsum.photos/seed/logo4/40/40',
  },
  {
    institution: 'Vasavi College of Engineering',
    degree: 'B.E. in Mechanical Engineering',
    period: '2016 - 2020',
    courses: [
      'Programming Languages (C, C++, Python)',
      'Database Management Systems',
      'Fluid Mechanics',
      'Thermodynamics',
      'Automobile Engineering',
    ],
    logoUrl: 'https://picsum.photos/seed/logo5/40/40',
  },
];

// Certifications Data
const certificationData = [
  {
    name: ' Ultimate AWS Certified Cloud Practitioner CLF-C02',
    issuer: 'Udemy',
    date: 'January 2026',
    logoUrl: 'https://picsum.photos/seed/cert3/50/50',
  },
  {
    name: ' Advanced Driver Assistance Systems (ADAS) ',
    issuer: 'Udemy',
    date: 'Completed October 2024',
    logoUrl: 'https://picsum.photos/seed/cert3/50/50',
  },
  {
    name: ' Mastering CAN Network: Vector CANoe,CANalyzer, CAPL& Theory ',
    issuer: 'Udemy',
    date: 'Issued August 2024',
    logoUrl: 'https://picsum.photos/seed/cert2/50/50',
  },
  {
    name: 'Introduction to Large Language Models (LLMs) In Python',
    issuer: 'Udemy',
    date: 'Issued June 2024',
    logoUrl: 'https://picsum.photos/seed/cert1/50/50',
  },
  {
    name: ' Advanced Kalman Filtering and Sensor Fusion',
    issuer: 'Udemy',
    date: 'Issued Seütember 2025',
    logoUrl: 'https://picsum.photos/seed/cert1/50/50',
  },
];

// Social Links
// TODO: Update with your actual social media URLs
const socialLinks = {
  github: 'https://github.com/Akudavale',
  linkedin: 'https://www.linkedin.com/in/abhisheksinghkudavale/',
  email: 'kudavaleabhisheksingh@gmail.com',
};

// Export data (for module systems if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    skillsData,
    projectsData,
    experienceData,
    educationData,
    certificationData,
    socialLinks,
  };
}
