import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CURRICULUM_MODULES } from './data/bandCriteria';
import EditorialHeader from './components/layout/EditorialHeader';
import ModuleSidebar from './components/layout/ModuleSidebar';
import EssayBlueprintBanner from './components/shared/EssayBlueprintBanner';

// 11 Modular Curriculum Components
import ExaminerFieldGuide from './components/examiner/ExaminerFieldGuide';
import TableDatasetView from './components/shared/TableDatasetView';
import FeatureSelectionLab from './components/learner/FeatureSelectionLab';
import GroupingStrategy from './components/learner/GroupingStrategy';
import OverviewWorkshop from './components/learner/OverviewWorkshop';
import GrammarLab from './components/learner/GrammarLab';
import PlanningMethods from './components/learner/PlanningMethods';
import ModelAnswer from './components/examiner/ModelAnswer';
import ErrorClinic from './components/learner/ErrorClinic';
import TimedWritingSpace from './components/learner/TimedWritingSpace';
import RubricChecklist from './components/examiner/RubricChecklist';

export default function App() {
  const [perspectiveMode, setPerspectiveMode] = useState(() => {
    return localStorage.getItem('ielts_table_perspective') || 'learner';
  });
  const [activeModuleId, setActiveModuleId] = useState(CURRICULUM_MODULES[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [displayMode, setDisplayMode] = useState('StepFocus'); // 'StepFocus' | 'Continuous'
  const [completedModules, setCompletedModules] = useState(() => {
    try {
      const saved = localStorage.getItem('ielts_table_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('ielts_table_perspective', perspectiveMode);
  }, [perspectiveMode]);

  useEffect(() => {
    localStorage.setItem('ielts_table_completed', JSON.stringify(completedModules));
  }, [completedModules]);

  const activeIndex = Math.max(
    0,
    CURRICULUM_MODULES.findIndex((m) => m.id === activeModuleId)
  );

  const handleSelectModule = (moduleId) => {
    setActiveModuleId(moduleId);
    if (displayMode === 'Continuous') {
      const el = document.getElementById(moduleId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleMarkComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules((prev) => [...prev, moduleId]);
    }
    const idx = CURRICULUM_MODULES.findIndex((m) => m.id === moduleId);
    if (idx >= 0 && idx < CURRICULUM_MODULES.length - 1) {
      const nextId = CURRICULUM_MODULES[idx + 1].id;
      handleSelectModule(nextId);
    }
  };

  const renderModuleComponent = (moduleId) => {
    const commonProps = {
      perspectiveMode,
      onMarkComplete: handleMarkComplete,
    };

    switch (moduleId) {
      case 'm1-examiner-guide':
        return <ExaminerFieldGuide {...commonProps} />;
      case 'm2-dataset-explorer':
        return <TableDatasetView {...commonProps} />;
      case 'm3-feature-selection':
        return <FeatureSelectionLab {...commonProps} />;
      case 'm4-grouping-strategy':
        return <GroupingStrategy {...commonProps} />;
      case 'm5-overview-workshop':
        return <OverviewWorkshop {...commonProps} />;
      case 'm6-grammar-lab':
        return <GrammarLab {...commonProps} />;
      case 'm7-planning-methods':
        return <PlanningMethods {...commonProps} />;
      case 'm8-model-answer':
        return <ModelAnswer {...commonProps} />;
      case 'm9-error-clinic':
        return <ErrorClinic {...commonProps} />;
      case 'm10-timed-simulator':
        return <TimedWritingSpace {...commonProps} />;
      case 'm11-rubric-checklist':
        return <RubricChecklist {...commonProps} />;
      default:
        return <ExaminerFieldGuide {...commonProps} />;
    }
  };

  const prevModule = activeIndex > 0 ? CURRICULUM_MODULES[activeIndex - 1] : null;
  const nextModule =
    activeIndex < CURRICULUM_MODULES.length - 1
      ? CURRICULUM_MODULES[activeIndex + 1]
      : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-zinc-900">
      <EditorialHeader
        perspectiveMode={perspectiveMode}
        setPerspectiveMode={setPerspectiveMode}
        activeModuleIndex={activeIndex}
        totalModules={CURRICULUM_MODULES.length}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
        completedModulesCount={completedModules.length}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        <ModuleSidebar
          activeModuleId={activeModuleId}
          onSelectModule={handleSelectModule}
          completedModules={completedModules}
          sidebarOpen={sidebarOpen}
          perspectiveMode={perspectiveMode}
        />

        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 py-8 sm:py-10">
          <div className="max-w-4xl mx-auto">
            {/* Persistent Quick-Start 4-Paragraph Essay Blueprint Banner */}
            <EssayBlueprintBanner onJumpToModule={handleSelectModule} />

            {displayMode === 'StepFocus' ? (
              <div className="space-y-10">
                {renderModuleComponent(activeModuleId)}

                {/* Quiet Step Footer Navigation */}
                <div className="pt-8 border-t border-zinc-200 flex items-center justify-between gap-4">
                  {prevModule ? (
                    <button
                      type="button"
                      onClick={() => handleSelectModule(prevModule.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>
                        Önceki: {prevModule.number} · {prevModule.shortTitle}
                      </span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {nextModule ? (
                    <button
                      type="button"
                      onClick={() => handleSelectModule(nextModule.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                      <span>
                        Sonraki: {nextModule.number} · {nextModule.shortTitle}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            ) : (
              /* Full Syllabus Continuous Scroll Mode */
              <div className="space-y-20">
                {CURRICULUM_MODULES.map((mod) => (
                  <div
                    key={mod.id}
                    id={mod.id}
                    className="scroll-mt-20 pb-12 border-b-2 border-zinc-200 last:border-b-0"
                  >
                    {renderModuleComponent(mod.id)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
