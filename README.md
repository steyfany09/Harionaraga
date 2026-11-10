# 🎀 Harionaraga - Katalog Aksesori Lucu & Estetik

Website katalog e-commerce untuk produk aksesori manis, *bag charms*, gantungan kunci, dan *phone straps* Harionaraga dengan integrasi pemesanan via Instagram DM.

Dibuat menggunakan **React 19**, **Vite**, **Tailwind CSS v4**, dan **TypeScript**.

---

## 📋 Prasyarat Sistem (Prerequisites)

Sebelum menjalankan proyek ini di komputer lokal, pastikan Anda telah menginstal:

1. **Node.js** (Disarankan versi LTS v18.x, v20.x, atau v22.x ke atas)  
   Unduh di: [https://nodejs.org/](https://nodejs.org/)
2. **NPM** (Otomatis terpasang saat menginstal Node.js) atau package manager pilihan Anda (`pnpm` / `yarn`).
3. **Web Browser** modern (Chrome, Edge, Firefox, Brave, dsb.)

Untuk memeriksa apakah Node.js dan npm sudah terpasang, buka Command Prompt (CMD) / PowerShell / Terminal dan jalankan:
```bash
node -v
npm -v
```

---

## 🚀 Panduan Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah berikut untuk menjalankan website di komputer Anda:

### 1. Buka Terminal di Folder Proyek
Buka terminal (PowerShell, Command Prompt, atau Terminal di VS Code) dan pastikan Anda berada di direktori proyek ini:
```bash
cd path/ke/Harionaraga
```

---

### 2. Pasang Dependensi (Install Dependencies)
Jalankan perintah berikut untuk mengunduh semua library yang diperlukan:
```bash
npm install
```
> **Catatan:** Proyek ini telah dilengkapi konfigurasi `.npmrc` dengan `legacy-peer-deps=true` untuk memastikan kecocokan antar dependensi.

---

### 3. Konfigurasi Environment Variables (Opsional)
Salin file `.env.example` menjadi `.env`:

* **Di Windows (PowerShell):**
  ```powershell
  Copy-Item .env.example .env
  ```
* **Di Command Prompt (CMD):**
  ```cmd
  copy .env.example .env
  ```
* **Di macOS / Linux:**
  ```bash
  cp .env.example .env
  ```

Buka file `.env` jika Anda ingin mengonfigurasi API Key (misalnya `GEMINI_API_KEY` untuk fitur AI bila diaktifkan):
```env
GEMINI_API_KEY="isi_api_key_disini"
APP_URL="http://localhost:3000"
```
*(Aplikasi tetap dapat berjalan untuk navigasi katalog dan pemesanan meskipun API key belum diisi)*

---

### 4. Jalankan Development Server
Mulai server lokal dengan menjalankan:
```bash
npm run dev
```

Setelah server aktif, terminal akan menampilkan URL lokal:
```text
  VITE v8.3.0  ready in 350 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://<ip-komputer>:3000/
```

---

### 5. Buka di Browser
Buka browser favorit Anda dan akses alamat berikut:
👉 **[http://localhost:3000](http://localhost:3000)**

Tekan `Ctrl + C` di terminal jika ingin menghentikan server lokal.

---

## 🛠️ Perintah yang Tersedia (Available Scripts)

Berikut daftar perintah yang dapat dijalankan di terminal:

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server pengembangan lokal di `http://localhost:3000` dengan *Hot Module Replacement* (HMR). |
| `npm run build` | Melakukan *compile* dan *bundle* kode menjadi file statis siap produksi di dalam folder `dist/`. |
| `npm run preview` | Menjalankan server lokal untuk menguji hasil build produksi dari folder `dist/`. |
| `npm run lint` | Melakukan pengecekan tipe data menggunakan TypeScript (`tsc --noEmit`). |

---

## 📁 Struktur Direktori Singkat

```text
Harionaraga/
├── public/                 # File publik statis
├── src/
│   ├── assets/             # Asset gambar produk & logo Harionaraga
│   ├── components/         # Komponen React (Navbar, Hero, Catalog, Modal, dll.)
│   ├── data/               # Data katalog produk (products.ts)
│   ├── App.tsx             # Komponen utama aplikasi
│   ├── index.css           # Styling Tailwind CSS
│   └── main.tsx            # Entry point aplikasi
├── .env.example            # Contoh konfigurasi environment
├── index.html              # Template HTML utama
├── package.json            # Daftar dependensi dan scripts proyek
├── tsconfig.json           # Konfigurasi TypeScript
├── vercel.json             # Konfigurasi deploy Vercel
└── vite.config.ts          # Konfigurasi build Vite
```

---

## ❓ Troubleshooting / Kendala Umum

1. **Port 3000 Sedang Digunakan:**
   Jika port 3000 sedang terpakai oleh aplikasi lain, Anda dapat mengubah port sementara:
   ```bash
   npx vite --port 3001
   ```
2. **Error `node` / `npm` tidak dikenali:**
   Pastikan Node.js sudah diinstal dan opsi *"Add to PATH"* dicentang saat proses instalasi. Setelah instalasi selesai, restart terminal Anda.
3. **Masalah Cache saat Install Dependensi:**
   Jika terjadi masalah saat `npm install`, bersihkan cache dan install ulang:
   ```bash
   npm cache clean --force
   npm install
   ```
