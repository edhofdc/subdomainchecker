/**
 * Service untuk berinteraksi dengan crt.sh API.
 * Mengambil data subdomain berdasarkan domain yang diberikan.
 */

// Menggunakan proxy lokal (Vite) atau Netlify Redirects untuk menghindari CORS
const BASE_URL = '/api/crtsh';

/**
 * Mengambil daftar subdomain dari crt.sh.
 * @param {string} domain - Domain target (contoh: example.com)
 * @returns {Promise<string[]>} - Promise yang berisi array subdomain unik.
 */
export const fetchSubdomains = async (domain) => {
  if (!domain) {
    throw new Error('Domain tidak boleh kosong.');
  }

  try {
    // Menggunakan wildcard %.domain untuk mendapatkan semua subdomain
    const url = `${BASE_URL}/?q=%.${domain}&output=json`;
    
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
        // crt.sh kadang mengembalikan format lain jika error atau tidak ada hasil
        return [];
    }

    // Set untuk menyimpan subdomain unik
    const uniqueSubdomains = new Set();

    data.forEach((entry) => {
      // Ambil common_name
      if (entry.common_name) {
        uniqueSubdomains.add(entry.common_name.toLowerCase());
      }

      // Ambil name_value (bisa berisi multiple DNS names dipisah newline)
      if (entry.name_value) {
        const names = entry.name_value.split('\n');
        names.forEach((name) => {
          uniqueSubdomains.add(name.trim().toLowerCase());
        });
      }
    });

    // Konversi Set kembali ke Array, filter yang tidak valid, dan sort
    const result = Array.from(uniqueSubdomains)
      .map(sub => sub.replace(/^\*\./, '')) // Hapus wildcard *. di awal
      .filter(sub => sub.endsWith(domain)) // Pastikan subdomain valid (milik domain target)
      .sort();

    return result;

  } catch (error) {
    console.error('Error fetching subdomains:', error);
    throw error;
  }
};
