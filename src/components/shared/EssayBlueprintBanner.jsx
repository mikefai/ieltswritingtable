import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, FileText, Globe } from 'lucide-react';
import { FOUR_PARAGRAPH_BLUEPRINT } from '../../data/datasets';

export default function EssayBlueprintBanner({ onJumpToModule }) {
  const [isOpen, setIsOpen] = useState(true);
  const [activePara, setActivePara] = useState(1);
  const [showTrTips, setShowTrTips] = useState(false);

  const currentBlueprint =
    FOUR_PARAGRAPH_BLUEPRINT.find((p) => p.paragraphNumber === activePara) ||
    FOUR_PARAGRAPH_BLUEPRINT[0];

  return (
    <div className="mb-8 border-2 border-zinc-900 rounded bg-white overflow-hidden shadow-sm">
      {/* Top Toggle Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-3.5 bg-zinc-900 text-white flex items-center justify-between gap-4 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2.5">
          <HelpCircle className="w-4 h-4 text-amber-300 shrink-0" />
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-semibold mr-2">
              Quick-Start Guide:
            </span>
            <span className="font-serif text-sm sm:text-base font-medium">
              How to Write a Band 8+ Table Essay in 4 Simple Paragraphs
            </span>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1 font-mono text-xs text-zinc-300 hover:text-white shrink-0"
        >
          <span>{isOpen ? 'Hide Guide' : 'Open 4-Paragraph Formula'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="p-5 sm:p-6 space-y-6 bg-[#FAFAF9]">
          {/* Plain-English Product Purpose Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded bg-white border border-zinc-200 space-y-1.5">
              <div className="font-mono text-[11px] uppercase text-zinc-500 font-semibold">
                1. What Is Your Goal?
              </div>
              <h3 className="font-serif text-base font-medium text-zinc-900">
                Write a 150+ Word Report in 20 Mins
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                In IELTS Writing Task 1, you must summarize a data table in <strong>4 short paragraphs (about 9–10 sentences total)</strong>. Do not give personal opinions—just select and compare the main numbers.
              </p>
            </div>

            <div className="p-4 rounded bg-white border border-zinc-200 space-y-1.5">
              <div className="font-mono text-[11px] uppercase text-rose-800 font-semibold">
                2. Why Do Students Get Band 5.5?
              </div>
              <h3 className="font-serif text-base font-medium text-zinc-900">
                Writing Every Number in the Table
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                If a table has 15 numbers and you write all 15 in order (or put numbers inside your Overview paragraph), your Task Achievement score is <strong>capped at Band 5.5 / 6.0</strong>.
              </p>
            </div>

            <div className="p-4 rounded bg-white border border-zinc-200 space-y-1.5">
              <div className="font-mono text-[11px] uppercase text-emerald-800 font-semibold">
                3. How to Use This Tool
              </div>
              <h3 className="font-serif text-base font-medium text-zinc-900">
                Select, Group &amp; Use Templates
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Follow the 11 steps on the left to practice picking the <strong>7–8 key numbers</strong>, grouping rows into <strong>2 body paragraphs</strong>, and writing with ready-made sentence templates.
              </p>
            </div>
          </div>

          {/* Interactive 4-Paragraph Blueprint */}
          <div className="border border-zinc-300 rounded bg-white p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-3">
              <div>
                <h4 className="font-serif text-lg font-medium text-zinc-900">
                  The 4-Paragraph Essay Blueprint (Click each paragraph to see the template)
                </h4>
                <p className="text-xs text-zinc-600">
                  Every IELTS Table essay follows this exact 4-paragraph structure:
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowTrTips(!showTrTips)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono border transition-colors ${
                    showTrTips
                      ? 'bg-amber-100 text-amber-950 border-amber-300 font-semibold'
                      : 'bg-white text-zinc-600 border-zinc-200 hover:text-zinc-900'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>{showTrTips ? 'TR İpucu: Açık' : 'TR İpucu Göster'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => onJumpToModule('m8-model-answer')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>See Full Model Essay (Step 08)</span>
                </button>
              </div>
            </div>

            {/* 4 Paragraph Selector Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {FOUR_PARAGRAPH_BLUEPRINT.map((p) => {
                const active = activePara === p.paragraphNumber;
                return (
                  <button
                    key={p.paragraphNumber}
                    type="button"
                    onClick={() => setActivePara(p.paragraphNumber)}
                    className={`text-left p-3 rounded border transition-all ${
                      active
                        ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                        : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    <div
                      className={`font-mono text-[11px] uppercase font-semibold ${
                        active ? 'text-amber-300' : 'text-zinc-500'
                      }`}
                    >
                      {p.sentenceCount}
                    </div>
                    <div className="text-xs font-medium mt-1 leading-snug">
                      {p.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Paragraph Recipe Details */}
            <div className="p-4 rounded bg-zinc-50 border border-zinc-200 space-y-4">
              <div className="space-y-1.5">
                <div className="font-mono text-xs uppercase text-zinc-900 font-semibold">
                  {currentBlueprint.title} — What to Write:
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {currentBlueprint.whatToDoEN}
                </p>
                {showTrTips && (
                  <p className="text-xs text-amber-950 bg-amber-50/80 border border-amber-200 px-3 py-1.5 rounded font-medium">
                    {currentBlueprint.trHint}
                  </p>
                )}
              </div>

              {/* Fill in the blank template */}
              <div className="p-3.5 rounded bg-zinc-900 text-zinc-100 space-y-1">
                <div className="font-mono text-[11px] uppercase tracking-wider text-amber-300">
                  Fill-in-the-Blank Sentence Template:
                </div>
                <p className="font-mono text-xs sm:text-sm leading-relaxed">
                  {currentBlueprint.template}
                </p>
              </div>

              {/* Real Band 8.5 Example */}
              <div className="p-3 rounded bg-white border border-zinc-200 space-y-1">
                <div className="font-mono text-[11px] uppercase text-emerald-800 font-semibold">
                  Band 8.5 Completed Example:
                </div>
                <p className="font-serif text-sm sm:text-base text-zinc-900 italic leading-relaxed">
                  &ldquo;{currentBlueprint.exampleEN}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
