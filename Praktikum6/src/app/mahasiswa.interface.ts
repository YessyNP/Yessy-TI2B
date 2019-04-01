export interface mahasiswa { //FormGroup
    nama_mhs:string; //Form Control
    pendidikan:{ // FormGroup
        nama_jurusan:string; //Form Control
        nama_prodi:string; //Form Control
    }
}