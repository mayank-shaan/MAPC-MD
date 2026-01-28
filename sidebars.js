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
            
            // Unit 4: Models of Information Processing
            'mpc-001/block-1/waugh-norman-dual-memory-model',
            'mpc-001/block-1/atkinson-shiffrin-stage-model',
            'mpc-001/block-1/levels-of-processing-craik-lockhart',
            'mpc-001/block-1/self-reference-effect',
            'mpc-001/block-1/connectionist-pdp-model-rumelhart-mcclelland',
          ],
        },
        {
          type: 'category',
          label: 'Block 2: Memory Systems',
          items: [
            // Unit 1: Intelligence Theories - G and S Factor
            'mpc-001/block-2/nature-intelligence-definitions',
            'mpc-001/block-2/spearman-two-factor-theory',
            'mpc-001/block-2/critical-appraisals-spearman-theory',
            'mpc-001/block-2/pass-theory-jp-das',
            'mpc-001/block-2/intelligence-theories-integration-summary',
            
            // Unit 2: Multiple Theories of Intelligence
            'mpc-001/block-2/guilford-structure-of-intellect-theory',
            'mpc-001/block-2/gardner-multiple-intelligences-theory',
            'mpc-001/block-2/sternberg-triarchic-theory-intelligence',
            'mpc-001/block-2/comparing-intelligence-theories-guilford-gardner-sternberg',
            'mpc-001/block-2/multiple-intelligence-theories-summary-integration',
            
            // Unit 3: Intelligence Testing
            'mpc-001/block-2/theoretical-background-intelligence-measurement',
            'mpc-001/block-2/history-intelligence-testing',
            'mpc-001/block-2/stanford-binet-intelligence-scales',
            'mpc-001/block-2/wechsler-intelligence-scales',
            
            // Unit 4: Creativity and Problem Solving
            'mpc-001/block-2/creativity-meaning-aspects-theories',
            'mpc-001/block-2/investment-confluence-theory-creativity',
            'mpc-001/block-2/stages-of-creativity',
            'mpc-001/block-2/creativity-intelligence-relationship',
            'mpc-001/block-2/measurement-creativity-ttct',
            'mpc-001/block-2/problem-solving-comprehensive',
          ],
        },
        {
          type: 'category',
          label: 'Block 3: Language and Cognition',
          items: [
            // Unit 1: Language and Cognition
            // Unit 1: Language and Cognition
            'mpc-001/block-3/language-cognition-foundations',
            'mpc-001/block-3/linguistics-language-structure',
            'mpc-001/block-3/stages-language-acquisition',
            'mpc-001/block-3/language-acquisition-theories-behaviorist-innateness',
            
            // Unit 2: Language Processing
            'mpc-001/block-3/functions-of-language',
            'mpc-001/block-3/structure-of-language',
            'mpc-001/block-3/language-processes-production-comprehension',
            'mpc-001/block-3/language-development-semantics',
            'mpc-001/block-3/kintsch-model-comprehension',
            
            // Unit 3: Multilingualism and Second Language
            'mpc-001/block-3/multilingualism-basic-concepts',
            'mpc-001/block-3/multilingualism-cognition-code-switching',
            'mpc-001/block-3/multilingualism-thinking-cognitive-benefits',
            'mpc-001/block-3/second-language-acquisition',
            
            // Unit 4: Language and Speech Disorders
            'mpc-001/block-3/defining-language-speech-disorders',
            'mpc-001/block-3/language-disorders-aphasia-autism-learning-disabilities',
            'mpc-001/block-3/language-disorders-alzheimer-sli-phonological-dyspraxia',
            'mpc-001/block-3/speech-disorders-voice-articulation-fluency',
            'mpc-001/block-3/speech-disorders-apraxia-dysprosody-dysarthria',
          ],
        },
        // Block 4: Problem Solving
        {
          type: 'category',
          label: 'Block 4: Problem Solving',
          items: [
            // Unit 1: Nature of Problem Solving
            'mpc-001/block-4/types-characteristics-problems',
            'mpc-001/block-4/nature-stages-problem-solving',
            'mpc-001/block-4/thinking-types-insight-problem-solving',
            
            // Unit 2: Stages of Problem Solving
            'mpc-001/block-4/nature-problem-generating-solutions',
            'mpc-001/block-4/algorithms-heuristics-problem-solving',
            'mpc-001/block-4/specific-problem-solving-techniques',
            'mpc-001/block-4/creativity-problem-solving-insight',
            'mpc-001/block-4/artificial-intelligence-problem-solving',
            
            // Unit 3: Theoretical Approaches to Problem Solving
            'mpc-001/block-4/traditional-approaches-problem-solving',
            'mpc-001/block-4/gestalt-approaches-problem-solving',
            'mpc-001/block-4/information-processing-general-problem-solver',
            'mpc-001/block-4/newell-problem-space-hypothesis',
            'mpc-001/block-4/problem-solving-as-modeling',
            
            // Unit 4: Impediments to Problem Solving
            'mpc-001/block-4/einstellung-mental-set-luchin-water-jar',
            'mpc-001/block-4/functional-fixedness-problem-representation',
            'mpc-001/block-4/psychological-barriers-problem-solving',
            'mpc-001/block-4/environmental-cultural-expressive-blocks',
            'mpc-001/block-4/problem-solving-approaches-expertise',
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
          label: 'Block 1: Foundations of Life Span Development',
          items: [
            // Unit 1: Concept of Development, Growth, and Life Span Perspective
            'mpc-002/block-1/concept-development-growth',
            'mpc-002/block-1/life-span-perspectives-understanding',
            'mpc-002/block-1/life-span-stages-domains',
            'mpc-002/block-1/characteristics-life-span-development',
            'mpc-002/block-1/research-methods-development-obstacles',
            
            // Unit 2: Prenatal Development (Genetics, Environment, Hazards)
            'mpc-002/block-1/beginnings-life-genetics-sex-determination',
            'mpc-002/block-1/prenatal-stages-development',
            'mpc-002/block-1/prenatal-characteristics-environmental-influences',
            
            // Unit 3: Development During Infancy (Physical, Psychosocial, Cognitive, Linguistic)
            'mpc-002/block-1/infancy-concept-characteristics-adjustments',
            'mpc-002/block-1/infancy-physical-psychosocial-development',
            'mpc-002/block-1/infancy-cognitive-linguistic-development',
          ],
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
