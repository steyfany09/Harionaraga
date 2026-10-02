import React, { useEffect } from 'react';
import { X, Sparkles, Folder, FileText, Image, MessageCircle, Github, Globe } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/45 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-[#F0E4DC] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#F0E4DC] bg-[#FFF9FA]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#FCE7EC] text-[#D84C74] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-[#3E271E]">
                Panduan Pengelolaan Website Harionaraga
              </h3>
              <p className="text-xs text-[#7A6154]">
                Untuk Keperluan Presentasi & Pengeditan Mata Kuliah Manajemen Proyek
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#63493D] hover:bg-white hover:text-[#D84C74] transition-colors border border-[#EFE5DE]"
            aria-label="Tutup panduan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 text-xs sm:text-sm text-[#5C4539] leading-relaxed">
          
          {/* Section 1: Struktur File Utama */}
          <div className="space-y-2.5">
            <h4 className="font-heading font-bold text-base text-[#3E271E] flex items-center gap-2">
              <Folder className="w-4 h-4 text-[#D84C74]" />
              <span>1. Struktur File Utama</span>
            </h4>
            <div className="bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EFE5DE] space-y-1.5 font-mono text-xs">
              <p><strong className="text-[#D84C74]">src/data/products.ts</strong> ➔ Seluruh data produk, kategori, & nomor WhatsApp.</p>
              <p><strong className="text-[#D84C74]">src/assets/images/</strong> ➔ Tempat menyimpan file foto produk asli (JPG/PNG/WebP).</p>
              <p><strong className="text-[#D84C74]">src/components/</strong> ➔ Komponen tampilan (Navbar, Hero, Katalog, Detail, Footer).</p>
              <p><strong className="text-[#D84C74]">src/App.tsx</strong> ➔ Halaman utama aplikasi React.</p>
            </div>
          </div>

          {/* Section 2: Cara Mengganti Nomor WhatsApp Toko */}
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-base text-[#3E271E] flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>2. Cara Mengubah Nomor WhatsApp Bisnis (Klien)</span>
            </h4>
            <p>
              Buka file <code className="bg-[#FCE7EC] text-[#9D3D58] px-1.5 py-0.5 rounded font-mono text-xs">src/data/products.ts</code>, lalu cari variabel konfigurasi <code className="font-mono text-xs text-[#3E271E]">WHATSAPP_NUMBER</code> di bagian atas:
            </p>
            <pre className="bg-[#2D201A] text-[#F5EFEB] p-3.5 rounded-xl overflow-x-auto text-xs font-mono">
{`// Ganti dengan nomor resmi WhatsApp bisnis klien sebelum go-live:
export const WHATSAPP_NUMBER = "6281234567890"; 
export const DISPLAY_WHATSAPP = "+62 812-3456-7890";`}
            </pre>
            <p className="text-[11px] text-[#8F7466]">
              ⚠️ Pastikan menggunakan format internasional tanpa spasi, tanda strip, atau awalan &apos;+&apos; (contoh yang benar: <code>6281234567890</code>).
            </p>
          </div>

          {/* Section 3: Cara Menambahkan / Mengganti Foto Produk */}
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-base text-[#3E271E] flex items-center gap-2">
              <Image className="w-4 h-4 text-[#D84C74]" />
              <span>3. Cara Memasukkan Foto Produk Asli</span>
            </h4>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                Simpan file foto produk Anda ke folder <code className="bg-[#FAF7F2] px-1.5 py-0.5 rounded font-mono text-xs">src/assets/images/</code> (misalnya: <code className="font-mono text-xs">foxy.jpg</code> atau <code className="font-mono text-xs">bunny_01.png</code>).
              </li>
              <li>
                Buka file <code className="bg-[#FAF7F2] px-1.5 py-0.5 rounded font-mono text-xs">src/data/products.ts</code>, lalu import file foto tersebut di baris atas:
                <pre className="bg-[#2D201A] text-[#F5EFEB] p-2.5 rounded-lg mt-1.5 overflow-x-auto text-xs font-mono">
{`import foxyImg from '../assets/images/foxy.jpg';
import bunny01Img from '../assets/images/bunny_01.jpg';`}
                </pre>
              </li>
              <li>
                Lalu pada daftar <code className="font-mono text-xs">PRODUCTS</code>, masukkan variabel foto tersebut ke properti <code className="font-mono text-xs">image</code> produk yang bersangkutan:
                <pre className="bg-[#2D201A] text-[#F5EFEB] p-2.5 rounded-lg mt-1.5 overflow-x-auto text-xs font-mono">
{`{
  id: 'hn-01',
  name: 'Foxy',
  price: 65000,
  category: 'others',
  categoryLabel: 'Koleksi Spesial',
  image: foxyImg, // Foto asli otomatis menggantikan placeholder!
  stockStatus: 'Tersedia',
}`}
                </pre>
              </li>
            </ol>
          </div>

          {/* Section 4: Data 21 Produk Resmi Harionaraga */}
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-base text-[#3E271E] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D84C74]" />
              <span>4. Data 21 Produk Resmi di Katalog</span>
            </h4>
            <p>
              Seluruh 21 produk (Foxy, Pookoo, Bunny, Lacely, Blushy Baby, Padel, Pizza, Stitch, Cake series) telah tersimpan di <code className="bg-[#FAF7F2] px-1.5 py-0.5 rounded font-mono text-xs">src/data/products.ts</code> dengan harga numerik yang akurat dan placeholder gambar yang rapi dan konsisten.
            </p>
          </div>

          {/* Section 5: Deploy ke GitHub & Vercel */}
          <div className="space-y-2 bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFE5DE]">
            <h4 className="font-heading font-bold text-sm text-[#3E271E] flex items-center gap-2">
              <Github className="w-4 h-4 text-[#3E271E]" />
              <Globe className="w-4 h-4 text-[#D84C74]" />
              <span>5. Upload ke GitHub & Deploy ke Vercel</span>
            </h4>
            <ol className="list-decimal pl-5 space-y-1 text-xs text-[#6B5347]">
              <li>Inisialisasi git dan push repository ke akun GitHub Anda (<code className="font-mono">git init</code>, <code className="font-mono">git commit -m &quot;Initial commit&quot;</code>, <code className="font-mono">git push</code>).</li>
              <li>Buka <strong className="text-[#3E271E]">vercel.com</strong>, login dengan akun GitHub, lalu pilih &quot;Add New Project&quot;.</li>
              <li>Pilih repositori Anda, biarkan framework preset sebagai <strong>Vite</strong>, lalu klik <strong>Deploy</strong>.</li>
              <li>Website Anda langsung online dengan URL publik gratis!</li>
            </ol>
          </div>

        </div>

        {/* Footer Button */}
        <div className="p-4 sm:p-5 border-t border-[#F0E4DC] bg-[#FFFDFC] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#D84C74] hover:bg-[#C23C62] transition-colors"
          >
            Mengerti & Tutup Panduan
          </button>
        </div>

      </div>
    </div>
  );
};
