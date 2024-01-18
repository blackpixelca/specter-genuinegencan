gsap.registerPlugin(ScrollTrigger);

// Home Portals

let portals = gsap.timeline({
  scrollTrigger: {
    trigger: ".section.is--home-portals",
    toggleActions: "play none none reverse",
    start: "top 49%"
  }
});
portals.from(
  ".portal-card",
  {rotation: 10, opacity: 0, duration: 0.45, stagger: 0.15},
  0
);
portals.from(
  ".portal-img",
  {y: "-30%", opacity: 0, duration: 0.45, stagger: 0.15},
  0
);

portals.from(
  ".portal-heading",
  {y: "-100%", opacity: 0, duration: 0.45, stagger: 0.15},
  0
);
portals.from(
  ".portal-text",
  {y: "100%", opacity: 0, duration: 0.45, stagger: 0.15},
  0
);

// Home Neighbourhood
let nbh1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".neighbourhoods-cms",
    toggleActions: "play none none reverse",
    start: "top 65%"
  }
});
nbh1.from(
  ".neighbourhood-card",
  {y: "100%", opacity: 0, duration: 0.45, stagger: 0.15},
  0
);
