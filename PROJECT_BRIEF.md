# HAFRİYAT FİRMASI WEB SİTESİ — 2026 STANDARTLARI GELİŞTİRME PROMPTU

> Bu dosyayı Cursor / Claude Code'a doğrudan yapıştırıp projeyi başlatabilirsin. Tek seferde tüm siteyi istemek yerine, aşağıdaki "UYGULAMA SIRASI" bölümündeki adımları takip ederek parça parça istersen çok daha kaliteli sonuç alırsın.

---

## 0. ROL TANIMI (Prompt'un başına yapıştır)

```
Sen 15+ yıllık deneyime sahip, Awwwards ödüllü projeler üretmiş, Next.js
ve modern web animasyonlarında uzman bir senior full-stack developer ve
UI/UX tasarımcısısın. İnşaat/ağır sanayi sektörü için kurumsal web
sitesi tasarımında uzmansın. Kod kalitesi, performans (Core Web Vitals),
erişilebilirlik (WCAG 2.1 AA) ve SEO senin için pazarlık konusu değil —
bunlar varsayılan standartların.

Aşağıdaki gereksinimlere göre eksiksiz, production-ready bir web sitesi
geliştireceksin. Placeholder/lorem ipsum bırakma, her bileşeni tam
fonksiyonel yaz. Kod boyunca yorum satırlarıyla neden o kararı aldığını
kısaca açıkla.
```

---

## 1. PROJE ÖZETİ

**Firma tipi:** Hafriyat / kazı / yıkım / altyapı hizmetleri firması  
**Firma adı:** SMF Hafriyat  
**Hedef:** Sektörde şu ana kadar kimsenin yapmadığı, gerçek anlamda modern, hareketli (motion-first) ve güven veren bir kurumsal site  
**Dil:** Türkçe (varsayılan), ileride çok dilli yapıya (i18n) genişletilebilir mimari  
**Konum bağlamı:** Denizli / Ege Bölgesi — yerel SEO kritik

---

## 2. TEKNİK YIĞIN (TECH STACK)

```
Framework:        Next.js 14+ (App Router, Server Components)
Dil:               TypeScript (strict mode)
Stil:              Tailwind CSS + CSS Variables (tema sistemi için)
Animasyon:         Framer Motion (motion/react)
Veritabanı/Backend: Supabase (Postgres + Storage + Auth)
Form/İletişim:     Supabase Edge Function veya Resend API (mail gönderimi)
Görsel optimizasyon: next/image, Supabase Storage + CDN
İkon seti:         Lucide React
Harita:            Google Maps Embed API
Deployment:        Vercel
Analitik:          Google Analytics 4 + Google Search Console + Google Tag Manager
Form doğrulama:    react-hook-form + zod
SEO:               next-seo veya native Next.js metadata API + JSON-LD (LocalBusiness schema)
```

---

## 3. TASARIM SİSTEMİ (DESIGN SYSTEM)

```
Tema:              Koyu tema (dark-first), endüstriyel / güçlü / güvenilir his
Ana renkler:
  - Arka plan:      #0F1A14 / #0A0F0C (koyu antrasit-yeşil ton)
  - Vurgu (accent):  #DBFF2B (lime green — CTA, hover, ikon vurguları)
  - İkincil vurgu:   turuncu/sarı ton (iş makinesi/güvenlik teması, opsiyonel #F5A623)
  - Metin birincil:  #FFFFFF / #F5F5F0
  - Metin ikincil:   #A8A8A0 (muted gri)
  - Kart yüzeyi:     #16221A (arka plandan bir ton açık)

Tipografi:
  - Başlıklar:       Archivo Black / Barlow Condensed (güçlü, endüstriyel)
  - Gövde metni:     Barlow (okunabilir, modern)
  - Rakamlar/istatistik: IBM Plex Mono (teknik/kesin his)

Boşluk & grid:      8px tabanlı spacing sistemi, 12-column grid, max-width 1440px
Köşe yuvarlama:     Minimal (4-8px) — abartılı rounded-corner YOK, endüstriyel keskinlik korunmalı
Gölge/gradient:     Minimal, düz yüzeyler tercih edilir; gradient sadece hero arka planında ince kullanılabilir
İkonografi:         Outline tarzı, teknik/mühendislik hissi veren ikonlar
```

---

## 4. SAYFA YAPISI VE İÇERİK BİLEŞENLERİ

### 4.1. Ana Sayfa (`/`)

**a) Hero bölümü** — kepçe SVG animasyonu, toz parçacık, sessionStorage skip  
**b) İstatistik şeridi** — scroll-triggered sayaç animasyonu  
**c) Hizmetler bölümü** — 10 hizmet kart grid  
**d) Süreç / Nasıl Çalışıyoruz** — yatay timeline  
**e) Proje galerisi** — öncesi/sonrası slider + filtre  
**f) Filo / Ekipman bölümü**  
**g) Referanslar / Müşteri yorumları**  
**h) Sertifikalar & Güvenlik**  
**i) Ekip / Yönetim kadrosu**  
**j) İletişim + Harita bölümü**  
**k) Footer**

### 4.2. Diğer sayfalar

- `/hizmetler` ve `/hizmetler/[slug]`
- `/projeler` ve `/projeler/[slug]`
- `/hakkimizda`
- `/iletisim`
- `/blog` (opsiyonel)

---

## 5. TEKNİK GEREKSİNİMLER (2026 STANDARTLARI)

- Lighthouse: Performance 90+, Accessibility 95+, SEO 100
- LCP < 2.5s, CLS < 0.1, INP < 200ms
- Dinamik metadata + JSON-LD LocalBusiness schema
- sitemap.xml ve robots.txt
- WCAG 2.1 AA erişilebilirlik
- prefers-reduced-motion desteği
- Mobile-first, min 44x44px touch targets
- Form sanitization + rate limiting
- KVKK çerez onayı + form onay checkbox'ı

---

## 6. VERİTABANI ŞEMASI (Supabase / Postgres)

Tablolar: `projects`, `services`, `team_members`, `contact_submissions`, `stats`

---

## 7. YÖNETİM PANELİ (opsiyonel)

`/admin` altında Supabase Auth ile CMS — proje, form, istatistik yönetimi

---

## 8. KLASÖR YAPISI (önerilen)

```
/app
  layout.tsx, page.tsx, globals.css
  /(marketing)/...
  /admin/...
  /api/contact/route.ts
  sitemap.ts, robots.ts
/components
  /hero, /sections, /ui, /layout
/lib
  /supabase, /constants, /validations
/public
```

---

## 9. UYGULAMA SIRASI

1. ✅ Proje iskeleti kurulumu (Next.js + Tailwind + Framer Motion + Supabase bağlantısı + tasarım tokenları + layout)
2. Hero bölümü + kepçe giriş animasyonu
3. Hizmetler + istatistik sayaç bölümleri
4. Proje galerisi + öncesi/sonrası slider
5. İletişim formu + Supabase entegrasyonu + WhatsApp butonu
6. SEO metadata + JSON-LD + sitemap/robots
7. Admin paneli (opsiyonel)
8. Performans denetimi ve son cilalama

---

## 10. ADIM 1 TAMAMLANDI

Adım 1 kapsamında oluşturulanlar:

- Next.js 15 App Router + TypeScript strict + Tailwind CSS v4
- Tasarım tokenları (`app/globals.css`)
- Fontlar: Archivo Black, Barlow, IBM Plex Mono
- Header, Footer, MobileNav, Button, Container bileşenleri
- `lib/constants/site.ts` — SMF Hafriyat Denizli odaklı içerik
- Supabase client/server helper'ları + `.env.example`
- Ana sayfa placeholder section

**Sonraki adım:** Hero + kepçe animasyonu (`components/hero/DiggerHero.tsx`)
