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
            'mpc-001-cognitive/block-1/introduction',
            'mpc-001-cognitive/block-1/attention',
            'mpc-001-cognitive/block-1/perception',
            'mpc-001-cognitive/block-1/pattern-recognition',
          ],
        },
        {
          type: 'category',
          label: 'Block 2: Memory Systems',
          items: [
            'mpc-001-cognitive/block-2/memory-models',
            'mpc-001-cognitive/block-2/working-memory',
            'mpc-001-cognitive/block-2/long-term-memory',
            'mpc-001-cognitive/block-2/forgetting',
          ],
        },
        {
          type: 'category',
          label: 'Block 3: Learning',
          items: [
            'mpc-001-cognitive/block-3/classical-conditioning',
            'mpc-001-cognitive/block-3/operant-conditioning',
            'mpc-001-cognitive/block-3/observational-learning',
            'mpc-001-cognitive/block-3/cognitive-learning',
          ],
        },
        {
          type: 'category',
          label: 'Block 4: Advanced Topics',
          items: [
            'mpc-001-cognitive/block-4/language',
            'mpc-001-cognitive/block-4/problem-solving',
            'mpc-001-cognitive/block-4/decision-making',
            'mpc-001-cognitive/block-4/metacognition',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'MPC-002: Life Span Psychology',
      link: {
        type: 'doc',
        id: 'mpc-002-lifespan/index',
      },
      items: [
        {
          type: 'category',
          label: 'Block 1: Introduction & Methods',
          items: [],
        },
        {
          type: 'category',
          label: 'Block 2: Early Development',
          items: [],
        },
        {
          type: 'category',
          label: 'Block 3: Adolescence & Adulthood',
          items: [],
        },
        {
          type: 'category',
          label: 'Block 4: Aging & Death',
          items: [],
        },
      ],
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
