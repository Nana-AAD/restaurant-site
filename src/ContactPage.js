// contactPage.js
export function loadContactPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactPageDiv = document.createElement('div');
    contactPageDiv.id = 'contact-page';

    const contactForm = createContactForm();
    const contactInfo = createContactInfo();

    contactPageDiv.appendChild(contactForm);
    contactPageDiv.appendChild(contactInfo);

    content.appendChild(contactPageDiv);
}

function createContactForm() {
    const form = document.createElement('form');
    form.id = 'contact-form';
    form.innerHTML = `
        <h2>Contact Us</h2>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
    `;
    return form;
}

function createContactInfo() {
    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.classList.add('contact-info');
    contactInfoDiv.innerHTML = `
        <h3>Visit Us</h3>
        <p>123 Main Street</p>
        <p>Accra, Greater-Accra, 000</p>
        <h3>Contact Information</h3>
        <p>Phone: (+233) 5578900998</p>
        <p>Email: info@shogun.com</p>
    `;
    return contactInfoDiv;
}
