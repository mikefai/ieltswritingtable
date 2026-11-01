import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FOUR_PARAGRAPH_BLUEPRINT } from '../../data/datasets';

export default function EssayBlueprintBanner({ onJumpToModule }) {
  const [isOpen, setIsOpen] = useState(true);
  const [activePara, setActivePara] = useState(1);

  const currentBlueprint =
    FOUR_PARAGRAPH_BLUEPRINT.find((p) => p.paragraphNumber === activePara) ||
    FOUR_PARAGRAPH_BLUEPRINT[0];

  return (
    <div className="mb-8 border-2 border-zinc-900 rounded bg-white overflow-hidden shadow-sm">
      {/* Top Toggle Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-3.5 bg-zinc-900 text-white flex items-center justify-between gap-4 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2.5">
          <HelpCircle className="w-4 h-4 text-amber-300 shrink-0" />
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-amber-300 font-semibold mr-2">
              Başlangıç Rehberi:
            </span>
            <span className="font-serif text-sm sm:text-base font-medium">
              Bu Site Ne İşe Yarar &amp; Sıfırdan 4 Paragrafta Tablo Yazısı Nasıl Yazılır?
            </span>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1 font-mono text-xs text-zinc-300 hover:text-white shrink-0"
        >
          <span>{isOpen ? 'Rehberi Küçült' : '4 Paragraf Şablonunu Aç'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="p-5 sm:p-6 space-y-6 bg-[#FAFAF9]">
          {/* Plain-Turkish Product Purpose Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded bg-white border border-zinc-200 space-y-1.5">
              <div className="font-mono text-[11px] uppercase text-zinc-500 font-semibold">
                1. Sınavda Ne İsteniyor?
              </div>
              <h3 className="font-serif text-base font-medium text-zinc-900">
                20 Dakikada 150+ Kelime Rapor
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                IELTS Writing Task 1’de karşınıza sayılarla dolu bir tablo çıkar. Sizden kendi fikrinizi yazmanız <strong>istenmez</strong>; sadece tablodaki en önemli sayıları seçip <strong>4 paragraflık bir özet</strong> yazmanız istenir.
              </p>
            </div>

            <div className="p-4 rounded bg-white border border-zinc-200 space-y-1.5">
              <div className="font-mono text-[11px] uppercase text-rose-800 font-semibold">
                2. Öğrenciler Neden 5.5 Alıyor?
              </div>
              <h3 className="font-serif text-base font-medium text-zinc-900">
                Tüm Sayıları Tek Tek Yazmak!
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Tablodaki 15 sayıyı sırayla (<em>&ldquo;2005’te şuydu, 2015’te bu oldu&rdquo;</em>) yazarsanız veya 2. paragrafa (Overview) sayı doldurursanız puanınız <strong>5.5–6.0’da kilitlenir</strong>.
              </p>
            </div>

            <div className="p-4 rounded bg-white border border-zinc-200 space-y-1.5">
              <div className="font-mono text-[11px] uppercase text-emerald-800 font-semibold">
                3. Bu Uygulama Nasıl Öğretiyor?
              </div>
              <h3 className="font-serif text-base font-medium text-zinc-900">
                Adım Adım Seç, Grupla ve Yaz
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Sol menüdeki adımlarla önce <strong>hangi 7-8 sayıyı seçeceğinizi</strong>, sonra <strong>hazır İngilizce cümle kalıplarını</strong> öğrenir ve en sonda gerçek 8.5 puanlık yazıyı incelersiniz.
              </p>
            </div>
          </div>

          {/* Interactive 4-Paragraph Blueprint */}
          <div className="border border-zinc-300 rounded bg-white p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-3">
              <div>
                <h4 className="font-serif text-lg font-medium text-zinc-900">
                  IELTS Tablo Yazısının 4 Paragraflık İskeleti (Toplam 9 Cümle = ~170 Kelime)
                </h4>
                <p className="text-xs text-zinc-600">
                  Her bir paragrafa tıklayarak o paragrafta ne yazacağınızı ve hazır boşluk doldurma kalıbını görün:
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => onJumpToModule('m8-model-answer')}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Tam Örnek Yazıyı Gör (Adım 08)</span>
                </button>
              </div>
            </div>

            {/* 4 Paragraph Selector Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {FOUR_PARAGRAPH_BLUEPRINT.map((p) => {
                const active = activePara === p.paragraphNumber;
                return (
                  <button
                    key={p.paragraphNumber}
                    type="button"
                    onClick={() => setActivePara(p.paragraphNumber)}
                    className={`text-left p-3 rounded border transition-all ${
                      active
                        ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
                        : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:bg-zinc-100'
                    }`}
                  >
                    <div
                      className={`font-mono text-[11px] uppercase font-semibold ${
                        active ? 'text-amber-300' : 'text-zinc-500'
                      }`}
                    >
                      {p.sentenceCount}
                    </div>
                    <div className="text-xs font-medium mt-1 leading-snug">
                      {p.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Paragraph Recipe Details */}
            <div className="p-4 rounded bg-zinc-50 border border-zinc-200 space-y-4">
              <div className="space-y-1">
                <div className="font-mono text-xs uppercase text-zinc-900 font-semibold">
                  {currentBlueprint.title} — Bu Paragrafta Ne Yapmalıyım?
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                  {currentBlueprint.whatToDoTR}
                </p>
              </div>

              {/* Fill in the blank template */}
              <div className="p-3.5 rounded bg-zinc-900 text-zinc-100 space-y-1">
                <div className="font-mono text-[11px] uppercase tracking-wider text-amber-300">
                  Hazır Cümle Kalıbı (Boşlukları Doldur):
                </div>
                <p className="font-mono text-xs sm:text-sm leading-relaxed">
                  {currentBlueprint.template}
                </p>
              </div>

              {/* Real Band 8.5 Example + Turkish Translation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 rounded bg-white border border-zinc-200 space-y-1">
                  <div className="font-mono text-[11px] uppercase text-emerald-800 font-semibold">
                    Gerçek 8.5 Puanlık İngilizce Örnek:
                  </div>
                  <p className="font-serif text-sm text-zinc-900 italic leading-relaxed">
                    &ldquo;{currentBlueprint.exampleEN}&rdquo;
                  </p>
                </div>

                <div className="p-3 rounded bg-white border border-zinc-200 space-y-1">
                  <div className="font-mono text-[11px] uppercase text-zinc-500 font-semibold">
                    Türkçe Anlamı:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    &ldquo;{currentBlueprint.exampleTR}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
