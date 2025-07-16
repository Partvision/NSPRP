document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
            header.style.backdropFilter = 'blur(5px)';
        } else {
            header.style.backgroundColor = 'var(--secondary-color)';
            header.style.backdropFilter = 'none';
        }
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = document.getElementById('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Staff Documentation Modal
    const modal = document.getElementById('password-modal');
    const staffBtn = document.getElementById('staff-docs-btn');
    const closeBtn = document.querySelector('.close');
    const submitBtn = document.getElementById('submit-password');
    const passwordInput = document.getElementById('password-input');
    const errorMsg = document.getElementById('password-error');

    staffBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        passwordInput.value = '';
        errorMsg.style.display = 'none';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', function() {
        const password = passwordInput.value;
        if (password === 'ZxCsaQ') {
            window.location.href = 'staff-docs.html';
        } else {
            errorMsg.style.display = 'block';
        }
    });

    const applyBtn = document.getElementById('apply-staff-btn');
    applyBtn.addEventListener('click', function() {
        window.open('https://discord.gg/peQ8vBwAWu', '_blank');
    });

    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitBtn.click();
        }
    });
});