// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    observer.observe(category);
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(5, 11, 20, 0.98)';
        navbar.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(59, 130, 246, 0.1)';
    } else {
        navbar.style.background = 'rgba(5, 11, 20, 0.95)';
        navbar.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(59, 130, 246, 0.1)';
    }
});


// Add active class to current section in navigation
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add fade-in animation on scroll
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Apply fade-in to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(section);
});

// ===============================
// 🤖 AI ASSISTANT INTEGRATION
// ===============================

// Create AI Button
const aiButton = document.createElement("div");
aiButton.innerHTML = "🤖";
aiButton.style.position = "fixed";
aiButton.style.bottom = "25px";
aiButton.style.right = "25px";
aiButton.style.width = "60px";
aiButton.style.height = "60px";
aiButton.style.borderRadius = "50%";
aiButton.style.background = "linear-gradient(135deg,#3b82f6,#60a5fa)";
aiButton.style.display = "flex";
aiButton.style.alignItems = "center";
aiButton.style.justifyContent = "center";
aiButton.style.fontSize = "26px";
aiButton.style.cursor = "pointer";
aiButton.style.boxShadow = "0 8px 25px rgba(59,130,246,0.6)";
aiButton.style.zIndex = "9999";

document.body.appendChild(aiButton);

// Create Chat Box
const aiChat = document.createElement("div");
aiChat.style.position = "fixed";
aiChat.style.bottom = "100px";
aiChat.style.right = "25px";
aiChat.style.width = "350px";
aiChat.style.height = "450px";
aiChat.style.background = "#0f1b2e";
aiChat.style.borderRadius = "15px";
aiChat.style.display = "none";
aiChat.style.flexDirection = "column";
aiChat.style.boxShadow = "0 20px 40px rgba(0,0,0,0.7)";
aiChat.style.overflow = "hidden";
aiChat.style.zIndex = "9999";

aiChat.innerHTML = `
  <div style="padding:12px;background:#1e2a3a;color:#93c5fd;font-weight:bold;display:flex;justify-content:space-between;">
    Mahesh AI Assistant
    <span id="close-ai" style="cursor:pointer;">✖</span>
  </div>
  <div id="ai-messages" style="flex:1;padding:10px;overflow-y:auto;font-size:14px;"></div>
  <div style="display:flex;padding:10px;gap:5px;">
    <input id="ai-input" type="text" placeholder="Ask about Mahesh..." 
      style="flex:1;padding:8px;border-radius:8px;border:none;" />
    <button id="ai-send" 
      style="padding:8px 12px;border-radius:8px;border:none;background:#3b82f6;color:white;cursor:pointer;">
      Send
    </button>
  </div>
`;

document.body.appendChild(aiChat);

// Toggle Chat
aiButton.onclick = () => {
  aiChat.style.display = "flex";
};

document.addEventListener("click", function (e) {
  if (e.target.id === "close-ai") {
    aiChat.style.display = "none";
  }
});

// Send Message
document.addEventListener("click", async function (e) {
  if (e.target.id === "ai-send") {
    const input = document.getElementById("ai-input");
    const messages = document.getElementById("ai-messages");
    const message = input.value.trim();
    if (!message) return;

    messages.innerHTML += `<p><b>You:</b> ${message}</p>`;
    input.value = "";

    try {
      const response = await fetch("https://myportfolio-backend-connection-production.up.railway.app/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ message })
});

      const data = await response.json();
      messages.innerHTML += `<p><b>AI:</b> ${data.reply}</p>`;
      messages.scrollTop = messages.scrollHeight;
    } catch (error) {
      messages.innerHTML += `<p style="color:red;">Error connecting to AI server.</p>`;
    }
  }
});


