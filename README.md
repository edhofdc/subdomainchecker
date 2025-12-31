# Cyber Subdomain Finder

Aplikasi web futuristik untuk mencari subdomain menggunakan data dari Certificate Transparency (crt.sh).

## Fitur

- **Cyberpunk UI**: Desain futuristik dengan warna neon dan animasi halus.
- **Mobile-First**: Dioptimalkan untuk penggunaan di smartphone.
- **Real-time Scan**: Mengambil data langsung dari crt.sh.
- **Smart Parsing**: Mendeteksi dan membersihkan duplikasi subdomain.
- **Export Tools**: Salin semua hasil ke clipboard atau unduh sebagai file `.txt`.

## Teknologi

- React (Vite)
- CSS Modules
- Fetch API

## Cara Menjalankan

1. Install dependensi:
   ```bash
   npm install
   ```

2. Jalankan development server:
   ```bash
   npm run dev
   ```

3. Buka browser di `http://localhost:5173`

## Struktur Proyek

- `src/components`: Komponen UI (View)
- `src/hooks`: Logika bisnis & state (Presenter)
- `src/services`: API calls (Model)
- `src/styles`: CSS global & variabel tema

## Catatan

Aplikasi ini ditujukan untuk tujuan edukasi dan riset keamanan.
