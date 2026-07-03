export async function seedBlogs(prisma) {
  const blogs = [
    {
      id: 1,
      title: "Mengenal IGRS: Sistem Rating Game Resmi Indonesia",
      slug: "mengenal-igrs-sistem-rating-game-resmi-indonesia",
      description: "Indonesia Game Rating System (IGRS) adalah sistem klasifikasi usia untuk permainan interaktif elektronik yang dikelola oleh Kementerian Komunikasi dan Digital (Komdigi). Sistem ini bertujuan untuk memberikan panduan kepada orang tua, pendidik, serta masyarakat dalam memilih game yang sesuai dengan usia dan tingkat kematangan pengguna. Melalui klasifikasi usia dan deskriptor konten, IGRS membantu mengidentifikasi unsur-unsur seperti kekerasan, bahasa kasar, ketakutan, perjudian simulatif, maupun interaksi daring yang terdapat dalam sebuah game. Kehadiran IGRS menjadi langkah penting dalam menciptakan ekosistem game yang sehat, aman, dan bertanggung jawab di Indonesia. Dengan memahami rating yang tertera pada setiap game, pengguna dapat membuat keputusan yang lebih bijak sebelum memainkan atau memberikan akses permainan kepada anak-anak. Sejak Januari 2026, seluruh game yang beredar secara resmi di Indonesia diwajibkan memiliki sertifikasi IGRS sebagai bentuk perlindungan konsumen dan dukungan terhadap industri game nasional.",
      image_url: "/assets/blog/Mengenal-IGRS.png"
    },
    {
      id: 2,
      title: "Peran Orang Tua dalam Mendampingi Anak Bermain Game",
      slug: "peran-orang-tua-mendampingi-anak-bermain-game",
      description: "Permainan digital telah menjadi bagian dari kehidupan sehari-hari anak-anak dan remaja. Meskipun game dapat memberikan manfaat seperti melatih kemampuan berpikir, kreativitas, kerja sama tim, dan pemecahan masalah, penggunaan yang tidak terkontrol juga dapat menimbulkan berbagai risiko. Game dengan fitur komunikasi daring memungkinkan anak berinteraksi dengan orang yang tidak dikenal, sementara beberapa game mungkin mengandung konten yang belum sesuai dengan usia mereka. Oleh karena itu, peran orang tua sangat penting dalam mendampingi anak saat bermain game. Orang tua disarankan untuk memahami sistem rating IGRS, memeriksa klasifikasi usia sebelum mengizinkan anak memainkan suatu game, serta berdiskusi mengenai aktivitas yang dilakukan anak selama bermain. Pendampingan yang baik tidak hanya membantu melindungi anak dari paparan konten yang tidak sesuai, tetapi juga mendorong terbentuknya kebiasaan bermain yang sehat, seimbang, dan bertanggung jawab. Dengan literasi digital yang baik, orang tua dapat menjadikan game sebagai sarana hiburan sekaligus media pembelajaran yang positif bagi perkembangan anak.",
      image_url: "/assets/blog/Peran-Orang-Tua.png"
    },
    {
      id: 3,
      title: "Perkembangan Industri Game Lokal Indonesia",
      slug: "perkembangan-industri-game-lokal-indonesia",
      description: "Indonesia telah melahirkan banyak studio game berkualitas seperti Toge Productions, Mojiken Studio, Digital Happiness, dan Stairway Games. Judul-judul seperti Troublemaker, A Space for the Unbound, DreadOut berhasil menembus pasar global dan memperkenalkan budaya Nusantara. IGRS turut mendukung ekosistem ini dengan memastikan setiap game lokal dilabeli rating yang tepat.",
      image_url: "/assets/blog/Perkembangan-Industri-Game-Lokal.png"
    },
  ];

  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { id: blog.id },
      update: blog,
      create: blog,
    });
  }

  console.log('✅ Blogs seeded (3 artikel edukasi IGRS)');
}
