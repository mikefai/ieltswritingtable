import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, RotateCcw, KeyRound, Tag } from 'lucide-react';
import { PRIMARY_TABLE_DATASET } from '../../data/datasets';
import DataTableRenderer from '../shared/DataTableRenderer';

const BRUSH_OPTIONS = [
  {
    id: 'must_report',
    label: '1. Must Report (Key Number)',
    shortDesc: 'Primary anchors you must write (Target: 7 cells)',
  },
  {
    id: 'supporting',
    label: '2. Supporting Context',
    shortDesc: 'Starting/ending benchmarks for comparison (4 cells)',
  },
  {
    id: 'omit',
    label: '3. Skip / Omit (Noise)',
    shortDesc: 'Straight-line 2015 midpoints to leave out (4 cells)',
  },
];

export default function FeatureSelectionLab({ perspectiveMode, onMarkComplete }) {
  const [activeBrush, setActiveBrush] = useState('must_report');
  const [userTags, setUserTags] = useState({});
  const [selectedCellDetail, setSelectedCellDetail] = useState(null);

  const buildExaminerKey = () => {
    const key = {};
    PRIMARY_TABLE_DATASET.rows.forEach((row) => {
      ['y2005', 'y2015', 'y2025'].forEach((colKey) => {
        key[`${row.id}__${colKey}`] = row.cells[colKey].status;
      });
    });
    return key;
  };

  useEffect(() => {
    if (perspectiveMode === 'examiner' && Object.keys(userTags).length === 0) {
      setUserTags(buildExaminerKey());
    }
  }, [perspectiveMode]);

  const handleCellClick = (row, colKey, cell, cellId) => {
    setUserTags((prev) => ({
      ...prev,
      [cellId]: activeBrush,
    }));
    const colLabel =
      PRIMARY_TABLE_DATASET.columns.find((c) => c.key === colKey)?.label || colKey;
    setSelectedCellDetail({
      cellId,
      category: row.category,
      year: colLabel,
      cell,
      appliedTag: activeBrush,
    });
  };

  const applyMasterKey = () => {
    setUserTags(buildExaminerKey());
  };

  const resetTags = () => {
    setUserTags({});
    setSelectedCellDetail(null);
  };

  const taggedEntries = Object.entries(userTags);
  const mustReportCount = taggedEntries.filter(([, v]) => v === 'must_report').length;
  const supportingCount = taggedEntries.filter(([, v]) => v === 'supporting').length;
  const omitCount = taggedEntries.filter(([, v]) => v === 'omit').length;

  const examinerKey = buildExaminerKey();
  const exactMatches = taggedEntries.filter(
    ([cellId, tag]) => examinerKey[cellId] === tag
  ).length;

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Step 03 · Feature-Selection Practice
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            Fixes Mistake #1: Writing Every Number
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Which Numbers Should You Include in Your Essay?
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Select a tag brush below and click the cells in the table to decide which numbers to <strong>Report</strong> and which 2015 midpoints to <strong>Skip</strong>. Or click <strong>&ldquo;Show Answer Key&rdquo;</strong> to see the exact selection.
        </p>
      </div>

      {/* The 3-Rule Selection Framework Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-zinc-200 rounded bg-white p-4 space-y-1.5">
          <div className="font-mono text-xs uppercase text-amber-800 font-semibold">
            Rule 01 · Highest &amp; Lowest
          </div>
          <h3 className="font-serif text-base font-medium text-zinc-900">
            Global Peak &amp; Trough
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Always report the highest value (<strong>Housing 2025: $21,500</strong>) and lowest value (<strong>Print Media 2025: $300</strong>).
          </p>
        </div>

        <div className="border border-zinc-200 rounded bg-white p-4 space-y-1.5">
          <div className="font-mono text-xs uppercase text-emerald-800 font-semibold">
            Rule 02 · Start &amp; End Only
          </div>
          <h3 className="font-serif text-base font-medium text-zinc-900">
            Skip Straight-Line Middle Years
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            When a row goes steadily up or down (Housing, Food, Digital, Print), report <strong>2005 and 2025</strong> and <strong>skip 2015</strong>.
          </p>
        </div>

        <div className="border border-zinc-200 rounded bg-white p-4 space-y-1.5">
          <div className="font-mono text-xs uppercase text-rose-800 font-semibold">
            Rule 03 · The Exception
          </div>
          <h3 className="font-serif text-base font-medium text-zinc-900">
            Report 2015 Only for Transport
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            <strong>Transport</strong> is the only row that peaked in 2015 (<strong>$8,500</strong>) before falling to $6,200.
          </p>
        </div>
      </div>

      {/* Brush Selector & Live Data-Dump Counter */}
      <div className="border border-zinc-200 rounded bg-white p-4 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-500">
              <Tag className="w-3.5 h-3.5" />
              <span>Pick a tag brush, then click cells in the table:</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {BRUSH_OPTIONS.map((brush) => {
                const active = activeBrush === brush.id;
                return (
                  <button
                    key={brush.id}
                    type="button"
                    onClick={() => setActiveBrush(brush.id)}
                    className={`px-3 py-1.5 rounded text-xs font-medium border transition-all ${
                      active
                        ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                        : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    {brush.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={applyMasterKey}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Show Answer Key</span>
            </button>
            <button
              type="button"
              onClick={resetTags}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:bg-zinc-50 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Live Data Dump Meter */}
        <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-4">
            <span
              className={`px-2 py-0.5 rounded font-semibold ${
                mustReportCount > 8
                  ? 'bg-rose-100 text-rose-900 border border-rose-300'
                  : mustReportCount >= 5
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-zinc-100 text-zinc-800'
              }`}
            >
              Must Report: {mustReportCount}/7 Target
            </span>
            <span className="text-zinc-600">
              Supporting: {supportingCount}/4
            </span>
            <span className="text-zinc-600">
              Skipped Midpoints: {omitCount}/4
            </span>
          </div>

          <div className="text-zinc-700">
            Accuracy Match:{' '}
            <strong className="text-zinc-900">{exactMatches} / 15 cells</strong>
          </div>
        </div>

        {mustReportCount > 8 && (
          <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              <strong>Too Many Key Numbers ({mustReportCount} selected):</strong> Selecting more than 8 primary numbers leads to mechanical listing. Tag the straight-line 2015 midpoints as &ldquo;Skip / Omit&rdquo;!
            </span>
          </div>
        )}
      </div>

      {/* Interactive Table */}
      <DataTableRenderer
        dataset={PRIMARY_TABLE_DATASET}
        interactive={true}
        userCellTags={userTags}
        onCellClick={handleCellClick}
        selectedCellKey={selectedCellDetail?.cellId}
        showRowTotals={true}
      />

      {/* Instant Non-Intrusive Feedback Box for Clicked Cell */}
      {selectedCellDetail ? (
        <div className="border-2 border-zinc-900 rounded bg-white p-5 space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-zinc-900 text-white">
                {selectedCellDetail.category} · {selectedCellDetail.year}
              </span>
              <span className="font-mono text-xs text-zinc-600">
                Cell Value: {selectedCellDetail.cell.value} ({selectedCellDetail.cell.trueDollarValue})
              </span>
            </div>

            <span
              className={`inline-flex items-center gap-1 font-mono text-xs px-2.5 py-0.5 rounded font-semibold ${
                selectedCellDetail.appliedTag === selectedCellDetail.cell.status
                  ? 'bg-emerald-100 text-emerald-900'
                  : 'bg-amber-100 text-amber-900'
              }`}
            >
              {selectedCellDetail.appliedTag === selectedCellDetail.cell.status ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Matches Answer Key ({selectedCellDetail.cell.status.replace('_', ' ').toUpperCase()})</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>
                    Recommended: {selectedCellDetail.cell.status.replace('_', ' ').toUpperCase()}
                  </span>
                </>
              )}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed pt-1">
            {selectedCellDetail.cell.rationale}
          </p>
        </div>
      ) : (
        <div className="border border-dashed border-zinc-300 rounded bg-zinc-50/60 p-4 text-center text-xs text-zinc-600 font-mono">
          Click any number in the table above to see whether you should include it in your essay.
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m3-feature-selection')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Continue to Step 04: Group into 2 Paragraphs →
        </button>
      </div>
    </section>
  );
}
