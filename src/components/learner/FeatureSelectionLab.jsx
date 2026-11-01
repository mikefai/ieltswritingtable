import React, { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, RotateCcw, KeyRound, Tag } from 'lucide-react';
import { PRIMARY_TABLE_DATASET } from '../../data/datasets';
import DataTableRenderer from '../shared/DataTableRenderer';

const BRUSH_OPTIONS = [
  {
    id: 'must_report',
    label: 'Must Report (Key Feature)',
    shortDesc: 'Primary anchors (Target: 6–8 cells total)',
    badgeClass: 'bg-zinc-900 text-white border-zinc-900',
  },
  {
    id: 'supporting',
    label: 'Supporting Context',
    shortDesc: 'Secondary baseline or comparison anchors (2–4 cells)',
    badgeClass: 'bg-zinc-200 text-zinc-900 border-zinc-400',
  },
  {
    id: 'omit',
    label: 'Omit (Data Noise)',
    shortDesc: 'Linear midpoints that cause Band 5 listing penalties',
    badgeClass: 'bg-zinc-50 text-zinc-500 border-zinc-300 line-through',
  },
];

export default function FeatureSelectionLab({ perspectiveMode, onMarkComplete }) {
  const [activeBrush, setActiveBrush] = useState('must_report');
  const [userTags, setUserTags] = useState({});
  const [selectedCellDetail, setSelectedCellDetail] = useState(null);

  // Build examiner master key for comparison
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

  // Count statistics
  const taggedEntries = Object.entries(userTags);
  const mustReportCount = taggedEntries.filter(([, v]) => v === 'must_report').length;
  const supportingCount = taggedEntries.filter(([, v]) => v === 'supporting').length;
  const omitCount = taggedEntries.filter(([, v]) => v === 'omit').length;

  // Calculate accuracy against examiner key
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
            Module 03 · Feature-Selection Engine
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            Solves Breakdown #1: Data Dumping (12+ Figures)
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          The 3-Rule Selection Framework
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          A 15-cell table is an examiner trap. If you report 12 to 15 numbers, your Task Achievement score is capped at Band 6 for mechanical listing. Use the three rules below to tag each cell in the table as <strong>Must Report</strong>, <strong>Supporting Context</strong>, or <strong>Omit</strong>.
        </p>
      </div>

      {/* The 3-Rule Selection Framework Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-zinc-200 rounded bg-white p-4 space-y-1.5">
          <div className="font-mono text-xs uppercase text-zinc-500 font-semibold">
            Rule 01 · Extremes
          </div>
          <h3 className="font-serif text-base font-medium text-zinc-900">
            Global Peak &amp; Global Trough
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Always isolate the highest single value in the matrix (<strong>Housing 2025: $21,500</strong>) and the lowest overall value (<strong>Print Media 2025: $300</strong>), along with the dominant starting baseline.
          </p>
        </div>

        <div className="border border-zinc-200 rounded bg-white p-4 space-y-1.5">
          <div className="font-mono text-xs uppercase text-zinc-500 font-semibold">
            Rule 02 · Magnitude of Shift
          </div>
          <h3 className="font-serif text-base font-medium text-zinc-900">
            Steepest Surge &amp; Collapse
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Anchor the start and end points of the most dramatic proportional change (<strong>Digital: $1,200 → $5,800</strong>, nearly fivefold) while crossing out its linear 2015 midpoint ($2,900).
          </p>
        </div>

        <div className="border border-zinc-200 rounded bg-white p-4 space-y-1.5">
          <div className="font-mono text-xs uppercase text-zinc-500 font-semibold">
            Rule 03 · Standout Anomaly
          </div>
          <h3 className="font-serif text-base font-medium text-zinc-900">
            Non-Linear Inflection Point
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Only report a midpoint column (2015) when a row reverses direction—specifically <strong>Transport &amp; Travel peaking at $8,500 in 2015</strong> before contracting to $6,200.
          </p>
        </div>
      </div>

      {/* Brush Selector & Live Data-Dump Counter */}
      <div className="border border-zinc-200 rounded bg-white p-4 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-500">
              <Tag className="w-3.5 h-3.5" />
              <span>Step 1: Select Tag Brush, then click cells in the table below</span>
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300 transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Load Examiner Key</span>
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
              Supporting Context: {supportingCount}/4
            </span>
            <span className="text-zinc-600">
              Omitted Midpoints: {omitCount}/4
            </span>
          </div>

          <div className="text-zinc-700">
            Examiner Calibration Match:{' '}
            <strong className="text-zinc-900">{exactMatches}/15 cells</strong>
          </div>
        </div>

        {mustReportCount > 8 && (
          <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              <strong>Examiner Data-Dump Warning:</strong> You have marked {mustReportCount} cells as &ldquo;Must Report.&rdquo; Citing more than 8 primary numbers forces mechanical listing and lowers Task Achievement. Look for 2015 linear midpoints to omit!
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
        <div className="border border-zinc-300 rounded bg-white p-5 space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase px-2 py-0.5 rounded bg-zinc-900 text-white">
                {selectedCellDetail.category} · {selectedCellDetail.year}
              </span>
              <span className="font-mono text-xs text-zinc-600">
                Raw Cell: {selectedCellDetail.cell.value} ({selectedCellDetail.cell.trueDollarValue})
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
                  <span>Matches Examiner Key ({selectedCellDetail.cell.status.replace('_', ' ').toUpperCase()})</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>
                    Examiner Recommends: {selectedCellDetail.cell.status.replace('_', ' ').toUpperCase()}
                  </span>
                </>
              )}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed pt-1">
            {selectedCellDetail.cell.rationale}
          </p>
        </div>
      ) : (
        <div className="border border-dashed border-zinc-300 rounded bg-zinc-50/60 p-4 text-center text-xs text-zinc-500 font-mono">
          Click any cell in the table above to tag it and view the official Cambridge examiner rationale.
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m3-feature-selection')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Confirm Feature Selection &amp; Continue →
        </button>
      </div>
    </section>
  );
}
