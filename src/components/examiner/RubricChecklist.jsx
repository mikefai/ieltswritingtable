import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, AlertOctagon, Award, RotateCcw } from 'lucide-react';
import { RUBRIC_CHECKLIST_ITEMS } from '../../data/bandCriteria';

export default function RubricChecklist({ perspectiveMode, onMarkComplete }) {
  const [checkedMap, setCheckedMap] = useState({
    'ta-1': true,
    'ta-2': true,
    'ta-3': true,
    'cc-1': true,
    'cc-2': true,
    'lr-1': true,
    'lr-2': true,
    'gra-1': true,
  });

  useEffect(() => {
    if (perspectiveMode === 'examiner') {
      const allTrue = {};
      RUBRIC_CHECKLIST_ITEMS.forEach((group) => {
        group.checkpoints.forEach((cp) => {
          allTrue[cp.id] = true;
        });
      });
      setCheckedMap(allTrue);
    }
  }, [perspectiveMode]);

  const toggleItem = (id) => {
    setCheckedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Compute Band Estimate per criterion
  const computeCriterionScore = (group) => {
    const total = group.checkpoints.length;
    const passed = group.checkpoints.filter((c) => checkedMap[c.id]).length;
    const missingCritical = group.checkpoints.some(
      (c) => c.isCriticalCeiling && !checkedMap[c.id]
    );

    if (missingCritical) {
      return passed <= 1 ? 5.5 : 6.0;
    }
    if (passed === total) return 8.5;
    if (passed >= total - 1) return 7.5;
    return 6.5;
  };

  const criterionScores = RUBRIC_CHECKLIST_ITEMS.map((g) => ({
    criterion: g.criterion,
    fullName: g.fullName,
    score: computeCriterionScore(g),
  }));

  const rawAvg =
    criterionScores.reduce((sum, c) => sum + c.score, 0) / criterionScores.length;
  // IELTS rounds to nearest 0.5
  const overallBand = (Math.round(rawAvg * 2) / 2).toFixed(1);

  // Identify primary limiting criterion
  const minScore = Math.min(...criterionScores.map((c) => c.score));
  const limitingCriteria = criterionScores.filter((c) => c.score === minScore);

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Module 11 · Band Descriptor Diagnostic Checklist
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            Bands 6.0 · 7.0 · 8.0+ Calibration Matrix
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Self-Assessment &amp; Examiner Ceiling Diagnostic
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          In IELTS Writing Task 1, your four criteria (<strong>TA, CC, LR, GRA</strong>) are weighted equally at 25% each. However, a single ceiling error in Task Achievement (such as omitting the overview or dropping the scale multiplier) will drag down an otherwise Band 8 essay. Audit your script against the 13 examiner checkpoints below.
        </p>
      </div>

      {/* Live Band Profile & Limiting Bottleneck Indicator */}
      <div className="border-2 border-zinc-900 rounded bg-white p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Diagnostic Score Profile
            </div>
            <h3 className="font-serif text-xl font-medium text-zinc-900 mt-0.5">
              Estimated Task 1 Band: <span className="font-mono font-bold">{overallBand}</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {criterionScores.map((c) => (
              <div
                key={c.criterion}
                className={`px-3 py-1.5 rounded border font-mono text-xs ${
                  c.score <= 6.0
                    ? 'bg-rose-50 border-rose-300 text-rose-900 font-semibold'
                    : c.score >= 8.0
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                    : 'bg-zinc-100 border-zinc-300 text-zinc-800'
                }`}
              >
                [{c.criterion}]: {c.score.toFixed(1)}
              </div>
            ))}
          </div>
        </div>

        {/* Limiting Criterion Bottleneck Callout */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-start gap-2.5 text-xs text-zinc-700">
            {minScore < 8.0 ? (
              <>
                <AlertOctagon className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-zinc-900 font-mono uppercase">
                    Current Score Bottleneck ({limitingCriteria.map((c) => c.fullName).join(' & ')} at Band {minScore.toFixed(1)}):{' '}
                  </strong>
                  <span>
                    Unchecked critical ceiling items below are holding back your overall Task 1 score. Review the linked remedy modules to remove these penalties.
                  </span>
                </div>
              </>
            ) : (
              <>
                <Award className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-950 font-mono uppercase">
                    Full Band 8.5 Calibration Verified:{' '}
                  </strong>
                  <span>
                    All critical examiner ceilings and advanced comparative syntax checkpoints are satisfied across TA, CC, LR, and GRA.
                  </span>
                </div>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setCheckedMap({})}
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-zinc-900"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear All Checkboxes</span>
          </button>
        </div>
      </div>

      {/* 4 Criterion Diagnostic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {RUBRIC_CHECKLIST_ITEMS.map((group) => {
          const score = computeCriterionScore(group);
          return (
            <div
              key={group.criterion}
              className="border border-zinc-300 rounded bg-white p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
                  <div>
                    <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-zinc-900 text-white font-semibold">
                      [{group.criterion}] · {group.weight}
                    </span>
                    <h3 className="font-serif text-lg font-medium text-zinc-900 mt-1.5">
                      {group.fullName}
                    </h3>
                  </div>
                  <div className="text-right font-mono">
                    <div className="text-[10px] uppercase text-zinc-500">Criterion Ceiling</div>
                    <div className="text-lg font-bold text-zinc-900">
                      Band {score.toFixed(1)}
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200 text-[11px] text-zinc-600 leading-relaxed">
                  {group.ceilingWarning}
                </div>

                <div className="divide-y divide-zinc-100">
                  {group.checkpoints.map((cp) => {
                    const isChecked = Boolean(checkedMap[cp.id]);
                    return (
                      <button
                        key={cp.id}
                        type="button"
                        onClick={() => toggleItem(cp.id)}
                        className="w-full py-3 flex items-start gap-3 text-left hover:bg-zinc-50/80 px-1.5 rounded transition-colors"
                      >
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                        ) : (
                          <Square className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        )}
                        <div className="space-y-1 flex-1">
                          <div
                            className={`text-xs leading-relaxed ${
                              isChecked ? 'text-zinc-900 font-medium' : 'text-zinc-600'
                            }`}
                          >
                            {cp.label}
                          </div>
                          <div className="flex items-center gap-2 font-mono text-[10px]">
                            <span
                              className={`px-1.5 py-0.2 rounded ${
                                cp.isCriticalCeiling
                                  ? 'bg-rose-50 text-rose-900 border border-rose-200'
                                  : 'bg-zinc-100 text-zinc-600'
                              }`}
                            >
                              {cp.isCriticalCeiling
                                ? 'Band 6 Ceiling Gatekeeper'
                                : `Band ${cp.bandTarget}+ Differentiator`}
                            </span>
                            {!isChecked && (
                              <span className="text-zinc-500">
                                Fix in: {cp.remedyModule}
                              </span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m11-rubric-checklist')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Complete Masterclass Calibration ✓
        </button>
      </div>
    </section>
  );
}
