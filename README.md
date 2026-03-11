# Raycon Developments — Website

Premium residential construction website for **Raycon Developments**, established in 1982. Built with vanilla HTML, CSS, and JavaScript — no frameworks or build tools required.

---

## Project Structure

```
raycon-construction/
├── index.html              ← Home page
├── services.html           ← Services overview & FAQ
├── projects.html           ← Filterable project portfolio
├── project.html            ← Single project detail (uses ?id= querystring)
├── about.html              ← Company story, values, team
├── contact.html            ← Contact form & details
├── sitemap.xml             ← XML sitemap for search engines
├── robots.txt              ← Robots directives
├── README.md               ← This file
└── assets/
    ├── css/
    │   └── styles.css      ← All styles (CSS variables, components, utilities)
    ├── js/
    │   ├── data.js         ← Services, projects, FAQs, testimonials, team data
    │   └── main.js         ← All interactive functionality
    └── img/                ← Image assets (currently using placeholders)
```

---

## Running Locally

### Option 1: Open directly
Simply open `index.html` in any modern web browser. All pages and links will work.

### Option 2: Local static server (recommended)
Using a static server avoids potential issues with `file://` protocol restrictions.

**With Python:**
```bash
# Python 3
python -m http.server 8000

# Then open http://localhost:8000
```

**With Node.js:**
```bash
npx serve .
# or
npx http-server .
```

**With VS Code:**
Install the "Live Server" extension and click "Go Live" in the status bar.

---

## Editing Content

### Services & Projects
All data is stored in **`assets/js/data.js`**. Edit the arrays directly:

- `SERVICES` — Service listings (id, title, descriptions, icon)
- `PROJECTS` — Project portfolio (id, title, category, location, year, overview, scope, highlights, image count)
- `FAQS` — Frequently asked questions
- `TESTIMONIALS` — Client testimonials
- `TEAM` — Team member profiles

### Adding a New Project
Add a new object to the `PROJECTS` array in `data.js`:

```javascript
{
  id: 'your-project-slug',           // URL-friendly, unique
  title: 'Project Title — Location',
  category: 'New Build',              // Must match filter category
  location: 'Suburb, Johannesburg',
  year: '2025',
  overview: 'Description of the project...',
  scope: 'Scope of work...',
  highlights: [
    'Highlight 1',
    'Highlight 2'
  ],
  images: 4                           // Number of gallery placeholders
}
```

### Categories
Project categories used for filtering:
- `New Build`
- `Renovation`
- `Estate Development`
- `Plans & Submissions`

---

## Features

- **Responsive** — Mobile-first design, tested at 360px, 768px, and 1200px+
- **Accessible** — Semantic HTML, ARIA attributes, keyboard navigation, focus states
- **SEO-ready** — Meta tags, Open Graph, sitemap, robots.txt, semantic headings
- **Performance** — Minimal JS, CSS variables, no external dependencies
- **Interactive** — Mobile nav with focus trap, project filtering, FAQ accordion, form validation with localStorage

---

## Contact Details (as configured)

| Detail   | Value                                               |
|----------|-----------------------------------------------------|
| Phone    | 011 465 4547                                        |
| Mobile   | 083 601 1594                                        |
| Fax      | 011 465 4566                                        |
| Email    | raycon.dev@outlook.com                               |
| Address  | 15 De Mist, Lanzerac, Crestwood Drive, Lonehill, Gauteng |
| Postal   | P.O. Box 210, Witkoppen 2016                        |

---

## Browser Support

Tested in modern browsers: Chrome, Firefox, Safari, Edge. Uses standard CSS and JavaScript features with graceful degradation.

---

## Adding Real Images

Replace placeholder `<div>` elements with `<img>` tags. Place images in `assets/img/` and update the rendering functions in `main.js` or the HTML directly. Use the `loading="lazy"` attribute for performance.
