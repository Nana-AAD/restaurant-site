import { loadHomePage } from './homepage.js';
import { loadMenuPage } from './MenuPage.js';
import { loadContactPage } from './ContactPage.js';
import { loadAboutPage } from './AboutPage.js';
import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();
});

document.getElementById('home-btn').addEventListener('click', loadHomePage);
document.getElementById('menu-btn').addEventListener('click', loadMenuPage);
document.getElementById('contact-btn').addEventListener('click', loadContactPage);
document.getElementById('about-btn').addEventListener('click', loadAboutPage);