/* =================================
   Main JavaScript File
   ================================= */

// =============================
// RENDER FUNCTIONS
// =============================

/**
 * Render Skills Section
 */
function renderSkills() {
  const container = document.getElementById('skills-container');
  const categories = [
    'Languages & Libraries',
    'Frameworks & Platforms',
    'ML/DL Concepts',
    'Tools & DevOps'
  ];
  
  let html = '';
  categories.forEach(category => {
    const categorySkills = skillsData.filter(skill => skill.category === category);
    
    html += `
      <div class="skill-category">
        <h3 class="text-2xl font-semibold text-gray-200 mb-6 text-center">${category}</h3>
        <div class="flex flex-wrap justify-center gap-4">
          ${categorySkills.map(skill => `
            <div class="skill-card bg-slate-800 border border-slate-700 text-primary-light text-sm font-medium px-4 py-2 rounded-md shadow-md hover:bg-slate-700 transition-all duration-300 cursor-default">
              ${skill.name}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

/**
 * Render Projects Section
 * @param {string} filter - Filter projects by tag
 */
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-container');
  
  // Filter projects based on selected filter
  let filteredProjects = projectsData;
  if (filter !== 'all') {
    filteredProjects = projectsData.filter(project =>
      project.tags.some(tag => tag.includes(filter))
    );
  }
  
  // Generate HTML
  container.innerHTML = filteredProjects.map(project => `
    <div class="project-card bg-slate-900 rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 group p-0.5 bg-gradient-to-br from-white/10 to-transparent" data-tags="${project.tags.join(',')}">
      <div class="bg-slate-900 rounded-md h-full p-6 flex flex-col">
        <img 
          src="${project.imageUrl}" 
          alt="${project.title}" 
          class="w-full h-56 object-cover rounded-md mb-6 project-img" 
          onload="this.classList.add('loaded')"
          loading="lazy"
        />
        <h3 class="text-2xl font-bold text-white mb-3">${project.title}</h3>
        <p class="text-gray-400 mb-4 flex-grow">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-6">
          ${project.tags.map(tag => `
            <span class="bg-primary/10 text-primary-light text-xs font-semibold px-3 py-1 rounded-full">${tag}</span>
          `).join('')}
        </div>
        <div class="mt-auto flex items-center space-x-4">
          ${project.liveUrl ? `
            <a 
              href="${project.liveUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-primary-light hover:text-primary font-semibold flex items-center transition-colors"
            >
              Live Demo 
              <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          ` : ''}
          ${project.sourceUrl ? `
            <a 
              href="${project.sourceUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="text-primary-light hover:text-primary font-semibold flex items-center transition-colors"
            >
              Source Code 
              <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l-4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Render Experience Section
 */
function renderExperience() {
  const container = document.getElementById('experience-container');
  
  container.innerHTML = experienceData.map(exp => `
    <div class="mb-12 ml-10">
      <span class="absolute -left-[1.1rem] flex items-center justify-center w-8 h-8 bg-slate-800 rounded-full ring-8 ring-slate-950 timeline-dot">
        <img class="rounded-full" src="${exp.logoUrl}" alt="${exp.company} logo" loading="lazy" />
      </span>
      <div class="bg-slate-900 p-6 rounded-lg shadow-md border border-slate-800 hover:border-primary-light/30 transition-colors duration-300">
        <div class="flex items-center justify-between mb-2 flex-wrap gap-2">
          <h3 class="text-xl font-bold text-white">${exp.role}</h3>
          <span class="text-sm font-medium text-primary-light">${exp.period}</span>
        </div>
        <p class="text-md font-semibold text-gray-300 mb-4">${exp.company}</p>
        <ul class="list-disc list-inside text-gray-400 space-y-2">
          ${exp.description.map(point => `<li>${point}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/**
 * Render Education and Certifications Section
 */
function renderEducation() {
  // Render Education
  const eduContainer = document.getElementById('education-container');
  eduContainer.innerHTML = educationData.map(edu => `
    <div class="mb-12 ml-10">
      <span class="absolute -left-[1.1rem] flex items-center justify-center w-8 h-8 bg-slate-800 rounded-full ring-8 ring-slate-950">
        <img class="rounded-full" src="${edu.logoUrl}" alt="${edu.institution} logo" loading="lazy" />
      </span>
      <div class="bg-slate-900 p-6 rounded-lg shadow-md border border-slate-800 hover:border-primary-light/30 transition-colors duration-300">
        <div class="flex items-center justify-between mb-2 flex-wrap gap-2">
          <h3 class="text-xl font-bold text-white">${edu.degree}</h3>
          <span class="text-sm font-medium text-primary-light">${edu.period}</span>
        </div>
        <p class="text-md font-semibold text-gray-300 mb-4">${edu.institution}</p>
        <div>
          <h4 class="text-sm font-semibold text-gray-200 mb-2">Relevant Coursework:</h4>
          <ul class="list-disc list-inside text-gray-400 space-y-1 text-sm">
            ${edu.courses.map(course => `<li>${course}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');

  // Render Certifications
  const certContainer = document.getElementById('certifications-container');
  certContainer.innerHTML = certificationData.map(cert => `
    <div class="bg-slate-900 p-6 rounded-lg shadow-md border border-slate-800 flex items-center space-x-4 transition-all duration-300 hover:border-primary-light/50 hover:bg-slate-800/60">
      <img src="${cert.logoUrl}" alt="${cert.issuer} logo" class="w-12 h-12 rounded-md" loading="lazy" />
      <div>
        <h4 class="font-bold text-white text-lg">${cert.name}</h4>
        <p class="text-gray-400">${cert.issuer}</p>
        <p class="text-sm text-gray-500">${cert.date}</p>
      </div>
    </div>
  `).join('');
}

// =============================
// UI INTERACTIONS
// =============================

/**
 * Initialize Header Scroll Effect
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    // Header background on scroll
    if (window.scrollY > 10) {
      header.classList.add('bg-slate-950/80', 'backdrop-blur-sm', 'shadow-lg');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-slate-950/80', 'backdrop-blur-sm', 'shadow-lg');
      header.classList.add('bg-transparent');
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove('hidden');
    } else {
      backToTopBtn.classList.add('hidden');
    }
  });
}

/**
 * Initialize Back to Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Initialize Mobile Menu Toggle
 */
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('mobile-menu-open-icon');
  const closeIcon = document.getElementById('mobile-menu-close-icon');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  });
}

/**
 * Initialize Smooth Scrolling
 */
function initSmoothScrolling() {
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('mobile-menu-open-icon');
  const closeIcon = document.getElementById('mobile-menu-close-icon');
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Close mobile menu if open
      if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      }
    });
  });
}

/**
 * Initialize Intersection Observer for Fade-in Animations
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Initialize Profile Image Loading
 */
function initProfileImageLoading() {
  const profileImg = document.querySelector('.profile-img-main');
  if (profileImg) {
    profileImg.onload = () => {
      profileImg.classList.add('loaded');
    };
    // Trigger load if already cached
    if (profileImg.complete) {
      profileImg.classList.add('loaded');
    }
  }
}

/**
 * Initialize Project Filtering
 */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter projects
      const filter = btn.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

/**
 * Set Current Year in Footer
 */
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// =============================
// INITIALIZATION
// =============================

/**
 * Initialize All Functionality
 */
function init() {
  // Render all dynamic content
  renderSkills();
  renderProjects();
  renderExperience();
  renderEducation();
  
  // Set current year
  setCurrentYear();
  
  // Initialize UI interactions
  initHeaderScroll();
  initBackToTop();
  initMobileMenu();
  initSmoothScrolling();
  initScrollAnimations();
  initProfileImageLoading();
  initProjectFiltering();
  
  console.log('✅ Portfolio initialized successfully!');
}

// Run initialization when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// =============================
// UTILITY FUNCTIONS
// =============================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Track external link clicks (for analytics)
 */
function trackExternalLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', (e) => {
      // Add analytics tracking here if needed
      console.log('External link clicked:', e.target.href);
    });
  });
}

// Optional: Call this after init if you want to track external links
// trackExternalLinks();