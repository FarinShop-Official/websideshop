// JS from FarinShop.html

  let uploadedFileURL = "";

  document.getElementById('fileInput').addEventListener('change', async function() {
    const file = this.files[0];
    if (!file) return;

    document.getElementById('uploadStatus').innerText = 'Uploading...';

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async function () {
      const base64data = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

      const formData = new FormData();
      formData.append('key', 'f9943bb4ca50fd8004fbff6a34b02d44'); // Ganti pakai API KEY kamu
      formData.append('image', base64data);

      try {
        const response = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          uploadedFileURL = result.data.url;
          document.getElementById('uploadStatus').innerHTML = `✅ Upload sukses: <a href="${uploadedFileURL}" target="_blank" style="color:#00f0ff;">Lihat Bukti</a>`;
          console.log('Uploaded URL:', uploadedFileURL);
        } else {
          document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
          console.error(result);
        }

      } catch (error) {
        console.error('Error uploading file:', error);
        document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
      }
    };
  });

  function kirimWA() {
  const nama = document.getElementById("namaPanel").value;
  const size = document.querySelector('input[name="size"]:checked');
  const metode = document.querySelector('input[name="pay"]:checked');

  if (!nama || !size || !metode) {
    alert("Mohon lengkapi semua data sebelum mengirim.");
    return;
  }

  if (!uploadedFileURL) {
    alert("Mohon upload bukti pembayaran terlebih dahulu.");
    return;
  }

  const pesanRaw = `*Halo Admin, saya sudah melakukan pemesanan:*,\n\n` +
                   `*_Saya ingin beli panel ${size.value}_*.\n` +
                   `*_Nama Panel: ${nama}_*\n` +
                   `*_Metode pembayaran: ${metode.value}_*\n\n` +
                   `*_Bukti pembayaran:_*\n` +
`${uploadedFileURL}`;

  const encodedPesan = encodeURIComponent(pesanRaw);

  const nomor = "6288220019476"; // Ganti ke nomor WhatsApp admin kamu
  const url = `https://wa.me/${nomor}?text=${encodedPesan}`;

  window.open(url, "_blank");
}


// JS from FarinShop01.html

  let uploadedFileURL = "";

  document.getElementById('fileInput').addEventListener('change', async function() {
    const file = this.files[0];
    if (!file) return;

    document.getElementById('uploadStatus').innerText = 'Uploading...';

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async function () {
      const base64data = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

      const formData = new FormData();
      formData.append('key', 'f9943bb4ca50fd8004fbff6a34b02d44'); // Ganti pakai API KEY kamu
      formData.append('image', base64data);

      try {
        const response = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          uploadedFileURL = result.data.url;
          document.getElementById('uploadStatus').innerHTML = `✅ Upload sukses: <a href="${uploadedFileURL}" target="_blank" style="color:#00f0ff;">Lihat Bukti</a>`;
          console.log('Uploaded URL:', uploadedFileURL);
        } else {
          document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
          console.error(result);
        }

      } catch (error) {
        console.error('Error uploading file:', error);
        document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
      }
    };
  });

  function kirimWA() {
  const nama = document.getElementById("namaPanel").value;
  const size = document.querySelector('input[name="size"]:checked');
  const metode = document.querySelector('input[name="pay"]:checked');

  if (!nama || !size || !metode) {
    alert("Mohon lengkapi semua data sebelum mengirim.");
    return;
  }

  if (!uploadedFileURL) {
    alert("Mohon upload bukti pembayaran terlebih dahulu.");
    return;
  }

  const pesanRaw = `*Halo Admin, saya sudah melakukan pemesanan:*,\n\n` +
                   `*_Saya ingin beli ${size.value}_*.\n` +
                   `*_Nama Reseller Panel: ${nama}_*\n` +
                   `*_Metode pembayaran: ${metode.value}_*\n\n` +
                   `*_Bukti pembayaran:_*\n` +
`${uploadedFileURL}`;

  const encodedPesan = encodeURIComponent(pesanRaw);

  const nomor = "6288220019476"; // Ganti ke nomor WhatsApp admin kamu
  const url = `https://wa.me/${nomor}?text=${encodedPesan}`;

  window.open(url, "_blank");
}


// JS from FarinShop02.html

  let uploadedFileURL = "";

  document.getElementById('fileInput').addEventListener('change', async function() {
    const file = this.files[0];
    if (!file) return;

    document.getElementById('uploadStatus').innerText = 'Uploading...';

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async function () {
      const base64data = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

      const formData = new FormData();
      formData.append('key', 'f9943bb4ca50fd8004fbff6a34b02d44'); // Ganti pakai API KEY kamu
      formData.append('image', base64data);

      try {
        const response = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          uploadedFileURL = result.data.url;
          document.getElementById('uploadStatus').innerHTML = `✅ Upload sukses: <a href="${uploadedFileURL}" target="_blank" style="color:#00f0ff;">Lihat Bukti</a>`;
          console.log('Uploaded URL:', uploadedFileURL);
        } else {
          document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
          console.error(result);
        }

      } catch (error) {
        console.error('Error uploading file:', error);
        document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
      }
    };
  });

  function kirimWA() {
  const nama = document.getElementById("namaPanel").value;
  const size = document.querySelector('input[name="size"]:checked');
  const metode = document.querySelector('input[name="pay"]:checked');

  if (!nama || !size || !metode) {
    alert("Mohon lengkapi semua data sebelum mengirim.");
    return;
  }

  if (!uploadedFileURL) {
    alert("Mohon upload bukti pembayaran terlebih dahulu.");
    return;
  }

  const pesanRaw = `*Halo Admin, saya sudah melakukan pemesanan:*,\n\n` +
                   `*_Saya ingin beli ${size.value}_*.\n` +
                   `*_Nama Admin Panel: ${nama}_*\n` +
                   `*_Metode pembayaran: ${metode.value}_*\n\n` +
                   `*_Bukti pembayaran:_*\n` +
`${uploadedFileURL}`;

  const encodedPesan = encodeURIComponent(pesanRaw);

  const nomor = "6288220019476"; // Ganti ke nomor WhatsApp admin kamu
  const url = `https://wa.me/${nomor}?text=${encodedPesan}`;

  window.open(url, "_blank");
}


// JS from FarinShop03.html

  let uploadedFileURL = "";

  document.getElementById('fileInput').addEventListener('change', async function() {
    const file = this.files[0];
    if (!file) return;

    document.getElementById('uploadStatus').innerText = 'Uploading...';

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async function () {
      const base64data = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

      const formData = new FormData();
      formData.append('key', 'f9943bb4ca50fd8004fbff6a34b02d44'); // Ganti pakai API KEY kamu
      formData.append('image', base64data);

      try {
        const response = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();

        if (result.success) {
          uploadedFileURL = result.data.url;
          document.getElementById('uploadStatus').innerHTML = `✅ Upload sukses: <a href="${uploadedFileURL}" target="_blank" style="color:#00f0ff;">Lihat Bukti</a>`;
          console.log('Uploaded URL:', uploadedFileURL);
        } else {
          document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
          console.error(result);
        }

      } catch (error) {
        console.error('Error uploading file:', error);
        document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
      }
    };
  });

  function kirimWA() {
  const nama = document.getElementById("namaPanel").value;
  const size = document.querySelector('input[name="size"]:checked');
  const metode = document.querySelector('input[name="pay"]:checked');

  if (!nama || !size || !metode) {
    alert("Mohon lengkapi semua data sebelum mengirim.");
    return;
  }

  if (!uploadedFileURL) {
    alert("Mohon upload bukti pembayaran terlebih dahulu.");
    return;
  }

  const pesanRaw = `*Halo Admin, saya sudah melakukan pemesanan:*,\n\n` +
                   `*_Saya ingin beli ${size.value}_*.\n` +
                   `*_Nama Partner Panel: ${nama}_*\n` +
                   `*_Metode pembayaran: ${metode.value}_*\n\n` +
                   `*_Bukti pembayaran:_*\n` +
`${uploadedFileURL}`;

  const encodedPesan = encodeURIComponent(pesanRaw);

  const nomor = "6288220019476"; // Ganti ke nomor WhatsApp admin kamu
  const url = `https://wa.me/${nomor}?text=${encodedPesan}`;

  window.open(url, "_blank");
}


// JS from FarinShop04.html

  const layananData = {
    "WhatsApp Channel Members [ Targeted ]": {
      "Whatsapp Channel Members [ Global🌍 ] [ Max 50K ] | HQ Profiles | Day 20K": {
    nama: "Whatsapp Channel Members<br> [ Global🌍 ]",
    harga: 100,
    deskripsi: ".",
    waktu: "3 Menit",
    minimal: 10
},
      "Whatsapp Channel Members [ India🇮🇳 ] [ Max 50K ] | HQ Profiles | Day 20K": {
    nama: "Whatsapp Channel Members<br> [ India🇮🇳 ]",
    harga: 100,
    deskripsi: ".",
    waktu: "3jam, 38 Menit",
    minimal: 10
    },
    "Whatsapp Channel Members [ Arab🇦🇪 ] [ Max 50K ] | HQ Profiles | Day 20K": {
    nama: "Whatsapp Channel Members<br> [ Arab🇦🇪 ]",
    harga: 100,
    deskripsi: ".",
    waktu: "18 jam, 37 Menit",
    minimal: 10
},

"Whatsapp Channel Members [ USA🇺🇲 ] [ Max 50K ] | HQ Profiles | Day 20K": {
    nama: "Whatsapp Channel Members<br> [ USA🇺🇲 ]",
    harga: 100,
    deskripsi: ".",
    waktu: "3 Jam",
    minimal: 10
},
"Whatsapp Channel Members [ Europe🇪🇺 ] [ Max 50K ] | HQ Profiles | Day 20K": {
    nama: "Whatsapp Channel Members<br> [ Europe🇪🇺 ]",
    harga: 100,
    deskripsi: ".",
    waktu: "13 Jam",
    minimal: 10
},
"Whatsapp Channel Members [ Turkey🇹🇷 ] [ Max 50K ] | HQ Profiles | Day 20K": {
    nama: "Whatsapp Channel Members<br> [ Turkey🇹🇷 ]",
    harga: 100,
    deskripsi: ".",
    waktu: "1 Jam, 49 Menit",
    minimal: 10
}
        },
        
    "WhatsApp Channel Emoji Reactions": {
      "Whatsapp Channel Post Emoji Reactions [ ♥️ ] [Max 50K] | Instant Start": {
        nama: "Whatsapp Channel Post Emoji Reactions [ ♥️ ]",
        harga: 25,
        deskripsi: "",
        waktu: "3 menit",
        minimal: 100
},
      "Whatsapp Channel Post Emoji Reactions [ 😂 ] [Max 50K] | Instant Start": {
        nama: "Whatsapp Channel Post Emoji Reactions [ 😂 ]",
        harga: 25,
        deskripsi: "",
        waktu: "6 menit",
        minimal: 100
},
      "Whatsapp Channel Post Emoji Reactions [ ♥️ ] [Max 50K] | Instant Start": {
        nama: "Whatsapp Channel Post Emoji Reactions [ 😯 ]",
        harga: 25,
        deskripsi: "",
        waktu: "12 menit",
        minimal: 100
},
      "Whatsapp Channel Post Emoji Reactions [ 🥲 ] [Max 50K] | Instant Start": {
        nama: "Whatsapp Channel Post Emoji Reactions [ 🥲 ]",
        harga: 25,
        deskripsi: "",
        waktu: "6 Jam",
        minimal: 100
},
      "Whatsapp Channel Post Emoji Reactions [ 🙏 ] [Max 50K] | Instant Start": {
        nama: "Whatsapp Channel Post Emoji Reactions [ 🙏 ]",
        harga: 25,
        deskripsi: "",
        waktu: "19 Jam",
        minimal: 100
},
      "Whatsapp Channel Post Emoji Reactions [ 👏 ] [Max 50K] | Instant Start": {
        nama: "Whatsapp Channel Post Emoji Reactions [ 👏 ]",
        harga: 25,
        deskripsi: "",
        waktu: "5 menit",
        minimal: 100
},
      "Whatsapp Channel Post Emoji Reactions [ 🏆 ] [Max 50K] | Instant Start": {
        nama: "Whatsapp Channel Post Emoji Reactions [ 🏆 ]",
        harga: 25,
        deskripsi: "",
        waktu: "5 Jam, 3 menit",
        minimal: 100
},
      "Whatsapp Channel Post Emoji Reactions [ 🎉 ] [Max 50K] | Instant Start": {
        nama: "Whatsapp Channel Post Emoji Reactions [ 🎉 ]",
        harga: 25,
        deskripsi: "",
        waktu: "1 jam, 3 menit",
        minimal: 100
        }
        }
        };

  window.onload = function() {
    const kategoriSelect = document.getElementById("kategori");
    for (const kategori in layananData) {
      const option = document.createElement("option");
      option.value = kategori;
      option.textContent = kategori;
      kategoriSelect.appendChild(option);
      
    }
  };

  function updateLayanan() {
    const kategori = document.getElementById("kategori").value;
    const layananSelect = document.getElementById("layanan");
    layananSelect.innerHTML = '';

    if (kategori && layananData[kategori]) {
      for (const layanan in layananData[kategori]) {
        const option = document.createElement("option");
        option.value = layanan;
        option.textContent = layanan;
        layananSelect.appendChild(option);
      }
    } else {
      const option = document.createElement("option");
      option.textContent = "Pilih kategori dahulu...";
      layananSelect.appendChild(option);
    }

    updateKeterangan();
  }

  function updateKeterangan() {
    const kategori = document.getElementById("kategori").value;
    const layanan = document.getElementById("layanan").value;

    const box = document.getElementById("keteranganBox");
    const namaLayanan = document.getElementById("keteranganLayanan");
    const deskripsiLayanan = document.getElementById("keteranganDeskripsi");
    const waktuLayanan = document.getElementById("keteranganWaktu");

    if (kategori && layanan && layananData[kategori] && layananData[kategori][layanan]) {
      const data = layananData[kategori][layanan];
      box.style.display = "block";
      namaLayanan.innerHTML = data.nama;
      deskripsiLayanan.innerHTML = `Deskripsi:<br>` + data.deskripsi;
      waktuLayanan.innerHTML = `Waktu rata-rata: ` + data.waktu;
      
      const updateBox = document.getElementById("keteranganUpdate");


const jumlahInput = document.getElementById("jumlah");
    jumlahInput.min = data.minimal || 100; // default ke 1 kalau nggak ada minimal
    jumlahInput.placeholder = `Masukkan jumlah minimal ${jumlahInput.min}`;

      updateHarga();
    } else {
      box.style.display = "none";
      namaLayanan.textContent = "";
      deskripsiLayanan.textContent = "";
      waktuLayanan.textContent = "";
    }
  }

  function updateHarga() {
    const kategori = document.getElementById("kategori").value;
    const layanan = document.getElementById("layanan").value;
    const jumlah = parseInt(document.getElementById("jumlah").value) || 0;

    let hargaPerItem = 0;

    if (kategori && layanan && layananData[kategori] && layananData[kategori][layanan]) {
      hargaPerItem = layananData[kategori][layanan].harga;
    }

    const totalHarga = hargaPerItem * jumlah;

    document.getElementById("harga").value = "Rp " + totalHarga.toLocaleString();
  }
  
  let uploadedFileURL = "";

document.getElementById('fileInput').addEventListener('change', async function() {
  const file = this.files[0];
  if (!file) return;

  document.getElementById('uploadStatus').innerText = 'Uploading...';

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = async function () {
    const base64data = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

    const formData = new FormData();
    formData.append('key', 'f9943bb4ca50fd8004fbff6a34b02d44'); // API KEY imgBB
    formData.append('image', base64data);

    try {
      const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        uploadedFileURL = result.data.url;
        document.getElementById('uploadStatus').innerHTML = `✅ Upload sukses: <a href="${uploadedFileURL}" target="_blank" style="color:#ffffff;">Lihat Bukti</a>`;
        console.log('Uploaded URL:', uploadedFileURL);
      } else {
        document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
        console.error(result);
      }

    } catch (error) {
      console.error('Error uploading file:', error);
      document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
    }
  };
});

  function resetForm() {
    document.getElementById("kategori").value = "";
    updateLayanan();
    document.getElementById("target").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("harga").value = "Rp 0";
  }

function kirimPesanan() {
  const kategori = document.getElementById("kategori").value;
  const layanan = document.getElementById("layanan").value;
  const target = document.getElementById("target").value;
  const jumlah = document.getElementById("jumlah").value;
  const harga = document.getElementById("harga").value;
  
  const minJumlah = parseInt(document.getElementById("jumlah").min);
if (parseInt(jumlah) < minJumlah) {
    alert(`Jumlah pesanan minimal adalah ${minJumlah}.`);
    return; // supaya ga bisa kirim
}

  if (!kategori || !layanan || !target || !jumlah) {
    alert("Mohon lengkapi semua data sebelum mengirim.");
    return;
  }

  if (!uploadedFileURL) {
    alert("Mohon upload bukti pembayaran terlebih dahulu.");
    return;
  }

  const pesan = `Halo Admin, saya ingin memesan:\n\nKategori: ${kategori}\nLayanan: ${layanan}\nTarget: ${target}\nJumlah: ${jumlah}\nTotal Harga: ${harga}\n\nBukti Pembayaran:\n${uploadedFileURL}`;
  
  const encodedPesan = encodeURIComponent(pesan);
  const nomor = "6288220019476"; // Ganti ke nomor WhatsApp admin kamu
  const url = `https://wa.me/${nomor}?text=${encodedPesan}`;

  window.open(url, "_blank");
}


// JS from FarinShop05.html

  const layananData = {
    "Instagram Indonesia": {
      "Followers": {
    nama: "Instagram Followers Indonesia",
    harga: 70,
    deskripsi: "Masukkan username Instagram tanpa @.<br>Jangan pakai link profile.",
    waktu: "1-3 jam",
    minimal: 100
},
      "Like": {
        nama: "Instagram Like Indonesia",
        harga: 5,
        deskripsi: "Masukkan link post Instagram.",
        waktu: "10 Menit",
        minimal: 500
},
      "View": {
        nama: "Instagram View Indonesia",
        harga: 3,
        deskripsi: "Masukkan link post Instagram.",
        waktu: "5 Menit",
        minimal: 1000
}
        },
        
    "Tiktok Indonesia": {
      "Followers": {
        nama: "Tiktok Followers Indonesia",
        harga: 110,
        deskripsi: "Masukkan username Tiktok tanpa @.",
        waktu: "1-2 jam",
        minimal: 50
},
      "Like": {
        nama: "Tiktok Likes Video Real",
        harga: 10,
        deskripsi: "Masukkan link video Tiktok.",
        waktu: "30 menit - 1 jam",
        minimal: 1000
},
"View": {
        nama: "Tiktok View Indonesia",
        harga: 1,
        deskripsi: "Masukkan Link Video Tiktok.",
        waktu: "20 Menit",
        minimal: 1000
}
        },
        
"Instagram Bule": {
      "Followers": {
    nama: "Instagram Followers Acak",
    harga: 35,
    deskripsi: "Masukkan username Instagram tanpa @.<br>Jangan pakai link profile.",
    waktu: "1 jam",
    minimal: 200
},
      "Like": {
        nama: "Instagram Like Acak",
        harga: 2,
        deskripsi: "Masukkan link post Instagram.",
        waktu: "25 Menit",
        minimal: 1000
},
      "View": {
        nama: "Instagram View",
        harga: 1,
        deskripsi: "Masukkan link post Instagram.",
        waktu: "15 Menit",
        minimal: 1000
}
    },
    "Shopee": {
      "Followers": {
    nama: "Shopee Followers indonesia🇮🇩",
    harga: 35,
    deskripsi: ".",
    waktu: "12 jam, 28 menit",
    minimal: 100
},
      "Like": {
        nama: "Shopee Like Indonesia🇮🇩",
        harga: 10,
        deskripsi: "1. Input Link Shopee Video<br>2. Example Link : https://id.shp.ee/qxma3wa?smtt=0.0.9<br>3. Speed 100K / Days<br>4. Di proses menggunakan sistem yang canggih xEmulator machine 1TB ECC, yang bekerja dengan skala penuh layaknya sentuhan nyata",
        waktu: "1 jam, 28 menit",
        minimal: 1000
}
},
"Tokopedia": {
      "Followers": {
    nama: "Tokopedia Followers S47 [ Max 10K ][Non Drop ][ BETA ]",
    harga: 160,
    deskripsi: "Permanen !!<br>Format link :<br>https://tokopedia.link/BlWTSmVKJEx<br>https://www.tokopedia.com/usertoko<br>username",
    waktu: "20 Menit",
    minimal: 50
    }
    },
"Telegram": {
      "Member [ Bot Account ]": {
    nama: "Telegram Members<br> (Channel/Group) [ Max 50K ]",
    harga: 30,
    deskripsi: ".",
    waktu: "4 jam",
    minimal: 100
},
     "Member [ Non Drop ]": {
    nama: "Telegram Members [ Max 100K ] | High Quality | Non Drop",
    harga: 50,
    deskripsi: ".",
    waktu: "1 jam, 30 Menit",
    minimal: 100
    },
      "Member [ Bot Account ]": {
    nama: "Telegram Members<br> (Channel/Group) [ Max 50K ]",
    harga: 30,
    deskripsi: ".",
    waktu: "50 Menit",
    minimal: 100
    }
    },
"Twitter": {
      "Followers": {
    nama: "Twitter Followers [ Global 🌍 ] [ Max 20K ] | MQ Profiles | Day 1|2K ⚡️| %𝟭𝟬𝟬 𝗡𝗢𝗡 𝗗𝗥𝗢𝗣",
    harga: 170,
    deskripsi: ".",
    waktu: "58 Menit",
    minimal: 50
    },
      "Like": {
    nama: "Twitter Likes | Max 30K | SuperInstant | Speed: 20K/Day",
    harga: 40,
    deskripsi: "Masukan Link Post",
    waktu: "4 jam",
    minimal: 100
    },
          "View": {
        nama: "Instagram View",
        harga: 1,
        deskripsi: "Masukkan link post Instagram.",
        waktu: "1 Hari, 19 jam, 37 menit",
        minimal: 1000
        }
        }
        };

  window.onload = function() {
    const kategoriSelect = document.getElementById("kategori");
    for (const kategori in layananData) {
      const option = document.createElement("option");
      option.value = kategori;
      option.textContent = kategori;
      kategoriSelect.appendChild(option);
      
    }
  };

  function updateLayanan() {
    const kategori = document.getElementById("kategori").value;
    const layananSelect = document.getElementById("layanan");
    layananSelect.innerHTML = '';

    if (kategori && layananData[kategori]) {
      for (const layanan in layananData[kategori]) {
        const option = document.createElement("option");
        option.value = layanan;
        option.textContent = layanan;
        layananSelect.appendChild(option);
      }
    } else {
      const option = document.createElement("option");
      option.textContent = "Pilih kategori dahulu...";
      layananSelect.appendChild(option);
    }

    updateKeterangan();
  }

  function updateKeterangan() {
    const kategori = document.getElementById("kategori").value;
    const layanan = document.getElementById("layanan").value;

    const box = document.getElementById("keteranganBox");
    const namaLayanan = document.getElementById("keteranganLayanan");
    const deskripsiLayanan = document.getElementById("keteranganDeskripsi");
    const waktuLayanan = document.getElementById("keteranganWaktu");

    if (kategori && layanan && layananData[kategori] && layananData[kategori][layanan]) {
      const data = layananData[kategori][layanan];
      box.style.display = "block";
      namaLayanan.innerHTML = data.nama;
      deskripsiLayanan.innerHTML = `Deskripsi:<br>` + data.deskripsi;
      waktuLayanan.innerHTML = `Waktu rata-rata: ` + data.waktu;
      
      const updateBox = document.getElementById("keteranganUpdate");

if (
  (kategori === "Instagram Bule" && layanan === "Followers") ||
  (kategori === "Instagram Indonesia" && layanan === "Followers")
) {
    updateBox.style.display = "block";
    updateBox.innerHTML = `
      🚀 <strong>UPDATE TERBARU INSTAGRAM !!!</strong><br><br>
      Agar status pesanan tidak <em>partial</em> dan followers bisa masuk, ikuti langkah berikut ini di akun Instagram:<br>
      - <strong>Indonesia:</strong> Pengaturan dan aktivitas → Ikuti dan undang teman → Laporkan untuk ditinjau (nonaktifkan).<br>
      Contoh: <a href="https://prnt.sc/e71qXX2LkHQ4" target="_blank" style="color:#00f0ff;">https://prnt.sc/e71qXX2LkHQ4</a><br>
      - <strong>English:</strong> Settings and privacy → Follow and invite friends → Flag for review (disable).<br>
      Example: <a href="https://prnt.sc/ITf2lcZ_ZSkP" target="_blank" style="color:#00f0ff;">https://prnt.sc/ITf2lcZ_ZSkP</a>
    `;
} else {
    updateBox.style.display = "none";
    updateBox.innerHTML = "";
}

const jumlahInput = document.getElementById("jumlah");
    jumlahInput.min = data.minimal || 100; // default ke 1 kalau nggak ada minimal
    jumlahInput.placeholder = `Masukkan jumlah minimal ${jumlahInput.min}`;

      updateHarga();
    } else {
      box.style.display = "none";
      namaLayanan.textContent = "";
      deskripsiLayanan.textContent = "";
      waktuLayanan.textContent = "";
    }
  }

  function updateHarga() {
    const kategori = document.getElementById("kategori").value;
    const layanan = document.getElementById("layanan").value;
    const jumlah = parseInt(document.getElementById("jumlah").value) || 0;

    let hargaPerItem = 0;

    if (kategori && layanan && layananData[kategori] && layananData[kategori][layanan]) {
      hargaPerItem = layananData[kategori][layanan].harga;
    }

    const totalHarga = hargaPerItem * jumlah;

    document.getElementById("harga").value = "Rp " + totalHarga.toLocaleString();
  }
  
  let uploadedFileURL = "";

document.getElementById('fileInput').addEventListener('change', async function() {
  const file = this.files[0];
  if (!file) return;

  document.getElementById('uploadStatus').innerText = 'Uploading...';

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = async function () {
    const base64data = reader.result.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");

    const formData = new FormData();
    formData.append('key', 'f9943bb4ca50fd8004fbff6a34b02d44'); // API KEY imgBB
    formData.append('image', base64data);

    try {
      const response = await fetch('https://api.imgbb.com/1/upload', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        uploadedFileURL = result.data.url;
        document.getElementById('uploadStatus').innerHTML = `✅ Upload sukses: <a href="${uploadedFileURL}" target="_blank" style="color:#ffffff;">Lihat Bukti</a>`;
        console.log('Uploaded URL:', uploadedFileURL);
      } else {
        document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
        console.error(result);
      }

    } catch (error) {
      console.error('Error uploading file:', error);
      document.getElementById('uploadStatus').innerText = '❌ Gagal upload file.';
    }
  };
});

  function resetForm() {
    document.getElementById("kategori").value = "";
    updateLayanan();
    document.getElementById("target").value = "";
    document.getElementById("jumlah").value = "";
    document.getElementById("harga").value = "Rp 0";
  }

function kirimPesanan() {
  const kategori = document.getElementById("kategori").value;
  const layanan = document.getElementById("layanan").value;
  const target = document.getElementById("target").value;
  const jumlah = document.getElementById("jumlah").value;
  const harga = document.getElementById("harga").value;
  
  const minJumlah = parseInt(document.getElementById("jumlah").min);
if (parseInt(jumlah) < minJumlah) {
    alert(`Jumlah pesanan minimal adalah ${minJumlah}.`);
    return; // supaya ga bisa kirim
}

  if (!kategori || !layanan || !target || !jumlah) {
    alert("Mohon lengkapi semua data sebelum mengirim.");
    return;
  }

  if (!uploadedFileURL) {
    alert("Mohon upload bukti pembayaran terlebih dahulu.");
    return;
  }

  const pesan = `Halo Admin, saya ingin memesan:\n\nKategori: ${kategori}\nLayanan: ${layanan}\nTarget: ${target}\nJumlah: ${jumlah}\nTotal Harga: ${harga}\n\nBukti Pembayaran:\n${uploadedFileURL}`;
  
  const encodedPesan = encodeURIComponent(pesan);
  const nomor = "6288220019476"; // Ganti ke nomor WhatsApp admin kamu
  const url = `https://wa.me/${nomor}?text=${encodedPesan}`;

  window.open(url, "_blank");
}


// JS from index.html


