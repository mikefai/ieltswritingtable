import React, { useState, useEffect } from 'react';
import { Check, AlertTriangle, KeyRound } from 'lucide-react';
import {
  OVERVIEW_BUILDER_OPTIONS,
  OVERVIEW_BENCHMARKS,
} from '../../data/bandCriteria';

export default function OverviewWorkshop({ perspectiveMode, onMarkComplete }) {
  const [selectedS1, setSelectedS1] = useState(null);
  const [selectedS2, setSelectedS2] = useState(null);
  const [customDraft, setCustomDraft] = useState('');

  useEffect(() => {
    if (perspectiveMode === 'examiner') {
      setSelectedS1('s1-opt-band8');
      setSelectedS2('s2-opt-band8');
    }
  }, [perspectiveMode]);

  const s1Obj = OVERVIEW_BUILDER_OPTIONS.sentence1.options.find(
    (o) => o.id === selectedS1
  );
  const s2Obj = OVERVIEW_BUILDER_OPTIONS.sentence2.options.find(
    (o) => o.id === selectedS2
  );

  const rawDigitMatches = customDraft.match(/\b\d+(\.\d+)?%?\b/g) || [];
  const dataNumbersInDraft = rawDigitMatches.filter(
    (n) => !['2005', '2015', '2025'].includes(n)
  );

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            5. Adım · Overview (2. Paragraf) Yazma Atölyesi
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            En Önemli Kural: Overview’da HİÇ SAYI YAZILMAZ!
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Sayı Kullanmadan 2 Cümlede Overview Nasıl Yazılır?
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          IELTS Task 1’de en çok puan getiren yer <strong>2. Paragraftır (Overview)</strong>. Eğer Overview yazmazsanız puanınız <strong>5.0’ı geçemez</strong>; içine sayı ($14,200 vb.) yazarsanız <strong>6.0’da takılır</strong>. Sadece <strong>2 cümlelik şu formülü</strong> kullanın:
        </p>
      </div>

      {/* The 2-Sentence Formula Blueprint */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-zinc-200 rounded bg-white p-5 space-y-2">
          <div className="font-mono text-xs uppercase text-amber-800 font-semibold">
            1. Cümle Formülü · En Büyük Kategori + Genel Yön
          </div>
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            &ldquo;Overall, [En Büyük] dominated..., whereas [Azalanlar] contracted.&rdquo;
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            Cümleye <strong>&ldquo;Overall,&rdquo;</strong> ile başlayın. Tablodaki en büyük harcamanın hangisi olduğunu (Konut) ve diğer kategorilerin genel olarak azaldığını söyleyin.
          </p>
        </div>

        <div className="border border-zinc-200 rounded bg-white p-5 space-y-2">
          <div className="font-mono text-xs uppercase text-emerald-800 font-semibold">
            2. Cümle Formülü · En Hızlı Değişim / Yer Değiştirme
          </div>
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            &ldquo;Notably, [En Çok Artan] experienced the most dramatic growth...&rdquo;
          </h3>
          <p className="text-xs text-zinc-600 leading-relaxed">
            İkinci cümleye <strong>&ldquo;Notably,&rdquo;</strong> (Dikkat çekici şekilde,) ile başlayın. Oransal olarak en çok sıçrayan kategoriyi (Dijital) ve Basılı Medya’yı geçtiğini belirtin.
          </p>
        </div>
      </div>

      {/* Interactive Controlled Phrase Builder */}
      <div className="border border-zinc-300 rounded bg-white p-5 space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-zinc-200 pb-4">
          <div>
            <h3 className="font-serif text-lg font-medium text-zinc-900">
              Uygulama: Doğru Overview Cümlelerini Seçin
            </h3>
            <p className="text-xs text-zinc-600 mt-0.5">
              1. Cümle ve 2. Cümle için aşağıdaki seçeneklerden <strong>sayı içermeyen ve net bilgi veren</strong> Band 8.5 cümlesini seçin:
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedS1('s1-opt-band8');
              setSelectedS2('s2-opt-band8');
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 text-white hover:bg-zinc-800"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>8.5 Puanlık İkiliyi Seç</span>
          </button>
        </div>

        {/* Sentence 1 Selector */}
        <div className="space-y-2.5">
          <div className="font-mono text-xs uppercase tracking-wider text-zinc-700 font-semibold">
            {OVERVIEW_BUILDER_OPTIONS.sentence1.prompt}
          </div>
          <div className="space-y-2">
            {OVERVIEW_BUILDER_OPTIONS.sentence1.options.map((opt) => {
              const active = selectedS1 === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedS1(opt.id)}
                  className={`w-full text-left p-3.5 rounded border transition-all ${
                    active
                      ? 'bg-zinc-900 text-white border-zinc-900'
                      : 'bg-zinc-50/70 text-zinc-800 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  <p className="font-serif text-sm sm:text-base leading-relaxed">
                    {opt.text}
                  </p>
                </button>
              );
            })}
          </div>
          {s1Obj && (
            <div
              className={`p-3 rounded border text-xs flex items-start gap-2 ${
                s1Obj.quality === 'band8'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              {s1Obj.quality === 'band8' ? (
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
              )}
              <span>{s1Obj.feedback}</span>
            </div>
          )}
        </div>

        {/* Sentence 2 Selector */}
        <div className="space-y-2.5">
          <div className="font-mono text-xs uppercase tracking-wider text-zinc-700 font-semibold">
            {OVERVIEW_BUILDER_OPTIONS.sentence2.prompt}
          </div>
          <div className="space-y-2">
            {OVERVIEW_BUILDER_OPTIONS.sentence2.options.map((opt) => {
              const active = selectedS2 === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedS2(opt.id)}
                  className={`w-full text-left p-3.5 rounded border transition-all ${
                    active
                      ? 'bg-zinc-900 text-white border-zinc-900'
                      : 'bg-zinc-50/70 text-zinc-800 border-zinc-200 hover:bg-zinc-100'
                  }`}
                >
                  <p className="font-serif text-sm sm:text-base leading-relaxed">
                    {opt.text}
                  </p>
                </button>
              );
            })}
          </div>
          {s2Obj && (
            <div
              className={`p-3 rounded border text-xs flex items-start gap-2 ${
                s2Obj.quality === 'band8'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-rose-300 text-rose-950'
              }`}
            >
              {s2Obj.quality === 'band8' ? (
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
              )}
              <span>{s2Obj.feedback}</span>
            </div>
          )}
        </div>

        {/* Assembled Output Preview */}
        {s1Obj && s2Obj && (
          <div className="p-4 rounded bg-zinc-50 border border-zinc-300 space-y-2">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="uppercase tracking-wider text-zinc-600 font-semibold">
                Oluşturduğunuz 2. Paragraf (Overview):
              </span>
              <span
                className={`px-2 py-0.5 rounded font-semibold ${
                  s1Obj.quality === 'band8' && s2Obj.quality === 'band8'
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'bg-amber-100 text-amber-900'
                }`}
              >
                {s1Obj.quality === 'band8' && s2Obj.quality === 'band8'
                  ? 'Kusursuz 8.5 Puanlık Overview (0 Sayı!)'
                  : 'Hatalı Seçim Var — Yukarıdaki Uyarıya Bakın'}
              </span>
            </div>
            <p className="font-serif text-base text-zinc-900 leading-relaxed">
              {s1Obj.text} {s2Obj.text}
            </p>
          </div>
        )}

        {/* Optional Free-Draft Zero-Number Guardrail Sandbox */}
        <div className="pt-4 border-t border-zinc-200 space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <label
              htmlFor="overview-sandbox"
              className="font-mono text-xs uppercase tracking-wider text-zinc-600 font-semibold"
            >
              Deneme Alanı: Kendi 2 Cümlelik Overview Paragrafınızı Yazıp Test Edin
            </label>
            <span
              className={`font-mono text-xs px-2 py-0.5 rounded ${
                dataNumbersInDraft.length > 0
                  ? 'bg-rose-100 text-rose-900 font-semibold'
                  : 'bg-zinc-100 text-zinc-600'
              }`}
            >
              Tespit Edilen Sayı: {dataNumbersInDraft.length} (Hedef: 0)
            </span>
          </div>
          <textarea
            id="overview-sandbox"
            rows={3}
            value={customDraft}
            onChange={(e) => setCustomDraft(e.target.value)}
            placeholder="Overall, housing and utilities accounted for the largest household expense throughout the period, while..."
            className="w-full rounded border border-zinc-300 bg-[#FAFAF9] p-3 font-serif text-sm text-zinc-900 focus:outline-none focus:border-zinc-900"
          />
          {dataNumbersInDraft.length > 0 && (
            <p className="text-xs text-rose-800 font-mono">
              Uyarı: Overview içinde sayı ({dataNumbersInDraft.join(', ')}) kullandınız! Bu sayıları silip &ldquo;the largest share&rdquo; veya &ldquo;surged dramatically&rdquo; gibi sözel ifadeler yazın.
            </p>
          )}
        </div>
      </div>

      {/* Side-by-Side Benchmark Comparison: Band 5 vs Band 6.5 vs Band 8.5 */}
      <div className="space-y-3">
        <h3 className="font-serif text-xl font-medium text-zinc-900">
          Karşılaştırma: 5.0 Puan vs. 6.5 Puan vs. 8.5 Puan Overview
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OVERVIEW_BENCHMARKS.map((bm) => (
            <div
              key={bm.band}
              className={`border rounded bg-white p-4 flex flex-col justify-between space-y-3 ${
                bm.band === 'Band 8.5'
                  ? 'border-zinc-900 ring-1 ring-zinc-900'
                  : 'border-zinc-200'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span
                    className={`px-2 py-0.5 rounded font-semibold ${
                      bm.band === 'Band 8.5'
                        ? 'bg-zinc-900 text-white'
                        : bm.band === 'Band 6.5'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-rose-100 text-rose-900'
                    }`}
                  >
                    {bm.band}
                  </span>
                  <span className="text-zinc-500">{bm.tag}</span>
                </div>
                <blockquote className="font-serif text-sm text-zinc-900 italic leading-relaxed border-l-2 border-zinc-300 pl-3">
                  &ldquo;{bm.text}&rdquo;
                </blockquote>
              </div>

              <div className="pt-2 border-t border-zinc-100 text-xs text-zinc-600 leading-relaxed">
                <strong className="text-zinc-900 block mb-0.5">{bm.verdict}:</strong>
                {bm.critique}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m5-overview-workshop')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Overview Yazımını Öğrendim, 5 Cümle Kalıbına Geç →
        </button>
      </div>
    </section>
  );
}
