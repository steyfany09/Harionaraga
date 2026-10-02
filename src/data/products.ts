/**
 * DATA PRODUK & KONFIGURASI KATALOG HARIONARAGA
 * 
 * Seluruh 21 produk Harionaraga telah dihubungkan langsung dengan file foto asli (.jpeg)
 * yang tersimpan di dalam folder /src/assets/images/.
 */

// Import 21 Foto Asli Produk Harionaraga
import foxyImg from '../assets/images/Foxy.jpeg';
import pookooImg from '../assets/images/Pookoo.jpeg';
import bunny01Img from '../assets/images/Bunny 01.jpeg';
import bunny02Img from '../assets/images/Bunny 02.jpeg';
import lacely01Img from '../assets/images/Lacely 01.jpeg';
import lacely02Img from '../assets/images/Lacely 02.jpeg';
import blushyBaby01Img from '../assets/images/Blushy Baby 01.jpeg';
import blushyBaby02Img from '../assets/images/Blushy Baby 02.jpeg';
import blushyBaby03Img from '../assets/images/Blushy Baby 03.jpeg';
import blushyBaby04Img from '../assets/images/Blushy Baby 04.jpeg';
import blushyBaby05Img from '../assets/images/Blushy Baby 05.jpeg';
import padel01Img from '../assets/images/Padel 01.jpeg';
import padel02Img from '../assets/images/Padel 02.jpeg';
import pizzaImg from '../assets/images/Pizza.jpeg';
import stitch01Img from '../assets/images/Stitch 01.jpeg';
import stitch02Img from '../assets/images/Stitch 02.jpeg';
import stitch03Img from '../assets/images/Stitch 03.jpeg';
import stitch04Img from '../assets/images/Stitch 04.jpeg';
import purpleRollCakeImg from '../assets/images/Purple Roll Cake.jpeg';
import puddingCakeImg from '../assets/images/Pudding Cake.jpeg';
import sliceCakeImg from '../assets/images/Slice Cake.jpeg';

// Import Foto Profil / Logo Resmi Harionaraga dari Instagram Klien
import brandLogoImg from '../assets/images/logo-harionaraga.jpeg';

export const BRAND_ASSETS = {
  logo: brandLogoImg,
};

/**
 * KONFIGURASI NOMOR WHATSAPP RESMI HARIONARAGA
 * 
 * CATATAN PENTING:
 * Nomor di bawah ini adalah nomor PLACEHOLDER sementara.
 * Harap ganti nilai WHATSAPP_NUMBER dengan nomor resmi WhatsApp bisnis Harionaraga
 * milik klien sebelum website dipublikasikan (go-live).
 * Gunakan format angka internasional tanpa spasi, strip, atau tanda plus (contoh: '6281234567890').
 */
export const WHATSAPP_NUMBER = "6281234567890"; // <-- PLACEHOLDER: Ganti dengan nomor resmi klien sebelum publikasi
export const DISPLAY_WHATSAPP = "+62 812-3456-7890";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'blushy-baby' | 'stitch' | 'cake' | 'bunny' | 'lacely-padel' | 'others';
  categoryLabel: string;
  image: string;
  stockStatus: 'Tersedia' | 'Pre-Order';
  description?: string;
}

export interface StoreConfig {
  brandName: string;
  tagline: string;
  subtitle: string;
  whatsappNumber: string;
  displayPhone: string;
  instagramHandle: string;
  instagramUrl: string;
  operationalHours: string;
  locationCity: string;
  projectNote: string;
}

export const STORE_CONFIG: StoreConfig = {
  brandName: "Harionaraga",
  tagline: "Aksesori Lucu & Estetik untuk Setiap Momen Manismu",
  subtitle: "Koleksi bag charms, gantungan kunci, dan pernak-pernik handmade pastel yang dirancang dengan teliti untuk mempercantik tas dan barang kesayanganmu.",
  whatsappNumber: WHATSAPP_NUMBER,
  displayPhone: DISPLAY_WHATSAPP,
  instagramHandle: "@harionaraga",
  instagramUrl: "https://instagram.com",
  operationalHours: "Senin - Sabtu: 09.00 - 18.00 WIB",
  locationCity: "Jakarta & Sekitarnya (Kirim Seluruh Indonesia)",
  projectNote: "Proyek Mata Kuliah Manajemen Proyek — Dikembangkan untuk simulasi bisnis e-commerce katalog nyata.",
};

export const HERO_ASSETS = {
  heroImage: blushyBaby01Img,
};

export const CATEGORIES = [
  { id: 'all', label: 'Semua Produk' },
  { id: 'blushy-baby', label: 'Blushy Baby' },
  { id: 'stitch', label: 'Stitch Series' },
  { id: 'cake', label: 'Cake Series' },
  { id: 'bunny', label: 'Bunny Series' },
  { id: 'lacely-padel', label: 'Lacely & Padel' },
  { id: 'others', label: 'Foxy, Pookoo & Lainnya' },
] as const;

/**
 * DAFTAR LENGKAP 21 PRODUK HARIONARAGA
 * Terhubung 1-to-1 dengan file foto asli di /src/assets/images/
 */
export const PRODUCTS: Product[] = [
  {
    id: 'hn-01',
    name: 'Foxy',
    price: 65000,
    category: 'others',
    categoryLabel: 'Koleksi Spesial',
    image: foxyImg,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-02',
    name: 'Pookoo',
    price: 65000,
    category: 'others',
    categoryLabel: 'Koleksi Spesial',
    image: pookooImg,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-03',
    name: 'Bunny 01',
    price: 45000,
    category: 'bunny',
    categoryLabel: 'Bunny Series',
    image: bunny01Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-04',
    name: 'Bunny 02',
    price: 45000,
    category: 'bunny',
    categoryLabel: 'Bunny Series',
    image: bunny02Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-05',
    name: 'Lacely 01',
    price: 50000,
    category: 'lacely-padel',
    categoryLabel: 'Lacely Series',
    image: lacely01Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-06',
    name: 'Lacely 02',
    price: 50000,
    category: 'lacely-padel',
    categoryLabel: 'Lacely Series',
    image: lacely02Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-07',
    name: 'Blushy Baby 01',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby01Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-08',
    name: 'Blushy Baby 02',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby02Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-09',
    name: 'Blushy Baby 03',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby03Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-10',
    name: 'Blushy Baby 04',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby04Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-11',
    name: 'Blushy Baby 05',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby05Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-12',
    name: 'Padel 01',
    price: 30000,
    category: 'lacely-padel',
    categoryLabel: 'Padel Series',
    image: padel01Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-13',
    name: 'Padel 02',
    price: 30000,
    category: 'lacely-padel',
    categoryLabel: 'Padel Series',
    image: padel02Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-14',
    name: 'Pizza',
    price: 40000,
    category: 'others',
    categoryLabel: 'Koleksi Spesial',
    image: pizzaImg,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-15',
    name: 'Stitch 01',
    price: 55000,
    category: 'stitch',
    categoryLabel: 'Stitch Series',
    image: stitch01Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-16',
    name: 'Stitch 02',
    price: 55000,
    category: 'stitch',
    categoryLabel: 'Stitch Series',
    image: stitch02Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-17',
    name: 'Stitch 03',
    price: 55000,
    category: 'stitch',
    categoryLabel: 'Stitch Series',
    image: stitch03Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-18',
    name: 'Stitch 04',
    price: 55000,
    category: 'stitch',
    categoryLabel: 'Stitch Series',
    image: stitch04Img,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-19',
    name: 'Purple Roll Cake',
    price: 55000,
    category: 'cake',
    categoryLabel: 'Cake Series',
    image: purpleRollCakeImg,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-20',
    name: 'Pudding Cake',
    price: 55000,
    category: 'cake',
    categoryLabel: 'Cake Series',
    image: puddingCakeImg,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-21',
    name: 'Slice Cake',
    price: 55000,
    category: 'cake',
    categoryLabel: 'Cake Series',
    image: sliceCakeImg,
    stockStatus: 'Tersedia',
  },
];

export const ADVANTAGES = [
  {
    id: 'adv-1',
    title: 'Desain Estetik & Manis',
    description: 'Kombinasi warna pastel lembut, manik berkualitas, dan pita manis yang dirancang khusus agar serasi dengan berbagai tas dan gaya sehari-hari.',
    iconName: 'Sparkles',
  },
  {
    id: 'adv-2',
    title: '100% Teliti & Handmade',
    description: 'Dirangkai manual satu per satu dengan ketelitian tinggi, sambungan kuat, dan pemilihan bahan yang tidak mudah luntur atau berkarat.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'adv-3',
    title: 'Bisa Custom Order',
    description: 'Ingin request inisial nama, warna beads khusus, atau paduan charm favorit? Kami menerima pesanan kustom sesuai keinginanmu.',
    iconName: 'Palette',
  },
  {
    id: 'adv-4',
    title: 'Kemasan Rapi & Cantik',
    description: 'Setiap pesanan dikemas estetik dengan pouch atau greeting card manis. Sangat cocok juga dihadiahkan langsung untuk sahabat tersayang.',
    iconName: 'Gift',
  },
  {
    id: 'adv-5',
    title: 'Pesan Langsung via WhatsApp',
    description: 'Tanpa perlu repot membuat akun atau login. Pilih produk di katalog, klik tombol, dan langsung terhubung dengan admin ramah kami.',
    iconName: 'MessageCircle',
  },
  {
    id: 'adv-6',
    title: 'Harga Terjangkau Mahasiswa',
    description: 'Produk aksesori berkualitas tinggi dengan rentang harga bersahabat tanpa mengorbankan kerapian dan estetika.',
    iconName: 'Tag',
  },
];

export const ORDER_STEPS = [
  {
    step: '01',
    title: 'Pilih Aksesori Favorit',
    desc: 'Jelajahi katalog kami, pilih model bag charm, gantungan kunci, atau koleksi karakter favoritmu.',
  },
  {
    step: '02',
    title: 'Klik Pesan via WhatsApp',
    desc: 'Sistem otomatis menyiapkan rincian nama produk dan harga untuk dikirim ke chat WhatsApp admin.',
  },
  {
    step: '03',
    title: 'Konfirmasi & Pembayaran',
    desc: 'Admin Harionaraga akan mengonfirmasi ketersediaan, opsi kustom (jika ada), ongkos kirim, dan metode transfer/QRIS.',
  },
  {
    step: '04',
    title: 'Pesanan Dikirim ke Alamatmu',
    desc: 'Produk dikemas cantik dengan aman dan nomor resi pengiriman akan segera diinfokan setelah paket dikirim.',
  },
];

/**
 * Format angka ke format Rupiah standar Indonesia, misalnya Rp65.000
 */
export function formatRupiah(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`;
}

/**
 * Membuat link WhatsApp untuk memesan produk tertentu
 * Menggunakan encodeURIComponent agar pesan, karakter khusus, dan spasi aman di URL.
 */
export function buildProductWhatsAppUrl(product: Product, customNote: string = ''): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const greeting = `Halo admin Harionaraga! ✨`;
  const intent = `Saya tertarik untuk memesan produk dari katalog website:`;
  const itemDetail = `• Nama Produk: ${product.name}\n• Harga: ${formatRupiah(product.price)}`;
  
  let noteText = '';
  if (customNote.trim()) {
    noteText = `\n• Catatan Khusus / Permintaan: ${customNote.trim()}`;
  }

  const closing = `\nApakah produk ini masih tersedia dan bagaimana rincian pemesanannya? Terima kasih! 💕`;

  const fullMessage = `${greeting}\n\n${intent}\n${itemDetail}${noteText}\n${closing}`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(fullMessage)}`;
}

/**
 * Membuat link WhatsApp untuk konsultasi umum atau kustom order
 */
export function buildGeneralWhatsAppUrl(topic: string = 'Tanya Produk'): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, '');
  const message = `Halo admin Harionaraga! ✨\n\nSaya ingin bertanya atau konsultasi mengenai: *${topic}* di katalog Harionaraga.\n\nBisa dibantu untuk informasi lebih lanjut? Terima kasih! 💕`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
