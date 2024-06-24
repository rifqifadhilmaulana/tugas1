// buat obejek

let karyawan = {
    nama : `RIFQI`,
    umur : 30,
    member: true,
    gajiBulanan : 150000000,
}

let gajiTahunan = karyawan.gajiBulanan*12

let bonus = karyawan.umur > 30

console.log(`NAMA : ${karyawan.nama}`);
console.log(`UMUR : ${karyawan.umur}`);
console.log(`MEMBER: ${karyawan.member}`);
console.log(`GAJI BULANAN: ${karyawan.gajiBulanan}`);
console.log(`GAJI SELAMA SETAHUN: ${gajiTahunan}`);
console.log(`BONUS : ${bonus}`);



