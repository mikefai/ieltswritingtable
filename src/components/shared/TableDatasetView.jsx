import React, { useState } from 'react';
import { Eye, Sparkles, Filter, Info } from 'lucide-react';
import {
  PRIMARY_TABLE_DATASET,
  STATIC_SNAPSHOT_DATASET,
} from '../../data/datasets';
import DataTableRenderer from './DataTableRenderer';

export default function TableDatasetView({ perspectiveMode, onMarkComplete }) {
  const [viewMode, setViewMode] = useState('highlight'); // Default to 'highlight' so learner immediately sees what matters!
  const [activeDatasetType, setActiveDatasetType] = useState('dynamic'); // 'dynamic' | 'static'
  const [showRowTotals, setShowRowTotals] = useState(true);

  const isDynamic = activeDatasetType === 'dynamic';

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            2. Adım · Örnek Sınav Sorusu ve Tablo Analizi
          </span>
          <div className="inline-flex items-center p-0.5 rounded bg-zinc-200/80 border border-zinc-300 text-xs">
            <button
              type="button"
              onClick={() => setActiveDatasetType('dynamic')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${
                isDynamic ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Ana Örnek: Zamanlı Tablo (2005–2025)
            </button>
            <button
              type="button"
              onClick={() => setActiveDatasetType('static')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${
                !isDynamic ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Ek Örnek: Sabit Tablo (2024 Şehirler)
            </button>
          </div>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Tabloya Bakınca Neleri Görmeliyim?
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Aşağıdaki tablo boyunca birlikte adım adım 8.5 puanlık bir kompozisyon yazacağız. Tablonun üstündeki <strong>3 görünüm butonuna</strong> tıklayarak ham tablonun nasıl <strong>7 önemli sayıya</strong> indirgendiğini görün.
        </p>
      </div>

      {isDynamic ? (
        <div className="space-y-6">
          {/* Official Exam Prompt Box */}
          <div className="border border-zinc-300 rounded bg-white p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-500">
              <span>IELTS Sınav Sorusu (Task 1 Prompt)</span>
              <span>Süre: 20 Dakika · En Az 150 Kelime</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-zinc-900 font-medium pt-1">
              {PRIMARY_TABLE_DATASET.promptRubric}
            </p>
            <p className="text-xs text-zinc-600">
              <strong>Türkçesi:</strong> {PRIMARY_TABLE_DATASET.promptRubricTR}
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
                <span>1. Sınavdaki Ham Hali</span>
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
                <span>2. Önemli Sayıları Renklendir</span>
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
                <span>3. Gereksiz Sayıları Çiz (Sadece Yazılacaklar)</span>
              </button>
            </div>

            <label className="inline-flex items-center gap-2 text-xs text-zinc-700 cursor-pointer select-none px-2">
              <input
                type="checkbox"
                checked={showRowTotals}
                onChange={(e) => setShowRowTotals(e.target.checked)}
                className="rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
              />
              <span className="font-mono">20 Yıllık Değişimi Göster</span>
            </label>
          </div>

          {/* Primary Dataset Table */}
          <DataTableRenderer
            dataset={PRIMARY_TABLE_DATASET}
            viewMode={viewMode}
            showRowTotals={showRowTotals}
          />

          {/* Scale Multiplier Callout */}
          <div className="p-4 rounded border border-amber-300 bg-amber-50/70 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950 leading-relaxed">
              {PRIMARY_TABLE_DATASET.unitMultiplierNote}
            </div>
          </div>

          {/* 3 Simple Takeaways in Turkish */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-zinc-200 rounded bg-white p-4">
              <div className="font-mono text-[11px] uppercase text-amber-800 font-semibold">
                1. En Yüksek ve En Düşük
              </div>
              <h4 className="font-medium text-sm text-zinc-900 mt-1">
                Konut ($21,500) vs. Basılı Medya ($300)
              </h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                Tablodaki en büyük sayı 2025’te <strong>Konut ($21,500)</strong>, en küçük sayı ise 2025’te <strong>Basılı Medya ($300)</strong>. Bu ikisini mutlaka yazacağız.
              </p>
            </div>

            <div className="border border-zinc-200 rounded bg-white p-4">
              <div className="font-mono text-[11px] uppercase text-emerald-800 font-semibold">
                2. En Büyük Sıçrama (5 Kat)
              </div>
              <h4 className="font-medium text-sm text-zinc-900 mt-1">
                Dijital İletişim ($1,200 → $5,800)
              </h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                2005’te en küçük kalem olan <strong>Dijital ($1,200)</strong>, yaklaşık <strong>5 katına çıkarak $5,800</strong> olmuş ve Basılı Medya’yı ($1,800 → $300) geride bırakmıştır.
              </p>
            </div>

            <div className="border border-zinc-200 rounded bg-white p-4">
              <div className="font-mono text-[11px] uppercase text-rose-800 font-semibold">
                3. Tek İstisna (2015 Zirvesi)
              </div>
              <h4 className="font-medium text-sm text-zinc-900 mt-1">
                Ulaşım ($7,600 → $8,500 → $6,200)
              </h4>
              <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                Diğer tüm satırlar hep aynı yönde giderken sadece <strong>Ulaşım</strong> 2015’te <strong>$8,500 ile zirve yapıp</strong> sonra düşmüştür. Bu yüzden 2015 yılını sadece Ulaşım için yazacağız!
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Static Snapshot Comparison View */
        <div className="space-y-6">
          <div className="border border-zinc-300 rounded bg-white p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-500">
              <span>İkinci Örnek · Sabit (Static) Tablo</span>
              <span>Tek Yıl (2024) — Zaman Değişimi Yok!</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-zinc-900 font-medium pt-1">
              {STATIC_SNAPSHOT_DATASET.promptRubric}
            </p>
            <p className="text-xs text-zinc-600">
              <strong>Türkçesi:</strong> {STATIC_SNAPSHOT_DATASET.promptRubricTR}
            </p>
          </div>

          <div className="border border-zinc-300 rounded bg-white overflow-hidden">
            <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-200">
              <h4 className="font-serif text-base font-medium text-zinc-900">
                {STATIC_SNAPSHOT_DATASET.tableTitle}
              </h4>
              <p className="font-mono text-xs text-rose-800 font-semibold mt-0.5">
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
                        %{row.rail}
                      </td>
                      <td
                        className={`py-3 px-4 text-right font-mono tabular-nums border-r border-zinc-200 ${
                          row.car === '86'
                            ? 'bg-amber-50 font-semibold text-zinc-900'
                            : ''
                        }`}
                      >
                        %{row.car}
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                        %{row.bus}
                      </td>
                      <td
                        className={`py-3 px-4 text-right font-mono tabular-nums border-r border-zinc-200 ${
                          row.active === '46'
                            ? 'bg-emerald-50 font-semibold text-zinc-900'
                            : ''
                        }`}
                      >
                        %{row.active}
                      </td>
                      <td className="py-3 px-4 text-right font-mono tabular-nums bg-zinc-50 font-medium text-zinc-900">
                        {row.duration} dk
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-4 rounded border border-amber-300 bg-amber-50/70 text-xs text-amber-950 space-y-1">
            <p>{STATIC_SNAPSHOT_DATASET.unitMultiplierNote}</p>
          </div>
        </div>
      )}

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m2-dataset-explorer')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Tabloyu İnceledim, Sayı Seçme Uygulamasına Geç →
        </button>
      </div>
    </section>
  );
}
