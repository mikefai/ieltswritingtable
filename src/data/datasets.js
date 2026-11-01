// Centralized pedagogical datasets with plain-English & Turkish (TR) coaching,
// 4-paragraph fill-in-the-blank essay templates, Band 8.5 model translations,
// and Band 5.5 error clinic explanations.

export const FOUR_PARAGRAPH_BLUEPRINT = [
  {
    paragraphNumber: 1,
    title: '1. Paragraf: Giriş (Introduction)',
    sentenceCount: '1 Cümle (~20–25 kelime)',
    whatToDoTR:
      'Soru kökündeki cümleyi kelimeleri değiştirerek (eş anlamlılarıyla) yeniden yaz. Asla kendi yorumunu katma ve sayı yazma.',
    whatToDoEN:
      'Rewrite the question prompt in your own words in 1 sentence. Do not copy phrases directly and do not include numbers.',
    template:
      'The table compares how much [Kimler: households in a European country] spent annually on [Kaç kategori: five different categories] in [Yıllar: 2005, 2015, and 2025].',
    exampleEN:
      'The table compares how much households in a European nation allocated annually to five distinct expenditure brackets at ten-year intervals between 2005 and 2025.',
    exampleTR:
      'Tablo, bir Avrupa ülkesindeki hanelerin 2005 ve 2025 yılları arasında onar yıllık aralıklarla beş farklı harcama kategorisine yıllık ne kadar bütçe ayırdığını karşılaştırmaktadır.',
  },
  {
    paragraphNumber: 2,
    title: '2. Paragraf: Genel Bakış (Overview) — EN ÖNEMLİ PARAGRAF!',
    sentenceCount: '2 Cümle (~40–45 kelime) · SIFIR SAYI!',
    whatToDoTR:
      'Tabloya uzaktan bakınca görünen en büyük resmi 2 cümlede özetle. KURAL: Bu paragrafta kesinlikle rakam ($14,200 vb.) veya yüzde YAZILMAZ! 1. cümlede en büyük harcamayı ve genel yönü söyle; 2. cümlede en hızlı artan/azalan kategoriyi söyle.',
    whatToDoEN:
      'Summarize the big picture in 2 sentences with ZERO numbers. Sentence 1: Who is the biggest overall, and which rows went up/down? Sentence 2: Which row changed the most dramatically?',
    template:
      'Overall, [En büyük kategori] accounted for the largest expense throughout the period, whereas spending on [Azalan kategoriler] declined. Notably, [En çok sıçrayan kategori] experienced the most dramatic growth, overtaking [Geçtiği kategori].',
    exampleEN:
      'Overall, housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period, whereas spending on food, transport, and print media contracted. Notably, digital communications experienced the most dramatic proportional expansion, effectively reversing its initial rank with print media.',
    exampleTR:
      'Genel olarak, konut ve faturalar yirmi yıllık dönem boyunca hane bütçelerinde açık ara en büyük payı alırken; gıda, ulaşım ve basılı medya harcamaları azalmıştır. Dikkat çekici bir şekilde, dijital iletişim oransal olarak en büyük artışı yaşamış ve basılı medya ile olan başlangıçtaki sıralamasını tersine çevirmiştir.',
  },
  {
    paragraphNumber: 3,
    title: '3. Paragraf: 1. Detay Grubu — Büyük Harcamalar (Body Paragraph 1)',
    sentenceCount: '3 Cümle (~55–60 kelime) · Sayıları Burada Kullan!',
    whatToDoTR:
      'Tablodaki en büyük 3 temel harcamayı (Konut, Gıda, Ulaşım) burada anlat. Dikkat: 2015 ara yılını Konut ve Gıda için ATLA (sadece 2005 başlangıç ve 2025 bitişi ver). 2015 yılını sadece Ulaşım için yaz çünkü Ulaşım 2015’te zirve yapıp sonra düşüyor!',
    whatToDoEN:
      'Report the 3 big living costs (Housing, Food, Transport) using exact dollar numbers. Remember to multiply by 1,000 ($14,200, NOT $14.2)! Skip 2015 for Housing and Food; only mention 2015 for Transport because it peaked then.',
    template:
      'Regarding major living costs, spending on [Kategori 1] rose by [Oran] from $[Başlangıç] in 2005 to $[Bitiş] in 2025. Conversely, outlays on [Kategori 2] fell gradually from $[Başlangıç] to $[Bitiş]. Meanwhile, [Kategori 3] peaked at $[Zirve] in 2015 before dropping to $[Bitiş] by 2025.',
    exampleEN:
      'Regarding major living costs, expenditure on housing and utilities surged by just over half from $14,200 in 2005 to a peak of $21,500 in 2025, exceeding the combined total of the remaining four categories in the final year. Conversely, outlays on food and groceries drifted downward from $9,400 to $8,100 over the same span. Transport and travel followed an erratic trajectory, peaking at $8,500 in 2015 before subsiding to $6,200 by 2025.',
    exampleTR:
      'Temel yaşam giderlerine bakıldığında, konut ve fatura harcamaları 2005’te 14.200 dolardan yarıdan biraz fazla artarak 2025’te 21.500 dolar ile zirveye ulaşmış ve son yılda diğer dört kategorinin toplamını geçmiştir. Buna karşılık, gıda ve market harcamaları aynı dönemde 9.400 dolardan 8.100 dolara gerilemiştir. Ulaşım ve seyahat ise dalgalı bir seyir izleyerek 2015’te 8.500 dolarla zirve yapmış, ardından 2025’te 6.200 dolara düşmüştür.',
  },
  {
    paragraphNumber: 4,
    title: '4. Paragraf: 2. Detay Grubu — Küçük Ama Zıt Kategoriler (Body Paragraph 2)',
    sentenceCount: '3 Cümle (~50–55 kelime) · Katları ("fivefold") ve "Respectively" Kullan!',
    whatToDoTR:
      'Tablodaki en küçük 2 kategoriyi (Dijital İletişim ve Basılı Medya) birbiriyle kıyasla. Biri yaklaşık 5 katına çıkarken ("grew nearly fivefold"), diğeri altıda birine ("a mere sixth") düştü. Sonuç paragrafı (Conclusion) YAZMA; Task 1’de 4. paragraftan sonra yazı biter!',
    whatToDoEN:
      'Contrast the 2 smallest categories (Digital vs. Print Media). Use "respectively" for their 2005 starting numbers, then contrast Digital’s 5x surge against Print’s 6x collapse. Do NOT write a 5th conclusion paragraph!',
    template:
      'In contrast, the two smallest categories moved in opposite directions. In 2005, households spent $[Sayı A] and $[Sayı B] on [Kategori A] and [Kategori B], respectively. By 2025, [Kategori B] grew nearly fivefold to $[Bitiş], whereas [Kategori A] shrank to a mere sixth of its initial level, finishing at $[Bitiş].',
    exampleEN:
      'In stark contrast, the two smallest categories exhibited opposing fortunes. In 2005, households spent $1,800 and $1,200 on print media and digital telecoms, respectively. Over the subsequent two decades, digital spending grew nearly fivefold to reach $5,800, whereas print media expenditure collapsed to a mere sixth of its original level, finishing at a negligible $300.',
    exampleTR:
      'Tam aksine, en küçük iki kategori zıt yönlerde ilerlemiştir. 2005 yılında haneler basılı medya ve dijital iletişime sırasıyla 1.800 dolar ve 1.200 dolar harcamıştır. İzleyen yirmi yılda dijital harcamalar yaklaşık beş kat artarak 5.800 dolara ulaşırken, basılı medya harcamaları başlangıç seviyesinin altıda birine çökerek sadece 300 dolarda kalmıştır.',
  },
];

export const PRIMARY_TABLE_DATASET = {
  id: 'household-expenditure-2005-2025',
  type: 'dynamic',
  examTimeMinutes: 20,
  minWords: 150,
  promptRubric:
    'The table below gives information about average annual household expenditure on five categories of goods and services in a European country in 2005, 2015, and 2025.',
  promptRubricTR:
    'Aşağıdaki tablo, bir Avrupa ülkesinde 2005, 2015 ve 2025 yıllarında beş mal ve hizmet kategorisi için yapılan ortalama yıllık hane halkı harcamaları hakkında bilgi vermektedir.',
  taskInstruction:
    'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  taskInstructionTR:
    'Ana özellikleri seçip raporlayarak bilgileri özetleyin ve uygun olan yerlerde karşılaştırmalar yapın. (Hedef: 20 Dakika, En az 150 Kelime, 4 Paragraf)',
  tableTitle: 'Average Annual Household Expenditure by Category (2005–2025)',
  unitHeader: '(in US$ thousands per household) — (Hane başına BİN ABD Doları cinsinden)',
  unitMultiplierNote:
    'ÇOK ÖNEMLİ BİRİM KURALI: Tablonun başlığında "(in US$ thousands)" yani "bin dolar" yazıyor. Bu yüzden tablodaki "14.2" sayısı aslında $14.2 değil, $14,200 (14 bin 200 dolar) demektir! "0.3" ise $300 demektir. Sınavda "$14.2" yazarsanız puanınız kırılır.',
  columns: [
    { key: 'category', label: 'Expenditure Category (Kategori)', align: 'left' },
    { key: 'y2005', label: '2005', align: 'right' },
    { key: 'y2015', label: '2015', align: 'right' },
    { key: 'y2025', label: '2025', align: 'right' },
  ],
  rows: [
    {
      id: 'housing',
      category: 'Housing & Utilities',
      categoryTR: 'Konut ve Faturalar',
      recommendedGroup: 'bp1',
      groupRationale:
        '3. Paragrafa (Body 1 - Büyük Harcamalar) koymalıyız: Çünkü tüm yıllarda açık ara en büyük harcama kalemi budur ve dolar bazında en çok artan (+7.300$) kategoridir.',
      trajectorySummary: 'En büyük kategori; sürekli artış (+51% | +$7,300)',
      cells: {
        y2005: {
          value: '14.2',
          trueDollarValue: '$14,200',
          status: 'must_report',
          featureType: 'Başlangıç Lideri',
          ruleId: 'extremes',
          rationale:
            'MUTLAKA YAZ (Ana Veri): Konut harcamasının en baştan beri 14.200$ ile birinci sırada olduğunu ve 2025’e kadar 7.300$ arttığını göstermek için başlangıç sayısını vermeliyiz.',
        },
        y2015: {
          value: '16.8',
          trueDollarValue: '$16,800',
          status: 'omit',
          featureType: 'Gereksiz Ara Yıl',
          ruleId: 'noise',
          rationale:
            'ATLA / YAZMA (Gereksiz Detay): Konut harcaması 2005’ten 2025’e düzenli olarak artıyor. "2005’te 14.200$’dan 2025’te 21.500$’a düzenli yükseldi" demek yeterlidir. 2015’i de yazarsan liste yapmış olursun.',
        },
        y2025: {
          value: '21.5',
          trueDollarValue: '$21,500',
          status: 'must_report',
          featureType: 'Tablo Zirvesi (En Yüksek)',
          ruleId: 'extremes',
          rationale:
            'MUTLAKA YAZ (Ana Veri): Tüm tablodaki EN BÜYÜK sayıdır (21.500$). Hatta 2025’te diğer 4 kategorinin toplamından (20.400$) bile daha büyüktür!',
        },
      },
    },
    {
      id: 'food',
      category: 'Food & Groceries',
      categoryTR: 'Gıda ve Market',
      recommendedGroup: 'bp1',
      groupRationale:
        '3. Paragrafa (Body 1 - Büyük Harcamalar) koymalıyız: Hafifçe azalsa bile 20 yıl boyunca her zaman tablodaki en büyük 2. harcama kalemidir.',
      trajectorySummary: 'En büyük 2. harcama; hafif düşüş (-14% | -$1,300)',
      cells: {
        y2005: {
          value: '9.4',
          trueDollarValue: '$9,400',
          status: 'supporting',
          featureType: 'Yardımcı Başlangıç',
          ruleId: 'shift',
          rationale:
            'YARDIMCI VERİ: Gıdanın 9.400$ ile ikinci sırada başladığını göstermek için kullanılır ("from $9,400 to $8,100").',
        },
        y2015: {
          value: '8.9',
          trueDollarValue: '$8,900',
          status: 'omit',
          featureType: 'Gereksiz Ara Yıl',
          ruleId: 'noise',
          rationale:
            'ATLA / YAZMA (Klasik 5.5 Puan Tuzağı): "2005’te 9.4, 2015’te 8.9, 2025’te 8.1 oldu" şeklinde her yılı tek tek saymak mekanik listelemedir ve puan kırar.',
        },
        y2025: {
          value: '8.1',
          trueDollarValue: '$8,100',
          status: 'supporting',
          featureType: 'Yardımcı Bitiş',
          ruleId: 'shift',
          rationale:
            'YARDIMCI VERİ: 2005 (9.400$) ile birleştirilerek "9.400$’dan 8.100$’a hafifçe geriledi" cümlesini kurmamızı sağlar.',
        },
      },
    },
    {
      id: 'transport',
      category: 'Transport & Travel',
      categoryTR: 'Ulaşım ve Seyahat',
      recommendedGroup: 'bp1',
      groupRationale:
        '3. Paragrafa (Body 1 - Büyük Harcamalar) koymalıyız: Büyük bütçeli üçüncü kalemdir ve tablodaki TEK dalgalı (önce artıp sonra düşen) kategoridir.',
      trajectorySummary: 'İstisna (Anomaly): 2015’te zirve yapıp sonra düştü',
      cells: {
        y2005: {
          value: '7.6',
          trueDollarValue: '$7,600',
          status: 'supporting',
          featureType: 'Başlangıç Referansı',
          ruleId: 'anomaly',
          rationale:
            'YARDIMCI VERİ: 2025 son değerinin (6.200$), 2005 başlangıç değerinin (7.600$) bile altına düştüğünü göstermek için faydalıdır.',
        },
        y2015: {
          value: '8.5',
          trueDollarValue: '$8,500',
          status: 'must_report',
          featureType: '2015 İstisna Zirvesi!',
          ruleId: 'anomaly',
          rationale:
            'MUTLAKA YAZ (Özel İstisna): Tabloda 2015 yılını yazmamız gereken TEK satır budur! Çünkü sadece Ulaşım 2015’te 8.500$ ile zirve yapıp ardından yön değiştirerek düşmektedir.',
        },
        y2025: {
          value: '6.2',
          trueDollarValue: '$6,200',
          status: 'must_report',
          featureType: 'Zirve Sonrası Düşüş',
          ruleId: 'anomaly',
          rationale:
            'MUTLAKA YAZ (Ana Veri): 2015 zirvesinden (8.500$) sonra 6.200$’a düştüğünü tamamlar.',
        },
      },
    },
    {
      id: 'digital',
      category: 'Digital & Telecoms',
      categoryTR: 'Dijital ve İletişim',
      recommendedGroup: 'bp2',
      groupRationale:
        '4. Paragrafa (Body 2 - Küçük Ama Zıt Kategoriler) koymalıyız: Basılı Medya ile tam zıt bir teknoloji hikayesi oluşturur (en düşük başladı ama yaklaşık 5 katına çıktı!).',
      trajectorySummary: 'Oransal olarak en büyük sıçrama: ~5 kat artış (+383%)',
      cells: {
        y2005: {
          value: '1.2',
          trueDollarValue: '$1,200',
          status: 'must_report',
          featureType: 'Sıçrama Başlangıcı',
          ruleId: 'shift',
          rationale:
            'MUTLAKA YAZ (Ana Veri): 2005’te 1.200$ ile en küçük kategoriydi; 5 katlık artışı ("nearly fivefold") kanıtlamak için bu başlangıç sayısı şarttır.',
        },
        y2015: {
          value: '2.9',
          trueDollarValue: '$2,900',
          status: 'omit',
          featureType: 'Gereksiz Ara Yıl',
          ruleId: 'noise',
          rationale:
            'ATLA / YAZMA: "1.200$’dan yaklaşık beş kat artarak 5.800$’a çıktı" dediğimizde 2015’teki 2.900$’ı söylemeye hiç gerek kalmaz.',
        },
        y2025: {
          value: '5.8',
          trueDollarValue: '$5,800',
          status: 'must_report',
          featureType: '5 Kat Sıçrama Sonucu',
          ruleId: 'shift',
          rationale:
            'MUTLAKA YAZ (Ana Veri): 5.800$’a ulaşarak neredeyse 5 kat büyüdüğünü ve Basılı Medya’yı geride bıraktığını gösterir.',
        },
      },
    },
    {
      id: 'print',
      category: 'Print Media & Postage',
      categoryTR: 'Basılı Medya ve Posta',
      recommendedGroup: 'bp2',
      groupRationale:
        '4. Paragrafa (Body 2 - Küçük Ama Zıt Kategoriler) koymalıyız: Dijital İletişim’in tam tersidir; 2005’te Dijital’den büyüktü (1.800$ vs 1.200$), ama 2025’te 300$’a çöktü.',
      trajectorySummary: 'En sert çöküş: Altıda birine düştü (-83% | $300)',
      cells: {
        y2005: {
          value: '1.8',
          trueDollarValue: '$1,800',
          status: 'supporting',
          featureType: 'Sıralama Değişimi Başlangıcı',
          ruleId: 'shift',
          rationale:
            'YARDIMCI VERİ: 2005 yılında Basılı Medya’nın (1.800$), Dijital’den (1.200$) daha yüksek olduğunu ve sonradan altıda birine düştüğünü göstermek için kullanılır.',
        },
        y2015: {
          value: '0.9',
          trueDollarValue: '$900',
          status: 'omit',
          featureType: 'Gereksiz Ara Yıl',
          ruleId: 'noise',
          rationale:
            'ATLA / YAZMA: Ara yıldaki 900$ değerini atlayarak toplam sayı adedini ideal sınırda (7-8 sayı) tutuyoruz.',
        },
        y2025: {
          value: '0.3',
          trueDollarValue: '$300',
          status: 'must_report',
          featureType: 'Tablo Dibi (En Düşük)',
          ruleId: 'extremes',
          rationale:
            'MUTLAKA YAZ (Ana Veri): Tablodaki EN DÜŞÜK sayıdır! Dikkat: "0.3 bin dolar" = "$300" (300 dolar) olarak yazmak 8.5 puanlık ustalık gösterir.',
        },
      },
    },
  ],
};

// Static Snapshot comparison table used in Module 1, Module 2 (Static Mode toggle), and Module 10
export const STATIC_SNAPSHOT_DATASET = {
  id: 'commuter-modal-split-2024',
  type: 'static',
  examTimeMinutes: 20,
  minWords: 150,
  promptRubric:
    'The table below shows the percentage of commuters using four modes of transport in five metropolitan cities in 2024, along with average daily commute time.',
  promptRubricTR:
    'Aşağıdaki tablo, 2024 yılında beş büyükşehirde dört ulaşım türünü kullanan yolcuların yüzdesini ve ortalama günlük yolculuk süresini göstermektedir.',
  taskInstruction:
    'Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
  tableTitle: 'Metropolitan Commuter Transport Share & Duration (2024 Census Snapshot)',
  unitHeader: '(İlk 4 sütun % oran; son sütun dakika [minutes] cinsindendir)',
  unitMultiplierNote:
    'SABİT (STATIC) TABLO KURALI: Bu tabloda yıllar arası değişim YOKTUR (sadece 2024 yılı var). Bu yüzden ASLA "arttı (rose/increased)" veya "azaldı (fell/decreased)" kelimelerini kullanmayın! Şehirleri "daha yüksek (higher than)", "en büyük pay (the largest share)" diyerek karşılaştırın.',
  columns: [
    { key: 'city', label: 'City (Şehir)', align: 'left' },
    { key: 'rail', label: 'Metro / Rail (%)', align: 'right' },
    { key: 'car', label: 'Private Car (%)', align: 'right' },
    { key: 'bus', label: 'Bus (%)', align: 'right' },
    { key: 'active', label: 'Cycling / Walking (%)', align: 'right' },
    { key: 'duration', label: 'Avg. Commute (dk)', align: 'right' },
  ],
  rows: [
    {
      id: 'tokyo',
      city: 'Tokyo',
      rail: '64',
      car: '11',
      bus: '8',
      active: '17',
      duration: '48',
      highlightNote: 'Metro lideri (%64) ve en düşük araba kullanımı (%11), ancak en uzun yolculuk süresi (48 dk).',
    },
    {
      id: 'amsterdam',
      city: 'Amsterdam',
      rail: '21',
      car: '24',
      bus: '9',
      active: '46',
      duration: '26',
      highlightNote: 'Bisiklet/Yürüyüşte açık ara lider (%46 — neredeyse yarısı) ve en kısa yolculuk süresi (26 dk).',
    },
    {
      id: 'london',
      city: 'London',
      rail: '49',
      car: '22',
      bus: '18',
      active: '11',
      duration: '43',
      highlightNote: 'Metroda 2. sırada (%49) ve en yüksek otobüs kullanımı (%18).',
    },
    {
      id: 'sydney',
      city: 'Sydney',
      rail: '25',
      car: '58',
      bus: '11',
      active: '6',
      duration: '39',
      highlightNote: 'Çoğunluk özel arabaya bağımlı (%58), bisiklet/yürüyüş çok düşük (%6).',
    },
    {
      id: 'houston',
      city: 'Houston',
      rail: '3',
      car: '86',
      bus: '7',
      active: '4',
      duration: '34',
      highlightNote: 'En yüksek özel araba bağımlılığı (%86) ve en düşük metro/bisiklet oranı (%3 ve %4).',
    },
  ],
};

// Module 8: Band 8.5 Annotated Benchmark Model (174 words)
export const MODEL_ESSAY_DATA = {
  targetBand: '8.5',
  wordCount: 174,
  examinerSummary:
    'Bu örnek yazı (174 kelime), 4 paragraflık standart şablonu kusursuz uygular: 15 sayıdan sadece en önemli 8 tanesini seçer, "bin dolar" birimini doğru çevirir ($14,200 ve $300), Overview paragrafında hiç sayı kullanmaz ve kategorileri mantıklı şekilde iki gruba ayırır.',
  paragraphs: [
    {
      id: 'p1',
      label: '1. Paragraf: Giriş (Introduction — 1 Cümle)',
      role: 'Soru kökünü eş anlamlı kelimelerle yeniden yazar (Paraphrase).',
      translationTR:
        'Tablo, bir Avrupa ülkesindeki hanelerin 2005 ve 2025 yılları arasında onar yıllık aralıklarla beş farklı harcama grubuna yıllık ne kadar bütçe ayırdığını karşılaştırmaktadır.',
      segments: [
        {
          text: 'The table compares how much households in a European nation ',
          tags: [],
        },
        {
          text: 'allocated annually to five distinct expenditure brackets',
          tags: ['LR'],
          note: 'Kelime Bilgisi (LR - 8.5): Sorudaki "spent on five categories" ifadesini "allocated annually to five distinct expenditure brackets" (beş farklı harcama grubuna yıllık ayırdığı) şeklinde üst düzey kelimelerle yeniden yazıyor.',
        },
        {
          text: ' at ten-year intervals between 2005 and 2025.',
          tags: ['GRA'],
          note: 'Gramer (GRA - 8.0): "2005, 2015, and 2025" demek yerine "at ten-year intervals between 2005 and 2025" (2005 ile 2025 arasında 10’ar yıllık aralıklarla) kalıbını kullanıyor.',
        },
      ],
    },
    {
      id: 'p2',
      label: '2. Paragraf: Genel Bakış (Overview — 2 Cümle, SIFIR SAYI!)',
      role: 'Hiç rakam vermeden en büyük kategoriyi ve en çarpıcı değişimi özetler.',
      translationTR:
        'Genel olarak, konut ve faturalar yirmi yıllık dönem boyunca hane bütçelerinde açık ara en büyük payı alırken; gıda, ulaşım ve basılı medya harcamaları daralmıştır. Dikkat çekici bir şekilde, dijital iletişim en büyük oransal artışı yaşamış ve basılı medya ile olan başlangıç sıralamasını tersine çevirmiştir.',
      segments: [
        {
          text: 'Overall, ',
          tags: ['CC'],
          note: 'Bağlaç (CC): Overview paragrafına her zaman "Overall," (Genel olarak,) kelimesiyle başlayın.',
        },
        {
          text: 'housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period',
          tags: ['TA', 'LR'],
          note: 'Görev Başarısı (TA - 9.0): Hiç sayı yazmadan tablonun en büyük liderini ("commanded by far the largest share" = açık ara en büyük payı aldı) söylüyor.',
        },
        {
          text: ', whereas ',
          tags: ['CC', 'GRA'],
          note: 'Gramer / Bağlaç: İki zıt durumu tek cümlede birleştiren ", whereas" (-iken / buna karşın) bağlacı.',
        },
        {
          text: 'spending on food, transport, and print media contracted. ',
          tags: ['TA'],
          note: 'Görev Başarısı (TA): Azalan üç kategoriyi tek bir kelimede ("contracted" = daraldı/azaldı) birleştiriyor.',
        },
        {
          text: 'Notably, ',
          tags: ['CC'],
          note: 'Bağlaç (CC): İkinci genel bakış cümlesinde en dikkat çekici özelliği vurgulamak için "Notably," (Dikkat çekici bir şekilde,) kullanılır.',
        },
        {
          text: 'digital communications experienced the most dramatic proportional expansion, effectively reversing its initial rank with print media.',
          tags: ['TA', 'GRA'],
          note: 'TA & GRA (8.5): Dijital harcamaların oransal olarak en büyük sıçramayı yaptığını ve basılı medya ile yer değiştirdiğini (", effectively reversing...") yapısıyla anlatıyor.',
        },
      ],
    },
    {
      id: 'p3',
      label: '3. Paragraf: Detay 1 — Büyük Yaşam Giderleri (Body Paragraph 1)',
      role: 'Konut, Gıda ve Ulaşım kategorilerini sayı vererek karşılaştırır.',
      translationTR:
        'Temel yaşam giderlerine bakıldığında, konut ve fatura harcamaları 2005’te 14.200 dolardan yarıdan biraz fazla artarak 2025’te 21.500 dolarla zirveye ulaşmış ve son yılda kalan dört kategorinin toplamını aşmıştır. Buna karşılık, gıda harcamaları aynı dönemde 9.400 dolardan 8.100 dolara gerilemiştir. Ulaşım ise dalgalı bir seyir izleyerek 2015’te 8.500 dolarla zirve yapmış, ardından 2025’te 6.200 dolara düşmüştür.',
      segments: [
        {
          text: 'Regarding major living costs, ',
          tags: ['CC'],
          note: 'Paragraf Başlangıcı (CC): 3. paragrafa hangi grubu anlatacağımızı belirterek ("Regarding major living costs," = Temel yaşam giderlerine bakıldığında,) başlıyoruz.',
        },
        {
          text: 'expenditure on housing and utilities ',
          tags: [],
        },
        {
          text: 'surged by just over half from $14,200 in 2005 to a peak of $21,500 in 2025',
          tags: ['TA', 'LR', 'GRA'],
          note: 'Birim ve Kesir Ustalığı (TA/LR): "14.2" ve "21.5" sayılarını bin ile çarparak "$14,200" ve "$21,500" olarak doğru yazıyor; aradaki %51’lik artışı "by just over half" (yarıdan biraz fazla) diyerek ifade ediyor ve 2015 ara yılını atlıyor!',
        },
        {
          text: ', exceeding the combined total of the remaining four categories in the final year. ',
          tags: ['TA', 'GRA'],
          note: 'Üst Düzey Karşılaştırma (Band 9): 21.500 doların diğer dört kategorinin toplamından bile büyük olduğunu (", exceeding...") yapısı ile ekliyor.',
        },
        {
          text: 'Conversely, ',
          tags: ['CC'],
          note: 'Bağlaç: Artan konuttan azalan gıdaya geçerken "Conversely," (Buna karşılık,) kullanılıyor.',
        },
        {
          text: 'outlays on food and groceries drifted downward from $9,400 to $8,100 over the same span. ',
          tags: ['TA', 'LR'],
          note: 'Kelime Çeşitliliği (LR): Sürekli "spending fell" dememek için "outlays ... drifted downward" (harcamalar aşağı yönlü geriledi) kullanılıyor.',
        },
        {
          text: 'Transport and travel followed an erratic trajectory, peaking at $8,500 in 2015 before subsiding to $6,200 by 2025.',
          tags: ['TA', 'LR', 'GRA'],
          note: '2015 İstisnası (TA/GRA): Tablodaki tek dalgalı satır olan Ulaşım için 2015 zirvesini ("peaking at $8,500 in 2015 before subsiding to $6,200") kalıbıyla veriyor.',
        },
      ],
    },
    {
      id: 'p4',
      label: '4. Paragraf: Detay 2 — Küçük Ama Zıt Kategoriler (Body Paragraph 2)',
      role: 'Dijital İletişim ve Basılı Medya’yı "respectively", katlar ve kesirlerle kıyaslar.',
      translationTR:
        'Tam aksine, en küçük iki kategori zıt yönlerde ilerlemiştir. 2005 yılında haneler basılı medya ve dijital iletişime sırasıyla 1.800 dolar ve 1.200 dolar harcamıştır. İzleyen yirmi yılda dijital harcamalar yaklaşık beş kat büyüyerek 5.800 dolara ulaşırken, basılı medya harcamaları başlangıç seviyesinin altıda birine çökerek sadece 300 dolarda kalmıştır.',
      segments: [
        {
          text: 'In stark contrast, ',
          tags: ['CC'],
          note: 'Bağlaç (CC): 4. paragrafa güçlü bir geçiş ("In stark contrast," = Tam aksine / Keskin bir tezatla) ile başlanıyor.',
        },
        {
          text: 'the two smallest categories exhibited opposing fortunes. ',
          tags: ['CC', 'LR'],
          note: 'Konu Cümlesi: En küçük iki kategorinin zıt yönlere gittiğini belirterek paragrafı çerçeveliyor.',
        },
        {
          text: 'In 2005, households spent $1,800 and $1,200 on print media and digital telecoms, respectively. ',
          tags: ['TA', 'GRA'],
          note: '"Respectively" Kalıbı (GRA - 8.5): "Sırasıyla" demektir. İlk sayı ($1,800) ilk kategoriye (print media), ikinci sayı ($1,200) ikinci kategoriye (digital telecoms) aittir.',
        },
        {
          text: 'Over the subsequent two decades, ',
          tags: ['CC'],
          note: 'Zaman Bağlacı: "İzleyen yirmi yıl boyunca" anlamında akıcı geçiş.',
        },
        {
          text: 'digital spending grew nearly fivefold to reach $5,800',
          tags: ['TA', 'GRA'],
          note: 'Kat Kalıbı (GRA): 1.200$’dan 5.800$’a çıkışı "grew nearly fivefold" (yaklaşık 5 kat büyüdü) diyerek anlatıyor.',
        },
        {
          text: ', whereas print media expenditure collapsed to a mere sixth of its original level, finishing at a negligible $300.',
          tags: ['TA', 'LR', 'GRA'],
          note: 'Kesir ve Birim Dönüşümü (Band 9): 1.800$’dan 300$’a düşüşü "collapsed to a mere sixth" (altıda birine çöktü) ve "0.3 bin = $300" olarak hatasız tamamlıyor.',
        },
      ],
    },
  ],
};

// Module 9: Band 5.5 Error Clinic Script
export const ERROR_CLINIC_DATA = {
  candidateBand: '5.5',
  wordCount: 142,
  examinerVerdict:
    'Bu 5.5 puanlık öğrenci yazısında Türk öğrencilerin en sık yaptığı 7 klasik hata bulunuyor: Overview paragrafına sayı doldurmak, "bin dolar" birimini unutmak ($14.2 yazmak), her yılı tek tek sıralamak ve "respectively" sırasını karıştırmak. Kırmızı/altı çizili hatalara tıklayarak neden puan kırıldığını görün.',
  paragraphs: [
    {
      id: 'ep1',
      segments: [
        {
          type: 'text',
          content:
            'The table shows how much money people spent on five categories in 2005, 2015 and 2025. ',
        },
        {
          type: 'error',
          id: 'err-overview-numbers',
          criterion: 'TA',
          shortLabel: 'Hata 1: Overview Paragrafında Sayı Kullanmak',
          flawedText:
            'Overall, Housing was 14.2 in 2005 and went up to 21.5 in 2025, while Print Media was 0.3 in 2025.',
          penaltyExplanation:
            'NEDEN PUAN KIRILIR (TA Tavanı 5.5/6.0): Overview (Genel Bakış) paragrafında ASLA sayı (14.2, 21.5, 0.3) ve yıl yazılmaz! Overview sadece "en büyük kategori konuttu, en çok düşen basılı medyaydı" gibi genel özeti vermelidir.',
          calibratedFix:
            'Overall, housing and utilities commanded the largest share of household budgets throughout the period, whereas print media remained the smallest and steepest-declining category.',
        },
      ],
    },
    {
      id: 'ep2',
      segments: [
        {
          type: 'error',
          id: 'err-multiplier-drop',
          criterion: 'TA',
          shortLabel: 'Hata 2: "Bin Dolar (Thousands)" Birimini Unutmak',
          flawedText: 'First, in 2005, people spent $14.2 on Housing and Utilities,',
          penaltyExplanation:
            'NEDEN PUAN KIRILIR (Yanlış Veri): Tablonun üstünde "(in US$ thousands)" yani "bin dolar" yazıyor. "$14.2" yazarsanız "14 dolar 20 sent harcadılar" demiş olursunuz! Doğrusu "$14,200" veya "14.2 thousand dollars" olmalıdır.',
          calibratedFix:
            'In 2005, households allocated $14,200 to housing and utilities,',
        },
        {
          type: 'text',
          content: ' and ',
        },
        {
          type: 'error',
          id: 'err-mechanical-listing',
          criterion: 'TA',
          shortLabel: 'Hata 3: Tüm Yılları Tek Tek Saymak (Data Dumping)',
          flawedText:
            'then it rose to $16.8 in 2015 and then it increased to $21.5 in 2025. Next, Food and Groceries was $9.4 in 2005, $8.9 in 2015, and $8.1 in 2025.',
          penaltyExplanation:
            'NEDEN PUAN KIRILIR (TA & CC 5.5): "2005’te şuydu, 2015’te bu oldu, 2025’te şu oldu" diye tablodaki tüm hücreleri sıra ile okumak analiz değildir. 2015 ara yıllarını atlayıp başlangıç ve bitişi karşılaştırmalısınız.',
          calibratedFix:
            'which climbed steadily by over 50% to reach $21,500 by 2025. Conversely, food expenditure drifted downward from $9,400 to $8,100 over the twenty-year span.',
        },
      ],
    },
    {
      id: 'ep3',
      segments: [
        {
          type: 'error',
          id: 'err-subject-confusion',
          criterion: 'LR',
          shortLabel: 'Hata 4: Yanlış Özne ("Ulaşım Arttı" Demek)',
          flawedText: 'Moving to the third row, Transport and Travel increased to 8.5 in 2015',
          penaltyExplanation:
            'NEDEN PUAN KIRILIR (Kelime & Mantık Hatası): Birincisi, "Üçüncü satıra geçersek (Moving to the third row)" denmez. İkincisi, "Ulaşım (Transport)" kendi başına artmaz; "ulaşıma yapılan harcama (spending on transport)" artar!',
          calibratedFix:
            'Meanwhile, spending on transport bucked the general downward trend among secondary staples, peaking at $8,500 in 2015',
        },
        {
          type: 'text',
          content: ' before falling to 6.2 in 2025. ',
        },
        {
          type: 'error',
          id: 'err-comparative-syntax',
          criterion: 'GRA',
          shortLabel: 'Hata 5: Bozuk Karşılaştırma Grameri',
          flawedText: 'Also, Digital and Telecoms was almost five times higher than 2005 in 2025, from 1.2 to 5.8.',
          penaltyExplanation:
            'NEDEN PUAN KIRILIR (Gramer): "Digital was higher than 2005" derseniz bir harcama kategorisini bir takvim yılıyla (2005) kıyaslamış olursunuz. Doğrusu: "grew nearly fivefold from $1,200 in 2005 to $5,800 in 2025".',
          calibratedFix:
            'By contrast, outlays on digital communications surged nearly fivefold from $1,200 in 2005 to $5,800 in 2025.',
        },
      ],
    },
    {
      id: 'ep4',
      segments: [
        {
          type: 'error',
          id: 'err-static-verb-confusion',
          criterion: 'LR',
          shortLabel: 'Hata 6: Günlük/Basit Kelime ("Went down a lot")',
          flawedText: 'Finally, Print Media went down a lot from 1.8 in 2005 to 0.9 in 2015 and 0.3 in 2025.',
          penaltyExplanation:
            'NEDEN PUAN KIRILIR (Kelime Bilgisi - Band 5): Akademik yazıda "went down a lot" (çok düştü) gibi konuşma dili kullanılmaz. Ayrıca yine 1.8 → 0.9 → 0.3 diye tüm sayılar tek tek sayılmış.',
          calibratedFix:
            'Over the same period, spending on print media collapsed to just one-sixth of its initial level, dropping from $1,800 to a negligible $300.',
        },
        {
          type: 'text',
          content: ' ',
        },
        {
          type: 'error',
          id: 'err-respectively-syntax',
          criterion: 'GRA',
          shortLabel: 'Hata 7: "Respectively" Sırasını Ters Yazmak',
          flawedText:
            'In 2025, Digital and Print Media were 0.3 and 5.8 respectively.',
          penaltyExplanation:
            'NEDEN PUAN KIRILIR (Gramer & Yanlış Bilgi): Cümlede önce "Digital", sonra "Print Media" yazılmış; ama sayılarda önce Print Media’nın sayısı (0.3), sonra Digital’in sayısı (5.8) verilmiş! "Respectively" kullanırken sıra birebir aynı olmalıdır.',
          calibratedFix:
            'By 2025, expenditure on digital services and print media stood at $5,800 and $300, respectively.',
        },
      ],
    },
  ],
};
