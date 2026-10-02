import React from 'react';
import { Instagram, Sparkles, Heart } from 'lucide-react';
import { STORE_CONFIG, INSTAGRAM_URL } from '../data/products';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FCE7EC] via-[#FFF3F5] to-[#F5EFEB] p-8 sm:p-12 border border-[#F2DEE4] shadow-sm text-center">
          
          {/* Subtle decorative hearts */}
          <div className="absolute top-4 left-6 text-[#D84C74]/20 pointer-events-none hidden sm:block">
            <Heart className="w-12 h-12 fill-current" />
          </div>
          <div className="absolute bottom-4 right-6 text-[#D84C74]/20 pointer-events-none hidden sm:block">
            <Heart className="w-10 h-10 fill-current" />
          </div>

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-[#B54968] text-xs font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D84C74]" />
              <span>Aksesori Impianmu Menunggu</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#3E271E] tracking-tight">
              Siap Mempercantik Koleksi Tas & Kuncimu?
            </h2>

            <p className="text-sm sm:text-base text-[#695144] leading-relaxed">
              Punya ide paduan warna beads sendiri, ingin request inisial nama, atau bingung memilih aksesori yang cocok untuk hadiah? Kami siap membantu konsultasi lewat DM Instagram!
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#D84C74] hover:bg-[#C23C62] active:scale-95 rounded-2xl shadow-sm transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Hubungi Instagram @harionaraga.id</span>
              </a>

              <a
                href="#katalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#5C3A2E] bg-white hover:bg-[#FDFBF9] active:scale-95 rounded-2xl border border-[#E8DCD4] transition-all cursor-pointer"
              >
                <span>Eksplor Katalog Dulu</span>
              </a>
            </div>

            <p className="text-xs text-[#9E8273] pt-1">
              Respons cepat pada jam operasional: {STORE_CONFIG.operationalHours}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
