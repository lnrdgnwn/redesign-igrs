# IGRS Redesign Backend API

Ini adalah repositori Backend (Node.js + Express + Prisma) untuk proyek Redesign IGRS (Indonesian Game Rating System). Backend ini menyediakan RESTful API untuk melayani data game, rating, klasifikasi konten, dan blog artikel kepada aplikasi.

## 🛠️ Teknologi yang Digunakan
- **Node.js** & **Express.js** (Framework)
- **Prisma** (ORM)
- **MySQL** (Database)
- **Swagger** (API Documentation)

---

## 📋 Persyaratan Sistem (Prerequisites)
Sebelum menjalankan proyek ini, pastikan Anda telah menginstal:
1. [Node.js](https://nodejs.org/)

---

## 🚀 Panduan Setup Lokal (Untuk Tim Frontend & Developer)

Ikuti langkah-langkah di bawah ini untuk menjalankan server backend secara lokal di komputer Anda:

### 1. Instalasi Dependensi
Buka terminal di dalam folder `be` (backend), lalu jalankan:
```bash
npm install
```

### 2. Konfigurasi Environment Variables
Gandakan (copy) file `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
*(Atau Anda bisa membuat file `.env` baru secara manual lalu menyalin isi dari `.env.example`)*.
Pastikan konfigurasi `DATABASE_URL` di dalam file `.env` sudah sesuai (secara default sudah dikonfigurasi untuk terhubung ke Docker MySQL lokal).

### 4. Setup Prisma (Generate & Migrasi)
Setelah database menyala, Lakukan generate Prisma Client dan melakukan migrasi struktur tabel (schema) ke dalam database:
```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Memasukkan Data Awal (Seeding)
Agar langsung memiliki data dummy untuk dikerjakan, jalankan proses seeding:
```bash
npx prisma db seed
# ATAU jika script di atas tidak jalan, gunakan:
node prisma/seed.js
```

### 6. Jalankan Server Development
Setelah semuanya siap, jalankan server backend:
```bash
npm run dev
```
Server akan menyala dan mendengarkan permintaan di port default (biasanya `http://localhost:3000` atau sesuai di file `.env`).

---

## 📚 Dokumentasi API (Swagger)
Dokumentasi interaktif untuk seluruh Endpoint API menggunakan Swagger. 
Saat server backend dalam keadaan menyala, buka browser dan akses link berikut:

👉 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)** 

---

## 📁 Struktur Direktori Singkat
- `/src/controllers` : Menangani logika HTTP request/response.
- `/src/services` : Menangani logika bisnis inti (Business Logic).
- `/src/repositories` : Menangani interaksi langsung dengan database (Query Prisma).
- `/src/middlewares` : Global Error Handler & Async Handler.
- `/src/utils` : Helper terpusat untuk standardisasi format JSON response.
- `/prisma/seeders` : Berisi data dummy terpisah untuk memudahkan seeding awal.
---