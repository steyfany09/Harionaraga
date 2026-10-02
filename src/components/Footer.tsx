import React from 'react';
import { MessageCircle, Instagram, MapPin, Clock, Sparkles } from 'lucide-react';
import { STORE_CONFIG, BRAND_ASSETS, buildGeneralWhatsAppUrl } from '../data/products';

interface FooterProps {
  onOpenGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGuide }) => {
  return (
    <footer className="bg-white border-t border-[#F0E4DC] pt-12 pb-8 text-[#6B5347]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#F5EBE4]">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#F2DEE4] shadow-2xs shrink-0 bg-[#FCE7EC]">
                <img
                  src={BRAND_ASSETS.logo}
                  alt={STORE_CONFIG.brandName}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading font-bold text-2xl text-[#4A2F25]">
                {STORE_CONFIG.brandName}
              </span>
            </div>
            <p className="text-xs text-[#7A6154] leading-relaxed">
              {STORE_CONFIG.tagline}. Menghadirkan keceriaan kecil melalui bag charms dan aksesori pastel buatan tangan.
            </p>
            <div className="pt-1">
              <span className="inline-block text-[11px] font-medium bg-[#FCE7EC] text-[#B54968] px-2.5 py-1 rounded-md">
                Proyek Mata Kuliah Manajemen Proyek
              </span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#4A2F25]">Navigasi</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#beranda" className="hover:text-[#D84C74] transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#katalog" className="hover:text-[#D84C74] transition-colors">Katalog Produk</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-[#D84C74] transition-colors">Keunggulan Harionaraga</a>
              </li>
              <li>
                <a href="#cara-pesan" className="hover:text-[#D84C74] transition-colors">Cara Pemesanan</a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-[#D84C74] transition-colors">Tentang Kami</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontak & Jam Kerja */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#4A2F25]">Kontak Pemesanan</h4>
            <ul className="space-y-2.5 text-xs text-[#6E564A]">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href={buildGeneralWhatsAppUrl('Informasi Produk')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D84C74] transition-colors font-medium text-[#4A2F25]"
                >
                  WhatsApp: {STORE_CONFIG.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#D84C74] shrink-0" />
                <a 
                  href={STORE_CONFIG.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#D84C74] transition-colors"
                >
                  Instagram: {STORE_CONFIG.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D84C74] shrink-0 mt-0.5" />
                <span>{STORE_CONFIG.operationalHours}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D84C74] shrink-0 mt-0.5" />
                <span>{STORE_CONFIG.locationCity}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Pengaturan & Pengembangan */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-[#4A2F25]">Info Teknis</h4>
            <p className="text-xs text-[#7A6154] leading-relaxed">
              Dibuat dengan React + Vite + Tailwind CSS. Data produk dikelola secara statis dalam file JavaScript/TypeScript tanpa server/database.
            </p>
            {onOpenGuide && (
              <button
                onClick={onOpenGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#D84C74] bg-[#FCE7EC] hover:bg-[#F9D5DF] rounded-xl transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Panduan Edit Foto & Data</span>
              </button>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Student Project attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8F7466]">
          <p>© {new Date().getFullYear()} {STORE_CONFIG.brandName}. Hak Cipta Dilindungi.</p>
          <p className="text-center sm:text-right">
            Disusun untuk Proyek Mata Kuliah Manajemen Proyek
          </p>
        </div>

      </div>
    </footer>
  );
};
