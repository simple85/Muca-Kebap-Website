export type Lang = "de" | "en" | "tr";

const de = {
  /* ── Navigation ── */
  nav: {
    home: "Home",
    about: "Über Uns",
    contact: "Kontakt",
  },

  /* ── Homepage hero ── */
  hero: {
    tagline: "Frisch. Halal. Hausgemacht.",
    cta: "Jetzt besuchen",
  },

  /* ── Homepage features ── */
  features: {
    bread: {
      title: "Unser Muca-Hausbrot",
      desc: "Unser Brot wird jeden Tag frisch und von Hand in unserer Küche gebacken – für den unverwechselbaren Muca-Geschmack.",
    },
    meat: {
      title: "Frisch vom Spieß",
      desc: "Unser Fleisch wird täglich frisch am Spieß zubereitet – 100 % Halal und von höchster Qualität.",
    },
    hygiene: {
      title: "Einwandfreie Hygiene",
      desc: "Sauberkeit ist für uns selbstverständlich. Wir setzen höchste Hygienestandards für Ihre Sicherheit.",
    },
  },

  /* ── Instagram section ── */
  instagram: {
    title: "Folge uns auf Instagram",
    view: "Ansehen",
    muteOn: "Ton einschalten",
    muteOff: "Ton ausschalten",
    viewOnIg: "Auf Instagram ansehen",
  },

  /* ── Reviews ── */
  reviews: {
    title: "Google Bewertungen",
    subtitle: "5.0 Sterne basierend auf Google-Bewertungen",
    badge: "Google Review",
    items: [
      { name: "Mehmet A.", text: "Bester Döner in Kreuzberg! Das Hausbrot ist unglaublich frisch und das Fleisch saftig. Absolute Empfehlung!", timeAgo: "vor 2 Wochen" },
      { name: "Sarah L.", text: "Endlich ein Döner-Laden, der wirklich auf Qualität setzt. Man schmeckt, dass alles frisch zubereitet wird. Top!", timeAgo: "vor 1 Monat" },
      { name: "Thomas K.", text: "Super freundliches Personal und das Essen ist einfach hervorragend. Das hausgemachte Brot macht den Unterschied!", timeAgo: "vor 3 Wochen" },
      { name: "Ayse D.", text: "Halal und frisch – genau was ich gesucht habe. Die Portionen sind großzügig und der Geschmack unschlagbar.", timeAgo: "vor 1 Woche" },
      { name: "Daniel R.", text: "Bin extra aus Mitte hierher gefahren und es hat sich absolut gelohnt. Der Döner ist der Hammer!", timeAgo: "vor 2 Monaten" },
      { name: "Fatma Y.", text: "Sauber, lecker und freundlich. Was will man mehr? Komme jede Woche hierher. Mein Lieblingsimbiss in Berlin!", timeAgo: "vor 3 Wochen" },
      { name: "Marco P.", text: "Ich war skeptisch, aber nach dem ersten Biss war ich überzeugt. Frisches Fleisch, knuspriges Brot – perfekt!", timeAgo: "vor 1 Monat" },
      { name: "Leila B.", text: "Das Beste am Oranienplatz! Alles wird vor deinen Augen frisch zubereitet. Hygiene ist hier wirklich top.", timeAgo: "vor 2 Wochen" },
      { name: "Stefan H.", text: "Habe viele Döner in Berlin probiert, aber Muca ist wirklich etwas Besonderes. Das Hausbrot ist ein Traum!", timeAgo: "vor 1 Woche" },
    ],
  },

  /* ── Shared CTA ── */
  cta: {
    hungry: "Hunger?",
    solve: "Wir können das lösen!",
    directions: "Wegbeschreibung",
  },

  /* ── Über Uns page ── */
  about: {
    title: "Über Uns",
    subtitle: "Die Geschichte hinter Muca Kebap",
    passion: {
      title: "Unsere Leidenschaft für Qualität",
      p1: "Muca Kebap steht für eine klare Überzeugung: Gutes Essen beginnt mit erstklassigen Zutaten. Mitten in Berlin-Kreuzberg, am Oranienplatz, haben wir einen Ort geschaffen, an dem Tradition auf höchste Qualitätsansprüche trifft.",
      p2: "Jeder Döner, den wir servieren, erzählt von unserer Hingabe an authentischen Geschmack und handwerklicher Sorgfalt. Wir glauben, dass man den Unterschied schmecken kann – und unsere Gäste bestätigen das jeden Tag aufs Neue.",
    },
    pillars: {
      title: "Wofür wir stehen",
      halal: {
        title: "100 % Halal",
        desc: "Alle unsere Fleischprodukte stammen aus zertifizierten Halal-Quellen. Wir achten streng darauf, dass jede Zutat unseren hohen Standards entspricht. Vertrauen und Transparenz sind uns wichtig.",
      },
      hygiene: {
        title: "Höchste Hygiene",
        desc: "Sauberkeit ist bei uns keine Option, sondern Grundvoraussetzung. Unsere Küche wird täglich gründlich gereinigt und wir übertreffen die gesetzlichen Hygienevorschriften bei Weitem.",
      },
      fresh: {
        title: "Täglich frisch",
        desc: "Jeden Morgen beginnt unser Tag mit der Zubereitung frischer Zutaten. Unser hausgemachtes Brot wird täglich gebacken und das Dönerfleisch frisch am Spieß aufgesteckt.",
      },
    },
    selection: {
      title: "Von der Auswahl bis zum Teller",
      p1: "Von der Auswahl der frischesten Zutaten bis hin zur liebevollen Zubereitung: Bei Muca Kebap ist alles darauf ausgerichtet, Ihnen ein unvergessliches Geschmackserlebnis zu bieten.",
      p2: "Nichts kommt von gestern – bei uns zählt nur die Frische des heutigen Tages. Das Ergebnis? Ein Döner, der nicht nur satt macht, sondern glücklich.",
    },
    ctaTitle: "Überzeugen Sie sich selbst",
    ctaSubtitle: "Besuchen Sie uns am Oranienplatz und erleben Sie den Unterschied.",
  },

  /* ── Kontakt page ── */
  contact: {
    title: "Kontakt",
    subtitle: "Wir freuen uns auf Ihren Besuch",
    visitUs: "Besuchen Sie uns",
    address: "Adresse",
    phone: "Telefon",
    instagram: "Instagram",
    findUs: "So finden Sie uns",
    openMaps: "In Google Maps öffnen",
    writeUs: "Schreiben Sie uns",
    writeUsDesc: "Sie möchten unser Team kontaktieren, z. B. zu Franchise-Anfragen oder anderen Anliegen rund um unser Restaurant? Schreiben Sie uns eine Nachricht und wir melden uns bei Ihnen!",
  },

  /* ── Contact form ── */
  form: {
    name: "Name",
    phone: "Telefonnummer",
    email: "E-Mail",
    optional: "(optional)",
    message: "Nachricht",
    namePh: "Ihr Name",
    phonePh: "Ihre Telefonnummer",
    emailPh: "Ihre E-Mail-Adresse",
    messagePh: "Ihre Nachricht an uns…",
    submit: "Nachricht senden",
    thankTitle: "Vielen Dank!",
    thankDesc: "Ihre Nachricht wurde gesendet. Wir melden uns so bald wie möglich bei Ihnen.",
  },

  /* ── Footer ── */
  footer: {
    tagline: "Frisch. Halal. Hausgemacht.",
    navigation: "Navigation",
    contact: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
  },
};

/* ── English ── */
const en: typeof de = {
  nav: {
    home: "Home",
    about: "About Us",
    contact: "Contact",
  },
  hero: {
    tagline: "Fresh. Halal. Homemade.",
    cta: "Visit now",
  },
  features: {
    bread: {
      title: "Our Muca House Bread",
      desc: "Our bread is baked fresh by hand in our kitchen every day – for the unmistakable Muca taste.",
    },
    meat: {
      title: "Fresh from the Spit",
      desc: "Our meat is freshly prepared on the spit every day – 100 % halal and of the highest quality.",
    },
    hygiene: {
      title: "Impeccable Hygiene",
      desc: "Cleanliness is a given for us. We maintain the highest hygiene standards for your safety.",
    },
  },
  instagram: {
    title: "Follow us on Instagram",
    view: "View",
    muteOn: "Unmute",
    muteOff: "Mute",
    viewOnIg: "View on Instagram",
  },
  reviews: {
    title: "Google Reviews",
    subtitle: "5.0 stars based on Google reviews",
    badge: "Google Review",
    items: [
      { name: "Mehmet A.", text: "Best döner in Kreuzberg! The house bread is incredibly fresh and the meat is juicy. Absolutely recommended!", timeAgo: "2 weeks ago" },
      { name: "Sarah L.", text: "Finally a döner place that truly focuses on quality. You can taste that everything is freshly prepared. Top!", timeAgo: "1 month ago" },
      { name: "Thomas K.", text: "Super friendly staff and the food is simply outstanding. The homemade bread makes the difference!", timeAgo: "3 weeks ago" },
      { name: "Ayse D.", text: "Halal and fresh – exactly what I was looking for. Generous portions and unbeatable taste.", timeAgo: "1 week ago" },
      { name: "Daniel R.", text: "Came all the way from Mitte and it was absolutely worth it. The döner is incredible!", timeAgo: "2 months ago" },
      { name: "Fatma Y.", text: "Clean, delicious and friendly. What more could you want? I come here every week. My favourite in Berlin!", timeAgo: "3 weeks ago" },
      { name: "Marco P.", text: "I was sceptical, but after the first bite I was convinced. Fresh meat, crispy bread – perfect!", timeAgo: "1 month ago" },
      { name: "Leila B.", text: "The best at Oranienplatz! Everything is freshly prepared right before your eyes. Hygiene is truly top here.", timeAgo: "2 weeks ago" },
      { name: "Stefan H.", text: "Tried many döners in Berlin, but Muca is really something special. The house bread is a dream!", timeAgo: "1 week ago" },
    ],
  },
  cta: {
    hungry: "Hungry?",
    solve: "We can fix that!",
    directions: "Get directions",
  },
  about: {
    title: "About Us",
    subtitle: "The story behind Muca Kebap",
    passion: {
      title: "Our Passion for Quality",
      p1: "Muca Kebap stands for a clear conviction: great food starts with first-class ingredients. In the heart of Berlin-Kreuzberg, at Oranienplatz, we have created a place where tradition meets the highest quality standards.",
      p2: "Every döner we serve tells the story of our dedication to authentic flavour and craftsmanship. We believe you can taste the difference – and our guests confirm it every single day.",
    },
    pillars: {
      title: "What We Stand For",
      halal: {
        title: "100 % Halal",
        desc: "All our meat products come from certified halal sources. We strictly ensure that every ingredient meets our high standards. Trust and transparency are important to us.",
      },
      hygiene: {
        title: "Highest Hygiene",
        desc: "Cleanliness is not an option for us – it is a prerequisite. Our kitchen is thoroughly cleaned every day and we far exceed the legal hygiene regulations.",
      },
      fresh: {
        title: "Fresh Every Day",
        desc: "Every morning our day begins with preparing fresh ingredients. Our homemade bread is baked daily and the döner meat is freshly stacked on the spit.",
      },
    },
    selection: {
      title: "From Selection to Plate",
      p1: "From selecting the freshest ingredients to the loving preparation: at Muca Kebap, everything is designed to give you an unforgettable taste experience.",
      p2: "Nothing comes from yesterday – only today’s freshness counts. The result? A döner that doesn’t just fill you up, but makes you happy.",
    },
    ctaTitle: "See for Yourself",
    ctaSubtitle: "Visit us at Oranienplatz and experience the difference.",
  },
  contact: {
    title: "Contact",
    subtitle: "We look forward to your visit",
    visitUs: "Visit Us",
    address: "Address",
    phone: "Phone",
    instagram: "Instagram",
    findUs: "How to Find Us",
    openMaps: "Open in Google Maps",
    writeUs: "Write to Us",
    writeUsDesc: "Would you like to contact our team, e.g. about franchise enquiries or other matters regarding our restaurant? Send us a message and we will get back to you!",
  },
  form: {
    name: "Name",
    phone: "Phone number",
    email: "Email",
    optional: "(optional)",
    message: "Message",
    namePh: "Your name",
    phonePh: "Your phone number",
    emailPh: "Your email address",
    messagePh: "Your message to us…",
    submit: "Send message",
    thankTitle: "Thank you!",
    thankDesc: "Your message has been sent. We will get back to you as soon as possible.",
  },
  footer: {
    tagline: "Fresh. Halal. Homemade.",
    navigation: "Navigation",
    contact: "Contact",
    rights: "All rights reserved.",
  },
};

/* ── Turkish ── */
const tr: typeof de = {
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    contact: "İletişim",
  },
  hero: {
    tagline: "Taze. Helal. Ev Yapımı.",
    cta: "Hemen ziyaret et",
  },
  features: {
    bread: {
      title: "Muca Ev Ekmeğimiz",
      desc: "Ekmeğimiz her gün mutfağımızda el ile taze pişirilir – eşsiz Muca lezzeti için.",
    },
    meat: {
      title: "Şişten Taze",
      desc: "Etlerimiz her gün şişte taze hazırlanır – % 100 helal ve en yüksek kalitede.",
    },
    hygiene: {
      title: "Kusursuz Hijyen",
      desc: "Temizlik bizim için vazgeçilmezdir. Güvenliğiniz için en yüksek hijyen standartlarını uyguluyoruz.",
    },
  },
  instagram: {
    title: "Bizi Instagram'da takip edin",
    view: "İzle",
    muteOn: "Sesi aç",
    muteOff: "Sesi kapat",
    viewOnIg: "Instagram'da görüntüle",
  },
  reviews: {
    title: "Google Yorumları",
    subtitle: "Google yorumlarına göre 5.0 yıldız",
    badge: "Google Yorum",
    items: [
      { name: "Mehmet A.", text: "Kreuzberg'in en iyi döneri! Ev ekmeği inanılmaz taze ve et çok lezzetli. Kesinlikle tavsiye ederim!", timeAgo: "2 hafta önce" },
      { name: "Sarah L.", text: "Sonunda gerçekten kaliteye önem veren bir dönerci. Her şeyin taze hazırlandığı hissediliyor. Harika!", timeAgo: "1 ay önce" },
      { name: "Thomas K.", text: "Çok güler yüzlü personel ve yemekler mükemmel. Ev yapımı ekmek farkı yaratıyor!", timeAgo: "3 hafta önce" },
      { name: "Ayse D.", text: "Helal ve taze – tam aradığım şey. Porsiyonlar bol ve lezzet rakipsiz.", timeAgo: "1 hafta önce" },
      { name: "Daniel R.", text: "Mitte'den buraya kadar geldim ve kesinlikle değdi. Döner muhteşem!", timeAgo: "2 ay önce" },
      { name: "Fatma Y.", text: "Temiz, lezzetli ve samimi. Daha ne olsun? Her hafta geliyorum. Berlin'deki favorim!", timeAgo: "3 hafta önce" },
      { name: "Marco P.", text: "Şüpheliydim ama ilk ısırıktan sonra ikna oldum. Taze et, çıtır ekmek – mükemmel!", timeAgo: "1 ay önce" },
      { name: "Leila B.", text: "Oranienplatz'ın en iyisi! Her şey gözünüzün önünde taze hazırlanıyor. Hijyen gerçekten üst düzey.", timeAgo: "2 hafta önce" },
      { name: "Stefan H.", text: "Berlin'de çok döner denedim ama Muca gerçekten özel. Ev ekmeği bir rüya gibi!", timeAgo: "1 hafta önce" },
    ],
  },
  cta: {
    hungry: "Acıktın mı?",
    solve: "Bunu çözebiliriz!",
    directions: "Yol tarifi",
  },
  about: {
    title: "Hakkımızda",
    subtitle: "Muca Kebap'ın hikayesi",
    passion: {
      title: "Kaliteye Olan Tutkumuz",
      p1: "Muca Kebap net bir inançla yola çıktı: İyi yemek birinci sınıf malzemelerle başlar. Berlin-Kreuzberg'in kalbinde, Oranienplatz'da, geleneğin en yüksek kalite standartlarıyla buluştuğu bir mekan yarattık.",
      p2: "Servis ettiğimiz her döner, otantik lezzete ve zanaatkar özene olan bağlılığımızı anlatır. Farkın tadılabileceğine inanıyoruz – ve misafirlerimiz bunu her gün doğruluyor.",
    },
    pillars: {
      title: "Neyi Savunuyoruz",
      halal: {
        title: "% 100 Helal",
        desc: "Tüm et ürünlerimiz sertifikalı helal kaynaklardan temin edilmektedir. Her malzemenin yüksek standartlarımıza uygun olmasına titizlikle dikkat ediyoruz. Güven ve şeffaflık bizim için önemlidir.",
      },
      hygiene: {
        title: "En Yüksek Hijyen",
        desc: "Temizlik bizde bir seçenek değil, ön koşuldur. Mutfağımız her gün titizlikle temizlenir ve yasal hijyen yönetmeliklerini fazlasıyla aşarız.",
      },
      fresh: {
        title: "Her Gün Taze",
        desc: "Her sabah günümüz taze malzemelerin hazırlanmasıyla başlar. Ev yapımı ekmeğimiz her gün pişirilir ve döner eti şişe taze takılır.",
      },
    },
    selection: {
      title: "Seçimden Tabağa",
      p1: "En taze malzemelerin seçiminden özenli hazırlığa kadar: Muca Kebap'ta her şey size unutulmaz bir lezzet deneyimi sunmak için tasarlanmıştır.",
      p2: "Hiçbir şey dünden kalmaz – bizde sadece bugünün tazeliği önemlidir. Sonuç? Sadece doyurmayan, aynı zamanda mutlu eden bir döner.",
    },
    ctaTitle: "Kendiniz Görün",
    ctaSubtitle: "Oranienplatz'da bizi ziyaret edin ve farkı yaşayın.",
  },
  contact: {
    title: "İletişim",
    subtitle: "Ziyaretinizi bekliyoruz",
    visitUs: "Bizi Ziyaret Edin",
    address: "Adres",
    phone: "Telefon",
    instagram: "Instagram",
    findUs: "Bizi Nasıl Bulursunuz",
    openMaps: "Google Maps'te aç",
    writeUs: "Bize Yazın",
    writeUsDesc: "Franchise başvuruları veya restoranımızla ilgili diğer konularda ekibimizle iletişime geçmek ister misiniz? Bize bir mesaj gönderin, size dönüş yapalım!",
  },
  form: {
    name: "İsim",
    phone: "Telefon numarası",
    email: "E-posta",
    optional: "(isteğe bağlı)",
    message: "Mesaj",
    namePh: "Adınız",
    phonePh: "Telefon numaranız",
    emailPh: "E-posta adresiniz",
    messagePh: "Bize mesajınız…",
    submit: "Mesaj gönder",
    thankTitle: "Teşekkürler!",
    thankDesc: "Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.",
  },
  footer: {
    tagline: "Taze. Helal. Ev Yapımı.",
    navigation: "Gezinme",
    contact: "İletişim",
    rights: "Tüm hakları saklıdır.",
  },
};

export const translations: Record<Lang, typeof de> = { de, en, tr };
