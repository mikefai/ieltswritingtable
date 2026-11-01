import React, { useState } from 'react';
import { AlertTriangle, Check, X } from 'lucide-react';
import {
  DYNAMIC_VS_STATIC_TAXONOMY,
  UNIT_HEADER_TRAPS,
} from '../../data/bandCriteria';

const VERB_TEST_CASES = [
  {
    id: 'vt-1',
    datasetContext: 'Static Table (Single Year - 2024): Commuter Transport Across 5 Cities',
    candidateSentence:
      '"Rail usage started at 3% in Houston and rose sharply to 64% in Tokyo."',
    isLegitimate: false,
    verdict: 'INCORRECT (Never Use "Rose/Started" on a Single-Year Table)',
    rationale:
      'Houston does not turn into Tokyo over time! When a table has no time progression, using change verbs ("started at", "rose sharply") lowers both Vocabulary and Grammar scores.',
    correctedVersion:
      '"Whereas a mere 3% of commuters in Houston used rail, the proportion in Tokyo stood at 64%—the highest figure in the table."',
  },
  {
    id: 'vt-2',
    datasetContext: 'Static Table (Single Year - 2024): Commuter Transport Across 5 Cities',
    candidateSentence:
      '"Private car reliance in Houston (86%) was nearly eight times as high as that recorded in Tokyo (11%)."',
    isLegitimate: true,
    verdict: 'CORRECT (Band 8.5 Static Comparison)',
    rationale:
      'Compares two cities in the same year using a scale multiple ("nearly eight times as high as") without implying change over time.',
    correctedVersion: null,
  },
  {
    id: 'vt-3',
    datasetContext: 'Dynamic Table (2005–2025): Household Expenditure (in US$ thousands)',
    candidateSentence:
      '"In 2005 Digital was 1.2. In 2015 Digital was 2.9. In 2025 Digital was 5.8."',
    isLegitimate: false,
    verdict: 'WEAK (Band 5.5 Year-by-Year Listing)',
    rationale:
      'When a table has years (2005 → 2015 → 2025), listing every year in separate sentences is mechanical. Connect 2005 and 2025 to show the nearly fivefold surge.',
    correctedVersion:
      '"Household outlays on digital communications surged nearly fivefold over the twenty-year period, climbing from $1,200 in 2005 to $5,800 by 2025."',
  },
];

export default function ExaminerFieldGuide({ perspectiveMode, onMarkComplete }) {
  const [selectedTrapId, setSelectedTrapId] = useState(UNIT_HEADER_TRAPS[0].id);
  const [activeVerbCase, setActiveVerbCase] = useState(VERB_TEST_CASES[0].id);

  const activeTrap =
    UNIT_HEADER_TRAPS.find((t) => t.id === selectedTrapId) || UNIT_HEADER_TRAPS[0];
  const currentVerbTest =
    VERB_TEST_CASES.find((v) => v.id === activeVerbCase) || VERB_TEST_CASES[0];

  return (
    <section className="space-y-10">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Step 01 · The 3 Core Rules for Table Essays
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            Avoid Band 5.5 / 6.0 Traps
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          How to Read Any IELTS Table Before You Write
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Unlike line graphs that show visual slopes, tables give you a raw grid of numbers. Before writing your 4 paragraphs, check these <strong>3 simple rules</strong> so you do not lose easy marks.
        </p>
      </div>

      {/* 1. Dynamic vs Static Protocol */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-xl font-medium text-zinc-900">
            Rule 1: Does the Table Have Years (Dynamic) or Not (Static)?
          </h3>
          <span className="font-mono text-xs text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded">
            Examiner Rule: Never write &ldquo;rose / fell&rdquo; if there are no years!
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['dynamic', 'static'].map((key) => {
            const item = DYNAMIC_VS_STATIC_TAXONOMY[key];
            return (
              <div
                key={key}
                className="border border-zinc-200 rounded bg-white p-5 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-100">
                    <h4 className="font-serif text-base font-medium text-zinc-900">
                      {item.title}
                    </h4>
                  </div>

                  <div className="mt-3 space-y-2 text-xs text-zinc-600">
                    <p>
                      <strong className="text-zinc-900 font-medium">How to Spot It: </strong>
                      {item.identificationRule}
                    </p>
                    <p>
                      <strong className="text-zinc-900 font-medium">What to Describe: </strong>
                      {item.analyticalQuestion}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-800 font-semibold mb-1.5">
                      Useful Vocabulary &amp; Structures:
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-700">
                      {item.legitimateLexis.map((lex, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{lex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded bg-rose-50/50 border border-rose-200 text-xs text-zinc-800">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase text-rose-800 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>What to Avoid:</span>
                  </div>
                  <p className="leading-relaxed">{item.prohibitedTrap}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Verb Legitimacy Tester */}
        <div className="border border-zinc-200 rounded bg-white p-5">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <div>
              <h4 className="text-sm font-semibold text-zinc-900">
                Quick Check: Is This Sentence Right or Wrong?
              </h4>
              <p className="text-xs text-zinc-500">
                Click the 3 examples to see how examiners grade verb choices:
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {VERB_TEST_CASES.map((tc, idx) => (
                <button
                  key={tc.id}
                  type="button"
                  onClick={() => setActiveVerbCase(tc.id)}
                  className={`px-2.5 py-1 rounded font-mono text-xs transition-colors ${
                    activeVerbCase === tc.id
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  Example 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded bg-zinc-50 border border-zinc-200 space-y-3">
            <div className="font-mono text-xs text-zinc-500">
              {currentVerbTest.datasetContext}
            </div>
            <blockquote className="font-serif text-base text-zinc-900 italic border-l-2 border-zinc-400 pl-3">
              {currentVerbTest.candidateSentence}
            </blockquote>
            <div className="flex items-center gap-2 pt-1">
              <span
                className={`inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded font-semibold ${
                  currentVerbTest.isLegitimate
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'bg-rose-100 text-rose-900'
                }`}
              >
                {currentVerbTest.isLegitimate ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <X className="w-3.5 h-3.5" />
                )}
                {currentVerbTest.verdict}
              </span>
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed">
              <strong>Why: </strong>
              {currentVerbTest.rationale}
            </p>
            {currentVerbTest.correctedVersion && (
              <div className="pt-2 border-t border-zinc-200/80 text-xs text-emerald-950">
                <span className="font-mono uppercase text-[11px] text-emerald-800 font-semibold block mb-0.5">
                  Band 8.5 Rewrite:
                </span>
                <span className="font-serif text-sm">{currentVerbTest.correctedVersion}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Task Achievement Data-Selection Thresholds */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-xl font-medium text-zinc-900">
            Rule 2: Do Not Write Every Number! (The 6–8 Figure Rule)
          </h3>
          <span className="font-mono text-xs text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded">
            How Many Numbers Should You Cite in a 15-Cell Table?
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-zinc-200 rounded bg-white p-4">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
              <span>ONLY 1–4 NUMBERS</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                Band 5.0 (Too Few)
              </span>
            </div>
            <h4 className="font-medium text-sm text-zinc-900">
              Missing Data Support
            </h4>
            <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              Saying &ldquo;housing went up and food went down&rdquo; without giving the starting and ending dollar amounts loses marks for lack of data support.
            </p>
          </div>

          <div className="border-2 border-zinc-900 rounded bg-white p-4">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-900 font-semibold mb-2">
              <span>6–8 KEY NUMBERS</span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-900 text-white">
                Band 7.5 – 9.0 (Sweet Spot)
              </span>
            </div>
            <h4 className="font-medium text-sm text-zinc-900">
              Smart Selection &amp; Comparison
            </h4>
            <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              Pick the 4 main features and skip straight-line middle years (2015):
            </p>
            <ul className="mt-2 space-y-1 text-xs text-zinc-800 font-medium">
              <li>1. Highest Value (Peak) &amp; Lowest Value (Trough)</li>
              <li>2. Biggest Rise &amp; Biggest Drop (Start + End)</li>
              <li>3. The Only Exception (Transport’s 2015 peak)</li>
              <li>4. Rank Swap Pair (Digital overtaking Print)</li>
            </ul>
          </div>

          <div className="border border-zinc-200 rounded bg-white p-4">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
              <span>12–15 NUMBERS</span>
              <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-900 border border-rose-200">
                Band 5.5 / 6.0 Ceiling
              </span>
            </div>
            <h4 className="font-medium text-sm text-zinc-900">
              Mechanical Listing (Data Dumping)
            </h4>
            <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              Writing every cell in the table (2005, 2015, 2025 for all 5 rows) turns your essay into a list and caps Task Achievement at Band 6.0.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Unit & Header Traps */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-xl font-medium text-zinc-900">
            Rule 3: Watch Out for Unit &amp; Subject Traps
          </h3>
          <span className="font-mono text-xs text-zinc-500">
            Click each trap to compare Band 5.5 vs. Band 8.5 reporting:
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {UNIT_HEADER_TRAPS.map((trap) => {
            const active = trap.id === selectedTrapId;
            return (
              <button
                key={trap.id}
                type="button"
                onClick={() => setSelectedTrapId(trap.id)}
                className={`text-left p-3 rounded border transition-all ${
                  active
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                <div
                  className={`font-mono text-[11px] uppercase ${
                    active ? 'text-amber-300' : 'text-zinc-500'
                  }`}
                >
                  Common Trap
                </div>
                <div className="text-xs font-medium mt-1 leading-snug">
                  {trap.title}
                </div>
              </button>
            );
          })}
        </div>

        <div className="border border-zinc-200 rounded bg-white p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3 flex-wrap gap-2">
            <h4 className="font-serif text-lg font-medium text-zinc-900">
              {activeTrap.title}
            </h4>
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 border border-zinc-200">
              {activeTrap.headerExample}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded bg-rose-50/50 border border-rose-200 space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-rose-900 font-semibold">
                Band 5.5 Mistake
              </div>
              <p className="font-serif text-sm text-zinc-900 italic">
                {activeTrap.band5Error}
              </p>
              <p className="text-xs text-rose-900 pt-1 border-t border-rose-200/60">
                {activeTrap.examinerPenalty}
              </p>
            </div>

            <div className="p-3.5 rounded bg-emerald-50/50 border border-emerald-200 space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-900 font-semibold">
                Band 8.5 Accurate Reporting
              </div>
              <p className="font-serif text-sm text-zinc-900 italic">
                {activeTrap.band8Calibration}
              </p>
              <p className="text-xs text-emerald-900 pt-1 border-t border-emerald-200/60">
                <strong>Why It Scores High: </strong>
                Applies the header unit accurately and uses a logical subject (&ldquo;expenditure/spending on...&rdquo;).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m1-examiner-guide')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Continue to Step 02: Explore the Table →
        </button>
      </div>
    </section>
  );
}
