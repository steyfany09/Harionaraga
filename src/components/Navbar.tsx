import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { STORE_CONFIG, BRAND_ASSETS, buildGeneralWhatsAppUrl } from '../data/products';

interface NavbarProps {
  onOpenGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Katalog', href: '#katalog' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Cara Pesan', href: '#cara-pesan' },
    { name: 'Tentang Kami', href: '#tentang-kami' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-200 ${
        isScrolled 
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-xs border-b border-[#EEDFD7]' 
          : 'bg-[#FAF7F2] border-b border-[#F2E7E0]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Zone 1: Brand Wordmark (Official circular logo + brand name) */}
          <a 
            href="#beranda" 
            className="flex items-center gap-2.5 sm:gap-3 group text-[#5C3A2E] hover:text-[#B54968] transition-colors"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#F2DEE4] shadow-xs shrink-0 group-hover:scale-105 transition-transform bg-[#FCE7EC]">
              <img
                src={BRAND_ASSETS.logo}
                alt={STORE_CONFIG.brandName}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-[#4A2F25]">
              {STORE_CONFIG.brandName}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#6B5347]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#D84C74] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D84C74] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            {onOpenGuide && (
              <button
                onClick={onOpenGuide}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#7D5C4C] bg-[#F5EFEB] hover:bg-[#EFE5DE] rounded-full transition-colors border border-[#E8DCD4]"
                title="Petunjuk untuk mahasiswa & pemilik toko"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D84C74]" />
                <span>Info Pengaturan</span>
              </button>
            )}

            <a
              href={buildGeneralWhatsAppUrl('Pemesanan Produk Harionaraga')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#D84C74] hover:bg-[#C23C62] active:scale-95 rounded-full shadow-xs transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Pesan via WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#6B5347] hover:bg-[#F2E7E0] transition-colors focus:outline-none"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EEDFD7] bg-[#FAF7F2] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-medium text-[#5C3A2E] hover:bg-[#FCE7EC] hover:text-[#D84C74] transition-colors"
            >
              {link.name}
            </a>
          ))}
          {onOpenGuide && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuide();
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#7D5C4C] hover:bg-[#F5EFEB] rounded-xl flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D84C74]" />
              <span>Panduan Ganti Foto & Data</span>
            </button>
          )}
        </div>
      )}
    </header>
  );
};
