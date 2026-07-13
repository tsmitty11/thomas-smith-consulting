import "flowbite";

const logoCarousel = document.querySelector("[data-logo-carousel]");

if (logoCarousel && !logoCarousel.dataset.cloned) {
  Array.from(logoCarousel.children).forEach((logo) => {
    const clone = logo.cloneNode(true);

    clone.setAttribute("aria-hidden", "true");
    clone.setAttribute("tabindex", "-1");
    logoCarousel.appendChild(clone);
  });

  logoCarousel.dataset.cloned = "true";
}
