import React, { useState, useEffect } from 'react';
import { Check, X, ArrowRight, RotateCcw, KeyRound } from 'lucide-react';
import { PRIMARY_TABLE_DATASET } from '../../data/datasets';

export default function GroupingStrategy({ perspectiveMode, onMarkComplete }) {
  const [assignments, setAssignments] = useState({
    housing: null,
    food: null,
    transport: null,
    digital: null,
    print: null,
  });

  useEffect(() => {
    if (perspectiveMode === 'examiner') {
      setAssignments({
        housing: 'bp1',
        food: 'bp1',
        transport: 'bp1',
        digital: 'bp2',
        print: 'bp2',
      });
    }
  }, [perspectiveMode]);

  const handleAssign = (rowId, group) => {
    setAssignments((prev) => ({
      ...prev,
      [rowId]: group,
    }));
  };

  const loadRecommendedGrouping = () => {
    setAssignments({
      housing: 'bp1',
      food: 'bp1',
      transport: 'bp1',
      digital: 'bp2',
      print: 'bp2',
    });
  };

  const resetGrouping = () => {
    setAssignments({
      housing: null,
      food: null,
      transport: null,
      digital: null,
      print: null,
    });
  };

  const allAssigned = Object.values(assignments).every((v) => v !== null);
  const correctCount = PRIMARY_TABLE_DATASET.rows.filter(
    (r) => assignments[r.id] === r.recommendedGroup
  ).length;

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Module 04 · Grouping Strategy Lab
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            Solves Breakdown #2: Mechanical Row-by-Row Listing (CC Penalty)
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Analytical Macro-Clustering vs. The Linear Walk
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Examiners immediately spot a Band 5.5 script by its paragraph transitions: <em>&ldquo;First row is Housing... Second row is Food... Third row is Transport...&rdquo;</em> To unlock Band 8+ in Coherence &amp; Cohesion, you must cluster the 5 categories into <strong>two analytical body paragraphs</strong> based on expenditure scale and trajectory.
        </p>
      </div>

      {/* Side-by-Side Comparison: Band 5 Trap vs Band 8+ Logical Clustering */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-rose-200 rounded bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-rose-900 border border-rose-200 font-semibold">
              Band 5.5 Trap · Mechanical Linear Walk
            </span>
            <span className="font-mono text-xs text-rose-800">CC Capped at 6.0</span>
          </div>
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            Row-by-Row Recitation (No Synthesis)
          </h3>
          <div className="p-3.5 rounded bg-zinc-50 border border-zinc-200 font-serif text-xs sm:text-sm text-zinc-700 space-y-2 italic">
            <p>
              &ldquo;First, Housing was $14.2k in 2005, $16.8k in 2015, and $21.5k in 2025. Second, Food was $9.4k in 2005 and fell to $8.1k in 2025. Third, Transport went from $7.6k to $8.5k and then $6.2k. Fourth, Digital rose from $1.2k to $5.8k. Finally, Print fell from $1.8k to $0.3k.&rdquo;
            </p>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            <strong>Why Examiners Penalize This:</strong> The candidate never compares one row against another. Each sentence is an isolated silo linked by mechanical ordinal sequencers (<em>First, Second, Third, Finally</em>).
          </p>
        </div>

        <div className="border border-emerald-200 rounded bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold">
              Band 8.5 Architecture · Logical Clustering
            </span>
            <span className="font-mono text-xs text-emerald-800">Full CC &amp; TA Credit</span>
          </div>
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            Two-Paragraph Scale &amp; Trajectory Split
          </h3>
          <div className="space-y-2 text-xs text-zinc-700">
            <div className="p-3 rounded bg-zinc-50 border border-zinc-200">
              <div className="font-mono uppercase text-[11px] font-semibold text-zinc-900">
                Body Paragraph 1: High-Outlay Core Staples ($6,200 – $21,500)
              </div>
              <p className="mt-1">
                Clusters <strong>Housing</strong> (surging dominant cost), <strong>Food</strong> (steady runner-up), and <strong>Transport</strong> (2015 non-linear anomaly). Allows direct comparison that Housing alone exceeded the rest of the table by 2025.
              </p>
            </div>
            <div className="p-3 rounded bg-zinc-50 border border-zinc-200">
              <div className="font-mono uppercase text-[11px] font-semibold text-zinc-900">
                Body Paragraph 2: Low-Base Divergent Sectors ($300 – $5,800)
              </div>
              <p className="mt-1">
                Pairs <strong>Digital &amp; Telecoms</strong> with <strong>Print Media &amp; Postage</strong> to showcase their inverse trajectories (5x surge vs. 6x collapse) and rank reversal using <em>respectively</em>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Clustering Workspace */}
      <div className="border border-zinc-300 rounded bg-white p-5 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4">
          <div>
            <h3 className="font-serif text-lg font-medium text-zinc-900">
              Interactive Paragraph Clustering Workspace
            </h3>
            <p className="text-xs text-zinc-600 mt-0.5">
              Assign each of the 5 expenditure categories to either <strong>Body Paragraph 1</strong> or <strong>Body Paragraph 2</strong> to validate your structural plan.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadRecommendedGrouping}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Show Band 8.5 Split</span>
            </button>
            <button
              type="button"
              onClick={resetGrouping}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono text-zinc-600 hover:text-zinc-900 border border-zinc-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        <div className="space-y-2.5">
          {PRIMARY_TABLE_DATASET.rows.map((row) => {
            const userChoice = assignments[row.id];
            const isMatch = userChoice && userChoice === row.recommendedGroup;

            return (
              <div
                key={row.id}
                className="p-3.5 rounded border border-zinc-200 bg-zinc-50/50 flex flex-col lg:flex-row lg:items-center justify-between gap-3"
              >
                <div className="space-y-0.5 min-w-0 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-medium text-sm text-zinc-900">
                      {row.category}
                    </span>
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      2005: ${row.cells.y2005.value}k → 2015: ${row.cells.y2015.value}k → 2025: ${row.cells.y2025.value}k
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500">{row.trajectorySummary}</p>
                  {userChoice && (
                    <div
                      className={`text-xs mt-1.5 pt-1.5 border-t border-zinc-200/80 flex items-start gap-1.5 ${
                        isMatch ? 'text-emerald-900' : 'text-rose-900'
                      }`}
                    >
                      {isMatch ? (
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-rose-700 shrink-0 mt-0.5" />
                      )}
                      <span>{row.groupRationale}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleAssign(row.id, 'bp1')}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-all border ${
                      userChoice === 'bp1'
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-100'
                    }`}
                  >
                    Body Paragraph 1 (Core Staples)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAssign(row.id, 'bp2')}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-all border ${
                      userChoice === 'bp2'
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-100'
                    }`}
                  >
                    Body Paragraph 2 (Tech vs. Print)
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Validation Banner */}
        {allAssigned && (
          <div
            className={`p-4 rounded border text-xs leading-relaxed ${
              correctCount === 5
                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                : 'bg-amber-50/80 border-amber-300 text-amber-950'
            }`}
          >
            <div className="font-mono uppercase font-semibold mb-1">
              {correctCount === 5
                ? '5/5 Analytical Clustering Verified (Band 8.5 Coherence & Cohesion)'
                : `Clustering Alignment: ${correctCount}/5 Categories Matched`}
            </div>
            <p>
              {correctCount === 5
                ? 'Your paragraph architecture separates high-volume living staples (Housing, Food, Transport) from low-volume opposing media/tech sectors (Digital vs. Print). This creates natural topic sentences and prevents linear listing.'
                : 'Review the rationale notes above. Grouping Digital ($1.2k → $5.8k) and Print Media ($1.8k → $0.3k) together in Body Paragraph 2 allows you to contrast their rank reversal in two crisp sentences.'}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m4-grouping-strategy')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Confirm Paragraph Strategy &amp; Continue →
        </button>
      </div>
    </section>
  );
}
