export async function seedContentClassifications(prisma) {
  const contentClassifications = [
    {
      id: 1,
      title: "Kekerasan",
      content_icon: "/assets/content/Kekerasan.png",
      description: "Konten yang menampilkan aksi kekerasan fisik, pertarungan, penggunaan senjata, atau penggambaran cedera, baik dalam konteks realistis maupun fantasi.",
      rating_id: 3
    },
    {
      id: 2,
      title: "Darah",
      content_icon: "/assets/content/Darah.png",
      description: "Konten yang menampilkan darah atau efek visual cedera berdarah pada karakter, baik secara realistis maupun stilisasi.",
      rating_id: 4
    },
    {
      id: 3,
      title: "Horor",
      content_icon: "/assets/content/Horor.png",
      description: "Konten yang mengandung unsur menakutkan, mengejutkan (jump scare), atau suasana mencekam yang dapat menimbulkan rasa takut atau cemas pada pengguna.",
      rating_id: 4
    },
    {
      id: 4,
      title: "Bahasa Kasar",
      content_icon: "/assets/content/Bahasa-Kasar.png",
      description: "Penggunaan kata-kata yang tidak sopan, umpatan, hinaan, atau bahasa yang bersifat vulgar dan ofensif di dalam permainan.",
      rating_id: 4
    },
    {
      id: 5,
      title: "Interaksi Daring",
      content_icon: "/assets/content/Interaksi-Daring.png",
      description: "Permainan yang memungkinkan interaksi antar pemain melalui fitur obrolan (chat) teks, suara, atau video, yang berpotensi mengekspos pemain kepada konten dari pengguna lain yang tidak dapat dikontrol oleh pengembang.",
      rating_id: 3
    },
    {
      id: 6,
      title: "Penampilan Tokoh",
      content_icon: "/assets/content/Penampilan-Tokoh.png",
      description: "Penggambaran karakter atau tokoh dalam permainan yang mungkin mengandung unsur sugestif, pakaian minim, atau representasi fisik yang tidak sesuai untuk usia tertentu.",
      rating_id: 4
    },
    {
      id: 7,
      title: "Seksualitas/Pornografi",
      content_icon: "/assets/content/Seksualitas-Pornografi.png",
      description: "Penggambaran aktivitas seksual, ketelanjangan eksplisit, atau konten yang berorientasi dewasa secara seksual.",
      rating_id: 5
    },
    {
      id: 8,
      title: "Perjudian",
      content_icon: "/assets/content/Perjudian.png",
      description: "Simulasi atau instruksi aktivitas perjudian di dalam permainan, termasuk mekanisme taruhan, kasino virtual, atau sistem loot box yang menyerupai konsep perjudian.",
      rating_id: 5
    },
    {
      id: 9,
      title: "Zat Adiktif & Alkohol",
      content_icon: "/assets/content/Zat-Adiktif-Alkohol.png",
      description: "Referensi, penggambaran, atau penggunaan rokok, minuman keras, narkotika, dan obat-obatan terlarang di dalam konten permainan.",
      rating_id: 5
    }
  ];

  for (const cc of contentClassifications) {
    await prisma.contentClassification.upsert({
      where: { id: cc.id },
      update: cc,
      create: cc,
    });
  }

  console.log('✅ Content Classifications seeded (9 deskriptor konten)');
}