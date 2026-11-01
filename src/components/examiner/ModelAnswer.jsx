import React, { useState } from 'react';
import { Check, Copy, Languages } from 'lucide-react';
import { MODEL_ESSAY_DATA, PRIMARY_TABLE_DATASET } from '../../data/datasets';
import DataTableRenderer from '../shared/DataTableRenderer';

const CRITERION_FILTERS = [
  {
    id: 'ALL',
    label: 'All Annotations',
  },
  {
    id: 'TA',
    label: '[TA] Key Features (8 Figures)',
  },
  {
    id: 'CC',
    label: '[CC] Linkers & Cohesion',
  },
  {
    id: 'LR',
    label: '[LR] Vocabulary',
  },
  {
    id: 'GRA',
    label: '[GRA] Grammar Patterns',
  },
  {
    id: 'NONE',
    label: 'Clean Text',
  },
];

export default function ModelAnswer({ perspectiveMode, onMarkComplete }) {
  const [activeCriterion, setActiveCriterion] = useState('ALL');
  const [selectedSegmentNote, setSelectedSegmentNote] = useState(null);
  const [showReferenceTable, setShowReferenceTable] = useState(false);
  const [showTurkishTranslation, setShowTurkishTranslation] = useState(false);
  const [copied, setCopied] = useState(false);

  const isHighlighted = (tags) => {
    if (!tags || tags.length === 0 || activeCriterion === 'NONE') return false;
    if (activeCriterion === 'ALL') return true;
    return tags.includes(activeCriterion);
  };

  const getSegmentStyle = (tags) => {
    if (!isHighlighted(tags)) return '';

    const primaryTag =
      activeCriterion !== 'ALL' && tags.includes(activeCriterion)
        ? activeCriterion
        : tags[0];

    switch (primaryTag) {
      case 'TA':
        return 'bg-amber-100/80 text-zinc-900 border-b-2 border-amber-400 px-1 rounded-sm cursor-pointer hover:bg-amber-200/70';
      case 'CC':
        return 'bg-sky-100/80 text-zinc-900 border-b-2 border-sky-400 px-1 rounded-sm cursor-pointer hover:bg-sky-200/70';
      case 'LR':
        return 'bg-emerald-100/80 text-zinc-900 border-b-2 border-emerald-400 px-1 rounded-sm cursor-pointer hover:bg-emerald-200/70';
      case 'GRA':
        return 'bg-purple-100/80 text-zinc-900 border-b-2 border-purple-400 px-1 rounded-sm cursor-pointer hover:bg-purple-200/70';
      default:
        return '';
    }
  };

  const copyPlainEssay = () => {
    const plainText = MODEL_ESSAY_DATA.paragraphs
      .map((p) => p.segments.map((s) => s.text).join(''))
      .join('\n\n');
    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Step 08 · Band 8.5 Annotated Benchmark Model
          </span>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-white font-semibold">
              Band {MODEL_ESSAY_DATA.targetBand} Model Essay
            </span>
            <span className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800">
              {MODEL_ESSAY_DATA.wordCount} Words · 4 Paragraphs
            </span>
          </div>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Complete Band 8.5 Model Essay (4-Paragraph Structure)
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {MODEL_ESSAY_DATA.examinerSummary} Click any highlighted phrase in the essay to inspect why it scores Band 8.5+.
        </p>
      </div>

      {/* Non-Distracting Inline Annotation Toggles */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-100/80 border border-zinc-200 p-3 rounded">
        <div className="flex flex-wrap items-center gap-1.5">
          {CRITERION_FILTERS.map((f) => {
            const active = activeCriterion === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveCriterion(f.id)}
                className={`px-2.5 py-1.5 rounded text-xs font-mono border transition-all ${
                  active
                    ? 'bg-zinc-900 text-white border-zinc-900 font-semibold shadow-sm'
                    : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowTurkishTranslation(!showTurkishTranslation)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono border ${
              showTurkishTranslation
                ? 'bg-amber-100 text-amber-950 border-amber-300 font-semibold'
                : 'bg-white text-zinc-700 border-zinc-200 hover:text-zinc-900'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{showTurkishTranslation ? 'Hide TR Meaning' : 'TR Meaning'}</span>
          </button>
          <button
            type="button"
            onClick={() => setShowReferenceTable(!showReferenceTable)}
            className="px-2.5 py-1.5 rounded text-xs font-mono bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900"
          >
            {showReferenceTable ? 'Hide Table' : 'Show Table'}
          </button>
          <button
            type="button"
            onClick={copyPlainEssay}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Essay'}</span>
          </button>
        </div>
      </div>

      {showReferenceTable && (
        <DataTableRenderer
          dataset={PRIMARY_TABLE_DATASET}
          viewMode="mask"
          showRowTotals={true}
        />
      )}

      {/* Main Annotated 4-Paragraph Essay Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 border border-zinc-300 rounded bg-white p-6 sm:p-8 space-y-6">
          {MODEL_ESSAY_DATA.paragraphs.map((para) => (
            <div
              key={para.id}
              className="space-y-2 pb-5 border-b border-zinc-100 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded font-semibold">
                  {para.label}
                </span>
                <span className="text-xs text-zinc-500">
                  {para.role}
                </span>
              </div>

              <p className="font-serif text-base sm:text-[17px] text-zinc-900 leading-8 pt-1">
                {para.segments.map((seg, idx) => {
                  const highlighted = isHighlighted(seg.tags);
                  return (
                    <span
                      key={idx}
                      onClick={() => {
                        if (seg.note) {
                          setSelectedSegmentNote({
                            text: seg.text,
                            tags: seg.tags,
                            note: seg.note,
                            paragraph: para.label,
                          });
                        }
                      }}
                      className={`transition-colors ${getSegmentStyle(seg.tags)}`}
                    >
                      {seg.text}
                      {highlighted && seg.tags.length > 0 && (
                        <sup className="font-mono text-[9px] font-bold ml-0.5 opacity-80">
                          [{seg.tags.join('/')}]
                        </sup>
                      )}
                    </span>
                  );
                })}
              </p>

              {showTurkishTranslation && para.translationTR && (
                <div className="p-3 rounded bg-amber-50/60 border border-amber-200 text-xs text-amber-950 leading-relaxed">
                  <strong className="font-mono uppercase text-[10px] mr-1.5">
                    TR Anlamı:
                  </strong>
                  {para.translationTR}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Sticky Marginalia Inspector */}
        <div className="border-2 border-zinc-900 rounded bg-white p-5 space-y-4 lg:sticky lg:top-20">
          <div className="border-b border-zinc-200 pb-3">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Examiner Note Inspector
            </div>
            <h3 className="font-serif text-base font-medium text-zinc-900 mt-0.5">
              Click any highlighted phrase on the left
            </h3>
          </div>

          {selectedSegmentNote ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {selectedSegmentNote.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-900 text-white font-semibold"
                  >
                    [{t}]
                  </span>
                ))}
                <span className="font-mono text-[11px] text-zinc-500">
                  {selectedSegmentNote.paragraph}
                </span>
              </div>

              <blockquote className="font-serif text-sm italic text-zinc-900 bg-zinc-50 p-3 rounded border-l-2 border-zinc-800">
                &ldquo;{selectedSegmentNote.text.trim()}&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                {selectedSegmentNote.note}
              </p>
            </div>
          ) : (
            <div className="space-y-3 text-xs text-zinc-600 leading-relaxed">
              <p>
                Click any colored sentence segment in the essay on the left to see why it scores Band 8.5+.
              </p>
              <div className="p-3 rounded bg-zinc-50 border border-zinc-200 space-y-1.5 font-mono text-[11px]">
                <div className="font-semibold text-zinc-900">
                  Model Report Data Summary:
                </div>
                <div>• Total cells in table: 15</div>
                <div>• Raw figures in Overview: 0</div>
                <div>• Key figures in Body 1 &amp; 2: 8</div>
                <div>• 2015 Midpoints skipped: 4 of 5</div>
                <div>• Unit header ($ thousands) applied: 100%</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m8-model-answer')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Continue to Step 09: Band 5.5 Error Clinic →
        </button>
      </div>
    </section>
  );
}
