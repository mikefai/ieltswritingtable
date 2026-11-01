import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Copy, Check, AlertTriangle, ShieldCheck, Wand2 } from 'lucide-react';
import {
  STATIC_SNAPSHOT_DATASET,
  PRIMARY_TABLE_DATASET,
} from '../../data/datasets';

const DYNAMIC_TREND_VERBS = [
  'rose',
  'risen',
  'rising',
  'increased',
  'increasing',
  'fell',
  'fallen',
  'falling',
  'decreased',
  'decreasing',
  'dropped',
  'dropping',
  'climbed',
  'climbing',
  'surged',
  'plunged',
  'plummeted',
  'peaked',
  'fluctuated',
  'grew',
  'grown',
  'shrank',
  'shrunk',
];

const STARTER_TEMPLATES = {
  dynamic: `The table compares how much households in a European nation spent annually on five categories of goods and services in 2005, 2015, and 2025.

Overall, housing and utilities accounted for by far the largest expense throughout the period, whereas spending on [azalan 3 kategoriyi yazın] declined. Notably, [en çok sıçrayan kategoriyi yazın] experienced the most dramatic growth, overtaking print media.

Regarding major living costs, expenditure on housing rose by just over half from $[2005 sayısı] in 2005 to $[2025 sayısı] in 2025. Conversely, outlays on food fell gradually from $[2005 sayısı] to $[2025 sayısı]. Meanwhile, transport peaked at $[2015 zirvesi] in 2015 before dropping to $[2025 sayısı] by 2025.

In stark contrast, the two smallest categories moved in opposite directions. In 2005, households spent $1,800 and $1,200 on print media and digital telecoms, respectively. By 2025, digital spending grew nearly fivefold to reach $[2025 sayısı], whereas print media shrank to a mere sixth of its initial level, finishing at $[2025 sayısı].`,

  static: `The table compares the percentage of commuters using four modes of transport across five metropolitan cities in 2024, alongside average daily journey durations.

Overall, private cars and rail networks represented the primary commuting methods depending on the city, whereas bus usage remained comparatively low everywhere. Notably, Amsterdam stood out with the highest reliance on active transport and the shortest average commute.

Regarding public and active transit leaders, rail commuters accounted for the largest share in Tokyo at [Tokyo metro %]%, followed by London at [Londra metro %]%, although these two cities also recorded the longest commutes at [Tokyo dk] and [Londra dk] minutes, respectively. Meanwhile, cycling and walking represented nearly half of all journeys in Amsterdam ([Amsterdam bisiklet %]%), where commuters enjoyed the shortest travel time ([Amsterdam dk] minutes).

In stark contrast, commuters in Houston and Sydney relied heavily on private cars, which accounted for [Houston araba %]% and [Sydney araba %]% of journeys, respectively. Conversely, rail and active transport in Houston were negligible, standing at just [Houston metro %]% and [Houston bisiklet %]%.`,
};

export default function TimedWritingSpace({ perspectiveMode, onMarkComplete }) {
  const [promptMode, setPromptMode] = useState('dynamic'); // Default to the familiar dynamic table first!
  const [secondsLeft, setSecondsLeft] = useState(20 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [essayText, setEssayText] = useState('');
  const [scratchpadNotes, setScratchpadNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isRunning) return undefined;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const elapsedMinutes = (1200 - secondsLeft) / 60;
  const getActivePhase = () => {
    if (elapsedMinutes < 3) {
      return {
        stage: '1. Aşama (Dk 0–3): Sayıları Seç',
        advice: 'Tablo başlığındaki birime dikkat et ve yazacağın 7–8 sayıyı belirle.',
      };
    }
    if (elapsedMinutes < 5) {
      return {
        stage: '2. Aşama (Dk 3–5): 2 Gruba Ayır',
        advice: '3. ve 4. paragrafta hangi satırları anlatacağını sol not kutusuna yaz.',
      };
    }
    if (elapsedMinutes < 18) {
      return {
        stage: '3. Aşama (Dk 5–18): 4 Paragrafı Yaz',
        advice: 'Boşluklu şablonu kullanarak 4 paragrafı tamamla.',
      };
    }
    return {
      stage: '4. Aşama (Dk 18–20): Son Kontrol',
      advice: 'Overview’da sayı var mı? Birimler doğru mu ($14,200)?',
    };
  };

  const activePhase = getActivePhase();

  const words = essayText
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0);
  const wordCount = words.length;

  const paragraphs = essayText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0);
  const paragraphCount = paragraphs.length;

  const rawNumberMatches = essayText.match(/\b\d+(\.\d+)?%?\b/g) || [];
  const dataFiguresCited = rawNumberMatches.filter(
    (num) => !['2024', '2005', '2015', '2025'].includes(num)
  );

  const lowerWords = words.map((w) => w.toLowerCase().replace(/[^a-z]/g, ''));
  const detectedTrendVerbs =
    promptMode === 'static'
      ? [...new Set(lowerWords.filter((w) => DYNAMIC_TREND_VERBS.includes(w)))]
      : [];

  const overviewPara = paragraphs.length >= 2 ? paragraphs[1] : '';
  const overviewNumbers = (overviewPara.match(/\b\d+(\.\d+)?%?\b/g) || []).filter(
    (num) => !['2024', '2005', '2015', '2025'].includes(num)
  );

  const insertStarterTemplate = () => {
    setEssayText(STARTER_TEMPLATES[promptMode]);
  };

  const handleCopyDraft = () => {
    const auditHeader = `--- IELTS Task 1 Table Practice (${wordCount} kelime | ${dataFiguresCited.length} sayı kullanıldı) ---\n\n`;
    navigator.clipboard.writeText(auditHeader + essayText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            10. Adım · Adım Adım Yazma Simülatörü
          </span>
          <div className="inline-flex items-center p-0.5 rounded bg-zinc-200/80 border border-zinc-300 text-xs">
            <button
              type="button"
              onClick={() => setPromptMode('dynamic')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${
                promptMode === 'dynamic'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              1. Görev: Zamanlı Tablo (2005–2025 Harcamalar)
            </button>
            <button
              type="button"
              onClick={() => setPromptMode('static')}
              className={`px-2.5 py-1 rounded font-medium transition-colors ${
                promptMode === 'static'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              2. Görev: Sabit Tablo (2024 Şehir Ulaşımı)
            </button>
          </div>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Şimdi Sıra Sizde: 4 Paragraflık Yazınızı Yazın
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Nasıl başlayacağınızdan emin değilseniz yazı kutusunun üstündeki <strong>&ldquo;4 Paragraf Hazır İskeletini Ekle&rdquo;</strong> butonuna tıklayın! Köşeli parantez içindeki <code>[boşlukları]</code> tablodaki sayılarla doldurarak hemen ilk kompozisyonunuzu tamamlayın.
        </p>
      </div>

      {/* Timer & Quiet Pacing Bar */}
      <div className="border border-zinc-300 rounded bg-white p-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="font-mono text-2xl sm:text-3xl font-semibold tabular-nums text-zinc-900 bg-zinc-100 px-3.5 py-1.5 rounded border border-zinc-200">
            {formatTime(secondsLeft)}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsRunning(!isRunning)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider bg-zinc-900 text-white hover:bg-zinc-800"
            >
              {isRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Duraklat</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>20:00 Başlat</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsRunning(false);
                setSecondsLeft(20 * 60);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-mono text-zinc-600 hover:text-zinc-900 border border-zinc-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>

        <div className="flex-1 min-w-[240px] max-w-md text-right">
          <div className="font-mono text-xs uppercase text-zinc-900 font-semibold">
            {activePhase.stage}
          </div>
          <div className="text-xs text-zinc-500 mt-0.5">{activePhase.advice}</div>
        </div>
      </div>

      {/* Prompt & Reference Table */}
      {promptMode === 'static' ? (
        <div className="border border-zinc-300 rounded bg-white overflow-hidden">
          <div className="p-4 bg-zinc-50 border-b border-zinc-200 space-y-1">
            <div className="font-mono text-[11px] uppercase tracking-wider text-rose-800 font-semibold">
              Sabit (Static) Tablo Görevi · Yıl Değişimi Yok (rose/fell Yasak!)
            </div>
            <p className="font-serif text-base font-medium text-zinc-900">
              {STATIC_SNAPSHOT_DATASET.promptRubric}
            </p>
            <p className="text-xs text-zinc-600">
              <strong>Türkçesi:</strong> {STATIC_SNAPSHOT_DATASET.promptRubricTR}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-zinc-300 bg-zinc-100/80 text-zinc-700 font-mono text-xs uppercase">
                  {STATIC_SNAPSHOT_DATASET.columns.map((col) => (
                    <th
                      key={col.key}
                      className={`py-2.5 px-4 font-semibold border-r border-zinc-200 last:border-r-0 ${
                        col.align === 'right' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {STATIC_SNAPSHOT_DATASET.rows.map((row) => (
                  <tr key={row.id}>
                    <td className="py-2.5 px-4 font-medium text-zinc-900 border-r border-zinc-200 bg-zinc-50/50">
                      {row.city}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                      %{row.rail}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                      %{row.car}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                      %{row.bus}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums border-r border-zinc-200">
                      %{row.active}
                    </td>
                    <td className="py-2.5 px-4 text-right font-mono tabular-nums bg-zinc-50 font-medium">
                      {row.duration} dk
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="border border-zinc-300 rounded bg-white p-4 space-y-2">
          <div className="font-mono text-xs uppercase text-rose-800 font-semibold">
            Zamanlı Tablo Görevi · {PRIMARY_TABLE_DATASET.unitHeader}
          </div>
          <p className="font-serif text-base text-zinc-900 font-medium">
            {PRIMARY_TABLE_DATASET.promptRubric}
          </p>
          <div className="p-2.5 rounded bg-zinc-50 border border-zinc-200 font-mono text-xs text-zinc-800">
            <strong>Hızlı Tablo Özeti (Bin $):</strong> Housing: 14.2 ($14,200) → 16.8 → 21.5 ($21,500) | Food: 9.4 ($9,400) → 8.9 → 8.1 ($8,100) | Transport: 7.6 ($7,600) → 8.5 ($8,500 zirve!) → 6.2 ($6,200) | Digital: 1.2 ($1,200) → 2.9 → 5.8 ($5,800) | Print: 1.8 ($1,800) → 0.9 → 0.3 ($300)
          </div>
        </div>
      )}

      {/* Workspace Grid: Scratchpad + Main Writing Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: 5-Min Pre-Writing Scratchpad & Live Audit */}
        <div className="space-y-4">
          <div className="border border-zinc-300 rounded bg-white p-4 space-y-2">
            <label
              htmlFor="prewriting-notes"
              className="font-mono text-xs uppercase tracking-wider text-zinc-700 font-semibold block"
            >
              1. Planlama Notlarım (Seçtiğim Sayılar)
            </label>
            <textarea
              id="prewriting-notes"
              rows={5}
              value={scratchpadNotes}
              onChange={(e) => setScratchpadNotes(e.target.value)}
              placeholder="Örn:\n2. Paragraf (Overview): En büyük Konut, en hızlı artan Dijital.\n3. Paragraf (Büyükler): Konut ($14,200 -> $21,500), Gıda ($9,400 -> $8,100), Ulaşım 2015 zirvesi ($8,500).\n4. Paragraf (Küçükler): Dijital 5 kat ($1,200 -> $5,800) vs Basılı 1/6 ($1,800 -> $300)."
              className="w-full rounded border border-zinc-200 bg-zinc-50 p-2.5 font-mono text-xs text-zinc-800 focus:outline-none focus:border-zinc-900"
            />
          </div>

          {/* Live Examiner Guardrail Telemetry */}
          <div className="border-2 border-zinc-900 rounded bg-white p-4 space-y-3">
            <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-900 font-semibold border-b border-zinc-200 pb-2">
              <ShieldCheck className="w-4 h-4 text-zinc-900" />
              <span>Canlı Yazı Kontrolü (Otomatik)</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-600">Kelime Sayısı (En az 150):</span>
                <span
                  className={`font-semibold px-1.5 py-0.5 rounded ${
                    wordCount >= 150 && wordCount <= 200
                      ? 'bg-emerald-100 text-emerald-900'
                      : wordCount > 200
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-zinc-100 text-zinc-800'
                  }`}
                >
                  {wordCount} kelime
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-600">Paragraf Sayısı (Hedef 4):</span>
                <span
                  className={`font-semibold px-1.5 py-0.5 rounded ${
                    paragraphCount === 4
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'bg-zinc-100 text-zinc-800'
                  }`}
                >
                  {paragraphCount} paragraf
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-600">Yazılan Sayı Adedi (Hedef 6–9):</span>
                <span
                  className={`font-semibold px-1.5 py-0.5 rounded ${
                    dataFiguresCited.length > 11
                      ? 'bg-rose-100 text-rose-900'
                      : dataFiguresCited.length >= 5
                      ? 'bg-emerald-100 text-emerald-900'
                      : 'bg-zinc-100 text-zinc-800'
                  }`}
                >
                  {dataFiguresCited.length} sayı
                </span>
              </div>
            </div>

            {/* Dynamic Warnings */}
            {dataFiguresCited.length > 11 && (
              <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Çok Fazla Sayı Yazdınız ({dataFiguresCited.length} sayı):</strong> 2015 ara yıllarını silerek sayı adedini 7–9 arasına indirin!
                </span>
              </div>
            )}

            {overviewNumbers.length > 0 && (
              <div className="p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Overview Uyarısı:</strong> 2. paragrafınızda sayı ({overviewNumbers.join(', ')}) var! Overview paragrafından sayıları silin.
                </span>
              </div>
            )}

            {detectedTrendVerbs.length > 0 && (
              <div className="p-2.5 rounded bg-rose-50 border border-rose-300 text-xs text-rose-950 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Sabit Tablo Hatası:</strong> Bu tabloda yıllar yok ama yazınızda değişim fiili (<em>{detectedTrendVerbs.join(', ')}</em>) kullandınız!
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right 2 Columns: Pure Distraction-Free Writing Canvas */}
        <div className="lg:col-span-2 border border-zinc-300 rounded bg-white p-5 flex flex-col justify-between space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-100 pb-3">
            <button
              type="button"
              onClick={insertStarterTemplate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm"
            >
              <Wand2 className="w-3.5 h-3.5 text-amber-300" />
              <span>4 Paragraf Hazır İskeletini Yazı Alanına Ekle (Boşluk Doldurmalı)</span>
            </button>

            <button
              type="button"
              onClick={handleCopyDraft}
              disabled={wordCount === 0}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-300 disabled:opacity-40"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Kopyalandı' : 'Yazımı Kopyala'}</span>
            </button>
          </div>

          <textarea
            rows={16}
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            placeholder="Nasıl başlayacağınızı bilmiyorsanız yukarıdaki siyah '4 Paragraf Hazır İskeletini Ekle' butonuna tıklayın!&#10;&#10;1. Paragraf (Giriş - 1 cümle): The table compares...&#10;&#10;2. Paragraf (Overview - 2 cümle, SIFIR SAYI): Overall, ... Notably, ...&#10;&#10;3. Paragraf (Detay 1 - Büyük Kategoriler): Regarding major living costs, ...&#10;&#10;4. Paragraf (Detay 2 - Küçük/Zıt Kategoriler): In stark contrast, ..."
            className="w-full rounded border border-zinc-200 bg-[#FAFAF9] p-4 font-serif text-base text-zinc-900 leading-8 focus:outline-none focus:border-zinc-900 resize-y"
          />
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m10-timed-simulator')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Yazımı Tamamladım, Son Puan Kontrol Listesine Geç →
        </button>
      </div>
    </section>
  );
}
