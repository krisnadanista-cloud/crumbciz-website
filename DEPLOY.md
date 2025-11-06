# 🚀 Panduan Deploy ke GitHub Pages

## Langkah-langkah:

### 1. Install Git (jika belum ada)
Download dari: https://git-scm.com/downloads

### 2. Buka Command Prompt/Terminal di folder project
```bash
cd "D:\MATERI KULIAH TELKOM\XAMP\htdocs\kwh"
```

### 3. Inisialisasi Git
```bash
git init
```

### 4. Buat Repository di GitHub
- Buka https://github.com
- Klik tombol **+** → **New repository**
- Nama repository: `cheesecake-website` (atau nama lain)
- Pilih **Public**
- **JANGAN** centang "Initialize with README"
- Klik **Create repository**

### 5. Tambahkan file ke Git
```bash
git add .
git commit -m "Initial commit: Cheesecake website"
```

### 6. Hubungkan ke GitHub
```bash
git remote add origin https://github.com/USERNAME/cheesecake-website.git
git branch -M main
git push -u origin main
```
*Ganti `USERNAME` dengan username GitHub Anda*

### 7. Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Klik tab **Settings**
3. Scroll ke bagian **Pages** (di sidebar kiri)
4. Di **Source**, pilih **main** branch
5. Klik **Save**
6. Tunggu 1-2 menit

### 8. Akses Website
Website akan live di:
```
https://USERNAME.github.io/cheesecake-website/
```

## ⚠️ Catatan Penting:

1. **File yang di-upload:**
   - ✅ `index.html` (untuk GitHub Pages)
   - ✅ `assets/` (CSS & JS)
   - ✅ `topping/` (foto topping)
   - ✅ `sauce/` (foto sauce)
   - ❌ File PHP tidak di-upload (ada di .gitignore)

2. **Update file:**
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```

3. **Path file:**
   - Pastikan semua path relatif (tidak pakai `/` di awal)
   - Contoh: `assets/css/styles.css` ✅
   - Bukan: `/assets/css/styles.css` ❌

## 🎉 Selesai!

Website Anda sekarang bisa diakses secara publik dari mana saja!

