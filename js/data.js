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
  
  // ML/DL Concepts
  { name: 'Computer Vision', category: 'ML/DL Concepts' },
  { name: 'Deep Learning', category: 'ML/DL Concepts' },
  { name: 'Natural Language Processing', category: 'ML/DL Concepts' },
  { name: 'Reinforcement Learning', category: 'ML/DL Concepts' },
  { name: 'Transformers', category: 'ML/DL Concepts' },
  { name: 'Vision-Language Models', category: 'ML/DL Concepts' },

  // Tools & DevOps
  { name: 'Docker', category: 'Tools & DevOps' },
  { name: 'Git & GitHub', category: 'Tools & DevOps' },

  // IDEs & Editors
  { name: 'Jupyter Notebooks', category: 'IDEs & Editors' },
  { name: 'VS Code', category: 'IDEs & Editors' },
  { name: 'PyCharm', category: 'IDEs & Editors' },
];

// Projects Data
// TODO: Replace with your actual projects
const projectsData = [
  {
    title: 'Advance RAG for Research Paper Question Answering',
    description: ' Built an advanced RAG pipeline that uses reranking, memory, DSPy based prompt optimization, and structured reasoning to deliver accurate retrieval for research paper queries.  Created a custom question and answer dataset and evaluated the system with context relevance and answer correctness metrics, currently achieved 62% precision using the Gemini-2.5 flash model',
    tags: ['LlamaIndex', 'Langchain', 'NLP', 'Transformers', 'Hugging Face', 'ChromaDB', 'DSPy', 'Goodle AI Studios'],
    imageUrl: 'images\\projects\\RAG.png',
    //sourceUrl: 'https://github.com/yourusername/sentiment-analysis', // TODO: Update--->
    liveUrl: null,
  },
  {
    title: 'Fine-Tuning LLM for Spam Classification',
    description: ' Understanding the stages of building a Large Language Model. Conversion of words into context vectors in an efficient way using multi-head attention to be fed into the LLM. Fine-tuning a pretrained transformer-based LLM with 4,000+ spam classification examples. Achieved 97.21% and 95.67% accuracy on Training and Test dataset, respectively.',
    tags: ['Python', 'PyTorch', 'NLP', 'Transformers', 'Hugging Face', 'Fine-Tuning', 'LLM'],
    imageUrl: 'images\\projects\\LLM.png',
    //sourceUrl: 'https://github.com/yourusername/sentiment-analysis', // TODO: Update
    liveUrl: null,
  },
  {
    title: 'Image Classification Challenge on Custom Dataset',
    description: 'Trained a custom 8 Christmas classes image dataset on EfficientNet-b4, achieving 98% and 96.20% training and testing accuracy, respectively. Deployed as a REST API with Docker. Improved optimal performance by conducting fine hyperparameter tuning, scheduling, and regularization strategies. Obtained the highest test accuracy compared to all tested models',
    tags: ['Pytorch', 'openCV', 'Computer Vision', 'CNNs', 'Data Agumentation'],
    imageUrl: 'images\\projects\\classification.jpeg',
    //liveUrl: 'https://demo.yourproject.com', // TODO: Update
    sourceUrl: null,
  },
    {
    title: ' Robustness and Fairness in Deep Learning',
    description: 'Performed PGD training on the CIFAR-10 dataset and studied the class distribution of misclassification and introduced batch sampling to ensure an equal number of classes in a batch. Implemented PGD training while considering 3 distinct robust loss rules and achieved 84% and 76% accuracy on targeted and untargeted attacks, respectively',
    tags: ['Adversarial Training', 'Classification', 'Computer Vision', 'CNNs', 'Pytorch'],
    imageUrl: 'images\\projects\\robustness.png',
    //liveUrl: 'https://demo.yourproject.com', // TODO: Update
    sourceUrl: null,
  },
    {
    title: 'Semantics Segmentation on Cityscape Dataset',
    description: 'Enhanced model performance by 10% on pre-recorded CityScapes dataset, achieving an 87% IoU accuracy. Accomplished this through transfer learning and data augmentation techniques. Developed a training, testing, and validation pipeline that reduced training time by 15% by utilizing parallel processing with GPU and optimizing batch size and learning rate.',
    tags: ['TensorFlow', 'Keras', 'Computer Vision', 'CNNs', 'Docker'],
    imageUrl: 'images\\projects\\segmentation.png',
    //liveUrl: 'https://demo.yourproject.com', // TODO: Update
    sourceUrl: null,
  },
  {
    title: 'Real-time Lane Line Detection System',
    description: 'Engineered an image processing pipeline that ranges from preparing raw data to extracting relevant features to enhance lane detection with 82% IoU accuracy. Implemented advanced techniques such as Gaussian smoothing, Canny edge detection, and Hough Transform to accurately identify lane lines in real-time video feeds. Deplyoyed the system using OpenCV and optimized it for real-time performance on embedded systems.',
    tags: ['Python', 'OpenCV', 'Pandas', 'Computer Vision', 'Embedded Systems', 'Data Processing'],
    imageUrl: 'images\\projects\\Lane.png',
    //sourceUrl: 'https://github.com/yourusername/recommendation-system', // TODO: Update
    liveUrl: null,
  },
  //{
  //  title: 'MLOps Pipeline Automation',
  //  description: 'Designed and implemented a CI/CD pipeline for automating the training and deployment of machine learning models using Jenkins and Kubernetes.',
  //  tags: ['MLOps', 'CI/CD', 'Jenkins', 'Kubernetes', 'Docker'],
  //  imageUrl: 'https://picsum.photos/seed/project4/600/400',
    //liveUrl: 'https://demo.yourproject.com', // TODO: Update
  //  sourceUrl: 'https://github.com/yourusername/mlops-pipeline', // TODO: Update
  //},
];

// Experience Data
// TODO: Update with your actual experience
const experienceData = [
  {
    role: ' AI Research Master Thesis Student',
    company: 'IAV GmbH.',
    period: 'MAY 2025 - Present',
    description: [
      'Designing an AI framework combining computer vision and vision–language models for automated scenario generation in off-highway environments (IAV Mela).',
      'Implementing and optimizing benchmarked CV models on real-world off-road datasets, improving object detection and localization performance.',
      'Developing a SaaS-based benchmarking framework to evaluate CV and VLM models across diverse public and private datasets.',
      'Integrating VLM-based reasoning with CV outputs using prompt optimization and temporal context for enhanced semantic scene understanding.',
      'Collaborating cross-functionally to deploy a low-latency AWS microservice integrated with CARLA and dSPACE simulators.',
      'Optimizing scenario extraction through a multi-layer fusion of CV and VLMs, currently tracking a 23% increase in accuracy for object and lane detection tasks compared to internal baselines.'
    ],    
    logoUrl: 'https://picsum.photos/seed/logo1/40/40',
  },
  // {
  //   role: ' Workstudent - ML Engineer',
  //   company: 'IAV GmbH.',
  //   period: 'May 2025 - July 2025',
  //   description: [
  //     'Researched cybersecurity attack scenarios on vehicles and created experimental plans for a DoE based AI agent.',
  //     'Enhanced system resilience by designing tests that target real operational conditions.',
  //     'Conducted experiments on test vehicles to validate risk and performance insights.',
  //     'Contributed to projects that strengthen the automotive sector digital presence and improve customer engagement.'
  //   ],
  //   logoUrl: 'https://picsum.photos/seed/logo2/40/40',
  // },
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
      'Developed and deployed machine learning models (XGBoost, SVM) on edge devices for real-time predictive analysis.',
      'Integrated ML inference pipelines with custom 3D CAD-based systems.',
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