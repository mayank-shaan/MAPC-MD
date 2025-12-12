/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'MPC-001: Cognitive Psychology',
      link: {
        type: 'doc',
        id: 'mpc-001-cognitive/index',
      },
      items: [
        {
          type: 'category',
          label: 'Block 1: Foundations',
          items: [
            'mpc-001/block-1/cognitive-psychology-introduction',
            'mpc-001/block-1/research-methods-cognitive-psychology',
            'mpc-001/block-1/history-cognitive-psychology',
            'mpc-001/block-1/key-issues-cognitive-psychology',
          ],
        },
        // Block 2-4 will be added as content is created
      ],
    },
    {
      type: 'category',
      label: 'MPC-002: Life Span Psychology',
      link: {
        type: 'doc',
        id: 'mpc-002-lifespan/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'MPC-003: Personality Theories',
      link: {
        type: 'doc',
        id: 'mpc-003-personality/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'MPC-004: Social Psychology',
      link: {
        type: 'doc',
        id: 'mpc-004-social/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'MPC-005: Research Methods',
      link: {
        type: 'doc',
        id: 'mpc-005-research/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'MPC-006: Statistics',
      link: {
        type: 'doc',
        id: 'mpc-006-statistics/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'MPCL-007: Practicals',
      link: {
        type: 'doc',
        id: 'mpcl-007-practicals/index',
      },
      items: [],
    },
  ],
};

export default sidebars;
