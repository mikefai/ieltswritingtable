import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Copy, Check, AlertTriangle, ShieldCheck } from 'lucide-react';
import {
  STATIC_SNAPSHOT_DATASET,
  PRIMARY_TABLE_DATASET,
} from '../../data/datasets';

const DYNAMIC_TREND_VERBS = [
  'rose',
  'risen',
  'rising',
  'increased',
  'increasing',
  'fell',
  'fallen',
  'falling',
  'decreased',
  'decreasing',
  'dropped',
  'dropping',
  'climbed',
  'climbing',
  'surged',
  'plunged',
  'plummeted',
  'peaked',
  'fluctuated',
  'grew',
  'grown',
  'shrank',
  'shrunk',
];

export default function TimedWritingSpace({ perspectiveMode, onMarkComplete }) {
  const [promptMode, setPromptMode] = useState('static'); // 'static' (fresh commuter table) | 'dynamic'
  const [secondsLeft, setSecondsLeft] = useState(20 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [essayText, setEssayText] = useState('');
  const [scratchpadNotes, setScratchpadNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isRunning) return undefined;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  // Determine active pacing phase based on elapsed minutes
  const elapsedMinutes = (1200 - secondsLeft) / 60;
  const getActivePhase = () => {
    if (elapsedMinutes < 3) {
      return {
        stage: 'Phase 1 (Min 0–3): Decode & Filter',
        advice: 'Audit column units (% vs. minutes) and select 6–8 key figures before writing.',
      };
    }
    if (elapsedMinutes < 5) {
      return {
        stage: 'Phase 2 (Min 3–5): Cluster & Overview Plan',
        advice: 'Group rows into Body Paragraph 1 and Body Paragraph 2; lock your zero-number overview.',
      };
    }
    if (elapsedMinutes < 18) {
      return {
        stage: 'Phase 3 (Min 5–18): Focused Drafting',
        advice: 'Write 4 clean paragraphs using multiples, fractions, ranking participles, and "respectively".',
      };
    }
    return {
      stage: 'Phase 4 (Min 18–20): Examiner Penalty Audit',
      advice: 'Verify unit accuracy, zero numbers in Overview, and zero dynamic trend verbs on static data.',
    };
  };

  const activePhase = getActivePhase();

  // Live Self-Audit Metrics
  const words = essayText
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  const wordCount = words.length;

  const paragraphs = essayText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
  const paragraphCount = paragraphs.length;

  // Count distinct numerical figures cited (excluding census year 2024 or 2005/2015/2025)
  const rawNumberMatches = essayText.match(/\b\d+(\.\d+)?%?\b/g) || [];
  const dataFiguresCited = rawNumberMatches.filter(
    (num) => !['2024', '2005', '2015', '2025'].includes(num)
  );

  // Detect prohibited dynamic trend verbs when practicing on the Static Snapshot Table
  const lowerWords = words.map((w) => w.toLowerCase().replace(/[^a-z]/g, ''));
  const detectedTrendVerbs =
    promptMode === 'static'
      ? [...new Set(lowerWords.filter((w) => DYNAMIC_TREND_VERBS.includes(w)))]
      : [];

  // Check if Paragraph 2 (Overview) has raw numbers
  const overviewPara = paragraphs.length >= 2 ? paragraphs[1] : '';
  const overviewNumbers = (overviewPara.match(/\b\d+(\.\d+)?%?\b/g) || []).filter(
    (num) => !['2024', '2005', '2015', '2025'].includes(num)
  );

  const handleCopyDraft = () => {
    const auditHeader = `--- IELTS Task 1 Table Practice (${wordCount} words | ${dataFiguresCited.length} data figures cited) ---\n\n`;
    navigator.clipboard.writeText(auditHeader + essayText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Module 10 · Distraction-Free Timed Simulator
          </span>
          <div className="inline-flex items-center p-0.5 rounded bg-zinc-200/80 border border-zinc-300 text-xs">
            <button
              type="button"
              onClick={() => setPromptMode('static')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${
                promptMode === 'static'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Fresh Task: Static Snapshot Table (2024)
            </button>
            <button
              type="button"
              onClick={() => setPromptMode('dynamic')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${
                promptMode === 'dynamic'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Anchor Task: Dynamic Table (2005–2025)
            </button>
          </div>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          20-Minute Calibrated Writing Canvas
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Apply the 5-minute planning protocol and draft a complete 160–185 word report. The live diagnostic bar quietly audits your word count, cited figure density, overview purity, and static/dynamic verb alignment.
        </p>
      </div>

      {/* Timer & Quiet Pacing Bar */}
      <div className="border border-zinc-300 rounded bg-white p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="font-mono text-2xl sm:text-3xl font-semibold tabular-nums text-zinc-900 bg-zinc-100 px-3.5 py-1.5 rounded border border-zinc-200">
            {formatTime(secondsLeft)}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsRunning(!isRunning)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider bg-zinc-900 text-white hover:bg-zinc-800"
            >
              {isRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Start 20:00</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsRunning(false);
                setSecondsLeft(20 * 60);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-mono text-zinc-600 hover:text-zinc-900 border border-zinc-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        <div className="flex-1 min-w-[240px] max-w-md text-right">
          <div className="font-mono text-xs uppercase text-zinc-900 font-semibold">
            {activePhase.stage}
          </div>
          <div className="text-xs text-zinc-500 mt-0.5">{activePhase.advice}</div>
        </div>
      </div>

      {/* Prompt & Reference Table */}
      {promptMode === 'static' ? (
        <div className="border border-zinc-300 rounded bg-white overflow-hidden">
          <div className="p-4 bg-zinc-50 border-b border-zinc-200 space-y-1">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
              Unguided Practice Prompt · Static Cross-Sectional Snapshot
            </div>
            <p className="font-serif text-base font-medium text-zinc-900">
              {STATIC_SNAPSHOT_DATASET.promptRubric}
            </p>
            <p className="text-xs text-zinc-600 italic">
              {STATIC_SNAPSHOT_DATASET.taskInstruction}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-300 bg-zinc-100/80 text-zinc-700 font-mono text-xs uppercase">
                  {STATIC_SNAPSHOT_DATASET.columns.map((col) => (
                    <th
                      key={col.key}
                      className={`py-2.5 px-4 font-semibold border-r border-zinc-200 last:border-r-0 ${
                        col.align === 'right' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {STATIC_SNAPSHOT_DATASET.rows.map((row) => (
                  <tr key={row.id}>
                    <td className="py-2.5 px-4 font-medium text-zinc-900 border-r border-zinc-200 bg-zinc-50/50">
                      {row.city}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                      {row.rail}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                      {row.car}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                      {row.bus}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                      {row.active}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums bg-zinc-50 font-medium">
                      {row.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="border border-zinc-300 rounded bg-white p-4 space-y-2">
          <div className="font-mono text-xs uppercase text-zinc-500">
            Anchor Dynamic Prompt · {PRIMARY_TABLE_DATASET.unitHeader}
          </div>
          <p className="font-serif text-base text-zinc-900 font-medium">
            {PRIMARY_TABLE_DATASET.promptRubric}
          </p>
          <p className="font-mono text-xs text-zinc-600">
            Housing: 14.2 → 16.8 → 21.5 | Food: 9.4 → 8.9 → 8.1 | Transport: 7.6 → 8.5 → 6.2 | Digital: 1.2 → 2.9 → 5.8 | Print: 1.8 → 0.9 → 0.3
          </p>
        </div>
      )}

      {/* Workspace Grid: Scratchpad + Main Writing Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: 5-Min Pre-Writing Scratchpad & Live Audit */}
        <div className="space-y-4">
          <div className="border border-zinc-300 rounded bg-white p-4 space-y-2">
            <label
              htmlFor="prewriting-notes"
              className="font-mono text-xs uppercase tracking-wider text-zinc-700 font-semibold block"
            >
              5-Min Planning Scratchpad (Key Cells &amp; Groups)
            </label>
            <textarea
              id="prewriting-notes"
              rows={5}
              value={scratchpadNotes}
              onChange={(e) => setScratchpadNotes(e.target.value)}
              placeholder={
                promptMode === 'static'
                  ? 'e.g., Overview: Car dominates Houston/Sydney; Rail leads Tokyo/London; Amsterdam active outlier.\nBP1 (Transit/Active cities): Tokyo (64% rail, 48m), London (49% rail), Amsterdam (46% active, shortest 26m).\nBP2 (Car-dependent): Houston (86% car, 3% rail), Sydney (58% car).'
                  : 'e.g., Multiplier: $ thousands.\nBP1 (Staples): Housing ($14.2k -> $21.5k), Food ($9.4k -> $8.1k), Transport 2015 peak ($8.5k).\nBP2 (Tech vs Print): Digital 5x ($1.2k -> $5.8k) vs Print 1/6th ($1.8k -> $300).'
              }
              className="w-full rounded border border-zinc-200 bg-zinc-50 p-2.5 font-mono text-xs text-zinc-800 focus:outline-none focus:border-zinc-900"
            />
          </div>

          {/* Live Examiner Guardrail Telemetry */}
          <div className="border border-zinc-300 rounded bg-white p-4 space-y-3">
            <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-700 font-semibold border-b border-zinc-100 pb-2">
              <ShieldCheck className="w-4 h-4 text-zinc-800" />
              <span>Real-Time Examiner Self-Audit</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-600">Word Count (Target 160–185):</span>
                <span
                  className={`font-semibold px-1.5 py-0.5 rounded ${
                    wordCount >= 150 && wordCount <= 200
                      ? 'bg-emerald-100 text-emerald-900'
                      : wordCount > 200
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-zinc-100 text-zinc-800'
                  }`}
                >
                  {wordCount} words
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-600">Paragraphs (Target 4):</span>
                <span
                  className={`font-semibold px-1.5 py-0.5 rounded ${
                    paragraphCount === 4
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'bg-zinc-100 text-zinc-800'
                  }`}
                >
                  {paragraphCount}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-600">Data Figures Cited (Target 6–9):</span>
                <span
                  className={`font-semibold px-1.5 py-0.5 rounded ${
                    dataFiguresCited.length > 11
                      ? 'bg-rose-100 text-rose-900'
                      : dataFiguresCited.length >= 5
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'bg-zinc-100 text-zinc-800'
                  }`}
                >
                  {dataFiguresCited.length} figures
                </span>
              </div>
            </div>

            {/* Dynamic Warnings */}
            {dataFiguresCited.length > 11 && (
              <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Data Dumping Alert:</strong> You have cited {dataFiguresCited.length} figures. Trim secondary numbers to avoid a Band 6 TA listing penalty.
                </span>
              </div>
            )}

            {overviewNumbers.length > 0 && (
              <div className="p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Overview Purity Alert:</strong> Paragraph 2 contains raw numbers ({overviewNumbers.join(', ')}). Keep exact figures in Body Paragraphs 1 &amp; 2.
                </span>
              </div>
            )}

            {detectedTrendVerbs.length > 0 && (
              <div className="p-2.5 rounded bg-rose-50 border border-rose-300 text-xs text-rose-950 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Static Table Verb Penalty:</strong> This 2024 table is a timeless snapshot, yet your draft contains dynamic trend verbs (<em>{detectedTrendVerbs.join(', ')}</em>). Replace with static comparatives!
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right 2 Columns: Pure Distraction-Free Writing Canvas */}
        <div className="lg:col-span-2 border border-zinc-300 rounded bg-white p-5 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Candidate Response Sheet (Separate 4 Paragraphs with Blank Lines)
            </span>
            <button
              type="button"
              onClick={handleCopyDraft}
              disabled={wordCount === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300 disabled:opacity-40"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Response'}</span>
            </button>
          </div>

          <textarea
            rows={16}
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            placeholder="Paragraph 1 (Introduction): The table compares the proportion of commuters using four distinct modes of transport across five metropolitan cities in 2024, alongside average daily journey durations...&#10;&#10;Paragraph 2 (Zero-Number Overview): Overall, private cars and rail networks represented the primary commuting methods depending on the city, whereas bus usage remained comparatively low everywhere. Notably, Amsterdam stood out as the sole metropolis dominated by active transport and recorded the shortest commute...&#10;&#10;Paragraph 3 (Body Paragraph 1)...&#10;&#10;Paragraph 4 (Body Paragraph 2)..."
            className="w-full rounded border border-zinc-200 bg-[#FAFAF9] p-4 font-serif text-base text-zinc-900 leading-8 focus:outline-none focus:border-zinc-900 resize-y"
          />
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m10-timed-simulator')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Proceed to Final Rubric Diagnostic →
        </button>
      </div>
    </section>
  );
}
