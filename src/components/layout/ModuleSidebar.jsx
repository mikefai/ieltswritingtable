import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { CURRICULUM_MODULES } from '../../data/bandCriteria';

export default function ModuleSidebar({
  activeModuleId,
  onSelectModule,
  completedModules,
  sidebarOpen,
  perspectiveMode,
}) {
  if (!sidebarOpen) return null;

  // Group modules by phase
  const phases = CURRICULUM_MODULES.reduce((acc, mod) => {
    if (!acc[mod.phase]) acc[mod.phase] = [];
    acc[mod.phase].push(mod);
    return acc;
  }, {});

  return (
    <aside className="w-72 shrink-0 border-r border-zinc-200 bg-[#F4F4F2]/70 min-h-[calc(100vh-3.5rem)] sticky top-14 self-start overflow-y-auto max-h-[calc(100vh-3.5rem)] select-none">
      <div className="p-4 space-y-5">
        {/* Perspective Status Banner */}
        <div className="px-3 py-2.5 rounded border border-zinc-200 bg-white">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            <span>Seçili Mod</span>
            <span
              className={`px-1.5 py-0.5 rounded font-semibold ${
                perspectiveMode === 'examiner'
                  ? 'bg-zinc-900 text-zinc-50'
                  : 'bg-emerald-100 text-emerald-900'
              }`}
            >
              {perspectiveMode === 'examiner' ? 'CEVAP ANAHTARI' : 'ÖĞRENCİ PRATİK'}
            </span>
          </div>
          <p className="mt-1.5 text-xs text-zinc-600 leading-relaxed">
            {perspectiveMode === 'examiner'
              ? 'Tüm alıştırmaların doğru cevapları ve sınav görevlisi (examiner) puanlama sırları açık.'
              : '1. adımdan başlayarak sırayla ilerleyin. Her adımda tabloyu nasıl yazacağınızı uygulamalı öğreneceksiniz.'}
          </p>
        </div>

        {/* Grouped Module List */}
        <nav className="space-y-5" aria-label="Masterclass Modules">
          {Object.entries(phases).map(([phaseTitle, mods]) => (
            <div key={phaseTitle}>
              <div className="px-2 mb-1.5 text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
                {phaseTitle}
              </div>
              <ul className="space-y-0.5">
                {mods.map((mod) => {
                  const isActive = mod.id === activeModuleId;
                  const isCompleted = completedModules.includes(mod.id);
                  return (
                    <li key={mod.id}>
                      <button
                        type="button"
                        onClick={() => onSelectModule(mod.id)}
                        className={`w-full text-left px-2.5 py-2 rounded transition-colors flex items-start gap-2.5 group ${
                          isActive
                            ? 'bg-zinc-900 text-zinc-50 font-medium'
                            : 'text-zinc-700 hover:bg-zinc-200/70 hover:text-zinc-900'
                        }`}
                      >
                        <span
                          className={`font-mono text-xs mt-0.5 tabular-nums ${
                            isActive ? 'text-amber-300' : 'text-zinc-400 group-hover:text-zinc-600'
                          }`}
                        >
                          {mod.number}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs leading-snug truncate">
                            {mod.shortTitle}
                          </div>
                          <div
                            className={`text-[10px] truncate mt-0.5 ${
                              isActive ? 'text-zinc-300' : 'text-zinc-500'
                            }`}
                          >
                            {mod.targetBreakdown}
                          </div>
                        </div>
                        <span className="mt-0.5 shrink-0">
                          {isCompleted ? (
                            <CheckCircle2
                              className={`w-3.5 h-3.5 ${
                                isActive ? 'text-emerald-300' : 'text-emerald-700'
                              }`}
                            />
                          ) : (
                            <Circle
                              className={`w-3.5 h-3.5 opacity-25 ${
                                isActive ? 'text-zinc-400' : 'text-zinc-400'
                              }`}
                            />
                          )}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
