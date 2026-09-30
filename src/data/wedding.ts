export interface LoveStoryItem {
  id: string;
  title: string;
  date: string;
  description: string;
  icon?: string;
}

export interface WishItem {
  id: string;
  name: string;
  attendance: 'Hadir' | 'Tidak Hadir' | 'Masih Ragu';
  message: string;
  createdAt: string;
}

export interface WeddingData {
  coupleName: string;
  groomName: string;
  groomFullName: string;
  groomParents: {
    father: string;
    mother: string;
  };
  groomImage: string;
  groomBio: string;
  
  brideName: string;
  brideFullName: string;
  brideParents: {
    father: string;
    mother: string;
  };
  brideImage: string;
  brideBio: string;

  weddingDate: string; // YYYY-MM-DD
  weddingDateFormatted: string;
  
  akad: {
    day: string;
    date: string;
    time: string;
    venue: string;
    address: string;
    mapsUrl: string;
    embedMapsUrl: string;
  };

  reception: {
    day: string;
    date: string;
    time: string;
    venue: string;
    address: string;
    mapsUrl: string;
  };

  bcaAccount: string;
  bcaName: string;
  danaNumber: string;
  danaName: string;

  musicUrl: string;
  
  heroImage: string;
  galleryImages: {
    id: string;
    url: string;
    title: string;
    category: 'GROOM' | 'BRIDE' | 'OUR MOMENTS';
    personName?: string;
    aspectRatio: 'portrait' | 'landscape' | 'square';
  }[];

  loveStory: LoveStoryItem[];
  defaultWishes: WishItem[];
}

export const weddingData: WeddingData = {
  coupleName: 'Asep & Siva',
  groomName: 'Asep',
  groomFullName: 'Asep Ruyat',
  groomParents: {
    father: 'Bapak Dodi Hidayat',
    mother: 'Ibu Rosti Asih',
  },
  groomImage: '/images/groom_portrait.jpg',
  groomBio: 'Putra pertama yang hangat, berdedikasi, dan penyayang.',

  brideName: 'Siva',
  brideFullName: 'Siva Aulia Meilani',
  brideParents: {
    father: 'Alm. Bapak Harianto Priowasono',
    mother: 'Ibu Mia Nurmiati',
  },
  brideImage: '/images/bride_portrait.jpg',
  brideBio: 'Putri pertama yang lembut, berhati tulus, dan penuh kebaikan.',

  weddingDate: '2026-10-18T09:00:00+07:00',
  weddingDateFormatted: 'Minggu, 18 Oktober 2026',

  akad: {
    day: 'Minggu',
    date: '18 Oktober 2026',
    time: '09.00 WIB',
    venue: 'Gedung Balai Pertemuan Farida',
    address: 'Babakankaret, Kecamatan Cianjur, Kabupaten Cianjur, Jawa Barat 43211',
    mapsUrl: 'https://maps.google.com/?q=Gedung+Balai+Pertemuan+Farida+Cianjur',
    embedMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.533284752538!2d107.1352433!3d-6.8264936!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68533b66d49811%3A0xe100bf2ad34a0237!2sGedung%20Balai%20Pertemuan%20Farida!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
  },

  reception: {
    day: 'Minggu',
    date: '18 Oktober 2026',
    time: '11.00 WIB - Selesai',
    venue: 'Gedung Balai Pertemuan Farida',
    address: 'Babakankaret, Kecamatan Cianjur, Kabupaten Cianjur, Jawa Barat 43211',
    mapsUrl: 'https://maps.google.com/?q=Gedung+Balai+Pertemuan+Farida+Cianjur',
  },

  bcaAccount: '3480622595',
  bcaName: 'Siva Aulia Meilani',
  danaNumber: '083140027687',
  danaName: 'Asep Ruyat',

  musicUrl: 'https://res.cloudinary.com/rydutgfh/video/upload/v1787280940/music.mp3',

  heroImage: '/images/navy_watercolor_hero.jpg',

  galleryImages: [
    {
      id: 'g1',
      url: 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789528/SDE01299.jpg',
      title: 'Groom',
      category: 'GROOM',
      personName: 'Asep Ruyat',
      aspectRatio: 'portrait',
    },
    {
      id: 'b1',
      url: 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789528/SDE01196.jpg',
      title: 'Bride',
      category: 'BRIDE',
      personName: 'Siva Aulia Meilani',
      aspectRatio: 'portrait',
    },
    {
      id: 'm1',
      url: 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789530/couple1.jpg',
      title: 'Our Moments',
      category: 'OUR MOMENTS',
      aspectRatio: 'portrait',
    },
    {
      id: 'm2',
      url: 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789529/couple2.jpg',
      title: 'Our Moments',
      category: 'OUR MOMENTS',
      aspectRatio: 'portrait',
    },
    {
      id: 'm3',
      url: 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789529/couple3.jpg',
      title: 'Our Moments',
      category: 'OUR MOMENTS',
      aspectRatio: 'portrait',
    },
    {
      id: 'm4',
      url: 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789529/couple4.jpg',
      title: 'Our Moments',
      category: 'OUR MOMENTS',
      aspectRatio: 'portrait',
    },
    {
      id: 'm5',
      url: 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789528/couple5.jpg',
      title: 'Our Moments',
      category: 'OUR MOMENTS',
      aspectRatio: 'portrait',
    },
    {
      id: 'm6',
      url: 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789530/couple6.jpg',
      title: 'Our Moments',
      category: 'OUR MOMENTS',
      aspectRatio: 'portrait',
    },
  ],

  loveStory: [
    {
      id: '1',
      title: 'Berawal dari Instagram',
      date: '',
      description: 'Semuanya berawal sederhana dari media sosial Instagram. Saling follow, hingga akhirnya sebuah reply story menjadi awal dari percakapan pertama kami.',
    },
    {
      id: '2',
      title: 'Mulai Berkomunikasi',
      date: '2025',
      description: 'Percakapan yang awalnya melalui Instagram kemudian berlanjut ke WhatsApp. Dari sana, kami mulai semakin sering berkomunikasi dan mengenal satu sama lain.',
    },
    {
      id: '3',
      title: 'Menjalin Hubungan',
      date: '06 April 2025',
      description: 'Setelah kurang lebih satu bulan sejak pertama kali berkenalan, Asep memberanikan diri untuk mengungkapkan perasaannya kepada Siva. Dari sinilah kisah kami mulai berjalan lebih serius. Hari demi hari kami lalui bersama. Kami belajar untuk saling memahami, saling mendukung, dan semakin yakin untuk membawa hubungan ini menuju jenjang yang lebih serius.',
    },
    {
      id: '4',
      title: 'Wedding Day',
      date: '18 Oktober 2026',
      description: 'Dengan penuh rasa syukur, kami memutuskan untuk melangkah ke jenjang pernikahan dan memulai perjalanan baru bersama sebagai pasangan suami istri.',
    },
  ],

  defaultWishes: [
    {
      id: 'w1',
      name: 'Rian & Amanda',
      attendance: 'Hadir',
      message: 'Selamat untuk Asep & Siva! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu sampai jannah!',
      createdAt: '1 jam yang lalu',
    },
    {
      id: 'w2',
      name: 'Budi Santoso',
      attendance: 'Hadir',
      message: 'Barakallahu lakuma wa baraka alaikuma wa jamaa bainakuma fii khair. Turut berbahagia untuk Asep & Siva!',
      createdAt: '3 jam yang lalu',
    },
    {
      id: 'w3',
      name: 'Dewi Lestari',
      attendance: 'Hadir',
      message: 'Happy wedding Siva & Asep! Cantik banget undangannya navy watercolor mewah banget! Doa terbaik untuk kalian berdua.',
      createdAt: '5 jam yang lalu',
    },
  ],
};
