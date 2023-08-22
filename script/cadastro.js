document.addEventListener("DOMContentLoaded", function () {
    var frameContainer11 = document.getElementById("frameContainer11");
    if (frameContainer11) {
      frameContainer11.addEventListener("click", function () {
        var anchor = document.querySelector("[data-scroll-to='inputNomeCadastro']");
        if (anchor) {
          anchor.scrollIntoView({ block: "start", behavior: "smooth" });
        }
      });
    }
  
    var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
    var observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
  
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }
  });
  