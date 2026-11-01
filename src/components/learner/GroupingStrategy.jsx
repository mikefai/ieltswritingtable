import React, { useState, useEffect } from 'react';
import { Check, X, RotateCcw, KeyRound } from 'lucide-react';
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
            Step 04 · Grouping Rows into Body Paragraphs 1 &amp; 2
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            Fixes Mistake #2: Row-by-Row Listing
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          How to Split 5 Categories into 2 Logical Body Paragraphs
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Paragraph 1 is your Introduction and Paragraph 2 is your Overview. To get Band 8+ in Coherence &amp; Cohesion, do not describe the 5 rows one by one from top to bottom. Instead, divide the rows into <strong>Body Paragraph 1 (Large Core Expenses)</strong> and <strong>Body Paragraph 2 (Small Opposite Categories)</strong>.
        </p>
      </div>

      {/* Side-by-Side Comparison: Band 5 Trap vs Band 8+ Logical Clustering */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-rose-200 rounded bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-rose-900 border border-rose-200 font-semibold">
              Band 5.5 Trap · Row-by-Row Walk
            </span>
            <span className="font-mono text-xs text-rose-800">Caps CC at 6.0</span>
          </div>
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            &ldquo;First... Second... Third... Finally...&rdquo;
          </h3>
          <div className="p-3.5 rounded bg-zinc-50 border border-zinc-200 font-serif text-xs sm:text-sm text-zinc-700 space-y-2 italic">
            <p>
              &ldquo;First, Housing was $14.2k in 2005 and $21.5k in 2025. Second, Food was $9.4k and fell to $8.1k. Third, Transport went from $7.6k to $8.5k and $6.2k. Fourth, Digital rose from $1.2k to $5.8k. Finally, Print fell from $1.8k to $0.3k.&rdquo;
            </p>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            <strong>Why It Loses Marks:</strong> There is no grouping or comparison between rows—just five separate sentences listed in order.
          </p>
        </div>

        <div className="border border-emerald-200 rounded bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold">
              Band 8.5 Plan · 2 Logical Groups
            </span>
            <span className="font-mono text-xs text-emerald-800">Full CC Score</span>
          </div>
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            Group by Scale &amp; Opposite Trends
          </h3>
          <div className="space-y-2 text-xs text-zinc-700">
            <div className="p-3 rounded bg-zinc-50 border border-zinc-200">
              <div className="font-mono uppercase text-[11px] font-semibold text-zinc-900">
                Paragraph 3 (Body 1): Large Core Expenses ($6,200 – $21,500)
              </div>
              <p className="mt-1">
                Group <strong>Housing</strong> (#1 leader), <strong>Food</strong> (#2 staple), and <strong>Transport</strong> (#3 staple with the 2015 peak).
              </p>
            </div>
            <div className="p-3 rounded bg-zinc-50 border border-zinc-200">
              <div className="font-mono uppercase text-[11px] font-semibold text-zinc-900">
                Paragraph 4 (Body 2): Small Opposite Sectors ($300 – $5,800)
              </div>
              <p className="mt-1">
                Pair <strong>Digital &amp; Telecoms</strong> (nearly 5x surge) with <strong>Print Media</strong> (collapsed to one-sixth) to highlight how they swapped places.
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
              Practice: Assign Each Category to Body Paragraph 1 or 2
            </h3>
            <p className="text-xs text-zinc-600 mt-0.5">
              Click <strong>Body Paragraph 1</strong> or <strong>Body Paragraph 2</strong> for each row:
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadRecommendedGrouping}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 text-white hover:bg-zinc-800"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Show Band 8.5 Grouping</span>
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
                    Body Paragraph 1 (Large Costs)
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
                    Body Paragraph 2 (Small / Opposite)
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
                ? '5/5 Matched — Ready for Body Paragraphs 1 & 2!'
                : `Matched ${correctCount}/5 Categories`}
            </div>
            <p>
              {correctCount === 5
                ? 'You have separated the 3 big living costs (Body 1) from the 2 small opposite categories (Body 2).'
                : 'Check the feedback notes above to adjust your paragraph grouping.'}
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
          Continue to Step 05: Write the Overview →
        </button>
      </div>
    </section>
  );
}
