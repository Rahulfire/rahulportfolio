document.addEventListener('DOMContentLoaded', function() {
    // Navbar underline animation on click and scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    function activateNavLink() {
        let scrollY = window.pageYOffset;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // adjust offset for header height
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);

    // Also update on click (for instant feedback)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initial activation on page load
    activateNavLink();

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const emailInput = this.querySelector('input[type="email"]');
            if (!emailInput.checkValidity()) {
                emailInput.setCustomValidity("Please enter a valid email address.");
            } else {
                emailInput.setCustomValidity("");
            }
        });
    }

    // Typing animation for role in home section
    const roles = ["Backend Developer", "Data Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let typing = true;
    const typingSpan = document.getElementById("typing-role");

    function typeRole() {
        if (!typingSpan) return;
        if (typing) {
            if (charIndex < roles[roleIndex].length) {
                typingSpan.textContent += roles[roleIndex][charIndex];
                charIndex++;
                setTimeout(typeRole, 80);
            } else {
                typing = false;
                setTimeout(typeRole, 2500); 
            }
        } else {
            if (charIndex > 0) {
                typingSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeRole, 40);
            } else {
                typing = true;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(typeRole, 2500); 
            }
        }
    }

    typeRole();

    // Typing animation for role in about section
    const aboutRoles = ["Backend Developer", "Data Engineer"];
    let aboutRoleIndex = 0;
    let aboutCharIndex = 0;
    let aboutTyping = true;
    const aboutTypingSpan = document.getElementById("about-typing-role");

    function typeAboutRole() {
        if (!aboutTypingSpan) return;
        if (aboutTyping) {
            if (aboutCharIndex < aboutRoles[aboutRoleIndex].length) {
                aboutTypingSpan.textContent += aboutRoles[aboutRoleIndex][aboutCharIndex];
                aboutCharIndex++;
                setTimeout(typeAboutRole, 80);
            } else {
                aboutTyping = false;
                setTimeout(typeAboutRole, 4000); // Pause 4 seconds before erasing
            }
        } else {
            if (aboutCharIndex > 0) {
                aboutTypingSpan.textContent = aboutRoles[aboutRoleIndex].substring(0, aboutCharIndex - 1);
                aboutCharIndex--;
                setTimeout(typeAboutRole, 40);
            } else {
                aboutTyping = true;
                aboutRoleIndex = (aboutRoleIndex + 1) % aboutRoles.length;
                setTimeout(typeAboutRole, 4000); // Pause 4 seconds before typing next
            }
        }
    }

    typeAboutRole();
});