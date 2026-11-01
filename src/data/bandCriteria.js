// Centralized rubrics, grammar lab patterns, overview builder blocks,
// planning blueprints, and diagnostic checklist criteria in plain English
// with surgical Turkish (TR) assistance only where necessary.

export const CURRICULUM_MODULES = [
  {
    id: 'm1-examiner-guide',
    number: '01',
    shortTitle: '3 Core Rules',
    fullTitle: 'Step 1: The 3 Core Rules for Table Essays',
    phase: 'Phase I: Understand the Task',
    componentName: 'ExaminerFieldGuide.jsx',
    targetBreakdown: 'Dynamic vs. Static & Unit Header Traps',
  },
  {
    id: 'm2-dataset-explorer',
    number: '02',
    shortTitle: 'Explore the Table',
    fullTitle: 'Step 2: Sample Question & Table Explorer',
    phase: 'Phase I: Understand the Task',
    componentName: 'TableDatasetView.jsx',
    targetBreakdown: 'Spotting Key Features in a 15-Cell Table',
  },
  {
    id: 'm3-feature-selection',
    number: '03',
    shortTitle: 'Select Key Numbers',
    fullTitle: 'Step 3: Which Numbers Should You Write? (6–8 Figure Rule)',
    phase: 'Phase II: Select, Group & Summarize',
    componentName: 'FeatureSelectionLab.jsx',
    targetBreakdown: 'Fixes Mistake #1: Writing Every Number',
  },
  {
    id: 'm4-grouping-strategy',
    number: '04',
    shortTitle: 'Group into 2 Paragraphs',
    fullTitle: 'Step 4: How to Group Rows into Body Paragraphs 1 & 2',
    phase: 'Phase II: Select, Group & Summarize',
    componentName: 'GroupingStrategy.jsx',
    targetBreakdown: 'Fixes Mistake #2: Row-by-Row Listing',
  },
  {
    id: 'm5-overview-workshop',
    number: '05',
    shortTitle: 'Write the Overview',
    fullTitle: 'Step 5: Writing a 2-Sentence Overview (With Zero Numbers)',
    phase: 'Phase II: Select, Group & Summarize',
    componentName: 'OverviewWorkshop.jsx',
    targetBreakdown: 'Fixes Mistake #3: Putting Numbers in the Overview',
  },
  {
    id: 'm6-grammar-lab',
    number: '06',
    shortTitle: '5 Sentence Templates',
    fullTitle: 'Step 6: 5 High-Scoring Sentence Patterns (Grammar Lab)',
    phase: 'Phase III: Sentence Patterns & Models',
    componentName: 'GrammarLab.jsx',
    targetBreakdown: 'Fixes Mistake #4 & #5: Multiples, Fractions & Respectively',
  },
  {
    id: 'm7-planning-methods',
    number: '07',
    shortTitle: '20-Minute Plan',
    fullTitle: 'Step 7: How to Plan Your 20 Minutes in the Exam',
    phase: 'Phase III: Sentence Patterns & Models',
    componentName: 'PlanningMethods.jsx',
    targetBreakdown: '5-Min Plan · 13-Min Write · 2-Min Check',
  },
  {
    id: 'm8-model-answer',
    number: '08',
    shortTitle: 'Band 8.5 Model Essay',
    fullTitle: 'Step 8: Annotated Band 8.5 Model Essay (4 Paragraphs)',
    phase: 'Phase III: Sentence Patterns & Models',
    componentName: 'ModelAnswer.jsx',
    targetBreakdown: 'Sentence-by-Sentence Breakdown',
  },
  {
    id: 'm9-error-clinic',
    number: '09',
    shortTitle: 'Band 5.5 Error Clinic',
    fullTitle: 'Step 9: Spot the 7 Mistakes in a Band 5.5 Essay',
    phase: 'Phase III: Sentence Patterns & Models',
    componentName: 'ErrorClinic.jsx',
    targetBreakdown: 'Why Students Get Stuck at Band 5.5 / 6.0',
  },
  {
    id: 'm10-timed-simulator',
    number: '10',
    shortTitle: 'Timed Writing Simulator',
    fullTitle: 'Step 10: Guided 20-Minute Writing Simulator',
    phase: 'Phase IV: Practice & Self-Check',
    componentName: 'TimedWritingSpace.jsx',
    targetBreakdown: 'Starter Templates & Live Error Checker',
  },
  {
    id: 'm11-rubric-checklist',
    number: '11',
    shortTitle: 'Final Score Checklist',
    fullTitle: 'Step 11: Final Band Score Checklist',
    phase: 'Phase IV: Practice & Self-Check',
    componentName: 'RubricChecklist.jsx',
    targetBreakdown: 'Check What Is Holding Back Your Score',
  },
];

export const DYNAMIC_VS_STATIC_TAXONOMY = {
  dynamic: {
    title: 'Type A: Dynamic Tables (Changes Over Time)',
    identificationRule:
      'The table shows 2 or more years/time periods (e.g., 2005, 2015, 2025).',
    analyticalQuestion: 'Main Question: Which categories went up, which went down, and which changed the most?',
    legitimateLexis: [
      'Change verbs: increased, rose, surged, climbed, fell, declined, dropped, shrank',
      'Scale of change: grew nearly fivefold (5x), expanded by over half (+50%), collapsed to a sixth (1/6)',
      'Peak/Drop clauses: peaking at $8,500 in 2015 before falling to $6,200 by 2025',
    ],
    prohibitedTrap:
      'Common Mistake: Writing each year as a separate sentence ("In 2005 housing was $14,200. In 2015 it was $16,800."). Connect the start year and end year to show the trend!',
  },
  static: {
    title: 'Type B: Static Tables (One Point in Time / No Trend)',
    identificationRule:
      'The table shows only ONE year or no time at all (e.g., 5 cities in 2024).',
    analyticalQuestion: 'Main Question: Which city/category is highest, which is lowest, and how big is the gap?',
    legitimateLexis: [
      'Proportion verbs: accounted for, represented, stood at, made up the largest share',
      'Comparisons: was more than twice as high as, outstripped, trailed far behind',
      'Ranking clauses: ..., ranking first at 64%, followed closely by London at 49%',
    ],
    prohibitedTrap:
      'CRITICAL PENALTY: Never use change verbs ("rose, increased, fell, peaked") on a static table! Cities do not turn into each other over time. TR Uyarı: Tek bir yılı gösteren sabit tablolarda asla "arttı / azaldı" (rose / fell) kullanmayın; "daha yüksekti" (was higher than) diyerek kıyaslayın.',
  },
};

export const UNIT_HEADER_TRAPS = [
  {
    id: 'trap-multiplier',
    title: 'Trap 1: Forgetting "(in thousands)"',
    headerExample: 'Table Header: (in US$ thousands) | Cell Value: 14.2',
    band5Error: '"Households spent $14.2 on housing in 2005, rising to $21.5 in 2025."',
    examinerPenalty:
      'Why it loses marks: Writing "$14.2" means $14.20 (fourteen dollars)! Because the header says "(in thousands)", 14.2 actually means $14,200. (TR: "14.2" sayısını mutlaka "$14,200" veya "14.2 thousand dollars" olarak yazın.)',
    band8Calibration:
      '"Households allocated $14,200 to housing in 2005, climbing to $21,500 in 2025."',
  },
  {
    id: 'trap-pct-points',
    title: 'Trap 2: % vs. Percentage Points',
    headerExample: '2005 Share: 10% → 2025 Share: 20%',
    band5Error: '"The proportion of digital spending increased by 10% over the period."',
    examinerPenalty:
      'Why it loses marks: Going from 10% to 20% is a 100% increase (it doubled), or a rise of "10 percentage points".',
    band8Calibration:
      '"The share of digital spending doubled from 10% to 20% (an increase of 10 percentage points)."',
  },
  {
    id: 'trap-subject-category',
    title: 'Trap 3: Saying "Transport Increased"',
    headerExample: 'Row Name: Transport & Travel | 2005: 7.6 → 2015: 8.5',
    band5Error: '"Transport and travel increased from 7.6 in 2005 to 8.5 in 2015."',
    examinerPenalty:
      'Why it loses marks: "Transport" itself did not grow—*household spending on* transport grew. (TR L1 Hatası: Türkçedeki gibi "Ulaşım arttı" demeyin; "Spending on transport increased" yazın.)',
    band8Calibration:
      '"Household expenditure on transport and travel rose from $7,600 in 2005 to a peak of $8,500 in 2015."',
  },
  {
    id: 'trap-raw-vs-share',
    title: 'Trap 4: Adding a % Sign to Dollar Numbers',
    headerExample: 'Table Header: (in US$ thousands) | Cell Value: 21.5',
    band5Error: '"Housing accounted for 21.5% of household budgets in 2025."',
    examinerPenalty:
      'Why it loses marks: The table gives dollar amounts ($ thousands), not percentages (%). Never invent a % sign when the unit is currency.',
    band8Calibration:
      '"Housing outlays reached $21,500 in 2025, representing more than half of the total household budget."',
  },
];

export const OVERVIEW_BUILDER_OPTIONS = {
  sentence1: {
    prompt: 'Sentence 1: Biggest Category & Overall Direction (Pick the option with NO numbers)',
    options: [
      {
        id: 's1-opt-band8',
        text: 'Overall, housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period, whereas outlays on food, transport, and print media contracted.',
        quality: 'band8',
        hasNumbers: false,
        feedback:
          'Band 8.5 Choice: Names the #1 category (Housing) and groups the three declining categories in one smooth sentence—with zero numbers!',
      },
      {
        id: 's1-opt-numbers',
        text: 'Overall, housing and utilities rose from $14,200 in 2005 to $21,500 in 2025, while food fell from $9,400 to $8,100.',
        quality: 'band5_trap',
        hasNumbers: true,
        feedback:
          'Band 6.0 Trap (Numbers in Overview): Contains 4 dollar numbers and 2 dates! Save exact numbers for Body Paragraphs 1 and 2.',
      },
      {
        id: 's1-opt-vague',
        text: 'Overall, it is clear that some expenditure categories went up between 2005 and 2025 while other categories went down.',
        quality: 'band6_vague',
        hasNumbers: false,
        feedback:
          'Band 6.0 Trap (Too Vague): Saying "some went up and some went down" does not tell the examiner WHICH category led or which ones fell.',
      },
    ],
  },
  sentence2: {
    prompt: 'Sentence 2: Biggest Proportional Shift & Rank Reversal (Pick the option with NO numbers)',
    options: [
      {
        id: 's2-opt-band8',
        text: 'Notably, digital communications experienced the most dramatic proportional surge, effectively reversing its initial ranking with print media, which shrank to become the smallest expense.',
        quality: 'band8',
        hasNumbers: false,
        feedback:
          'Band 8.5 Choice: Highlights the steepest growth (Digital) and how it swapped places with Print Media—without using raw figures.',
      },
      {
        id: 's2-opt-numbers',
        text: 'In addition, digital communications grew nearly fivefold from 1.2 thousand to 5.8 thousand, whereas print media dropped to 0.3 thousand.',
        quality: 'band5_trap',
        hasNumbers: true,
        feedback:
          'Band 6.0 Trap (Numbers in Overview): Do not give "1.2", "5.8", and "0.3" inside the Overview. Save those exact numbers for Body Paragraph 2.',
      },
      {
        id: 's2-opt-incomplete',
        text: 'Meanwhile, transport and travel was the third largest category in the table.',
        quality: 'band6_vague',
        hasNumbers: false,
        feedback:
          'Weak Choice: Mentions a boring middle rank while ignoring the dramatic 5x surge in Digital and collapse in Print Media.',
      },
    ],
  },
};

export const OVERVIEW_BENCHMARKS = [
  {
    band: 'Band 5.0',
    tag: 'The Number-Dumping Trap',
    verdict: 'Fails Overview Rule (Looks like a Body Paragraph)',
    text: 'Overall, Housing was 14.2 in 2005, 16.8 in 2015, and 21.5 in 2025. Meanwhile, Print Media started at 1.8 and fell to 0.3 in 2025, and Digital started at 1.2.',
    critique:
      'Contains 6 raw figures and 3 years, forgets the "thousands" unit, and does not summarize the overall picture.',
  },
  {
    band: 'Band 6.5',
    tag: 'The Empty Sentence Trap',
    verdict: 'Too Vague (Missing Category Names)',
    text: 'Overall, it can be seen that spending on some categories increased over the twenty-year period, whereas expenditure on other items decreased significantly.',
    critique:
      'Has no numbers (good), but could apply to any table in the world. You must name the specific categories!',
  },
  {
    band: 'Band 8.5',
    tag: 'Model Overview',
    verdict: 'Full Score (Leader + General Direction + Rank Change)',
    text: 'Overall, housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period, whereas spending on food, transport, and print media contracted. Notably, digital communications experienced the most dramatic proportional expansion, effectively reversing its initial rank with print media.',
    critique:
      'Zero numbers. Clearly identifies the dominant category, the declining group, and the rank reversal between Digital and Print.',
  },
];

export const GRAMMAR_PATTERNS = [
  {
    id: 'multiples',
    tabLabel: '1. Multiples (fivefold / twice)',
    title: 'Pattern 1: Describing Multiples ("grew nearly fivefold" / "twice as high as")',
    examinerPurpose:
      'Instead of always writing "increased from X to Y", use multiples to show how many times a number grew or how two rows compare.',
    trHint:
      'TR İpucu: Katları ifade etmek için "nearly fivefold" (yaklaşık 5 kat) veya "more than twice as high as that of..." (...nın iki katından fazla) kalıbını kullanın.',
    formula:
      '[Subject] + grew / surged + [nearly fivefold / threefold] + from $[Start] to $[End]   OR   [Category A] + was + [twice / three times] + as high as + that of [Category B]',
    badExample:
      'Digital spending was almost five times higher than 2005 in 2025 ($1,200 and $5,800).',
    badReason:
      'Grammar Error: "Higher than 2005" compares spending to a calendar year! Compare it to "the 2005 figure" or use "grew nearly fivefold".',
    goodExample:
      'Annual outlays on digital telecoms surged nearly fivefold between 2005 and 2025, rising from $1,200 to $5,800.',
    secondaryGoodExample:
      'By 2025, housing expenditure ($21,500) was more than twice as high as that of food ($8,100) and transport ($6,200) combined.',
    drill: {
      question:
        'Practice: In the 2024 City Table, Tokyo Rail is 64% and Sydney Rail is 25%. Which sentence is Band 8.5?',
      options: [
        {
          id: 'm-opt1',
          text: 'Rail usage in Tokyo (64%) was over twice as high than Sydney (25%).',
          isCorrect: false,
          explanation: 'Grammar Error: Never mix "as high" with "than". The correct structure is "twice as high AS".',
        },
        {
          id: 'm-opt2',
          text: 'At 64%, the proportion of rail commuters in Tokyo was more than two and a half times as high as that recorded in Sydney (25%).',
          isCorrect: true,
          explanation: 'Correct (Band 8.5): Uses "two and a half times as high as" + "that recorded in Sydney" to compare the two percentages cleanly.',
        },
        {
          id: 'm-opt3',
          text: 'Tokyo rail commuters increased nearly threefold compared to Sydney from 25% to 64%.',
          isCorrect: false,
          explanation: 'Static Table Error: Never use "increased from 25% to 64%" to compare two different cities in a single year!',
        },
      ],
    },
  },
  {
    id: 'fractions',
    tabLabel: '2. Fractions (a sixth / half)',
    title: 'Pattern 2: Using Fractions ("a mere sixth" / "just over half")',
    examinerPurpose:
      'Turns raw percentages (like -83% or +51%) into natural academic English fractions.',
    trHint:
      'TR İpucu: %51 artış için "expanded by just over half" (yarıdan biraz fazla büyüdü); 6 kat düşüş için "collapsed to a mere sixth" (altıda birine düştü) diyebilirsiniz.',
    formula:
      '[Subject] + [collapsed to / expanded by / accounted for] + [just over half / a mere sixth / roughly a third] + of [Reference Noun]',
    badExample:
      'Print media fell by 83.33% from $1,800 to $300, which is 1/6.',
    badReason:
      'Avoid calculator decimals like "83.33%" or numeric slashes like "1/6" in formal essay writing. Write fractions in words ("one-sixth").',
    goodExample:
      'Expenditure on print media collapsed to a mere sixth of its initial level, dropping from $1,800 in 2005 to just $300 by 2025.',
    secondaryGoodExample:
      'In Amsterdam, active transport (cycling and walking) accounted for just under half of all daily journeys (46%).',
    drill: {
      question:
        'Practice: Housing rose from $14,200 in 2005 to $21,500 in 2025 (+51.4%). Which sentence uses a fraction accurately?',
      options: [
        {
          id: 'f-opt1',
          text: 'Housing expenditure expanded by just over half over the two decades, climbing from $14,200 to $21,500.',
          isCorrect: true,
          explanation: 'Correct (Band 8.5): "Expanded by just over half" naturally expresses +51.4% while giving both exact dollar endpoints.',
        },
        {
          id: 'f-opt2',
          text: 'Housing expenditure became a half higher in 2025 at $21,500.',
          isCorrect: false,
          explanation: 'Grammar Error: "Became a half higher" is not natural English.',
        },
        {
          id: 'f-opt3',
          text: 'Housing expenditure accounted for half of 2005 in 2025 ($21,500).',
          isCorrect: false,
          explanation: 'Meaning Error: Confuses growing by 50% with accounting for 50% of the total.',
        },
      ],
    },
  },
  {
    id: 'participles',
    tabLabel: '3. "-ing" Clauses (peaking at)',
    title: 'Pattern 3: Joining Ideas with Comma + "-ing" (", peaking at... / , exceeding...")',
    examinerPurpose:
      'Combines two short sentences into one smooth Band 8+ complex sentence.',
    trHint:
      'TR İpucu: İki kısa cümleyi nokta ile ayırmak yerine virgül koyup fiile "-ing" ekleyerek (", peaking at $8,500 before falling to $6,200") birleştirin.',
    formula:
      '[Main Clause + Data], + [peaking at $X before falling to $Y / exceeding... / followed closely by...]',
    badExample:
      'Transport rose to $8,500 in 2015. Then it fell to $6,200 in 2025. Digital was behind it at $5,800.',
    badReason:
      'Three short, robotic sentences in a row (caps Grammar at Band 6.0).',
    goodExample:
      'Transport outlays peaked at $8,500 in 2015 before subsiding to $6,200 by 2025, followed closely by digital communications at $5,800.',
    secondaryGoodExample:
      'Private cars dominated commuter transport in Houston at 86%, outstripping rail and bus usage by a wide margin.',
    drill: {
      question:
        'Practice: Join these ideas using a comma + "-ing" clause: Housing peaked at $21,500 in 2025. It was larger than the other four categories combined.',
      options: [
        {
          id: 'p-opt1',
          text: 'Housing peaked at $21,500 in 2025, exceeding the combined expenditure of the remaining four categories.',
          isCorrect: true,
          explanation: 'Correct (Band 9.0): ", exceeding the combined expenditure..." smoothly attaches the comparison to the main clause.',
        },
        {
          id: 'p-opt2',
          text: 'Housing peaked at $21,500 in 2025, which was exceeded the other four categories.',
          isCorrect: false,
          explanation: 'Grammar Error: "Was exceeded" is passive voice and reverses the meaning!',
        },
        {
          id: 'p-opt3',
          text: 'Ranking first at $21,500 in 2025, the other four categories were smaller than housing.',
          isCorrect: false,
          explanation: 'Grammar Error (Dangling Participle): The noun right after the comma must be "housing", not "the other four categories".',
        },
      ],
    },
  },
  {
    id: 'respectively',
    tabLabel: '4. Using "Respectively"',
    title: 'Pattern 4: The "Respectively" Order Rule',
    examinerPurpose:
      'Reports two categories and their two numbers in one concise sentence. Aim to use "respectively" once in every Task 1 essay.',
    trHint:
      'TR İpucu: "Respectively" (sırasıyla) kelimesini kullanırken ilk yazdığınız sayı ilk kategoriye, ikinci sayı ikinci kategoriye ait olmalıdır.',
    formula:
      '[Category A] and [Category B] + [verb] + [Value A] and [Value B], respectively.',
    badExample:
      'In 2005, digital telecoms and print media were $1,800 and $1,200 respectively.',
    badReason:
      'Wrong Order! Digital was $1,200 and Print was $1,800. Naming Digital first assigns $1,800 to Digital!',
    goodExample:
      'In 2005, households allocated $1,800 and $1,200 to print media and digital telecoms, respectively.',
    secondaryGoodExample:
      'Tokyo and London recorded the longest average daily commutes, at 48 and 43 minutes, respectively.',
    drill: {
      question:
        'Practice: In 2025, Food = $8,100 and Transport = $6,200. Which sentence uses "respectively" accurately?',
      options: [
        {
          id: 'r-opt1',
          text: 'By 2025, expenditure on food and transport stood at $8,100 and $6,200, respectively.',
          isCorrect: true,
          explanation: 'Correct (Band 8.5): First noun (food) matches first figure ($8,100); second noun (transport) matches second figure ($6,200).',
        },
        {
          id: 'r-opt2',
          text: 'By 2025, expenditure on transport and food stood at $8,100 and $6,200, respectively.',
          isCorrect: false,
          explanation: 'Inaccurate Order: Naming "transport" first falsely reports transport as $8,100!',
        },
        {
          id: 'r-opt3',
          text: 'By 2025, food was $8,100 respectively, while transport was $6,200 respectively.',
          isCorrect: false,
          explanation: 'Grammar Error: "Respectively" is used once at the end of a paired sentence (A and B ... X and Y, respectively).',
        },
      ],
    },
  },
  {
    id: 'connectors',
    tabLabel: '5. Contrast Words (whereas)',
    title: 'Pattern 5: Contrast Linkers ("whereas" vs. "in contrast to")',
    examinerPurpose:
      'Essential for connecting opposite trends or comparing high vs. low categories.',
    trHint:
      'TR Gramer Farkı: "Whereas" bağlaçtır, kendisinden sonra tam cümle (Özne + Fiil) alır. "In contrast to" ise edattır, kendisinden sonra sadece isim grubu alır.',
    formula:
      '[Clause A], whereas / while [Subject + Verb B].   |   In stark contrast to [Noun Phrase A], [Subject + Verb B].',
    badExample:
      'Tokyo rail share is 64%. On the other hand, Houston rail share is 3%, whereas.',
    badReason:
      'Never put "whereas" alone at the end of a sentence; it must join two clauses together.',
    goodExample:
      'In stark contrast to Tokyo, where rail accounted for nearly two-thirds of commuters (64%), rail usage in Houston was negligible at just 3%.',
    secondaryGoodExample:
      'Whereas cycling and walking represented nearly half of all journeys in Amsterdam (46%), active transport remained below 10% in Sydney and Houston.',
    drill: {
      question:
        'Practice: Which sentence uses "In contrast to" vs. "Whereas" with correct grammar?',
      options: [
        {
          id: 'c-opt1',
          text: 'In contrast to spending on print media ($300), digital outlays reached $5,800 in 2025.',
          isCorrect: true,
          explanation: 'Correct (Band 8.5): "In contrast to" is followed by a noun phrase ("spending on print media ($300)"), not a verb.',
        },
        {
          id: 'c-opt2',
          text: 'In contrast to print media fell to $300, digital outlays reached $5,800 in 2025.',
          isCorrect: false,
          explanation: 'Grammar Error: Do not put a verb ("fell") after "In contrast to". Use "Whereas print media fell..." instead.',
        },
        {
          id: 'c-opt3',
          text: 'Whereas spending on print media ($300), digital outlays reached $5,800 in 2025.',
          isCorrect: false,
          explanation: 'Grammar Error: "Whereas" requires a verb in its clause ("Whereas spending on print media stood at $300,...").',
        },
      ],
    },
  },
];

export const PLANNING_METHODS_DATA = {
  methodA: {
    id: 'method-a-static',
    badge: 'Method A: Static Table Plan (No Years)',
    bestFor: 'Single-Year Snapshot Tables (e.g., 2024 City Transport Table)',
    corePrinciple:
      'When there are no years, group the rows by their dominant feature (e.g., Public/Active Transit Cities vs. Car-Dependent Cities).',
    steps: [
      {
        step: '1. Check Column Units (45 sec)',
        detail:
          'Notice that the first 4 columns are percentages (%), while the last column is minutes. Draw a vertical line before the last column so you do not mix units.',
      },
      {
        step: '2. Circle Highest & Lowest in Each Column (60 sec)',
        detail:
          'Circle Tokyo (64% Rail, 48 mins), Houston (86% Car, 3% Rail), and Amsterdam (46% Cycling/Walking, 26 mins shortest commute).',
      },
      {
        step: '3. Split Rows into 2 Body Paragraphs (60 sec)',
        detail:
          'Body Paragraph 1: Rail & Active Transport Leaders (Tokyo, London, Amsterdam). Body Paragraph 2: Car-Dominated Cities (Houston and Sydney).',
      },
      {
        step: '4. Ban Change Verbs (15 sec)',
        detail:
          'Remind yourself NOT to write "rose, increased, fell, peaked" because all data comes from a single year (2024).',
      },
    ],
  },
  methodB: {
    id: 'method-b-dynamic',
    badge: 'Method B: Dynamic Table Plan (With Years)',
    bestFor: 'Multi-Year Time-Series Tables (e.g., 2005–2025 Household Spending)',
    corePrinciple:
      'Write ↑ or ↓ next to each row. Cross out the middle year (2015) for straight-line rows so you only report 7–8 key figures.',
    steps: [
      {
        step: '1. Circle the Unit Multiplier (45 sec)',
        detail:
          'Underline "(in US$ thousands)" in the table header so you remember to write "$14,200" instead of "$14.2".',
      },
      {
        step: '2. Cross Out Linear Midpoints (60 sec)',
        detail:
          'Cross out the 2015 column for Housing, Food, Digital, and Print Media. Only circle 2015 for Transport ($8,500) because it peaked in 2015 before falling.',
      },
      {
        step: '3. Split Rows into 2 Body Paragraphs (60 sec)',
        detail:
          'Body Paragraph 1: Large Living Costs (Housing, Food, Transport). Body Paragraph 2: Small Opposite Sectors (Digital 5x surge vs. Print 6x drop).',
      },
      {
        step: '4. Plan Your 2-Sentence Overview (15 sec)',
        detail:
          'Sentence 1: Housing was largest; Food/Transport/Print fell. Sentence 2: Digital grew fastest and overtook Print Media (zero numbers!).',
      },
    ],
  },
  pacingProtocol: [
    {
      window: 'Minutes 00:00 – 03:00',
      phase: 'Stage 1: Read & Filter Numbers',
      tasks: [
        'Circle the unit in the table header ("in thousands" or "%").',
        'Check if the table is Dynamic (has years) or Static (single year).',
        'Circle 6 to 8 key cells and cross out unremarkable middle years.',
      ],
    },
    {
      window: 'Minutes 03:00 – 05:00',
      phase: 'Stage 2: Group into 2 Paragraphs',
      tasks: [
        'Bracket the rows into 2 logical groups for Body Paragraph 1 and Body Paragraph 2.',
        'Plan your 2-sentence Overview (making sure it has zero numbers).',
      ],
    },
    {
      window: 'Minutes 05:00 – 18:00',
      phase: 'Stage 3: Write 4 Paragraphs (13 Mins)',
      tasks: [
        'Mins 5–7: Write 1-sentence Introduction + 2-sentence Overview (~60 words).',
        'Mins 7–13: Write Body Paragraph 1 (Large Categories, ~60 words).',
        'Mins 13–18: Write Body Paragraph 2 (Small/Opposite Categories, ~55 words).',
      ],
    },
    {
      window: 'Minutes 18:00 – 20:00',
      phase: 'Stage 4: Final 2-Minute Check',
      tasks: [
        'Unit Check: Did you write "$14,200" instead of "$14.2"?',
        'Subject Check: Did you write "spending on transport rose" instead of "transport rose"?',
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
      'Examiner Rule: Missing an Overview (or putting numbers inside the Overview) caps Task Achievement at Band 5.5 / 6.0.',
    checkpoints: [
      {
        id: 'ta-1',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'My Paragraph 2 (Overview) summarizes the biggest category and main changes with ZERO raw numbers.',
        remedyModule: 'Step 5 (Overview Workshop)',
      },
      {
        id: 'ta-2',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'I selected 6 to 8 key figures instead of listing all 15 cells.',
        remedyModule: 'Step 3 (Select Key Numbers)',
      },
      {
        id: 'ta-3',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'I applied the "(in thousands)" header unit accurately ($14,200 and $300, never $14.2).',
        remedyModule: 'Step 1 (3 Core Rules)',
      },
      {
        id: 'ta-4',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'I highlighted Transport’s 2015 peak ($8,500) and Digital overtaking Print Media.',
        remedyModule: 'Step 3 (Select Key Numbers)',
      },
    ],
  },
  {
    criterion: 'CC',
    fullName: 'Coherence & Cohesion',
    weight: '25%',
    ceilingWarning:
      'Examiner Rule: Describing the table row-by-row ("First... Second... Third...") caps Coherence & Cohesion at Band 6.0.',
    checkpoints: [
      {
        id: 'cc-1',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'My essay is organized into 4 clear paragraphs (Introduction, Overview, Body 1, Body 2).',
        remedyModule: 'Step 8 (Band 8.5 Model)',
      },
      {
        id: 'cc-2',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'I grouped the categories logically into 2 groups instead of walking row by row.',
        remedyModule: 'Step 4 (Group into 2 Paragraphs)',
      },
      {
        id: 'cc-3',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'I used natural linkers ("Overall,", "Regarding major living costs,", "In stark contrast,") instead of "First, Second, Finally".',
        remedyModule: 'Step 8 (Band 8.5 Model)',
      },
    ],
  },
  {
    criterion: 'LR',
    fullName: 'Lexical Resource (Vocabulary)',
    weight: '25%',
    ceilingWarning:
      'Examiner Rule: Using dynamic trend verbs ("rose, fell") on a single-year static table lowers Vocabulary & Grammar scores.',
    checkpoints: [
      {
        id: 'lr-1',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'I matched my verbs to the table type (no "rose/fell" on static tables).',
        remedyModule: 'Step 1 (3 Core Rules)',
      },
      {
        id: 'lr-2',
        bandTarget: 7,
        isCriticalCeiling: false,
        label: 'I wrote "spending/expenditure on transport rose" rather than "transport rose".',
        remedyModule: 'Step 9 (Error Clinic)',
      },
      {
        id: 'lr-3',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'I used precise expressions ("commanded the largest share", "grew nearly fivefold", "a mere sixth").',
        remedyModule: 'Step 6 (5 Sentence Templates)',
      },
    ],
  },
  {
    criterion: 'GRA',
    fullName: 'Grammatical Range & Accuracy',
    weight: '25%',
    ceilingWarning:
      'Examiner Rule: Repeating simple "X was Y" sentences limits Grammar to Band 6.0.',
    checkpoints: [
      {
        id: 'gra-1',
        bandTarget: 7,
        isCriticalCeiling: false,
        label: 'I compared categories accurately (never writing "higher than 2005").',
        remedyModule: 'Step 6 (5 Sentence Templates)',
      },
      {
        id: 'gra-2',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'I used at least one comma + "-ing" clause (", peaking at $8,500 before falling to...").',
        remedyModule: 'Step 6 (5 Sentence Templates)',
      },
      {
        id: 'gra-3',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'I used "respectively" once with the exact 1-to-1 order and a comma before it.',
        remedyModule: 'Step 6 (5 Sentence Templates)',
      },
    ],
  },
];
