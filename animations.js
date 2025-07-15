// Ensure GSAP and ScrollTrigger are loaded
(function() {
  const gsapScript = document.createElement("script");
  gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
  document.head.appendChild(gsapScript);

  const scrollTriggerScript = document.createElement("script");
  scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js";
  document.head.appendChild(scrollTriggerScript);
})();

window.addEventListener("load", () => {
  const checkGSAP = setInterval(() => {
    if (window.gsap && window.ScrollTrigger) {
      clearInterval(checkGSAP);

      const { gsap } = window;
      gsap.registerPlugin(ScrollTrigger);

      // Navbar animation
      gsap.from("nav", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
      });

      // Hero section animation
      gsap.from(".hero-title", {
        duration: 1.5,
        y: -100,
        opacity: 0,
        ease: "power2.out"
      });

      // About section animation
      gsap.from(".about-section", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
      });

      // Project cards stagger animation
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".project-card",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Contact form animation
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.3,
        ease: "elastic.out(1, 0.5)"
      });
    }
  }, 100);
});
