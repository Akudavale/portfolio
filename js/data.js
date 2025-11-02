/* =================================
   Portfolio Data Configuration
   ================================= */

// Skills Data
const skillsData = [
  // Languages & Libraries
  { name: 'Python', category: 'Languages & Libraries' },
  { name: 'PyTorch', category: 'Languages & Libraries' },
  { name: 'TensorFlow', category: 'Languages & Libraries' },
  { name: 'Scikit-learn', category: 'Languages & Libraries' },
  { name: 'Pandas', category: 'Languages & Libraries' },
  { name: 'NumPy', category: 'Languages & Libraries' },
  { name: 'Keras', category: 'Languages & Libraries' },
  
  // Frameworks & Platforms
  { name: 'Hugging Face', category: 'Frameworks & Platforms' },
  { name: 'AWS SageMaker', category: 'Frameworks & Platforms' },
  { name: 'Google AI Platform', category: 'Frameworks & Platforms' },
  { name: 'Azure ML', category: 'Frameworks & Platforms' },
  
  // ML/DL Concepts
  { name: 'Natural Language Processing', category: 'ML/DL Concepts' },
  { name: 'Computer Vision', category: 'ML/DL Concepts' },
  { name: 'Deep Learning', category: 'ML/DL Concepts' },
  { name: 'Reinforcement Learning', category: 'ML/DL Concepts' },
  { name: 'MLOps', category: 'ML/DL Concepts' },
  
  // Tools & DevOps
  { name: 'Docker', category: 'Tools & DevOps' },
  { name: 'Kubernetes', category: 'Tools & DevOps' },
  { name: 'Git & GitHub', category: 'Tools & DevOps' },
  { name: 'Jupyter Notebooks', category: 'Tools & DevOps' },
];

// Projects Data
// TODO: Replace with your actual projects
const projectsData = [
  {
    title: 'Sentiment Analysis Engine',
    description: 'A deep learning model for classifying text sentiment. Fine-tuned a BERT transformer model on a custom dataset, achieving 95% accuracy.',
    tags: ['Python', 'PyTorch', 'NLP', 'Transformers', 'Hugging Face'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    sourceUrl: 'https://github.com/yourusername/sentiment-analysis', // TODO: Update
    liveUrl: null,
  },
  {
    title: 'Image Recognition System',
    description: 'A convolutional neural network (CNN) to classify images across 100 different categories. Deployed as a REST API with Docker.',
    tags: ['TensorFlow', 'Keras', 'Computer Vision', 'CNNs', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: 'https://demo.yourproject.com', // TODO: Update
    sourceUrl: null,
  },
  {
    title: 'Real-time Recommendation System',
    description: 'Developed a collaborative filtering recommendation engine for an e-commerce platform, leading to a 15% increase in user engagement.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'API', 'Recommendation'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    sourceUrl: 'https://github.com/yourusername/recommendation-system', // TODO: Update
    liveUrl: null,
  },
  {
    title: 'MLOps Pipeline Automation',
    description: 'Designed and implemented a CI/CD pipeline for automating the training and deployment of machine learning models using Jenkins and Kubernetes.',
    tags: ['MLOps', 'CI/CD', 'Jenkins', 'Kubernetes', 'Docker'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    liveUrl: 'https://demo.yourproject.com', // TODO: Update
    sourceUrl: 'https://github.com/yourusername/mlops-pipeline', // TODO: Update
  },
];

// Experience Data
// TODO: Update with your actual experience
const experienceData = [
  {
    role: 'Senior AI/ML Engineer',
    company: 'InnovateAI Corp.',
    period: 'Jan 2021 - Present',
    description: [
      'Led the design and development of production-grade machine learning models for NLP and computer vision tasks.',
      'Established MLOps best practices, reducing model deployment time from weeks to days.',
      'Mentored a team of 3 junior engineers, improving team productivity and code quality.',
      'Published research on novel neural network architectures at a top-tier AI conference.',
    ],
    logoUrl: 'https://picsum.photos/seed/logo1/40/40',
  },
  {
    role: 'Machine Learning Engineer',
    company: 'Data Insights LLC',
    period: 'Jun 2018 - Dec 2020',
    description: [
      'Developed and maintained data pipelines for training large-scale machine learning models.',
      'Implemented recommendation systems that increased user retention by 20%.',
      'Collaborated with product managers to define project requirements and deliver data-driven solutions.',
    ],
    logoUrl: 'https://picsum.photos/seed/logo2/40/40',
  },
  {
    role: 'Data Scientist Intern',
    company: 'FutureTech',
    period: 'May 2017 - Aug 2017',
    description: [
      'Conducted exploratory data analysis to identify key business insights.',
      'Built prototype machine learning models for churn prediction and customer segmentation.',
    ],
    logoUrl: 'https://picsum.photos/seed/logo3/40/40',
  },
];

// Education Data
// TODO: Update with your actual education
const educationData = [
  {
    institution: 'Stanford University',
    degree: 'M.S. in Computer Science, AI Specialization',
    period: '2016 - 2018',
    courses: [
      'CS229: Machine Learning',
      'CS231n: Convolutional Neural Networks for Visual Recognition',
      'CS224n: Natural Language Processing with Deep Learning',
      'CS234: Reinforcement Learning',
    ],
    logoUrl: 'https://picsum.photos/seed/logo4/40/40',
  },
  {
    institution: 'University of California, Berkeley',
    degree: 'B.S. in Electrical Engineering & Computer Sciences',
    period: '2012 - 2016',
    courses: [
      'CS188: Introduction to Artificial Intelligence',
      'EECS126: Probability and Random Processes',
      'CS189: Introduction to Machine Learning',
      'Data 100: Principles and Techniques of Data Science',
    ],
    logoUrl: 'https://picsum.photos/seed/logo5/40/40',
  },
];

// Certifications Data
const certificationData = [
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    date: 'Issued Jun 2020',
    logoUrl: 'https://picsum.photos/seed/cert1/50/50',
  },
  {
    name: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    date: 'Issued Nov 2021',
    logoUrl: 'https://picsum.photos/seed/cert2/50/50',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera (deeplearning.ai)',
    date: 'Completed Mar 2019',
    logoUrl: 'https://picsum.photos/seed/cert3/50/50',
  },
];

// Social Links
// TODO: Update with your actual social media URLs
const socialLinks = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
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