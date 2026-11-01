import React, { useState } from 'react';
import { Sparkles, Check, Copy, BookOpen } from 'lucide-react';
import { MODEL_ESSAY_DATA, PRIMARY_TABLE_DATASET } from '../../data/datasets';
import DataTableRenderer from '../shared/DataTableRenderer';

const CRITERION_FILTERS = [
  {
    id: 'ALL',
    label: 'All Criteria Overlays',
    badgeClass: 'bg-zinc-900 text-white border-zinc-900',
  },
  {
    id: 'TA',
    label: '[TA] Key Features (8 Figures)',
    badgeClass: 'bg-amber-100 text-amber-950 border-amber-300',
  },
  {
    id: 'CC',
    label: '[CC] Cohesion & Signposting',
    badgeClass: 'bg-sky-100 text-sky-950 border-sky-300',
  },
  {
    id: 'LR',
    label: '[LR] Precision Collocations',
    badgeClass: 'bg-emerald-100 text-emerald-950 border-emerald-300',
  },
  {
    id: 'GRA',
    label: '[GRA] Comparative Syntax',
    badgeClass: 'bg-purple-100 text-purple-950 border-purple-300',
  },
  {
    id: 'NONE',
    label: 'Clean Prose (No Overlays)',
    badgeClass: 'bg-white text-zinc-700 border-zinc-300',
  },
];

export default function ModelAnswer({ perspectiveMode, onMarkComplete }) {
  const [activeCriterion, setActiveCriterion] = useState('ALL');
  const [selectedSegmentNote, setSelectedSegmentNote] = useState(null);
  const [showReferenceTable, setShowReferenceTable] = useState(false);
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
            Module 08 · Band 8.5 Annotated Benchmark Model
          </span>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-white font-semibold">
              Band {MODEL_ESSAY_DATA.targetBand} Calibrated
            </span>
            <span className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800">
              {MODEL_ESSAY_DATA.wordCount} Words · 4 Paragraphs
            </span>
          </div>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Anatomy of a Band 8.5+ Table Report
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {MODEL_ESSAY_DATA.examinerSummary}
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
            onClick={() => setShowReferenceTable(!showReferenceTable)}
            className="px-2.5 py-1.5 rounded text-xs font-mono bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900"
          >
            {showReferenceTable ? 'Hide Dataset Table' : 'Show Dataset Table'}
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
              className="space-y-1.5 pb-5 border-b border-zinc-100 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                  {para.label}
                </span>
                <span className="text-[11px] text-zinc-400 hidden sm:inline">
                  {para.role}
                </span>
              </div>

              <p className="font-serif text-base sm:text-[17px] text-zinc-900 leading-8">
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
            </div>
          ))}
        </div>

        {/* Right Sticky Marginalia Inspector */}
        <div className="border border-zinc-300 rounded bg-white p-5 space-y-4 lg:sticky lg:top-20">
          <div className="border-b border-zinc-200 pb-3">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Examiner Marginalia Inspector
            </div>
            <h3 className="font-serif text-base font-medium text-zinc-900 mt-0.5">
              Click any highlighted phrase in the model report
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

              <p className="text-xs text-zinc-700 leading-relaxed">
                {selectedSegmentNote.note}
              </p>
            </div>
          ) : (
            <div className="space-y-3 text-xs text-zinc-600 leading-relaxed">
              <p>
                Select any highlighted span in the essay on the left to inspect why it earns Band 8.5+ credit.
              </p>
              <div className="p-3 rounded bg-zinc-50 border border-zinc-200 space-y-1.5 font-mono text-[11px]">
                <div className="font-semibold text-zinc-900">
                  Data Audit of Model Report:
                </div>
                <div>• Total cells in table: 15</div>
                <div>• Raw figures cited in Overview: 0</div>
                <div>• Strategic figures cited in Body: 8</div>
                <div>• 2015 Midpoints omitted: 4 of 5</div>
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
          Mark Benchmark Model Studied &amp; Continue →
        </button>
      </div>
    </section>
  );
}
