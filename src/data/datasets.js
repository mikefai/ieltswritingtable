// Centralized datasets written in clear, student-friendly English,
// with surgical Turkish (TR) assistance ONLY where L1 interference or traps occur.

export const FOUR_PARAGRAPH_BLUEPRINT = [
  {
    paragraphNumber: 1,
    title: 'Paragraph 1: Introduction',
    sentenceCount: '1 Sentence (~20–25 words)',
    whatToDoEN:
      'Rewrite the question prompt in your own words. Change a few key words ("shows" → "compares", "spending" → "expenditure"). Never copy the question word-for-word, and do not write any data numbers here.',
    trHint:
      'TR İpucu: Soru cümlesini eş anlamlı kelimelerle 1 cümlede yeniden yazın. Asla tablodan sayı yazmayın.',
    template:
      'The table compares how much [Who: households in a European country] spent annually on [What: five categories of goods and services] in [When: 2005, 2015, and 2025].',
    exampleEN:
      'The table compares how much households in a European nation allocated annually to five distinct expenditure brackets at ten-year intervals between 2005 and 2025.',
  },
  {
    paragraphNumber: 2,
    title: 'Paragraph 2: Overview (The Big Picture)',
    sentenceCount: '2 Sentences (~40–45 words) · ZERO NUMBERS!',
    whatToDoEN:
      'Summarize the main trends in 2 sentences WITHOUT using any numbers or dates. Sentence 1: Which category was the largest overall, and which ones went up or down? Sentence 2: Which category had the biggest jump or changed rank?',
    trHint:
      'TR Kritik Kural: Overview paragrafında KESİNLİKLE rakam ($14,200 vb.) yazılmaz! Sadece en büyük kategoriyi ve en dikkat çekici değişimi sözel olarak özetleyin.',
    template:
      'Overall, [Largest category] accounted for the largest expense throughout the period, whereas spending on [Declining categories] declined. Notably, [Fastest growing category] experienced the most dramatic growth, overtaking [Category it passed].',
    exampleEN:
      'Overall, housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period, whereas spending on food, transport, and print media contracted. Notably, digital communications experienced the most dramatic proportional expansion, effectively reversing its initial rank with print media.',
  },
  {
    paragraphNumber: 3,
    title: 'Paragraph 3: Body 1 (Large Categories)',
    sentenceCount: '3 Sentences (~55–60 words) · Use Key Numbers',
    whatToDoEN:
      'Compare the 3 biggest living costs (Housing, Food, Transport) using exact dollar figures. Remember the table header says "(in thousands)"—so write "$14,200", NOT "$14.2"! Skip the middle year (2015) for Housing and Food; only report 2015 for Transport because it peaked in 2015.',
    trHint:
      'TR İpucu: Büyük harcamaları burada sayı vererek anlatın. Düzenli artan/azalan satırlarda 2015 ara yılını atlayın; 2015’i sadece zirve yapan Ulaşım ($8,500) için yazın.',
    template:
      'Regarding major living costs, spending on [Category 1] rose by [Fraction/Pct] from $[Start] in 2005 to $[End] in 2025. Conversely, outlays on [Category 2] fell gradually from $[Start] to $[End]. Meanwhile, [Category 3] peaked at $[2015 Peak] in 2015 before dropping to $[End] by 2025.',
    exampleEN:
      'Regarding major living costs, expenditure on housing and utilities surged by just over half from $14,200 in 2005 to a peak of $21,500 in 2025, exceeding the combined total of the remaining four categories in the final year. Conversely, outlays on food and groceries drifted downward from $9,400 to $8,100 over the same span. Transport and travel followed an erratic trajectory, peaking at $8,500 in 2015 before subsiding to $6,200 by 2025.',
  },
  {
    paragraphNumber: 4,
    title: 'Paragraph 4: Body 2 (Small / Opposite Categories)',
    sentenceCount: '3 Sentences (~50–55 words) · Use Multiples & "Respectively"',
    whatToDoEN:
      'Contrast the 2 smallest categories (Digital vs. Print Media), which moved in opposite directions. Use "respectively" to give their 2005 starting figures in one sentence, then contrast Digital’s 5x surge ("grew nearly fivefold") with Print’s collapse ("shrank to a mere sixth"). Stop here—do NOT write a 5th conclusion paragraph!',
    trHint:
      'TR İpucu: En küçük ama zıt yönlü iki kategoriyi (Dijital vs. Basılı Medya) kıyaslayın. Task 1’de 5. bir sonuç (Conclusion) paragrafı YAZILMAZ.',
    template:
      'In stark contrast, the two smallest categories moved in opposite directions. In 2005, households spent $[Value A] and $[Value B] on [Category A] and [Category B], respectively. By 2025, [Category B] grew nearly fivefold to $[End], whereas [Category A] shrank to a mere sixth of its initial level, finishing at $[End].',
    exampleEN:
      'In stark contrast, the two smallest categories exhibited opposing fortunes. In 2005, households spent $1,800 and $1,200 on print media and digital telecoms, respectively. Over the subsequent two decades, digital spending grew nearly fivefold to reach $5,800, whereas print media expenditure collapsed to a mere sixth of its original level, finishing at a negligible $300.',
  },
];

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
    'Unit Header Rule: Because the sub-header says "(in US$ thousands)", every number in the table must be multiplied by 1,000 when written as a dollar amount (14.2 = $14,200; 0.3 = $300).',
  unitMultiplierNoteTR:
    'TR Birim Uyarısı: Başlıkta "thousands (bin)" yazdığı için 14.2 sayısını "$14.2" olarak değil, "$14,200" (veya "14.2 thousand dollars") olarak yazmalısınız.',
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
        'Put in Body Paragraph 1 (Large Core Expenses): It is by far the biggest expense in every year and has the largest dollar increase (+$7,300).',
      trajectorySummary: 'Largest category; steady upward climb (+51% | +$7,300)',
      cells: {
        y2005: {
          value: '14.2',
          trueDollarValue: '$14,200',
          status: 'must_report',
          featureType: 'Starting Leader',
          ruleId: 'extremes',
          rationale:
            'Must Report (Key Feature): Shows that Housing started as the #1 expense at $14,200 and anchors the +$7,300 rise to 2025.',
        },
        y2015: {
          value: '16.8',
          trueDollarValue: '$16,800',
          status: 'omit',
          featureType: 'Skip Midpoint',
          ruleId: 'noise',
          rationale:
            'Skip / Omit: Housing goes up in a straight line (2005 → 2015 → 2025). Just report the start ($14,200) and end ($21,500) with "climbed steadily". Writing 2015 for every row causes a listing penalty.',
        },
        y2025: {
          value: '21.5',
          trueDollarValue: '$21,500',
          status: 'must_report',
          featureType: 'Highest Value (Peak)',
          ruleId: 'extremes',
          rationale:
            'Must Report (Key Feature): The highest number in the entire table ($21,500)—larger than the other four categories combined in 2025 ($20,400)!',
        },
      },
    },
    {
      id: 'food',
      category: 'Food & Groceries',
      recommendedGroup: 'bp1',
      groupRationale:
        'Put in Body Paragraph 1 (Large Core Expenses): Even though it drops slightly, it remains the second-largest household cost across all 20 years.',
      trajectorySummary: '2nd largest cost; gentle decline (-14% | -$1,300)',
      cells: {
        y2005: {
          value: '9.4',
          trueDollarValue: '$9,400',
          status: 'supporting',
          featureType: 'Start Context',
          ruleId: 'shift',
          rationale:
            'Supporting Context: Useful starting point ($9,400) to show Food was in second place before drifting down to $8,100.',
        },
        y2015: {
          value: '8.9',
          trueDollarValue: '$8,900',
          status: 'omit',
          featureType: 'Skip Midpoint',
          ruleId: 'noise',
          rationale:
            'Skip / Omit: Writing "9.4 in 2005, 8.9 in 2015, and 8.1 in 2025" is mechanical listing (Band 5/6). Skip 8.9 and just say "fell gradually from $9,400 to $8,100".',
        },
        y2025: {
          value: '8.1',
          trueDollarValue: '$8,100',
          status: 'supporting',
          featureType: 'End Context',
          ruleId: 'shift',
          rationale:
            'Supporting Context: Pairs with 2005 ($9,400) to show the gentle downward trend to $8,100.',
        },
      },
    },
    {
      id: 'transport',
      category: 'Transport & Travel',
      recommendedGroup: 'bp1',
      groupRationale:
        'Put in Body Paragraph 1 (Large Core Expenses): It is the third major household cost and the ONLY row that changes direction in 2015.',
      trajectorySummary: 'Exception (Anomaly): peaked in 2015 before falling',
      cells: {
        y2005: {
          value: '7.6',
          trueDollarValue: '$7,600',
          status: 'supporting',
          featureType: 'Start Context',
          ruleId: 'anomaly',
          rationale:
            'Supporting Context: Shows the starting level ($7,600) so the reader sees that 2025 spending ($6,200) ended lower than it began.',
        },
        y2015: {
          value: '8.5',
          trueDollarValue: '$8,500',
          status: 'must_report',
          featureType: '2015 Peak Anomaly!',
          ruleId: 'anomaly',
          rationale:
            'Must Report (Key Feature): Transport is the ONLY category in the table that goes up in 2015 ($8,500) and then drops! This is the only 2015 number you should report.',
        },
        y2025: {
          value: '6.2',
          trueDollarValue: '$6,200',
          status: 'must_report',
          featureType: 'Post-Peak Drop',
          ruleId: 'anomaly',
          rationale:
            'Must Report (Key Feature): Completes the Transport story ("peaking at $8,500 in 2015 before falling to $6,200 by 2025").',
        },
      },
    },
    {
      id: 'digital',
      category: 'Digital & Telecoms',
      recommendedGroup: 'bp2',
      groupRationale:
        'Put in Body Paragraph 2 (Small / Opposite Sectors): Pairs directly with Print Media. Digital started lowest ($1,200) but grew nearly fivefold ($5,800), overtaking Print Media.',
      trajectorySummary: 'Biggest proportional jump: nearly 5x growth (+383%)',
      cells: {
        y2005: {
          value: '1.2',
          trueDollarValue: '$1,200',
          status: 'must_report',
          featureType: '5x Surge Start',
          ruleId: 'shift',
          rationale:
            'Must Report (Key Feature): Starting at just $1,200 (lowest in 2005), this figure is needed to prove the nearly fivefold surge to $5,800.',
        },
        y2015: {
          value: '2.9',
          trueDollarValue: '$2,900',
          status: 'omit',
          featureType: 'Skip Midpoint',
          ruleId: 'noise',
          rationale:
            'Skip / Omit: No need to mention 2015 ($2,900) when you synthesize the 20-year jump as "grew nearly fivefold from $1,200 to $5,800".',
        },
        y2025: {
          value: '5.8',
          trueDollarValue: '$5,800',
          status: 'must_report',
          featureType: '5x Surge End',
          ruleId: 'shift',
          rationale:
            'Must Report (Key Feature): Reaches $5,800—almost 5 times its 2005 level and nearly catching up with Transport ($6,200).',
        },
      },
    },
    {
      id: 'print',
      category: 'Print Media & Postage',
      recommendedGroup: 'bp2',
      groupRationale:
        'Put in Body Paragraph 2 (Small / Opposite Sectors): Exact opposite of Digital. Started higher than Digital in 2005 ($1,800 vs. $1,200) before collapsing to $300.',
      trajectorySummary: 'Steepest drop: shrank to one-sixth (-83% | $300)',
      cells: {
        y2005: {
          value: '1.8',
          trueDollarValue: '$1,800',
          status: 'supporting',
          featureType: 'Start Context',
          ruleId: 'shift',
          rationale:
            'Supporting Context: Useful to pair with Digital in 2005 ("$1,800 and $1,200, respectively") and to show the sixfold drop to $300.',
        },
        y2015: {
          value: '0.9',
          trueDollarValue: '$900',
          status: 'omit',
          featureType: 'Skip Midpoint',
          ruleId: 'noise',
          rationale:
            'Skip / Omit: Skipping this midpoint keeps our essay focused on the 6-fold collapse from $1,800 to $300.',
        },
        y2025: {
          value: '0.3',
          trueDollarValue: '$300',
          status: 'must_report',
          featureType: 'Lowest Value (Trough)',
          ruleId: 'extremes',
          rationale:
            'Must Report (Key Feature): The lowest number in the entire table. Note: 0.3 thousand dollars = $300!',
        },
      },
    },
  ],
};

// Static Snapshot comparison table used in Module 1, Module 2, and Module 10
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
  unitHeader: '(First 4 columns in % of commuters; final column in minutes)',
  unitMultiplierNote:
    'Static Table Rule: This table shows a single year (2024). Never use change verbs like "rose", "increased", or "fell"! Compare cities using "higher than", "the largest share", and "accounted for".',
  unitMultiplierNoteTR:
    'TR Uyarı: Bu tabloda yıllar arası değişim yoktur (sadece 2024). Bu nedenle "arttı / azaldı (rose / fell)" kelimelerini kullanmak yasaktır.',
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
      highlightNote: 'Highest Rail share (64%) & lowest Car use (11%), but longest commute (48 mins).',
    },
    {
      id: 'amsterdam',
      city: 'Amsterdam',
      rail: '21',
      car: '24',
      bus: '9',
      active: '46',
      duration: '26',
      highlightNote: 'Outlier in Cycling/Walking (46% — nearly half) & shortest commute (26 mins).',
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
      highlightNote: 'Extreme Private Car dominance (86%) and minimal Rail/Active shares (3% and 4%).',
    },
  ],
};

// Module 8: Band 8.5 Annotated Benchmark Model (174 words)
export const MODEL_ESSAY_DATA = {
  targetBand: '8.5',
  wordCount: 174,
  examinerSummary:
    'This 174-word model report follows the exact 4-paragraph blueprint: it selects 8 strategic numbers out of 15, converts the "thousands" unit accurately ($14,200 and $300), keeps the Overview 100% free of numbers, and groups the 5 rows logically into two body paragraphs.',
  paragraphs: [
    {
      id: 'p1',
      label: 'Paragraph 1: Introduction (1 Sentence)',
      role: 'Paraphrases what the table shows without copying the prompt.',
      translationTR:
        'Tablo, bir Avrupa ülkesindeki hanelerin 2005 ve 2025 yılları arasında onar yıllık aralıklarla beş farklı harcama grubuna yıllık ne kadar bütçe ayırdığını karşılaştırmaktadır.',
      segments: [
        {
          text: 'The table compares how much households in a European nation ',
          tags: [],
        },
        {
          text: 'allocated annually to five distinct expenditure brackets',
          tags: ['LR'],
          note: 'Vocabulary (LR - Band 8.5): Paraphrases "annual expenditure on five categories" as "allocated annually to five distinct expenditure brackets" (yıllık olarak beş farklı harcama dilimine ayırdığı).',
        },
        {
          text: ' at ten-year intervals between 2005 and 2025.',
          tags: ['GRA'],
          note: 'Grammar (GRA - Band 8.0): Instead of listing "in 2005, 2015, and 2025", uses the natural phrase "at ten-year intervals between 2005 and 2025".',
        },
      ],
    },
    {
      id: 'p2',
      label: 'Paragraph 2: Overview (2 Sentences · Zero Numbers)',
      role: 'Summarizes the biggest category, overall direction, and biggest proportional jump.',
      translationTR:
        'Genel olarak, konut ve faturalar yirmi yıllık dönem boyunca hane bütçelerinde açık ara en büyük payı alırken; gıda, ulaşım ve basılı medya harcamaları daralmıştır. Dikkat çekici bir şekilde, dijital iletişim en büyük oransal artışı yaşamış ve basılı medya ile olan başlangıç sıralamasını tersine çevirmiştir.',
      segments: [
        {
          text: 'Overall, ',
          tags: ['CC'],
          note: 'Cohesion (CC): Always start Paragraph 2 with "Overall," to signal your Overview to the examiner.',
        },
        {
          text: 'housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period',
          tags: ['TA', 'LR'],
          note: 'Task Achievement (TA - Band 9): Identifies the #1 category overall using strong vocabulary ("commanded by far the largest share") with zero raw numbers.',
        },
        {
          text: ', whereas ',
          tags: ['CC', 'GRA'],
          note: 'Contrast Linker: Connects the rising leader to the falling categories in a single complex sentence.',
        },
        {
          text: 'spending on food, transport, and print media contracted. ',
          tags: ['TA'],
          note: 'Task Achievement (TA): Groups all three declining categories together using "contracted" (= shrank/decreased).',
        },
        {
          text: 'Notably, ',
          tags: ['CC'],
          note: 'Cohesion (CC): Signals the second key overview point (the biggest proportional change).',
        },
        {
          text: 'digital communications experienced the most dramatic proportional expansion, effectively reversing its initial rank with print media.',
          tags: ['TA', 'GRA'],
          note: 'TA & GRA (Band 8.5): Highlights Digital’s 5x surge and rank reversal with Print Media using a smooth "-ing" clause (", effectively reversing...").',
        },
      ],
    },
    {
      id: 'p3',
      label: 'Paragraph 3: Body 1 — Major Living Costs (Housing, Food, Transport)',
      role: 'Reports the 3 large categories using exact figures and highlights the 2015 Transport peak.',
      translationTR:
        'Temel yaşam giderlerine bakıldığında, konut ve fatura harcamaları 2005’te 14.200 dolardan yarıdan biraz fazla artarak 2025’te 21.500 dolarla zirveye ulaşmış ve son yılda kalan dört kategorinin toplamını aşmıştır. Buna karşılık, gıda harcamaları aynı dönemde 9.400 dolardan 8.100 dolara gerilemiştir. Ulaşım ise dalgalı bir seyir izleyerek 2015’te 8.500 dolarla zirve yapmış, ardından 2025’te 6.200 dolara düşmüştür.',
      segments: [
        {
          text: 'Regarding major living costs, ',
          tags: ['CC'],
          note: 'Topic Signpost (CC): Clearly tells the examiner that Body Paragraph 1 focuses on the large living expenses.',
        },
        {
          text: 'expenditure on housing and utilities ',
          tags: [],
        },
        {
          text: 'surged by just over half from $14,200 in 2005 to a peak of $21,500 in 2025',
          tags: ['TA', 'LR', 'GRA'],
          note: 'Unit & Fraction Mastery: Converts "14.2" and "21.5" to "$14,200" and "$21,500", skips the 2015 midpoint, and describes the +51% rise as "by just over half".',
        },
        {
          text: ', exceeding the combined total of the remaining four categories in the final year. ',
          tags: ['TA', 'GRA'],
          note: 'Band 9 Comparison: Points out that $21,500 is larger than the other four rows combined ($20,400) using an "-ing" clause.',
        },
        {
          text: 'Conversely, ',
          tags: ['CC'],
          note: 'Cohesion (CC): Smooth transition from rising housing costs to falling food costs.',
        },
        {
          text: 'outlays on food and groceries drifted downward from $9,400 to $8,100 over the same span. ',
          tags: ['TA', 'LR'],
          note: 'Vocabulary Variety (LR): Uses "outlays ... drifted downward" instead of repeating "spending decreased".',
        },
        {
          text: 'Transport and travel followed an erratic trajectory, peaking at $8,500 in 2015 before subsiding to $6,200 by 2025.',
          tags: ['TA', 'LR', 'GRA'],
          note: '2015 Anomaly (TA/GRA): Reports the 2015 figure ($8,500) ONLY for Transport because it peaked in 2015 before falling.',
        },
      ],
    },
    {
      id: 'p4',
      label: 'Paragraph 4: Body 2 — Small Opposite Sectors (Digital vs. Print)',
      role: 'Contrasts the two smallest categories using "respectively", multiples, and fractions.',
      translationTR:
        'Tam aksine, en küçük iki kategori zıt yönlerde ilerlemiştir. 2005 yılında haneler basılı medya ve dijital iletişime sırasıyla 1.800 dolar ve 1.200 dolar harcamıştır. İzleyen yirmi yılda dijital harcamalar yaklaşık beş kat büyüyerek 5.800 dolara ulaşırken, basılı medya harcamaları başlangıç seviyesinin altıda birine çökerek sadece 300 dolarda kalmıştır.',
      segments: [
        {
          text: 'In stark contrast, ',
          tags: ['CC'],
          note: 'Cohesion (CC): Strong transition into Body Paragraph 2.',
        },
        {
          text: 'the two smallest categories exhibited opposing fortunes. ',
          tags: ['CC', 'LR'],
          note: 'Topic Sentence: Introduces Digital and Print Media as moving in opposite directions.',
        },
        {
          text: 'In 2005, households spent $1,800 and $1,200 on print media and digital telecoms, respectively. ',
          tags: ['TA', 'GRA'],
          note: 'The "Respectively" Rule (GRA - Band 8.5): Matches the exact order ($1,800 → print media; $1,200 → digital telecoms) with a comma before "respectively".',
        },
        {
          text: 'Over the subsequent two decades, ',
          tags: ['CC'],
          note: 'Time Linker: Smoothly moves from 2005 to 2025.',
        },
        {
          text: 'digital spending grew nearly fivefold to reach $5,800',
          tags: ['TA', 'GRA'],
          note: 'Multiple Structure (GRA): "grew nearly fivefold" (= almost 5 times) is much stronger than "increased from $1,200 to $5,800".',
        },
        {
          text: ', whereas print media expenditure collapsed to a mere sixth of its original level, finishing at a negligible $300.',
          tags: ['TA', 'LR', 'GRA'],
          note: 'Fraction & Unit Conversion (Band 9): Uses "collapsed to a mere sixth" (1/6th) and converts "0.3 thousand" accurately into "$300".',
        },
      ],
    },
  ],
};

// Module 9: Band 5.5 Error Clinic Script
export const ERROR_CLINIC_DATA = {
  candidateBand: '5.5',
  wordCount: 142,
  examinerVerdict:
    'This Band 5.5 response contains the 7 classic mistakes that hold students back: putting raw numbers in the Overview, forgetting the "(in thousands)" unit multiplier ($14.2 instead of $14,200), listing every year mechanically, and reversing "respectively". Click each highlighted error to inspect the fix.',
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
          shortLabel: 'Error 1: Raw Numbers Inside the Overview',
          flawedText:
            'Overall, Housing was 14.2 in 2005 and went up to 21.5 in 2025, while Print Media was 0.3 in 2025.',
          penaltyExplanation:
            'Task Achievement Penalty (Caps TA at Band 6): Never put specific numbers or dates inside your Overview paragraph! Save numbers for Body Paragraphs 1 and 2.',
          trTip:
            'TR Notu: Overview (2. paragraf) içinde asla sayı yazılmaz; sadece en büyük ve en çok değişen kategoriyi ismen söyleyin.',
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
          shortLabel: 'Error 2: Dropped "(in thousands)" Unit Multiplier',
          flawedText: 'First, in 2005, people spent $14.2 on Housing and Utilities,',
          penaltyExplanation:
            'Task Achievement Penalty (Inaccurate Data): The table header says "(in US$ thousands)". Writing "$14.2" means fourteen dollars and twenty cents! You must write "$14,200" or "14.2 thousand dollars".',
          trTip:
            'TR Notu: Tablo başlığındaki "thousands (bin)" kelimesini unuttuğunuzda $14,200 yerine $14.2 (14 dolar) yazmış olursunuz.',
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
          shortLabel: 'Error 3: Mechanical Year-by-Year Listing',
          flawedText:
            'then it rose to $16.8 in 2015 and then it increased to $21.5 in 2025. Next, Food and Groceries was $9.4 in 2005, $8.9 in 2015, and $8.1 in 2025.',
          penaltyExplanation:
            'TA & CC Penalty (Data Dumping): Reciting 2005, then 2015, then 2025 for every row is mechanical listing. Skip linear 2015 midpoints and synthesize the 20-year change.',
          trTip:
            'TR Notu: "2005’te şuydu, 2015’te bu oldu, 2025’te şu oldu" diye tüm yılları saymak yerine başlangıç ve bitişi birleştirin.',
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
          shortLabel: 'Error 4: Category Label Used as Subject',
          flawedText: 'Moving to the third row, Transport and Travel increased to 8.5 in 2015',
          penaltyExplanation:
            'Lexical Resource Penalty: First, never write "Moving to the third row". Second, "Transport and Travel" did not increase—household *spending on* transport increased!',
          trTip:
            'TR L1 Hatası: Türkçede "Ulaşım arttı" denebilir ama İngilizcede "Transport increased" yanlıştır; "Spending on transport increased" yazmalısınız.',
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
          shortLabel: 'Error 5: Comparing a Category Directly to a Year',
          flawedText: 'Also, Digital and Telecoms was almost five times higher than 2005 in 2025, from 1.2 to 5.8.',
          penaltyExplanation:
            'Grammar Penalty: "Digital was higher than 2005" compares a spending category to a calendar year! Use an adverbial multiple ("surged nearly fivefold") or "higher than the 2005 figure".',
          trTip:
            'TR Notu: "Higher than 2005" derseniz harcamayı 2005 yılıyla kıyaslamış olursunuz. "Surged nearly fivefold from $1,200 in 2005 to $5,800 in 2025" kalıbını kullanın.',
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
          shortLabel: 'Error 6: Informal Vocabulary ("went down a lot")',
          flawedText: 'Finally, Print Media went down a lot from 1.8 in 2005 to 0.9 in 2015 and 0.3 in 2025.',
          penaltyExplanation:
            'Lexical Resource Penalty (Band 5): "Went down a lot" is conversational spoken English, and listing all three years adds unnecessary numbers.',
          trTip:
            'TR Notu: "Went down a lot" (çok düştü) günlük konuşma dilidir; akademik yazıda "collapsed to one-sixth" veya "dropped sharply" kullanın.',
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
          shortLabel: 'Error 7: Reversed "Respectively" Order',
          flawedText:
            'In 2025, Digital and Print Media were 0.3 and 5.8 respectively.',
          penaltyExplanation:
            'GRA & TA Penalty: Because "Digital" is named first and "Print Media" second, writing "0.3 and 5.8 respectively" falsely reports Digital as 0.3 and Print Media as 5.8!',
          trTip:
            'TR Notu: "Respectively" (sırasıyla) kullanırken isimlerin sırası ile sayıların sırası birebir aynı olmalıdır.',
          calibratedFix:
            'By 2025, expenditure on digital services and print media stood at $5,800 and $300, respectively.',
        },
      ],
    },
  ],
};
