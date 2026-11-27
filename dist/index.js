"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Import modul readline untuk input/output di terminal Node.js
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Variabel untuk menjaga loop menu tetap berjalan
let isRunning = true;
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
//# sourceMappingURL=index.js.map