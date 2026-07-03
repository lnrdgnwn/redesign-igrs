export async function seedGames(prisma) {
  const games = [
    // ========== Rating 3+ (id: 1) ==========
    {
      id: 1,
      title: "Subway Surfers",
      slug: "subway-surfers",
      image_url: "https://i.pinimg.com/736x/5e/06/06/5e0606fa24129d51e2fda7608e9b079a.jpg",
      release_year: 2012,
      publisher: "SYBO Games",
      description: "Game endless runner ikonik di mana pemain berperan sebagai seorang seniman jalanan muda yang berlari menghindari kejaran inspektur pemarah beserta anjingnya di sepanjang rel kereta api perkotaan. Dalam pelariannya, pemain dituntut untuk dengan sigap melompat, berguling, dan bergerak cepat ke kiri maupun kanan untuk menghindari kereta yang berlawanan arah serta berbagai rintangan statis. Permainan ini menawarkan fitur kustomisasi yang ekstensif melalui pembukaan berbagai karakter baru, papan luncur (hoverboard) unik, serta peningkatan power-ups yang sangat membantu. Game ini juga rutin menggelar event World Tour yang secara berkala mengubah tema visual kota dengan latar belakang lokasi-lokasi eksotis di dunia nyata.",
      review_summary: "Subway Surfers merupakan permainan yang sangat direkomendasikan dan ramah keluarga karena sepenuhnya terbebas dari segala bentuk elemen kekerasan atau konten negatif. Mekanisme kontrol sentuh yang digunakan sangat sederhana dan mudah dimengerti, menjadikannya sebuah media interaktif yang sempurna bagi anak-anak untuk secara tidak langsung melatih refleks dan kemampuan motorik halus mereka. Desain visualnya yang cerah, penuh dengan warna-warni memanjakan mata, serta animasi pergerakan karakter yang sangat mulus dan dinamis, menjadikannya salah satu game terpopuler yang sangat disukai dan pantas dimainkan oleh semua kalangan usia dari berbagai latar belakang.",
      rating_id: 1,
    },
    {
      id: 2,
      title: "Angry Birds 2",
      slug: "angry-birds-2",
      image_url: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/coaoay.jpg",
      release_year: 2015,
      publisher: "Rovio Entertainment",
      description: "Merupakan sekuel langsung dari fenomena game puzzle berbasis ketapel yang sangat populer dan mendunia. Dalam permainan ini, pemain menggunakan ketapel raksasa untuk meluncurkan berbagai jenis burung berkemampuan unik ke arah struktur bangunan rapuh yang dijaga ketat oleh para babi hijau nakal pencuri telur. Secara inovatif, game ini memperkenalkan sistem kartu progresif yang memberikan pemain kebebasan taktis memilih urutan burung, menambahkan lapisan strategi yang lebih mendalam. Pemain juga akan dihibur dengan fitur pertarungan boss yang menantang, penggunaan spell sihir magis yang spektakuler, serta sistem arena kompetitif multiplayer online.",
      review_summary: "Game puzzle berbasis fisika yang luar biasa ini sangat aman, mendidik, dan pastinya menghibur. Efek kehancuran bangunan kayunya dikemas secara komedi dan kartunis penuh tawa tanpa sedikit pun unsur darah atau kekerasan yang tampak nyata. Pengalaman interaktif dalam permainan ini sangat positif dan secara aktif dapat membantu perkembangan anak dalam melatih kemampuan problem-solving, menajamkan intuisi dalam memperkirakan sudut lintasan lemparan proyektil, serta mengajarkan mereka untuk mulai berlatih berpikir secara logis dan taktis untuk meruntuhkan pertahanan lawan secara efisien.",
      rating_id: 1,
    },
    {
      id: 3,
      title: "Cut the Rope",
      slug: "cut-the-rope",
      image_url: "https://m.media-amazon.com/images/M/MV5BNGQ4NmE0OTUtOTBlMi00NzQxLTllZWUtNDk2ZjViNjM0Y2U1XkEyXkFqcGc@._V1_.jpg",
      release_year: 2010,
      publisher: "ZeptoLab",
      description: "Sebuah game puzzle berbasis fisika klasik yang sangat menawan, menghibur, dan inovatif di platform mobile. Pemain diberikan tugas yang tampaknya sederhana namun semakin menantang: memotong tali yang berayun dan memanipulasi berbagai objek interaktif di layar, seperti gelembung udara, bantalan pantul, dan alat peniup, untuk mengantarkan permen manis tepat ke dalam mulut karakter monster hijau kecil yang lucu bernama Om Nom. Setiap level dirancang dengan sangat cerdas dan detail untuk secara progresif menantang logika, refleks, dan koordinasi waktu para pemain. Estetika visual game ini disajikan dengan gaya yang sangat cerah, bersih, dan ceria, dilengkapi dengan antarmuka yang intuitif dan nyaris tanpa instruksi teks yang rumit.",
      review_summary: "Permainan teka-teki yang menyenangkan ini dijamin sangat aman dan pantas dimainkan oleh anak-anak maupun balita karena sama sekali tidak mengandung unsur kekerasan, elemen menakutkan, atau konten negatif apa pun. Fokus utamanya terletak murni pada pemecahan masalah logis berbasis fisika dasar yang sangat sederhana namun memberikan kepuasan tersendiri saat berhasil diselesaikan. Musik latarnya yang riang dan lembut dipadukan dengan berbagai ekspresi animasi karakter Om Nom yang menggemaskan saat memakan permen berhasil menciptakan sebuah suasana bermain yang tenang, positif, edukatif, dan sama sekali tidak memberikan tekanan batin bagi si kecil.",
      rating_id: 1,
    },

    // ========== Rating 7+ (id: 2) ==========
    {
      id: 4,
      title: "Roblox",
      slug: "roblox",
      image_url: "https://cloudgames.gg/wp-content/uploads/roblox-portrait.jpg",
      release_year: 2006,
      publisher: "Roblox Corporation",
      description: "Roblox jauh melampaui definisi sebuah game biasa; ini adalah sebuah platform kreasi digital tanpa batas di mana puluhan juta pengguna dari berbagai belahan dunia dapat berinteraksi secara sosial, bermain bersama, dan bahkan merancang dunia serta permainan virtual mereka sendiri menggunakan mesin Roblox Studio. Melalui platform revolusioner ini, pemain dapat dengan mudah menemukan berbagai macam genre permainan buatan komunitas, mulai dari simulasi peran kehidupan nyata, petualangan RPG epik, hingga tantangan obstacle course (obby) yang menguji ketangkasan. Dengan sistem avatar 3D yang sangat mudah dikustomisasi, setiap pemain memiliki kebebasan penuh untuk mengekspresikan identitas digital mereka secara unik.",
      review_summary: "Platform sosial interaktif ini sangat efektif dalam mendorong tingkat kreativitas yang tinggi bagi penggunanya karena memungkinkan pemain usia muda untuk mulai belajar dasar-dasar pemrograman logika melalui bahasa skrip Lua. Namun, karena sifat ekosistemnya yang sangat bergantung pada pertukaran konten buatan pengguna tanpa batas serta fitur interaksi sosial multiplayer secara langsung, orang tua sangat disarankan untuk tetap waspada. Terkadang masih ditemukan ruang obrolan online atau jenis permainan tertentu yang tidak tersaring dengan sempurna dari konten dewasa, sehingga peran dan pendampingan orang tua tetap menjadi hal yang paling krusial.",
      rating_id: 2,
    },
    {
      id: 5,
      title: "Brawl Stars",
      slug: "brawl-stars",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjRMFeOgU3dzhaUqllpDpKhIfzmcJ6J3OkcU89d0Khw&s",
      release_year: 2018,
      publisher: "Supercell",
      description: "Sebuah game aksi multiplayer kompetitif bergaya hero-shooter dan online battle arena (MOBA) yang mempertemukan banyak pemain dalam pertempuran singkat yang penuh adrenalin. Para pemain dapat memilih untuk bermain dalam berbagai mode pertandingan seru seperti Gem Grab, Showdown, atau Brawl Ball, dengan menggunakan beraneka ragam karakter \"Brawler\" yang unik. Setiap karakter dilengkapi dengan gaya serangan dasar yang berbeda, kemampuan Super yang sangat kuat, serta perlengkapan gadget khusus yang dapat mengubah alur pertempuran. Permainan ini dikemas sedemikian rupa agar berlangsung dengan tempo yang sangat cepat, menuntut pergerakan presisi tinggi, dan kerja sama tim.",
      review_summary: "Game ini dengan apik menawarkan sebuah pengalaman bermain secara kompetitif yang sangat seru dan adiktif, sekaligus sangat praktis karena dapat diselesaikan dalam durasi waktu yang sangat singkat. Secara visual, grafis yang ditampilkan bergaya kartun tiga dimensi yang sangat ceria, penuh warna yang mencolok, dan sepenuhnya terbebas dari unsur kekerasan berdarah atau realistis. Walaupun begitu, dikarenakan sifat dasarnya yang sangat kompetitif secara online, game ini tetap menuntut pemahaman taktik yang baik serta kemampuan mengontrol emosi saat menghadapi kekalahan, menjadikannya hiburan yang sangat menyenangkan untuk dimainkan bersama kawan-kawan sebaya.",
      rating_id: 2,
    },
    {
      id: 6,
      title: "Stumble Guys",
      slug: "stumble-guys",
      image_url: "https://i.pinimg.com/736x/03/0a/5d/030a5dae5fdbedc742fffb10cf9dbf0f.jpg",
      release_year: 2020,
      publisher: "Scopely",
      description: "Merupakan game multiplayer bertemakan party knockout berskala masif di mana hingga tiga puluh dua pemain secara bersamaan akan berlomba secara online dalam kekacauan yang menghibur. Para peserta harus saling bersaing untuk melewati berbagai rangkaian rintangan fisik yang semakin lama akan menjadi semakin gila dan sulit. Pemain dituntut untuk pandai melompat menghindari palu godam raksasa, berlari menyeimbangkan diri di atas platform yang berputar cepat, dan berusaha keras agar tidak tergelincir jatuh ke dalam jurang eliminasi. Melalui serangkaian babak penyisihan yang ketat, hanya satu orang pemenang terakhir yang akan berhasil meraih predikat juara.",
      review_summary: "Ini adalah sebuah mahakarya game party yang sangat seru, lucu, dan berhasil menyajikan nuansa kompetitif secara sehat dan menyenangkan. Interaksi fisik yang terjadi antar pemain hanya terbatas pada aksi saling dorong secara jenaka atau menabrak rintangan lucu dengan sistem animasi fisik ragdoll yang sangat komikal. Keuntungannya adalah game ini tidak menyediakan fitur obrolan teks bebas antar pemain, sehingga risiko terjadinya perundungan siber sangatlah minim dan hampir tidak ada. Dengan demikian, permainan ini menjadi sangat direkomendasikan dan sangat aman untuk dimainkan beramai-ramai saat sedang berkumpul bersama keluarga tercinta.",
      rating_id: 2,
    },

    // ========== Rating 13+ (id: 3) ==========
    {
      id: 7,
      title: "Minecraft",
      slug: "minecraft",
      image_url: "https://store-images.s-microsoft.com/image/apps.53095.13850085746326678.06e2dc5c-7997-46e9-a8e6-0e48b57cb13b.419e3c9d-9dd3-4a28-a9f3-a12350215871",
      release_year: 2011,
      publisher: "Mojang Studios",
      description: "Game bergenre sandbox legendaris yang paling berpengaruh di dunia ini memberikan kebebasan dan kontrol absolut kepada para pemainnya untuk bebas mengeksplorasi alam semesta virtual, menambang berbagai jenis sumber daya alam, dan membangun karya apa saja dari susunan balok-balok 3D interaktif. Permainan ini menawarkan dua mode utama: Survival Mode yang menantang, di mana pemain harus memutar otak mengumpulkan sumber daya sendiri, memelihara kesehatan karakter, dan bertahan hidup dari ancaman monster pada malam hari; serta Creative Mode, yang secara otomatis memberikan akses tak terbatas ke semua balok agar pemain dapat membangun arsitektur megah.",
      review_summary: "Game ini diakui secara global oleh banyak pendidik sebagai salah satu game edukatif digital terbaik yang pernah diciptakan sepanjang masa. Secara terbukti, game ini sangat efektif untuk digunakan dalam merangsang imajinasi dan kreativitas tanpa batas, melatih pemahaman logika spasial, serta mengajarkan prinsip dasar manajemen sumber daya yang efisien. Meskipun di dalamnya memang terdapat beberapa elemen pertempuran sederhana melawan monster fantasi menggunakan senjata jarak dekat seperti pedang, namun desain grafisnya yang murni berbentuk kotak-kotak piksel (voxel) sukses membuat unsur kekerasan di dalamnya tampak sangat fiktif dan sama sekali tidak realistis.",
      rating_id: 3,
    },
    {
      id: 8,
      title: "Genshin Impact",
      slug: "genshin-impact",
      image_url: "https://e.snmc.io/lk/f/x/f0cd7231a6a9186d8bbc35913fd2b923/9869333",
      release_year: 2020,
      publisher: "HoYoverse",
      description: "Sebuah judul Action Role-Playing Game (RPG) berskala masif dengan kualitas setara konsol yang membawa pemain ke dalam dunia terbuka (open-world) fantasi nan megah yang bernama Teyvat. Pemain akan mengambil peran sebagai karakter \"Traveler\" misterius yang berkelana mencari saudara kembarnya yang hilang. Game revolusioner ini sangat menonjol berkat sistem pertarungannya yang luar biasa dinamis yang menggabungkan berbagai interaksi elemen alam magis—seperti api, air, es, dan angin—untuk menciptakan reaksi berantai mematikan yang spektakuler. Para pemain dapat membentuk tim petualang dari berbagai karakter gacha dengan balutan visual anime cel-shaded yang sangat indah.",
      review_summary: "Dunia maya yang ditawarkan terasa sangat luas dan begitu imersif, dilengkapi dengan kisah latar belakang (lore) yang sangat dalam serta narasi cerita epik yang terus berkembang secara konsisten. Meskipun pertempurannya cukup intens menggunakan kekuatan sihir tingkat tinggi dan tebasan senjata tajam, game ini dijamin tidak akan pernah menampilkan adegan sadis seperti cipratan darah maupun unsur kekerasan gore. Namun demikian, para pemain tetap perlu bersikap bijak karena game ini sangat mengandalkan sistem monetisasi gacha (loot box) yang berpotensi tinggi memicu kebiasaan belanja impulsif hanya demi mendapatkan karakter langka yang diidamkan.",
      rating_id: 3,
    },
    {
      id: 9,
      title: "Free Fire",
      slug: "free-fire",
      image_url: "https://m.media-amazon.com/images/M/MV5BMTI3MTE3ZGQtNWJmMi00MTAzLWI2MzYtZTFiMDRkMzU0ZjE0XkEyXkFqcGc@._V1_.jpg",
      release_year: 2017,
      publisher: "Garena",
      description: "Dikenal luas sebagai salah satu game mobile bergenre battle royale paling digemari di seluruh penjuru dunia, terutama karena kebutuhan spesifikasi sistem ponselnya yang sangat bersahabat bagi mayoritas pengguna. Sebanyak lima puluh orang pemain yang tidak saling kenal akan diterjunkan dari atas pesawat ke sebuah wilayah pulau terpencil yang berbahaya. Setibanya di darat, mereka harus segera berebut mencari perlengkapan senjata tempur, suplai medis, serta kendaraan lapis baja demi bertahan hidup. Zona aman permainan akan terus menerus menyusut secara berkala, sehingga dengan sendirinya memaksa sisa para pemain untuk saling membunuh satu sama lain.",
      review_summary: "Game populer ini memiliki fokus utama pada intensitas pengalaman tembak-menembak yang sangat kompetitif dan menegangkan dengan menggunakan berbagai model senjata api realistis. Meskipun secara visual game ini memang tidak secara eksplisit menampilkan adegan berdarah-darah layaknya game khusus dewasa, namun elemen inti permainannya yang mengharuskan pemain saling membunuh satu sama lain demi menjadi satu-satunya yang selamat membuat game ini cukup intens. Selain itu, tersedianya fitur komunikasi suara (voice chat) terbuka yang tidak disensor membuatnya menjadi jauh lebih cocok dan pantas untuk dimainkan oleh para remaja yang emosinya sudah cukup matang.",
      rating_id: 3,
    },

    // ========== Rating 15+ (id: 4) ==========
    {
      id: 10,
      title: "A Space for the Unbound",
      slug: "a-space-for-the-unbound",
      image_url: "https://cdn1.epicgames.com/spt-assets/d9b1a1e71a464889b7cc604b1849fb9b/a-space-for-the-unbound-1oj8p.png",
      release_year: 2023,
      publisher: "Toge Productions",
      description: "Merupakan sebuah karya game petualangan naratif interaktif bergaya visual pixel art yang sangat indah dan menawan, berlatarkan suasana nostalgia sebuah kota kecil di Indonesia pada era akhir dekade 1990-an. Pemain akan hanyut mengikuti perjalanan kisah hidup emosional Atma dan Raya, dua orang remaja SMA yang sedang bimbang mencari jati diri menjelang kelulusan sekolah mereka. Secara bersamaan, mereka tiba-tiba dihadapkan pada munculnya sebuah fenomena anomali supranatural misterius yang secara perlahan mengancam eksistensi kota tempat tinggal mereka. Berbekal kemampuan magis dari sebuah buku ajaib, Atma dapat menyelam masuk ke alam bawah sadar orang.",
      review_summary: "Game buatan anak bangsa ini merupakan sebuah mahakarya seni interaktif yang sangat emosional, melankolis, sekaligus sangat mendalam maknanya. Pengembang game ini sangat berani dan tanpa basa-basi mengangkat secara gamblang berbagai tema psikologis berat yang biasanya dianggap tabu dan jarang dibahas di ruang publik, seperti isu depresi berat, serangan kecemasan yang berlebihan, kasus perundungan kejam di lingkungan sekolah, hingga kekerasan dalam rumah tangga. Oleh sebab itu, game ini tidak diperuntukkan bagi anak-anak dan secara mutlak menuntut para pemainnya untuk memiliki tingkat kedewasaan emosional yang tinggi demi mencerna pesan-pesan moralnya secara bijak.",
      rating_id: 4,
    },
    {
      id: 11,
      title: "Troublemaker",
      slug: "troublemaker",
      image_url: "https://m.media-amazon.com/images/M/MV5BM2Y3YjQzYWEtNjgyZS00MjZmLWE2ZjEtZmI0MGM3NWZkZjkyXkEyXkFqcGc@._V1_.jpg",
      release_year: 2023,
      publisher: "Gamecom Team",
      description: "Game bergenre action beat 'em up tiga dimensi yang terinspirasi secara kuat dari maraknya fenomena kenakalan remaja jalanan. Pemain akan mengambil kendali atas karakter Budi, seorang anak laki-laki pindahan baru di sebuah SMK vokasi yang memiliki cita-cita unik untuk membuktikan dirinya sebagai siswa yang terkuat. Hal ini dilakukannya dengan cara mengikuti sebuah turnamen pertarungan fisik brutal antar geng sekolah yang diakui dan diselenggarakan secara diam-diam. Budi beserta kelompok teman-temannya harus berjuang keras menggunakan kepalan tangan untuk mengalahkan dominasi berbagai geng penguasa dari jurusan sekolah yang berbeda-beda guna menguasai seluruh sekolah.",
      review_summary: "Nuansa dalam game perkelahian ini sangat kental diwarnai oleh elemen budaya pop lokal jalanan Indonesia serta balutan humor satir yang cukup tajam. Tanpa adanya sensor yang berarti, game ini menampilkan secara sangat gamblang berbagai bentuk aksi tawuran liar antar pelajar, pukulan demi pukulan yang sangat brutal, serta tidak terhitung banyaknya dialog agresif yang dipenuhi dengan kata-kata kasar, makian, dan umpatan khas preman jalanan. Dikarenakan tema kenakalan remajanya disajikan dalam bentuk yang sangat vulgar, provokatif, dan eksplisit secara visual, maka game ini dengan sangat tegas hanya ditujukan untuk audiens yang sudah dewasa.",
      rating_id: 4,
    },
    {
      id: 12,
      title: "PUBG: Battlegrounds",
      slug: "pubg-battlegrounds",
      image_url: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1rx7f.png",
      release_year: 2017,
      publisher: "Krafton",
      description: "Game ini diakui sebagai pionir utama yang melahirkan tren genre battle royale modern dengan membawa ketegangan atmosfer bertahan hidup ke tingkat realisme militer yang sangat tinggi. Sebanyak seratus orang pemain akan secara serentak terjun payung menuju berbagai pilihan peta berukuran masif yang menawarkan detail variasi medan pertempuran yang berbeda-beda. Setibanya di darat, setiap pemain harus berpacu dengan waktu me-looting persenjataan api militer sungguhan, pelindung tubuh, dan granat taktis mematikan dengan tujuan utama untuk mengeliminasi keberadaan pemain lain. Kesuksesan gameplay ini sangat menekankan pada kemampuan perhitungan taktis pergerakan dan komunikasi tim.",
      review_summary: "PUBG menghadirkan sebuah presentasi grafis yang sangat memukau dan realistis, yang mencakup keakuratan model berbagai senjata api, ledakan bom yang menggelegar, hingga munculnya efek cipratan darah yang cukup kentara pada saat karakter tertembak oleh peluru. Tekanan psikologis yang ditimbulkan dari keharusan untuk bertahan hidup dari serangan lawan terasa sangat nyata dan menegangkan. Selain itu, karena keharusan untuk menggunakan komunikasi taktis yang cepat melalui fitur voice chat in-game, interaksi antar pemain sering kali dapat memanas dan memicu lontaran umpatan verbal. Hal-hal tersebut secara meyakinkan menempatkan game ini ke dalam kategori rating usia dewasa.",
      rating_id: 4,
    },

    // ========== Rating 18+ (id: 5) ==========
    {
      id: 13,
      title: "DreadOut",
      slug: "dreadout",
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPuXH5U7p2F36aWLouQJnzMOwEz1cBPSX3V3YjEIznA&s=10",
      release_year: 2014,
      publisher: "Digital Happiness",
      description: "Sebuah karya game horor survival supranatural ikonik asli buatan developer Indonesia yang dengan sangat cerdas berhasil menggabungkan cerita legenda urban lokal dengan mekanisme gameplay yang tidak biasa. Pemain akan diajak untuk mengendalikan seorang karakter siswi SMA pemberani bernama Linda, yang bersama beberapa orang teman sekelasnya tiba-tiba tersesat di tengah sebuah desa angker yang telah sangat lama ditinggalkan penduduknya. Linda akan mendapati dirinya dikelilingi oleh teror dari hantu-hantu menakutkan yang sangat lekat dengan mitos Nusantara, seperti Kuntilanak bergaun putih, Pocong yang melompat-lompat, dan Babi Ngepet, di mana satu-satunya senjata andalannya hanyalah kamera smartphone.",
      review_summary: "Game ini dengan sukses besar menawarkan sebuah pengalaman horor psikologis dan supranatural yang teramat sangat mencekam, dipenuhi dengan rentetan adegan kejutan (jump scare) yang luar biasa intens. Representasi visual dari hantu-hantu lokal di dalam game ini sengaja didesain dengan tingkat detail yang sangat grotesk, menjijikkan, dan pastinya mengerikan untuk dilihat. Dikarenakan game ini memuat banyak sekali referensi ritual okultisme lokal, ditambah balutan atmosfer yang gelap gulita secara konstan, serta banyaknya elemen trauma psikologis yang sangat mengganggu kenyamanan mental, maka game ini sudah barang tentu sangat terlarang bagi pemain di bawah umur.",
      rating_id: 5,
    },
    {
      id: 14,
      title: "Mobile Legends: Bang Bang",
      slug: "mobile-legends-bang-bang",
      image_url: "https://m.media-amazon.com/images/M/MV5BODhlZDk5Y2EtMGFhOS00MTQ5LTgwNjgtYTI2ZmE1Y2ZjMDE2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      release_year: 2016,
      publisher: "Moonton",
      description: "Game bergenre Multiplayer Online Battle Arena (MOBA) yang menyandang status sebagai yang terpopuler di kawasan Asia Tenggara, dirancang dengan kontrol yang secara spesifik dioptimalkan untuk dimainkan di perangkat seluler berbasis layar sentuh. Secara kompetitif, dua tim yang masing-masing beranggotakan tepat lima orang pemain akan saling berhadapan secara langsung dengan tujuan akhir untuk menghancurkan pangkalan kristal milik musuh sembari mati-matian mempertahankan pangkalan mereka sendiri. Pemain bebas memilih peran dari ratusan daftar hero yang tersedia—seperti tipe Tank tangguh, Mage sakti, atau Assassin mematikan. Jalannya pertandingan secara mutlak sangat mengandalkan koordinasi pergerakan tim.",
      review_summary: "Meskipun secara kasat mata grafis pertempuran bergaya fantasi anime yang diusungnya tidak memiliki elemen gore yang realistis, namun lingkungan ekosistem kompetitif di dalam game ini sering kali sangat brutal. Intensitas pertandingan secara langsung sering memicu tingkat toksisitas yang tinggi, lontaran kata-kata kasar makian (trash talk) yang tidak pantas di kolom chat, serta tekanan mental yang sangat berat demi memenangkan setiap pertandingan. Selain itu, terdapat godaan elemen monetisasi kosmetik dan sistem gacha yang lumayan adiktif. Kondisi dinamika sosial yang begitu intens dan berpotensi merusak ini jelas menuntut kestabilan emosi dan mental pemainnya secara utuh.",
      rating_id: 5,
    },
    {
      id: 15,
      title: "Valorant",
      slug: "valorant",
      image_url: "https://m.media-amazon.com/images/I/71LTpSLz57L._AC_UF894,1000_QL80_.jpg",
      release_year: 2020,
      publisher: "Riot Games",
      description: "Merupakan sebuah game aksi First-Person Shooter (FPS) yang sangat mengedepankan kerja sama taktis berbasis pahlawan 5v5 yang sangat kompetitif. Dalam game ini, satu tim akan ditugaskan secara bergantian untuk mengambil peran sebagai kelompok penyerang (Attacker) yang berusaha keras menyusup ke wilayah musuh guna menanamkan sebuah bom perangkat peledak bernama Spike, sementara tim lain bertugas sebagai kelompok bertahan (Defender) yang harus mencegah insiden tersebut atau menjinakkan bomnya secara heroik. Hal yang membedakannya dari game tembak-menembak biasa adalah bahwa setiap agen memiliki segudang kombinasi kemampuan unik yang dirancang khusus untuk menciptakan strategi taktis.",
      review_summary: "Mekanisme aksi tembak-menembaknya menuntut tingkat akurasi dan presisi tingkat tinggi, serta secara implisit menampilkan tindak kekerasan simulasi menggunakan senjata api mematikan, lengkap dengan adanya opsi untuk menampilkan atau menyembunyikan efek cipratan darah berjatuhan. Dikarenakan game ini sengaja dibangun sebagai sebuah wadah ekosistem kompetisi e-sport berskala global papan atas, komunitas pemainnya sangatlah kompetitif dan sering kali menggunakan bahasa yang tajam dan kasar saat saling berkomunikasi melalui fitur voice chat bawaan. Tuntutan fokus, kecepatan refleks, serta beban tekanan mental yang dihasilkan dari pertandingan taktis ini sangatlah berat, sehingga murni ditujukan bagi audiens dewasa yang kompetitif.",
      rating_id: 5,
    },
  ];

  for (const game of games) {
    const { id, ...gameData } = game;
    await prisma.game.upsert({
      where: { id: game.id },
      update: gameData,
      create: { id: game.id, ...gameData },
    });
  }

  const galleries = [
    // 1. Subway Surfers
    { game_id: 1, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlDHfCNkWZc2tXXpnh__iArf-4u3AdLxWaxRPGrucCg&s=10" },
    { game_id: 1, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkeZRDJZvgpA9fsn69kyMWQGp8_XMnXeJOtwX6LgV0vw&s=10" },
    { game_id: 1, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TA90mSk4OTNkGc8KYk58rmYmExS6jkXT9e7UDQsE5Q&httpss=10" },
    // 2. Angry Birds 2
    { game_id: 2, image_url: "https://store-images.s-microsoft.com/image/apps.50268.14410076060135429.789f7faf-f4d8-407c-9f5d-fcd1a0a41a33.9fd10095-71d3-41dc-bcfd-e3c39681e56a?h=253" },
    { game_id: 2, image_url: "https://store-images.s-microsoft.com/image/apps.60018.14410076060135429.789f7faf-f4d8-407c-9f5d-fcd1a0a41a33.2c547aba-be9b-47d5-8af4-c536fa4646be?h=253" },
    { game_id: 2, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_E2U0m3JFAX6DZzpzYs-c4pGD4FxZVaFKyjlL8-WFlQ&s" },
    // 3. Cut The Rope
    { game_id: 3, image_url: "https://play-lh.googleusercontent.com/VkwhYa67ClafDxtSC4-9olNAvQmmp96vIqCpjaPSVfPeO-kUTiKTCJcY11T19X1yqLesQCai2vDabeSGQJU6rAk=w526-h296-rw" },
    { game_id: 3, image_url: "https://cdn.shopify.com/s/files/1/0082/4092/2686/files/CutTheRope_Screenshot_1920x1080_02_480x480.png?v=1734456290" },
    { game_id: 3, image_url: "https://assets.infinitygamingtable.com/assets/ScreenShots/355/CutTheRope_Screenshot_1920x1080_01__FitMaxWzY0MCwzNjBd.png" },
    // 4. Roblox
    { game_id: 4, image_url: "https://t4.ftcdn.net/jpg/04/21/24/77/360_F_421247758_st0YftYSez6gg3x3jP96ih6tIEctyFxg.jpg" },
    { game_id: 4, image_url: "https://lifehacker.com/imagery/articles/01J7KPR6C66PDHEPD2QJXSH788/hero-image.fill.size_1248x702.v1752593137.png" },
    { game_id: 4, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXyE_enJcOxdJAu0Er7ZmLAYf3HXrJKB-KYIZ3YHi9KA&s=10" },
    // 5. Brawl Stars
    { game_id: 5, image_url: "https://ludocious.com/pics/naav-brawlstars/hq/banner.jpg" },
    { game_id: 5, image_url: "https://interfaceingame.com/wp-content/uploads/brawl-stars/brawl-stars-lobby.png" },
    { game_id: 5, image_url: "https://cdn1.i-scmp.com/sites/default/files/2018/12/17/brawl_stars.jpg" },
    // 6. Stumble Guys
    { game_id: 6, image_url: "https://www.stumbleguys.com/og.jpg" },
    { game_id: 6, image_url: "https://d2duuy9yo5pldo.cloudfront.net/dashboard-resources/stumbleguys/14072b58-9f90-45e3-aa4d-2e7395309522.png" },
    { game_id: 6, image_url: "https://play-lh.googleusercontent.com/_OuyJqRQMrvy5ueVCjSHtGOIMdrQnD6dIL_MYS-ls7xbZHHW3mMbWFlh7ULgt-njaf6ctGglXfhqsE2sNArDIg=w526-h296-rw" },
    // 7. Minecraft
    { game_id: 7, image_url: "https://static.vecteezy.com/system/resources/thumbnails/054/659/403/small/a-vibrant-and-colorful-minecraft-landscape-adorned-with-adorable-bunnies-and-beautiful-flowers-photo.jpg" },
    { game_id: 7, image_url: "https://m.media-amazon.com/images/M/MV5BMjM2NzA0ZDgtNmIxNS00NjgwLTliZDgtNDc2MmQ1ZDE1NDcwXkEyXkFqcGc@._V1_.jpg" },
    { game_id: 7, image_url: "https://minecraft.wiki/images/thumb/Survival.png/1200px-Survival.png?b8898" },
    // 8. Genshin Impact
    { game_id: 8, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBShto3ojfKUyFlGE51Gjcj-02dgE4jSk4eQh2TGZst8gpjKaw_xwtVriv&s=10" },
    { game_id: 8, image_url: "https://cdn.mos.cms.futurecdn.net/7Cbpe8JbsPYc3ZfhzrP5ae.jpg" },
    { game_id: 8, image_url: "https://static0.anpoimages.com/wordpress/wp-content/uploads/2023/04/genshin-impact-character-hero.jpg?w=1600&h=900&fit=crop" },
    // 9. Free Fire
    { game_id: 9, image_url: "https://cdn.oneesports.gg/wp-content/uploads/sites/2/2020/04/kalahari-free-fire-1024x576-1.jpg" },
    { game_id: 9, image_url: "https://res.ldrescdn.com/rms/ldplayer/process/img/f4fe7f43c883447290dbe5dbd6b4e3871740459538.png?x-oss-process=image/format,webp/quality,Q_100/resize,w_1024" },
    { game_id: 9, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7N33TuTbtmHSK1QH82w_FSAHv0faeoJ3zq6INi3cHEw&s=10" },
    // 10. A Space for the Unbound
    { game_id: 10, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJqryhpEJiP0zQd4uwakSVXWSTaRgnudK9TJMmAiRmghC2fm7SSCj2zdJ&s=10" },
    { game_id: 10, image_url: "https://i.guim.co.uk/img/media/3ce775bc8e06a2cd1cec4d7a1e06754ca3da9348/193_79_1532_919/master/1532.jpg?width=1200&quality=85&auto=format&fit=max&s=4d21f5d672c9d54ba49ad07d138a5e61" },
    { game_id: 10, image_url: "https://i0.wp.com/www.qualbert.com/wp-content/uploads/2023/01/Screenshot-3.jpg?resize=956%2C472&ssl=1" },
    // 11. Troublemaker
    { game_id: 11, image_url: "https://assets.nicepagecdn.com/a4b2d42c/6025215/images/tbm_ss_4.jpg" },
    { game_id: 11, image_url: "https://jagatplay.com/wp-content/uploads/2023/04/Troublemaker-jagatplay-3.jpg" },
    { game_id: 11, image_url: "https://assets.nicepagecdn.com/a4b2d42c/6025215/images/tbm_ss_3.jpg" },
    // 12. PUBG: Battlegrounds
    { game_id: 12, image_url: "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-19vwb.jpg" },
    { game_id: 12, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DfO2uklYLbmxk82U3ZBJ8XiwmcE5XtPytieQ0Y3VaA&s=10" },
    { game_id: 12, image_url: "https://wstatic-prod.pubg.com/web/live/main_156194a/img/fa07f09.webp" },
    // 13. DreadOut
    { game_id: 13, image_url: "https://www.softsourcepublishing.com/wp-content/uploads/2024/05/ss_fc8f7becf69292779af0da8fabc51c496f8f006f.1920x1080-1.jpg" },
    { game_id: 13, image_url: "https://gaming-cdn.com/images/news/articles/12466/cover/1000x563/dreadout-remastered-collection-is-now-available-on-pc-cover6824ab6847988.jpg" },
    { game_id: 13, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqOQD3kV7xF8mSqpWyYEuldzzdsH6JBb_jhRvtR-G3y-WD0_yeeuNkmoM&s=10" },
    // 14. Mobile Legends: Bang Bang
    { game_id: 14, image_url: "https://rikiyasan.com/wp-content/uploads/2024/04/fakta-menarik-game-Mobile-Legends.webp" },
    { game_id: 14, image_url: "https://elcomercio.pe/resizer/v2/54RNO5QRMJFPLDUP7https://img.youtube.com/vi/8g6kO9_vL4Q/hqdefault.jpgSDXJXMHOA.jfif?auth=ab18911effa1f79706ddacb431953aa38650a282144c057e68f8daf8582023f5&width=1200&height=675&quality=75&smart=true" },
    { game_id: 14, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQrvWOHMuUb9MkdKhn1KGgdMWCimSEfB0T3Pc4SXllo2G732XpPgNgUqM&s=10" },
    // 15. Valorant
    { game_id: 15, image_url: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/77689751053a9cc507696fce850e345776667f0e-2560x1440.jpg" },
    { game_id: 15, image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5yDRS6S_zl2kp8Q6QjVdRl04QbCIetBT1JJUrZWR3OeWdKeDJTQISZw&s=10" },
    { game_id: 15, image_url: "https://m.media-amazon.com/images/M/MV5BMzIxODAxZGQtMWIwNi00NDFhLTlmNzUtNzI4YmJkNzU4ZTFkXkEyXkFqcGc@._V1_.jpg" },
  ];

  await prisma.gameGallery.createMany({
    data: galleries
  });

  console.log("✅ Games and Game Galleries seeded (15 games with long descriptions)");
}