# Professional Portfolio Website

A modern, professional portfolio website built with React.

## Features

- **Professional Portfolio**: Showcase your skills, experience, and projects
- **Modern UI**: Sophisticated dark theme with professional design
- **Profile Section**: Display your profile photo and professional information
- **Project Showcase**: Display IT and web development projects
- **Interactive Chatbot**: Client-side chatbot for visitor inquiries
- **Responsive Design**: Works perfectly on all devices

## Tech Stack

- **Frontend**: React, React Router
- **Styling**: Custom CSS with modern design
- **Deployment**: Static site (no backend required)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone or navigate to the project directory**

2. **Install frontend dependencies:**
   ```bash
   cd frontend
   npm install
   ```

## Running the Application

### Start the Frontend Development Server

```bash
cd frontend
npm start
```

The application will run on `http://localhost:3000` and automatically open in your browser.

## Project Structure

```
website-final-master/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js        # Navigation header
│   │   │   ├── Home.js          # Home/About section
│   │   │   ├── Projects.js      # Projects showcase
│   │   │   ├── Contact.js       # Contact information
│   │   │   ├── Chatbot.js       # Interactive chatbot
│   │   │   ├── SocialLinks.js   # Social media links
│   │   │   └── CustomCursor.js  # Custom cursor effect
│   │   ├── App.js               # Main app component with routing
│   │   ├── App.css              # Main styles
│   │   └── index.js             # Entry point
│   └── public/
│       ├── favicon.svg          # Custom favicon
│       ├── profile.jpg          # Profile photo
│       └── cv.pdf               # Resume/CV
└── README.md
```


## Customization

### Update Profile Information
Edit `frontend/src/components/Home.js` to update your personal information, skills, and experience.

### Update Profile Photo
Replace `frontend/public/profile.jpg` with your own profile photo. The image should be square for best results.

### Change Colors
Modify the color scheme in `frontend/src/App.css`. The current theme uses:
- Primary: Midnight Sapphire `#0C1A2D`
- Accent: Soft Rose `#E8B4BC`
- Highlight: Moonstone Blue `#6C91BF`
- Text: Porcelain White `#F5F7FA`
- Background: Deep Space `#080F1F`
- Secondary Accent: Lavender Fog `#B8B3E9`

## Production Deployment

### Build for Production
```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

Since this is a static site, you can deploy to:

- **Netlify**: Drag and drop the `build` folder or connect your Git repository
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Deploy directly from your repository
- **Any static hosting service**: Upload the `build` folder contents

### No Backend Required

This portfolio is a pure static site - no server, database, or backend needed. Just deploy the build files and you're done!

## Notes

- The contact form currently shows an alert. To enable email sending, consider:
  - Formspree (no backend needed)
  - EmailJS (client-side email service)
  - Netlify Forms (if deploying to Netlify)
- All content is static and can be easily updated in the React components

## License

This project is open source and available for personal and commercial use.

