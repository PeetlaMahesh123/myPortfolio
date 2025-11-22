# Professional Portfolio Website

A modern, responsive portfolio website designed to showcase your professional profile, skills, education, certificates, and current status to potential employers and HR professionals.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Complete Sections**:
  - Hero/Home section with introduction
  - About section with personal information and address
  - Skills & Expertise section
  - Education timeline
  - Certificates & Achievements
  - Current Status (employment availability)
  - Contact information and form

## Customization Guide

### 1. Personal Information

Edit `index.html` and update the following:

- **Name**: Replace "Your Name" throughout the file
- **Profession**: Update "Your Profession/Title" in the hero section
- **Address**: Update address in the About and Contact sections
- **Email**: Replace "your.email@example.com"
- **Phone**: Replace "+1 (555) 123-4567"

### 2. Skills Section

In the Skills section, update:
- Technical skills with proficiency levels (adjust the percentage in `style="width: X%"`)
- Tools & Technologies (add/remove skill tags)
- Soft Skills (add/remove skill tags)

### 3. Education Section

Update each timeline item with:
- Degree name
- University/Institution name
- Start and end years
- Description of your education

### 4. Certificates Section

For each certificate:
- Certificate name
- Issuing organization
- Date obtained
- Description
- Link to certificate (if available online)

### 5. Status Section

Update your current employment status:
- Availability status
- Location preferences
- Start date availability
- Work schedule preferences

### 6. Social Media Links

Update the social links in the Contact section with your actual profiles:
- LinkedIn
- GitHub
- Twitter
- Personal website

### 7. Profile Image

Replace the placeholder icon in the hero section:
- Add your image file to the project folder
- Update the `.image-placeholder` div to use an `<img>` tag instead

Example:
```html
<div class="hero-image">
    <img src="your-photo.jpg" alt="Your Name" style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover;">
</div>
```

### 8. Color Scheme

To customize colors, edit `styles.css` and modify the CSS variables in the `:root` selector:
- `--primary-color`: Main brand color
- `--secondary-color`: Secondary accent color
- `--accent-color`: Additional accent color

## File Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Deployment to GitHub

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository
   - Name it something like "portfolio" or "my-portfolio"

2. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio website"
   ```

3. **Connect to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The contact form currently uses a mailto link. For production use, consider integrating with a service like Formspree, EmailJS, or a backend API.
- All icons are from Font Awesome (loaded via CDN). Make sure you have an internet connection for icons to display.
- The website is fully responsive and will adapt to different screen sizes automatically.

## License

This portfolio template is free to use and modify for personal and commercial projects.

---

**Good luck with your job search!** 🚀

