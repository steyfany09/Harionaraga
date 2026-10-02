import React from 'react';
import { Heart, Sparkles, Compass, Target } from 'lucide-react';
import { STORE_CONFIG, BRAND_ASSETS } from '../data/products';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-14 sm:py-20 bg-[#FAF7F2] border-t border-[#F0E4DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Story & Academic Context */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#B54968] text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 fill-[#D84C74] text-[#D84C74]" />
              <span>Tentang Harionaraga</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#3E271E] tracking-tight leading-snug">
              Menghadirkan Keceriaan Kecil Lewat Sentuhan Aksesori Manis
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#695144] leading-relaxed">
              <p>
                <strong className="text-[#4A2F25] font-semibold">{STORE_CONFIG.brandName}</strong> berawal dari kecintaan terhadap detail estetika bernuansa pastel dan hangat. Kami percaya bahwa sebuah bag charm mungil atau gantungan kunci manik yang manis mampu memberikan sentuhan mood positif dalam setiap kegiatan sehari-hari.
              </p>
              <p>
                Website katalog ini dirancang dan dikembangkan sebagai bagian dari tugas praktikum mata kuliah <strong className="text-[#4A2F25] font-semibold">Manajemen Proyek</strong>. Melalui inisiatif ini, kami mengintegrasikan manajemen rantai pasok material manik-manik, standardisasi kualitas pengerjaan handmade, serta alur pemesanan digital yang transparan dan bersahabat langsung via DM Instagram.
              </p>
              <p>
                Setiap item dirangkai secara manual dengan kontrol mutu yang terjaga, memastikan sambungan yang kokoh, bahan yang awet, dan kemasan unboxing yang menyenangkan bagi para pembeli.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-[#EFE5DE] shadow-2xs">
                <Target className="w-4 h-4 text-[#D84C74] mb-1.5" />
                <h4 className="font-heading font-bold text-xs sm:text-sm text-[#4A2F25]">Ketelitian Detail</h4>
                <p className="text-[11px] text-[#7A6154] mt-0.5">Setiap jalinan dan simpul dikunci rapi agar tidak mudah lepas.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#EFE5DE] shadow-2xs">
                <Compass className="w-4 h-4 text-[#D84C74] mb-1.5" />
                <h4 className="font-heading font-bold text-xs sm:text-sm text-[#4A2F25]">Harga Bersahabat</h4>
                <p className="text-[11px] text-[#7A6154] mt-0.5">Kualitas kerajinan estetik dengan rentang harga ramah kantong.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#EFE5DE] shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#D84C74] mb-1.5" />
                <h4 className="font-heading font-bold text-xs sm:text-sm text-[#4A2F25]">Sentuhan Personal</h4>
                <p className="text-[11px] text-[#7A6154] mt-0.5">Dapat disesuaikan dengan inisial nama atau paduan warna beads.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Project Identity Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F0E4DC] shadow-sm space-y-6">
              
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-[#F2DEE4] shadow-xs shrink-0 bg-[#FCE7EC]">
                  <img
                    src={BRAND_ASSETS.logo}
                    alt={STORE_CONFIG.brandName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#4A2F25]">{STORE_CONFIG.brandName}</h3>
                  <p className="text-xs text-[#8F7466]">Profil Bisnis & Mata Kuliah Manajemen Proyek</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-[#6B5347]">
                <div className="flex justify-between items-center py-2 border-b border-[#F7EFEA]">
                  <span className="font-medium text-[#8F7466]">Nama Brand</span>
                  <span className="font-bold text-[#4A2F25]">{STORE_CONFIG.brandName}</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#F7EFEA]">
                  <span className="font-medium text-[#8F7466]">Fokus Produk</span>
                  <span className="font-semibold text-[#4A2F25]">Bag Charms, Keychains & Phone Straps</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#F7EFEA]">
                  <span className="font-medium text-[#8F7466]">Metode Pemesanan</span>
                  <span className="font-semibold text-[#D84C74]">Langsung via DM Instagram (@harionaraga.id)</span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-[#F7EFEA]">
                  <span className="font-medium text-[#8F7466]">Pengiriman</span>
                  <span className="font-semibold text-[#4A2F25]">Ekspedisi Nasional (JNE/J&T/SiCepat)</span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-[#8F7466]">Status Katalog</span>
                  <span className="px-2 py-0.5 rounded-md bg-pink-50 text-[#D84C74] font-semibold text-[11px]">
                    Katalog Aktif & Terhubung Instagram
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-[#FAF7F2] rounded-2xl text-xs text-[#7A6154] leading-relaxed border border-[#EFE5DE]">
                💡 <em>Catatan:</em> Website ini siap dideploy ke platform cloud seperti Vercel dan kode sumber dapat dikelola langsung lewat repositori GitHub.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
