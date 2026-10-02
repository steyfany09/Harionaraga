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
 * TAUTAN RESMI INSTAGRAM HARIONARAGA
 * Digunakan sebagai saluran utama pemesanan produk via DM Instagram.
 */
export const INSTAGRAM_URL = "https://www.instagram.com/harionaraga.id?stkn=bmw1NG05N3l5bTNl";
export const INSTAGRAM_HANDLE = "@harionaraga.id";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'blushy-baby' | 'stitch' | 'cake' | 'bunny' | 'lacely-padel' | 'others';
  categoryLabel: string;
  image: string;
  stock: number; // Jumlah stok (Data simulasi untuk demo & tugas kuliah)
  stockStatus: 'Tersedia' | 'Pre-Order' | 'Stok Habis';
  description?: string;
}

export interface StoreConfig {
  brandName: string;
  tagline: string;
  subtitle: string;
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
  instagramHandle: INSTAGRAM_HANDLE,
  instagramUrl: INSTAGRAM_URL,
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
 * 
 * CATATAN SIMULASI STOK:
 * Jumlah stok di bawah ini (antara 2 hingga 5 buah) adalah data simulasi
 * untuk kebutuhan presentasi & demo tugas kuliah Manajemen Proyek, bukan stok aktual yang sudah dikonfirmasi klien.
 * Nilai stok dapat diperbarui kapan saja secara manual pada file ini.
 */
export const PRODUCTS: Product[] = [
  {
    id: 'hn-01',
    name: 'Foxy',
    price: 65000,
    category: 'others',
    categoryLabel: 'Koleksi Spesial',
    image: foxyImg,
    stock: 3,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-02',
    name: 'Pookoo',
    price: 65000,
    category: 'others',
    categoryLabel: 'Koleksi Spesial',
    image: pookooImg,
    stock: 2,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-03',
    name: 'Bunny 01',
    price: 45000,
    category: 'bunny',
    categoryLabel: 'Bunny Series',
    image: bunny01Img,
    stock: 4,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-04',
    name: 'Bunny 02',
    price: 45000,
    category: 'bunny',
    categoryLabel: 'Bunny Series',
    image: bunny02Img,
    stock: 3,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-05',
    name: 'Lacely 01',
    price: 50000,
    category: 'lacely-padel',
    categoryLabel: 'Lacely Series',
    image: lacely01Img,
    stock: 5,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-06',
    name: 'Lacely 02',
    price: 50000,
    category: 'lacely-padel',
    categoryLabel: 'Lacely Series',
    image: lacely02Img,
    stock: 2,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-07',
    name: 'Blushy Baby 01',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby01Img,
    stock: 4,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-08',
    name: 'Blushy Baby 02',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby02Img,
    stock: 3,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-09',
    name: 'Blushy Baby 03',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby03Img,
    stock: 5,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-10',
    name: 'Blushy Baby 04',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby04Img,
    stock: 2,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-11',
    name: 'Blushy Baby 05',
    price: 65000,
    category: 'blushy-baby',
    categoryLabel: 'Blushy Baby Series',
    image: blushyBaby05Img,
    stock: 4,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-12',
    name: 'Padel 01',
    price: 30000,
    category: 'lacely-padel',
    categoryLabel: 'Padel Series',
    image: padel01Img,
    stock: 3,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-13',
    name: 'Padel 02',
    price: 30000,
    category: 'lacely-padel',
    categoryLabel: 'Padel Series',
    image: padel02Img,
    stock: 5,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-14',
    name: 'Pizza',
    price: 40000,
    category: 'others',
    categoryLabel: 'Koleksi Spesial',
    image: pizzaImg,
    stock: 2,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-15',
    name: 'Stitch 01',
    price: 55000,
    category: 'stitch',
    categoryLabel: 'Stitch Series',
    image: stitch01Img,
    stock: 4,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-16',
    name: 'Stitch 02',
    price: 55000,
    category: 'stitch',
    categoryLabel: 'Stitch Series',
    image: stitch02Img,
    stock: 3,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-17',
    name: 'Stitch 03',
    price: 55000,
    category: 'stitch',
    categoryLabel: 'Stitch Series',
    image: stitch03Img,
    stock: 2,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-18',
    name: 'Stitch 04',
    price: 55000,
    category: 'stitch',
    categoryLabel: 'Stitch Series',
    image: stitch04Img,
    stock: 5,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-19',
    name: 'Purple Roll Cake',
    price: 55000,
    category: 'cake',
    categoryLabel: 'Cake Series',
    image: purpleRollCakeImg,
    stock: 3,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-20',
    name: 'Pudding Cake',
    price: 55000,
    category: 'cake',
    categoryLabel: 'Cake Series',
    image: puddingCakeImg,
    stock: 4,
    stockStatus: 'Tersedia',
  },
  {
    id: 'hn-21',
    name: 'Slice Cake',
    price: 55000,
    category: 'cake',
    categoryLabel: 'Cake Series',
    image: sliceCakeImg,
    stock: 2,
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
    title: 'Pesan Langsung via Instagram',
    description: 'Tanpa perlu repot membuat akun. Pilih produk di katalog, klik tombol, dan langsung hubungi DM Instagram resmi @harionaraga.id.',
    iconName: 'Instagram',
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
    desc: 'Jelajahi katalog kami, periksa ketersediaan stok, dan pilih model bag charm atau gantungan kunci kesukaanmu.',
  },
  {
    step: '02',
    title: 'Klik Pesan via Instagram',
    desc: 'Klik tombol pemesanan untuk langsung menuju profil dan DM Instagram resmi @harionaraga.id.',
  },
  {
    step: '03',
    title: 'Kirim DM & Konfirmasi',
    desc: 'Sampaikan nama produk yang ingin dipesan (beserta request kustom jika ada). Admin akan mengonfirmasi ketersediaan & ongkir.',
  },
  {
    step: '04',
    title: 'Pesanan Dikirim ke Alamatmu',
    desc: 'Setelah pembayaran terverifikasi, pesanan dirangkai dan dikemas cantik kemudian dikirim aman ke alamatmu.',
  },
];

/**
 * Format angka ke format Rupiah standar Indonesia, misalnya Rp65.000
 */
export function formatRupiah(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`;
}

/**
 * Tautan pemesanan resmi via Instagram Harionaraga
 */
export function buildInstagramOrderUrl(product?: Product, customNote: string = ''): string {
  return INSTAGRAM_URL;
}

/**
 * Helper kompatibilitas lama yang mengarahkan ke link Instagram resmi
 */
export function buildProductWhatsAppUrl(product: Product, customNote: string = ''): string {
  return INSTAGRAM_URL;
}

export function buildGeneralWhatsAppUrl(topic: string = 'Tanya Produk'): string {
  return INSTAGRAM_URL;
}
