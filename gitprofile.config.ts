// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'abdurehman760', // Your GitHub org/user name. (This is the only required config)
  },

  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
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
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ariful Alam',
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
    telegram: 'abdurrahman2232' // Example link for Fiverr
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'HTML',
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'Mongodb',
    'MySQL',
    'SQLite',
    'Flask',
    'Git',
    'CSS',
    'Bootstrap',
    'Tailwind',
    'English',
    'German'
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
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
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
