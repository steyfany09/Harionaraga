import React, { useState } from 'react';
import { ArrowDown, Instagram, Heart, Sparkles, ShieldCheck } from 'lucide-react';
import { STORE_CONFIG, HERO_ASSETS, INSTAGRAM_URL } from '../data/products';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="beranda" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FFF9FA] to-[#FAF7F2]">
      {/* Subtle pastel decorative background accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FCE7EC]/50 to-[#F5EFEB]/50 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Sweet subtle kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#B54968] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#D84C74]" />
              <span>Koleksi Aksesori Pastel & Bag Charms Handmade</span>
            </div>

            {/* Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#3E271E] tracking-tight leading-[1.2] max-w-xl mx-auto lg:mx-0">
              Sentuhan <span className="text-[#D84C74] underline decoration-[#F9B7C7] decoration-wavy decoration-2">Lucu & Estetik</span> untuk Setiap Tas dan Kuncimu
            </h1>

            {/* Subtitle */}
            <p className="text-[#695144] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              {STORE_CONFIG.subtitle}
            </p>

            {/* Highlight Trust Factors */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs sm:text-sm text-[#705649]">
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#D84C74] fill-[#D84C74]/20" />
                <span>100% Dirangkai Teliti</span>
              </div>
              <span className="text-[#D3C3BA]">·</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D84C74]" />
                <span>Bisa Request Custom</span>
              </div>
              <span className="text-[#D3C3BA]">·</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D84C74]" />
                <span>Langsung DM Instagram</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#katalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#D84C74] hover:bg-[#C23C62] active:scale-95 rounded-2xl shadow-sm transition-all text-center cursor-pointer"
              >
                <span>Lihat Koleksi Produk</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#5C3A2E] bg-white hover:bg-[#FDFBF9] hover:border-[#D84C74]/40 active:scale-95 rounded-2xl border border-[#E8DCD4] shadow-2xs transition-all text-center cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-[#D84C74]" />
                <span>Kunjungi Instagram Resmi</span>
              </a>
            </div>

            {/* Project Context Badge */}
            <p className="text-xs text-[#9E877B] pt-2 italic">
              {STORE_CONFIG.projectNote}
            </p>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative pastel card border with soft shadow */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 shadow-md border border-[#F2E5DC] rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-[4/5] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF2EB]">
                  {!imageError ? (
                    <img
                      src={HERO_ASSETS.heroImage}
                      alt="Koleksi Aksesori Lucu Harionaraga"
                      className="w-full h-full object-cover object-center"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FFF5F7] to-[#FAF2EB] text-[#7A5B4C]">
                      <Heart className="w-12 h-12 text-[#D84C74] mb-2 fill-[#D84C74]/20" />
                      <p className="font-heading font-semibold text-lg text-[#4A2F25]">Koleksi Harionaraga</p>
                      <p className="text-xs text-[#8A6D5E] mt-1">Bag Charms & Phone Straps Estetik</p>
                    </div>
                  )}

                  {/* Gradient Scrim for subtle depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                  {/* Tag on image */}
                  <div className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 bg-white/95 text-[#5C3A2E] rounded-lg shadow-xs backdrop-blur-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D84C74]" />
                    <span>Handmade with Love</span>
                  </div>
                </div>

                {/* Caption below photo */}
                <div className="px-3 pt-3 pb-1 text-center sm:text-left flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#4A2F25] font-heading">Koleksi Aksesori Manis</p>
                    <p className="text-[11px] text-[#8C7164]">Tersedia untuk pengiriman ke seluruh kota</p>
                  </div>
                  <span className="text-xs font-bold text-[#D84C74] bg-[#FCE7EC] px-2 py-0.5 rounded-md">
                    Mulai Rp 20rb-an
                  </span>
                </div>
              </div>

              {/* Sweet floating card indicator */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-xs border border-[#F2E5DC] rounded-2xl p-3 shadow-md flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#FCE7EC] flex items-center justify-center text-[#D84C74]">
                  <Heart className="w-4 h-4 fill-[#D84C74]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#4A2F25]">Order via Instagram</p>
                  <p className="text-[11px] text-[#8C7164]">DM resmi @harionaraga.id</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
