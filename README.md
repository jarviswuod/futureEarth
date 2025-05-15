FutureEarth
A React-based web application for promoting sustainable living and environmental awareness.
Live Demo
View Live Demo
Framework
This project is built with React and styled using Tailwind CSS.
Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

Node.js (v14.0.0 or later)
npm (v6.0.0 or later) or yarn (v1.22.0 or later)

Installation

Clone the repository:
bashgit clone https://github.com/jarviswuod/futureEarth.git
cd futureEarth

Install dependencies:
bashnpm install
# or
yarn install

Start the development server:
bashnpm run dev
# or
yarn dev

Open your browser and navigate to http://localhost:3000 (or the port specified in your terminal).

Project Structure
The application is organized with the following main routes:

/ - Home Page
/sustainable-living - Sustainable Living Page
/our-story - Our Story Page
/contact-us - Contact Us Page

Design Decisions & Implementation Notes
Layout Implementation
I maintained a responsive layout that adapts to various screen sizes, with special attention to the mobile and desktop views as specified in the Figma design. The navigation menu collapses into a hamburger menu on smaller screens for better usability.
Component Architecture

Reusable Components: Created reusable UI components like buttons, cards, and section layouts to maintain consistency across the application.
Page Components: Each main route has its own page component that assembles various sections.
Styling: Utilized Tailwind CSS for styling, leveraging its utility-first approach for rapid UI development.

Design Adaptations
While trying to stay faithful to the Figma design, I made the following adaptations:

Home Page Carousel: Implemented left and right navigation arrows for the hero section to enhance usability.
Ongoing Projects Section: Added navigation arrows to browse through project images, adapting the desktop design to be more functional.
Footer Responsiveness: Optimized the footer layout to maintain readability and usability across different screen sizes.

Consistency Improvements

Standardized typography scales and spacing throughout the application.
Ensured color scheme consistency according to the provided design system.
Maintained consistent interactive elements (buttons, links) behavior across the site.

Challenges Faced

Design Inconsistency: The mobile and desktop designs had significant differences in some sections, particularly in the "Ongoing Projects" section on the Home page. I balanced staying true to the design while ensuring a cohesive user experience across devices.
Footer Styling: Creating a responsive footer that maintained the design integrity across breakpoints required careful CSS implementation.
Image Management: Implementing efficient image loading and ensuring proper aspect ratios while maintaining design fidelity was challenging. I utilized responsive image techniques to address this.
Hero Section Variations: The hero sections across different pages had subtle differences that required attention to detail to implement correctly. For example, handling the title interchange from "Sustainable Living" to "About Sustainable Living" on that specific page.

Future Improvements
Given more time, I would consider the following enhancements:

Performance Optimization:

Implement lazy loading for images
Add code splitting for better initial load time
Further optimize asset delivery


Enhanced Interactivity:

Add animations for smoother transitions between sections
Implement more interactive elements in the "Ongoing Projects" section


Accessibility Improvements:

Conduct a comprehensive accessibility audit
Implement ARIA attributes more thoroughly
Ensure proper keyboard navigation throughout the site


Testing:

Add unit tests for components
Implement integration tests for page flows
Add end-to-end testing for critical user journeys


Content Management:

Integrate with a headless CMS for easier content updates
Add localization support for multiple languages



Technologies Used

React
React Router
Tailwind CSS
Vite (for bundling and development)
Netlify (for deployment)

License
This project is for demonstration purposes only.
