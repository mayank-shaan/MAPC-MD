import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MAPC Study Portal',
  tagline: 'Master of Arts in Psychology - IGNOU Study Materials',
  favicon: 'img/favicon.ico',
  url: 'https://mapc-study.vercel.app', // Update with your domain
  baseUrl: '/',
  organizationName: 'msd', // Your GitHub username
  projectName: 'mapc-study',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Docs at root
          editUrl: 'https://github.com/yourusername/mapc-study/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO
      metadata: [
        {name: 'keywords', content: 'IGNOU, MAPC, Psychology, Study Materials, MA Psychology'},
        {name: 'description', content: 'Comprehensive study portal for IGNOU MA in Psychology (MAPC) program'},
      ],
      
      // Announcement bar
      announcementBar: {
        id: 'work_in_progress',
        content:
          '🚧 This portal is under active development. Content is being added regularly. 🚧',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      
      navbar: {
        title: 'MAPC Study Portal',
        logo: {
          alt: 'MAPC Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Study Materials',
          },
          {
            type: 'dropdown',
            label: 'Courses',
            position: 'left',
            items: [
              {label: 'MPC-001: Cognitive Psychology', to: '/mpc-001-cognitive'},
              {label: 'MPC-002: Life Span Psychology', to: '/mpc-002-lifespan'},
              {label: 'MPC-003: Personality Theories', to: '/mpc-003-personality'},
              {label: 'MPC-004: Social Psychology', to: '/mpc-004-social'},
              {label: 'MPC-005: Research Methods', to: '/mpc-005-research'},
              {label: 'MPC-006: Statistics', to: '/mpc-006-statistics'},
              {label: 'MPCL-007: Practicals', to: '/mpcl-007-practicals'},
            ],
          },
          {
            href: 'https://github.com/yourusername/mapc-study',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'First Year',
            items: [
              {label: 'Cognitive Psychology', to: '/mpc-001-cognitive'},
              {label: 'Life Span Psychology', to: '/mpc-002-lifespan'},
              {label: 'Personality Theories', to: '/mpc-003-personality'},
              {label: 'Social Psychology', to: '/mpc-004-social'},
            ],
          },
          {
            title: 'Methods & Statistics',
            items: [
              {label: 'Research Methods', to: '/mpc-005-research'},
              {label: 'Statistics', to: '/mpc-006-statistics'},
              {label: 'Practicals', to: '/mpcl-007-practicals'},
            ],
          },
          {
            title: 'Resources',
            items: [
              {label: 'IGNOU Website', href: 'https://ignou.ac.in'},
              {label: 'eGyanKosh', href: 'https://egyankosh.ac.in'},
              {label: 'Student Portal', href: 'https://ignouadmission.samarth.edu.in'},
            ],
          },
        ],
        copyright: `Educational content for IGNOU MAPC students. Original materials © IGNOU. Built with Docusaurus.`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      
      // Search - Will be configured later with Algolia
      algolia: {
        appId: 'YOUR_APP_ID', // To be configured
        apiKey: 'YOUR_SEARCH_API_KEY', // To be configured
        indexName: 'mapc-study',
        contextualSearch: true,
        searchPagePath: 'search',
      },
      
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      
      // Mermaid theme configuration
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
    }),
};

export default config;
