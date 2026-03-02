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
            'mpc-002/block-1/concept-characteristics-infancy-period',
            'mpc-002/block-1/hazards-adjustments-infancy',
            'mpc-002/block-1/physical-psychosocial-development-infancy',
            'mpc-002/block-1/cognitive-linguistic-development-infancy',
            
            // Unit 4: Early Childhood (Physical, Psychosocial, Cognitive, Linguistic)
            'mpc-002/block-1/concept-characteristics-hazards-early-childhood',
            'mpc-002/block-1/physical-development-early-childhood',
            'mpc-002/block-1/psychosocial-development-early-childhood',
            'mpc-002/block-1/cognitive-linguistic-development-early-childhood',
          ],
        },
        {
          type: 'category',
          label: 'Block 2: Development During Early School Years',
          items: [
            // Unit 1: Physical Development (6-11 Years)
            'mpc-002/block-2/physical-growth-early-school-years',
            'mpc-002/block-2/motor-development-skills-middle-childhood',
            'mpc-002/block-2/body-changes-physical-systems-middle-childhood',
            'mpc-002/block-2/motor-skills-disorders-sports-participation',
            
            // Unit 2: Cognitive, Social, Emotional, and Moral Development (6-11 Years)
            'mpc-002/block-2/cognitive-development-middle-childhood',
            'mpc-002/block-2/social-development-middle-childhood',
            'mpc-002/block-2/moral-development-middle-childhood',
            'mpc-002/block-2/emotional-development-middle-childhood',
            
            // Unit 3: Schooling and Development
            'mpc-002/block-2/school-aims-philosophy-middle-childhood',
            'mpc-002/block-2/basic-skills-subjects-value-education',
            
            // Unit 4: Identification of Problems in School Children and Remedial Measures
            'mpc-002/block-2/learning-disabilities-identification-remedial-measures',
            'mpc-002/block-2/mental-retardation-adhd-physical-disabilities',
            'mpc-002/block-2/sensory-impairments-hearing-visual',
            'mpc-002/block-2/gifted-talented-children-integration',
          ],
        },
        {
          type: 'category',
          label: 'Block 3: Development During Adolescence',
          items: [
            // Unit 1: Physical Changes
            'mpc-002/block-3/adolescent-development-stages',
            'mpc-002/block-3/puberty-physical-development',
            'mpc-002/block-3/physical-changes-adolescent-males',
            'mpc-002/block-3/physical-changes-adolescent-females',
            
            // Unit 2: Cognitive Development
            'mpc-002/block-3/cognitive-development-adolescence',
            'mpc-002/block-3/piaget-formal-operations',
            'mpc-002/block-3/information-processing-adolescence',
            'mpc-002/block-3/school-cognitive-development',

            // Unit 3: Identity, Self-Concept, Self-Esteem, Peer Groups
            'mpc-002/block-3/identity-development-adolescence',
            'mpc-002/block-3/marcia-identity-statuses',
            'mpc-002/block-3/self-concept-self-esteem-adolescence',
            'mpc-002/block-3/social-development-peer-relationships-adolescence',
            'mpc-002/block-3/social-development-peer-groups',

            // Unit 4: Challenges and Issues in Adolescent Development
            'mpc-002/block-3/challenges-issues-adolescent-development',
            'mpc-002/block-3/adolescence-autism-sexuality-loss-normalcy',
            'mpc-002/block-3/high-risk-behaviours-adolescence',
          ],
        },
        {
          type: 'category',
          label: 'Block 4: Adulthood and Ageing',
          items: [
            // Unit 1: Physical Changes (Early, Middle, Old Age)
            'mpc-002/block-4/physical-changes-early-adulthood',
            'mpc-002/block-4/physical-changes-middle-adulthood',
            'mpc-002/block-4/physical-changes-old-age',
            // Unit 2: Cognitive Changes (Early, Middle, Old Age)
            'mpc-002/block-4/cognitive-changes-early-adulthood',
            'mpc-002/block-4/cognitive-changes-middle-adulthood',
            'mpc-002/block-4/cognitive-changes-old-age',
            // Unit 3: Psychosocial Changes (Early, Middle, Old Age)
            'mpc-002/block-4/psychosocial-changes-early-adulthood',
            'mpc-002/block-4/family-life-cycle-career',
            'mpc-002/block-4/psychosocial-changes-middle-adulthood',
            'mpc-002/block-4/psychosocial-changes-old-age',
            // Unit 4: Challenges and Issues in Ageing
            'mpc-002/block-4/ageing-process-gender-differences',
            'mpc-002/block-4/ageing-issues-early-middle-adulthood',
            'mpc-002/block-4/ageing-issues-late-adulthood',
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
      items: [
        {
          type: 'category',
          label: 'Block 1: Introduction to Personality',
          items: [
            // Unit 1: Definition and Concept of Personality
            'mpc-003/block-1/definition-concept-personality',
            'mpc-003/block-1/personality-development-determinants',
            // Unit 2: Type and Trait Approaches
            'mpc-003/block-1/type-approaches-personality',
            'mpc-003/block-1/allport-cattell-trait-theories',
            'mpc-003/block-1/eysenck-guilford-big-five',
            // Unit 3: Assessment of Personality
            'mpc-003/block-1/personality-assessment-methods',
            // Unit 4: Key Issues in Personality
            'mpc-003/block-1/key-issues-personality',
          ],
        },
        {
          type: 'category',
          label: 'Block 2: Psychodynamic Theories',
          items: [
            // Unit 1: Psychodynamic Theory (Freud, Horney, Sullivan)
            'mpc-003/block-2/freud-psychoanalytic-theory',
            'mpc-003/block-2/karen-horney-personality-theory',
            'mpc-003/block-2/sullivan-interpersonal-theory-personality',
            // Unit 2: Social Cognitive Theory (Bandura)
            'mpc-003/block-2/social-cognitive-theory-personality',
            'mpc-003/block-2/reciprocal-determinism-bandura',
            'mpc-003/block-2/self-system-self-efficacy-bandura',
            'mpc-003/block-2/observational-vicarious-learning-bandura',
            // Unit 3: Learning Theory (Pavlov and Skinner)
            'mpc-003/block-2/pavlov-classical-conditioning-personality',
            'mpc-003/block-2/skinner-operant-conditioning-personality',
            'mpc-003/block-2/learning-theory-applications-behaviour-modification',
            'mpc-003/block-2/learning-theory-comparison-evaluation',
            // Unit 4: Humanistic and Self Theory (Maslow and Rogers)
            'mpc-003/block-2/humanistic-approach-personality',
            'mpc-003/block-2/maslow-hierarchy-needs',
            'mpc-003/block-2/maslow-self-actualisation-characteristics',
            'mpc-003/block-2/rogers-person-centered-theory',
          ],
        },
        {
          type: 'category',
          label: 'Block 3: Dispositional and Trait Theories',
          items: [
            // Unit 1: Gordon Allport — Dispositional Theory
            'mpc-003/block-3/allport-definition-personality-traits',
            'mpc-003/block-3/allport-proprium-selfhood',
            'mpc-003/block-3/allport-functional-autonomy-mature-personality',
            // Unit 2: Raymond Cattell — Trait Theory
            'mpc-003/block-3/cattell-trait-theory-personality',
            // Unit 3: Hans Eysenck — Trait-Type Theory
            'mpc-003/block-3/eysenck-trait-type-theory-pen-model',
            // Unit 4: Big Five Factors
            'mpc-003/block-3/big-five-personality-dimensions',
          ],
        },
        {
          type: 'category',
          label: 'Block 4: Introduction to Assessment and Testing',
          items: [
            // Unit 1: Introduction to Assessment and Testing
            'mpc-003/block-4/history-personality-assessment',
            'mpc-003/block-4/meaning-purpose-personality-assessment',
            'mpc-003/block-4/testing-measurement-concepts-personality',
            // Unit 2: Self-Report Inventories
            'mpc-003/block-4/self-report-personality-inventories',
            'mpc-003/block-4/faking-social-desirability-self-report',
            'mpc-003/block-4/important-personality-inventories',
            // Unit 3: Projective Techniques and Behavioural Assessment
            'mpc-003/block-4/projective-techniques-classification',
            'mpc-003/block-4/behavioural-assessment-methods',
            // Unit 4: Other Measures of Personality
            'mpc-003/block-4/mmpi-mcmi-neo-pi-personality-inventories',
            'mpc-003/block-4/rorschach-holtzman-inkblot-tests',
            'mpc-003/block-4/tat-cat-sat-apperception-tests',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'MPC-004: Social Psychology',
      link: {
        type: 'doc',
        id: 'mpc-004-social/index',
      },
      items: [
        {
          type: 'category',
          label: 'Block 1: Introduction to Social Psychology',
          items: [
            // Unit 1: Nature and Concept of Social Psychology
            'mpc-004/block-1/nature-concept-social-psychology',
            'mpc-004/block-1/historical-development-social-psychology',
            'mpc-004/block-1/social-psychology-related-disciplines',
            // Unit 2: Social Cognition and Attribution Theory
            'mpc-004/block-1/person-perception-social-cognition',
            'mpc-004/block-1/attribution-theory-kelley-jones-davis',
            'mpc-004/block-1/attribution-errors-biases',
            'mpc-004/block-1/attribution-education-self-perception',
            // Unit 3: Methods of Social Psychology
            'mpc-004/block-1/research-methods-social-psychology-overview',
            'mpc-004/block-1/experimental-method-social-psychology',
            'mpc-004/block-1/ethnography-meta-analysis-social-psychology',
            // Unit 4: Current Trends and Ethical Issues
            'mpc-004/block-1/social-psychology-applications',
            'mpc-004/block-1/cognitive-multicultural-perspectives-social-psychology',
            'mpc-004/block-1/sociobiology-evolutionary-social-psychology',
            'mpc-004/block-1/ethical-issues-social-psychology-research',
          ],
        },
        {
          type: 'category',
          label: 'Block 2: Process of Social Influence',
          items: [
            // Unit 1: Concept of Social Influence
            'mpc-004/block-2/concept-social-influence-theories',
            'mpc-004/block-2/conformity-asch-experiment',
            'mpc-004/block-2/compliance-cialdini-principles-strategies',
            'mpc-004/block-2/obedience-milgram-stanford-hofling',
            // Unit 2: Pro-social Behaviour
            'mpc-004/block-2/prosocial-behaviour-altruism-foundations',
            'mpc-004/block-2/prosocial-behaviour-emergency-situations',
            'mpc-004/block-2/factors-affecting-helping-behaviour',
            'mpc-004/block-2/theoretical-perspectives-prosocial-behaviour',
            'mpc-004/block-2/prosocial-behaviour-current-trends-reciprocity',
            // Unit 3: Interpersonal Attraction
            'mpc-004/block-2/interpersonal-attraction-physical-attractiveness',
            'mpc-004/block-2/proximity-propinquity-heider-balance-theory',
            'mpc-004/block-2/similarity-complementarity-interpersonal-attraction',
            'mpc-004/block-2/explaining-interpersonal-attraction-theories',
            // Unit 4: Aggression and Violence
            'mpc-004/block-2/aggression-nature-types-measurement',
            'mpc-004/block-2/causes-aggressive-behaviour',
            'mpc-004/block-2/theories-aggression-comprehensive',
            'mpc-004/block-2/intervention-reduce-aggression',
          ],
        },
        {
          type: 'category',
          label: 'Block 3: Attitudes, Stereotypes, Prejudice and Discrimination',
          items: [
            // Unit 1: Introduction to Attitude and Stereotypes
            'mpc-004/block-3/nature-of-attitudes',
            'mpc-004/block-3/theories-attitude-organisation',
            'mpc-004/block-3/stereotypes-prejudice-discrimination',
            // Unit 2: Formation of Attitude and Attitude Change
            'mpc-004/block-3/factors-attitude-formation',
            'mpc-004/block-3/attitude-change-overview',
            'mpc-004/block-3/persuasive-communication-attitude-change',
            'mpc-004/block-3/attitude-change-models-applications',
            // Unit 3: Prejudice and Discrimination
            'mpc-004/block-3/characteristics-types-prejudice',
            'mpc-004/block-3/discrimination-development-maintenance-prejudice',
            'mpc-004/block-3/manifestation-reducing-prejudice-discrimination',
            // Unit 4: Social Conflict and Its Resolution
            'mpc-004/block-3/nature-forms-social-conflict',
            'mpc-004/block-3/methods-conflict-resolution',
            'mpc-004/block-3/blake-mouton-two-dimensional-conflict-model',
          ],
        },
        {
          type: 'category',
          label: 'Block 4: Group Dynamics',
          items: [
            // Unit 1: Introduction to Group, Formation and Types
            'mpc-004/block-4/group-definition-meaning-features',
            'mpc-004/block-4/group-characteristics-formation',
            'mpc-004/block-4/group-formation-theories-rules',
            'mpc-004/block-4/types-groups-structure',
            // Unit 2: Group Dynamics
            'mpc-004/block-4/group-dynamics-definition-concept',
            'mpc-004/block-4/communication-cohesion-group-dynamics',
            'mpc-004/block-4/social-integration-culture-groups',
            'mpc-004/block-4/group-development-models',
            // Unit 3: Social Identity, Crowding and Crowd Behaviour
            'mpc-004/block-4/social-identity-theory',
            'mpc-004/block-4/crowd-definition-types',
            'mpc-004/block-4/crowd-behaviour-theories',
            'mpc-004/block-4/collective-behaviour-mob-audience',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'MPC-005: Research Methods',
      link: {
        type: 'doc',
        id: 'mpc-005-research/index',
      },
      items: [
        {
          type: 'category',
          label: 'Block 1: Basic Concepts in Research',
          items: [
            // Unit 1: Basic Process/Concept in Research
            'mpc-005/block-1/definition-meaning-research',
            'mpc-005/block-1/research-process-discovery-justification',
            'mpc-005/block-1/research-process-steps',
            'mpc-005/block-1/importance-research-psychology',
            // Unit 2: Reliability and Validity
            'mpc-005/block-1/reliability-concepts-methods',
            'mpc-005/block-1/validity-types-threats',
          ],
        },
      ],
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
