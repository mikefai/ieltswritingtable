import React, { useState, useEffect } from 'react';
import { Check, X, RotateCcw, KeyRound } from 'lucide-react';
import { PRIMARY_TABLE_DATASET } from '../../data/datasets';

export default function GroupingStrategy({ perspectiveMode, onMarkComplete }) {
  const [assignments, setAssignments] = useState({
    housing: null,
    food: null,
    transport: null,
    digital: null,
    print: null,
  });

  useEffect(() => {
    if (perspectiveMode === 'examiner') {
      setAssignments({
        housing: 'bp1',
        food: 'bp1',
        transport: 'bp1',
        digital: 'bp2',
        print: 'bp2',
      });
    }
  }, [perspectiveMode]);

  const handleAssign = (rowId, group) => {
    setAssignments((prev) => ({
      ...prev,
      [rowId]: group,
    }));
  };

  const loadRecommendedGrouping = () => {
    setAssignments({
      housing: 'bp1',
      food: 'bp1',
      transport: 'bp1',
      digital: 'bp2',
      print: 'bp2',
    });
  };

  const resetGrouping = () => {
    setAssignments({
      housing: null,
      food: null,
      transport: null,
      digital: null,
      print: null,
    });
  };

  const allAssigned = Object.values(assignments).every((v) => v !== null);
  const correctCount = PRIMARY_TABLE_DATASET.rows.filter(
    (r) => assignments[r.id] === r.recommendedGroup
  ).length;

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            4. Adım · Paragrafları Gruplama (Body 1 &amp; Body 2)
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            Hata #2 Çözümü: Satır Satır Sırayla Yazma!
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          5 Satırı 2 Detay Paragrafına Nasıl Böleriz?
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Yazımızın 1. paragrafı Giriş, 2. paragrafı ise Overview (Genel Bakış) olacak. Peki sayıları vereceğimiz <strong>3. Paragraf (Body 1)</strong> ve <strong>4. Paragrafta (Body 2)</strong> bu 5 kategoriyi nasıl paylaşacağız? Sakın yukarıdan aşağıya sırayla anlatmayın; kategorileri <strong>büyüklüklerine göre 2 gruba</strong> ayırın!
        </p>
      </div>

      {/* Side-by-Side Comparison: Band 5 Trap vs Band 8+ Logical Clustering */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="border border-rose-200 rounded bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-rose-900 border border-rose-200 font-semibold">
              Yanlış Yöntem (5.5 Puan)
            </span>
            <span className="font-mono text-xs text-rose-800">Sırayla Tek Tek Saymak</span>
          </div>
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            &ldquo;First... Second... Third... Finally...&rdquo;
          </h3>
          <div className="p-3.5 rounded bg-zinc-50 border border-zinc-200 font-serif text-xs sm:text-sm text-zinc-700 space-y-2 italic">
            <p>
              &ldquo;First, Housing was $14.2k in 2005 and $21.5k in 2025. Second, Food was $9.4k and fell to $8.1k. Third, Transport went from $7.6k to $8.5k and $6.2k. Fourth, Digital rose from $1.2k to $5.8k. Finally, Print fell from $1.8k to $0.3k.&rdquo;
            </p>
          </div>
          <p className="text-xs text-zinc-600 leading-relaxed">
            <strong>Neden Puan Kırılır?</strong> Öğrenci kategorileri birbiriyle hiç karşılaştırmamış; sadece tablodaki 5 satırı alt alta okumuş.
          </p>
        </div>

        <div className="border border-emerald-200 rounded bg-white p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-900 border border-emerald-200 font-semibold">
              Doğru Yöntem (8.5 Puan)
            </span>
            <span className="font-mono text-xs text-emerald-800">2 Mantıklı Grup</span>
          </div>
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            Büyük Harcamalar (3. Paragraf) vs. Küçük/Zıt Harcamalar (4. Paragraf)
          </h3>
          <div className="space-y-2 text-xs text-zinc-700">
            <div className="p-3 rounded bg-zinc-50 border border-zinc-200">
              <div className="font-mono uppercase text-[11px] font-semibold text-zinc-900">
                3. Paragraf (Body 1): Büyük Yaşam Giderleri ($6,200 – $21,500)
              </div>
              <p className="mt-1">
                Hane bütçesinin büyük kısmını götüren <strong>Konut</strong>, <strong>Gıda</strong> ve <strong>Ulaşım</strong> burada anlatılır.
              </p>
            </div>
            <div className="p-3 rounded bg-zinc-50 border border-zinc-200">
              <div className="font-mono uppercase text-[11px] font-semibold text-zinc-900">
                4. Paragraf (Body 2): Küçük Ama Zıt İkili ($300 – $5,800)
              </div>
              <p className="mt-1">
                Bütçede küçük yer tutan ama tam zıt yönde hareket eden <strong>Dijital İletişim</strong> (5 kat arttı) ile <strong>Basılı Medya</strong> (altıda birine çöktü) burada kıyaslanır.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Clustering Workspace */}
      <div className="border border-zinc-300 rounded bg-white p-5 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4">
          <div>
            <h3 className="font-serif text-lg font-medium text-zinc-900">
              Uygulama: Kategorileri 3. ve 4. Paragrafa Yerleştirin
            </h3>
            <p className="text-xs text-zinc-600 mt-0.5">
              Her satırın karşısındaki butonlardan <strong>3. Paragraf (Body 1)</strong> veya <strong>4. Paragraf (Body 2)</strong> seçeneğine tıklayın:
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={loadRecommendedGrouping}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 text-white hover:bg-zinc-800"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Doğru Gruplamayı Göster</span>
            </button>
            <button
              type="button"
              onClick={resetGrouping}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono text-zinc-600 hover:text-zinc-900 border border-zinc-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Sıfırla</span>
            </button>
          </div>
        </div>

        <div className="space-y-2.5">
          {PRIMARY_TABLE_DATASET.rows.map((row) => {
            const userChoice = assignments[row.id];
            const isMatch = userChoice && userChoice === row.recommendedGroup;

            return (
              <div
                key={row.id}
                className="p-3.5 rounded border border-zinc-200 bg-zinc-50/50 flex flex-col lg:flex-row lg:items-center justify-between gap-3"
              >
                <div className="space-y-0.5 min-w-0 flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-medium text-sm text-zinc-900">
                      {row.category} ({row.categoryTR})
                    </span>
                    <span className="font-mono text-xs text-zinc-500 tabular-nums">
                      2005: ${row.cells.y2005.value}k → 2015: ${row.cells.y2015.value}k → 2025: ${row.cells.y2025.value}k
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500">{row.trajectorySummary}</p>
                  {userChoice && (
                    <div
                      className={`text-xs mt-1.5 pt-1.5 border-t border-zinc-200/80 flex items-start gap-1.5 ${
                        isMatch ? 'text-emerald-900' : 'text-rose-900'
                      }`}
                    >
                      {isMatch ? (
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-rose-700 shrink-0 mt-0.5" />
                      )}
                      <span>{row.groupRationale}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleAssign(row.id, 'bp1')}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-all border ${
                      userChoice === 'bp1'
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-100'
                    }`}
                  >
                    3. Paragraf (Büyük Harcamalar)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAssign(row.id, 'bp2')}
                    className={`px-3 py-1.5 rounded text-xs font-mono transition-all border ${
                      userChoice === 'bp2'
                        ? 'bg-zinc-900 text-white border-zinc-900'
                        : 'bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-100'
                    }`}
                  >
                    4. Paragraf (Dijital vs. Basılı)
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Validation Banner */}
        {allAssigned && (
          <div
            className={`p-4 rounded border text-xs leading-relaxed ${
              correctCount === 5
                ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                : 'bg-amber-50/80 border-amber-300 text-amber-950'
            }`}
          >
            <div className="font-mono uppercase font-semibold mb-1">
              {correctCount === 5
                ? 'Tebrikler! 5/5 Doğru Paragraf Planı (Band 8.5)'
                : `Eşleşme: ${correctCount}/5 Kategori Doğru`}
            </div>
            <p>
              {correctCount === 5
                ? 'Harika! Şimdi 3. paragrafta Konut, Gıda ve Ulaşım’ı; 4. paragrafta ise Dijital ve Basılı Medya arasındaki zıtlığı anlatmaya hazırsınız.'
                : 'Yukarıdaki açıklamalara göre yanlış grupta olan kategorileri düzeltin.'}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m4-grouping-strategy')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Gruplamayı Tamamladım, Overview Yazımına Geç →
        </button>
      </div>
    </section>
  );
}
