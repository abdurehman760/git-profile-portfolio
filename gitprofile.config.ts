// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'abdurehman760', // Your GitHub org/user name. (This is the only required config)
  },

  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects ( Synced from GitHub )',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['abdurehman760/currency-converter-real-time']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['abdurehman760/Edu-site'], // List of repository names to display. example: ['abdurehman760/currency-converter-real-time']
      },
    },
    external: {
      header: 'Recent & Live Favorite Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          "title": "GitProfile - Portfolio Site",
          "description": "GitProfile is an intuitive, automatic portfolio builder for GitHub users, allowing you to create a personalized portfolio effortlessly. Just enter your GitHub username, and GitProfile generates a beautiful portfolio site with your projects, skills, and more. With over 33 themes, built-in SEO, and PWA support, GitProfile ensures your portfolio is polished and professional. Google Analytics integration is included to help track user interactions and provide insights into how visitors engage with your portfolio. Easily deploy your site to GitHub Pages in minutes, and start showcasing your work to the world.",
          "imageUrl": "https://i.postimg.cc/JzFxCcfw/08dbb2a8-0778-4913-96c4-0a9c28854a60.jpg",
          "link": "https://github.com/abdurehman760/git-profile-portfolio",
          "liveDemoLink": "https://abdurrahman-git-profile-portfolio.netlify.app/"
        }
        
        ,
        {
          "title": "Currency Converter App",
          "description": "The Currency Converter App is a modern React-based application designed for fast and accurate currency conversion. It allows users to search for and select currencies from an extensive list with ease. The app is optimized for both desktop and mobile use, offering a super quick and responsive experience. It features real-time exchange rates and formats input values into thousands, millions, billions, etc., for easy reading and counting, with the same formatting applied to the output value. Perfect for anyone needing reliable currency conversion on the go.",
          "imageUrl": "https://i.postimg.cc/dtpMftkC/craiyon-001041-sleek-finance-app-logo-on-a-vibrant-blue-background.png",
          "link": "https://github.com/abdurehman760/currency-converter-real-time",
          "liveDemoLink": "https://currency-converter-real-time.netlify.app/"
        },
        {
          "title": "JavaScript Quiz Game 🎓",
          "description": "A single-page web application built using only HTML, CSS, and JavaScript to test and enhance your knowledge through interactive quizzes. Select between basic and advanced quizzes, receive real-time feedback, and view detailed results. Features include dynamic quiz selection, interactive interface, timer functionality, detailed results, responsive design, and access to previous records.",
          "imageUrl": "https://i.postimg.cc/PJ0bs6wP/RDRFO0-Icm-Hkujr-Oj-TN1o-1-bp7k4.jpg",  // Replace with actual image URL for the quiz game
          "link": "https://github.com/abdurehman760/javascript-quiz-game",
          "liveDemoLink": "https://javascript-quiz-game-for-learners.netlify.app/"
        }

      ],
    },
  },
  seo: {
    title: 'Portfolio of Abdur Rahman',
    description: '',
    imageURL: '',
  },
  social: {
    website: 'https://www.abdurrahmanportfoliosite.com',
    linkedin: 'Abdur-Rahman',
    facebook: '',
    stackoverflow: '', // example: '1/jeff-atwood'

    phone: '+92-3029437934',
    email: 'Abdurehmankhan760@gmail.com',
    telegram: 'abdurrahman2232' // Example link for Fiverr... 
  },
  resume: {
    fileUrl: 'https://drive.google.com/uc?export=download&id=1LQ5U5I_gK0udPcUCMaenG86_5bwkAAT5',
  },
  
  skills: [
    'HTML',                   // Tech
  'JavaScript',             // Tech
  'React.js',               // Tech
  'Node.js',                // Tech
  'Express.js',             // Tech
  'MongoDB',                // Tech
  'MySQL',                  // Tech
  'SQLite',                 // Tech
  'Flask',                  // Tech
  'Git',                    // Tech
  'CSS',                    // Tech
  'Bootstrap',              // Tech
  'Tailwind',               // Tech
  'English (language)',     // Non-tech
  'German (language)'       // Non-tech
  ],
  experiences: [
    {
      company: 'VertexSoft SMC (visit)',
      position: 'Internship',
      from: 'November 2023',
      to: 'April 2024',
      companyLink: 'https://vertexsoftsmc.com',
      description: 'Completed a 6-month internship in web development focusing on advanced React.js. Developed responsive web applications with HTML, CSS, JavaScript, and React.js. Collaborated on dynamic components, managed version control with Git, and engaged in the full software development lifecycle including testing and deployment.',
      certificateLink: {
        text: 'View Internship Certificate',
        url: 'https://drive.google.com/file/d/1ND4LGrwdvHGLmlMobTTyYFQ-XGMiD6rx/view?usp=drive_link'
      }
    },
    {
      company: 'Self-employed',
      position: 'Freelancer',
      from: 'May 2024',
      to: 'Present',
      companyLink: '',
      description: 'Freelance web developer specializing in React.js, HTML, CSS, and JavaScript. Provides full-stack development services, including API integration and website optimization for speed and SEO. Delivers scalable and high-quality web solutions while staying updated with industry trends.'
    }
  ],

  certifications: [
    {
      name: 'Google Soft Skills Program (click to view)',
      body: `
  Awarded for completing the Google Soft Skills Program, which covers Professional Communication, Personal Branding, Critical Thinking, and Time Management, taught by Google experts.
`,
      year: 'July 2024',
      link: 'https://drive.google.com/file/d/1EXVW6YaejInrBL4YxRjvVXl5msnZoayq/view?usp=drive_link',
    },
    {
      name: 'HTML Certification (click to view)',
      body: 'Awarded by CodeLiber for completing the HTML course.',
      year: '2024',
      link: 'https://codeliber.com/certificates/m02sov5zdyx60',
    },
    {
      name: 'CSS Certification (click to view)',
      body: 'Awarded by CodeLiber for completing the CSS course.',
      year: '2024',
      link: 'https://codeliber.com/certificates/m02sov5zdyx601',
    },
    {
      name: 'JavaScript Certification (click to view)',
      body: 'Awarded by CodeLiber for completing the JavaScript course.',
      year: '2024',
      link: 'https://codeliber.com/certificates/m02sov5zdyx602',
    },

  ],


  educations: [
    {
      institution: '<a href="https://uswat.edu.pk" target="_blank" rel="noopener noreferrer">University of Swat (Visit Website)</a>',
      degree: 'BS Software Engineering',
      from: '2019',
      to: '2023',
      cgpa: '3.0 out of 4'
    }
  ]
  ,
  publications: [


  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-07ZKN96EE3', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  
  themeConfig: {
    defaultTheme: 'synthwave',

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
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/abdurehman760/AbdurRahman-gitProfile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
