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
logo.setAttribute('src', siteContent["nav"]["img-src"])

const header = document.querySelector('header');
const aServ = header.querySelector('a:nth-of-type(1)');
const aProd = header.querySelector('a:nth-of-type(2)');
const aVis = header.querySelector('a:nth-of-type(3)');
const aFea = header.querySelector('a:nth-of-type(4)');
const aAbout = header.querySelector('a:nth-of-type(5)');
const aCont = header.querySelector('a:nth-of-type(6)');
aServ.textContent = siteContent["nav"]["nav-item-1"];
aProd.textContent = siteContent["nav"]["nav-item-2"];
aVis.textContent = siteContent["nav"]["nav-item-3"];
aFea.textContent = siteContent["nav"]["nav-item-4"];
aAbout.textContent = siteContent["nav"]["nav-item-5"];
aCont.textContent = siteContent["nav"]["nav-item-6"];

const sectionCta = document.querySelector('.cta');
  const ctaH1 = sectionCta.querySelector('h1');
  const ctaButton = sectionCta.querySelector('button');
  const ctaImg = sectionCta.querySelector('#cta-img');
  ctaH1.textContent = siteContent["cta"]["h1"];
  ctaButton.textContent = siteContent["cta"]["button"];
  ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

const features = document.querySelector('.text-content:nth-of-type(1)');
  const featuresH4 = features.querySelector('h4');
  const featuresP = features.querySelector('p');
const about = document.querySelector('.text-content:nth-of-type(2)');
  const aboutH4 = about.querySelector('h4');
  const aboutP = about.querySelector('p');
const services = document.querySelector('.text-content:nth-of-type(3)');
const product = document.querySelector('.text-content:nth-of-type(4)');
const vision = document.querySelector('.text-content:nth-of-type(6)');

featuresH4.textContent = siteContent["main-content"]["features-h4"];
featuresP.textContent = siteContent["main-content"]["features-content"];
aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutP.textContent = siteContent["main-content"]["about-content"];
