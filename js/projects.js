/* ==========================================================================
   PROJECTS.JS - Project Data Definitions and Detail Loader (Optional Helper)
   ========================================================================== */

const PROJECTS_DATA = {
  umkm: {
    title: "UMKM Website",
    tagline: "Platform Promosi & Manajemen Digital UMKM Lokal",
    description: "Sebuah platform web modern yang dirancang khusus untuk mendigitalisasi usaha mikro, kecil, dan menengah (UMKM). Platform ini membantu pemilik usaha memamerkan produk mereka secara profesional, menjangkau pasar yang lebih luas, dan mengelola inventaris serta pesanan secara online.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Vercel"],
    github: "https://github.com/Alfian51/umkm",
    demo: "https://umkm-navy.vercel.app/",
    tujuan: "Mempermudah UMKM tradisional dalam transisi menuju era digital melalui antarmuka yang sederhana namun sarat fitur bisnis penting, mengurangi hambatan teknologi bagi pelaku usaha lokal.",
    fitur: [
      "Katalog Produk Interaktif dengan filter kategori.",
      "Formulir Pemesanan langsung terintegrasi ke WhatsApp.",
      "Dashboard admin sederhana untuk mengelola list produk (Client-side mock/storage).",
      "Peta Lokasi Toko fisik terintegrasi Google Maps.",
      "Desain yang sangat responsif, optimal diakses via smartphone."
    ],
    tantangan: "Membuat aplikasi yang ringan namun tetap memiliki visual premium agar produk UMKM terlihat berkelas, serta mengoptimalkan performa loading gambar produk di koneksi internet seluler yang kurang stabil.",
    pembelajaran: "Mendalami optimasi aset gambar modern (.webp), implementasi SEO dasar untuk bisnis lokal, serta bagaimana mendesain user interface (UI) yang ramah pengguna awam (accessible UI/UX)."
  },
  cerpen: {
    title: "Indo Cerpen",
    tagline: "Platform Publikasi & Komunitas Penulis Cerita Pendek Indonesia",
    description: "Aplikasi web wadah kreatif bagi penulis amatir maupun profesional di Indonesia untuk mempublikasikan cerita pendek mereka. Pengguna dapat membaca cerpen dari berbagai kategori, memberikan ulasan, serta menyimpan cerita favorit.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Vercel"],
    github: "https://github.com/Alfian51/Indo-Cerpen",
    demo: "https://web-cerpen.vercel.app/",
    tujuan: "Membangun ekosistem literasi digital di Indonesia dengan menyediakan platform baca-tulis yang intuitif, cepat diakses, dan memiliki tampilan visual yang nyaman untuk membaca jangka panjang.",
    fitur: [
      "Sistem Filter Cerpen berdasarkan genre (Romance, Horror, Sci-Fi, Komedi, dll).",
      "Mode Baca Malam (Dark Mode) khusus untuk meningkatkan kenyamanan visual pembaca.",
      "Fitur bookmark/simpan cerita favorit (menggunakan LocalStorage).",
      "Estimasi waktu membaca (Read Time Calculator) untuk setiap cerpen.",
      "Bagian komentar interaktif di bawah cerita."
    ],
    tantangan: "Mengatur tata letak teks agar nyaman dibaca di layar mobile yang sempit, serta mengimplementasikan state management yang efisien menggunakan Vanilla JavaScript untuk fitur simpan favorit.",
    pembelajaran: "Belajar mengoptimalkan tipografi web (kerning, line-height, font-hierarchy), menguasai manipulasi DOM yang kompleks, serta menerapkan skema warna dinamis (dark/light theme) berbasis CSS Variables."
  },
  kasir: {
    title: "Kasir Caffe",
    tagline: "Point of Sale (POS) Ringan & Modern untuk Bisnis Kafe",
    description: "Sistem aplikasi kasir/Point of Sale berbasis web yang dioptimalkan untuk kebutuhan operasional kafe kecil hingga menengah. Memudahkan pencatatan pesanan, kalkulasi transaksi secara real-time, cetak struk virtual, dan rekapitulasi harian.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Firebase Hosting"],
    github: "https://github.com/Alfian51/Kasir_Caffe",
    demo: "https://kasircafe-f8cdf.web.app/",
    tujuan: "Menyediakan solusi POS gratis, modern, dan mandiri tanpa perlu investasi perangkat keras yang mahal. Cukup gunakan tablet atau laptop yang ada untuk mengelola pesanan kafe.",
    fitur: [
      "Kasir POS dinamis: tambah, kurangi, dan hapus item keranjang dengan kalkulasi otomatis.",
      "Manajemen Menu: Kategori Makanan, Minuman, dan Camilan secara instan.",
      "Kalkulator Kembalian dan diskon transaksi secara real-time.",
      "Generasi struk belanja digital yang siap cetak (Print-friendly format).",
      "Statistik penjualan harian sederhana (Local/Session database)."
    ],
    tantangan: "Memastikan logika keranjang belanja (shopping cart logic) berjalan presisi tanpa bug kalkulasi desimal, serta merancang print template CSS agar pas saat dicetak menggunakan printer thermal mini.",
    pembelajaran: "Menguasai struktur data JavaScript Array & Object yang kompleks untuk transaksi keuangan, belajar merancang template CSS untuk pencetakan fisik (@media print), dan proses deployment menggunakan Google Firebase Suite."
  },
  finance: {
    title: "Smart Finance",
    tagline: "Asisten Cerdas Manajemen Keuangan Personal (Coming Soon)",
    description: "Platform pencatatan keuangan pribadi masa kini yang membantu pengguna melacak pendapatan, pengeluaran, anggaran bulanan, serta memberikan rekomendasi keuangan berbasis AI sederhana untuk membantu mencapai tujuan finansial.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Python", "FastAPI"],
    github: "{{SMART_FINANCE_GITHUB}}",
    demo: "{{SMART_FINANCE_DEMO}}",
    tujuan: "Membantu generasi muda mengelola keuangan harian mereka secara lebih sadar (mindful spending) melalui visualisasi grafik yang interaktif dan pelacakan anggaran yang disiplin.",
    fitur: [
      "Pencatatan Transaksi multi-kategori (Makan, Transportasi, Hiburan, Investasi).",
      "Visualisasi Grafik Keuangan (pie chart & bar chart) bulanan.",
      "Sistem Budget Limit: Peringatan jika pengeluaran melebihi batas anggaran.",
      "Ekspor laporan keuangan ke format PDF / Excel.",
      "AI Recommendation: Tips penghematan mingguan berdasarkan histori transaksi."
    ],
    tantangan: "Mengintegrasikan backend API FastAPI yang aman untuk memproses data finansial sensitif serta mengolah visualisasi grafik dinamis di sisi frontend menggunakan vanilla libraries.",
    pembelajaran: "Perancangan RESTful API menggunakan FastAPI Python, manajemen basis data relasional, pengamanan endpoint API dengan JWT, dan integrasi visualisasi data chart dinamis."
  }
};
