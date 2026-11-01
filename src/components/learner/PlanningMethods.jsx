import React, { useState } from 'react';
import { Clock, CheckSquare, Square, Compass, TrendingUp } from 'lucide-react';
import { PLANNING_METHODS_DATA } from '../../data/bandCriteria';

const PRE_WRITING_CHECKLIST = [
  {
    id: 'pw-1',
    text: '1. Tablonun başlığındaki birimi ("in thousands" = bin dolar veya "%") yuvarlağa aldım.',
  },
  {
    id: 'pw-2',
    text: '2. Tabloda yıllar var mı (Zamanlı) yoksa tek bir yıl mı (Sabit) kontrol ettim.',
  },
  {
    id: 'pw-3',
    text: '3. Tablodaki 15 sayıdan sadece en önemli 7–8 tanesini seçtim, düz giden 2015 ara yıllarını çizdim.',
  },
  {
    id: 'pw-4',
    text: '4. Satırları 3. Paragraf (Büyük Harcamalar) ve 4. Paragraf (Küçük/Zıt Harcamalar) için ikiye ayırdım.',
  },
  {
    id: 'pw-5',
    text: '5. 2. Paragrafta (Overview) hiç sayı kullanmadan söyleyeceğim 2 cümleyi belirledim.',
  },
];

export default function PlanningMethods({ perspectiveMode, onMarkComplete }) {
  const [checkedItems, setCheckedItems] = useState({
    'pw-1': true,
    'pw-2': true,
  });

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const { methodA, methodB, pacingProtocol } = PLANNING_METHODS_DATA;

  return (
    <section className="space-y-8">
      {/* Module Header */}
      <div className="border-b border-zinc-200 pb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            7. Adım · Sınavda 20 Dakikayı Nasıl Kullanmalıyım?
          </span>
          <span className="font-mono text-xs px-2 py-0.5 rounded bg-zinc-200/70 text-zinc-800">
            5 Dk Planla · 13 Dk Yaz · 2 Dk Kontrol Et
          </span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-medium text-zinc-900 mt-2">
          Kalemi Elinize Almadan Önce İlk 5 Dakikada Ne Yapacaksınız?
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
          Sınavda soruyu görür görmez yazmaya başlayan öğrenciler 3. paragrafa gelince tıkanır. İlk <strong>5 dakikayı soru kağıdının üzerinde sayıları seçip gruplamaya</strong> ayırırsanız, kalan 13 dakikada 4 paragrafı hiç duraksamadan yazarsınız.
        </p>
      </div>

      {/* Dual Methods Blueprint */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {[methodB, methodA].map((method, idx) => (
          <div
            key={method.id}
            className="border border-zinc-300 rounded bg-white p-5 flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-zinc-100">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase px-2.5 py-1 rounded bg-zinc-900 text-white font-semibold">
                  {idx === 0 ? (
                    <TrendingUp className="w-3.5 h-3.5" />
                  ) : (
                    <Compass className="w-3.5 h-3.5" />
                  )}
                  {method.badge}
                </span>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-500 uppercase">
                  Ne Zaman Kullanılır?
                </div>
                <h3 className="font-serif text-lg font-medium text-zinc-900 mt-0.5">
                  {method.bestFor}
                </h3>
                <p className="text-xs text-zinc-600 mt-1.5 leading-relaxed">
                  {method.corePrinciple}
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {method.steps.map((s) => (
                  <div
                    key={s.step}
                    className="p-3 rounded bg-zinc-50 border border-zinc-200 space-y-1"
                  >
                    <div className="font-mono text-xs font-semibold text-zinc-900">
                      {s.step}
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 20-Minute Allocation Guide */}
      <div className="border border-zinc-300 rounded bg-white p-5 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-zinc-200 pb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-zinc-700" />
            <h3 className="font-serif text-lg font-medium text-zinc-900">
              Dakika Dakika 20 Dakikalık Sınav Planı
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pacingProtocol.map((slot, idx) => (
            <div
              key={slot.window}
              className="p-4 rounded border border-zinc-200 bg-zinc-50/60 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded inline-block font-semibold">
                  {slot.window}
                </div>
                <h4 className="font-serif text-base font-medium text-zinc-900 mt-2">
                  {slot.phase}
                </h4>
                <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-600 leading-relaxed">
                  {slot.tasks.map((t, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="font-mono text-zinc-400">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-zinc-200/80 font-mono text-[10px] text-zinc-500 uppercase">
                Aşama 0{idx + 1} / 04
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive 5-Minute Pre-Writing Checklist */}
      <div className="border border-zinc-200 rounded bg-white p-5 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-serif text-lg font-medium text-zinc-900">
            Yazmaya Başlamadan Önce 5 Saniyelik Kontrol Listesi
          </h3>
        </div>

        <div className="divide-y divide-zinc-100">
          {PRE_WRITING_CHECKLIST.map((item) => {
            const checked = Boolean(checkedItems[item.id]);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleCheck(item.id)}
                className="w-full py-2.5 flex items-start gap-3 text-left hover:bg-zinc-50 px-2 rounded transition-colors"
              >
                {checked ? (
                  <CheckSquare className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                )}
                <span
                  className={`text-xs sm:text-sm ${
                    checked ? 'text-zinc-900 font-medium' : 'text-zinc-600'
                  }`}
                >
                  {item.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          type="button"
          onClick={() => onMarkComplete('m7-planning-methods')}
          className="px-4 py-2 rounded bg-zinc-900 text-white text-xs font-mono uppercase tracking-wider hover:bg-zinc-800 transition-colors"
        >
          Planlamayı Öğrendim, 8.5 Puanlık Örnek Yazıyı Gör →
        </button>
      </div>
    </section>
  );
}
