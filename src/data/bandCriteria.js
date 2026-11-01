// Centralized examiner rubrics, grammar lab patterns, overview builder blocks,
// planning blueprints, and diagnostic checklist criteria.

export const CURRICULUM_MODULES = [
  {
    id: 'm1-examiner-guide',
    number: '01',
    shortTitle: 'Examiner Calibration',
    fullTitle: 'Examiner Calibration Briefing',
    phase: 'Phase I: Calibration & Dataset',
    componentName: 'ExaminerFieldGuide.jsx',
    targetBreakdown: 'Dynamic/Static Confusion & Unit Traps',
  },
  {
    id: 'm2-dataset-explorer',
    number: '02',
    shortTitle: 'Dataset Explorer',
    fullTitle: 'Synthetic Task & Dataset Explorer',
    phase: 'Phase I: Calibration & Dataset',
    componentName: 'TableDatasetView.jsx',
    targetBreakdown: 'Key Feature Isolation vs. Raw Matrix',
  },
  {
    id: 'm3-feature-selection',
    number: '03',
    shortTitle: 'Feature Selection Lab',
    fullTitle: 'Feature-Selection Engine (3-Rule Filter)',
    phase: 'Phase II: Selection, Clustering & Overview',
    componentName: 'FeatureSelectionLab.jsx',
    targetBreakdown: 'Breakdown #1: Data Dumping (12+ Numbers)',
  },
  {
    id: 'm4-grouping-strategy',
    number: '04',
    shortTitle: 'Grouping Strategy Lab',
    fullTitle: 'Analytical Grouping vs. Linear Walk',
    phase: 'Phase II: Selection, Clustering & Overview',
    componentName: 'GroupingStrategy.jsx',
    targetBreakdown: 'Breakdown #2: Mechanical Row-by-Row Listing',
  },
  {
    id: 'm5-overview-workshop',
    number: '05',
    shortTitle: 'Overview Workshop',
    fullTitle: 'Zero-Number Overview Builder Workshop',
    phase: 'Phase II: Selection, Clustering & Overview',
    componentName: 'OverviewWorkshop.jsx',
    targetBreakdown: 'Breakdown #3: Defective / Data-Heavy Overview',
  },
  {
    id: 'm6-grammar-lab',
    number: '06',
    shortTitle: 'Comparative Syntax Lab',
    fullTitle: 'Grammar & Comparative Syntax Toolkit',
    phase: 'Phase III: Syntax, Planning & Benchmarks',
    componentName: 'GrammarLab.jsx',
    targetBreakdown: 'Breakdown #4 & #5: Multiples, Fractions & Respectively',
  },
  {
    id: 'm7-planning-methods',
    number: '07',
    shortTitle: 'Dual Planning Methods',
    fullTitle: 'Dual Planning Methods & 20-Min Protocol',
    phase: 'Phase III: Syntax, Planning & Benchmarks',
    componentName: 'PlanningMethods.jsx',
    targetBreakdown: 'Static (Category) vs. Dynamic (Trend) Architecture',
  },
  {
    id: 'm8-model-answer',
    number: '08',
    shortTitle: 'Band 8.5 Model Report',
    fullTitle: 'Band 8.5 Annotated Benchmark Model',
    phase: 'Phase III: Syntax, Planning & Benchmarks',
    componentName: 'ModelAnswer.jsx',
    targetBreakdown: 'Full 4-Criterion Calibration ([TA] [CC] [LR] [GRA])',
  },
  {
    id: 'm9-error-clinic',
    number: '09',
    shortTitle: 'Examiner Error Clinic',
    fullTitle: 'Error Clinic: Spot the Examiner Penalties',
    phase: 'Phase III: Syntax, Planning & Benchmarks',
    componentName: 'ErrorClinic.jsx',
    targetBreakdown: 'Diagnostic Hunt Across All 5 Classic Breakdowns',
  },
  {
    id: 'm10-timed-simulator',
    number: '10',
    shortTitle: '20-Min Timed Simulator',
    fullTitle: 'Distraction-Free Timed Writing Simulator',
    phase: 'Phase IV: Practice & Diagnostic Audit',
    componentName: 'TimedWritingSpace.jsx',
    targetBreakdown: 'Real-Time Pacing, Word Count & Penalty Guardrails',
  },
  {
    id: 'm11-rubric-checklist',
    number: '11',
    shortTitle: 'Band Diagnostic Matrix',
    fullTitle: 'Band Descriptor Diagnostic Checklist',
    phase: 'Phase IV: Practice & Diagnostic Audit',
    componentName: 'RubricChecklist.jsx',
    targetBreakdown: 'Criterion Ceiling & Bottleneck Detection',
  },
];

export const DYNAMIC_VS_STATIC_TAXONOMY = {
  dynamic: {
    title: 'Dynamic Tables (Time-Series / Chronological)',
    identificationRule:
      'Columns or rows represent 2+ points in time (e.g., 2005, 2015, 2025; Q1 to Q4; 1990 vs. Projection 2040).',
    analyticalQuestion: 'How do magnitudes change over time, and which category shifts most dramatically?',
    legitimateLexis: [
      'Verbs of transition: surged, contracted, climbed, subsided, peaked at, bottomed out at',
      'Adverbial degree modifiers: rose precipitously, drifted gradually downward, grew nearly fivefold',
      'Temporal participle clauses: peaking in 2015 before falling to..., having started at...',
    ],
    prohibitedTrap:
      'Treating each year as an isolated static snapshot ("In 2005 housing was 14.2. In 2015 housing was 16.8.") without expressing movement or rate of change.',
  },
  static: {
    title: 'Static Tables (Single-Point Snapshot / Cross-Sectional)',
    identificationRule:
      'No chronological progression exists (e.g., 5 cities in 2024; 4 age brackets; male vs. female across 6 industries).',
    analyticalQuestion: 'How do categories rank against one another, and where are the widest disparities?',
    legitimateLexis: [
      'Static verbs of proportion: accounted for, represented, comprised, stood at, commanded',
      'Comparative & superlative structures: nearly three times as high as, trailed far behind at, outstripped',
      'Ranking participle clauses: ..., ranking first at 64%, ..., followed closely by London (49%)',
    ],
    prohibitedTrap:
      'CRITICAL EXAMINER PENALTY: Using trend verbs ("Commuter rail rose from 3% in Houston to 64% in Tokyo" or "Car usage fell to 11% in Tokyo"). Cities do not turn into one another over time! This triggers an immediate dual penalty in Lexical Resource (inappropriate meaning) and Grammatical Range.',
  },
};

export const UNIT_HEADER_TRAPS = [
  {
    id: 'trap-multiplier',
    title: 'Trap 1: Dropping Scale Multipliers',
    headerExample: 'Table Sub-header: (in US$ thousands) | Cell Value: 14.2',
    band5Error: '"Households spent $14.2 on housing in 2005, rising to $21.5 in 2025."',
    examinerPenalty:
      'Caps Task Achievement at Band 6 (Inaccurate Data Reporting). Writing "$14.2" literally means fourteen dollars and twenty cents.',
    band8Calibration:
      '"Households allocated $14,200 to housing in 2005, climbing to $21,500 in 2025." (Or: "...spent 14.2 thousand dollars...")',
  },
  {
    id: 'trap-pct-points',
    title: 'Trap 2: Percentage (%) vs. Percentage Points',
    headerExample: '2005 Share: 10% → 2025 Share: 20%',
    band5Error: '"The proportion of digital spending increased by 10% over the period."',
    examinerPenalty:
      'Mathematical inaccuracy (TA/LR). Moving from 10% to 20% is a 100% relative increase (it doubled), or a rise of 10 percentage points.',
    band8Calibration:
      '"The share of digital spending doubled from 10% to 20% (an increase of 10 percentage points)."',
  },
  {
    id: 'trap-subject-category',
    title: 'Trap 3: Category Label as Animated Subject',
    headerExample: 'Row Header: Transport & Travel | 2005: 7.6 → 2015: 8.5',
    band5Error: '"Transport and travel increased from 7.6 in 2005 to 8.5 in 2015."',
    examinerPenalty:
      'Lexical Resource & GRA penalty. "Transport and travel" did not grow; *household expenditure on* transport grew.',
    band8Calibration:
      '"Household expenditure on transport and travel rose from $7,600 in 2005 to a peak of $8,500 in 2015."',
  },
  {
    id: 'trap-raw-vs-share',
    title: 'Trap 4: Conflating Raw Quantities with Proportions',
    headerExample: 'Table Header: (in US$ thousands) | Cell Value: 21.5',
    band5Error: '"Housing accounted for 21.5% of household budgets in 2025."',
    examinerPenalty:
      'Severe TA inaccuracy penalty. Inventing a percentage sign (%) when the table reports raw currency ($ thousands) falsifies the dataset.',
    band8Calibration:
      '"Housing outlays reached $21,500 in 2025, representing more than half of the total $41,900 household budget."',
  },
];

export const OVERVIEW_BUILDER_OPTIONS = {
  sentence1: {
    prompt: 'Sentence 1: Macro-Dominance & General Direction (Select the Band 8+ zero-number clause)',
    options: [
      {
        id: 's1-opt-band8',
        text: 'Overall, housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period, whereas outlays on food, transport, and print media contracted.',
        quality: 'band8',
        hasNumbers: false,
        feedback:
          'Calibrated Band 8.5+ Choice: Synthesizes the overarching dominant leader (Housing) and groups the three declining categories in a single cohesive sentence without citing a single raw number.',
      },
      {
        id: 's1-opt-numbers',
        text: 'Overall, housing and utilities rose from $14,200 in 2005 to $21,500 in 2025, while food fell from $9,400 to $8,100.',
        quality: 'band5_trap',
        hasNumbers: true,
        feedback:
          'Examiner Penalty (TA Band 6 Ceiling): Contains 4 raw numbers and 2 specific dates! Save exact dollar figures for Body Paragraphs 1 and 2.',
      },
      {
        id: 's1-opt-vague',
        text: 'Overall, it is clear that some expenditure categories went up between 2005 and 2025 while other categories went down.',
        quality: 'band6_vague',
        hasNumbers: false,
        feedback:
          'Examiner Penalty (TA Band 6 — Vague/Empty Overview): Any table with changing numbers has "some going up and others going down." You must name the specific categories driving those macro-trends.',
      },
    ],
  },
  sentence2: {
    prompt: 'Sentence 2: Striking Divergence, Outlier, or Rank Reversal (Select the Band 8+ zero-number clause)',
    options: [
      {
        id: 's2-opt-band8',
        text: 'Notably, digital communications experienced the most dramatic proportional surge, effectively reversing its initial ranking with print media, which shrank to become the smallest expense.',
        quality: 'band8',
        hasNumbers: false,
        feedback:
          'Calibrated Band 8.5+ Choice: Highlights the steepest proportional shift (Digital), the rank reversal, and the global trough category (Print Media) purely through analytical comparison.',
      },
      {
        id: 's2-opt-numbers',
        text: 'In addition, digital communications grew nearly fivefold from 1.2 thousand to 5.8 thousand, whereas print media dropped to 0.3 thousand.',
        quality: 'band5_trap',
        hasNumbers: true,
        feedback:
          'Examiner Penalty (TA Band 6 Ceiling): Citing "1.2", "5.8", and "0.3" inside the Overview steals the best analytical ammunition from Body Paragraph 2.',
      },
      {
        id: 's2-opt-incomplete',
        text: 'Meanwhile, transport and travel was the third largest category in the table.',
        quality: 'band6_vague',
        hasNumbers: false,
        feedback:
          'Weak Selection (TA Band 6): Wastes the second overview slot on a static middle rank while ignoring the dramatic fivefold tech surge and print media collapse.',
      },
    ],
  },
};

export const OVERVIEW_BENCHMARKS = [
  {
    band: 'Band 5.0',
    tag: 'The Data-Dumping Trap',
    verdict: 'Fails TA Overview Criterion (Reads like a Body Paragraph)',
    text: 'Overall, Housing was 14.2 in 2005, 16.8 in 2015, and 21.5 in 2025. Meanwhile, Print Media started at 1.8 and fell to 0.3 in 2025, and Digital started at 1.2.',
    critique:
      'Contains 6 raw figures and 3 years, forgets the "thousands" unit multiplier, and performs zero synthesis across categories.',
  },
  {
    band: 'Band 6.5',
    tag: 'The Vague Truism Trap',
    verdict: 'Superficial Overview (Lacks Specific Category Synthesis)',
    text: 'Overall, it can be seen that spending on some categories increased over the twenty-year period, whereas expenditure on other items decreased significantly.',
    critique:
      'Contains no numbers (good), but could apply to literally any table in the world. Does not identify which category dominated or which diverged.',
  },
  {
    band: 'Band 8.5',
    tag: 'Calibrated Macro-Synthesis',
    verdict: 'Full TA Credit (Dominant Leader + Directional Split + Rank Reversal)',
    text: 'Overall, housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period, whereas spending on food, transport, and print media contracted. Notably, digital communications experienced the most dramatic proportional expansion, effectively reversing its initial rank with print media.',
    critique:
      'Zero raw figures. Identifies the dominant leader, groups declining sectors, and pinpoints the structural rank reversal between tech and print.',
  },
];

export const GRAMMAR_PATTERNS = [
  {
    id: 'multiples',
    tabLabel: '1. Multiples & Comparatives',
    title: 'Complex Scale Multiples & Equative Comparatives',
    examinerPurpose:
      'Replaces repetitive "increased from X to Y" clauses with mathematical synthesis (Band 8+ GRA & TA).',
    formula:
      '[Subject] + [verb of change] + [adverbial multiple: nearly threefold / almost fivefold] + from [Base] to [Peak]  OR  [Subject A] + was + [multiplier: hampir three times] + as [adj: high/large] as + that of [Subject B]',
    badExample:
      'Digital spending was almost five times higher than 2005 in 2025 ($1,200 and $5,800).',
    badReason:
      'Faulty elliptical comparison: compares "Digital spending" (a dollar figure) directly to "2005" (a calendar year).',
    goodExample:
      'Annual outlays on digital telecoms surged nearly fivefold between 2005 and 2025, rising from $1,200 to $5,800.',
    secondaryGoodExample:
      'By 2025, housing expenditure ($21,500) was more than twice as high as that of food ($8,100) and transport ($6,200) combined.',
    drill: {
      question:
        'Using the Static Commuter Table (Tokyo Rail: 64%; London Rail: 49%; Sydney Rail: 25%), select the grammatically flawless Band 8.5 comparison:',
      options: [
        {
          id: 'm-opt1',
          text: 'Rail usage in Tokyo (64%) was over twice as high than Sydney (25%).',
          isCorrect: false,
          explanation: 'GRA Error: Mixed equative and comparative syntax ("twice as high than" instead of "twice as high as").',
        },
        {
          id: 'm-opt2',
          text: 'At 64%, the proportion of rail commuters in Tokyo was more than two and a half times as high as that recorded in Sydney (25%).',
          isCorrect: true,
          explanation: 'Correct (Band 8.5 GRA): Uses "two and a half times as high as" and the demonstrative pronoun "that recorded in Sydney" to maintain parallel noun comparison.',
        },
        {
          id: 'm-opt3',
          text: 'Tokyo rail commuters increased nearly threefold compared to Sydney from 25% to 64%.',
          isCorrect: false,
          explanation: 'Severe Static/Dynamic Penalty: Uses dynamic change verb ("increased... from 25% to 64%") to compare two static cities!',
        },
      ],
    },
  },
  {
    id: 'fractions',
    tabLabel: '2. Proportional Fractions',
    title: 'Proportional Fractions & Approximations',
    examinerPurpose:
      'Demonstrates Lexical Resource flexibility by converting raw decimals/percentages into idiomatic fractions.',
    formula:
      '[Subject] + [collapsed to / accounted for / shrank by] + [qualifier: just under / a mere / roughly] + [fraction: a sixth / a third / three-fifths] + of [Reference Noun]',
    badExample:
      'Print media fell by 83.33% from $1,800 to $300, which is 1/6.',
    badReason:
      'Over-calculated robotic percentage ("83.33%") and unintegrated numeric slash ("1/6") in formal academic prose.',
    goodExample:
      'Expenditure on print media collapsed to a mere sixth of its initial level, dropping from $1,800 in 2005 to just $300 by 2025.',
    secondaryGoodExample:
      'In Amsterdam, active transport (cycling and walking) accounted for just under half of all daily journeys (46%).',
    drill: {
      question:
        'In 2005, Housing ($14,200) rose by $7,300 to reach $21,500 in 2025 (+51.4%). Which sentence integrates a Band 8.5 proportional fraction accurately?',
      options: [
        {
          id: 'f-opt1',
          text: 'Housing expenditure expanded by just over half over the two decades, climbing from $14,200 to $21,500.',
          isCorrect: true,
          explanation: 'Correct (Band 8.5 LR/GRA): "Expanded by just over half" idiomatically translates +51.4% while anchoring both endpoints accurately.',
        },
        {
          id: 'f-opt2',
          text: 'Housing expenditure became a half higher in 2025 at $21,500.',
          isCorrect: false,
          explanation: 'GRA/LR Error: "Became a half higher" is unidiomatic English.',
        },
        {
          id: 'f-opt3',
          text: 'Housing expenditure accounted for half of 2005 in 2025 ($21,500).',
          isCorrect: false,
          explanation: 'TA/GRA Error: Confuses growth rate (+50%) with share of total ("accounted for half of 2005").',
        },
      ],
    },
  },
  {
    id: 'participles',
    tabLabel: '3. Ranking Participles',
    title: 'Non-Finite Ranking & Trajectory Participle Clauses',
    examinerPurpose:
      'Compresses two separate clauses into one fluid complex sentence, directly targeting the Band 8 GRA descriptor ("wide range of structures").',
    formula:
      '[Main Independent Clause + Data], + [present participle: peaking at X / ranking first at X / followed closely by Y at Z]',
    badExample:
      'Transport rose to $8,500 in 2015. Then it fell to $6,200 in 2025. Digital was behind it at $5,800.',
    badReason:
      'Three choppy, mechanical simple sentences (Band 5/6 GRA).',
    goodExample:
      'Transport outlays peaked at $8,500 in 2015 before subsiding to $6,200 by 2025, followed closely by digital communications at $5,800.',
    secondaryGoodExample:
      'Private cars dominated commuter transport in Houston at 86%, outstripping rail and bus usage by a wide margin.',
    drill: {
      question:
        'Combine these facts using a Band 8+ ranking participle clause: Housing was $21,500 in 2025. It was the largest category. It exceeded the other four categories combined ($20,400).',
      options: [
        {
          id: 'p-opt1',
          text: 'Housing peaked at $21,500 in 2025, exceeding the combined expenditure of the remaining four categories.',
          isCorrect: true,
          explanation: 'Correct (Band 9 TA/GRA): Uses a non-finite "-ing" participle clause (", exceeding the combined expenditure...") to synthesize a table-wide mathematical insight.',
        },
        {
          id: 'p-opt2',
          text: 'Housing peaked at $21,500 in 2025, which was exceeded the other four categories.',
          isCorrect: false,
          explanation: 'GRA Error: Faulty passive voice ("which was exceeded") reverses the meaning!',
        },
        {
          id: 'p-opt3',
          text: 'Ranking first at $21,500 in 2025, the other four categories were smaller than housing.',
          isCorrect: false,
          explanation: 'GRA Error (Dangling Participle): The subject after the comma ("the other four categories") does not match "Ranking first at $21,500"!',
        },
      ],
    },
  },
  {
    id: 'respectively',
    tabLabel: '4. The "Respectively" Rule',
    title: 'The "Respectively" Parallel Alignment Protocol',
    examinerPurpose:
      'Allows two paired data points to be reported concisely without repeating prepositional phrases—if and only if 1-to-1 order is preserved.',
    formula:
      '[Category A] and [Category B] + [verb] + [Value A] and [Value B], respectively.',
    badExample:
      'In 2005, digital telecoms and print media were $1,800 and $1,200 respectively.',
    badReason:
      'Inverted order penalty! Digital was $1,200 and Print was $1,800. Listing Digital first assigns $1,800 to Digital.',
    goodExample:
      'In 2005, households allocated $1,800 and $1,200 to print media and digital telecoms, respectively.',
    secondaryGoodExample:
      'Tokyo and London recorded the longest average daily commutes, at 48 and 43 minutes, respectively.',
    drill: {
      question:
        'Check the 2025 figures: Food & Groceries = $8,100; Transport & Travel = $6,200. Which sentence applies "respectively" with 100% accuracy?',
      options: [
        {
          id: 'r-opt1',
          text: 'By 2025, expenditure on food and transport stood at $8,100 and $6,200, respectively.',
          isCorrect: true,
          explanation: 'Correct (Band 8.5 GRA): Strict 1-to-1 order (food → $8,100; transport → $6,200) and proper comma placement before "respectively".',
        },
        {
          id: 'r-opt2',
          text: 'By 2025, expenditure on transport and food stood at $8,100 and $6,200, respectively.',
          isCorrect: false,
          explanation: 'TA Inaccuracy: Reverses the subjects ("transport and food") so transport is falsely reported as $8,100!',
        },
        {
          id: 'r-opt3',
          text: 'By 2025, food was $8,100 respectively, while transport was $6,200 respectively.',
          isCorrect: false,
          explanation: 'GRA Error: "Respectively" requires a paired list (A and B ... X and Y, respectively); it cannot be attached to single clauses.',
        },
      ],
    },
  },
  {
    id: 'connectors',
    tabLabel: '5. Static Contrast Connectors',
    title: 'Subordinating & Prepositional Contrast Connectors',
    examinerPurpose:
      'Essential for Static Snapshot tables where chronological transitions ("subsequently", "thereafter") are unusable.',
    formula:
      'Clause A, whereas / while Clause B.  |  In stark contrast to [Noun Phrase A], [Subject B + Verb].  |  Compared with [Noun Phrase A], [Clause B].',
    badExample:
      'Tokyo rail share is 64%. On the other hand, Houston rail share is 3%, whereas.',
    badReason:
      'Misuses "whereas" as a sentence-final adverb and relies on mechanical short sentences.',
    goodExample:
      'In stark contrast to Tokyo, where rail accounted for nearly two-thirds of commuters (64%), rail usage in Houston was negligible at just 3%.',
    secondaryGoodExample:
      'Whereas cycling and walking represented nearly half of all journeys in Amsterdam (46%), active transport remained below 10% in Sydney and Houston.',
    drill: {
      question:
        'Select the sentence that uses prepositional vs. subordinating contrast connectors accurately:',
      options: [
        {
          id: 'c-opt1',
          text: 'In contrast to spending on print media ($300), digital outlays reached $5,800 in 2025.',
          isCorrect: true,
          explanation: 'Correct (Band 8.5 GRA/CC): "In contrast to" is a preposition and is properly followed by a noun phrase ("spending on print media ($300)"), not a full verb clause.',
        },
        {
          id: 'c-opt2',
          text: 'In contrast to print media fell to $300, digital outlays reached $5,800 in 2025.',
          isCorrect: false,
          explanation: 'GRA Error: Follows the preposition "In contrast to" with a finite verb clause ("print media fell"). Use "Whereas print media fell..." instead.',
        },
        {
          id: 'c-opt3',
          text: 'Whereas spending on print media ($300), digital outlays reached $5,800 in 2025.',
          isCorrect: false,
          explanation: 'GRA Error (Sentence Fragment): "Whereas" is a subordinating conjunction and requires a finite verb in its clause ("Whereas spending on print media fell to $300...").',
        },
      ],
    },
  },
];

export const PLANNING_METHODS_DATA = {
  methodA: {
    id: 'method-a-static',
    badge: 'Method A: Category / Scale-Driven',
    bestFor: 'Static Snapshot Tables (Cross-Sectional Cities, Demographics, Sectors)',
    corePrinciple:
      'Because there is no time arrow, never group arbitrarily by the first three rows vs. the last two rows. Group rows by their Dominant Profile (e.g., Public-Transit Metropolises vs. Car-Dependent Cities).',
    steps: [
      {
        step: '1. Column & Unit Audit (45s)',
        detail:
          'Check if columns share the same unit (e.g., % across 4 columns) or switch units in the final column (e.g., Average Commute in minutes). Draw a vertical line separating different units.',
      },
      {
        step: '2. Vertical & Horizontal Extremes (60s)',
        detail:
          'Circle the highest and lowest figure in each major column (e.g., Tokyo 64% Rail vs. Houston 86% Car; Amsterdam 46% Active & 26 mins shortest commute).',
      },
      {
        step: '3. Two-Cluster Paragraph Split (60s)',
        detail:
          'BP1: Rail & Active-Transport Leaders (Tokyo, London, Amsterdam — high public/active share, contrasting commute durations). BP2: Car-Dominated Cities (Houston, Sydney — 58%–86% car reliance, minimal rail/cycling).',
      },
      {
        step: '4. Tense & Verb Lock (15s)',
        detail:
          'Lock tense (Past Simple if dated e.g. 2024; Present Simple if timeless) and cross out all dynamic trend verbs (rose, fell, peaked).',
      },
    ],
  },
  methodB: {
    id: 'method-b-dynamic',
    badge: 'Method B: Trend / Magnitude-Driven',
    bestFor: 'Dynamic Chronological Tables (2+ Years, Decades, Past-to-Projection)',
    corePrinciple:
      'Calculate the net direction (+ or -) and proportional magnitude at the end of each row first. Cluster categories by Scale + Trajectory, and cross out linear midpoint columns.',
    steps: [
      {
        step: '1. Margin Arrows & Multipliers (45s)',
        detail:
          'Verify the header multiplier ("in US$ thousands"). Write ↑, ↓, or ↗↘ (anomaly) at the right margin of each row.',
      },
      {
        step: '2. Cross Out Midpoint Noise (60s)',
        detail:
          'In our 2005–2015–2025 table, strike through the 2015 column for monotonic rows (16.8, 8.9, 2.9, 0.9). Only keep 2015 for Transport ($8,500 anomaly peak). This immediately trims 15 figures down to 8!',
      },
      {
        step: '3. Two-Cluster Paragraph Split (60s)',
        detail:
          'BP1: High-Outlay Core Staples (Housing surging to $21.5k, Food drifting down to $8.1k, Transport peaking in 2015 at $8.5k). BP2: Low-Outlay Divergent Tech vs. Print (Digital surging ~5x to $5.8k vs. Print collapsing 6x to $300).',
      },
      {
        step: '4. Zero-Number Overview Draft (15s)',
        detail:
          'Combine the overall leader (Housing) + general contraction (Food/Transport/Print) + sharpest proportional rank reversal (Digital overtaking Print).',
      },
    ],
  },
  pacingProtocol: [
    {
      window: 'Minutes 00:00 – 03:00',
      phase: 'Phase 1: Decode & Filter',
      tasks: [
        'Highlight the scale multiplier in the table header (e.g., "in thousands").',
        'Verify whether the dataset is Dynamic (time-series) or Static (timeless snapshot).',
        'Circle 6 to 8 key cells (Global Peak, Global Trough, Largest Shift, Anomaly) and cross out linear midpoints.',
      ],
    },
    {
      window: 'Minutes 03:00 – 05:00',
      phase: 'Phase 2: Cluster & Architect',
      tasks: [
        'Bracket the rows into 2 logical groups for Body Paragraph 1 and Body Paragraph 2.',
        'Formulate the 2-sentence Overview mentally (confirming zero raw numbers are included).',
      ],
    },
    {
      window: 'Minutes 05:00 – 18:00',
      phase: 'Phase 3: Calibrated Drafting',
      tasks: [
        'Min 5–7: Write 1-sentence Paraphrased Introduction + 2-sentence Macro Overview (~55–65 words).',
        'Min 7–13: Draft Body Paragraph 1 synthesizing Group A with multiples/participles (~55–60 words).',
        'Min 13–18: Draft Body Paragraph 2 contrasting Group B using fractions and "respectively" (~50–55 words).',
      ],
    },
    {
      window: 'Minutes 18:00 – 20:00',
      phase: 'Phase 4: Examiner Penalty Audit',
      tasks: [
        'Multiplier Check: Did you write "$14,200" (or "14.2 thousand") instead of "$14.2"?',
        'Subject Check: Did you write "spending on housing rose" rather than "housing rose"?',
        'Static Verb Check: If static, are there zero trend verbs (rose/fell)?',
        'Overview Check: Are there zero numbers in Paragraph 2?',
      ],
    },
  ],
};

export const RUBRIC_CHECKLIST_ITEMS = [
  {
    criterion: 'TA',
    fullName: 'Task Achievement',
    weight: '25%',
    ceilingWarning:
      'Hard Examiner Ceilings: Missing an overview caps TA at Band 5. Packing raw numbers into the overview or mechanically listing 12+ cells caps TA at Band 6.',
    checkpoints: [
      {
        id: 'ta-1',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Clear, standalone Overview paragraph presenting macro-trends/leaders with ZERO raw figures.',
        remedyModule: 'Module 5 (Overview Workshop)',
      },
      {
        id: 'ta-2',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Selective data reporting: cites 6 to 8 strategic figures (omitting linear midpoints rather than dumping 12+ cells).',
        remedyModule: 'Module 3 (Feature Selection Lab)',
      },
      {
        id: 'ta-3',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: '100% accurate scale multiplier and unit translation (e.g., "14.2" reported as "$14,200", never "$14.2").',
        remedyModule: 'Module 1 (Examiner Calibration)',
      },
      {
        id: 'ta-4',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'Explicitly isolates the table’s non-linear anomaly (e.g., Transport’s 2015 peak) and rank reversal (Digital vs. Print).',
        remedyModule: 'Module 3 (Feature Selection Lab)',
      },
    ],
  },
  {
    criterion: 'CC',
    fullName: 'Coherence & Cohesion',
    weight: '25%',
    ceilingWarning:
      'Examiner Penalty: Writing 5 separate row-by-row sentences ("First row... Second row... Next...") restricts CC to Band 5/6.',
    checkpoints: [
      {
        id: 'cc-1',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Clean 4-paragraph structure (Introduction, Overview, Body Paragraph 1, Body Paragraph 2).',
        remedyModule: 'Module 8 (Band 8.5 Model)',
      },
      {
        id: 'cc-2',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Analytical clustering: rows are grouped by scale/trajectory into two thematic body paragraphs rather than walked linearly.',
        remedyModule: 'Module 4 (Grouping Strategy Lab)',
      },
      {
        id: 'cc-3',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'Organic discourse markers ("Regarding major living costs,", "In stark contrast,") rather than mechanical sequencers ("First, Second, Finally").',
        remedyModule: 'Module 6 & Module 8',
      },
    ],
  },
  {
    criterion: 'LR',
    fullName: 'Lexical Resource',
    weight: '25%',
    ceilingWarning:
      'Examiner Penalty: Applying dynamic trend verbs ("rose, plummeted") to a static snapshot table triggers an immediate LR/GRA penalty.',
    checkpoints: [
      {
        id: 'lr-1',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Strict Dynamic vs. Static verb discipline (zero trend verbs used on timeless static datasets).',
        remedyModule: 'Module 1 (Examiner Calibration)',
      },
      {
        id: 'lr-2',
        bandTarget: 7,
        isCriticalCeiling: false,
        label: 'Accurate subject-noun collocations ("household outlays on transport", never "transport increased").',
        remedyModule: 'Module 9 (Error Clinic)',
      },
      {
        id: 'lr-3',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'Precise proportional and scale lexis ("commanded the largest share", "surged nearly fivefold", "collapsed to a mere sixth").',
        remedyModule: 'Module 6 (Comparative Syntax Lab)',
      },
    ],
  },
  {
    criterion: 'GRA',
    fullName: 'Grammatical Range & Accuracy',
    weight: '25%',
    ceilingWarning:
      'Examiner Penalty: Faulty comparative ellipsis ("higher than 2005") and inverted "respectively" alignment cap GRA at Band 6.',
    checkpoints: [
      {
        id: 'gra-1',
        bandTarget: 7,
        isCriticalCeiling: false,
        label: 'Grammatically parallel comparisons (uses "that of 2005" or adverbial multiples; never compares a category directly to a year).',
        remedyModule: 'Module 6 (Comparative Syntax Lab)',
      },
      {
        id: 'gra-2',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'Includes non-finite ranking/trajectory participle clauses ("..., peaking at $8,500 before subsiding to...").',
        remedyModule: 'Module 6 (Comparative Syntax Lab)',
      },
      {
        id: 'gra-3',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'Accurate deployment of "respectively" with strict 1-to-1 order alignment and preceding comma.',
        remedyModule: 'Module 6 (Comparative Syntax Lab)',
      },
    ],
  },
];
