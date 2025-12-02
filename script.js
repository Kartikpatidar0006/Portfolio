
const projectsData = [
    {
        id: 1,
        title: 'Myntra Clone',
        description: 'Basic frontend clone with product listing, search, and cart functionality.',
        techStack: ['HTML', 'CSS'],
        github: 'https://github.com/Kartikpatidar0006/Myntra_clone',
        demo: '#',
        image: './myntra.png',
        category: 'Frontend'   
    },
    {
        id: 2,
        title: 'Amazon Clone',
        description: 'basic frontend clone with product listing, search, and cart functionality.',
        techStack: ['HTML', 'CSS'],
        github: 'https://github.com/Kartikpatidar0006/Amazon_clone',
        demo: '#',
        image: './amazon.png',
        category: 'Frontend'
    },
    {
        id: 3,
        title: 'Tic tac toe Game',
        description: 'Best minor project for beginners to learn JavaScript.',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/Kartikpatidar0006/TicToe',
        demo: 'https://kartikpatidar0006.github.io/TicToe/',
        image: './tictoe.png',
        category: 'Frontend'
    }
];

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const nav = document.getElementById('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.navlink');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const filterBtns = document.querySelectorAll('.filterbtn');
const projectsGrid = document.getElementById('projectsGrid');

function renderProjects(filter = 'all') {
    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="projectcard" data-category="${project.category}">
            <div class="projectimage">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="projectcontent">
                <div class="projectheader">
                    <h3 class="projecttitle">${project.title}</h3>
                    <svg class="project-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
                <p class="projectdescription">${project.description}</p>
                <div class="techstack">
                    ${project.techStack.map(tech => `<span class="techbadge">${tech}</span>`).join('')}
                </div>
                <div class="projectlinks">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="projectlink linkcode">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="projectlink linkdemo">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}


renderProjects();


filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        filterBtns.forEach(b => b.classList.remove('active'));
     
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        
        renderProjects(filter);
    });
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    console.log('Form submitted:', formData);

    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    formMessage.className = 'formmessage success';
    formMessage.style.display = 'block';

    contactForm.reset();

    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

(function () {
    const animated = document.querySelectorAll('.anim');
    if (!animated || animated.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -8% 0px',
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = el.getAttribute('data-delay');
                if (delay) {
                    el.style.transitionDelay = `${parseInt(delay, 10)}ms`;
                }
                el.classList.add('is-visible');
                const once = el.getAttribute('data-animate-once');
                if (once === null || once === 'true') {
                    obs.unobserve(el);
                }
            }
        });
    }, observerOptions);

    animated.forEach(el => revealObserver.observe(el));
})();