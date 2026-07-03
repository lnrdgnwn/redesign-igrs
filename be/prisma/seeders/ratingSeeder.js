export async function seedRatings(prisma) {
  const ratings = [
    {
      id: 1,
      title: "3+",
      age: 3,
      image_url: "/assets/rating/Rating-3.png",
      summary: "Konten sesuai untuk usia 3 tahun ke atas.",
      description: "Game dengan rating 3+ dirancang agar aman dimainkan oleh anak usia dini dan dapat diakses oleh seluruh anggota keluarga. Konten dalam kategori ini tidak mengandung unsur kekerasan, bahasa kasar, tema menakutkan, perjudian, ataupun konten yang berpotensi memberikan dampak negatif bagi perkembangan anak. Karakter dan visual biasanya disajikan dengan gaya ramah anak, penuh warna, serta berfokus pada edukasi, kreativitas, hiburan ringan, atau aktivitas sederhana yang mudah dipahami."
    },
    {
      id: 2,
      title: "7+",
      age: 7,
      image_url: "/assets/rating/Rating-7.png",
      summary: "Konten sesuai untuk usia 7 tahun ke atas.",
      description: "Game dengan rating 7+ ditujukan bagi anak usia sekolah dasar yang mulai mampu memahami tantangan dan cerita yang lebih beragam. Konten dalam kategori ini dapat menampilkan konflik ringan, adegan kartun yang tidak realistis, atau unsur kompetisi sederhana yang masih aman bagi anak. Meskipun demikian, orang tua tetap disarankan memberikan pendampingan agar anak dapat memahami isi permainan secara positif dan sesuai dengan tahap perkembangannya."
    },
    {
      id: 3,
      title: "13+",
      age: 13,
      image_url: "/assets/rating/Rating-13.png",
      summary: "Konten sesuai untuk usia 13 tahun ke atas.",
      description: "Game dengan rating 13+ diperuntukkan bagi remaja yang telah memiliki kemampuan memahami tema dan interaksi yang lebih kompleks. Konten dalam kategori ini dapat mencakup kekerasan ringan hingga sedang, penggunaan bahasa yang sedikit kasar, tema emosional yang lebih mendalam, serta fitur komunikasi daring dengan pemain lain. Orang tua dianjurkan untuk mengetahui jenis permainan yang dimainkan dan memberikan arahan mengenai penggunaan internet yang aman dan bertanggung jawab."
    },
    {
      id: 4,
      title: "15+",
      age: 15,
      image_url: "/assets/rating/Rating-15.png",
      summary: "Konten sesuai untuk usia 15 tahun ke atas.",
      description: "Game dengan rating 15+ ditujukan bagi remaja yang memiliki tingkat kedewasaan lebih tinggi dalam memahami berbagai situasi dan tema dalam permainan. Kontennya dapat memuat adegan kekerasan yang lebih intens, penggunaan bahasa yang lebih tegas, konflik sosial, tekanan emosional, maupun tema yang memerlukan penilaian kritis. Orang tua atau wali tetap disarankan untuk memperhatikan jenis konten yang diakses agar sesuai dengan usia dan kondisi psikologis pemain."
    },
    {
      id: 5,
      title: "18+",
      age: 18,
      image_url: "/assets/rating/Rating-18.png",
      summary: "Konten hanya untuk orang dewasa usia 18 tahun ke atas.",
      description: "Game dengan rating 18+ hanya diperuntukkan bagi orang dewasa yang telah memiliki tingkat kematangan penuh dalam memahami berbagai bentuk konten. Permainan dalam kategori ini dapat mengandung kekerasan intens, bahasa vulgar, perjudian, penggunaan zat adiktif, tema sensitif, atau unsur seksual yang tidak sesuai untuk anak dan remaja. Karena menghadirkan pengalaman yang lebih realistis dan kompleks, kategori ini tidak disarankan dimainkan oleh pengguna di bawah usia 18 tahun."
    }
  ];

  for (const rating of ratings) {
    await prisma.rating.upsert({
      where: { id: rating.id },
      update: rating,
      create: rating,
    });
  }

  console.log('✅ Ratings seeded (5 kategori usia)');
}
