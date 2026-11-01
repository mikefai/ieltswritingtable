import React, { useState } from 'react';
import { Clock, CheckSquare, Square, Compass, TrendingUp } from 'lucide-react';
import { PLANNING_METHODS_DATA } from '../../data/bandCriteria';

const PRE_WRITING_CHECKLIST = [
  {
    id: 'pw-1',
    text: 'I checked the table title and sub-header for scale multipliers (e.g., "in thousands", "in millions", "% vs. raw minutes").',
  },
  {
    id: 'pw-2',
    text: 'I verified whether the table has a chronological axis (Dynamic) or is a single-point snapshot (Static) and locked my verb list.',
  },
  {
    id: 'pw-3',
    text: 'I circled 6 to 8 strategic cells (Global Peak, Global Trough, Steepest Surge, Anomaly) and crossed out linear midpoints.',
  },
  {
    id: 'pw-4',
    text: 'I bracketed the rows into two analytical groups for Body Paragraph 1 and Body Paragraph 2.',
  },
  {
    id: 'pw-5',
    text: 'I formulated my 2-sentence Overview mentally and confirmed it contains zero raw figures.',
  },
];

export default function PlanningMethods({ perspectiveMode, onMarkComplete }) {
  const [checkedItems, setCheckedItems] = useState({
    'pw-1': true,
    'pw-2': true,
  });

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const { methodA, methodB, pacingProtocol } = PLANNING_METHODS_DATA;

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Module 07 · Dual Planning Methods &amp; Pacing Protocol
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            5-Minute Pre-Writing Architecture
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Method A (Category-Driven) vs. Method B (Trend-Driven)
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Candidates lose Task 1 bands during the first 3 minutes by starting to write immediately. Use <strong>Method A</strong> when faced with a timeless cross-sectional snapshot, and <strong>Method B</strong> when faced with a multi-year time series.
        </p>
      </div>

      {/* Dual Methods Blueprint */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {[methodA, methodB].map((method, idx) => (
          <div
            key={method.id}
            className="border border-zinc-300 rounded bg-white p-5 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-100">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase px-2.5 py-1 rounded bg-zinc-900 text-white font-semibold">
                  {idx === 0 ? (
                    <Compass className="w-3.5 h-3.5" />
                  ) : (
                    <TrendingUp className="w-3.5 h-3.5" />
                  )}
                  {method.badge}
                </span>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase">
                  Deploy On:
                </div>
                <h3 className="font-serif text-lg font-medium text-zinc-900 mt-0.5">
                  {method.bestFor}
                </h3>
                <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                  {method.corePrinciple}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {method.steps.map((s) => (
                  <div
                    key={s.step}
                    className="p-3 rounded bg-zinc-50 border border-zinc-200 space-y-1"
                  >
                    <div className="font-mono text-xs font-semibold text-zinc-900">
                      {s.step}
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 20-Minute Allocation Guide */}
      <div className="border border-zinc-300 rounded bg-white p-5 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-zinc-200 pb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-700" />
            <h3 className="font-serif text-lg font-medium text-zinc-900">
              The 20-Minute Exam Pacing Protocol
            </h3>
          </div>
          <span className="font-mono text-xs text-zinc-500">
            0–3m Filter · 3–5m Cluster · 5–18m Draft · 18–20m Audit
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pacingProtocol.map((slot, idx) => (
            <div
              key={slot.window}
              className="p-4 rounded border border-zinc-200 bg-zinc-50/60 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                  {slot.window}
                </div>
                <h4 className="font-serif text-base font-medium text-zinc-900 mt-1">
                  {slot.phase}
                </h4>
                <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-600 leading-relaxed">
                  {slot.tasks.map((t, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="font-mono text-zinc-400">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-zinc-200/80 font-mono text-[10px] text-zinc-500 uppercase">
                Stage 0{idx + 1} of 04
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive 5-Minute Pre-Writing Checklist */}
      <div className="border border-zinc-200 rounded bg-white p-5 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            5-Minute Pre-Writing Desk Checklist
          </h3>
          <span className="font-mono text-xs text-zinc-500">
            Complete before typing Sentence 1 in the Exam Simulator
          </span>
        </div>

        <div className="divide-y divide-zinc-100">
          {PRE_WRITING_CHECKLIST.map((item) => {
            const checked = Boolean(checkedItems[item.id]);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleCheck(item.id)}
                className="w-full py-2.5 flex items-start gap-3 text-left hover:bg-zinc-50 px-2 rounded transition-colors"
              >
                {checked ? (
                  <CheckSquare className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                )}
                <span
                  className={`text-xs sm:text-sm ${
                    checked ? 'text-zinc-900 font-medium' : 'text-zinc-600'
                  }`}
                >
                  {item.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m7-planning-methods')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Mark Planning Protocol Complete &amp; Continue →
        </button>
      </div>
    </section>
  );
}
