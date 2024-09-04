// vite.config.ts
import { defineConfig } from "file:///C:/Users/Aamir%20Khan/Desktop/gitprofile-main/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Aamir%20Khan/Desktop/gitprofile-main/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/Aamir%20Khan/Desktop/gitprofile-main/node_modules/vite-plugin-pwa/dist/index.js";

// gitprofile.config.ts
var CONFIG = {
  github: {
    username: "abdurehman760"
    // Your GitHub org/user name. (This is the only required config)
  },
  base: "/",
  projects: {
    github: {
      display: true,
      // Display GitHub projects?
      header: "Github Projects ( Synced from GitHub )",
      mode: "automatic",
      // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: "updated",
        // Sort projects by 'stars' or 'updated'
        limit: 10,
        // How many projects to display.
        exclude: {
          forks: false,
          // Forked projects will not be displayed if set to true.
          projects: []
          // These projects will not be displayed. example: ['abdurehman760/currency-converter-real-time']
        }
      },
      manual: {
        // Properties for manually specifying projects
        projects: ["abdurehman760/Edu-site"]
        // List of repository names to display. example: ['abdurehman760/currency-converter-real-time']
      }
    },
    external: {
      header: "Recent & Live Favorite Projects",
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          "title": "GitProfile - Portfolio Site",
          "description": "GitProfile is an intuitive, automatic portfolio builder for GitHub users, allowing you to create a personalized portfolio effortlessly. Just enter your GitHub username, and GitProfile generates a beautiful portfolio site with your projects, skills, and more. With over 33 themes, built-in SEO, and PWA support, GitProfile ensures your portfolio is polished and professional. Google Analytics integration is included to help track user interactions and provide insights into how visitors engage with your portfolio. Easily deploy your site to GitHub Pages in minutes, and start showcasing your work to the world.",
          "imageUrl": "https://i.postimg.cc/QNzn8Y8G/Screenshot-12.png",
          "link": "https://github.com/abdurehman760/git-profile-portfolio",
          "liveDemoLink": "https://abdurrahman-git-profile-portfolio.netlify.app/"
        },
        {
          "title": "Currency Converter App",
          "description": "The Currency Converter App is a modern React-based application designed for fast and accurate currency conversion. It allows users to search for and select currencies from an extensive list with ease. The app is optimized for both desktop and mobile use, offering a super quick and responsive experience. It features real-time exchange rates and formats input values into thousands, millions, billions, etc., for easy reading and counting, with the same formatting applied to the output value. Perfect for anyone needing reliable currency conversion on the go.",
          "imageUrl": "https://i.postimg.cc/dtpMftkC/craiyon-001041-sleek-finance-app-logo-on-a-vibrant-blue-background.png",
          "link": "https://github.com/abdurehman760/currency-converter-real-time",
          "liveDemoLink": "https://currency-converter-real-time.netlify.app/"
        },
        {
          "title": "JavaScript Quiz Game \u{1F393}",
          "description": "A single-page web application built using only HTML, CSS, and JavaScript to test and enhance your knowledge through interactive quizzes. Select between basic and advanced quizzes, receive real-time feedback, and view detailed results. Features include dynamic quiz selection, interactive interface, timer functionality, detailed results, responsive design, and access to previous records.",
          "imageUrl": "https://i.postimg.cc/PJ0bs6wP/RDRFO0-Icm-Hkujr-Oj-TN1o-1-bp7k4.jpg",
          // Replace with actual image URL for the quiz game
          "link": "https://github.com/abdurehman760/javascript-quiz-game",
          "liveDemoLink": "https://javascript-quiz-game-for-learners.netlify.app/"
        }
      ]
    }
  },
  seo: {
    title: "Portfolio of Abdur Rahman",
    description: "",
    imageURL: ""
  },
  social: {
    website: "https://www.abdurrahmanportfoliosite.com",
    linkedin: "Abdur-Rahman",
    facebook: "",
    stackoverflow: "",
    // example: '1/jeff-atwood'
    phone: "+92-3029437934",
    email: "Abdurehmankhan760@gmail.com",
    telegram: "abdurrahman2232"
    // Example link for Fiverr
  },
  resume: {
    fileUrl: "https://drive.google.com/uc?export=download&id=1LQ5U5I_gK0udPcUCMaenG86_5bwkAAT5"
  },
  skills: [
    "HTML",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Mongodb",
    "MySQL",
    "SQLite",
    "Flask",
    "Git",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "English",
    "German"
  ],
  experiences: [
    {
      company: "VertexSoft SMC (visit)",
      position: "Internship",
      from: "November 2023",
      to: "April 2024",
      companyLink: "https://vertexsoftsmc.com",
      description: "Completed a 6-month internship in web development focusing on advanced React.js. Developed responsive web applications with HTML, CSS, JavaScript, and React.js. Collaborated on dynamic components, managed version control with Git, and engaged in the full software development lifecycle including testing and deployment.",
      certificateLink: {
        text: "View Internship Certificate",
        url: "https://drive.google.com/file/d/1ND4LGrwdvHGLmlMobTTyYFQ-XGMiD6rx/view?usp=drive_link"
      }
    },
    {
      company: "Self-employed",
      position: "Freelancer",
      from: "May 2024",
      to: "Present",
      companyLink: "",
      description: "Freelance web developer specializing in React.js, HTML, CSS, and JavaScript. Provides full-stack development services, including API integration and website optimization for speed and SEO. Delivers scalable and high-quality web solutions while staying updated with industry trends."
    }
  ],
  certifications: [
    {
      name: "Google Soft Skills Program (click to view)",
      body: `
  Awarded for completing the Google Soft Skills Program, which covers Professional Communication, Personal Branding, Critical Thinking, and Time Management, taught by Google experts.
`,
      year: "July 2024",
      link: "https://drive.google.com/file/d/1EXVW6YaejInrBL4YxRjvVXl5msnZoayq/view?usp=drive_link"
    },
    {
      name: "HTML Certification (click to view)",
      body: "Awarded by CodeLiber for completing the HTML course.",
      year: "2024",
      link: "https://codeliber.com/certificates/m02sov5zdyx60"
    },
    {
      name: "CSS Certification (click to view)",
      body: "Awarded by CodeLiber for completing the CSS course.",
      year: "2024",
      link: "https://codeliber.com/certificates/m02sov5zdyx601"
    },
    {
      name: "JavaScript Certification (click to view)",
      body: "Awarded by CodeLiber for completing the JavaScript course.",
      year: "2024",
      link: "https://codeliber.com/certificates/m02sov5zdyx602"
    }
  ],
  educations: [
    {
      institution: '<a href="https://uswat.edu.pk" target="_blank" rel="noopener noreferrer">University of Swat (Visit Website)</a>',
      degree: "BS Software Engineering",
      from: "2019",
      to: "2023",
      cgpa: "3.0 out of 4"
    }
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: "dev",
    // medium | dev
    username: "",
    // to hide blog section, keep it empty
    limit: 2
    // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: "G-07ZKN96EE3"
    // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  themeConfig: {
    defaultTheme: "synthwave",
    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,
    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,
    // Display the ring in Profile picture
    displayAvatarRing: true,
    // Available themes. To remove any theme, exclude from here.
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      "procyon"
    ],
    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: "#fc055b",
      secondary: "#219aaf",
      accent: "#e8d03a",
      neutral: "#2A2730",
      "base-100": "#E3E3ED",
      "--rounded-box": "3rem",
      "--rounded-btn": "3rem"
    }
  },
  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/abdurehman760/AbdurRahman-gitProfile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and \u2764\uFE0F`,
  enablePWA: true
};
var gitprofile_config_default = CONFIG;

// vite.config.ts
import { createHtmlPlugin } from "file:///C:/Users/Aamir%20Khan/Desktop/gitprofile-main/node_modules/vite-plugin-html/dist/index.mjs";
var vite_config_default = defineConfig({
  base: gitprofile_config_default.base || "/",
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: gitprofile_config_default.seo.title,
          metaDescription: gitprofile_config_default.seo.description,
          metaImageURL: gitprofile_config_default.seo.imageURL
        }
      }
    }),
    ...gitprofile_config_default.enablePWA ? [
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          navigateFallback: void 0
        },
        includeAssets: ["logo.png"],
        manifest: {
          name: "Portfolio",
          short_name: "Portfolio",
          description: "Personal Portfolio",
          icons: [
            {
              src: "logo.png",
              sizes: "64x64 32x32 24x24 16x16 192x192 512x512",
              type: "image/png"
            }
          ]
        }
      })
    ] : []
  ],
  define: {
    CONFIG: gitprofile_config_default
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiZ2l0cHJvZmlsZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBYW1pciBLaGFuXFxcXERlc2t0b3BcXFxcZ2l0cHJvZmlsZS1tYWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBYW1pciBLaGFuXFxcXERlc2t0b3BcXFxcZ2l0cHJvZmlsZS1tYWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9BYW1pciUyMEtoYW4vRGVza3RvcC9naXRwcm9maWxlLW1haW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcbmltcG9ydCBDT05GSUcgZnJvbSAnLi9naXRwcm9maWxlLmNvbmZpZyc7XG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4taHRtbCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBDT05GSUcuYmFzZSB8fCAnLycsXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xuICAgICAgaW5qZWN0OiB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtZXRhVGl0bGU6IENPTkZJRy5zZW8udGl0bGUsXG4gICAgICAgICAgbWV0YURlc2NyaXB0aW9uOiBDT05GSUcuc2VvLmRlc2NyaXB0aW9uLFxuICAgICAgICAgIG1ldGFJbWFnZVVSTDogQ09ORklHLnNlby5pbWFnZVVSTCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgLi4uKENPTkZJRy5lbmFibGVQV0FcbiAgICAgID8gW1xuICAgICAgICAgIFZpdGVQV0Eoe1xuICAgICAgICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICAgICAgICB3b3JrYm94OiB7XG4gICAgICAgICAgICAgIG5hdmlnYXRlRmFsbGJhY2s6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlQXNzZXRzOiBbJ2xvZ28ucG5nJ10sXG4gICAgICAgICAgICBtYW5pZmVzdDoge1xuICAgICAgICAgICAgICBuYW1lOiAnUG9ydGZvbGlvJyxcbiAgICAgICAgICAgICAgc2hvcnRfbmFtZTogJ1BvcnRmb2xpbycsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGVyc29uYWwgUG9ydGZvbGlvJyxcbiAgICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzcmM6ICdsb2dvLnBuZycsXG4gICAgICAgICAgICAgICAgICBzaXplczogJzY0eDY0IDMyeDMyIDI0eDI0IDE2eDE2IDE5MngxOTIgNTEyeDUxMicsXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gIF0sXG4gIGRlZmluZToge1xuICAgIENPTkZJRzogQ09ORklHLFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFhbWlyIEtoYW5cXFxcRGVza3RvcFxcXFxnaXRwcm9maWxlLW1haW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFhbWlyIEtoYW5cXFxcRGVza3RvcFxcXFxnaXRwcm9maWxlLW1haW5cXFxcZ2l0cHJvZmlsZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0FhbWlyJTIwS2hhbi9EZXNrdG9wL2dpdHByb2ZpbGUtbWFpbi9naXRwcm9maWxlLmNvbmZpZy50c1wiOy8vIGdpdHByb2ZpbGUuY29uZmlnLnRzXHJcblxyXG5jb25zdCBDT05GSUcgPSB7XHJcbiAgZ2l0aHViOiB7XHJcbiAgICB1c2VybmFtZTogJ2FiZHVyZWhtYW43NjAnLCAvLyBZb3VyIEdpdEh1YiBvcmcvdXNlciBuYW1lLiAoVGhpcyBpcyB0aGUgb25seSByZXF1aXJlZCBjb25maWcpXHJcbiAgfSxcclxuXHJcbiAgYmFzZTogJy8nLFxyXG4gIHByb2plY3RzOiB7XHJcbiAgICBnaXRodWI6IHtcclxuICAgICAgZGlzcGxheTogdHJ1ZSwgLy8gRGlzcGxheSBHaXRIdWIgcHJvamVjdHM/XHJcbiAgICAgIGhlYWRlcjogJ0dpdGh1YiBQcm9qZWN0cyAoIFN5bmNlZCBmcm9tIEdpdEh1YiApJyxcclxuICAgICAgbW9kZTogJ2F1dG9tYXRpYycsIC8vIE1vZGUgY2FuIGJlOiAnYXV0b21hdGljJyBvciAnbWFudWFsJ1xyXG4gICAgICBhdXRvbWF0aWM6IHtcclxuICAgICAgICBzb3J0Qnk6ICd1cGRhdGVkJywgLy8gU29ydCBwcm9qZWN0cyBieSAnc3RhcnMnIG9yICd1cGRhdGVkJ1xyXG4gICAgICAgIGxpbWl0OiAxMCwgLy8gSG93IG1hbnkgcHJvamVjdHMgdG8gZGlzcGxheS5cclxuICAgICAgICBleGNsdWRlOiB7XHJcbiAgICAgICAgICBmb3JrczogZmFsc2UsIC8vIEZvcmtlZCBwcm9qZWN0cyB3aWxsIG5vdCBiZSBkaXNwbGF5ZWQgaWYgc2V0IHRvIHRydWUuXHJcbiAgICAgICAgICBwcm9qZWN0czogW10sIC8vIFRoZXNlIHByb2plY3RzIHdpbGwgbm90IGJlIGRpc3BsYXllZC4gZXhhbXBsZTogWydhYmR1cmVobWFuNzYwL2N1cnJlbmN5LWNvbnZlcnRlci1yZWFsLXRpbWUnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIG1hbnVhbDoge1xyXG4gICAgICAgIC8vIFByb3BlcnRpZXMgZm9yIG1hbnVhbGx5IHNwZWNpZnlpbmcgcHJvamVjdHNcclxuICAgICAgICBwcm9qZWN0czogWydhYmR1cmVobWFuNzYwL0VkdS1zaXRlJ10sIC8vIExpc3Qgb2YgcmVwb3NpdG9yeSBuYW1lcyB0byBkaXNwbGF5LiBleGFtcGxlOiBbJ2FiZHVyZWhtYW43NjAvY3VycmVuY3ktY29udmVydGVyLXJlYWwtdGltZSddXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZXh0ZXJuYWw6IHtcclxuICAgICAgaGVhZGVyOiAnUmVjZW50ICYgTGl2ZSBGYXZvcml0ZSBQcm9qZWN0cycsXHJcbiAgICAgIC8vIFRvIGhpZGUgdGhlIGBFeHRlcm5hbCBQcm9qZWN0c2Agc2VjdGlvbiwga2VlcCBpdCBlbXB0eS5cclxuICAgICAgcHJvamVjdHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInRpdGxlXCI6IFwiR2l0UHJvZmlsZSAtIFBvcnRmb2xpbyBTaXRlXCIsXHJcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l0UHJvZmlsZSBpcyBhbiBpbnR1aXRpdmUsIGF1dG9tYXRpYyBwb3J0Zm9saW8gYnVpbGRlciBmb3IgR2l0SHViIHVzZXJzLCBhbGxvd2luZyB5b3UgdG8gY3JlYXRlIGEgcGVyc29uYWxpemVkIHBvcnRmb2xpbyBlZmZvcnRsZXNzbHkuIEp1c3QgZW50ZXIgeW91ciBHaXRIdWIgdXNlcm5hbWUsIGFuZCBHaXRQcm9maWxlIGdlbmVyYXRlcyBhIGJlYXV0aWZ1bCBwb3J0Zm9saW8gc2l0ZSB3aXRoIHlvdXIgcHJvamVjdHMsIHNraWxscywgYW5kIG1vcmUuIFdpdGggb3ZlciAzMyB0aGVtZXMsIGJ1aWx0LWluIFNFTywgYW5kIFBXQSBzdXBwb3J0LCBHaXRQcm9maWxlIGVuc3VyZXMgeW91ciBwb3J0Zm9saW8gaXMgcG9saXNoZWQgYW5kIHByb2Zlc3Npb25hbC4gR29vZ2xlIEFuYWx5dGljcyBpbnRlZ3JhdGlvbiBpcyBpbmNsdWRlZCB0byBoZWxwIHRyYWNrIHVzZXIgaW50ZXJhY3Rpb25zIGFuZCBwcm92aWRlIGluc2lnaHRzIGludG8gaG93IHZpc2l0b3JzIGVuZ2FnZSB3aXRoIHlvdXIgcG9ydGZvbGlvLiBFYXNpbHkgZGVwbG95IHlvdXIgc2l0ZSB0byBHaXRIdWIgUGFnZXMgaW4gbWludXRlcywgYW5kIHN0YXJ0IHNob3djYXNpbmcgeW91ciB3b3JrIHRvIHRoZSB3b3JsZC5cIixcclxuICAgICAgICAgIFwiaW1hZ2VVcmxcIjogXCJodHRwczovL2kucG9zdGltZy5jYy9RTnpuOFk4Ry9TY3JlZW5zaG90LTEyLnBuZ1wiLFxyXG4gICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FiZHVyZWhtYW43NjAvZ2l0LXByb2ZpbGUtcG9ydGZvbGlvXCIsXHJcbiAgICAgICAgICBcImxpdmVEZW1vTGlua1wiOiBcImh0dHBzOi8vYWJkdXJyYWhtYW4tZ2l0LXByb2ZpbGUtcG9ydGZvbGlvLm5ldGxpZnkuYXBwL1wiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBcInRpdGxlXCI6IFwiQ3VycmVuY3kgQ29udmVydGVyIEFwcFwiLFxyXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSBDdXJyZW5jeSBDb252ZXJ0ZXIgQXBwIGlzIGEgbW9kZXJuIFJlYWN0LWJhc2VkIGFwcGxpY2F0aW9uIGRlc2lnbmVkIGZvciBmYXN0IGFuZCBhY2N1cmF0ZSBjdXJyZW5jeSBjb252ZXJzaW9uLiBJdCBhbGxvd3MgdXNlcnMgdG8gc2VhcmNoIGZvciBhbmQgc2VsZWN0IGN1cnJlbmNpZXMgZnJvbSBhbiBleHRlbnNpdmUgbGlzdCB3aXRoIGVhc2UuIFRoZSBhcHAgaXMgb3B0aW1pemVkIGZvciBib3RoIGRlc2t0b3AgYW5kIG1vYmlsZSB1c2UsIG9mZmVyaW5nIGEgc3VwZXIgcXVpY2sgYW5kIHJlc3BvbnNpdmUgZXhwZXJpZW5jZS4gSXQgZmVhdHVyZXMgcmVhbC10aW1lIGV4Y2hhbmdlIHJhdGVzIGFuZCBmb3JtYXRzIGlucHV0IHZhbHVlcyBpbnRvIHRob3VzYW5kcywgbWlsbGlvbnMsIGJpbGxpb25zLCBldGMuLCBmb3IgZWFzeSByZWFkaW5nIGFuZCBjb3VudGluZywgd2l0aCB0aGUgc2FtZSBmb3JtYXR0aW5nIGFwcGxpZWQgdG8gdGhlIG91dHB1dCB2YWx1ZS4gUGVyZmVjdCBmb3IgYW55b25lIG5lZWRpbmcgcmVsaWFibGUgY3VycmVuY3kgY29udmVyc2lvbiBvbiB0aGUgZ28uXCIsXHJcbiAgICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvZHRwTWZ0a0MvY3JhaXlvbi0wMDEwNDEtc2xlZWstZmluYW5jZS1hcHAtbG9nby1vbi1hLXZpYnJhbnQtYmx1ZS1iYWNrZ3JvdW5kLnBuZ1wiLFxyXG4gICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FiZHVyZWhtYW43NjAvY3VycmVuY3ktY29udmVydGVyLXJlYWwtdGltZVwiLFxyXG4gICAgICAgICAgXCJsaXZlRGVtb0xpbmtcIjogXCJodHRwczovL2N1cnJlbmN5LWNvbnZlcnRlci1yZWFsLXRpbWUubmV0bGlmeS5hcHAvXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFwidGl0bGVcIjogXCJKYXZhU2NyaXB0IFF1aXogR2FtZSBcdUQ4M0NcdURGOTNcIixcclxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBIHNpbmdsZS1wYWdlIHdlYiBhcHBsaWNhdGlvbiBidWlsdCB1c2luZyBvbmx5IEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHQgdG8gdGVzdCBhbmQgZW5oYW5jZSB5b3VyIGtub3dsZWRnZSB0aHJvdWdoIGludGVyYWN0aXZlIHF1aXp6ZXMuIFNlbGVjdCBiZXR3ZWVuIGJhc2ljIGFuZCBhZHZhbmNlZCBxdWl6emVzLCByZWNlaXZlIHJlYWwtdGltZSBmZWVkYmFjaywgYW5kIHZpZXcgZGV0YWlsZWQgcmVzdWx0cy4gRmVhdHVyZXMgaW5jbHVkZSBkeW5hbWljIHF1aXogc2VsZWN0aW9uLCBpbnRlcmFjdGl2ZSBpbnRlcmZhY2UsIHRpbWVyIGZ1bmN0aW9uYWxpdHksIGRldGFpbGVkIHJlc3VsdHMsIHJlc3BvbnNpdmUgZGVzaWduLCBhbmQgYWNjZXNzIHRvIHByZXZpb3VzIHJlY29yZHMuXCIsXHJcbiAgICAgICAgICBcImltYWdlVXJsXCI6IFwiaHR0cHM6Ly9pLnBvc3RpbWcuY2MvUEowYnM2d1AvUkRSRk8wLUljbS1Ia3Vqci1Pai1UTjFvLTEtYnA3azQuanBnXCIsICAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIFVSTCBmb3IgdGhlIHF1aXogZ2FtZVxyXG4gICAgICAgICAgXCJsaW5rXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2FiZHVyZWhtYW43NjAvamF2YXNjcmlwdC1xdWl6LWdhbWVcIixcclxuICAgICAgICAgIFwibGl2ZURlbW9MaW5rXCI6IFwiaHR0cHM6Ly9qYXZhc2NyaXB0LXF1aXotZ2FtZS1mb3ItbGVhcm5lcnMubmV0bGlmeS5hcHAvXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNlbzoge1xyXG4gICAgdGl0bGU6ICdQb3J0Zm9saW8gb2YgQWJkdXIgUmFobWFuJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIGltYWdlVVJMOiAnJyxcclxuICB9LFxyXG4gIHNvY2lhbDoge1xyXG4gICAgd2Vic2l0ZTogJ2h0dHBzOi8vd3d3LmFiZHVycmFobWFucG9ydGZvbGlvc2l0ZS5jb20nLFxyXG4gICAgbGlua2VkaW46ICdBYmR1ci1SYWhtYW4nLFxyXG4gICAgZmFjZWJvb2s6ICcnLFxyXG4gICAgc3RhY2tvdmVyZmxvdzogJycsIC8vIGV4YW1wbGU6ICcxL2plZmYtYXR3b29kJ1xyXG5cclxuICAgIHBob25lOiAnKzkyLTMwMjk0Mzc5MzQnLFxyXG4gICAgZW1haWw6ICdBYmR1cmVobWFua2hhbjc2MEBnbWFpbC5jb20nLFxyXG4gICAgdGVsZWdyYW06ICdhYmR1cnJhaG1hbjIyMzInIC8vIEV4YW1wbGUgbGluayBmb3IgRml2ZXJyXHJcbiAgfSxcclxuICByZXN1bWU6IHtcclxuICAgIGZpbGVVcmw6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vdWM/ZXhwb3J0PWRvd25sb2FkJmlkPTFMUTVVNUlfZ0swdWRQY1VDTWFlbkc4Nl81YndrQUFUNScsXHJcbiAgfSxcclxuICBcclxuICBza2lsbHM6IFtcclxuICAgICdIVE1MJyxcclxuICAgICdKYXZhU2NyaXB0JyxcclxuICAgICdSZWFjdC5qcycsXHJcbiAgICAnTm9kZS5qcycsXHJcbiAgICAnRXhwcmVzcy5qcycsXHJcbiAgICAnTW9uZ29kYicsXHJcbiAgICAnTXlTUUwnLFxyXG4gICAgJ1NRTGl0ZScsXHJcbiAgICAnRmxhc2snLFxyXG4gICAgJ0dpdCcsXHJcbiAgICAnQ1NTJyxcclxuICAgICdCb290c3RyYXAnLFxyXG4gICAgJ1RhaWx3aW5kJyxcclxuICAgICdFbmdsaXNoJyxcclxuICAgICdHZXJtYW4nXHJcbiAgXSxcclxuICBleHBlcmllbmNlczogW1xyXG4gICAge1xyXG4gICAgICBjb21wYW55OiAnVmVydGV4U29mdCBTTUMgKHZpc2l0KScsXHJcbiAgICAgIHBvc2l0aW9uOiAnSW50ZXJuc2hpcCcsXHJcbiAgICAgIGZyb206ICdOb3ZlbWJlciAyMDIzJyxcclxuICAgICAgdG86ICdBcHJpbCAyMDI0JyxcclxuICAgICAgY29tcGFueUxpbms6ICdodHRwczovL3ZlcnRleHNvZnRzbWMuY29tJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdDb21wbGV0ZWQgYSA2LW1vbnRoIGludGVybnNoaXAgaW4gd2ViIGRldmVsb3BtZW50IGZvY3VzaW5nIG9uIGFkdmFuY2VkIFJlYWN0LmpzLiBEZXZlbG9wZWQgcmVzcG9uc2l2ZSB3ZWIgYXBwbGljYXRpb25zIHdpdGggSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBhbmQgUmVhY3QuanMuIENvbGxhYm9yYXRlZCBvbiBkeW5hbWljIGNvbXBvbmVudHMsIG1hbmFnZWQgdmVyc2lvbiBjb250cm9sIHdpdGggR2l0LCBhbmQgZW5nYWdlZCBpbiB0aGUgZnVsbCBzb2Z0d2FyZSBkZXZlbG9wbWVudCBsaWZlY3ljbGUgaW5jbHVkaW5nIHRlc3RpbmcgYW5kIGRlcGxveW1lbnQuJyxcclxuICAgICAgY2VydGlmaWNhdGVMaW5rOiB7XHJcbiAgICAgICAgdGV4dDogJ1ZpZXcgSW50ZXJuc2hpcCBDZXJ0aWZpY2F0ZScsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xTkQ0TEdyd2R2SEdMbWxNb2JUVHlZRlEtWEdNaUQ2cngvdmlldz91c3A9ZHJpdmVfbGluaydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29tcGFueTogJ1NlbGYtZW1wbG95ZWQnLFxyXG4gICAgICBwb3NpdGlvbjogJ0ZyZWVsYW5jZXInLFxyXG4gICAgICBmcm9tOiAnTWF5IDIwMjQnLFxyXG4gICAgICB0bzogJ1ByZXNlbnQnLFxyXG4gICAgICBjb21wYW55TGluazogJycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnRnJlZWxhbmNlIHdlYiBkZXZlbG9wZXIgc3BlY2lhbGl6aW5nIGluIFJlYWN0LmpzLCBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LiBQcm92aWRlcyBmdWxsLXN0YWNrIGRldmVsb3BtZW50IHNlcnZpY2VzLCBpbmNsdWRpbmcgQVBJIGludGVncmF0aW9uIGFuZCB3ZWJzaXRlIG9wdGltaXphdGlvbiBmb3Igc3BlZWQgYW5kIFNFTy4gRGVsaXZlcnMgc2NhbGFibGUgYW5kIGhpZ2gtcXVhbGl0eSB3ZWIgc29sdXRpb25zIHdoaWxlIHN0YXlpbmcgdXBkYXRlZCB3aXRoIGluZHVzdHJ5IHRyZW5kcy4nXHJcbiAgICB9XHJcbiAgXSxcclxuXHJcbiAgY2VydGlmaWNhdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0dvb2dsZSBTb2Z0IFNraWxscyBQcm9ncmFtIChjbGljayB0byB2aWV3KScsXHJcbiAgICAgIGJvZHk6IGBcclxuICBBd2FyZGVkIGZvciBjb21wbGV0aW5nIHRoZSBHb29nbGUgU29mdCBTa2lsbHMgUHJvZ3JhbSwgd2hpY2ggY292ZXJzIFByb2Zlc3Npb25hbCBDb21tdW5pY2F0aW9uLCBQZXJzb25hbCBCcmFuZGluZywgQ3JpdGljYWwgVGhpbmtpbmcsIGFuZCBUaW1lIE1hbmFnZW1lbnQsIHRhdWdodCBieSBHb29nbGUgZXhwZXJ0cy5cclxuYCxcclxuICAgICAgeWVhcjogJ0p1bHkgMjAyNCcsXHJcbiAgICAgIGxpbms6ICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFFWFZXNllhZWpJbnJCTDRZeFJqdlZYbDVtc25ab2F5cS92aWV3P3VzcD1kcml2ZV9saW5rJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdIVE1MIENlcnRpZmljYXRpb24gKGNsaWNrIHRvIHZpZXcpJyxcclxuICAgICAgYm9keTogJ0F3YXJkZWQgYnkgQ29kZUxpYmVyIGZvciBjb21wbGV0aW5nIHRoZSBIVE1MIGNvdXJzZS4nLFxyXG4gICAgICB5ZWFyOiAnMjAyNCcsXHJcbiAgICAgIGxpbms6ICdodHRwczovL2NvZGVsaWJlci5jb20vY2VydGlmaWNhdGVzL20wMnNvdjV6ZHl4NjAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ0NTUyBDZXJ0aWZpY2F0aW9uIChjbGljayB0byB2aWV3KScsXHJcbiAgICAgIGJvZHk6ICdBd2FyZGVkIGJ5IENvZGVMaWJlciBmb3IgY29tcGxldGluZyB0aGUgQ1NTIGNvdXJzZS4nLFxyXG4gICAgICB5ZWFyOiAnMjAyNCcsXHJcbiAgICAgIGxpbms6ICdodHRwczovL2NvZGVsaWJlci5jb20vY2VydGlmaWNhdGVzL20wMnNvdjV6ZHl4NjAxJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdKYXZhU2NyaXB0IENlcnRpZmljYXRpb24gKGNsaWNrIHRvIHZpZXcpJyxcclxuICAgICAgYm9keTogJ0F3YXJkZWQgYnkgQ29kZUxpYmVyIGZvciBjb21wbGV0aW5nIHRoZSBKYXZhU2NyaXB0IGNvdXJzZS4nLFxyXG4gICAgICB5ZWFyOiAnMjAyNCcsXHJcbiAgICAgIGxpbms6ICdodHRwczovL2NvZGVsaWJlci5jb20vY2VydGlmaWNhdGVzL20wMnNvdjV6ZHl4NjAyJyxcclxuICAgIH0sXHJcblxyXG4gIF0sXHJcblxyXG5cclxuICBlZHVjYXRpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIGluc3RpdHV0aW9uOiAnPGEgaHJlZj1cImh0dHBzOi8vdXN3YXQuZWR1LnBrXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlVuaXZlcnNpdHkgb2YgU3dhdCAoVmlzaXQgV2Vic2l0ZSk8L2E+JyxcclxuICAgICAgZGVncmVlOiAnQlMgU29mdHdhcmUgRW5naW5lZXJpbmcnLFxyXG4gICAgICBmcm9tOiAnMjAxOScsXHJcbiAgICAgIHRvOiAnMjAyMycsXHJcbiAgICAgIGNncGE6ICczLjAgb3V0IG9mIDQnXHJcbiAgICB9XHJcbiAgXVxyXG4gICxcclxuICBwdWJsaWNhdGlvbnM6IFtcclxuXHJcblxyXG4gIF0sXHJcbiAgLy8gRGlzcGxheSBhcnRpY2xlcyBmcm9tIHlvdXIgbWVkaXVtIG9yIGRldiBhY2NvdW50LiAoT3B0aW9uYWwpXHJcbiAgYmxvZzoge1xyXG4gICAgc291cmNlOiAnZGV2JywgLy8gbWVkaXVtIHwgZGV2XHJcbiAgICB1c2VybmFtZTogJycsIC8vIHRvIGhpZGUgYmxvZyBzZWN0aW9uLCBrZWVwIGl0IGVtcHR5XHJcbiAgICBsaW1pdDogMiwgLy8gSG93IG1hbnkgYXJ0aWNsZXMgdG8gZGlzcGxheS4gTWF4IGlzIDEwLlxyXG4gIH0sXHJcbiAgZ29vZ2xlQW5hbHl0aWNzOiB7XHJcbiAgICBpZDogJ0ctMDdaS045NkVFMycsIC8vIEdBMyB0cmFja2luZyBpZC9HQTQgdGFnIGlkIFVBLVhYWFhYWFhYWC1YIHwgRy1YWFhYWFhYWFhYXHJcbiAgfSxcclxuICBcclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgZGVmYXVsdFRoZW1lOiAnc3ludGh3YXZlJyxcclxuXHJcbiAgICAvLyBIaWRlcyB0aGUgc3dpdGNoIGluIHRoZSBuYXZiYXJcclxuICAgIC8vIFVzZWZ1bCBpZiB5b3Ugd2FudCB0byBzdXBwb3J0IGEgc2luZ2xlIGNvbG9yIG1vZGVcclxuICAgIGRpc2FibGVTd2l0Y2g6IGZhbHNlLFxyXG5cclxuICAgIC8vIFNob3VsZCB1c2UgdGhlIHByZWZlcnMtY29sb3Itc2NoZW1lIG1lZGlhLXF1ZXJ5LFxyXG4gICAgLy8gdXNpbmcgdXNlciBzeXN0ZW0gcHJlZmVyZW5jZXMsIGluc3RlYWQgb2YgdGhlIGhhcmRjb2RlZCBkZWZhdWx0VGhlbWVcclxuICAgIHJlc3BlY3RQcmVmZXJzQ29sb3JTY2hlbWU6IGZhbHNlLFxyXG5cclxuICAgIC8vIERpc3BsYXkgdGhlIHJpbmcgaW4gUHJvZmlsZSBwaWN0dXJlXHJcbiAgICBkaXNwbGF5QXZhdGFyUmluZzogdHJ1ZSxcclxuXHJcbiAgICAvLyBBdmFpbGFibGUgdGhlbWVzLiBUbyByZW1vdmUgYW55IHRoZW1lLCBleGNsdWRlIGZyb20gaGVyZS5cclxuICAgIHRoZW1lczogW1xyXG4gICAgICAnbGlnaHQnLFxyXG4gICAgICAnZGFyaycsXHJcbiAgICAgICdjdXBjYWtlJyxcclxuICAgICAgJ2J1bWJsZWJlZScsXHJcbiAgICAgICdlbWVyYWxkJyxcclxuICAgICAgJ2NvcnBvcmF0ZScsXHJcbiAgICAgICdzeW50aHdhdmUnLFxyXG4gICAgICAncmV0cm8nLFxyXG4gICAgICAnY3liZXJwdW5rJyxcclxuICAgICAgJ3ZhbGVudGluZScsXHJcbiAgICAgICdoYWxsb3dlZW4nLFxyXG4gICAgICAnZ2FyZGVuJyxcclxuICAgICAgJ2ZvcmVzdCcsXHJcbiAgICAgICdhcXVhJyxcclxuICAgICAgJ2xvZmknLFxyXG4gICAgICAncGFzdGVsJyxcclxuICAgICAgJ2ZhbnRhc3knLFxyXG4gICAgICAnd2lyZWZyYW1lJyxcclxuICAgICAgJ2JsYWNrJyxcclxuICAgICAgJ2x1eHVyeScsXHJcbiAgICAgICdkcmFjdWxhJyxcclxuICAgICAgJ2NteWsnLFxyXG4gICAgICAnYXV0dW1uJyxcclxuICAgICAgJ2J1c2luZXNzJyxcclxuICAgICAgJ2FjaWQnLFxyXG4gICAgICAnbGVtb25hZGUnLFxyXG4gICAgICAnbmlnaHQnLFxyXG4gICAgICAnY29mZmVlJyxcclxuICAgICAgJ3dpbnRlcicsXHJcbiAgICAgICdkaW0nLFxyXG4gICAgICAnbm9yZCcsXHJcbiAgICAgICdzdW5zZXQnLFxyXG4gICAgICAncHJvY3lvbicsXHJcbiAgICBdLFxyXG5cclxuICAgIC8vIEN1c3RvbSB0aGVtZSwgYXBwbGllZCB0byBgcHJvY3lvbmAgdGhlbWVcclxuICAgIGN1c3RvbVRoZW1lOiB7XHJcbiAgICAgIHByaW1hcnk6ICcjZmMwNTViJyxcclxuICAgICAgc2Vjb25kYXJ5OiAnIzIxOWFhZicsXHJcbiAgICAgIGFjY2VudDogJyNlOGQwM2EnLFxyXG4gICAgICBuZXV0cmFsOiAnIzJBMjczMCcsXHJcbiAgICAgICdiYXNlLTEwMCc6ICcjRTNFM0VEJyxcclxuICAgICAgJy0tcm91bmRlZC1ib3gnOiAnM3JlbScsXHJcbiAgICAgICctLXJvdW5kZWQtYnRuJzogJzNyZW0nLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICAvLyBPcHRpb25hbCBGb290ZXIuIFN1cHBvcnRzIHBsYWluIHRleHQgb3IgSFRNTC5cclxuICBmb290ZXI6IGBNYWRlIHdpdGggPGEgXHJcbiAgICAgIGNsYXNzPVwidGV4dC1wcmltYXJ5XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hYmR1cmVobWFuNzYwL0FiZHVyUmFobWFuLWdpdFByb2ZpbGVcIlxyXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgID5HaXRQcm9maWxlPC9hPiBhbmQgXHUyNzY0XHVGRTBGYCxcclxuXHJcbiAgZW5hYmxlUFdBOiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ09ORklHO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStULFNBQVMsb0JBQW9CO0FBQzVWLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7OztBQ0F4QixJQUFNLFNBQVM7QUFBQSxFQUNiLFFBQVE7QUFBQSxJQUNOLFVBQVU7QUFBQTtBQUFBLEVBQ1o7QUFBQSxFQUVBLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxJQUNSLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQTtBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBO0FBQUEsTUFDTixXQUFXO0FBQUEsUUFDVCxRQUFRO0FBQUE7QUFBQSxRQUNSLE9BQU87QUFBQTtBQUFBLFFBQ1AsU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBO0FBQUEsVUFDUCxVQUFVLENBQUM7QUFBQTtBQUFBLFFBQ2I7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQSxRQUVOLFVBQVUsQ0FBQyx3QkFBd0I7QUFBQTtBQUFBLE1BQ3JDO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsUUFBUTtBQUFBO0FBQUEsTUFFUixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsZUFBZTtBQUFBLFVBQ2YsWUFBWTtBQUFBLFVBQ1osUUFBUTtBQUFBLFVBQ1IsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxRQUdBO0FBQUEsVUFDRSxT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QSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBR0EsYUFBYTtBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osaUJBQWlCO0FBQUEsTUFDakIsaUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTVIsV0FBVztBQUNiO0FBRUEsSUFBTyw0QkFBUTs7O0FEaFBmLFNBQVMsd0JBQXdCO0FBR2pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU0sMEJBQU8sUUFBUTtBQUFBLEVBQ3JCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGlCQUFpQjtBQUFBLE1BQ2YsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFVBQ0osV0FBVywwQkFBTyxJQUFJO0FBQUEsVUFDdEIsaUJBQWlCLDBCQUFPLElBQUk7QUFBQSxVQUM1QixjQUFjLDBCQUFPLElBQUk7QUFBQSxRQUMzQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELEdBQUksMEJBQU8sWUFDUDtBQUFBLE1BQ0UsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFVBQ1Asa0JBQWtCO0FBQUEsUUFDcEI7QUFBQSxRQUNBLGVBQWUsQ0FBQyxVQUFVO0FBQUEsUUFDMUIsVUFBVTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sWUFBWTtBQUFBLFVBQ1osYUFBYTtBQUFBLFVBQ2IsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNILElBQ0EsQ0FBQztBQUFBLEVBQ1A7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
