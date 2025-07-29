'use client';

import React, { useState, useEffect } from 'react';

// Define props type for the Icon component to fix TypeScript error
interface IconProps {
  src: string;
  className?: string;
}

// Helper component for SVG icons to avoid repetition
const Icon = ({ src, className = 'w-6 h-6' }: IconProps) => (
  <img src={src} alt="" className={className} />
);

// Main page component
export default function HotelTTCPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Hotel TTC Vrchlabí | Ubytování, Restaurace & Wellness';

    const faviconSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="20" fill="#2d572c"></rect>
        <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="60" font-weight="bold" fill="#f7c427">TTC</text>
      </svg>
    `;
    const faviconUrl = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;
    
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const navLinks = [
    { href: '#sluzby', label: 'Služby' },
    { href: '#ubytovani', label: 'Ubytování' },
    { href: '#balicky', label: 'Pobytové balíčky' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center space-x-3">
                <img src="/images/logo-hotel-ttc-restaurace.png" alt="Logo Hotel TTC" className="h-12 w-auto" />
            </a>
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-slate-600 hover:text-emerald-700 transition-colors font-medium">
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="#kontakt" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all">
              Rezervovat
            </a>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-md text-slate-600 hover:bg-slate-100">
                <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white p-6">
            <div className="flex items-center justify-between mb-8">
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                    <img src="/images/logo-hotel-ttc-restaurace.png" alt="Logo Hotel TTC" className="h-10 w-auto" />
                </a>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md text-slate-600 hover:bg-slate-100">
                    <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" />
                </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 rounded-lg text-lg font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setIsMenuOpen(false)} className="mt-6 block w-full text-center px-5 py-3 text-lg font-semibold text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-all">
                Rezervovat pobyt
              </a>
            </nav>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="relative bg-slate-900 text-white">
          <div className="absolute inset-0">
            <img src="/images/hero-hotel-exterior-winter.jpg" alt="Exteriér Hotelu TTC v zimě" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-shadow-lg">Váš Únik do Srdce Krkonoš</h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-200 text-shadow">
              Objevte komfort, skvělou gastronomii a relaxaci v Hotelu TTC, jen pár kroků od centra Vrchlabí a na dosah krásám hor.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#sluzby" className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-300 transition-all">
                Prozkoumat Služby
              </a>
              <a href="#ubytovani" className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all">
                Naše Pokoje
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-emerald-700 tracking-wider uppercase">Komplexní péče</h2>
                    <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Vše pod jednou střechou</p>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Ať už hledáte aktivní odpočinek, relaxaci, gurmánský zážitek nebo místo pro vaši akci, u nás naleznete vše potřebné.</p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-xl">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-amber-400 text-white"><Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/bed.svg" className="w-7 h-7" /></div>
                        <h3 className="mt-5 text-xl font-semibold text-slate-900">Stylové Ubytování</h3>
                        <p className="mt-2 text-base text-slate-600">Unikátní mezonetové pokoje poskytují maximální komfort a soukromí pro páry i rodiny.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-xl">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-amber-400 text-white"><Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/tools-kitchen-2.svg" className="w-7 h-7" /></div>
                        <h3 className="mt-5 text-xl font-semibold text-slate-900">Restaurace & Bar</h3>
                        <p className="mt-2 text-base text-slate-600">Ochutnejte speciality naší kuchyně v restauraci s námořní tématikou nebo si užijte drink na terase.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-xl">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-amber-400 text-white"><Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/spa.svg" className="w-7 h-7" /></div>
                        <h3 className="mt-5 text-xl font-semibold text-slate-900">Wellness & Masáže</h3>
                        <p className="mt-2 text-base text-slate-600">Dopřejte si zasloužený odpočinek v naší privátní wellness zóně s vířivkou, saunami a relaxačními masážemi.</p>
                    </div>
                     <div className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-xl">
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-amber-400 text-white"><Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/device-gamepad-2.svg" className="w-7 h-7" /></div>
                        <h3 className="mt-5 text-xl font-semibold text-slate-900">Sport & Konference</h3>
                        <p className="mt-2 text-base text-slate-600">Využijte naši velkou tělocvičnu pro stolní tenis, soustředění nebo uspořádejte firemní akci v našich prostorách.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Accommodation Section */}
        <section id="ubytovani" className="py-16 sm:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                  <h2 className="text-base font-semibold text-emerald-700 tracking-wider uppercase">Domov daleko od domova</h2>
                  <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Mezonetové pokoje pro Váš komfort</p>
                  <p className="mt-4 text-lg text-slate-600">Našich 12 hotelových pokojů, snadno dostupných výtahem, je navrženo pro vaše maximální pohodlí. Unikátní mezonetové uspořádání nabízí oddělené prostory pro spánek a odpočinek, což ocení rodiny i páry hledající více prostoru.</p>
                  <dl className="mt-8 space-y-6">
                      <div className="flex">
                          <Icon src="https://heroicons.com/24/solid/check-circle.svg" className="flex-shrink-0 w-6 h-6 text-emerald-600"/>
                          <dd className="ml-3 text-slate-600">Spodní podlaží se 2 lůžky a horní mezonet se 2 komfortními přistýlkami.</dd>
                      </div>
                      <div className="flex">
                          <Icon src="https://heroicons.com/24/solid/check-circle.svg" className="flex-shrink-0 w-6 h-6 text-emerald-600"/>
                          <dd className="ml-3 text-slate-600">Moderní koupelna, satelitní TV, Wi-Fi připojení a lednička.</dd>
                      </div>
                      <div className="flex">
                          <Icon src="https://heroicons.com/24/solid/check-circle.svg" className="flex-shrink-0 w-6 h-6 text-emerald-600"/>
                          <dd className="ml-3 text-slate-600">Příjemný interiér s dřevěnými prvky a kvalitními materiály vytváří útulnou atmosféru.</dd>
                      </div>
                  </dl>
              </div>
              <div className="mt-10 lg:mt-0">
                  <img src="/images/hero-bedroom-interior-bed.jpg" alt="Interiér hotelového pokoje" className="rounded-2xl shadow-xl"/>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Nahlédněte do našeho hotelu</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Prohlédněte si prostory, které pro vás s péčí připravujeme.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                        <img className="h-auto max-w-full rounded-lg object-cover aspect-[4/5]" src="/images/gallery-bedroom-mezzanine-lower.jpg" alt="Spodní část mezonetového pokoje" />
                        <img className="h-auto max-w-full rounded-lg object-cover aspect-[4/3]" src="/images/gallery-restaurant-burger-fries.jpg" alt="Burger s hranolky" />
                    </div>
                    <div className="grid gap-4">
                        <img className="h-auto max-w-full rounded-lg object-cover aspect-[4/3]" src="/images/hero-restaurant-bar.jpg" alt="Bar v restauraci" />
                        <img className="h-auto max-w-full rounded-lg object-cover aspect-[4/5]" src="/images/gallery-restaurant-dining-area-wide.jpg" alt="Jídelní část restaurace" />
                    </div>
                    <div className="grid gap-4">
                        <img className="h-auto max-w-full rounded-lg object-cover aspect-[4/5]" src="/images/gallery-conference-room-event-setup.jpg" alt="Sál připravený na akci" />
                        <img className="h-auto max-w-full rounded-lg object-cover aspect-[4/3]" src="/images/gallery-bathroom-bathtub.jpg" alt="Koupelna s vanou" />
                    </div>
                    <div className="grid gap-4">
                        <img className="h-auto max-w-full rounded-lg object-cover aspect-[4/3]" src="/images/hero-hotel-terrace-summer.jpg" alt="Letní terasa hotelu" />
                        <img className="h-auto max-w-full rounded-lg object-cover aspect-[4/5]" src="/images/gallery-bedroom-mezzanine-upper.jpg" alt="Horní část mezonetového pokoje" />
                    </div>
                </div>
            </div>
        </section>

        {/* Packages section */}
        <section id="balicky" className="py-16 sm:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-emerald-700 tracking-wider uppercase">Zvýhodněné nabídky</h2>
              <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Naše pobytové balíčky</p>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Vyberte si jeden z našich balíčků a užijte si pobyt plný zážitků za skvělou cenu.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900">Wellness Pobyt</h3>
                <p className="mt-2 text-slate-600">Dokonalý relax pro tělo i duši.</p>
                <ul className="mt-6 space-y-3 text-slate-600 flex-grow">
                  <li className="flex items-start"><Icon src="https://heroicons.com/24/solid/check.svg" className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0"/><span>2x privátní vstup do wellness (60 min)</span></li>
                  <li className="flex items-start"><Icon src="https://heroicons.com/24/solid/check.svg" className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0"/><span>2x snídaně formou bufetu</span></li>
                  <li className="flex items-start"><Icon src="https://heroicons.com/24/solid/check.svg" className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0"/><span>Neomezený vstup do tělocvičny (stolní tenis)</span></li>
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-4xl font-extrabold text-slate-900">4 999 Kč</p>
                  <p className="text-slate-500">pro 2 osoby na 2 noci</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col ring-2 ring-emerald-600 relative">
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold text-white bg-emerald-600">Nejoblíbenější</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Relax Pobyt</h3>
                <p className="mt-2 text-slate-600">Uvolnění a regenerace s profesionální péčí.</p>
                <ul className="mt-6 space-y-3 text-slate-600 flex-grow">
                  <li className="flex items-start"><Icon src="https://heroicons.com/24/solid/check.svg" className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0"/><span>2x relaxační masáž (60 min)</span></li>
                  <li className="flex items-start"><Icon src="https://heroicons.com/24/solid/check.svg" className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0"/><span>2x snídaně formou bufetu</span></li>
                  <li className="flex items-start"><Icon src="https://heroicons.com/24/solid/check.svg" className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0"/><span>Neomezený vstup do tělocvičny (stolní tenis)</span></li>
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-4xl font-extrabold text-slate-900">4 999 Kč</p>
                  <p className="text-slate-500">pro 2 osoby na 2 noci</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900">Pobyt s Polopenzí</h3>
                <p className="mt-2 text-slate-600">Gurmánský zážitek bez starostí.</p>
                <ul className="mt-6 space-y-3 text-slate-600 flex-grow">
                  <li className="flex items-start"><Icon src="https://heroicons.com/24/solid/check.svg" className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0"/><span>2x polopenze (večeře o 3 chodech)</span></li>
                  <li className="flex items-start"><Icon src="https://heroicons.com/24/solid/check.svg" className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0"/><span>2x snídaně formou bufetu</span></li>
                  <li className="flex items-start"><Icon src="https://heroicons.com/24/solid/check.svg" className="w-5 h-5 text-emerald-600 mr-2 mt-1 flex-shrink-0"/><span>Neomezený vstup do tělocvičny (stolní tenis)</span></li>
                </ul>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <p className="text-4xl font-extrabold text-slate-900">4 999 Kč</p>
                  <p className="text-slate-500">pro 2 osoby na 2 noci</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              
              <p className="text-sm text-slate-500">Rezervace balíčků probíhají e-mailem. Všechny balíčky zahrnují parkování zdarma.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Kontaktujte nás</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">Máte dotaz nebo si přejete rezervovat pobyt? Jsme tu pro vás. Těšíme se na vaši návštěvu!</p>
                </div>
                <div className="mt-12 bg-slate-50 rounded-2xl p-8 lg:p-12 lg:grid lg:grid-cols-3 lg:gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-bold text-slate-900">Hotel TTC Vrchlabí</h3>
                    <p className="mt-2 text-slate-600">provozují manželé Tomášovi</p>
                     <div className="mt-6 space-y-4 text-slate-700">
                        <p className="flex items-center">
                          <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/map-pin.svg" className="flex-shrink-0 w-6 h-6 text-emerald-700 mr-3" />
                          <span>Tkalcovská 357, 543 01 Vrchlabí</span>
                        </p>
                        <p className="flex items-center">
                           <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" className="flex-shrink-0 w-6 h-6 text-emerald-700 mr-3" />
                          <a href="tel:+420499775112" className="hover:text-emerald-700">+420 499 775 112</a>
                        </p>
                        <p className="flex items-center">
                           <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/device-mobile.svg" className="flex-shrink-0 w-6 h-6 text-emerald-700 mr-3" />
                          <a href="tel:+420724801745" className="hover:text-emerald-700">+420 724 801 745</a> (Wellness, masáže, rezervace)
                        </p>
                         <p className="flex items-center">
                           <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" className="flex-shrink-0 w-6 h-6 text-emerald-700 mr-3" />
                           <a href="mailto:hotel@hotel-ttc.cz" className="hover:text-emerald-700">hotel@hotel-ttc.cz</a>
                        </p>
                         <p className="flex items-center">
                            <Icon src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brand-facebook.svg" className="flex-shrink-0 w-6 h-6 text-emerald-700 mr-3" />
                           <a href="https://www.facebook.com/HotelTTC" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">Sledujte nás na Facebooku</a>
                        </p>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 lg:col-span-2">
                      <h3 className="text-2xl font-bold text-slate-900">Provozní doba</h3>
                       <div className="mt-6 grid sm:grid-cols-2 gap-6 text-left">
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800">Recepce</h4>
                          <p className="text-slate-600">7:00 – 24:00</p>
                        </div>
                         <div>
                          <h4 className="text-lg font-semibold text-slate-800">Restaurace & Terasa</h4>
                          <p className="text-slate-600">17:00 – 21:00</p>
                          <p className="text-sm text-slate-500">Snídaně: 7:30 – 9:30</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800">Wellness</h4>
                          <p className="text-slate-600">13:00 – 22:00 (nutná rezervace)</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800">Masáže</h4>
                          <p className="text-slate-600">Dle telefonických objednávek</p>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="text-center text-sm text-slate-400">&copy; {new Date().getFullYear()} Hotel TTC Vrchlabí. Všechna práva vyhrazena.</p>
            <p className="mt-4 text-center text-sm text-slate-400 sm:mt-0">
              Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="font-medium text-amber-400 hover:text-amber-300">DigitalFusion</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
