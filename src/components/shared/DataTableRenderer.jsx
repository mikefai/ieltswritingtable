import React from 'react';

/**
 * Clean, distraction-free academic table renderer in English,
 * showing the converted dollar values clearly so learners don't miss the "(in thousands)" unit.
 */
export default function DataTableRenderer({
  dataset,
  viewMode = 'clean', // 'clean' | 'highlight' | 'mask'
  interactive = false,
  userCellTags = {},
  onCellClick = null,
  selectedCellKey = null,
  showRowTotals = false,
}) {
  const yearCols = dataset.columns.filter((c) => c.key !== 'category');

  const getHighlightStyle = (cell) => {
    if (viewMode === 'clean' && !interactive) {
      return 'bg-white text-zinc-900';
    }

    if (viewMode === 'mask') {
      if (cell.status === 'must_report') {
        return 'bg-zinc-900 text-white font-semibold';
      }
      if (cell.status === 'supporting') {
        return 'bg-zinc-100 text-zinc-700';
      }
      return 'bg-zinc-50 text-zinc-300 line-through decoration-zinc-300';
    }

    if (viewMode === 'highlight') {
      if (cell.status === 'must_report') {
        if (cell.ruleId === 'extremes') {
          return 'bg-amber-50/90 text-zinc-900 font-semibold ring-1 ring-inset ring-amber-300';
        }
        if (cell.ruleId === 'anomaly') {
          return 'bg-rose-50/90 text-zinc-900 font-semibold ring-1 ring-inset ring-rose-300';
        }
        return 'bg-emerald-50/90 text-zinc-900 font-semibold ring-1 ring-inset ring-emerald-300';
      }
      if (cell.status === 'supporting') {
        return 'bg-zinc-100/80 text-zinc-800';
      }
      return 'bg-white text-zinc-400';
    }

    return 'bg-white text-zinc-900';
  };

  const getUserTagStyle = (tag) => {
    if (tag === 'must_report') {
      return 'bg-zinc-900 text-white font-semibold ring-1 ring-inset ring-zinc-900';
    }
    if (tag === 'supporting') {
      return 'bg-zinc-200/80 text-zinc-900 font-medium ring-1 ring-inset ring-zinc-400';
    }
    if (tag === 'omit') {
      return 'bg-zinc-50 text-zinc-400 line-through decoration-zinc-400';
    }
    return 'bg-white text-zinc-900 hover:bg-zinc-50';
  };

  const getUserTagBadge = (tag) => {
    if (tag === 'must_report') return 'MUST REPORT';
    if (tag === 'supporting') return 'SUPPORTING';
    if (tag === 'omit') return 'SKIP MIDPOINT';
    return 'CLICK TO TAG';
  };

  return (
    <div className="border border-zinc-300 rounded bg-white overflow-hidden">
      {/* Table Top Title Bar */}
      <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-200 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h4 className="font-serif text-base font-medium text-zinc-900">
            {dataset.tableTitle}
          </h4>
          <p className="font-mono text-xs text-rose-800 font-semibold mt-0.5">
            {dataset.unitHeader}
          </p>
        </div>
        {viewMode === 'highlight' && (
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-50 border border-amber-300 text-amber-900">
              Highest / Lowest
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-900">
              5x Surge
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-50 border border-rose-300 text-rose-900">
              2015 Peak Anomaly
            </span>
          </div>
        )}
        {viewMode === 'mask' && (
          <div className="text-[11px] font-mono text-zinc-700 bg-zinc-200/70 px-2 py-0.5 rounded">
            Dark Cells: 7 Key Figures to Write | Crossed Out: 4 Midpoints to Skip
          </div>
        )}
      </div>

      {/* Main Data Grid */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-zinc-300 bg-zinc-100/70 text-zinc-700 font-mono text-xs uppercase tracking-wider">
              <th className="py-2.5 px-4 text-left font-semibold border-r border-zinc-200">
                {dataset.columns[0].label}
              </th>
              {yearCols.map((col) => (
                <th
                  key={col.key}
                  className="py-2.5 px-4 text-right font-semibold border-r border-zinc-200 last:border-r-0 w-36"
                >
                  {col.label}
                </th>
              ))}
              {showRowTotals && (
                <th className="py-2.5 px-4 text-right font-semibold bg-zinc-100 text-zinc-600 w-44">
                  20-Yr Change
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200">
            {dataset.rows.map((row) => {
              const v2005 = parseFloat(row.cells.y2005.value);
              const v2025 = parseFloat(row.cells.y2025.value);
              const diff = (v2025 - v2005).toFixed(1);
              const pct = (((v2025 - v2005) / v2005) * 100).toFixed(0);
              const sign = diff > 0 ? '+' : '';

              return (
                <tr key={row.id} className="group">
                  <td className="py-3 px-4 font-medium text-zinc-900 border-r border-zinc-200 bg-zinc-50/40">
                    <div>{row.category}</div>
                    {viewMode !== 'clean' && !interactive && (
                      <div className="text-[11px] font-normal text-zinc-500 mt-0.5">
                        {row.trajectorySummary}
                      </div>
                    )}
                  </td>
                  {yearCols.map((col) => {
                    const cell = row.cells[col.key];
                    const cellId = `${row.id}__${col.key}`;
                    const userTag = userCellTags[cellId];
                    const isSelected = selectedCellKey === cellId;

                    const cellClasses = interactive
                      ? getUserTagStyle(userTag)
                      : getHighlightStyle(cell);

                    return (
                      <td
                        key={col.key}
                        onClick={
                          interactive && onCellClick
                            ? () => onCellClick(row, col.key, cell, cellId)
                            : undefined
                        }
                        className={`py-3 px-4 text-right font-mono tabular-nums border-r border-zinc-200 last:border-r-0 transition-all relative ${cellClasses} ${
                          interactive ? 'cursor-pointer select-none' : ''
                        } ${
                          isSelected
                            ? 'outline outline-2 -outline-offset-2 outline-zinc-900'
                            : ''
                        }`}
                      >
                        <div className="text-base leading-none">
                          {cell.value}
                          {viewMode !== 'clean' && (
                            <span className="text-[10px] opacity-60 ml-1">
                              ({cell.trueDollarValue})
                            </span>
                          )}
                        </div>

                        {/* Non-interactive Highlight / Mask Sub-labels */}
                        {!interactive && viewMode !== 'clean' && (
                          <div
                            className={`text-[10px] mt-1 font-sans tracking-tight ${
                              viewMode === 'mask' && cell.status === 'must_report'
                                ? 'text-amber-300 font-medium'
                                : 'text-zinc-500'
                            }`}
                          >
                            {cell.status === 'must_report'
                              ? `★ ${cell.featureType}`
                              : cell.status === 'supporting'
                              ? 'Context'
                              : 'Skip midpoint'}
                          </div>
                        )}

                        {/* Interactive Mode User Tag Pill */}
                        {interactive && (
                          <div
                            className={`text-[10px] mt-1 font-mono tracking-wider uppercase ${
                              userTag === 'must_report'
                                ? 'text-amber-300'
                                : userTag === 'supporting'
                                ? 'text-zinc-700'
                                : userTag === 'omit'
                                ? 'text-zinc-400 no-underline'
                                : 'text-zinc-400'
                            }`}
                          >
                            {getUserTagBadge(userTag)}
                          </div>
                        )}
                      </td>
                    );
                  })}
                  {showRowTotals && (
                    <td className="py-3 px-4 text-right font-mono text-xs tabular-nums bg-zinc-50/70 text-zinc-700">
                      <span
                        className={`font-semibold ${
                          diff > 0 ? 'text-emerald-800' : 'text-zinc-700'
                        }`}
                      >
                        {sign}${diff}k ({sign}
                        {pct}%)
                      </span>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
