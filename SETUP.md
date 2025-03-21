# Marina Shipyard Website Redesign Setup

## Local Development Setup

Your website redesign has been created with the following modern technologies:
- Next.js - A React framework for production
- Tailwind CSS - A utility-first CSS framework
- Responsive design for all devices

## Project Structure
- `/src/app/*` - Page components for each route
- `/src/components/*` - Reusable UI components
- `/src/styles/*` - Global styles and Tailwind configuration
- `/public/images/` - Directory for storing website images

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next Steps

### 1. Complete the GitHub Setup

```bash
# Create a new repository on GitHub
gh auth login
gh repo create marina-shipyard-redesign --public --source=. --push

# Or manually with:
git remote add origin https://github.com/brandonrz369/marina-shipyard-redesign.git
git branch -M main
git push -u origin main
```

### 2. Set Up Vercel Deployment

1. Sign up for Vercel at https://vercel.com/signup if you haven't already
2. Install the Vercel CLI: `npm i -g vercel`
3. Connect to your account: `vercel login`
4. Link your project: `vercel link`
5. Deploy: `vercel`

### 3. Add Website Content

The website structure has been created with placeholder content. You'll need to:

1. Add real images from the Marina Shipyard website to `/public/images/`
2. Replace placeholder text with actual content from the original website
3. Update contact information, services details, and about page content

### 4. Images Download

The HTTrack download was interrupted. You can try again or manually download images:

```bash
httrack https://marinashipyard.com/ -O marinashipyard -v
```

Then run the image extraction script:

```bash
npm run download-images
```

## Important Files to Update

- `/src/app/page.js` - The home page
- `/src/app/services/page.js` - Services page
- `/src/app/about/page.js` - About page
- `/src/app/gallery/page.js` - Gallery page with placeholders for images
- `/src/app/contact/page.js` - Contact page

## Additional Features to Consider

1. Add a contact form submission handler
2. Implement smooth animations
3. Add SEO optimization
4. Create a blog section if needed
5. Implement Google Maps for the contact page