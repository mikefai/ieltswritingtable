import React, { useState } from 'react';
import { Check, X, Code2, HelpCircle } from 'lucide-react';
import { GRAMMAR_PATTERNS } from '../../data/bandCriteria';

export default function GrammarLab({ perspectiveMode, onMarkComplete }) {
  const [activeTabId, setActiveTabId] = useState(GRAMMAR_PATTERNS[0].id);
  const [drillAnswers, setDrillAnswers] = useState({});

  const activePattern =
    GRAMMAR_PATTERNS.find((p) => p.id === activeTabId) || GRAMMAR_PATTERNS[0];

  const selectedDrillOptionId = drillAnswers[activePattern.id];

  const handleSelectOption = (patternId, optionId) => {
    setDrillAnswers((prev) => ({
      ...prev,
      [patternId]: optionId,
    }));
  };

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            6. Adım · Detay Paragrafları İçin 5 Hazır Cümle Kalıbı
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            3. ve 4. Paragrafta Bu Kalıpları Kullanın!
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Ezberleyip Hemen Kullanabileceğiniz 5 Altın Cümle Kalıbı
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          3. ve 4. paragrafta sayıları yazarken sürekli <em>&ldquo;Housing increased to 21,500. Food decreased to 8,100.&rdquo;</em> derseniz gramer puanınız 6.0’da kalır. Aşağıdaki <strong>5 hazır kalıba</strong> sırayla tıklayın ve her birinden 1 cümleyi yazınızda kullanın.
        </p>
      </div>

      {/* 5-Pattern Minimalist Tabs */}
      <div className="border-b border-zinc-200 flex flex-wrap gap-1.5 pb-2">
        {GRAMMAR_PATTERNS.map((pat) => {
          const isActive = pat.id === activeTabId;
          const isAnswered = Boolean(drillAnswers[pat.id]);
          return (
            <button
              key={pat.id}
              type="button"
              onClick={() => setActiveTabId(pat.id)}
              className={`px-3 py-2 rounded text-xs font-mono transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-zinc-900 text-white font-semibold shadow-sm'
                  : 'bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100'
              }`}
            >
              <span>{pat.tabLabel}</span>
              {isAnswered && (
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? 'bg-emerald-300' : 'bg-emerald-600'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Pattern Specification Card */}
      <div className="border border-zinc-300 rounded bg-white p-6 space-y-6">
        <div className="border-b border-zinc-100 pb-4">
          <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
            Hazır Cümle Şablonu
          </div>
          <h3 className="font-serif text-xl font-medium text-zinc-900 mt-1">
            {activePattern.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1">
            {activePattern.examinerPurpose}
          </p>
        </div>

        {/* Syntactic Formula Box */}
        <div className="p-4 rounded bg-zinc-900 text-zinc-100 font-mono text-xs sm:text-sm leading-relaxed">
          <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-amber-300 mb-1.5">
            <Code2 className="w-3.5 h-3.5" />
            <span>Kalıp Formülü:</span>
          </div>
          <div>{activePattern.formula}</div>
        </div>

        {/* Bad vs Good Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded border border-rose-200 bg-rose-50/40 space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-xs uppercase text-rose-900 font-semibold">
              <X className="w-4 h-4 text-rose-700" />
              <span>Öğrencinin Yaptığı Yanlış (5.5 Puan)</span>
            </div>
            <p className="font-serif text-sm sm:text-base text-zinc-900 italic">
              &ldquo;{activePattern.badExample}&rdquo;
            </p>
            <p className="text-xs text-rose-900 pt-1 border-t border-rose-200/60">
              {activePattern.badReason}
            </p>
          </div>

          <div className="p-4 rounded border border-emerald-200 bg-emerald-50/40 space-y-2">
            <div className="flex items-center gap-1.5 font-mono text-xs uppercase text-emerald-900 font-semibold">
              <Check className="w-4 h-4 text-emerald-700" />
              <span>Doğru 8.5 Puanlık Örnek Cümleler</span>
            </div>
            <p className="font-serif text-sm sm:text-base text-zinc-900 italic">
              1. &ldquo;{activePattern.goodExample}&rdquo;
            </p>
            <p className="font-serif text-sm text-zinc-800 italic pt-1 border-t border-emerald-200/60">
              2. &ldquo;{activePattern.secondaryGoodExample}&rdquo;
            </p>
          </div>
        </div>

        {/* Micro-Drill for Active Tab */}
        <div className="pt-4 border-t border-zinc-200 space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-zinc-700 font-semibold">
            <HelpCircle className="w-4 h-4 text-zinc-600" />
            <span>Hızlı Alıştırma: Doğru Cümleyi Seçin</span>
          </div>
          <p className="text-sm text-zinc-900 font-medium">
            {activePattern.drill.question}
          </p>

          <div className="space-y-2">
            {activePattern.drill.options.map((opt) => {
              const isSelected = selectedDrillOptionId === opt.id;
              const showKey = isSelected || perspectiveMode === 'examiner';

              return (
                <div key={opt.id} className="space-y-1.5">
                  <button
                    type="button"
                    onClick={() => handleSelectOption(activePattern.id, opt.id)}
                    className={`w-full text-left p-3.5 rounded border transition-all flex items-start justify-between gap-3 ${
                      isSelected
                        ? opt.isCorrect
                          ? 'bg-emerald-900 text-white border-emerald-900'
                          : 'bg-rose-900 text-white border-rose-900'
                        : 'bg-zinc-50 text-zinc-900 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    <span className="font-serif text-sm sm:text-base">
                      {opt.text}
                    </span>
                    {showKey && (
                      <span
                        className={`font-mono text-[11px] uppercase px-2 py-0.5 rounded shrink-0 ${
                          opt.isCorrect
                            ? 'bg-emerald-100 text-emerald-900 font-semibold'
                            : 'bg-rose-100 text-rose-900'
                        }`}
                      >
                        {opt.isCorrect ? 'DOĞRU (8.5)' : 'HATALI'}
                      </span>
                    )}
                  </button>

                  {showKey && (
                    <div
                      className={`px-3.5 py-2 rounded text-xs ${
                        opt.isCorrect
                          ? 'bg-emerald-50 text-emerald-950 border border-emerald-200'
                          : 'bg-rose-50 text-rose-950 border border-rose-200'
                      }`}
                    >
                      {opt.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m6-grammar-lab')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          5 Cümle Kalıbını Öğrendim, 20 Dakika Planına Geç →
        </button>
      </div>
    </section>
  );
}
