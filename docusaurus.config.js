import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MAPC Study Portal',
  tagline: 'Master of Arts in Psychology - IGNOU Study Materials',
  favicon: 'img/favicon.ico',
  url: 'https://mapc-msd.vercel.app', // Update with your domain
  baseUrl: '/',
  organizationName: 'msd', // Your GitHub username
  projectName: 'mapc-msd',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid',
    ['@easyops-cn/docusaurus-search-local', {
      hashed: true,
      language: ['en'],
      highlightSearchTermsOnTargetPage: true,
      explicitSearchResultPath: true,
      docsRouteBasePath: '/',
      indexBlog: false,
    }],
  ],
  
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
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
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
        {name: 'algolia-site-verification', content: '6D11F68F1FB48D43'}
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
        title: '',
        logo: {
          alt: 'MAPC Logo',
          src: 'logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Home',
          },
          {
            type: 'dropdown',
            label: 'Navigate',
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
          // {
          //   href: 'https://github.com/yourusername/mapc-study',
          //   label: 'GitHub',
          //   position: 'right',
          // },
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
      
      // Search - Using local search as fallback
      // Algolia config (uncomment when approved):
      // algolia: {
      //   appId: 'RKQ6EQ5FLG',
      //   apiKey: '04020ac97a42ce0a6e897b87778c38ca',
      //   indexName: 'mapc_msd_vercel_app_88ue9lav0f_pages',
      //   contextualSearch: true,
      //   searchPagePath: 'search',
      // },
      
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
