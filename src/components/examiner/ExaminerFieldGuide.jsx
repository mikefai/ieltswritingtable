import React, { useState } from 'react';
import { AlertTriangle, Check, X, Scale, Layers, Info } from 'lucide-react';
import {
  DYNAMIC_VS_STATIC_TAXONOMY,
  UNIT_HEADER_TRAPS,
} from '../../data/bandCriteria';

const VERB_TEST_CASES = [
  {
    id: 'vt-1',
    datasetContext: 'Static Table: 2024 Commuter Transport Share Across 5 Cities',
    candidateSentence:
      '"Rail usage started at 3% in Houston and rose sharply to 64% in Tokyo."',
    isLegitimate: false,
    verdict: 'SEVERE PENALTY (Caps LR & GRA at Band 5/6)',
    rationale:
      'Houston does not turn into Tokyo over time. Applying chronological verbs ("started at", "rose sharply to") to a timeless cross-sectional table is a hallmark of uncalibrated memorizing.',
    correctedVersion:
      '"Whereas a mere 3% of commuters in Houston used rail, the proportion in Tokyo stood at 64%—the highest figure in the table."',
  },
  {
    id: 'vt-2',
    datasetContext: 'Static Table: 2024 Commuter Transport Share Across 5 Cities',
    candidateSentence:
      '"Private car reliance in Houston (86%) was nearly eight times as high as that recorded in Tokyo (11%)."',
    isLegitimate: true,
    verdict: 'CALIBRATED BAND 8.5+ SYNTAX',
    rationale:
      'Uses static equative comparison ("nearly eight times as high as") and a demonstrative pronoun ("that recorded in Tokyo") without implying movement over time.',
    correctedVersion: null,
  },
  {
    id: 'vt-3',
    datasetContext: 'Dynamic Table: Household Expenditure 2005–2025 (in US$ thousands)',
    candidateSentence:
      '"In 2005 Digital was 1.2. In 2015 Digital was 2.9. In 2025 Digital was 5.8."',
    isLegitimate: false,
    verdict: 'PENALTY: STATIC FRAMING ON DYNAMIC DATA (Band 5 TA/CC)',
    rationale:
      'When a table has a chronological axis (2005 → 2015 → 2025), treating each column as an isolated static snapshot fails to synthesize the trend and dumps raw decimals without units.',
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
            Module 01 · Examiner Calibration Briefing
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            Target Criteria: TA · LR · GRA
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          How Cambridge Examiners Grade Table Reports
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Unlike line graphs or bar charts where visual slopes guide the eye, tables present raw matrices of numbers. Candidates who fail to distinguish <strong>dynamic time-series tables</strong> from <strong>static snapshot tables</strong>—or who recite cells without filtering—hit immediate Band 5/6 score ceilings.
        </p>
      </div>

      {/* 1. Dynamic vs Static Protocol */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-xl font-medium text-zinc-900">
            1. The Dynamic vs. Static Protocol
          </h3>
          <span className="font-mono text-xs text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded">
            Examiner Rule: Dynamic Verbs on Static Tables = Dual LR &amp; GRA Penalty
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
                    <span className="font-mono text-[11px] uppercase px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
                      {key === 'dynamic' ? 'Time-Series' : 'Timeless Snapshot'}
                    </span>
                  </div>

                  <div className="mt-3 space-y-2.5 text-xs text-zinc-600">
                    <p>
                      <strong className="text-zinc-900 font-medium">How to Identify: </strong>
                      {item.identificationRule}
                    </p>
                    <p>
                      <strong className="text-zinc-900 font-medium">Core Analytical Question: </strong>
                      {item.analyticalQuestion}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-800 font-semibold mb-1.5">
                      Calibrated Lexical &amp; Syntactic Toolkit
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

                <div className="p-3 rounded bg-zinc-50 border border-zinc-200 text-xs text-zinc-700">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase text-rose-800 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Examiner Penalty Trap</span>
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
                Interactive Calibration Check: Verb Legitimacy Audit
              </h4>
              <p className="text-xs text-zinc-500">
                Inspect how examiners score real candidate sentences against dataset time-axes.
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
                  Case 0{idx + 1}
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
              <strong>Examiner Justification: </strong>
              {currentVerbTest.rationale}
            </p>
            {currentVerbTest.correctedVersion && (
              <div className="pt-2 border-t border-zinc-200/80 text-xs text-emerald-950">
                <span className="font-mono uppercase text-[11px] text-emerald-800 font-semibold block mb-0.5">
                  Band 8.5 Calibrated Rewrite:
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
            2. Task Achievement Data-Selection Thresholds (The 5–8 Figure Rule)
          </h3>
          <span className="font-mono text-xs text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded">
            15-Cell Matrix Benchmark
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-zinc-200 rounded bg-white p-4">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
              <span>1–4 FIGURES CITED</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                Band 5 TA
              </span>
            </div>
            <h4 className="font-medium text-sm text-zinc-900">
              Under-Supported Generalization
            </h4>
            <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              Candidate describes trends verbally (&ldquo;housing increased while food decreased&rdquo;) without anchoring claims to baseline and terminal figures. Fails the descriptor: <em>&ldquo;adequately highlights key features.&rdquo;</em>
            </p>
          </div>

          <div className="border-2 border-zinc-900 rounded bg-white p-4">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-900 font-semibold mb-2">
              <span>5–8 STRATEGIC FIGURES</span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-900 text-white">
                Band 7–9 Sweet Spot
              </span>
            </div>
            <h4 className="font-medium text-sm text-zinc-900">
              Selective Analytical Synthesis
            </h4>
            <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              Isolates the 4 non-negotiable table anchors while omitting linear midpoints:
            </p>
            <ul className="mt-2 space-y-1 text-xs text-zinc-800 font-medium">
              <li>1. Global Peak &amp; Global Trough</li>
              <li>2. Largest Absolute &amp; Proportional Shift</li>
              <li>3. Standout Non-Linear Anomaly</li>
              <li>4. Rank Reversal / Crossover Pair</li>
            </ul>
          </div>

          <div className="border border-zinc-200 rounded bg-white p-4">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
              <span>12–15+ FIGURES CITED</span>
              <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-900 border border-rose-200">
                Band 5/6 TA Ceiling
              </span>
            </div>
            <h4 className="font-medium text-sm text-zinc-900">
              Mechanical Data Dumping
            </h4>
            <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              Reciting every cell (including unremarkable 2015 midpoints like 16.8, 8.9, 2.9, 0.9) turns the essay into a spoken spreadsheet. Automatically caps TA at Band 6 (<em>&ldquo;details may be irrelevant, inappropriate or inaccurate&rdquo;</em>).
            </p>
          </div>
        </div>
      </div>

      {/* 3. Unit & Header Traps */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-xl font-medium text-zinc-900">
            3. Unit &amp; Header Penalty Traps
          </h3>
          <span className="font-mono text-xs text-zinc-500">
            Select a trap to inspect the examiner penalty &amp; Band 8.5 fix
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
                    active ? 'text-zinc-300' : 'text-zinc-500'
                  }`}
                >
                  Header Trap
                </div>
                <div className="text-xs font-medium mt-1 leading-snug">
                  {trap.title.replace(/^Trap \d:\s*/, '')}
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
                Band 5/6 Candidate Error
              </div>
              <p className="font-serif text-sm text-zinc-900 italic">
                {activeTrap.band5Error}
              </p>
              <p className="text-xs text-rose-900 pt-1 border-t border-rose-200/60">
                <strong>Penalty: </strong>
                {activeTrap.examinerPenalty}
              </p>
            </div>

            <div className="p-3.5 rounded bg-emerald-50/50 border border-emerald-200 space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-900 font-semibold">
                Band 8.5 Calibrated Reporting
              </div>
              <p className="font-serif text-sm text-zinc-900 italic">
                {activeTrap.band8Calibration}
              </p>
              <p className="text-xs text-emerald-900 pt-1 border-t border-emerald-200/60">
                <strong>Why It Scores Band 8+: </strong>
                Integrates the header scale unit naturally into the noun phrase and maintains mathematical precision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Examiner Mode Extra Calibration Note */}
      {perspectiveMode === 'examiner' && (
        <div className="p-4 rounded border border-zinc-300 bg-zinc-100/80 flex items-start gap-3">
          <Info className="w-4 h-4 text-zinc-800 shrink-0 mt-0.5" />
          <div className="text-xs text-zinc-700 space-y-1 leading-relaxed">
            <div className="font-mono uppercase text-[11px] font-semibold text-zinc-900">
              Examiner Trainer Calibration Note (DELTA Standard)
            </div>
            <p>
              When training new examiners on Table scripts, check the candidate&apos;s treatment of the <strong>unit header</strong> in Body Paragraph 1 first. If a candidate systematically omits <em>&ldquo;thousands&rdquo;</em> across the entire response (e.g., reporting $14.2, $9.4, $1.2), treat this as a single systematic inaccuracy under TA (limiting TA to Band 6 if key features are otherwise well chosen), rather than penalizing every sentence separately. However, if they confuse <em>dynamic trend verbs</em> on a static table, apply penalties in both <strong>LR</strong> (inappropriate register/meaning) and <strong>GRA</strong> (tense/aspect control).
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m1-examiner-guide')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Mark Module 01 Calibrated &amp; Continue →
        </button>
      </div>
    </section>
  );
}
