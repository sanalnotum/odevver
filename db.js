// db.js - Tüm 5 Excel Veritabanı
const DB = {
  "lgs": {
    "MATEMATİK": [
      {"konu": "Üslü Sayılar", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Köklü Sayılar", "y24": 3, "y25": 3, "y26": 3},
      {"konu": "Çarpanlar ve Katlar", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Olasılık", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Veri Analizi", "y24": 1, "y25": 1, "y26": 2},
      {"konu": "Eşitsizlikler", "y24": 2, "y25": 2, "y26": 1},
      {"konu": "Cebirsel İfadeler", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Doğrusal Denklemler ve Eğilim", "y24": 3, "y25": 3, "y26": 3},
      {"konu": "Dönüşüm Geometrisi", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Geometrik Cisimler", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Üçgenler", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Eşlik ve Benzerlik", "y24": 1, "y25": 1, "y26": 1}
    ],
    "TÜRKÇE": [
      {"konu": "Fiilimsiler", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Sözcükte Anlam", "y24": 2, "y25": 2, "y26": 1},
      {"konu": "Deyimler ve Atasözleri", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Söz Sanatları", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Cümlede Anlam", "y24": 3, "y25": 2, "y26": 3},
      {"konu": "Parçada Anlam", "y24": 6, "y25": 6, "y26": 11},
      {"konu": "Cümlenin Ögeleri", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Noktalama İşaretleri", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Metin Türleri", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Fiillerde Çatı", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Cümle Türleri", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Yazım Kuralları", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Anlatım Bozukluğu", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Sözel Mantık", "y24": 3, "y25": 3, "y26": 0}
    ],
    "FEN BİLİMLERİ": [
      {"konu": "Mevsimler ve İklim", "y24": 2, "y25": 1, "y26": 1},
      {"konu": "DNA ve Genetik Kod", "y24": 4, "y25": 3, "y26": 3},
      {"konu": "Basınç", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Madde ve Endüstri", "y24": 5, "y25": 5, "y26": 5},
      {"konu": "Basit Makineler", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Enerji Dönüşümleri ve Çevre Bilimi", "y24": 3, "y25": 4, "y26": 4},
      {"konu": "Elektrik Yükleri ve Elektrik Enerjisi", "y24": 2, "y25": 3, "y26": 3}
    ],
    "İNKILAP TARIHI": [
      {"konu": "Bir Kahraman Doğuyor", "y24": 1, "y25": 1, "y26": 2},
      {"konu": "Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar", "y24": 2, "y25": 2, "y26": 4},
      {"konu": "Ya İstiklal Ya Ölüm", "y24": 2, "y25": 2, "y26": 0},
      {"konu": "Atatürkçülük ve Çağdaşlaşan Türkiye", "y24": 3, "y25": 3, "y26": 2},
      {"konu": "Demokratikleşme Çabaları", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Atatürk Dönemi Türk Dış Politikası", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Atatürk'ün Vefatı ve Sonrası", "y24": 0, "y25": 0, "y26": 0}
    ],
    "İNGİLİZCE": [
      {"konu": "Friendship", "y24": 2, "y25": 2, "y26": 1},
      {"konu": "Teen Life", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "In The Kitchen", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "On The Phone", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "The Internet", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Adventures", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Tourism", "y24": 1, "y25": 1, "y26": 2},
      {"konu": "Chores", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Science", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Natural Forces", "y24": 1, "y25": 0, "y26": 0}
    ],
    "DİN KÜLTÜRÜ": [
      {"konu": "Kader İnancı", "y24": 3, "y25": 3, "y26": 2},
      {"konu": "Bir Peygamber Tanıyorum: Hz. Musa", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Zekat ve Sadaka", "y24": 3, "y25": 2, "y26": 2},
      {"konu": "Din ve Hayat", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Hz. Muhammed'in Örnekliği", "y24": 1, "y25": 2, "y26": 2},
      {"konu": "Kur'an-ı Kerim'in Özellikleri", "y24": 1, "y25": 1, "y26": 2}
    ]
  },
  "tyt": {
    "MATEMATİK": [
      {"konu": "Temel Kavramlar", "y24": 1, "y25": 3, "y26": 2},
      {"konu": "Sayı Basamakları", "y24": 2, "y25": 1, "y26": 2},
      {"konu": "Bölünebilme Kuralları", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "OBEB-OKEK", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Rasyonel Sayılar", "y24": 2, "y25": 1, "y26": 2},
      {"konu": "Basit Eşitsizlikler", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Mutlak Değer", "y24": 2, "y25": 1, "y26": 1},
      {"konu": "Üslü Sayılar", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Köklü Sayılar", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Çarpanlara Ayırma", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Oran - Orantı", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Denklem Çözme", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Problemler", "y24": 11, "y25": 12, "y26": 12},
      {"konu": "Kümeler", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Mantık", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Fonksiyonlar", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Polinomlar", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Permütasyon - Kombinasyon", "y24": 3, "y25": 1, "y26": 1},
      {"konu": "Olasılık", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Veri - İstatistik", "y24": 1, "y25": 1, "y26": 1}
    ],
    "TÜRKÇE": [
      {"konu": "Ses Bilgisi", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Dil Bilgisi", "y24": 0, "y25": 3, "y26": 3},
      {"konu": "Noktalama İşaretleri", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Yazım Kuralları", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Anlatım Bozukluğu", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Paragraf", "y24": 26, "y25": 26, "y26": 27},
      {"konu": "Cümlede Anlam", "y24": 5, "y25": 3, "y26": 3},
      {"konu": "Sözcükte Anlam", "y24": 5, "y25": 4, "y26": 3}
    ],
    "GEOMETRİ": [
      {"konu": "Açılar ve Üçgenler", "y24": 5, "y25": 4, "y26": 4},
      {"konu": "Çokgenler", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Yamuk", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Eşkenar Dörtgen", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Deltoid", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Kare", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Dikdörtgen", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Çember ve Daire", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Analitik Geometri", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Katı Cisimler", "y24": 2, "y25": 2, "y26": 2}
    ],
    "FİZİK": [
      {"konu": "Fizik Bilimine Giriş", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Madde Ve Özellikleri", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Sıvıların Kaldırma Kuvveti", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Basınç", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Isı, Sıcaklık ve Genleşme", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Hareket ve Kuvvet", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Dinamik", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "İş, Güç ve Enerji", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Elektrostatik", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Elektrik Akımı ve Devreler", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Elektriksel Enerji ve Güç", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Optik", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Manyetizma", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Dalgalar", "y24": 1, "y25": 1, "y26": 1}
    ],
    "KİMYA": [
      {"konu": "Kimya Bilimi", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Atomun Yapısı", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Periyodik Tablo", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Maddenin Halleri", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Kimyasal Türler Arası Etkileşimler", "y24": 1, "y25": 1, "y26": 2},
      {"konu": "Kimyasal Hesaplamalar", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Kimyanın Temel Kanunları", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Asit, Baz ve Tuz", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Karışımlar", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Kimya Her Yerde", "y24": 0, "y25": 0, "y26": 0}
    ],
    "BİYOLOJİ": [
      {"konu": "Canlıların Ortak Özellikleri", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Canlıların Temel Bileşenleri", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Hücre ve Organelleri", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Madde Geçişleri", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Canlıların Sınıflandırılması", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Hücre Bölünmeleri ve Üreme", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Kalıtım", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Ekosistem Ekoloji", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Bitkiler Biyolojisi", "y24": 0, "y25": 1, "y26": 0}
    ],
    "TARİH": [
      {"konu": "Tarih ve Zaman", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "İlk ve Orta Çağlarda Türk Dünyası", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "İslam Medeniyetinin Doğuşu", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Türklerin İslamiyet’i Kabulü ve İlk Türk İslam Devletleri", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Beylikten Devlete Osmanlı", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Dünya Gücü Osmanlı", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Değişim Çağında Avrupa ve Osmanlı", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Uluslararası İlişkilerde Denge Stratejisi (1774-1914)", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Milli Mücadele", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Atatürkçülük ve Türk İnkılabı", "y24": 1, "y25": 1, "y26": 1}
    ],
    "COĞRAFYA": [
      {"konu": "Doğa ve İnsan", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Dünya’nın Şekli ve Hareketleri", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Coğrafi Konum", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Harita Bilgisi", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Atmosfer ve Sıcaklık", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "İklim Bilgisi", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "iç ve Dış Kuvvetler", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Nüfus ve Yerleşme", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Türkiye’nin Yer Şekilleri", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Ekonomik Faaliyetler", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Bölgeler", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Uluslararası Ulaşım Hatları", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Doğal Afetler", "y24": 1, "y25": 1, "y26": 1}
    ],
    "FELSEFE": [
      {"konu": "Felsefenin Alanı", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Bilgi Felsefesi", "y24": 1, "y25": 3, "y26": 1},
      {"konu": "Bilim Felsefesi", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Varlık Felsefesi", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Ahlak Felsefesi", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Siyaset Felsefesi", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Din Felsefesi", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Sanat Felsefesi", "y24": 0, "y25": 0, "y26": 0}
    ],
    "DİN": [
      {"konu": "Bilgi ve İnanç", "y24": 1, "y25": 1, "y26": 2},
      {"konu": "İbadetler", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Ahlak ve Değerler", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Hz. Muhammed (S.A.V)", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Vahiy ve Akıl", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "İslam Düşüncesinde Yorumlar, Mezhepler", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Din, Kültür ve Medeniyet", "y24": 0, "y25": 0, "y26": 0}
    ]
  },
  "ayt": {
    "MATEMATİK": [
      {"konu": "Fonksiyonlar", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Polinomlar", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "2.Dereceden Denklemler", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Eşitsizlikler", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Parabol", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Permütasyon-Kombinasyon", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Olasılık", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Binom Açılımı", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Trigonometri", "y24": 5, "y25": 5, "y26": 5},
      {"konu": "Logaritma", "y24": 1, "y25": 2, "y26": 2},
      {"konu": "Diziler", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Limit", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Türev", "y24": 3, "y25": 3, "y26": 3},
      {"konu": "İntegral", "y24": 5, "y25": 3, "y26": 3}
    ],
    "GEOMETRİ": [
      {"konu": "Doğruda ve Üçgende Açı", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Özel Üçgenler", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Açıortay - Kenarortay", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Üçgende Alan Benzerlik", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Açı Kenar Bağıntıları", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Çokgenler", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Özel Dörtgenler", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Çember ve Daire", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Noktanın Analitiği", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Doğrunun Analitiği", "y24": 3, "y25": 2, "y26": 2},
      {"konu": "Dönüşüm Geometrisi", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Katı Cisimler", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Çemberin Analitiği", "y24": 1, "y25": 1, "y26": 1}
    ],
    "FİZİK": [
      {"konu": "Vektörler", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Hareket", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Newton’un Hareket Yasaları", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Atışlar", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "İş, Güç ve Enerji", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "İtme ve Momentum", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Kuvvet, Tork ve Denge", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Kütle Merkezi", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Basit Makineler", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Elektrik Alan ve Potansiyel", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Paralel Levhalar ve Sığa", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Manyetik Alan ve Manyetik Kuvvet", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "İndüksiyon, Alternatif Akım ve Transformatörler", "y24": 2, "y25": 1, "y26": 1},
      {"konu": "Düzgün Çembersel Hareket", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Dönme, Yuvarlanma ve Açısal Momentum", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Kütle Çekim ve Kepler Yasaları", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Basit Harmonik Hareket", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Dalga Mekaniği", "y24": 1, "y25": 2, "y26": 1},
      {"konu": "Atom Fiziğine Giriş ve Radyoaktivite", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Modern Fizik", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Modern Fiziğin Teknolojideki Uygulamaları", "y24": 1, "y25": 1, "y26": 1}
    ],
    "KİMYA": [
      {"konu": "Kimya Bilimi", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Atom ve Yapısı", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Periyodik Sistem", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Kimyasal Türler Arası Etkileşim", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Kimyasal Hesaplamalar", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Modern Atom Teorisi", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Gazlar", "y24": 1, "y25": 1, "y26": 2},
      {"konu": "Sıvı Çözeltiler", "y24": 2, "y25": 1, "y26": 1},
      {"konu": "Kimyasal Tepkimelerde Enerji", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Kimyasal Tepkimelerde Hız", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Kimyasal Tepkimelerde Denge", "y24": 1, "y25": 2, "y26": 1},
      {"konu": "Asit-Baz Dengesi", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Çözünürlük Dengesi", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Kimya ve Elektrik", "y24": 2, "y25": 2, "y26": 1},
      {"konu": "Organik Kimya", "y24": 3, "y25": 4, "y26": 4}
    ],
    "BİYOLOJİ": [
      {"konu": "Sinir Sistemi", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Endokrin Sistem", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Duyu Organları", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Destek ve Hareket Sistemi", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Sindirim Sistemi", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Dolaşım Sistemi", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Solunum Sistemi", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Üriner Sistem", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Üreme Sistemi ve Embriyonik Gelişim", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Komünite ve Popülasyon Ekolojisi", "y24": 2, "y25": 1, "y26": 2},
      {"konu": "Genden Proteine", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Canlılık ve Enerji", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Fotosentez ve Kemosentez", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Hücresel Solunum", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Bitki Biyolojisi", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "Canlılar ve Çevre", "y24": 0, "y25": 1, "y26": 0}
    ],
    "EDEBİYAT": [
      {"konu": "Anlam Bilgisi", "y24": 6, "y25": 6, "y26": 6},
      {"konu": "Dil Bilgisi", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Metin Türleri", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Şiir Bilgisi", "y24": 2, "y25": 3, "y26": 2},
      {"konu": "Edebi Sanatlar", "y24": 2, "y25": 1, "y26": 1},
      {"konu": "İslamiyet Öncesi Türk Edebiyatı ve Geçiş Dönemi", "y24": 1, "y25": 1, "y26": 2},
      {"konu": "Halk Edebiyatı", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Divan Edebiyatı", "y24": 4, "y25": 3, "y26": 5},
      {"konu": "Tanzimat Edebiyatı", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Servet-i Fünun Ve Fecr-i Ati Edebiyatı", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Milli Edebiyat", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Cumhuriyet Dönemi Edebiyatı", "y24": 3, "y25": 2, "y26": 3},
      {"konu": "Batı Edebiyat Akımları", "y24": 1, "y25": 1, "y26": 1}
    ],
    "COĞRAFYA": [
      {"konu": "İklim ve Yer Şekilleri", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Coğrafi Konum", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Dünya’nın Şekli ve Hareketleri", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Harita Bilgisi", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "İç ve Dış Kuvvetler", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Ekosistem", "y24": 2, "y25": 3, "y26": 2},
      {"konu": "Nüfus Politikaları", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Yerleşmelerin Özellikleri", "y24": 2, "y25": 2, "y26": 1},
      {"konu": "Uluslararası Ulaşım Hatları", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Ekonomik Faaliyetler ve Doğal Kaynaklar", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Geçmişten Geleceğe Şehir ve Ekonomi", "y24": 1, "y25": 1, "y26": 2},
      {"konu": "Türkiye’de Ekonomi", "y24": 0, "y25": 3, "y26": 2},
      {"konu": "Türkiye’nin İşlevsel Bölgeleri ve Kalkınma Projeleri", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Küresel Ticaret", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Kültür Bölgeleri", "y24": 1, "y25": 1, "y26": 2},
      {"konu": "Uluslararası Örgütler", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Ülkeler Arası Etkileşimler", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Bölgeler ve Ülkeler", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Çevre ve Toplum", "y24": 4, "y25": 2, "y26": 3}
    ],
    "TARİH": [
      {"konu": "Tarih ve Zaman", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "İnsanlığın İlk Dönemleri", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "İlk ve Orta Çağlarda Türk Dünyası", "y24": 2, "y25": 2, "y26": 2},
      {"konu": "İslam Medeniyetinin Doğuşu", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Türklerin İslamiyet’i Kabulü ve İlk Türk İslam Devletleri", "y24": 2, "y25": 1, "y26": 1},
      {"konu": "Yerleşme ve Devletleşme Sürecinde Selçuklu Türkiyesi", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Beylikten Devlete Osmanlı", "y24": 2, "y25": 2, "y26": 1},
      {"konu": "Devletleşme Sürecinde Savaşçılar ve Askerler", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Dünya Gücü Osmanlı", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Sultan ve Osmanlı Merkez Teşkilatı", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Değişim Çağında Avrupa ve Osmanlı", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Uluslararası İlişkilerde Denge Stratejisi (1774-1914)", "y24": 2, "y25": 3, "y26": 1},
      {"konu": "Devrimler Çağında Değişen Devlet-Toplum İlişkileri", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Sermaye ve Emek", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya", "y24": 3, "y25": 1, "y26": 2},
      {"konu": "Milli Mücadele", "y24": 3, "y25": 4, "y26": 4},
      {"konu": "Atatürkçülük ve Türk İnkılabı", "y24": 2, "y25": 1, "y26": 1},
      {"konu": "İki Savaş Arasındaki Dönemde Türkiye ve Dünya", "y24": 0, "y25": 2, "y26": 1},
      {"konu": "II. Dünya Savaşı Sürecinde - Sonrasında Türkiye ve Dünya", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "XXI. Yüzyılın Eşiğinde Türkiye ve Dünya", "y24": 0, "y25": 0, "y26": 0}
    ],
    "FELSEFE": [
      {"konu": "Felsefe ve Bilim", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Bilgi Felsefesi", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Varlık Felsefesi", "y24": 0, "y25": 2, "y26": 1},
      {"konu": "Ahlak Felsefesi", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "Sanat Felsefesi", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Din Felsefesi", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "20. Yüzyıl Felsefesi", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Mantığa Giriş", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Klasik Mantık", "y24": 2, "y25": 0, "y26": 2},
      {"konu": "Mantık ve Dil", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Psikoloji Bilimini Tanıyalım", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Psikolojinin Temel Süreçleri", "y24": 0, "y25": 2, "y26": 2},
      {"konu": "Öğrenme Bellek Düşünme", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Ruh Sağlığının Temelleri", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Sosyolojiye Giriş", "y24": 1, "y25": 1, "y26": 0},
      {"konu": "Birey ve Toplum", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Toplumsal Yapı", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Toplumsal Değişme ve Gelişme", "y24": 0, "y25": 1, "y26": 0},
      {"konu": "Toplum ve Kültür", "y24": 1, "y25": 0, "y26": 1},
      {"konu": "Toplumsal Kurumlar", "y24": 0, "y25": 0, "y26": 0}
    ],
    "DİN": [
      {"konu": "İslam’da İbadet", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Allah, İnsan İlişkisi", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "Dünya ve Ahiret", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Kur’an’a Göre Hz. Muhammed", "y24": 2, "y25": 1, "y26": 0},
      {"konu": "Kur’an’da Bazı Kavramlar", "y24": 0, "y25": 1, "y26": 1},
      {"konu": "İnançla İlgili Meseleler", "y24": 1, "y25": 0, "y26": 0},
      {"konu": "Yahudilik ve Hristiyanlık", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "İslam ve Bilim", "y24": 1, "y25": 1, "y26": 1},
      {"konu": "Anadolu’da İslam", "y24": 0, "y25": 0, "y26": 0},
      {"konu": "İslam Düşüncesinde Tasavvufi Yorumlar ve Mezhepler", "y24": 1, "y25": 2, "y26": 0},
      {"konu": "Güncel Dini Meseleler", "y24": 0, "y25": 0, "y26": 1},
      {"konu": "Hint ve Çin Dinleri", "y24": 0, "y25": 0, "y26": 1}
    ]
  },
  "ortaokul_maarif": {
    "5. Sınıf": {
      "FEN BİLİMLERİ": [
        {"tema": "1. ÜNİTE: GÖKYÜZÜNDEKİ KOMŞULARIMIZ VE BİZ", "konu": "Gökyüzündeki Komşumuz: Güneş"},
        {"tema": "1. ÜNİTE: GÖKYÜZÜNDEKİ KOMŞULARIMIZ VE BİZ", "konu": "Gökyüzündeki Komşumuz: Ay"},
        {"tema": "1. ÜNİTE: GÖKYÜZÜNDEKİ KOMŞULARIMIZ VE BİZ", "konu": "Dünya’mız ve Gökyüzündeki Komşularımız"},
        {"tema": "2. ÜNİTE: KUVVETİ TANIYALIM", "konu": "Kuvvet ve Kuvvetin Ölçülmesi"},
        {"tema": "2. ÜNİTE: KUVVETİ TANIYALIM", "konu": "Kütle ve Ağırlık İlişkisi"},
        {"tema": "2. ÜNİTE: KUVVETİ TANIYALIM", "konu": "Sürtünme Kuvveti"},
        {"tema": "3. ÜNİTE: CANLILARIN YAPISINA YOLCULUK", "konu": "Hücre ve Organelleri"},
        {"tema": "3. ÜNİTE: CANLILARIN YAPISINA YOLCULUK", "konu": "Destek ve Hareket Sistemi"},
        {"tema": "4. ÜNİTE: IŞIĞIN DÜNYASI", "konu": "Işığın Yayılması"},
        {"tema": "4. ÜNİTE: IŞIĞIN DÜNYASI", "konu": "Madde ve Işık"},
        {"tema": "4. ÜNİTE: IŞIĞIN DÜNYASI", "konu": "Işığın Yansıması"},
        {"tema": "4. ÜNİTE: IŞIĞIN DÜNYASI", "konu": "Tam Gölge Oluşumu"},
        {"tema": "5. ÜNİTE: MADDENİN DOĞASI", "konu": "Maddenin Hâlleri ve Hâl Değişimleri"},
        {"tema": "5. ÜNİTE: MADDENİN DOĞASI", "konu": "Maddenin Ayırt Edici Özellikleri"},
        {"tema": "5. ÜNİTE: MADDENİN DOĞASI", "konu": "Isı ve Sıcaklık"},
        {"tema": "6. ÜNİTE: CANLILAR DÜNYASININ ÇEŞİTLİLİĞİ", "konu": "Mikroskobik Canlılar ve Mantarlar"},
        {"tema": "6. ÜNİTE: CANLILAR DÜNYASININ ÇEŞİTLİLİĞİ", "konu": "Bitkiler ve Hayvanlar"},
        {"tema": "7. ÜNİTE: ELEKTRİĞİN BASİT YOLU", "konu": "Basit Elektrik Devresi"}
      ],
      "MATEMATİK": [
        {"tema": "1. TEMA: SAYILAR VE NİCELİKLER", "konu": "Doğal Sayılar"},
        {"tema": "1. TEMA: SAYILAR VE NİCELİKLER", "konu": "Doğal Sayılarla İşlemler"},
        {"tema": "1. TEMA: SAYILAR VE NİCELİKLER", "konu": "Kesirler"},
        {"tema": "1. TEMA: SAYILAR VE NİCELİKLER", "konu": "Kesirlerle İşlemler"},
        {"tema": "1. TEMA: SAYILAR VE NİCELİKLER", "konu": "Ondalık Gösterim"},
        {"tema": "1. TEMA: SAYILAR VE NİCELİKLER", "konu": "Yüzdeler"},
        {"tema": "2. TEMA: GEOMETRİ VE ÖLÇME", "konu": "Temel Geometrik Kavramlar ve Çizimler"},
        {"tema": "2. TEMA: GEOMETRİ VE ÖLÇME", "konu": "Üçgenler ve Dörtgenler"},
        {"tema": "2. TEMA: GEOMETRİ VE ÖLÇME", "konu": "Uzunluk ve Zaman Ölçme"},
        {"tema": "2. TEMA: GEOMETRİ VE ÖLÇME", "konu": "Alan Ölçme"},
        {"tema": "2. TEMA: GEOMETRİ VE ÖLÇME", "konu": "Geometrik Cisimler"},
        {"tema": "3. TEMA: VERİ İŞLEME", "konu": "Veri Toplama ve Düzenleme"},
        {"tema": "3. TEMA: VERİ İŞLEME", "konu": "Veri Analizi"}
      ],
      "TÜRKÇE": [
        {"tema": "TÜRKÇE", "konu": "Okuma ve Anlama (Sözcük, Cümle, Paragraf)"},
        {"tema": "TÜRKÇE", "konu": "Yazım Kuralları ve Noktalama İşaretleri"},
        {"tema": "TÜRKÇE", "konu": "Metin Türleri ve Söz Sanatları"},
        {"tema": "TÜRKÇE", "konu": "Dil Bilgisi Temelleri"}
      ],
      "İNGİLİZCE": [
        {"tema": "İNGİLİZCE", "konu": "Unit 1: Hello!"},
        {"tema": "İNGİLİZCE", "konu": "Unit 2: My Town"},
        {"tema": "İNGİLİZCE", "konu": "Unit 3: Games and Hobbies"},
        {"tema": "İNGİLİZCE", "konu": "Unit 4: My Daily Routine"},
        {"tema": "İNGİLİZCE", "konu": "Unit 5: Health"},
        {"tema": "İNGİLİZCE", "konu": "Unit 6: Movies"},
        {"tema": "İNGİLİZCE", "konu": "Unit 7: Party Time"},
        {"tema": "İNGİLİZCE", "konu": "Unit 8: Fitness"}
      ]
    },
    "6. Sınıf": {
      "FEN BİLİMLERİ": [
        {"tema": "1. ÜNİTE: GÜNEŞ SİSTEMİ VE TUTULMALAR", "konu": "Güneş Sistemi"},
        {"tema": "1. ÜNİTE: GÜNEŞ SİSTEMİ VE TUTULMALAR", "konu": "Güneş ve Ay Tutulmaları"},
        {"tema": "2. ÜNİTE: VÜCUDUMUZDAKİ SİSTEMLER", "konu": "Destek ve Hareket Sistemi"},
        {"tema": "2. ÜNİTE: VÜCUDUMUZDAKİ SİSTEMLER", "konu": "Sindirim Sistemi"},
        {"tema": "2. ÜNİTE: VÜCUDUMUZDAKİ SİSTEMLER", "konu": "Dolaşım Sistemi"},
        {"tema": "2. ÜNİTE: VÜCUDUMUZDAKİ SİSTEMLER", "konu": "Solunum Sistemi"},
        {"tema": "2. ÜNİTE: VÜCUDUMUZDAKİ SİSTEMLER", "konu": "Boşaltım Sistemi"},
        {"tema": "3. ÜNİTE: KUVVET VE HAREKET", "konu": "Bileşke Kuvvet"},
        {"tema": "3. ÜNİTE: KUVVET VE HAREKET", "konu": "Sabit Süratli Hareket"},
        {"tema": "4. ÜNİTE: MADDE VE ISI", "konu": "Maddenin Tanecikli Yapısı"},
        {"tema": "4. ÜNİTE: MADDE VE ISI", "konu": "Yoğunluk"},
        {"tema": "4. ÜNİTE: MADDE VE ISI", "konu": "Madde ve Isı"},
        {"tema": "4. ÜNİTE: MADDE VE ISI", "konu": "Yakıtlar"},
        {"tema": "5. ÜNİTE: SES VE ÖZELLİKLERİ", "konu": "Sesin Yayılması ve Yansıması"},
        {"tema": "6. ÜNİTE: VÜCUDUMUZDAKİ SİSTEMLER VE SAĞLIĞI", "konu": "Denetleyici ve Düzenleyici Sistemler"},
        {"tema": "7. ÜNİTE: ELEKTRİĞİN İLETİMİ", "konu": "İletken ve Yalıtkan Maddeler"}
      ],
      "MATEMATİK": [
        {"tema": "1. TEMA: DOĞAL SAYILARLA İŞLEMLER", "konu": "Üslü İfadeler ve İşlem Önceliği"},
        {"tema": "1. TEMA: DOĞAL SAYILARLA İŞLEMLER", "konu": "Çarpanlar ve Katlar"},
        {"tema": "1. TEMA: DOĞAL SAYILARLA İŞLEMLER", "konu": "Kümeler"},
        {"tema": "2. TEMA: TAM SAYILAR VE KESİRLER", "konu": "Tam Sayılar"},
        {"tema": "2. TEMA: TAM SAYILAR VE KESİRLER", "konu": "Kesirlerle İşlemler"},
        {"tema": "3. TEMA: ONDALIK GÖSTERİM VE ORAN", "konu": "Ondalık Gösterim"},
        {"tema": "3. TEMA: ONDALIK GÖSTERİM VE ORAN", "konu": "Oran"},
        {"tema": "4. TEMA: CEBİRSEL İFADELER VE VERİ", "konu": "Cebirsel İfadeler"},
        {"tema": "4. TEMA: CEBİRSEL İFADELER VE VERİ", "konu": "Veri Analizi"},
        {"tema": "5. TEMA: GEOMETRİ VE ÖLÇME", "konu": "Açılar"},
        {"tema": "5. TEMA: GEOMETRİ VE ÖLÇME", "konu": "Alan Ölçme"},
        {"tema": "6. TEMA: GEOMETRİK CİSİMLER VE SIVI ÖLÇME", "konu": "Hacim ve Sıvı Ölçme"}
      ],
      "Sosyal Bilgiler": [
        {"tema": "1. ÜNİTE: BİZ VE DEĞERLERİMİZ", "konu": "Birlikte Yaşamak ve Kültürümüz"},
        {"tema": "2. ÜNİTE: TARİHE YOLCULUK", "konu": "İlk Türk Devletleri ve İslam Medeniyeti"},
        {"tema": "3. ÜNİTE: YERYÜZÜNDE YAŞAM", "konu": "Dünya'nın ve Ülkemizin Coğrafyası"},
        {"tema": "4. ÜNİTE: BİLİM, TEKNOLOJİ VE TOPLUM", "konu": "Bilimin Öncüleri ve Telif Hakları"},
        {"tema": "5. ÜNİTE: ÜRETİM, DAĞITIM VE TÜKETİM", "konu": "Kaynaklarımız ve Ekonomik Faaliyetler"},
        {"tema": "6. ÜNİTE: YÖNETİME KATILIYORUM", "konu": "Demokrasi ve Yönetim Biçimleri"},
        {"tema": "7. ÜNİTE: ULUSLARARASI İLİŞKİLER", "konu": "Türkiye ve Dünya İlişkileri"}
      ],
      "TÜRKÇE": [
        {"tema": "TÜRKÇE", "konu": "Sözcükte, Cümlede ve Paragrafta Anlam"},
        {"tema": "TÜRKÇE", "konu": "İsimler, Sıfatlar ve Zamirler"},
        {"tema": "TÜRKÇE", "konu": "Edat, Bağlaç, Ünlem"},
        {"tema": "TÜRKÇE", "konu": "Yazım Kuralları ve Noktalama"}
      ],
      "İNGİLİZCE": [
        {"tema": "İNGİLİZCE", "konu": "Unit 1: Life"},
        {"tema": "İNGİLİZCE", "konu": "Unit 2: Yummy Breakfast"},
        {"tema": "İNGİLİZCE", "konu": "Unit 3: Downtown"},
        {"tema": "İNGİLİZCE", "konu": "Unit 4: Weather and Emotions"},
        {"tema": "İNGİLİZCE", "konu": "Unit 5: At the Fair"},
        {"tema": "İNGİLİZCE", "konu": "Unit 6: Occupations"}
      ]
    },
    "7. Sınıf": {
      "FEN BİLİMLERİ": [
        {"tema": "1. ÜNİTE: GÜNEŞ SİSTEMİ VE ÖTESİ", "konu": "Uzay Araştırmaları ve Gök Cisimleri"},
        {"tema": "2. ÜNİTE: HÜCRE VE BÖLÜNMELER", "konu": "Hücre, Mitoz ve Mayoz Bölünme"},
        {"tema": "3. ÜNİTE: KUVVET VE ENERJİ", "konu": "Kütle, Ağırlık ve Enerji Dönüşümleri"},
        {"tema": "4. ÜNİTE: SAF MADDE VE KARIŞIMLAR", "konu": "Maddenin Tanecikli Yapısı ve Karışımlar"},
        {"tema": "5. ÜNİTE: IŞIĞIN MADDE İLE ETKİLEŞİMİ", "konu": "Işığın Soğurulması, Aynalar ve Kırılma"},
        {"tema": "6. ÜNİTE: CANLILARDA ÜREME, BÜYÜME VE GELİŞME", "konu": "İnsanda ve Bitki-Hayvanlarda Üreme"},
        {"tema": "7. ÜNİTE: ELEKTRİK DEVRELERİ", "konu": "Ampullerin Bağlanma Şekilleri"}
      ],
      "MATEMATİK": [
        {"tema": "1. TEMA: TAM SAYILARLA İŞLEMLER", "konu": "Tam Sayılarla Toplama, Çıkarma, Çarpma, Bölme"},
        {"tema": "2. TEMA: RASYONEL SAYILAR", "konu": "Rasyonel Sayılar ve Rasyonel Sayılarla İşlemler"},
        {"tema": "3. TEMA: CEBİRSEL İFADELER VE DENKLEMLER", "konu": "Cebirsel İfadeler, Eşitlik ve Denklem"},
        {"tema": "4. TEMA: ORAN VE ORANTI", "konu": "Oran, Orantı ve Yüzdeler"},
        {"tema": "5. TEMA: DOĞRULAR, AÇILAR VE ÇOKGENLER", "konu": "Doğruda Açılar, Çokgenler, Çember ve Daire"},
        {"tema": "6. TEMA: VERİ ANALİZİ VE CİSİMLER", "konu": "Çizgi Grafiği, Aritmetik Ortalama ve Cisimler"}
      ],
      "Sosyal Bilgiler": [
        {"tema": "1. ÜNİTE: İLETİŞİM VE İNSAN İLİŞKİLERİ", "konu": "İletişim ve Medya"},
        {"tema": "2. ÜNİTE: TÜRK TARİHİNDE YOLCULUK", "konu": "Osmanlı Devleti'nin Kuruluşu ve Yükselişi"},
        {"tema": "3. ÜNİTE: ÜLKEMİZDE NÜFUS", "konu": "Nüfus Dağılışı ve Göç"},
        {"tema": "4. ÜNİTE: ZAMAN İÇİNDE BİLİM", "konu": "Aydınlanma ve Bilimsel Gelişmeler"},
        {"tema": "5. ÜNİTE: EKONOMİ VE SOSYAL HAYAT", "konu": "Üretim ve Vakıf Kültürü"},
        {"tema": "6. ÜNİTE: YAŞAYAN DEMOKRASİ", "konu": "Demokrasinin Gelişimi ve Yönetim"}
      ],
      "TÜRKÇE": [
        {"tema": "TÜRKÇE", "konu": "Fiiller (Anlam, Kip, Kişi)"},
        {"tema": "TÜRKÇE", "konu": "Ek Fiil ve Zarflar"},
        {"tema": "TÜRKÇE", "konu": "Söz Öbekleri ve Anlam Bilgisi"},
        {"tema": "TÜRKÇE", "konu": "Yazım, Noktalama ve Metin Tahlili"}
      ],
      "İNGİLİZCE": [
        {"tema": "İNGİLİZCE", "konu": "Unit 1: Appearance and Personality"},
        {"tema": "İNGİLİZCE", "konu": "Unit 2: Sports"},
        {"tema": "İNGİLİZCE", "konu": "Unit 3: Biographies"},
        {"tema": "İNGİLİZCE", "konu": "Unit 4: Wild Animals"},
        {"tema": "İNGİLİZCE", "konu": "Unit 5: Television"}
      ]
    },
    "8. Sınıf": {
      "FEN BİLİMLERİ": [
        {"tema": "1. ÜNİTE: MEVSİMLER VE İKLİM", "konu": "Mevsimlerin Oluşumu ve İklim-Hava Hareketleri"},
        {"tema": "2. ÜNİTE: DNA VE GENETİK KOD", "konu": "DNA, Kalıtım, Mutasyon, Modifikasyon, Biyoteknoloji"},
        {"tema": "3. ÜNİTE: BASINÇ", "konu": "Katı, Sıvı ve Gaz Basıncı"},
        {"tema": "4. ÜNİTE: MADDE VE ENDÜSTRİ", "konu": "Periyodik Sistem, Kimyasal Tepkimeler, Asit-Baz"},
        {"tema": "5. ÜNİTE: BASİT MAKİNELER", "konu": "Makaralar, Kaldıraçlar, Eğik Düzlem, Dişliler"},
        {"tema": "6. ÜNİTE: ENERJİ DÖNÜŞÜMLERİ VE ÇEVRE", "konu": "Besin Zinciri, Fotosentez, Solunum, Madde Döngüleri"},
        {"tema": "7. ÜNİTE: ELEKTRİK YÜKLERİ", "konu": "Elektriklenme ve Elektrik Enerjisi"}
      ],
      "MATEMATİK": [
        {"tema": "1. TEMA: SAYILAR VE İŞLEMLER", "konu": "Çarpanlar ve Katlar (EBOB-EKOK)"},
        {"tema": "1. TEMA: SAYILAR VE İŞLEMLER", "konu": "Üslü İfadeler"},
        {"tema": "1. TEMA: SAYILAR VE İŞLEMLER", "konu": "Kareköklü İfadeler"},
        {"tema": "2. TEMA: VERİ İŞLEME VE OLASILIK", "konu": "Veri Analizi"},
        {"tema": "2. TEMA: VERİ İŞLEME VE OLASILIK", "konu": "Basit Olayların Olma Olasılığı"},
        {"tema": "3. TEMA: CEBİR VE DENKLEMLER", "konu": "Cebirsel İfadeler ve Özdeşlikler"},
        {"tema": "3. TEMA: CEBİR VE DENKLEMLER", "konu": "Doğrusal Denklemler ve Eğim"},
        {"tema": "3. TEMA: CEBİR VE DENKLEMLER", "konu": "Eşitsizlikler"},
        {"tema": "4. TEMA: GEOMETRİ VE ÖLÇME", "konu": "Üçgenler ve Eşlik-Benzerlik"},
        {"tema": "4. TEMA: GEOMETRİ VE ÖLÇME", "konu": "Dönüşüm Geometrisi ve Geometrik Cisimler"}
      ],
      "TC INKILAP TARİHİ VE ATATÜRKÇÜLÜK": [
        {"tema": "1. ÜNİTE: BİR KAHRAMAN DOĞUYOR", "konu": "Mustafa Kemal'in Hayatı ve Askeri Başarıları"},
        {"tema": "2. ÜNİTE: MİLLÎ UYANIŞ", "konu": "I. Dünya Savaşı, Cemiyetler, Genelgeler ve Kongreler"},
        {"tema": "3. ÜNİTE: YA İSTİKLAL YA ÖLÜM", "konu": "Milli Mücadele Cepheleri ve Lozan Barış Antlaşması"},
        {"tema": "4. ÜNİTE: ATATÜRKÇÜLÜK VE ÇAĞDAŞLAŞAN TÜRKİYE", "konu": "Atatürk İlkeleri ve İnkılaplar"},
        {"tema": "5. ÜNİTE: DIŞ POLİTİKA VE VEFAT", "konu": "Türk Dış Politikası ve Atatürk'ün Vefatı"}
      ],
      "TÜRKÇE": [
        {"tema": "TÜRKÇE", "konu": "Fiilimsiler"},
        {"tema": "TÜRKÇE", "konu": "Cümlenin Ögeleri"},
        {"tema": "TÜRKÇE", "konu": "Fiilde Çatı ve Cümle Türleri"},
        {"tema": "TÜRKÇE", "konu": "Paragrafta Anlam ve Sözel Mantık"}
      ],
      "İNGİLİZCE": [
        {"tema": "İNGİLİZCE", "konu": "Unit 1: Friendship"},
        {"tema": "İNGİLİZCE", "konu": "Unit 2: Teen Life"},
        {"tema": "İNGİLİZCE", "konu": "Unit 3: In the Kitchen"},
        {"tema": "İNGİLİZCE", "konu": "Unit 4: On the Phone"},
        {"tema": "İNGİLİZCE", "konu": "Unit 5: The Internet"}
      ]
    }
  },
  "lise_maarif": {
    "9. Sınıf": {
      "Matematik": [
        {"tema_no": "1", "tema": "Sayı Kümeleri ve Sayı Sistemleri", "kazanim": "Doğal sayılar, tam sayılar ve rasyonel sayı kümeleri"},
        {"tema_no": "2", "tema": "Bölünebilme ve Modüler Sistemler", "kazanim": "Bölünebilme kuralları ve periyodik durumlar"},
        {"tema_no": "3", "tema": "Denklemler ve Eşitsizlikler", "kazanim": "Birinci dereceden bir ve iki bilinmeyenli denklemler"},
        {"tema_no": "4", "tema": "Üslü ve Köklü İfadeler", "kazanim": "Üslü ve köklü gösterimlerle modellemeler"},
        {"tema_no": "5", "tema": "Fonksiyonel İlişkiler", "kazanim": "Fonksiyon kavramı ve grafiksel yorumlama"},
        {"tema_no": "6", "tema": "Geometrik Şekiller ve Üçgenler", "kazanim": "Üçgende açılar, kenar bağıntıları ve eşlik-benzerlik"},
        {"tema_no": "7", "tema": "Veri Analitiği ve İstatistik", "kazanim": "Merkezi eğilim ve yayılım ölçüleri"}
      ],
      "Fizik": [
        {"tema_no": "1", "tema": "Fizik Bilimi ve Nicelikler", "kazanim": "Fiziksel niceliklerin sınıflandırılması ve modelleme"},
        {"tema_no": "2", "tema": "Madde ve Mekanik Özellikler", "kazanim": "Özkütle, adezyon, kohezyon ve yüzey gerilimi"},
        {"tema_no": "3", "tema": "Hareket ve Dinamik", "kazanim": "Bir boyutta sabit ivmeli hareket ve Newton yasaları"},
        {"tema_no": "4", "tema": "Enerji ve Dönüşümler", "kazanim": "İş, güç, mekanik enerji ve enerjinin korunumu"}
      ],
      "Kimya": [
        {"tema_no": "1", "tema": "Kimya Disiplini ve Maddenin Halleri", "kazanim": "Kimya biliminin gelişimi ve güvenlik sembolleri"},
        {"tema_no": "2", "tema": "Atom Modelleri ve Periyodik Sistem", "kazanim": "Modern atom teorisi temelleri ve periyodik özellikler"},
        {"tema_no": "3", "tema": "Kimyasal Türler Arası Etkileşimler", "kazanim": "Güçlü ve zayıf etkileşimlerin doğası"}
      ],
      "Biyoloji": [
        {"tema_no": "1", "tema": "Yaşamın Temelleri", "kazanim": "Canlıların ortak özellikleri ve inorganik-organik bileşikler"},
        {"tema_no": "2", "tema": "Hücre ve Organizasyon", "kazanim": "Hücresel yapılar, organeller ve madde geçişleri"},
        {"tema_no": "3", "tema": "Canlılar Çeşitliliği", "kazanim": "Sınıflandırma basamakları ve canlı alemleri"}
      ],
      "Türk Dili ve Edebiyatı": [
        {"tema_no": "1", "tema": "SÖZÜN İNCELİĞİ", "kazanim": "Edebiyatın doğası, estetik değer ve güzel sanatlarla ilişkisi"},
        {"tema_no": "2", "tema": "ANLAM ARAYIŞI", "kazanim": "Edebi eserlerde tema, ana duygu ve olay örgüsü analizi"},
        {"tema_no": "3", "tema": "ANLAMIN YAPI TAŞLARI", "kazanim": "Metinlerin yapı unsurları (olay, kişi, zaman, mekân)"},
        {"tema_no": "4", "tema": "DİLİN ZENGİNLİĞİ", "kazanim": "Türkçenin söz varlığı ve dil bilgisi unsurları"}
      ],
      "Tarih": [
        {"tema_no": "1", "tema": "GEÇMİŞİN İNŞA SÜRECİNDE TARİH", "kazanim": "Tarih öğrenmenin faydaları ve araştırma yöntemleri"},
        {"tema_no": "2", "tema": "ESKİ ÇAĞ MEDENİYETLERİ", "kazanim": "Tarım Devrimi, ilk şehir devletleri ve hukuk sistemleri"},
        {"tema_no": "3", "tema": "ORTA ÇAĞ'DA DÜNYA", "kazanim": "Orta Çağ medeniyetleri ve askeri-siyasi yapılar"}
      ],
      "Coğrafya": [
        {"tema_no": "1", "tema": "DOĞAL SİSTEMLER", "kazanim": "Doğa ve insan etkileşimi, coğrafi koordinat sistemi"},
        {"tema_no": "2", "tema": "DÜNYA'NIN YAPISI VE HAREKETLERİ", "kazanim": "Yerel saat, iklim kuşakları ve harita projeksiyonları"}
      ],
      "İngilizce": [
        {"tema_no": "1", "tema": "Studying Abroad", "kazanim": "Meeting people, introducing yourself and countries"},
        {"tema_no": "2", "tema": "My Environment", "kazanim": "Describing locations, directions and daily routines"}
      ]
    },
    "10. Sınıf": {
      "Matematik": [
        {"tema_no": "1", "tema": "Sayma ve Olasılık", "kazanim": "Permütasyon, kombinasyon, binom açılımı ve koşullu olasılık"},
        {"tema_no": "2", "tema": "Fonksiyonlar ve Uygulamaları", "kazanim": "Fonksiyonlarda işlemler, bileşke ve ters fonksiyon"},
        {"tema_no": "3", "tema": "Polinomlar ve Çarpanlara Ayırma", "kazanim": "Polinom kavramı ve çarpanlara ayırma yöntemleri"},
        {"tema_no": "4", "tema": "İkinci Dereceden Denklemler", "kazanim": "Karmaşık sayılar ve ikinci derece denklemlerin çözümü"},
        {"tema_no": "5", "tema": "Çokgenler ve Dörtgenler", "kazanim": "Özel dörtgenlerin alan ve kenar bağıntıları"},
        {"tema_no": "6", "tema": "Katı Cisimler", "kazanim": "Prizma ve piramitlerin yüzey alanları ve hacimleri"}
      ],
      "Fizik": [
        {"tema_no": "1", "tema": "Elektrik ve Manyetizma", "kazanim": "Elektrik akımı, potansiyel farkı, direnç ve manyetik alan"},
        {"tema_no": "2", "tema": "Basınç ve Kaldırma Kuvveti", "kazanim": "Akışkanlar mekaniği ve Bernoulli ilkesi"},
        {"tema_no": "3", "tema": "Dalgalar", "kazanim": "Yay, su, ses ve deprem dalgalarının özellikleri"},
        {"tema_no": "4", "tema": "Optik", "kazanim": "Aydınlanma, gölge, yansıma, kırılma, mercekler ve renkler"}
      ],
      "Kimya": [
        {"tema_no": "1", "tema": "Kimyanın Temel Kanunları ve Hesaplamalar", "kazanim": "Kütlenin korunumu, sabit oranlar ve mol kavramı"},
        {"tema_no": "2", "tema": "Karışımlar", "kazanim": "Homojen ve heterojen karışımlar, çözünürlük faktörleri"},
        {"tema_no": "3", "tema": "Asitler, Bazlar ve Tuzlar", "kazanim": "pH kavramı, nötralleşme ve tuzların kullanım alanları"}
      ],
      "Biyoloji": [
        {"tema_no": "1", "tema": "Hücre Bölünmeleri", "kazanim": "Mitoz, mayoz ve eşeysiz-eşeyli üreme çeşitleri"},
        {"tema_no": "2", "tema": "Kalıtımın Genel İlkeleri", "kazanim": "Mendel genetiği, kan grupları ve soyağaçları"},
        {"tema_no": "3", "tema": "Ekosistem Ekolojisi", "kazanim": "Madde döngüleri ve güncel çevre sorunları"}
      ],
      "Türk Dili ve Edebiyatı": [
        {"tema_no": "1", "tema": "Giriş ve Metin Tahlilleri", "kazanim": "Edebiyatın tarih ve din ile ilişkisi, Türkçenin dönemleri"},
        {"tema_no": "2", "tema": "Hikâye ve Roman", "kazanim": "Dede Korkut'tan günümüze anlatı türlerinin gelişimi"}
      ],
      "Tarih": [
        {"tema_no": "1", "tema": "TÜRKLERİN ANADOLU'DAKİ İLK YERLEŞİMLERİ", "kazanim": "Anadolu Selçukluları ve beylikler dönemi"},
        {"tema_no": "2", "tema": "BEYLİKTEN DEVLETE OSMANLI", "kazanim": "Osmanlı Devleti'nin kuruluş süreci ve fetih siyaseti"}
      ],
      "Coğrafya": [
        {"tema_no": "1", "tema": "DOĞAL SİSTEMLER", "kazanim": "Dünya'nın tektonik yapısı, iç ve dış kuvvetler"},
        {"tema_no": "2", "tema": "BEŞERÎ SİSTEMLER", "kazanim": "Nüfus dinamikleri, piramitler ve göç hareketleri"}
      ],
      "Felsefe": [
        {"tema_no": "1", "tema": "Felsefeyi Tanıma", "kazanim": "Felsefi düşüncenin özellikleri ve problem alanları"},
        {"tema_no": "2", "tema": "Felsefe ile Düşünme", "kazanim": "Akıl yürütme yöntemleri, argüman analizi ve dil"}
      ],
      "İngilizce": [
        {"tema_no": "1", "tema": "School Life", "kazanim": "Talking about school habits, future plans and routines"}
      ]
    },
    "11. Sınıf": {
      "Matematik": [
        {"tema_no": "1", "tema": "Trigonometri", "kazanim": "Yönlü açılar, trigonometrik fonksiyonlar, teorem ve grafikler"},
        {"tema_no": "2", "tema": "Analitik Geometri", "kazanim": "Noktanın ve doğrunun analitiği, doğru demetleri"},
        {"tema_no": "3", "tema": "Fonksiyonlarda Uygulamalar", "kazanim": "İkinci derece fonksiyonlar (parabol) ve dönüşümler"},
        {"tema_no": "4", "tema": "Denklem ve Eşitsizlik Sistemleri", "kazanim": "İkinci dereceden iki bilinmeyenli denklem sistemleri"},
        {"tema_no": "5", "tema": "Çember ve Daire", "kazanim": "Çemberde açılar, teğet-kiriş özellikleri ve dairede alan"},
        {"tema_no": "6", "tema": "Uzay Geometri ve Olasılık", "kazanim": "Küre, koni ve koşullu olasılık hesaplamaları"}
      ],
      "Fizik": [
        {"tema_no": "1", "tema": "Kuvvet ve Hareket", "kazanim": "Vektörler, bağıl hareket, Newton yasaları, atışlar ve itme-momentum"},
        {"tema_no": "2", "tema": "Tork ve Denge", "kazanim": "Kütle merkezi, basit makineler ve denge şartları"},
        {"tema_no": "3", "tema": "Elektrik ve Manyetizma", "kazanim": "Elektriksel kuvvet, potansiyel, sığaçlar, manyetik kuvvet ve indüksiyon"}
      ],
      "Kimya": [
        {"tema_no": "1", "tema": "Modern Atom Teorisi", "kazanim": "Kuantum sayıları, orbital türleri ve periyodik sistem"},
        {"tema_no": "2", "tema": "Gazlar", "kazanim": "İdeal gaz yasaları, kinetik teori ve gerçek gazlar"},
        {"tema_no": "3", "tema": "Sıvı Çözeltiler ve Çözünürlük", "kazanim": "Derişim birimleri, koligatif özellikler ve çözünürlük dengesi"},
        {"tema_no": "4", "tema": "Kimyasal Tepkimelerde Enerji ve Hız", "kazanim": "Entalpi hesaplamaları, çarpışma teorisi ve tepkime hızları"},
        {"tema_no": "5", "tema": "Kimyasal Denge", "kazanim": "Dengeyi etkileyen faktörler, asit-baz dengesi ve tampon çözeltiler"}
      ],
      "Biyoloji": [
        {"tema_no": "1", "tema": "İnsan Fizyolojisi", "kazanim": "Denetleyici, destek, sindirim, dolaşım, solunum ve boşaltım sistemleri"},
        {"tema_no": "2", "tema": "Komünite ve Popülasyon Ekolojisi", "kazanim": "Komünite dinamikleri ve popülasyon büyüme modelleri"}
      ],
      "Türk Dili ve Edebiyatı": [
        {"tema_no": "1", "tema": "Tanzimat'tan Cumhuriyet'e Edebiyat", "kazanim": "Tanzimat, Servetifünun ve Millî Edebiyat dönemleri"}
      ],
      "Tarih": [
        {"tema_no": "1", "tema": "DEĞİŞEN DÜNYA DENGELERİ", "kazanim": "17. ve 18. yüzyılda Osmanlı siyaseti ve modern Avrupa"}
      ],
      "Coğrafya": [
        {"tema_no": "1", "tema": "EKOSİSTEM VE MADDE DÖNGÜLERİ", "kazanim": "Biyoçeşitlilik, su ekosistemleri ve çevre politikaları"}
      ],
      "Felsefe": [
        {"tema_no": "1", "tema": "Felsefe Tarihi", "kazanim": "İlk Çağ'dan 20. yüzyıla kadar felsefi akımlar ve filozoflar"}
      ],
      "İngilizce": [
        {"tema_no": "1", "tema": "Future Jobs", "kazanim": "Discussing emerging careers, skills and abilities"}
      ]
    },
    "12. Sınıf (MAARİF)": {
      "Matematik": [
        {"tema_no": "1", "tema": "Üstel ve Logaritmik Fonksiyonlar", "kazanim": "Logaritma özellikleri ve üstel fonksiyon modelleri"},
        {"tema_no": "2", "tema": "Diziler", "kazanim": "Aritmetik ve geometrik dizilerin özellikleri"},
        {"tema_no": "3", "tema": "Trigonometrik Denklemler", "kazanim": "Toplam-fark, yarım açı formülleri ve trigonometrik denklemler"},
        {"tema_no": "4", "tema": "Türev ve Uygulamaları", "kazanim": "Limit, süreklilik, türev alma kuralları ve maksimum-minimum problemleri"},
        {"tema_no": "5", "tema": "İntegral ve Uygulamaları", "kazanim": "Belirsiz ve belirli integral, eğri altında kalan alan hesabı"},
        {"tema_no": "6", "tema": "Analitik Geometride Çember", "kazanim": "Çemberin analitik denklemi ve teğet doğruları"}
      ],
      "Fizik": [
        {"tema_no": "1", "tema": "Çembersel Hareket", "kazanim": "Düzgün çembersel hareket, dönme kinetik enerjisi ve açısal momentum"},
        {"tema_no": "2", "tema": "Basit Harmonik Hareket", "kazanim": "Yay ve sarkaç harmonik salınımları"},
        {"tema_no": "3", "tema": "Dalga Mekaniği", "kazanim": "Kırınım, girişim ve Doppler olayı"},
        {"tema_no": "4", "tema": "Atom Fiziği ve Radyoaktivite", "kazanim": "Bohr atom modeli, radyoaktif bozunmalar ve nükleer enerji"},
        {"tema_no": "5", "tema": "Modern Fizik ve Teknolojisi", "kazanim": "Özel görelilik, fotoelektrik, Compton olayı ve yarı iletkenler"}
      ],
      "Kimya": [
        {"tema_no": "1", "tema": "Kimya ve Elektrik", "kazanim": "Redoks tepkimeleri, piller, Nernst eşitliği ve elektroliz"},
        {"tema_no": "2", "tema": "Karbon Kimyasına Giriş", "kazanim": "Hibritleşme, molekül geometrisi ve rezonans"},
        {"tema_no": "3", "tema": "Organik Bileşikler", "kazanim": "Hidrokarbonlar, fonksiyonel gruplar ve organik reaksiyonlar"}
      ],
      "Biyoloji": [
        {"tema_no": "1", "tema": "Genden Proteine", "kazanim": "Nükleik asitler, replikasyon, transkripsiyon ve translasyon"},
        {"tema_no": "2", "tema": "Hücresel Enerji Dönüşümleri", "kazanim": "Fotosentez, kemosentez, glikoliz ve hücresel solunum"},
        {"tema_no": "3", "tema": "Bitki Biyolojisi", "kazanim": "Bitkisel dokular, organlar, taşıma ve bitkilerde üreme"}
      ],
      "Türk Dili ve Edebiyatı": [
        {"tema_no": "1", "tema": "Cumhuriyet Dönemi Edebiyatı", "kazanim": "Cumhuriyet dönemi şiir, roman, hikâye ve tiyatro akımları"}
      ],
      "Tarih": [
        {"tema_no": "1", "tema": "20. YÜZYIL BAŞLARINDA DÜNYA VE TÜRKİYE", "kazanim": "Milli Mücadele, inkılaplar ve II. Dünya Savaşı süreci"}
      ],
      "Coğrafya": [
        {"tema_no": "1", "tema": "KÜRESEL TİCARET VE BÖLGELER", "kazanim": "Türkiye'nin bölgesel kalkınma projeleri ve jeopolitik konumu"}
      ],
      "İngilizce": [
        {"tema_no": "1", "tema": "Music and Culture", "kazanim": "Expressing cultural preferences, facts and opinions"}
      ]
    }
  }
};