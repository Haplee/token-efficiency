// Scroll Top Button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section, .override-section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// Observe feature cards with staggered delay
document.querySelectorAll('.feature-card, .stack-item, .install-option').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 80);
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cardObserver.observe(card);
});

// Animate stats numbers
const animateStats = () => {
    document.querySelectorAll('.stat-value').forEach(stat => {
        const target = stat.textContent;
        const isNumber = !isNaN(target) && target !== 'MIT';
        
        if (isNumber && target.includes('%')) {
            const num = parseInt(target);
            stat.textContent = '0%';
            let current = 0;
            const increment = num / 30;
            const interval = setInterval(() => {
                current += increment;
                if (current >= num) {
                    stat.textContent = target;
                    clearInterval(interval);
                } else {
                    stat.textContent = Math.floor(current) + '%';
                }
            }, 30);
        } else if (isNumber) {
            const num = parseInt(target);
            stat.textContent = '0';
            let current = 0;
            const increment = num / 30;
            const interval = setInterval(() => {
                current += increment;
                if (current >= num) {
                    stat.textContent = target;
                    clearInterval(interval);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 30);
        }
    });
};

// Observe stats for animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stats-bar').forEach(bar => {
    statsObserver.observe(bar);
});

// Floating animation for header icon
const rocketIcon = document.querySelector('.rocket-icon');
if (rocketIcon) {
    rocketIcon.style.animation = 'float 3s ease-in-out infinite, pulse 2s ease-in-out infinite alternate';
}

// Add glow effect on mouse move for cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// Typing effect for hero description
const typeWriter = () => {
    const desc = document.querySelector('.description');
    if (desc && !desc.classList.contains('typed')) {
        const text = desc.textContent;
        desc.textContent = '';
        desc.classList.add('typed');
        let i = 0;
        const typeInterval = setInterval(() => {
            desc.textContent += text.charAt(i);
            i++;
            if (i >= text.length) clearInterval(typeInterval);
        }, 30);
    }
};

// Start typing after page load
setTimeout(typeWriter, 500);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Add ripple effect on buttons
document.querySelectorAll('.btn-download').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            pointer-events: none;
            width: 100px;
            height: 100px;
            left: ${e.clientX - e.target.getBoundingClientRect().left - 50}px;
            top: ${e.clientY - e.target.getBoundingClientRect().top - 50}px;
            transform: scale(0);
            animation: ripple 0.6s linear;
        `;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});