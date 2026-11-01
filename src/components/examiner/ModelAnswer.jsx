import React, { useState } from 'react';
import { Check, Copy, Languages } from 'lucide-react';
import { MODEL_ESSAY_DATA, PRIMARY_TABLE_DATASET } from '../../data/datasets';
import DataTableRenderer from '../shared/DataTableRenderer';

const CRITERION_FILTERS = [
  {
    id: 'ALL',
    label: 'Tüm Açıklamaları Renklendir',
  },
  {
    id: 'TA',
    label: '[TA] Seçilen 8 Sayı ve Özet',
  },
  {
    id: 'CC',
    label: '[CC] Bağlaçlar (Overall, Conversely)',
  },
  {
    id: 'LR',
    label: '[LR] Üst Düzey Kelimeler',
  },
  {
    id: 'GRA',
    label: '[GRA] Kat, Kesir ve Respectively Kalıpları',
  },
  {
    id: 'NONE',
    label: 'Sade Metin',
  },
];

export default function ModelAnswer({ perspectiveMode, onMarkComplete }) {
  const [activeCriterion, setActiveCriterion] = useState('ALL');
  const [selectedSegmentNote, setSelectedSegmentNote] = useState(null);
  const [showReferenceTable, setShowReferenceTable] = useState(false);
  const [showTurkishTranslation, setShowTurkishTranslation] = useState(true);
  const [copied, setCopied] = useState(false);

  const isHighlighted = (tags) => {
    if (!tags || tags.length === 0 || activeCriterion === 'NONE') return false;
    if (activeCriterion === 'ALL') return true;
    return tags.includes(activeCriterion);
  };

  const getSegmentStyle = (tags) => {
    if (!isHighlighted(tags)) return '';

    const primaryTag =
      activeCriterion !== 'ALL' && tags.includes(activeCriterion)
        ? activeCriterion
        : tags[0];

    switch (primaryTag) {
      case 'TA':
        return 'bg-amber-100/80 text-zinc-900 border-b-2 border-amber-400 px-1 rounded-sm cursor-pointer hover:bg-amber-200/70';
      case 'CC':
        return 'bg-sky-100/80 text-zinc-900 border-b-2 border-sky-400 px-1 rounded-sm cursor-pointer hover:bg-sky-200/70';
      case 'LR':
        return 'bg-emerald-100/80 text-zinc-900 border-b-2 border-emerald-400 px-1 rounded-sm cursor-pointer hover:bg-emerald-200/70';
      case 'GRA':
        return 'bg-purple-100/80 text-zinc-900 border-b-2 border-purple-400 px-1 rounded-sm cursor-pointer hover:bg-purple-200/70';
      default:
        return '';
    }
  };

  const copyPlainEssay = () => {
    const plainText = MODEL_ESSAY_DATA.paragraphs
      .map((p) => p.segments.map((s) => s.text).join(''))
      .join('\n\n');
    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            8. Adım · Cümle Cümle 8.5 Puanlık Örnek Yazı
          </span>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-white font-semibold">
              Band {MODEL_ESSAY_DATA.targetBand} Örnek Rapor
            </span>
            <span className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-zinc-800">
              {MODEL_ESSAY_DATA.wordCount} Kelime · 4 Paragraf
            </span>
          </div>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Tamamlanmış 4 Paragraflık Yazı Nasıl Görünür?
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          {MODEL_ESSAY_DATA.examinerSummary} Yazıdaki <strong>renkli cümlelere tıklayarak</strong> neden yüksek puan aldığını sağ kutuda Türkçe olarak okuyabilirsiniz.
        </p>
      </div>

      {/* Non-Distracting Inline Annotation Toggles */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-100/80 border border-zinc-200 p-3 rounded">
        <div className="flex flex-wrap items-center gap-1.5">
          {CRITERION_FILTERS.map((f) => {
            const active = activeCriterion === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveCriterion(f.id)}
                className={`px-2.5 py-1.5 rounded text-xs font-mono border transition-all ${
                  active
                    ? 'bg-zinc-900 text-white border-zinc-900 font-semibold shadow-sm'
                    : 'bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowTurkishTranslation(!showTurkishTranslation)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono border ${
              showTurkishTranslation
                ? 'bg-zinc-900 text-white border-zinc-900'
                : 'bg-white text-zinc-700 border-zinc-200'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span>{showTurkishTranslation ? 'Türkçe Çeviriyi Gizle' : 'Türkçe Çeviriyi Göster'}</span>
          </button>
          <button
            type="button"
            onClick={() => setShowReferenceTable(!showReferenceTable)}
            className="px-2.5 py-1.5 rounded text-xs font-mono bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900"
          >
            {showReferenceTable ? 'Tabloyu Gizle' : 'Tabloyu Göster'}
          </button>
          <button
            type="button"
            onClick={copyPlainEssay}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-900"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Kopyalandı' : 'Yazıyı Kopyala'}</span>
          </button>
        </div>
      </div>

      {showReferenceTable && (
        <DataTableRenderer
          dataset={PRIMARY_TABLE_DATASET}
          viewMode="mask"
          showRowTotals={true}
        />
      )}

      {/* Main Annotated 4-Paragraph Essay Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2 border border-zinc-300 rounded bg-white p-6 sm:p-8 space-y-6">
          {MODEL_ESSAY_DATA.paragraphs.map((para) => (
            <div
              key={para.id}
              className="space-y-2 pb-5 border-b border-zinc-100 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded font-semibold">
                  {para.label}
                </span>
                <span className="text-xs text-zinc-500">
                  {para.role}
                </span>
              </div>

              <p className="font-serif text-base sm:text-[17px] text-zinc-900 leading-8 pt-1">
                {para.segments.map((seg, idx) => {
                  const highlighted = isHighlighted(seg.tags);
                  return (
                    <span
                      key={idx}
                      onClick={() => {
                        if (seg.note) {
                          setSelectedSegmentNote({
                            text: seg.text,
                            tags: seg.tags,
                            note: seg.note,
                            paragraph: para.label,
                          });
                        }
                      }}
                      className={`transition-colors ${getSegmentStyle(seg.tags)}`}
                    >
                      {seg.text}
                      {highlighted && seg.tags.length > 0 && (
                        <sup className="font-mono text-[9px] font-bold ml-0.5 opacity-80">
                          [{seg.tags.join('/')}]
                        </sup>
                      )}
                    </span>
                  );
                })}
              </p>

              {showTurkishTranslation && para.translationTR && (
                <div className="p-3 rounded bg-zinc-50 border border-zinc-200 text-xs text-zinc-600 leading-relaxed">
                  <strong className="text-zinc-800 font-mono uppercase text-[10px] mr-1.5">
                    Türkçe Çevirisi:
                  </strong>
                  {para.translationTR}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Sticky Marginalia Inspector */}
        <div className="border-2 border-zinc-900 rounded bg-white p-5 space-y-4 lg:sticky lg:top-20">
          <div className="border-b border-zinc-200 pb-3">
            <div className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Cümle Analizi (Neden 8.5 Aldı?)
            </div>
            <h3 className="font-serif text-base font-medium text-zinc-900 mt-0.5">
              Soldaki renkli cümlelerden birine tıklayın
            </h3>
          </div>

          {selectedSegmentNote ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {selectedSegmentNote.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-900 text-white font-semibold"
                  >
                    [{t}]
                  </span>
                ))}
                <span className="font-mono text-[11px] text-zinc-500">
                  {selectedSegmentNote.paragraph}
                </span>
              </div>

              <blockquote className="font-serif text-sm italic text-zinc-900 bg-zinc-50 p-3 rounded border-l-2 border-zinc-800">
                &ldquo;{selectedSegmentNote.text.trim()}&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed">
                {selectedSegmentNote.note}
              </p>
            </div>
          ) : (
            <div className="space-y-3 text-xs text-zinc-600 leading-relaxed">
              <p>
                Soldaki kompozisyonda renkli çizili herhangi bir ifadeye tıkladığınızda, o cümlenin hangi kalıbı kullandığını burada Türkçe olarak görebilirsiniz.
              </p>
              <div className="p-3 rounded bg-zinc-50 border border-zinc-200 space-y-1.5 font-mono text-[11px]">
                <div className="font-semibold text-zinc-900">
                  Bu Yazının Sayı Özeti:
                </div>
                <div>• Tablodaki toplam sayı: 15</div>
                <div>• Overview’da kullanılan sayı: 0</div>
                <div>• 3. ve 4. paragrafta kullanılan sayı: 8</div>
                <div>• Atlanan 2015 ara yılları: 4 / 5</div>
                <div>• Birim çevirisi ($14,200 ve $300): %100 Doğru</div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m8-model-answer')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Örnek Yazıyı İnceledim, 5.5 Puanlık Hatalı Yazıya Geç →
        </button>
      </div>
    </section>
  );
}
