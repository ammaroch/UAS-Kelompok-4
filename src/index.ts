import * as readline from 'readline';    
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variabel untuk menjaga loop menu tetap berjalan
let isRunning: boolean = true;

// --- FUNGSI-FUNGSI PLACEHOLDER (Isi sesuai logika masing-masing) ---
const fungsiCreate = () => console.log(">> Menjalankan Fitur Create...");
const fungsiRead = () => console.log(">> Menampilkan Data...");
const fungsiUpdate = () => console.log(">> Menjalankan Fitur Update...");
const fungsiDelete = () => console.log(">> Menjalankan Fitur Delete...");
const fungsiSearch = () => console.log(">> Menjalankan Fitur Search...");
const fungsiTransaksi = () => console.log(">> Menjalankan Fitur Transaksi...");

// --- FUNGSI MENU UTAMA ---
const tampilkanMenu = () => {
    console.log("\n==============================");
    console.log("       MENU UTAMA APLIKASI    ");
    console.log("==============================");
    console.log("1. Create (Tambah Data)");
    console.log("2. Read (Lihat Data)");
    console.log("3. Update (Ubah Data)");
    console.log("4. Delete (Hapus Data)");
    console.log("5. Search (Cari Data)");
    console.log("6. Transaksi");
    console.log("7. Keluar");
    console.log("==============================");
};

// Fungsi utama yang akan dijalankan
const mainMenu = () => {
    if (!isRunning) {
        rl.close();
        return;
    }

    tampilkanMenu();

    rl.question("Masukkan Pilihan Menu (1-7): ", (pilihan) => {
        // Mengubah input string menjadi integer
        const pilihanMenu = parseInt(pilihan);

        // Percabangan menggunakan Switch-Case
        switch (pilihanMenu) {
            case 1:
                fungsiCreate();
                break;
            case 2:
                fungsiRead();
                break;
            case 3:
                fungsiUpdate();
                break;
            case 4:
                fungsiDelete();
                break;
            case 5:
                fungsiSearch();
                break;
            case 6:
                fungsiTransaksi();
                break;
            case 7:
                console.log("Terima kasih! Program selesai.");
                isRunning = false; // Menghentikan Loop
                break;
            default:
                // Jika input bukan 1-7
                console.log("Pilihan tidak valid! Silakan coba lagi.");
                break;
        }

        // Memanggil ulang fungsi mainMenu untuk looping
        mainMenu();
    });
};

// Menjalankan program
console.log("Memulai Aplikasi...");
mainMenu();