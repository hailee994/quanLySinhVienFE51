var SinhVienService = function () {
  // phuong thuc lay ds sinh vien tu BE ve
  this.layDanhSachSinhVien = function () {
    var promise = axios({
      url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien", //duong dan BE cung cap
      method: "GET", //giao thuc BE cung cap
    });
    return promise;
  };

  this.xoaSinhVien = function (maSinhVien) {
    var promise = axios({
      url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSinhVien}`,
      method: "DELETE",
    });
    return promise;
  };

  this.layThongTinSinhVien = function (maSinhVien) {
    var promise = axios({
      url: `http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=${maSinhVien}`,
      method: "GET",
    });
    return promise;
  };

  this.capNhatSinhVien = function (maSinhVien, sinhVienUpdate) {
    var promise = axios({
      url: `http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=${maSinhVien}`,
      method: "PUT",
      data: sinhVienUpdate,
    });
    return promise;
  };

  this.timKiemSinhVien = function () {
    console.log("chuc nang tim kiem sinh vien");
    return "";
  };
};
