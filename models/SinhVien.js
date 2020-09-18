var SinhVien = function (
  masv,
  tensv,
  email,
  diemtoan,
  diemly,
  diemhoa,
  diemrenluyen,
  loaisv
) {
  (this.maSinhVien = masv),
    (this.tenSinhVien = tensv),
    (this.email = email),
    (this.diemToan = diemtoan),
    (this.diemLy = diemly),
    (this.diemHoa = diemhoa),
    (this.diemRenLuyen = diemrenluyen),
    (this.loaiSinhVien = loaisv);
  this.dtb = function () {
    return (
      (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3
    );
  };
};
