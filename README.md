# Crumbciz Cheesecake Website

Website untuk memesan cheesecake dengan custom topping dan sauce. Dibuat dengan HTML, CSS, dan JavaScript.

## 🌐 Live Demo

Website ini dihosting di GitHub Pages dan dapat diakses secara publik.

## ✨ Fitur

- ✅ Pilih topping (Strawberry, Milo, Oreo, Regal, Original)
- ✅ Pilih sauce (Strawberry, Chocolate, Mango, Original)
- ✅ Kalkulasi harga otomatis
- ✅ Form order dengan nama dan alamat
- ✅ Direct order via WhatsApp
- ✅ Responsive design (Mobile, Tablet, Desktop)

## 🚀 Cara Deploy ke GitHub Pages

1. **Buat repository baru di GitHub**
   - Buka [GitHub](https://github.com)
   - Klik "New repository"
   - Beri nama repository (contoh: `cheesecake-website`)
   - Pilih Public
   - Jangan centang "Initialize with README"

2. **Upload file ke GitHub**
   ```bash
   # Inisialisasi git
   git init
   
   # Tambahkan semua file
   git add .
   
   # Commit
   git commit -m "Initial commit: Cheesecake website"
   
   # Tambahkan remote repository
   git remote add origin https://github.com/USERNAME/cheesecake-website.git
   
   # Push ke GitHub
   git branch -M main
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages**
   - Buka repository di GitHub
   - Klik **Settings** → **Pages**
   - Di bagian **Source**, pilih **main branch**
   - Klik **Save**
   - Tunggu beberapa menit, website akan live di:
     `https://USERNAME.github.io/cheesecake-website/`

## 📁 Struktur File

```
├── index.html          # Halaman utama (static version)
├── assets/
│   ├── css/
│   │   └── styles.css  # Styling website
│   └── js/
│       └── main.js     # JavaScript functionality
├── topping/            # Foto topping
├── sauce/              # Foto sauce
└── README.md
```

## 🎨 Palet Warna

- Primary Red: `#de1f1d`
- Deep Red: `#b22222`
- Gold: `#ffd700`
- Pink: `#fb4151`
- Background: `#f8f2ed`

## 📱 Responsive

Website sudah dioptimasi untuk:
- 📱 Mobile (320px - 768px)
- 📱 Tablet (769px - 1024px)
- 💻 Desktop (1025px+)

## 📞 Kontak

WhatsApp: 082189776753

## 📝 Catatan

- File PHP (`index.php`, `partials/`) tidak digunakan di GitHub Pages
- Gunakan `index.html` untuk GitHub Pages
- Semua path sudah disesuaikan untuk static hosting

---

Made with ❤️ for Crumbciz Cheesecake

