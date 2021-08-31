const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const header = document.querySelector("header");
  const aServ = header.querySelector("a:nth-of-type(1)");
  const aProd = header.querySelector("a:nth-of-type(2)");
  const aVis = header.querySelector("a:nth-of-type(3)");
  const aFea = header.querySelector("a:nth-of-type(4)");
  const aAbout = header.querySelector("a:nth-of-type(5)");
  const aCont = header.querySelector("a:nth-of-type(6)");
aServ.textContent = siteContent["nav"]["nav-item-1"];
aProd.textContent = siteContent["nav"]["nav-item-2"];
aVis.textContent = siteContent["nav"]["nav-item-3"];
aFea.textContent = siteContent["nav"]["nav-item-4"];
aAbout.textContent = siteContent["nav"]["nav-item-5"];
aCont.textContent = siteContent["nav"]["nav-item-6"];


const sectionCta = document.querySelector(".cta");
  const ctaH1 = sectionCta.querySelector("h1");
  const ctaButton = sectionCta.querySelector("button");
  const ctaImg = document.getElementById("cta-img");
ctaH1.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


const featuresH4 = document.querySelector(".top-content > .text-content:nth-of-type(1) > h4");
  featuresH4.textContent = siteContent["main-content"]["features-h4"];
const featuresP = document.querySelector(".top-content > .text-content:nth-of-type(1) > p");
  featuresP.textContent = siteContent["main-content"]["features-content"];
const aboutH4 = document.querySelector(".top-content > .text-content:nth-of-type(2) > h4");
  aboutH4.textContent = siteContent["main-content"]["about-h4"];
const aboutP = document.querySelector(".top-content > .text-content:nth-of-type(2) > p");
  aboutP.textContent = siteContent["main-content"]["about-content"];

const midImg = document.getElementById("middle-img");
  midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const servicesH4 = document.querySelector(".bottom-content > .text-content:nth-of-type(1) > h4");
  servicesH4.textContent = siteContent["main-content"]["services-h4"];
const servicesP = document.querySelector(".bottom-content > .text-content:nth-of-type(1) > p");
  servicesP.textContent = siteContent["main-content"]["services-content"];
const prodH4 = document.querySelector(".bottom-content > .text-content:nth-of-type(2) > h4");
  prodH4.textContent = siteContent["main-content"]["product-h4"];
const prodP = document.querySelector(".bottom-content > .text-content:nth-of-type(2) > p");
  prodP.textContent = siteContent["main-content"]["product-content"];
const visionH4 = document.querySelector(".bottom-content > .text-content:nth-of-type(3) > h4");
  visionH4.textContent = siteContent["main-content"]["product-h4"];
const visionP = document.querySelector(".bottom-content > .text-content:nth-of-type(3) > p");
  visionP.textContent = siteContent["main-content"]["product-content"];


const contact = document.querySelector(".contact");
const contactH4 = contact.querySelector("h4");
const contactP1 = contact.querySelector("p:nth-of-type(1)");
const contactP2 = contact.querySelector("p:nth-of-type(2)");
const contactP3 = contact.querySelector("p:nth-of-type(3)");
contactH4.textContent = siteContent["contact"]["contact-h4"];
contactP1.textContent = siteContent["contact"]["address"];
contactP2.textContent = siteContent["contact"]["phone"];
contactP3.textContent = siteContent["contact"]["email"];

const footerP = document.querySelector("footer > p");
  footerP.textContent = siteContent["footer"]["copyright"];