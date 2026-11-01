import React, { useState } from 'react';
import { AlertTriangle, Check, X, Info } from 'lucide-react';
import {
  DYNAMIC_VS_STATIC_TAXONOMY,
  UNIT_HEADER_TRAPS,
} from '../../data/bandCriteria';

const VERB_TEST_CASES = [
  {
    id: 'vt-1',
    datasetContext: 'Sabit Tablo (Tek Yıl - 2024): 5 Şehirde Ulaşım Oranları',
    candidateSentence:
      '"Rail usage started at 3% in Houston and rose sharply to 64% in Tokyo."',
    isLegitimate: false,
    verdict: 'YANLIŞ! (Sabit Tabloda "Arttı" Denmez — Puan Kırılır)',
    rationale:
      'Houston şehri zaman içinde büyüyüp Tokyo’ya dönüşmez! Tabloda yıllar (2005 -> 2025 gibi) yoksa ASLA "started at (başladı)" veya "rose (yükseldi)" kelimelerini kullanmayın.',
    correctedVersion:
      '"Whereas a mere 3% of commuters in Houston used rail, the proportion in Tokyo stood at 64%—the highest figure in the table." (Houston’da sadece %3 metro kullanırken, Tokyo’da bu oran %64 ile en yüksek seviyededir.)',
  },
  {
    id: 'vt-2',
    datasetContext: 'Sabit Tablo (Tek Yıl - 2024): 5 Şehirde Ulaşım Oranları',
    candidateSentence:
      '"Private car reliance in Houston (86%) was nearly eight times as high as that recorded in Tokyo (11%)."',
    isLegitimate: true,
    verdict: 'DOĞRU! (8.5 Puanlık Sabit Karşılaştırma)',
    rationale:
      'Zaman akışı olmayan tabloda iki şehri kıyaslarken "nearly eight times as high as" (neredeyse 8 katı kadar yüksekti) kalıbını kullanmak tam puan getirir.',
    correctedVersion: null,
  },
  {
    id: 'vt-3',
    datasetContext: 'Zamanlı Tablo (2005–2025): Hane Harcamaları (Bin Dolar)',
    candidateSentence:
      '"In 2005 Digital was 1.2. In 2015 Digital was 2.9. In 2025 Digital was 5.8."',
    isLegitimate: false,
    verdict: 'ZAYIF! (5.5 Puanlık Tek Tek Sayma Hatası)',
    rationale:
      'Tabloda yıllar varken her yılı ayrı ayrı "2005’te şuydu, 2015’te buydu" diye saymak liste yapmaktır. Bunun yerine "2005’ten 2025’e yaklaşık 5 kat arttı" diyerek değişimi anlatmalısınız.',
    correctedVersion:
      '"Household outlays on digital communications surged nearly fivefold over the twenty-year period, climbing from $1,200 in 2005 to $5,800 by 2025."',
  },
];

export default function ExaminerFieldGuide({ perspectiveMode, onMarkComplete }) {
  const [selectedTrapId, setSelectedTrapId] = useState(UNIT_HEADER_TRAPS[0].id);
  const [activeVerbCase, setActiveVerbCase] = useState(VERB_TEST_CASES[0].id);

  const activeTrap =
    UNIT_HEADER_TRAPS.find((t) => t.id === selectedTrapId) || UNIT_HEADER_TRAPS[0];
  const currentVerbTest =
    VERB_TEST_CASES.find((v) => v.id === activeVerbCase) || VERB_TEST_CASES[0];

  return (
    <section className="space-y-10">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            1. Adım · Yazmaya Başlamadan Önce 3 Altın Kural
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            Hedef: 5.5 Tuzaklarından Kurtulmak
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Tablo Sorularında Yüksek Puan Almanın 3 Sırrı
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Çizgi grafiğinde çizginin yukarı mı aşağı mı gittiğini hemen görürsünüz; ancak <strong>tablo (table)</strong> sorularında sadece kutular içinde sayılar vardır. Kalemi elinize almadan önce şu <strong>3 basit kuralı</strong> bilmek sizi doğrudan 5.5 puandan 7.5+ seviyesine taşır.
        </p>
      </div>

      {/* 1. Dynamic vs Static Protocol */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-xl font-medium text-zinc-900">
            Kural 1: Tabloda Yıllar Var mı (Zamanlı), Yok mu (Sabit)?
          </h3>
          <span className="font-mono text-xs text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded">
            Uyarı: Yıl olmayan tabloda &ldquo;increased / fell&rdquo; yazmak puan kırar!
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['dynamic', 'static'].map((key) => {
            const item = DYNAMIC_VS_STATIC_TAXONOMY[key];
            return (
              <div
                key={key}
                className="border border-zinc-200 rounded bg-white p-5 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-100">
                    <h4 className="font-serif text-base font-medium text-zinc-900">
                      {item.title}
                    </h4>
                  </div>

                  <div className="mt-3 space-y-2 text-xs text-zinc-600">
                    <p>
                      <strong className="text-zinc-900 font-medium">Nasıl Anlarım? </strong>
                      {item.identificationRule}
                    </p>
                    <p>
                      <strong className="text-zinc-900 font-medium">Nasıl Anlatmalıyım? </strong>
                      {item.analyticalQuestion}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-800 font-semibold mb-1.5">
                      Kullanacağınız İngilizce Kelimeler:
                    </div>
                    <ul className="space-y-1.5 text-xs text-zinc-700">
                      {item.legitimateLexis.map((lex, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{lex}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 rounded bg-rose-50/50 border border-rose-200 text-xs text-zinc-800">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase text-rose-800 font-semibold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Sakın Bunu Yapmayın:</span>
                  </div>
                  <p className="leading-relaxed">{item.prohibitedTrap}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Verb Legitimacy Tester */}
        <div className="border border-zinc-200 rounded bg-white p-5">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
            <div>
              <h4 className="text-sm font-semibold text-zinc-900">
                Mini Test: Bu Cümle Doğru mu, Yanlış mı?
              </h4>
              <p className="text-xs text-zinc-500">
                3 örnek cümleye tıklayarak sınav görevlisinin neden puan verdiğini veya kırdığını görün:
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {VERB_TEST_CASES.map((tc, idx) => (
                <button
                  key={tc.id}
                  type="button"
                  onClick={() => setActiveVerbCase(tc.id)}
                  className={`px-2.5 py-1 rounded font-mono text-xs transition-colors ${
                    activeVerbCase === tc.id
                      ? 'bg-zinc-900 text-white'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  Örnek 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 rounded bg-zinc-50 border border-zinc-200 space-y-3">
            <div className="font-mono text-xs text-zinc-500">
              {currentVerbTest.datasetContext}
            </div>
            <blockquote className="font-serif text-base text-zinc-900 italic border-l-2 border-zinc-400 pl-3">
              {currentVerbTest.candidateSentence}
            </blockquote>
            <div className="flex items-center gap-2 pt-1">
              <span
                className={`inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded font-semibold ${
                  currentVerbTest.isLegitimate
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'bg-rose-100 text-rose-900'
                }`}
              >
                {currentVerbTest.isLegitimate ? (
                  <Check className="w-3.5 h-3.5" />
                ) : (
                  <X className="w-3.5 h-3.5" />
                )}
                {currentVerbTest.verdict}
              </span>
            </div>
            <p className="text-xs text-zinc-700 leading-relaxed">
              <strong>Açıklama: </strong>
              {currentVerbTest.rationale}
            </p>
            {currentVerbTest.correctedVersion && (
              <div className="pt-2 border-t border-zinc-200/80 text-xs text-emerald-950">
                <span className="font-mono uppercase text-[11px] text-emerald-800 font-semibold block mb-0.5">
                  Doğru 8.5 Puanlık Yazımı:
                </span>
                <span className="font-serif text-sm">{currentVerbTest.correctedVersion}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Task Achievement Data-Selection Thresholds */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-xl font-medium text-zinc-900">
            Kural 2: Tablodaki Tüm Sayıları Yazmayın! (6–8 Sayı Kuralı)
          </h3>
          <span className="font-mono text-xs text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-0.5 rounded">
            15 Hücreli Tabloda Kaç Sayı Yazılmalı?
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-zinc-200 rounded bg-white p-4">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
              <span>SADECE 1–4 SAYI YAZMAK</span>
              <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                5.0 Puan (Eksik)
              </span>
            </div>
            <h4 className="font-medium text-sm text-zinc-900">
              Kanıtsız Anlatım
            </h4>
            <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              Sadece &ldquo;konut arttı, gıda azaldı&rdquo; deyip sayı vermemek puan kaybettirir. Detay paragraflarında (3. ve 4. paragraf) mutlaka sayısal kanıt vermelisiniz.
            </p>
          </div>

          <div className="border-2 border-zinc-900 rounded bg-white p-4">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-900 font-semibold mb-2">
              <span>6–8 ÖNEMLİ SAYI SEÇMEK</span>
              <span className="px-1.5 py-0.5 rounded bg-zinc-900 text-white">
                7.5 – 9.0 Puan (İdeal!)
              </span>
            </div>
            <h4 className="font-medium text-sm text-zinc-900">
              Seçici ve Akıllı Özetleme
            </h4>
            <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              15 sayıdan sadece şu 4 ana noktayı seçip ortadaki sıradan ara yılları (2015) atlayın:
            </p>
            <ul className="mt-2 space-y-1 text-xs text-zinc-800 font-medium">
              <li>1. En Yüksek (Zirve) ve En Düşük (Dip) Sayı</li>
              <li>2. En Çok Artan ve En Çok Çöken Kategori</li>
              <li>3. Tek İstisna (2015’te zirve yapan Ulaşım)</li>
              <li>4. Sıralaması Değişen İkili (Dijital vs. Basılı)</li>
            </ul>
          </div>

          <div className="border border-zinc-200 rounded bg-white p-4">
            <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-2">
              <span>12–15 SAYININ HEPSİNİ YAZMAK</span>
              <span className="px-1.5 py-0.5 rounded bg-rose-50 text-rose-900 border border-rose-200">
                En Fazla 6.0 Puan!
              </span>
            </div>
            <h4 className="font-medium text-sm text-zinc-900">
              Robot Gibi Sayı Listeleme (Data Dumping)
            </h4>
            <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
              Tablodaki her kutuyu (2005, 2015, 2025) tek tek cümleye dökmek özetleme değildir. Sınav görevlisi bunu &ldquo;mekanik listeleme&rdquo; sayar ve puanınızı 6.0’da durdurur.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Unit & Header Traps */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-xl font-medium text-zinc-900">
            Kural 3: Tablo Başlığındaki Birim Tuzaklarına Düşmeyin!
          </h3>
          <span className="font-mono text-xs text-zinc-500">
            4 tuzağa tıklayarak doğru yazımını görün:
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {UNIT_HEADER_TRAPS.map((trap) => {
            const active = trap.id === selectedTrapId;
            return (
              <button
                key={trap.id}
                type="button"
                onClick={() => setSelectedTrapId(trap.id)}
                className={`text-left p-3 rounded border transition-all ${
                  active
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50'
                }`}
              >
                <div
                  className={`font-mono text-[11px] uppercase ${
                    active ? 'text-amber-300' : 'text-zinc-500'
                  }`}
                >
                  Dikkat Edilecek Tuzak
                </div>
                <div className="text-xs font-medium mt-1 leading-snug">
                  {trap.title}
                </div>
              </button>
            );
          })}
        </div>

        <div className="border border-zinc-200 rounded bg-white p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3 flex-wrap gap-2">
            <h4 className="font-serif text-lg font-medium text-zinc-900">
              {activeTrap.title}
            </h4>
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 text-zinc-800 border border-zinc-200">
              {activeTrap.headerExample}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3.5 rounded bg-rose-50/50 border border-rose-200 space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-rose-900 font-semibold">
                Öğrencinin Yaptığı Yanlış (5.5 Puan)
              </div>
              <p className="font-serif text-sm text-zinc-900 italic">
                {activeTrap.band5Error}
              </p>
              <p className="text-xs text-rose-900 pt-1 border-t border-rose-200/60">
                {activeTrap.examinerPenalty}
              </p>
            </div>

            <div className="p-3.5 rounded bg-emerald-50/50 border border-emerald-200 space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-900 font-semibold">
                Doğru Yazımı (8.5 Puan)
              </div>
              <p className="font-serif text-sm text-zinc-900 italic">
                {activeTrap.band8Calibration}
              </p>
              <p className="text-xs text-emerald-900 pt-1 border-t border-emerald-200/60">
                <strong>Neden Yüksek Puan Alır? </strong>
                Tablo başlığındaki birimi (thousands = bin dolar) cümleye doğru yansıtır ve özneyi hatasız kurar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m1-examiner-guide')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          1. Adımı Anladım, Tabloyu İncelemeye Geç →
        </button>
      </div>
    </section>
  );
}
