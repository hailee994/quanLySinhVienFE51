// console.log(axios);

//Khai bao service
var svService = new SinhVienService();

var layThongTinSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();

  promise
    .then(function (result) {
      var content = "";

      for (var i = 0; i < result.data.length; i++) {
        var sv = result.data[i];

        // tao doi tuong chua du lieu do
        var sinhVien = new SinhVien();

        // console.log(sv);
        sinhVien.maSinhVien = sv.maSinhVien;
        sinhVien.tenSinhVien = sv.tenSinhVien;
        sinhVien.email = sv.email;
        sinhVien.diemToan = sv.diemToan;
        sinhVien.diemLy = sv.diemLy;
        sinhVien.diemHoa = sv.diemHoa;
        sinhVien.diemRenLuyen = sv.diemRenLuyen;
        sinhVien.loaiSinhVien = sv.loaiSinhVien;

        content += `
          <tr>
            <td>${sinhVien.maSinhVien}</td>
            <td>${sinhVien.tenSinhVien}</td>
            <td>${sinhVien.email}</td>
            <td>${sinhVien.loaiSinhVien}</td>
            <td>${sinhVien.dtb().toFixed(2)}</td>
            <td>${sinhVien.diemRenLuyen}</td>
            <td><button class="btn btn-primary" onclick="chinhSua('${
              sinhVien.maSinhVien
            }')">Edit</button></td>
            <td><button class="btn btn-danger"  onclick="xoaSinhVien('${
              sinhVien.maSinhVien
            }')">Delete</button></td>
          </tr>
        `;
      }
      document.getElementById("tbSV").innerHTML = content;
    })
    .catch(function (err) {
      console.log(err.response.data);
    });
};

layThongTinSinhVien();

// // tao ra 1 obj chua cac thong tin BE cung cap
// // var objSinhVien = {
// //   url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien", //duong dan BE cung cap
// //   method: "GET", //giao thuc BE cung cap
// // };

// // dung thu vien axios gui yeu cau den server
// var promise = axios(objSinhVien);

// // ham xu ly khi kq tra ve thanh cong
// var getDataSuccess = function (result) {
//   console.log(result.data);
//   var content = "";
//   // tu du lieu tao table
// };

// // ham xu ly khi lay du lieu that bai
// var getDataDenied = function (err) {};

// // phuong thuc .then(callback): nhan vao 1 ham co 1 tham so la kq tra ve thanh cong tu phia server => tra ve du lieu
// // phuong thuc .catch(callback): nhan vao 1 ham co 1 tham so la kq tra ve that bai tu phia server => tra ve loi
// promise.then(getDataSuccess).catch(getDataDenied);

document.getElementById("add").onclick = function () {
  var sv = new SinhVien();

  sv.maSinhVien = document.getElementById("maSV").value;
  sv.tenSinhVien = document.getElementById("tenSV").value;
  sv.email = document.getElementById("email").value;
  sv.diemToan = document.getElementById("diemToan").value;
  sv.diemLy = document.getElementById("diemLy").value;
  sv.diemHoa = document.getElementById("diemHoa").value;
  sv.diemRenLuyen = document.getElementById("renLuyen").value;
  sv.loaiSinhVien = document.getElementById("loaiSV").value;

  console.log(typeof sv.maSinhVien);

  // tao ra obj BE can

  axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien", // link BE cung cap
    method: "POST", // phuong thuc BE cung cap
    data: sv, // theo dinh dang BE yeu cau
  })
    .then(function (result) {
      console.log("Ket qua", result.data);
      //c1: location.reload => moi lan reload se load lai trang
      location.reload();

      //c2: goi lai API lay danh sach sv tai day
    })
    .catch(function (err) {
      console.log("Ket qua", err.response.data);
    });
};

//ham xoa sinh vien
var xoaSinhVien = function (maSinhVien) {
  // alert(maSinhVien);

  // goi API tu BE tra ve promise
  var promise = svService.xoaSinhVien(maSinhVien);
  promise
    .then(function (result) {
      console.log(result.data);

      layThongTinSinhVien();
    })
    .catch(function (err) {
      console.log(err.response.data);
    });
};

var chinhSua = function (maSinhVien) {
  // alert(maSinhVien);

  document.getElementById("maSV").disabled = true;

  //goi api lay thong tin sinh vien tu server dua vao ma
  var promise = svService.layThongTinSinhVien(maSinhVien);

  promise
    .then(function (result) {
      var sinhVien = result.data;

      document.getElementById("maSV").value = sinhVien.maSinhVien;
      document.getElementById("tenSV").value = sinhVien.tenSinhVien;
      document.getElementById("email").value = sinhVien.email;
      document.getElementById("diemToan").value = sinhVien.diemToan;
      document.getElementById("diemLy").value = sinhVien.diemLy;
      document.getElementById("diemHoa").value = sinhVien.diemHoa;
      document.getElementById("renLuyen").value = sinhVien.diemRenLuyen;
      document.getElementById("loaiSV").value = sinhVien.loaiSinhVien;
    })
    .catch(function (err) {
      console.log(err.response.data);
    });
};

document.getElementById("edit").onclick = function () {
  //Lay thong tin sinh vien tu ng dung nhap vao
  var sinhVienUpdate = new SinhVien();

  sinhVienUpdate.maSinhVien = document.getElementById("maSV").value;
  sinhVienUpdate.tenSinhVien = document.getElementById("tenSV").value;
  sinhVienUpdate.email = document.getElementById("email").value;
  sinhVienUpdate.diemToan = document.getElementById("diemToan").value;
  sinhVienUpdate.diemLy = document.getElementById("diemLy").value;
  sinhVienUpdate.diemHoa = document.getElementById("diemHoa").value;
  sinhVienUpdate.diemRenLuyen = document.getElementById("renLuyen").value;
  sinhVienUpdate.loaiSinhVien = document.getElementById("loaiSV").value;

  //goi api cap nhat sinh vien tu BE ra
  var promise = svService.capNhatSinhVien(
    sinhVienUpdate.maSinhVien,
    sinhVienUpdate
  );

  promise
    .then(function (result) {
      console.log(result.data);
      layThongTinSinhVien();
    })
    .catch(function (err) {
      console.log(err.response.data);
    });
};
