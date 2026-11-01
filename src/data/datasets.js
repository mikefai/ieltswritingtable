// Centralized pedagogical datasets, cell-level key feature solutions,
// Band 8.5 annotated benchmark model, and Band 5.5 error clinic data.

export const PRIMARY_TABLE_DATASET = {
  id: 'household-expenditure-2005-2025',
  type: 'dynamic',
  examTimeMinutes: 20,
  minWords: 150,
  promptRubric:
    'The table below gives information about average annual household expenditure on five categories of goods and services in a European country in 2005, 2015, and 2025.',
  taskInstruction:
    'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  tableTitle: 'Average Annual Household Expenditure by Category (2005–2025)',
  unitHeader: '(in US$ thousands per household)',
  unitMultiplierNote:
    'CRITICAL MULTIPLIER: Every cell value must be multiplied by 1,000 when reported as a raw dollar figure (e.g., 14.2 = $14,200, NOT $14.20; 0.3 = $300).',
  columns: [
    { key: 'category', label: 'Expenditure Category', align: 'left' },
    { key: 'y2005', label: '2005', align: 'right' },
    { key: 'y2015', label: '2015', align: 'right' },
    { key: 'y2025', label: '2025', align: 'right' },
  ],
  rows: [
    {
      id: 'housing',
      category: 'Housing & Utilities',
      recommendedGroup: 'bp1',
      groupRationale:
        'Cluster in Body Paragraph 1 (High-Outlay Core Staples): Commands the largest share of household budgets across all three decades and records the highest absolute dollar growth (+$7,300).',
      trajectorySummary: 'Dominant category; continuous upward trajectory (+51%)',
      cells: {
        y2005: {
          value: '14.2',
          trueDollarValue: '$14,200',
          status: 'must_report',
          featureType: 'Baseline Leader',
          ruleId: 'extremes',
          rationale:
            'Must Report (Key Feature): Establishes Housing as the dominant expenditure from the outset ($14,200) and anchors the +$7,300 surge to 2025.',
        },
        y2015: {
          value: '16.8',
          trueDollarValue: '$16,800',
          status: 'omit',
          featureType: 'Linear Midpoint',
          ruleId: 'noise',
          rationale:
            'Omit (Data Noise): Unremarkable intermediate step in a monotonic upward trend. Reporting 2005 ($14,200) and 2025 ($21,500) with "climbed steadily" captures the trend without listing.',
        },
        y2025: {
          value: '21.5',
          trueDollarValue: '$21,500',
          status: 'must_report',
          featureType: 'Global Peak',
          ruleId: 'extremes',
          rationale:
            'Must Report (Key Feature): The highest single figure in the entire matrix ($21,500), exceeding the next three categories combined by 2025.',
        },
      },
    },
    {
      id: 'food',
      category: 'Food & Groceries',
      recommendedGroup: 'bp1',
      groupRationale:
        'Cluster in Body Paragraph 1 (High-Outlay Core Staples): Remains the second-largest household cost throughout the 20-year span despite a modest, steady contraction.',
      trajectorySummary: 'Second-ranked staple; gentle downward drift (-14%)',
      cells: {
        y2005: {
          value: '9.4',
          trueDollarValue: '$9,400',
          status: 'supporting',
          featureType: 'Secondary Anchor',
          ruleId: 'shift',
          rationale:
            'Supporting Context: Useful benchmark showing Food started as the clear runner-up at $9,400 before edging downward.',
        },
        y2015: {
          value: '8.9',
          trueDollarValue: '$8,900',
          status: 'omit',
          featureType: 'Linear Midpoint',
          ruleId: 'noise',
          rationale:
            'Omit (Data Noise): Classic Band 5 trap. Citing 9.4, then 8.9, then 8.1 is mechanical chronological listing.',
        },
        y2025: {
          value: '8.1',
          trueDollarValue: '$8,100',
          status: 'supporting',
          featureType: 'Terminal Context',
          ruleId: 'shift',
          rationale:
            'Supporting Context: Pairs with 2005 ($9,400) to illustrate a mild contraction to $8,100 while retaining second place.',
        },
      },
    },
    {
      id: 'transport',
      category: 'Transport & Travel',
      recommendedGroup: 'bp1',
      groupRationale:
        'Cluster in Body Paragraph 1 (High-Outlay Core Staples): Mid-to-high budget item that shares large-scale dollar framing with Housing and Food, while exhibiting the table’s sole non-linear inflection point.',
      trajectorySummary: 'Non-linear anomaly: peaked in 2015 before falling below baseline',
      cells: {
        y2005: {
          value: '7.6',
          trueDollarValue: '$7,600',
          status: 'supporting',
          featureType: 'Anomaly Baseline',
          ruleId: 'anomaly',
          rationale:
            'Supporting Context: Provides the initial $7,600 reference point needed to show that 2025 spending ($6,200) ended lower than it began.',
        },
        y2015: {
          value: '8.5',
          trueDollarValue: '$8,500',
          status: 'must_report',
          featureType: 'Mid-Period Anomaly Peak',
          ruleId: 'anomaly',
          rationale:
            'Must Report (Key Feature): Standout Anomaly. Transport is the ONLY category in the table that reverses direction in 2015 (peaking at $8,500 before dropping).',
        },
        y2025: {
          value: '6.2',
          trueDollarValue: '$6,200',
          status: 'must_report',
          featureType: 'Post-Peak Contraction',
          ruleId: 'anomaly',
          rationale:
            'Must Report (Key Feature): Completes the non-linear arc, falling to $6,200 (nearly overtaken by Digital & Telecoms).',
        },
      },
    },
    {
      id: 'digital',
      category: 'Digital & Telecoms',
      recommendedGroup: 'bp2',
      groupRationale:
        'Cluster in Body Paragraph 2 (Low-Base Divergent Sectors): Pairs directly with Print Media as a structural technological substitution story (started lowest, surged nearly fivefold).',
      trajectorySummary: 'Largest proportional surge: nearly fivefold increase (+383%)',
      cells: {
        y2005: {
          value: '1.2',
          trueDollarValue: '$1,200',
          status: 'must_report',
          featureType: 'Surge Baseline',
          ruleId: 'shift',
          rationale:
            'Must Report (Key Feature): Starting at just $1,200 (the lowest figure in 2005), this number is essential to prove the nearly fivefold proportional surge.',
        },
        y2015: {
          value: '2.9',
          trueDollarValue: '$2,900',
          status: 'omit',
          featureType: 'Linear Midpoint',
          ruleId: 'noise',
          rationale:
            'Omit (Data Noise): Unnecessary midpoint. A Band 8+ writer synthesizes 1.2 → 5.8 as "surged almost fivefold from $1,200 to $5,800".',
        },
        y2025: {
          value: '5.8',
          trueDollarValue: '$5,800',
          status: 'must_report',
          featureType: 'Proportional Surge Peak',
          ruleId: 'shift',
          rationale:
            'Must Report (Key Feature): Reaches $5,800—an almost fivefold expansion that brings it within $400 of Transport spending.',
        },
      },
    },
    {
      id: 'print',
      category: 'Print Media & Postage',
      recommendedGroup: 'bp2',
      groupRationale:
        'Cluster in Body Paragraph 2 (Low-Base Divergent Sectors): Direct inverse counterpart to Digital & Telecoms; started above Digital in 2005 ($1,800 vs. $1,200) before collapsing to a negligible $300.',
      trajectorySummary: 'Sharpest proportional collapse: shrank by five-sixths (-83%)',
      cells: {
        y2005: {
          value: '1.8',
          trueDollarValue: '$1,800',
          status: 'supporting',
          featureType: 'Rank-Reversal Anchor',
          ruleId: 'shift',
          rationale:
            'Supporting Context: Highlights the rank reversal with Digital & Telecoms ($1,800 vs. $1,200 in 2005) and anchors the sixfold collapse.',
        },
        y2015: {
          value: '0.9',
          trueDollarValue: '$900',
          status: 'omit',
          featureType: 'Linear Midpoint',
          ruleId: 'noise',
          rationale:
            'Omit (Data Noise): Exact halving midpoint ($900). Omit to keep total cited figures within the 6–8 Band 8+ sweet spot.',
        },
        y2025: {
          value: '0.3',
          trueDollarValue: '$300',
          status: 'must_report',
          featureType: 'Global Trough',
          ruleId: 'extremes',
          rationale:
            'Must Report (Key Feature): Global Trough across all 15 cells ($300, or one-sixth of its 2005 level). Note the unit conversion: 0.3 thousand = $300.',
        },
      },
    },
  ],
};

// Static Snapshot comparison table used in Module 1, Module 2 (Static Mode toggle), and Module 7
export const STATIC_SNAPSHOT_DATASET = {
  id: 'commuter-modal-split-2024',
  type: 'static',
  examTimeMinutes: 20,
  minWords: 150,
  promptRubric:
    'The table below shows the percentage of commuters using four modes of transport in five metropolitan cities in 2024, along with average daily commute time.',
  taskInstruction:
    'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  tableTitle: 'Metropolitan Commuter Transport Share & Duration (2024 Census Snapshot)',
  unitHeader: '(Modal columns in % of workforce; final column in minutes)',
  unitMultiplierNote:
    'STATIC SNAPSHOT + DUAL UNIT TRAP: First four data columns are percentages (%); the final column is raw minutes. Never apply dynamic trend verbs (rose, fell, peaked) to compare cities.',
  columns: [
    { key: 'city', label: 'City', align: 'left' },
    { key: 'rail', label: 'Metro / Rail (%)', align: 'right' },
    { key: 'car', label: 'Private Car (%)', align: 'right' },
    { key: 'bus', label: 'Bus (%)', align: 'right' },
    { key: 'active', label: 'Cycling / Walking (%)', align: 'right' },
    { key: 'duration', label: 'Avg. Commute (mins)', align: 'right' },
  ],
  rows: [
    {
      id: 'tokyo',
      city: 'Tokyo',
      rail: '64',
      car: '11',
      bus: '8',
      active: '17',
      duration: '48',
      highlightNote: 'Global Rail peak (64%) & lowest Car reliance (11%), yet longest duration (48 mins).',
    },
    {
      id: 'amsterdam',
      city: 'Amsterdam',
      rail: '21',
      car: '24',
      bus: '9',
      active: '46',
      duration: '26',
      highlightNote: 'Outlier in Cycling/Walking (46% — nearly half of commuters) & shortest duration (26 mins).',
    },
    {
      id: 'london',
      city: 'London',
      rail: '49',
      car: '22',
      bus: '18',
      active: '11',
      duration: '43',
      highlightNote: 'Second-highest Rail share (49%) and highest Bus usage (18%).',
    },
    {
      id: 'sydney',
      city: 'Sydney',
      rail: '25',
      car: '58',
      bus: '11',
      active: '6',
      duration: '39',
      highlightNote: 'Majority car-dependent (58%), with low active transport (6%).',
    },
    {
      id: 'houston',
      city: 'Houston',
      rail: '3',
      car: '86',
      bus: '7',
      active: '4',
      duration: '34',
      highlightNote: 'Extreme Private Car dominance (86%) and negligible Rail/Active shares (3% and 4%).',
    },
  ],
};

// Module 8: Band 8.5 Annotated Benchmark Model (174 words)
export const MODEL_ESSAY_DATA = {
  targetBand: '8.5',
  wordCount: 174,
  examinerSummary:
    'This report achieves Band 8.5+ across all four criteria. It cites exactly 8 strategically chosen figures out of 15 (avoiding mechanical midpoint listing), translates the "thousands" unit header accurately ($14,200 and $300), presents a zero-number macro overview, and groups categories analytically into high-value core expenses versus low-value shifting technologies.',
  paragraphs: [
    {
      id: 'p1',
      label: 'Paragraph 1: Paraphrased Introduction',
      role: 'Defines dataset scope, category count, and 20-year timeframe without copying prompt phrasing.',
      segments: [
        {
          text: 'The table compares how much households in a European nation ',
          tags: [],
        },
        {
          text: 'allocated annually to five distinct expenditure brackets',
          tags: ['LR'],
          note: 'LR (Band 8.5): Precise nominalization and academic collocation ("allocated annually to five distinct expenditure brackets") paraphrasing "annual household expenditure on five categories".',
        },
        {
          text: ' at ten-year intervals between 2005 and 2025.',
          tags: ['GRA'],
          note: 'GRA (Band 8): Concise prepositional time-series framing ("at ten-year intervals between 2005 and 2025").',
        },
      ],
    },
    {
      id: 'p2',
      label: 'Paragraph 2: Macro Overview (Zero Raw Numbers)',
      role: 'Synthesizes dominant category, overall directional split, and sharpest structural divergence.',
      segments: [
        {
          text: 'Overall, ',
          tags: ['CC'],
          note: 'CC (Band 8+): Unambiguous macro-signposting token initiating the overview paragraph.',
        },
        {
          text: 'housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period',
          tags: ['TA', 'LR'],
          note: 'TA (Band 9) & LR (Band 8.5): Identifies the overarching dominant feature first using idiomatic financial lexis ("commanded by far the largest share") with zero raw numbers.',
        },
        {
          text: ', whereas ',
          tags: ['CC', 'GRA'],
          note: 'CC / GRA: Subordinating contrastive conjunction linking the dominant leader to the secondary macro-trend.',
        },
        {
          text: 'spending on food, transport, and print media contracted. ',
          tags: ['TA'],
          note: 'TA (Band 8.5): Synthesizes three declining categories into a single macro-observation.',
        },
        {
          text: 'Notably, ',
          tags: ['CC'],
          note: 'CC (Band 8.5): High-register discourse marker highlighting the primary structural divergence.',
        },
        {
          text: 'digital communications experienced the most dramatic proportional expansion, effectively reversing its initial rank with print media.',
          tags: ['TA', 'GRA'],
          note: 'TA / GRA (Band 8.5): Captures the standout proportional shift and rank reversal using a non-finite participle clause ("effectively reversing...").',
        },
      ],
    },
    {
      id: 'p3',
      label: 'Paragraph 3: Body 1 — High-Outlay Core Staples & Anomaly',
      role: 'Clusters the three major budget items (Housing, Food, Transport), contrasting steady trends against the 2015 anomaly.',
      segments: [
        {
          text: 'Regarding major living costs, ',
          tags: ['CC'],
          note: 'CC (Band 8.5): Thematic topic-framing phrase that signals analytical grouping rather than row-by-row listing.',
        },
        {
          text: 'expenditure on housing and utilities ',
          tags: [],
        },
        {
          text: 'surged by just over half from $14,200 in 2005 to a peak of $21,500 in 2025',
          tags: ['TA', 'LR', 'GRA'],
          note: 'TA / LR / GRA: Converts "14.2" and "21.5" accurately using the thousands multiplier ($14,200 / $21,500), omits the redundant 2015 midpoint (16.8), and integrates a proportional fraction ("by just over half").',
        },
        {
          text: ', exceeding the combined total of the remaining four categories in the final year. ',
          tags: ['TA', 'GRA'],
          note: 'TA / GRA (Band 9): Participial relative clause demonstrating genuine mathematical synthesis across the table.',
        },
        {
          text: 'Conversely, ',
          tags: ['CC'],
          note: 'CC: Crisp transition into declining major staples.',
        },
        {
          text: 'outlays on food and groceries drifted downward from $9,400 to $8,100 over the same span. ',
          tags: ['TA', 'LR'],
          note: 'TA / LR: "Outlays... drifted downward" avoids repeating "expenditure/spending fell"; omits the 2015 midpoint ($8.9k).',
        },
        {
          text: 'Transport and travel followed an erratic trajectory, peaking at $8,500 in 2015 before subsiding to $6,200 by 2025.',
          tags: ['TA', 'LR', 'GRA'],
          note: 'TA / GRA (Band 8.5): Isolates the table’s sole non-linear anomaly (2015 peak of $8,500) using a participle time clause ("peaking at... before subsiding to...").',
        },
      ],
    },
    {
      id: 'p4',
      label: 'Paragraph 4: Body 2 — Low-Outlay Divergent Sectors (Tech vs. Print)',
      role: 'Contrasts the two smallest categories via multiples, fractions, and "respectively".',
      segments: [
        {
          text: 'In stark contrast, ',
          tags: ['CC'],
          note: 'CC (Band 8+): Signals shift from high-volume staples to small-scale divergent categories.',
        },
        {
          text: 'the two smallest categories exhibited opposing fortunes. ',
          tags: ['CC', 'LR'],
          note: 'CC / LR: Concise topic sentence anchoring Body Paragraph 2.',
        },
        {
          text: 'In 2005, households spent $1,800 and $1,200 on print media and digital telecoms, respectively. ',
          tags: ['TA', 'GRA'],
          note: 'GRA (Band 8.5): Flawless execution of the "respectively" rule—strict 1-to-1 parallel alignment ($1,800 → print media; $1,200 → digital telecoms) set off by a comma.',
        },
        {
          text: 'Over the subsequent two decades, ',
          tags: ['CC'],
          note: 'CC: Cohesive temporal progression marker.',
        },
        {
          text: 'digital spending grew nearly fivefold to reach $5,800',
          tags: ['TA', 'GRA'],
          note: 'TA / GRA (Band 8.5): Uses an adverbial scale multiple ("grew nearly fivefold") paired with the terminal figure ($5,800).',
        },
        {
          text: ', whereas print media expenditure collapsed to a mere sixth of its original level, finishing at an negligible $300.',
          tags: ['TA', 'LR', 'GRA'],
          note: 'TA / LR / GRA (Band 9): Combines contrastive "whereas", proportional fraction ("a mere sixth"), and accurate decimal-to-hundreds conversion ("0.3 thousand" = "$300").',
        },
      ],
    },
  ],
};

// Module 9: Band 5.5 Error Clinic Script (8 clickable examiner penalty tokens)
export const ERROR_CLINIC_DATA = {
  candidateBand: '5.5',
  wordCount: 142,
  examinerVerdict:
    'This script exhibits all five classic table-reporting breakdowns: raw figures dumped into the overview, omission of the "(in thousands)" multiplier ($14.2 instead of $14,200), subject-category confusion ("Housing and utilities increased"), mechanical row-by-row listing of all 2015 midpoints, and a broken "respectively" structure.',
  paragraphs: [
    {
      id: 'ep1',
      segments: [
        {
          type: 'text',
          content:
            'The table shows how much money people spent on five categories in 2005, 2015 and 2025. ',
        },
        {
          type: 'error',
          id: 'err-overview-numbers',
          criterion: 'TA',
          shortLabel: 'Raw Data in Overview',
          flawedText:
            'Overall, Housing was 14.2 in 2005 and went up to 21.5 in 2025, while Print Media was 0.3 in 2025.',
          penaltyExplanation:
            'Task Achievement Penalty (Caps TA at Band 5/6): An overview must synthesize macro-trends without citing specific cell numbers, dates, or missing-unit decimals. Packing raw figures into the overview blurs the distinction between Overview and Body paragraphs.',
          calibratedFix:
            'Overall, housing and utilities commanded the largest share of household budgets throughout the period, whereas print media remained the smallest and steepest-declining category.',
        },
      ],
    },
    {
      id: 'ep2',
      segments: [
        {
          type: 'error',
          id: 'err-multiplier-drop',
          criterion: 'TA',
          shortLabel: 'Dropped Multiplier Trap',
          flawedText: 'First, in 2005, people spent $14.2 on Housing and Utilities,',
          penaltyExplanation:
            'Task Achievement Penalty (Inaccurate Data Reporting): The table header explicitly states "(in US$ thousands)". Writing "$14.2" reports fourteen dollars and twenty cents instead of $14,200. Examiners penalize systematic failure to read scale headers.',
          calibratedFix:
            'In 2005, households allocated $14,200 to housing and utilities,',
        },
        {
          type: 'text',
          content: ' and ',
        },
        {
          type: 'error',
          id: 'err-mechanical-listing',
          criterion: 'TA',
          shortLabel: 'Mechanical Midpoint Listing',
          flawedText:
            'then it rose to $16.8 in 2015 and then it increased to $21.5 in 2025. Next, Food and Groceries was $9.4 in 2005, $8.9 in 2015, and $8.1 in 2025.',
          penaltyExplanation:
            'TA & CC Penalty (Data Dumping / Linear Walk): Reciting every single year (2005 → 2015 → 2025) for linear trends ("then... and then... Next...") is mechanical listing rather than selective synthesis. It caps TA and CC at Band 5/6.',
          calibratedFix:
            'which climbed steadily by over 50% to reach $21,500 by 2025. Conversely, food expenditure drifted downward from $9,400 to $8,100 over the twenty-year span.',
        },
      ],
    },
    {
      id: 'ep3',
      segments: [
        {
          type: 'error',
          id: 'err-subject-confusion',
          criterion: 'LR',
          shortLabel: 'Illogical Subject-Verb Collocation',
          flawedText: 'Moving to the third row, Transport and Travel increased to 8.5 in 2015',
          penaltyExplanation:
            'Lexical Resource & CC Penalty: First, "Moving to the third row" exposes mechanical table navigation. Second, "Transport and Travel" did not increase—household *expenditure on* transport increased. Treating category labels as physical subjects is a classic Band 6 ceiling error.',
          calibratedFix:
            'Meanwhile, spending on transport bucked the general downward trend among secondary staples, peaking at $8,500 in 2015',
        },
        {
          type: 'text',
          content: ' before falling to 6.2 in 2025. ',
        },
        {
          type: 'error',
          id: 'err-comparative-syntax',
          criterion: 'GRA',
          shortLabel: 'Faulty Multiple Comparison',
          flawedText: 'Also, Digital and Telecoms was almost five times higher than 2005 in 2025, from 1.2 to 5.8.',
          penaltyExplanation:
            'Grammatical Range & Accuracy Penalty (Faulty Comparison): Comparing a category ("Digital and Telecoms") directly to a year ("higher than 2005") is grammatically elliptical and inaccurate. You must compare the 2025 figure to *that of 2005* or use an adverbial multiplier ("grew nearly fivefold").',
          calibratedFix:
            'By contrast, outlays on digital communications surged nearly fivefold from $1,200 in 2005 to $5,800 in 2025.',
        },
      ],
    },
    {
      id: 'ep4',
      segments: [
        {
          type: 'error',
          id: 'err-static-verb-confusion',
          criterion: 'LR',
          shortLabel: 'Repetitive / Imprecise Lexis',
          flawedText: 'Finally, Print Media went down a lot from 1.8 in 2005 to 0.9 in 2015 and 0.3 in 2025.',
          penaltyExplanation:
            'Lexical Resource Penalty (Informal Quantifier + Listing): "Went down a lot" is conversational Band 5 vocabulary, and reciting 1.8 → 0.9 → 0.3 adds three more unanalyzed numbers (bringing the essay total to 14 out of 15 cells!).',
          calibratedFix:
            'Over the same period, spending on print media collapsed to just one-sixth of its initial level, dropping from $1,800 to a negligible $300.',
        },
        {
          type: 'text',
          content: ' ',
        },
        {
          type: 'error',
          id: 'err-respectively-syntax',
          criterion: 'GRA',
          shortLabel: 'Broken "Respectively" Alignment',
          flawedText:
            'In 2025, Digital and Print Media were 0.3 and 5.8 respectively.',
          penaltyExplanation:
            'GRA & TA Penalty (Inverted "Respectively" Order): "Digital and Print Media" lists Digital first and Print second, so "0.3 and 5.8 respectively" falsely assigns 0.3 to Digital and 5.8 to Print! Furthermore, the comma before "respectively" is missing.',
          calibratedFix:
            'By 2025, expenditure on digital services and print media stood at $5,800 and $300, respectively.',
        },
      ],
    },
  ],
};
