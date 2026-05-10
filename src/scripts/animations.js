import gsap from "gsap";

gsap.from(".card", { 
    opacity: 0, 
    duration: 0.4,
    stagger: 0.15 
}
);
gsap.from(".page-image, .page-name, .favorite-emoji, .page-links, .page-bio, .b2h", { 
    opacity: 0, 
    duration: 0.4,
    stagger: 0.15 
}
);