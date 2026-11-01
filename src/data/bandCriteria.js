// Centralized examiner rubrics, grammar lab patterns, overview builder blocks,
// planning blueprints, and diagnostic checklist criteria — simplified with Turkish (TR) coaching.

export const CURRICULUM_MODULES = [
  {
    id: 'm1-examiner-guide',
    number: '01',
    shortTitle: 'Temel Kurallar (Nasıl Puan Verilir?)',
    fullTitle: '1. Adım: Tablo Sorularında 3 Altın Kural',
    phase: '1. Bölüm: Tabloyu Anlama',
    componentName: 'ExaminerFieldGuide.jsx',
    targetBreakdown: 'Zamanlı vs. Sabit Tablo & Birim Tuzakları',
  },
  {
    id: 'm2-dataset-explorer',
    number: '02',
    shortTitle: 'Örnek Tabloyu İncele',
    fullTitle: '2. Adım: Örnek Sınav Sorusu ve Tablo Analizi',
    phase: '1. Bölüm: Tabloyu Anlama',
    componentName: 'TableDatasetView.jsx',
    targetBreakdown: '15 Sayıdan Hangileri Önemli?',
  },
  {
    id: 'm3-feature-selection',
    number: '03',
    shortTitle: 'Sayı Seçme Uygulaması',
    fullTitle: '3. Adım: Hangi Sayıları Yazmalıyım? (6–8 Sayı Kuralı)',
    phase: '2. Bölüm: Seçme, Gruplama ve Özet',
    componentName: 'FeatureSelectionLab.jsx',
    targetBreakdown: 'Hata #1: Tüm Sayıları Tek Tek Yazmak',
  },
  {
    id: 'm4-grouping-strategy',
    number: '04',
    shortTitle: 'Paragrafları Gruplama',
    fullTitle: '4. Adım: Satırları 2 Paragrafa Nasıl Bölerim?',
    phase: '2. Bölüm: Seçme, Gruplama ve Özet',
    componentName: 'GroupingStrategy.jsx',
    targetBreakdown: 'Hata #2: Satır Satır Sırayla Anlatmak',
  },
  {
    id: 'm5-overview-workshop',
    number: '05',
    shortTitle: 'Overview (Özet) Yazma',
    fullTitle: '5. Adım: Sayı Kullanmadan Overview (2. Paragraf) Yazma',
    phase: '2. Bölüm: Seçme, Gruplama ve Özet',
    componentName: 'OverviewWorkshop.jsx',
    targetBreakdown: 'Hata #3: Özete Sayı Doldurmak',
  },
  {
    id: 'm6-grammar-lab',
    number: '06',
    shortTitle: '5 Hazır Cümle Kalıbı',
    fullTitle: '6. Adım: Yüksek Puan Getiren 5 Cümle Kalıbı (Grammar)',
    phase: '3. Bölüm: Cümle Kalıpları ve Örnek Yazılar',
    componentName: 'GrammarLab.jsx',
    targetBreakdown: 'Hata #4 & #5: Katlar, Kesirler ve "Respectively"',
  },
  {
    id: 'm7-planning-methods',
    number: '07',
    shortTitle: '20 Dakika Planı',
    fullTitle: '7. Adım: Sınavda 20 Dakikayı Nasıl Kullanmalıyım?',
    phase: '3. Bölüm: Cümle Kalıpları ve Örnek Yazılar',
    componentName: 'PlanningMethods.jsx',
    targetBreakdown: 'İlk 5 Dakika Planlama Rehberi',
  },
  {
    id: 'm8-model-answer',
    number: '08',
    shortTitle: '8.5 Puanlık Örnek Yazı',
    fullTitle: '8. Adım: Cümle Cümle Türkçe Açıklamalı 8.5 Puanlık Yazı',
    phase: '3. Bölüm: Cümle Kalıpları ve Örnek Yazılar',
    componentName: 'ModelAnswer.jsx',
    targetBreakdown: '4 Paragrafın Tamamı Nasıl Görünmeli?',
  },
  {
    id: 'm9-error-clinic',
    number: '09',
    shortTitle: '5.5 Puanlık Hatalı Yazı',
    fullTitle: '9. Adım: Neden 5.5 Alınır? (Hata Bulma Kliniği)',
    phase: '3. Bölüm: Cümle Kalıpları ve Örnek Yazılar',
    componentName: 'ErrorClinic.jsx',
    targetBreakdown: 'Türk Öğrencilerin En Sık Yaptığı 7 Hata',
  },
  {
    id: 'm10-timed-simulator',
    number: '10',
    shortTitle: 'Kendin Yaz (Simülatör)',
    fullTitle: '10. Adım: Şablonlu 20 Dakika Yazma Simülatörü',
    phase: '4. Bölüm: Pratik ve Kontrol',
    componentName: 'TimedWritingSpace.jsx',
    targetBreakdown: 'Canlı Kelime, Sayı ve Hata Kontrolü',
  },
  {
    id: 'm11-rubric-checklist',
    number: '11',
    shortTitle: 'Son Kontrol Listesi',
    fullTitle: '11. Adım: Yazımı Teslim Etmeden Önce Son Kontrol',
    phase: '4. Bölüm: Pratik ve Kontrol',
    componentName: 'RubricChecklist.jsx',
    targetBreakdown: 'Puanınızı Düşüren Eksikleri Görün',
  },
];

export const DYNAMIC_VS_STATIC_TAXONOMY = {
  dynamic: {
    title: '1. Tür: Zamanlı (Dynamic) Tablolar — Yıllar Var!',
    identificationRule:
      'Tabloda 2 veya daha fazla yıl/zaman varsa (Örn: 2005, 2015, 2025).',
    analyticalQuestion: 'Soru: Sayılar zaman içinde nasıl değişti (arttı mı, azaldı mı)?',
    legitimateLexis: [
      'Artış/Azalış Fiilleri: increased, rose, surged (hızla arttı), fell, declined, dropped (düştü)',
      'Ne Kadar Değişti?: grew nearly fivefold (yaklaşık 5 kat büyüdü), drifted gradually downward (yavaşça geriledi)',
      'Zirve/Dip Kalıbı: peaking at $8,500 in 2015 before falling to $6,200 (2015’te zirve yapıp sonra düştü)',
    ],
    prohibitedTrap:
      'YAPILAN HATA: Her yılı birbirinden bağımsız gibi tek tek yazmak ("In 2005 housing was 14.2. In 2015 it was 16.8."). Bunun yerine başlangıçtan bitişe nasıl yükseldiğini anlatmalısınız!',
  },
  static: {
    title: '2. Tür: Sabit (Static) Tablolar — Yıl Değişimi YOK!',
    identificationRule:
      'Tabloda zaman akışı yoksa (Örn: Tek bir yılda [2024] 5 farklı şehrin ulaşım oranları).',
    analyticalQuestion: 'Soru: Hangi şehir/kategori en büyük, hangisi en küçük, aradaki fark kaç kat?',
    legitimateLexis: [
      'Sabit Oran Fiilleri: accounted for (%... pay aldı), represented, stood at (... seviyesindeydi)',
      'Karşılaştırma Kalıpları: was twice as high as (iki katıydı), outstripped (geride bıraktı), trailed behind (geride kaldı)',
      'Sıralama Kalıbı: ..., ranking first at 64%, followed closely by London at 49% (%64 ile birinci sırada yer aldı)',
    ],
    prohibitedTrap:
      'EN BÜYÜK PUAN KIRMA TUZAĞI: Sabit tabloda ASLA "arttı (rose/increased)" veya "azaldı (fell/decreased)" DEMEYİN! Şehirler zaman içinde birbirine dönüşmez. Sadece "daha yüksekti / en büyük paya sahipti" diyebilirsiniz.',
  },
};

export const UNIT_HEADER_TRAPS = [
  {
    id: 'trap-multiplier',
    title: 'Tuzak 1: "Thousands (Bin)" Birimini Unutmak',
    headerExample: 'Tablo Başlığı: (in US$ thousands) | Hücredeki Sayı: 14.2',
    band5Error: '"Households spent $14.2 on housing in 2005, rising to $21.5 in 2025."',
    examinerPenalty:
      'NEDEN YANLIŞ? "$14.2" yazarsanız "14 dolar 20 sent" demiş olursunuz! Oysa tablo başlığında "bin dolar (thousands)" yazıyor. Yani 14.2 = 14.200 dolardır.',
    band8Calibration:
      '"Households allocated $14,200 to housing in 2005, climbing to $21,500 in 2025." (Veya: "...spent 14.2 thousand dollars...")',
  },
  {
    id: 'trap-pct-points',
    title: 'Tuzak 2: Yüzde (%) ile "Puan" Farkını Karıştırmak',
    headerExample: '2005 Oranı: %10 → 2025 Oranı: %20',
    band5Error: '"The proportion of digital spending increased by 10% over the period."',
    examinerPenalty:
      'NEDEN YANLIŞ? %10’dan %20’ye çıkmak "%10 artış" değildir; ikiye katlanmaktır (%100 artış) veya "10 yüzdelik puan (10 percentage points)" artıştır.',
    band8Calibration:
      '"The share of digital spending doubled from 10% to 20% (an increase of 10 percentage points)."',
  },
  {
    id: 'trap-subject-category',
    title: 'Tuzak 3: "Harcama Arttı" Yerine "Ulaşım Arttı" Demek',
    headerExample: 'Satır Adı: Transport & Travel | 2005: 7.6 → 2015: 8.5',
    band5Error: '"Transport and travel increased from 7.6 in 2005 to 8.5 in 2015."',
    examinerPenalty:
      'NEDEN YANLIŞ? "Ulaşım" kendi kendine büyüyen bir canlı değildir! Artan şey ulaşıma yapılan HARCAMADIR ("spending on transport").',
    band8Calibration:
      '"Household expenditure on transport and travel rose from $7,600 in 2005 to a peak of $8,500 in 2015."',
  },
  {
    id: 'trap-raw-vs-share',
    title: 'Tuzak 4: Dolar ($) Tablosuna Yüzde (%) İşareti Koymak',
    headerExample: 'Tablo Başlığı: (in US$ thousands) | Hücredeki Sayı: 21.5',
    band5Error: '"Housing accounted for 21.5% of household budgets in 2025."',
    examinerPenalty:
      'NEDEN YANLIŞ? Tabloda yüzde (%) yok, dolar ($) var! Sayının yanına kafanızdan % işareti koymak veriyi yanlış okumaktır.',
    band8Calibration:
      '"Housing outlays reached $21,500 in 2025, representing more than half of the total household budget."',
  },
];

export const OVERVIEW_BUILDER_OPTIONS = {
  sentence1: {
    prompt: '1. Cümle: En Büyük Kategori ve Genel Yön (Sayı içermeyen doğru cümleyi seçin)',
    options: [
      {
        id: 's1-opt-band8',
        text: 'Overall, housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period, whereas outlays on food, transport, and print media contracted.',
        quality: 'band8',
        hasNumbers: false,
        feedback:
          'HARİKA SEÇİM (Band 8.5): Hiç sayı kullanmadan en büyük harcamayı (Konut) ve azalan 3 kategoriyi (Gıda, Ulaşım, Basılı Medya) tek bir akıcı cümlede özetliyor!',
      },
      {
        id: 's1-opt-numbers',
        text: 'Overall, housing and utilities rose from $14,200 in 2005 to $21,500 in 2025, while food fell from $9,400 to $8,100.',
        quality: 'band5_trap',
        hasNumbers: true,
        feedback:
          'YANLIŞ (Band 5.5/6.0 Tuzağı): Overview cümlesine 4 tane sayı ($14,200, $21,500, $9,400, $8,100) koymuşsunuz! Sayıları 3. ve 4. paragrafa saklayın.',
      },
      {
        id: 's1-opt-vague',
        text: 'Overall, it is clear that some expenditure categories went up between 2005 and 2025 while other categories went down.',
        quality: 'band6_vague',
        hasNumbers: false,
        feedback:
          'ZAYIF SEÇİM (Band 6.0): "Bazıları arttı, bazıları azaldı" çok boş bir cümledir. Hangi kategorinin en büyük olduğunu ve hangilerinin azaldığını ismen söylemelisiniz.',
      },
    ],
  },
  sentence2: {
    prompt: '2. Cümle: En Çarpıcı Değişim ve Sıralama Değişimi (Sayı içermeyen doğru cümleyi seçin)',
    options: [
      {
        id: 's2-opt-band8',
        text: 'Notably, digital communications experienced the most dramatic proportional surge, effectively reversing its initial ranking with print media, which shrank to become the smallest expense.',
        quality: 'band8',
        hasNumbers: false,
        feedback:
          'HARİKA SEÇİM (Band 8.5): Hiç sayı vermeden en hızlı büyüyen kategoriyi (Dijital) ve Basılı Medya’yı geçerek sıralamayı tersine çevirdiğini söylüyor!',
      },
      {
        id: 's2-opt-numbers',
        text: 'In addition, digital communications grew nearly fivefold from 1.2 thousand to 5.8 thousand, whereas print media dropped to 0.3 thousand.',
        quality: 'band5_trap',
        hasNumbers: true,
        feedback:
          'YANLIŞ (Band 6.0 Tuzağı): "1.2", "5.8" ve "0.3" sayılarını Overview içinde harcamayın! Bunları 4. paragrafta (Body 2) kullanacağız.',
      },
      {
        id: 's2-opt-incomplete',
        text: 'Meanwhile, transport and travel was the third largest category in the table.',
        quality: 'band6_vague',
        hasNumbers: false,
        feedback:
          'ZAYIF SEÇİM (Band 6.0): Tablodaki en heyecanlı olay Dijital’in 5 kat artıp Basılı Medya’nın çökmesidir; "Ulaşım 3. sıradaydı" demek ana resmi kaçırır.',
      },
    ],
  },
};

export const OVERVIEW_BENCHMARKS = [
  {
    band: 'Band 5.0',
    tag: 'Sayı Doldurma Hatası',
    verdict: 'Yanlış: Overview Değil, Detay Paragrafı Gibi Yazılmış',
    text: 'Overall, Housing was 14.2 in 2005, 16.8 in 2015, and 21.5 in 2025. Meanwhile, Print Media started at 1.8 and fell to 0.3 in 2025, and Digital started at 1.2.',
    critique:
      'İçinde 6 tane sayı ve 3 tane yıl var, "bin dolar" birimi unutulmuş ve hiçbir genel özet yapılmamış.',
  },
  {
    band: 'Band 6.5',
    tag: 'Aşırı Boş / Genel Cümle',
    verdict: 'Eksik: Kategori İsimleri Yok',
    text: 'Overall, it can be seen that spending on some categories increased over the twenty-year period, whereas expenditure on other items decreased significantly.',
    critique:
      'Sayı yok (bu iyi), ama dünyadaki her tabloya uyabilecek ezbere bir cümle. Hangi kategorinin lider olduğunu söylemiyor.',
  },
  {
    band: 'Band 8.5',
    tag: 'Kusursuz Genel Bakış',
    verdict: 'Tam Puan: Lider Kategori + Genel Yön + Sıralama Değişimi',
    text: 'Overall, housing and utilities commanded by far the largest share of household budgets throughout the twenty-year period, whereas spending on food, transport, and print media contracted. Notably, digital communications experienced the most dramatic proportional expansion, effectively reversing its initial rank with print media.',
    critique:
      'Sıfır sayı! En büyük harcamayı (Konut), azalanları ve Dijital ile Basılı Medya arasındaki yer değişimini net şekilde özetliyor.',
  },
];

export const GRAMMAR_PATTERNS = [
  {
    id: 'multiples',
    tabLabel: '1. Kat Kalıbı (5 Kat Arttı)',
    title: 'Kalıp 1: Katları Söyleme ("Nearly fivefold" / "Twice as high as")',
    examinerPurpose:
      'Sürekli "1.2’den 5.8’e arttı" demek yerine "yaklaşık 5 kat büyüdü" diyerek 8.0+ gramer puanı almanızı sağlar.',
    formula:
      '[Özne] + grew / surged + [nearly fivefold / threefold] + from [Başlangıç] to [Bitiş]   VEYA   [A] + was + [twice / three times] + as high as + that of [B]',
    badExample:
      'Digital spending was almost five times higher than 2005 in 2025 ($1,200 and $5,800).',
    badReason:
      'YANLIŞ: "Higher than 2005" derseniz harcamayı bir takvim yılıyla (2005) kıyaslamış olursunuz!',
    goodExample:
      'Annual outlays on digital telecoms surged nearly fivefold between 2005 and 2025, rising from $1,200 to $5,800.',
    secondaryGoodExample:
      'By 2025, housing expenditure ($21,500) was more than twice as high as that of food ($8,100) and transport ($6,200) combined.',
    drill: {
      question:
        'Alıştırma: Tokyo’da metro kullanımı %64, Sydney’de ise %25’tir. Hangisi 8.5 puanlık doğru karşılaştırmadır?',
      options: [
        {
          id: 'm-opt1',
          text: 'Rail usage in Tokyo (64%) was over twice as high than Sydney (25%).',
          isCorrect: false,
          explanation: 'GRAMER HATASI: "Twice as high than" denmez; "twice as high AS" kullanılır.',
        },
        {
          id: 'm-opt2',
          text: 'At 64%, the proportion of rail commuters in Tokyo was more than two and a half times as high as that recorded in Sydney (25%).',
          isCorrect: true,
          explanation: 'DOĞRU (Band 8.5): "Two and a half times as high as" (2.5 katından fazla) ve "that recorded in Sydney" kalıbını hatasız kullanıyor.',
        },
        {
          id: 'm-opt3',
          text: 'Tokyo rail commuters increased nearly threefold compared to Sydney from 25% to 64%.',
          isCorrect: false,
          explanation: 'BÜYÜK HATA: Sabit şehir tablosunda "increased from 25% to 64%" (Sydney’den Tokyo’ya arttı!) denmez.',
        },
      ],
    },
  },
  {
    id: 'fractions',
    tabLabel: '2. Kesir Kalıbı (Altıda Biri)',
    title: 'Kalıp 2: Kesirlerle Oranlama ("A mere sixth" / "Just over half")',
    examinerPurpose:
      'Yüzdeleri ve düşüşleri "yarıdan biraz fazla (just over half)" veya "altıda birine (to a mere sixth)" diyerek anlatmanızı sağlar.',
    formula:
      '[Özne] + [collapsed to / expanded by / accounted for] + [just over half / a mere sixth / roughly a third] + of [Referans]',
    badExample:
      'Print media fell by 83.33% from $1,800 to $300, which is 1/6.',
    badReason:
      'YANLIŞ: Akademik yazıda "83.33%" gibi küsüratlı hesap makinesi sayıları veya "1/6" gibi rakamlı kesir yazılmaz; yazıyla "one-sixth" yazılır.',
    goodExample:
      'Expenditure on print media collapsed to a mere sixth of its initial level, dropping from $1,800 in 2005 to just $300 by 2025.',
    secondaryGoodExample:
      'In Amsterdam, active transport (cycling and walking) accounted for just under half of all daily journeys (46%).',
    drill: {
      question:
        'Alıştırma: Konut harcaması 2005’te 14.200$ iken %51.4 artarak 2025’te 21.500$ oldu. Bunu kesirle nasıl yazarız?',
      options: [
        {
          id: 'f-opt1',
          text: 'Housing expenditure expanded by just over half over the two decades, climbing from $14,200 to $21,500.',
          isCorrect: true,
          explanation: 'DOĞRU (Band 8.5): "%51.4 arttı" demek yerine "expanded by just over half" (yarıdan biraz fazla büyüdü) demek çok doğal ve üst düzeydir.',
        },
        {
          id: 'f-opt2',
          text: 'Housing expenditure became a half higher in 2025 at $21,500.',
          isCorrect: false,
          explanation: 'YANLIŞ: "Became a half higher" İngilizcede olmayan bozuk bir ifadedir.',
        },
        {
          id: 'f-opt3',
          text: 'Housing expenditure accounted for half of 2005 in 2025 ($21,500).',
          isCorrect: false,
          explanation: 'YANLIŞ: "Accounted for half" (yarısını oluşturdu) ile "yarı oranında arttı" birbirine karıştırılmış.',
        },
      ],
    },
  },
  {
    id: 'participles',
    tabLabel: '3. "-ing" Bağlama Kalıbı',
    title: 'Kalıp 3: Virgül + "-ing" İle İki Cümleyi Birleştirme (", peaking at...")',
    examinerPurpose:
      'Kısa ve kopuk cümleler yerine tek bir akıcı cümlede hem zirveyi hem düşüşü anlatmanızı sağlar.',
    formula:
      '[Ana Cümle], + [peaking at $X before falling to $Y / exceeding... / followed closely by...]',
    badExample:
      'Transport rose to $8,500 in 2015. Then it fell to $6,200 in 2025. Digital was behind it at $5,800.',
    badReason:
      'ZAYIF (Band 5.5): Üç tane çok kısa, kopuk ve basit cümle arka arkaya dizilmiş.',
    goodExample:
      'Transport outlays peaked at $8,500 in 2015 before subsiding to $6,200 by 2025, followed closely by digital communications at $5,800.',
    secondaryGoodExample:
      'Private cars dominated commuter transport in Houston at 86%, outstripping rail and bus usage by a wide margin.',
    drill: {
      question:
        'Alıştırma: "Konut 2025’te 21.500$ ile zirve yaptı ve diğer dört kategorinin toplamını geçti" cümlesini virgül + -ing ile nasıl kurarız?',
      options: [
        {
          id: 'p-opt1',
          text: 'Housing peaked at $21,500 in 2025, exceeding the combined expenditure of the remaining four categories.',
          isCorrect: true,
          explanation: 'DOĞRU (Band 9.0): Virgül + "exceeding..." (-erek / aşarak) yapısı iki cümleyi tek bir ileri seviye cümlede birleştirir.',
        },
        {
          id: 'p-opt2',
          text: 'Housing peaked at $21,500 in 2025, which was exceeded the other four categories.',
          isCorrect: false,
          explanation: 'GRAMER HATASI: "Was exceeded" edilgen (passive) yapıldığı için anlam tam tersine dönmüş!',
        },
        {
          id: 'p-opt3',
          text: 'Ranking first at $21,500 in 2025, the other four categories were smaller than housing.',
          isCorrect: false,
          explanation: 'GRAMER HATASI: Virgülden sonraki özne "housing" olmalıydı, "the other four categories" değil.',
        },
      ],
    },
  },
  {
    id: 'respectively',
    tabLabel: '4. "Respectively" (Sırasıyla)',
    title: 'Kalıp 4: "Respectively" (Sırasıyla) Kullanım Kuralı',
    examinerPurpose:
      'İki kategorinin sayılarını tek cümlede tekrara düşmeden vermenizi sağlar. Her Task 1 yazısında 1 kez kullanılması önerilir.',
    formula:
      '[Kategori A] and [Kategori B] + [fiil] + [Sayı A] and [Sayı B], respectively.',
    badExample:
      'In 2005, digital telecoms and print media were $1,800 and $1,200 respectively.',
    badReason:
      'YANLIŞ SIRA! 2005’te Dijital $1,200, Basılı Medya ise $1,800’dür. Önce Dijital yazıp sonra $1,800 derseniz sayıları ters vermiş olursunuz!',
    goodExample:
      'In 2005, households allocated $1,800 and $1,200 to print media and digital telecoms, respectively.',
    secondaryGoodExample:
      'Tokyo and London recorded the longest average daily commutes, at 48 and 43 minutes, respectively.',
    drill: {
      question:
        'Alıştırma: 2025’te Gıda = $8,100 ve Ulaşım = $6,200’dür. Hangisi "respectively" kuralına %100 uygundur?',
      options: [
        {
          id: 'r-opt1',
          text: 'By 2025, expenditure on food and transport stood at $8,100 and $6,200, respectively.',
          isCorrect: true,
          explanation: 'DOĞRU (Band 8.5): İlk isim (food) = ilk sayı ($8,100); ikinci isim (transport) = ikinci sayı ($6,200). Sıra birebir doğru!',
        },
        {
          id: 'r-opt2',
          text: 'By 2025, expenditure on transport and food stood at $8,100 and $6,200, respectively.',
          isCorrect: false,
          explanation: 'YANLIŞ SIRA: Önce "transport" yazıldığı için $8,100 sayısı ulaşıma gitmiş oldu!',
        },
        {
          id: 'r-opt3',
          text: 'By 2025, food was $8,100 respectively, while transport was $6,200 respectively.',
          isCorrect: false,
          explanation: 'GRAMER HATASI: "Respectively" ayrı ayrı cümlelerde değil, "A and B ... X and Y, respectively" şeklinde ikili listede kullanılır.',
        },
      ],
    },
  },
  {
    id: 'connectors',
    tabLabel: '5. Zıtlık Bağlaçları (Whereas)',
    title: 'Kalıp 5: Zıtlık ve Karşılaştırma Bağlaçları ("Whereas" / "In stark contrast to")',
    examinerPurpose:
      'Özellikle zaman akışı olmayan sabit tablolarda iki zıt kategoriyi birbirine bağlamak için şarttır.',
    formula:
      '[Cümle A], whereas / while [Cümle B].   |   In stark contrast to [İsim Grubu A], [Tam Cümle B].',
    badExample:
      'Tokyo rail share is 64%. On the other hand, Houston rail share is 3%, whereas.',
    badReason:
      'YANLIŞ: "Whereas" cümlenin sonuna tek başına konmaz; iki cümleyi ortadan birbirine bağlar.',
    goodExample:
      'In stark contrast to Tokyo, where rail accounted for nearly two-thirds of commuters (64%), rail usage in Houston was negligible at just 3%.',
    secondaryGoodExample:
      'Whereas cycling and walking represented nearly half of all journeys in Amsterdam (46%), active transport remained below 10% in Sydney and Houston.',
    drill: {
      question:
        'Alıştırma: "In contrast to" ve "Whereas" farkını doğru kullanan cümleyi seçin:',
      options: [
        {
          id: 'c-opt1',
          text: 'In contrast to spending on print media ($300), digital outlays reached $5,800 in 2025.',
          isCorrect: true,
          explanation: 'DOĞRU (Band 8.5): "In contrast to" bir edattır ve kendisinden sonra tam cümle değil, isim grubu ("spending on print media") alır.',
        },
        {
          id: 'c-opt2',
          text: 'In contrast to print media fell to $300, digital outlays reached $5,800 in 2025.',
          isCorrect: false,
          explanation: 'GRAMER HATASI: "In contrast to"dan sonra fiil ("fell") gelmez. Fiil gelecekse "Whereas print media fell..." denmelidir.',
        },
        {
          id: 'c-opt3',
          text: 'Whereas spending on print media ($300), digital outlays reached $5,800 in 2025.',
          isCorrect: false,
          explanation: 'GRAMER HATASI: "Whereas" bir bağlaçtır ve ilk kısımda mutlaka bir fiil ("Whereas spending on print media stood at $300,...") ister.',
        },
      ],
    },
  },
];

export const PLANNING_METHODS_DATA = {
  methodA: {
    id: 'method-a-static',
    badge: 'Yöntem A: Sabit (Static) Tablo Planı',
    bestFor: 'Yıl Değişimi Olmayan Tablolar (Örn: 2024’te 5 Şehirde Ulaşım)',
    corePrinciple:
      'Zaman akışı olmadığı için satırları yukarıdan aşağıya sırayla anlatmayın! Benzer özellik gösteren şehirleri iki gruba ayırın.',
    steps: [
      {
        step: '1. Birimleri Kontrol Et (45 sn)',
        detail:
          'İlk 4 sütun yüzde (%), ama son sütun dakika (minutes)! Farklı birimleri birbirine karıştırmamak için son sütuna işaret koyun.',
      },
      {
        step: '2. En Yüksek ve En Düşükleri Yuvarlağa Al (60 sn)',
        detail:
          'Tokyo (%64 Metro lideri, 48 dk en uzun süre), Houston (%86 Araba lideri, %3 Metro), Amsterdam (%46 Bisiklet/Yürüyüş lideri, 26 dk en kısa süre).',
      },
      {
        step: '3. Satırları 2 Paragrafa Böl (60 sn)',
        detail:
          '3. Paragraf (Body 1): Toplu Taşıma ve Bisiklet Liderleri (Tokyo, Londra, Amsterdam). 4. Paragraf (Body 2): Arabaya Bağımlı Şehirler (Houston ve Sydney).',
      },
      {
        step: '4. "Arttı / Azaldı" Kelimelerini Yasakla! (15 sn)',
        detail:
          'Tablo sadece 2024 yılını gösterdiği için "rose, fell, increased" kelimelerini aklınızdan silin.',
      },
    ],
  },
  methodB: {
    id: 'method-b-dynamic',
    badge: 'Yöntem B: Zamanlı (Dynamic) Tablo Planı',
    bestFor: 'Yıllar İçeren Tablolar (Örn: 2005, 2015, 2025 Hane Harcamaları)',
    corePrinciple:
      'Her satırın sağına arttı (↑) veya azaldı (↓) işareti koyun. Düzenli giden satırlarda ortadaki 2015 yılını karalayın!',
    steps: [
      {
        step: '1. "Bin Dolar (Thousands)" Birimini İşaretle (45 sn)',
        detail:
          'Tablo başlığındaki "(in US$ thousands)" ifadesinin altını çizin ki yazarken "$14.2" değil "$14,200" yazasınız.',
      },
      {
        step: '2. Ortadaki 2015 Sütununu Eleyin (60 sn)',
        detail:
          'Konut, Gıda, Dijital ve Basılı Medya düz bir çizgide artıyor veya azalıyor; bunların 2015 sayılarını çizin! Sadece Ulaşım’ın 2015 zirvesini ($8,500) yuvarlağa alın.',
      },
      {
        step: '3. Satırları 2 Paragrafa Böl (60 sn)',
        detail:
          '3. Paragraf (Body 1): Büyük Harcamalar (Konut, Gıda, Ulaşım). 4. Paragraf (Body 2): Küçük Ama Zıt Kategoriler (Dijital 5 kat arttı vs. Basılı Medya 6 kat çöktü).',
      },
      {
        step: '4. Sayısız Overview Cümleni Kur (15 sn)',
        detail:
          'En büyük kategori (Konut) + azalanlar (Gıda/Ulaşım/Basılı) + en büyük sıçrama (Dijital).',
      },
    ],
  },
  pacingProtocol: [
    {
      window: '00:00 – 03:00. Dakika',
      phase: '1. Aşama: Tabloyu Çöz ve Sayı Seç',
      tasks: [
        'Tablo başlığındaki birimi ("in thousands" veya "%") yuvarlağa al.',
        'Tablo Zamanlı mı (yıllar var) yoksa Sabit mi kontrol et.',
        '15 sayıdan sadece en önemli 6–8 tanesini seç, ara yılları (2015) çiz.',
      ],
    },
    {
      window: '03:00 – 05:00. Dakika',
      phase: '2. Aşama: 2 Gruba Ayır',
      tasks: [
        'Satırları 3. Paragraf (Body 1) ve 4. Paragraf (Body 2) için iki gruba ayır.',
        '2. Paragraf (Overview) için sayı içermeyen 2 cümleni kafanda netleştir.',
      ],
    },
    {
      window: '05:00 – 18:00. Dakika',
      phase: '3. Aşama: 4 Paragrafı Yaz (13 Dk)',
      tasks: [
        'Dk 5–7: 1 cümle Giriş + 2 cümle Overview yaz (~60 kelime).',
        'Dk 7–13: 3. Paragrafı (Büyük Harcamalar) 3 cümlede yaz (~60 kelime).',
        'Dk 13–18: 4. Paragrafı (Küçük/Zıt Harcamalar) 3 cümlede yaz (~55 kelime).',
      ],
    },
    {
      window: '18:00 – 20:00. Dakika',
      phase: '4. Aşama: Son Hata Kontrolü (2 Dk)',
      tasks: [
        'Birim Kontrolü: "$14.2" yerine "$14,200" yazdın mı?',
        'Özne Kontrolü: "Transport increased" yerine "Spending on transport increased" yazdın mı?',
        'Overview Kontrolü: 2. paragrafta hiç sayı olmadığından emin misin?',
      ],
    },
  ],
};

export const RUBRIC_CHECKLIST_ITEMS = [
  {
    criterion: 'TA',
    fullName: 'Task Achievement (Görev Başarısı)',
    weight: '25%',
    ceilingWarning:
      'Kritik Kural: Overview paragrafı yoksa veya içine sayı doldurulmuşsa TA puanı 5.5–6.0’ı geçemez!',
    checkpoints: [
      {
        id: 'ta-1',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: '2. Paragrafta (Overview) HİÇ SAYI KULLANMADAN en büyük kategoriyi ve ana değişimi özetledim.',
        remedyModule: '5. Adım (Overview Yazma)',
      },
      {
        id: 'ta-2',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Tablodaki 15 sayının hepsini yazmadım; sadece en önemli 6–8 sayıyı seçtim.',
        remedyModule: '3. Adım (Sayı Seçme)',
      },
      {
        id: 'ta-3',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Tablo başlığındaki "thousands (bin)" birimini doğru çevirdim ($14.2 değil, $14,200 yazdım).',
        remedyModule: '1. Adım (Temel Kurallar)',
      },
      {
        id: 'ta-4',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'Ulaşım’ın 2015 zirvesini ($8,500) ve Dijital’in Basılı Medya’yı geçmesini belirttim.',
        remedyModule: '3. Adım (Sayı Seçme)',
      },
    ],
  },
  {
    criterion: 'CC',
    fullName: 'Coherence & Cohesion (Akıcılık ve Paragraf Düzeni)',
    weight: '25%',
    ceilingWarning:
      'Kritik Kural: Satırları "Birinci satır... İkinci satır..." diye sırayla anlatmak CC puanını 6.0’a kilitler.',
    checkpoints: [
      {
        id: 'cc-1',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Yazımı net olarak 4 paragrafa (Giriş, Overview, Detay 1, Detay 2) ayırdım.',
        remedyModule: '8. Adım (Örnek 8.5 Yazı)',
      },
      {
        id: 'cc-2',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Kategorileri büyüklük ve yönlerine göre mantıklı 2 gruba ayırdım.',
        remedyModule: '4. Adım (Paragrafları Gruplama)',
      },
      {
        id: 'cc-3',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: '"First, Second, Finally" yerine "Overall, Regarding major costs, In stark contrast" gibi doğal bağlaçlar kullandım.',
        remedyModule: '8. Adım (Örnek 8.5 Yazı)',
      },
    ],
  },
  {
    criterion: 'LR',
    fullName: 'Lexical Resource (Kelime Bilgisi)',
    weight: '25%',
    ceilingWarning:
      'Kritik Kural: Zaman akışı olmayan sabit tabloda "rose / fell" kullanmak puan düşürür.',
    checkpoints: [
      {
        id: 'lr-1',
        bandTarget: 7,
        isCriticalCeiling: true,
        label: 'Sabit tabloda "arttı/azaldı" demedim; zamanlı tabloda ise değişim fiilleri kullandım.',
        remedyModule: '1. Adım (Temel Kurallar)',
      },
      {
        id: 'lr-2',
        bandTarget: 7,
        isCriticalCeiling: false,
        label: '"Housing increased" yerine "Expenditure/spending on housing increased" yazdım.',
        remedyModule: '9. Adım (Hatalı Yazı Kliniği)',
      },
      {
        id: 'lr-3',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: '"Commanded the largest share", "surged nearly fivefold", "a mere sixth" gibi üst düzey ifadeler kullandım.',
        remedyModule: '6. Adım (5 Hazır Cümle Kalıbı)',
      },
    ],
  },
  {
    criterion: 'GRA',
    fullName: 'Grammatical Range & Accuracy (Gramer Çeşitliliği)',
    weight: '25%',
    ceilingWarning:
      'Kritik Kural: Hep aynı "X was Y" cümlesini kurmak yerine en az 3 farklı karşılaştırma kalıbı kullanmalısınız.',
    checkpoints: [
      {
        id: 'gra-1',
        bandTarget: 7,
        isCriticalCeiling: false,
        label: 'Kategoriyi doğrudan yılla kıyaslamadım ("higher than 2005" demedim; "higher than in 2005" veya kat kalıbı kullandım).',
        remedyModule: '6. Adım (5 Hazır Cümle Kalıbı)',
      },
      {
        id: 'gra-2',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: 'En az bir cümlede virgül + "-ing" (", peaking at $8,500 before...") yapısı kullandım.',
        remedyModule: '6. Adım (5 Hazır Cümle Kalıbı)',
      },
      {
        id: 'gra-3',
        bandTarget: 8,
        isCriticalCeiling: false,
        label: '"Respectively" (sırasıyla) kelimesini doğru sıra ve virgülle 1 kez kullandım.',
        remedyModule: '6. Adım (5 Hazır Cümle Kalıbı)',
      },
    ],
  },
];
