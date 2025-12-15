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
            // Unit 1: Introduction to Cognitive Psychology
            'mpc-001/block-1/cognitive-psychology-introduction',
            'mpc-001/block-1/research-methods-cognitive-psychology',
            'mpc-001/block-1/history-cognitive-psychology',
            'mpc-001/block-1/key-issues-cognitive-psychology',
            {
              type: 'category',
              label: 'Memory Models',
              items: [
                'mpc-001/block-1/information-processing-model',
                'mpc-001/block-1/working-memory-model',
                'mpc-001/block-1/levels-of-processing',
                'mpc-001/block-1/encoding-storage-retrieval',
              ],
            },
            // Unit 2: Information Processing in Learning and Memory
            'mpc-001/block-1/learning-memory-systems',
            'mpc-001/block-1/information-processing-theory',
            'mpc-001/block-1/bloom-sternberg-theories',
            
            // Unit 3: Neuropsychological Basis of Learning and Memory
            'mpc-001/block-1/memory-brain-systems-amnesia',
            'mpc-001/block-1/memory-consolidation-hippocampus',
            'mpc-001/block-1/temporal-lobe-animal-memory-models',
            'mpc-001/block-1/brain-imaging-memory-processes',
            'mpc-001/block-1/cellular-molecular-memory-mechanisms',
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
