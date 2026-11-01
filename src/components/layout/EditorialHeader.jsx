import React from 'react';
import { BookOpen, ShieldCheck, PanelLeftClose, PanelLeftOpen, Layers, FileText } from 'lucide-react';

export default function EditorialHeader({
  perspectiveMode,
  setPerspectiveMode,
  activeModuleIndex,
  totalModules,
  sidebarOpen,
  setSidebarOpen,
  displayMode,
  setDisplayMode,
  completedModulesCount,
}) {
  const progressPct = Math.round(((activeModuleIndex + 1) / totalModules) * 100);

  return (
    <header className="sticky top-0 z-30 bg-[#FAFAF9]/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Left: Sidebar Toggle & Editorial Brand */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60 transition-colors"
            title={sidebarOpen ? 'Hide steps sidebar' : 'Show steps sidebar'}
            aria-label="Toggle curriculum index"
          >
            {sidebarOpen ? (
              <PanelLeftClose className="w-4 h-4" />
            ) : (
              <PanelLeftOpen className="w-4 h-4" />
            )}
          </button>

          <div className="flex items-baseline gap-2.5 truncate">
            <span className="font-mono text-[11px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-zinc-900 text-white font-medium">
              IELTS Task 1
            </span>
            <h1 className="font-serif text-base sm:text-lg font-medium text-zinc-900 truncate">
              Interpreting &amp; Reporting Tables
            </h1>
            <span className="hidden lg:inline-block text-xs text-zinc-500 border-l border-zinc-300 pl-2.5">
              Step-by-Step Essay Builder &amp; Examiner Guide
            </span>
          </div>
        </div>

        {/* Center: Quiet Step Progress */}
        <div className="hidden md:flex items-center gap-3 text-xs text-zinc-500">
          <span className="font-mono tabular-nums">
            Step {String(activeModuleIndex + 1).padStart(2, '0')}/{String(totalModules).padStart(2, '0')}
          </span>
          <div className="w-24 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-900 transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          {completedModulesCount > 0 && (
            <span className="font-mono text-[11px] text-emerald-900 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
              {completedModulesCount} Completed
            </span>
          )}
        </div>

        {/* Right: Layout Mode + Perspective Switch (Learner vs Examiner Calibration) */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Focus vs Continuous Scroll Switch */}
          <button
            type="button"
            onClick={() =>
              setDisplayMode(displayMode === 'StepFocus' ? 'Continuous' : 'StepFocus')
            }
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200 rounded transition-colors"
            title="Switch between step-by-step focus view and full page view"
          >
            {displayMode === 'StepFocus' ? (
              <>
                <FileText className="w-3.5 h-3.5 text-zinc-500" />
                <span>Step View</span>
              </>
            ) : (
              <>
                <Layers className="w-3.5 h-3.5 text-zinc-500" />
                <span>All Steps</span>
              </>
            )}
          </button>

          {/* Dual Perspective Toggle */}
          <div
            className="inline-flex items-center p-0.5 rounded bg-zinc-200/80 border border-zinc-300/80"
            role="group"
            aria-label="Perspective Mode Switch"
          >
            <button
              type="button"
              onClick={() => setPerspectiveMode('learner')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                perspectiveMode === 'learner'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Learner Mode</span>
            </button>
            <button
              type="button"
              onClick={() => setPerspectiveMode('examiner')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-all ${
                perspectiveMode === 'examiner'
                  ? 'bg-zinc-900 text-zinc-50 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Examiner Key</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
