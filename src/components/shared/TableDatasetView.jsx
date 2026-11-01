import React, { useState } from 'react';
import { Eye, Sparkles, Filter, Table2, Info } from 'lucide-react';
import {
  PRIMARY_TABLE_DATASET,
  STATIC_SNAPSHOT_DATASET,
} from '../../data/datasets';
import DataTableRenderer from './DataTableRenderer';

export default function TableDatasetView({ perspectiveMode, onMarkComplete }) {
  const [viewMode, setViewMode] = useState('clean'); // 'clean' | 'highlight' | 'mask'
  const [activeDatasetType, setActiveDatasetType] = useState('dynamic'); // 'dynamic' | 'static'
  const [showRowTotals, setShowRowTotals] = useState(false);

  const isDynamic = activeDatasetType === 'dynamic';

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Module 02 · Synthetic Task &amp; Dataset Explorer
          </span>
          <div className="inline-flex items-center p-0.5 rounded bg-zinc-200/80 border border-zinc-300 text-xs">
            <button
              type="button"
              onClick={() => setActiveDatasetType('dynamic')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${
                isDynamic ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Primary: Dynamic Table (2005–2025)
            </button>
            <button
              type="button"
              onClick={() => setActiveDatasetType('static')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${
                !isDynamic ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Comparison: Static Snapshot (2024)
            </button>
          </div>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Seeing Through the Matrix: Raw Data vs. Examiner Filter
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Before writing a single word, a Band 8+ candidate mentally transforms a raw 15-cell table into 6–8 high-signal anchor figures. Toggle between <strong>Clean View</strong>, <strong>Key Feature Highlight</strong>, and the <strong>Examiner Key-Feature Mask</strong> below.
        </p>
      </div>

      {isDynamic ? (
        <div className="space-y-6">
          {/* Official Exam Prompt Box */}
          <div className="border border-zinc-300 rounded bg-white p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-500">
              <span>IELTS Academic Writing Task 1 · Official Prompt Rubric</span>
              <span>Recommended Time: 20 Minutes · Min 150 Words</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-zinc-900 font-medium pt-1">
              {PRIMARY_TABLE_DATASET.promptRubric}
            </p>
            <p className="text-sm text-zinc-700 italic">
              {PRIMARY_TABLE_DATASET.taskInstruction}
            </p>
          </div>

          {/* Interactive View Mode Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-100/80 border border-zinc-200 p-2.5 rounded">
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Table Lens">
              <button
                type="button"
                onClick={() => setViewMode('clean')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  viewMode === 'clean'
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>1. Clean Exam View</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('highlight')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  viewMode === 'highlight'
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>2. Key Feature Highlight</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('mask')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                  viewMode === 'mask'
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                <Filter className="w-3.5 h-3.5" />
                <span>3. Examiner Key-Feature Mask</span>
              </button>
            </div>

            <label className="inline-flex items-center gap-2 text-xs text-zinc-700 cursor-pointer select-none px-2">
              <input
                type="checkbox"
                checked={showRowTotals}
                onChange={(e) => setShowRowTotals(e.target.checked)}
                className="rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
              />
              <span className="font-mono">Show Margin Math (20-Yr Net Shift)</span>
            </label>
          </div>

          {/* Primary Dataset Table */}
          <DataTableRenderer
            dataset={PRIMARY_TABLE_DATASET}
            viewMode={viewMode}
            showRowTotals={showRowTotals}
          />

          {/* Scale Multiplier Callout */}
          <div className="p-4 rounded border border-amber-300 bg-amber-50/60 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 leading-relaxed">
              <strong className="font-mono uppercase tracking-wider">
                Scale Header Alert:{' '}
              </strong>
              {PRIMARY_TABLE_DATASET.unitMultiplierNote}
            </div>
          </div>

          {/* Commentary Panel depending on ViewMode / Perspective */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-zinc-200 rounded bg-white p-4">
              <div className="font-mono text-[11px] uppercase text-zinc-500">
                Macro Extremes (2 Cells)
              </div>
              <h4 className="font-medium text-sm text-zinc-900 mt-1">
                $21,500 Peak vs. $300 Trough
              </h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                <strong>Housing (2025)</strong> records the highest single figure in the table ($21,500), whereas <strong>Print Media (2025)</strong> finishes at the global low of just $300 (0.3 thousand).
              </p>
            </div>

            <div className="border border-zinc-200 rounded bg-white p-4">
              <div className="font-mono text-[11px] uppercase text-zinc-500">
                Proportional Surge &amp; Reversal (3 Cells)
              </div>
              <h4 className="font-medium text-sm text-zinc-900 mt-1">
                Digital ($1.2k → $5.8k) vs. Print ($1.8k)
              </h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                In 2005, Digital trailed Print Media ($1,200 vs. $1,800). By 2025, Digital surged nearly fivefold to $5,800 while Print shrank by five-sixths.
              </p>
            </div>

            <div className="border border-zinc-200 rounded bg-white p-4">
              <div className="font-mono text-[11px] uppercase text-zinc-500">
                Non-Linear Anomaly (2 Cells)
              </div>
              <h4 className="font-medium text-sm text-zinc-900 mt-1">
                Transport’s 2015 Inflection ($8,500)
              </h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                Every row moves monotonically except <strong>Transport &amp; Travel</strong>, which rises from $7,600 to a 2015 peak of $8,500 before falling to $6,200. That is why 2015 is reported <em>only</em> for Transport.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Static Snapshot Comparison View */
        <div className="space-y-6">
          <div className="border border-zinc-300 rounded bg-white p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-500">
              <span>Supplementary Static Prompt · Cross-Sectional Snapshot</span>
              <span>Zero Chronological Axis (Single Census Year: 2024)</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-zinc-900 font-medium pt-1">
              {STATIC_SNAPSHOT_DATASET.promptRubric}
            </p>
            <p className="text-sm text-zinc-700 italic">
              {STATIC_SNAPSHOT_DATASET.taskInstruction}
            </p>
          </div>

          <div className="border border-zinc-300 rounded bg-white overflow-hidden">
            <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-200">
              <h4 className="font-serif text-base font-medium text-zinc-900">
                {STATIC_SNAPSHOT_DATASET.tableTitle}
              </h4>
              <p className="font-mono text-xs text-zinc-600 mt-0.5">
                {STATIC_SNAPSHOT_DATASET.unitHeader}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-300 bg-zinc-100/70 text-zinc-700 font-mono text-xs uppercase tracking-wider">
                    {STATIC_SNAPSHOT_DATASET.columns.map((col) => (
                      <th
                        key={col.key}
                        className={`py-2.5 px-4 font-semibold border-r border-zinc-200 last:border-r-0 ${
                          col.align === 'right' ? 'text-right' : 'text-left'
                        } ${col.key === 'duration' ? 'bg-zinc-200/60 text-zinc-900' : ''}`}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {STATIC_SNAPSHOT_DATASET.rows.map((row) => (
                    <tr key={row.id}>
                      <td className="py-3 px-4 font-medium text-zinc-900 border-r border-zinc-200 bg-zinc-50/40">
                        <div>{row.city}</div>
                        <div className="text-[11px] font-normal text-zinc-500 mt-0.5">
                          {row.highlightNote}
                        </div>
                      </td>
                      <td
                        className={`py-3 px-4 text-right font-mono tabular-nums border-r border-zinc-200 ${
                          row.rail === '64'
                            ? 'bg-amber-50 font-semibold text-zinc-900'
                            : row.rail === '3'
                            ? 'bg-zinc-100 text-zinc-600 font-medium'
                            : ''
                        }`}
                      >
                        {row.rail}%
                      </td>
                      <td
                        className={`py-3 px-4 text-right font-mono tabular-nums border-r border-zinc-200 ${
                          row.car === '86'
                            ? 'bg-amber-50 font-semibold text-zinc-900'
                            : ''
                        }`}
                      >
                        {row.car}%
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                        {row.bus}%
                      </td>
                      <td
                        className={`py-3 px-4 text-right font-mono tabular-nums border-r border-zinc-200 ${
                          row.active === '46'
                            ? 'bg-emerald-50 font-semibold text-zinc-900'
                            : ''
                        }`}
                      >
                        {row.active}%
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums bg-zinc-50 font-medium text-zinc-900">
                        {row.duration} mins
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded border border-zinc-300 bg-white text-xs text-zinc-700 space-y-1.5">
            <div className="font-mono uppercase text-[11px] font-semibold text-zinc-900">
              Examiner Structural Comparison: Static vs. Dynamic
            </div>
            <p>
              Notice how the final column (<strong>Avg. Commute in mins</strong>) uses a completely different unit from the first four columns (<strong>% of workforce</strong>). You will practice writing a full timed response on this exact dataset in <strong>Module 10 (Timed Simulator)</strong>.
            </p>
          </div>
        </div>
      )}

      {perspectiveMode === 'examiner' && (
        <div className="p-4 rounded border border-zinc-300 bg-zinc-100/80 text-xs text-zinc-700 space-y-1">
          <div className="font-mono uppercase text-[11px] font-semibold text-zinc-900">
            Examiner 30-Second Scan Protocol
          </div>
          <p>
            When evaluating the primary Household Expenditure table, an examiner checks whether the candidate noticed that <strong>Housing ($21,500)</strong> exceeds the other four categories combined in 2025 ($20,400), and whether they isolated <strong>Transport&apos;s 2015 peak ($8,500)</strong>. Scripts that treat 2015 as equally important across all five rows cannot exceed Band 6 in Task Achievement.
          </p>
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m2-dataset-explorer')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Mark Module 02 Explored &amp; Continue →
        </button>
      </div>
    </section>
  );
}
