import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle2, Eye, Wand2, RotateCcw } from 'lucide-react';
import { ERROR_CLINIC_DATA } from '../../data/datasets';

export default function ErrorClinic({ perspectiveMode, onMarkComplete }) {
  const [discoveredIds, setDiscoveredIds] = useState([]);
  const [activeError, setActiveError] = useState(null);
  const [showInlineFixes, setShowInlineFixes] = useState(false);

  // Extract all error segments
  const allErrors = ERROR_CLINIC_DATA.paragraphs.flatMap((p) =>
    p.segments.filter((s) => s.type === 'error')
  );

  useEffect(() => {
    if (perspectiveMode === 'examiner') {
      setDiscoveredIds(allErrors.map((e) => e.id));
      if (!activeError && allErrors.length > 0) {
        setActiveError(allErrors[0]);
      }
    }
  }, [perspectiveMode]);

  const handleSelectError = (seg) => {
    if (!discoveredIds.includes(seg.id)) {
      setDiscoveredIds((prev) => [...prev, seg.id]);
    }
    setActiveError(seg);
  };

  const revealAllErrors = () => {
    setDiscoveredIds(allErrors.map((e) => e.id));
    if (!activeError && allErrors.length > 0) {
      setActiveError(allErrors[0]);
    }
  };

  const resetClinic = () => {
    setDiscoveredIds([]);
    setActiveError(null);
    setShowInlineFixes(false);
  };

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Module 09 · Examiner Error Clinic
          </span>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-200 font-semibold">
              Candidate Script: Band {ERROR_CLINIC_DATA.candidateBand}
            </span>
            <span className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800">
              {discoveredIds.length}/{allErrors.length} Penalties Identified
            </span>
          </div>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Spot the Examiner Penalties (Band 5.5 Diagnostic)
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {ERROR_CLINIC_DATA.examinerVerdict}
        </p>
      </div>

      {/* Control Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-100/80 border border-zinc-200 p-3 rounded">
        <div className="text-xs font-mono text-zinc-700">
          Click each underlined/highlighted penalty token in the script below to inspect the penalized criterion and Band 8.5 rewrite.
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowInlineFixes(!showInlineFixes)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border transition-colors ${
              showInlineFixes
                ? 'bg-emerald-900 text-white border-emerald-900'
                : 'bg-white text-zinc-800 border-zinc-300 hover:bg-zinc-50'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>{showInlineFixes ? 'Showing Band 8.5 Inline Fixes' : 'Preview Inline Fixes'}</span>
          </button>
          <button
            type="button"
            onClick={revealAllErrors}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-white border border-zinc-300 text-zinc-800 hover:bg-zinc-50"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Reveal All ({allErrors.length})</span>
          </button>
          <button
            type="button"
            onClick={resetClinic}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono text-zinc-600 hover:text-zinc-900 border border-zinc-200 bg-white"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Split View: Flawed Script vs Examiner Penalty Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left 2 Columns: Flawed Script */}
        <div className="lg:col-span-2 border border-zinc-300 rounded bg-white p-6 sm:p-8 space-y-5">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3 text-xs font-mono text-zinc-500">
            <span>UNEDITED CANDIDATE SCRIPT ({ERROR_CLINIC_DATA.wordCount} WORDS)</span>
            <span>7 EMBEDDED PENALTY TOKENS</span>
          </div>

          <div className="space-y-5 font-serif text-base sm:text-[17px] leading-8 text-zinc-900">
            {ERROR_CLINIC_DATA.paragraphs.map((para, pIdx) => (
              <p key={para.id}>
                <span className="font-mono text-[10px] uppercase text-zinc-400 mr-2 select-none">
                  [P{pIdx + 1}]
                </span>
                {para.segments.map((seg, sIdx) => {
                  if (seg.type === 'text') {
                    return <span key={sIdx}>{seg.content}</span>;
                  }

                  const isFound = discoveredIds.includes(seg.id);
                  const isSelected = activeError?.id === seg.id;

                  return (
                    <span
                      key={seg.id}
                      onClick={() => handleSelectError(seg)}
                      className={`px-1 py-0.5 rounded-sm cursor-pointer transition-all inline ${
                        showInlineFixes
                          ? 'bg-emerald-100/90 text-emerald-950 border-b-2 border-emerald-500 font-medium'
                          : isSelected
                          ? 'bg-rose-900 text-white border-b-2 border-rose-950'
                          : isFound
                          ? 'bg-rose-100/90 text-rose-950 border-b-2 border-rose-400'
                          : 'bg-amber-50/90 hover:bg-rose-100/70 border-b border-dashed border-rose-400 text-zinc-900'
                      }`}
                    >
                      {showInlineFixes ? seg.calibratedFix : seg.flawedText}
                      <sup className="font-mono text-[9px] font-bold ml-1 uppercase">
                        [{seg.criterion}]
                      </sup>
                    </span>
                  );
                })}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Examiner Penalty Justification & Rewrite */}
        <div className="border border-zinc-300 rounded bg-white p-5 space-y-4 lg:sticky lg:top-20">
          <div className="border-b border-zinc-200 pb-3">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Examiner Penalty Breakdown
            </div>
            <h3 className="font-serif text-base font-medium text-zinc-900 mt-0.5">
              {activeError ? activeError.shortLabel : 'Select a penalty token in the essay'}
            </h3>
          </div>

          {activeError ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-300 font-semibold">
                  Penalized Criterion: [{activeError.criterion}]
                </span>
              </div>

              <div className="p-3 rounded bg-rose-50/60 border border-rose-200 space-y-1">
                <div className="font-mono text-[10px] uppercase text-rose-800 font-semibold">
                  Candidate Flawed Span:
                </div>
                <p className="font-serif text-sm italic text-zinc-900">
                  &ldquo;{activeError.flawedText}&rdquo;
                </p>
              </div>

              <div className="space-y-1 text-xs text-zinc-700 leading-relaxed">
                <div className="font-mono text-[11px] uppercase text-zinc-900 font-semibold">
                  Examiner Justification:
                </div>
                <p>{activeError.penaltyExplanation}</p>
              </div>

              <div className="p-3 rounded bg-emerald-50/70 border border-emerald-200 space-y-1">
                <div className="font-mono text-[10px] uppercase text-emerald-900 font-semibold">
                  Calibrated Band 8.5 Rewrite:
                </div>
                <p className="font-serif text-sm text-zinc-900 font-medium">
                  &ldquo;{activeError.calibratedFix}&rdquo;
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-xs text-zinc-600 leading-relaxed">
              <p>
                Click any dashed/highlighted segment in the Band 5.5 response on the left to inspect why examiners penalize it and how to rewrite it to Band 8.5 standard.
              </p>
              <ul className="space-y-1.5 font-mono text-[11px] text-zinc-500">
                {allErrors.map((e, i) => (
                  <li key={e.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectError(e)}
                      className="hover:text-zinc-900 underline decoration-zinc-300"
                    >
                      0{i + 1}. [{e.criterion}] {e.shortLabel}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m9-error-clinic')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Mark Error Clinic Complete &amp; Continue →
        </button>
      </div>
    </section>
  );
}
