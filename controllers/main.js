var arrSV = [];

var validate = new Validation();

document.getElementById("submit").onclick = function () {
  var sinhVien = new SinhVien();

  sinhVien.maSV = document.getElementById("maSV").value;
  sinhVien.tenSV = document.getElementById("tenSV").value;
  sinhVien.email = document.getElementById("email").value;
  sinhVien.toan = document.getElementById("diemToan").value;
  sinhVien.ly = document.getElementById("diemLy").value;
  sinhVien.hoa = document.getElementById("diemHoa").value;
  sinhVien.diemRenLuyen = document.getElementById("renLuyen").value;
  sinhVien.loaiSV = document.getElementById("loaiSV").value;
  // sinhVien.dtb = function () {
  //   return (Number(this.toan) + Number(this.ly) + Number(this.hoa)) / 3;
  // };

  // kiem tra du lieu hop le
  var valid = true;

  // kiem tra rong
  valid &=
    validate.kiemTraRong(sinhVien.maSV, "ma sinh vien", "#err__maSV--ktRong") &
    validate.kiemTraRong(
      sinhVien.tenSV,
      "ten sinh vien",
      "#err__tenSV--ktRong"
    ) &
    validate.kiemTraRong(sinhVien.email, "email", "#err__email--ktRong") &
    validate.kiemTraRong(sinhVien.toan, "toan", "#err__toan--ktRong") &
    validate.kiemTraRong(sinhVien.ly, "ly", "#err__ly--ktRong") &
    validate.kiemTraRong(sinhVien.hoa, "hoa", "#err__hoa--ktRong") &
    validate.kiemTraRong(
      sinhVien.diemRenLuyen,
      "diem ren luyen",
      "#err__renLuyen--ktRong"
    );

  // kiem tra kieu chu
  valid &= validate.kiemTraChu(
    sinhVien.tenSV,
    "ten sinh vien",
    "#err__tenSV--allLetters"
  );

  // email
  valid &= validate.kiemTraMail(sinhVien.email, "Email", "#err__email--format");

  // so
  valid &=
    validate.kiemTraSo(sinhVien.maSV, "Ma sinh vien", "#err__maSV--allNumber") &
    validate.kiemTraSo(sinhVien.toan, "Diem toan", "#err__toan--allNumber") &
    validate.kiemTraSo(sinhVien.ly, "Diem ly", "#err__ly--allNumber") &
    validate.kiemTraSo(sinhVien.hoa, "Diem hoa", "#err__hoa--allNumber") &
    validate.kiemTraSo(
      sinhVien.diemRenLuyen,
      "Diem ren luyen",
      "#err__renLuyen--allNumber"
    );

  // do dai
  valid &= validate.kiemTraDoDai(
    sinhVien.maSV,
    "Ma sinh vien",
    "#err__maSV--maxMinLength",
    4,
    6
  );

  // kt gia tri
  valid &=
    validate.kiemTraGiaTri(
      sinhVien.toan,
      "Diem toan",
      "#err__toan--maxMinValue",
      1,
      10
    ) &
    validate.kiemTraGiaTri(
      sinhVien.ly,
      "Diem ly",
      "#err__ly--maxMinValue",
      1,
      10
    ) &
    validate.kiemTraGiaTri(
      sinhVien.hoa,
      "Diem hoa",
      "#err__hoa--maxMinValue",
      1,
      10
    ) &
    validate.kiemTraGiaTri(
      sinhVien.diemRenLuyen,
      "Diem ren luyen",
      "#err__renLuyen--maxMinValue",
      1,
      10
    );

  // console.log(valid);
  if (!valid) {
    return;
  }

  // cach OOP
  arrSV.push(sinhVien);

  // goi ham tao bang
  taoBang(arrSV);
  // console.log(arrSV);

  luuLocal();
};

var taoBang = function (arrSinhVien) {
  var contentTable = "";
  // duyet qua mang sinh vien tao ra cac dong tr
  for (var i = 0; i < arrSinhVien.length; i++) {
    // moi lan duyet lay ra 1 doi tuong trong mang
    var sv = arrSinhVien[i];

    // tao doi tuong
    var sVien = new SinhVien(
      sv.maSV,
      sv.tenSV,
      sv.email,
      sv.toan,
      sv.ly,
      sv.hoa,
      sv.diemRenLuyen,
      sv.loaiSV
    );

    // console.log(sv.dtb());
    // sVien.maSV = sv.maSV;
    // sVien.tenSV = sv.tenSV;
    // sVien.toan = sv.toan;
    // sVien.ly = sv.ly;
    // sVien.hoa = sv.hoa;
    // sVien.diemRenLuyen = sv.diemRenLuyen;
    // sVien.loaiSV = sv.loaiSV;

    // tao the tr + don vao noi dung contentTable
    contentTable += `
      <tr>
        <td>${sVien.maSV}</td>
        <td>${sVien.tenSV}</td>
        <td>${sVien.email}</td>
        <td>${sVien.loaiSV}</td>
        <td>${sVien.dtb().toFixed(2)}</td>
        <td>${sVien.diemRenLuyen}</td>
        <td>
          <button class="btn btn-primary" onclick="btnEdit(${
            sVien.maSV
          })">Edit</button>
        </td>
        <td>
          <button class="btn btn-danger" onclick="btnDelete(${
            sVien.maSV
          })">Xóa</button>
        </td>
      </tr>
    `;
  }

  // ${sv.dtb().toFixed(2)}
  // console.log(contentTable);
  document.getElementById("tbSV").innerHTML = contentTable;
};

var btnEdit = function (maSV) {
  // khoa input ma sinh vien
  document.getElementById("maSV").disabled = true;
  // console.log(maSV);
  for (var i = 0; i < arrSV.length; i++) {
    // moi lan duyet lay ra 1 sv
    var sv = arrSV[i];

    if (sv.maSV == maSV) {
      document.getElementById("maSV").value = sv.maSV;
      document.getElementById("tenSV").value = sv.tenSV;
      document.getElementById("email").value = sv.email;
      document.getElementById("diemToan").value = sv.toan;
      document.getElementById("diemLy").value = sv.ly;
      document.getElementById("diemHoa").value = sv.hoa;
      document.getElementById("renLuyen").value = sv.diemRenLuyen;
      document.getElementById("loaiSV").value = sv.loaiSV;
    }
  }
};

document.getElementById("edit").onclick = function () {
  var updateSV = new SinhVien();

  updateSV.maSV = document.getElementById("maSV").value;
  updateSV.tenSV = document.getElementById("tenSV").value;
  updateSV.email = document.getElementById("email").value;
  updateSV.toan = document.getElementById("diemToan").value;
  updateSV.ly = document.getElementById("diemLy").value;
  updateSV.hoa = document.getElementById("diemHoa").value;
  updateSV.diemRenLuyen = document.getElementById("renLuyen").value;
  updateSV.loaiSV = document.getElementById("loaiSV").value;

  console.log(updateSV);

  for (var i = 0; i < arrSV.length; i++) {
    var sv = arrSV[i];

    if (sv.maSV === updateSV.maSV) {
      sv.tenSV = updateSV.tenSV;
      sv.email = updateSV.email;
      sv.toan = updateSV.toan;
      sv.ly = updateSV.ly;
      sv.hoa = updateSV.hoa;
      sv.diemRenLuyen = updateSV.diemRenLuyen;
      sv.loaiSV = updateSV.loaiSV;
    }

    taoBang(arrSV);
    luuLocal();

    // clear tat ca thong tin va bat lai input ma
    document.getElementById("maSV").disabled = false;
    var arrInput = document.getElementsByTagName("input");
    for (var i = 0; i < arrInput.length; i++) {
      var tagInput = arrInput[i];
      tagInput.value = "";
    }
  }
};

var btnDelete = function (maSinhVien) {
  // alert(maSinhVien);

  for (var i = arrSV.length - 1; i >= 0; i--) {
    // moi lan duyet lay ra 1 doi tuong sv
    var sv = arrSV[i];
    console.log("sv->", sv.maSV);

    // kiem tra tung phan tu sv xem co ma = voi maSV can xoa hay k?
    if (sv.maSV == maSinhVien) {
      arrSV.splice(i, 1);
    }
    // sau khi xoa tao lai bang = mang du lieu da xoa
    taoBang(arrSV);

    // khi xoa no se luu vao localStorage
    // layLocal();
  }
};

// luu localstorage
var luuLocal = function () {
  // cac buoc luu tru mang sinh vien xuong localStore

  var stringArrSV = JSON.stringify(arrSV); // => bien mang sinh vien thanh 1 chuoi
  console.log("chuoi sv->", stringArrSV);
  console.log("mang sv ->", arrSV);

  localStorage.setItem("mangSinhVien", stringArrSV);
};

// lay du lieu tu localStore
var layLocal = function () {
  // kiem tra du lieu co trong localStore chua?
  if (localStorage.getItem("mangSinhVien")) {
    // lay ra du lieu la chuoi
    var chuoiArrSV = localStorage.getItem("mangSinhVien");

    var mangSinhVienStore = JSON.parse(chuoiArrSV);
    // lay ra va gan vao mang sinh vien
    arrSV = mangSinhVienStore;

    // console.log(mangSinhVienStore);

    // goi ham tao bang lay tu localStore
    taoBang(arrSV);
  }
};
layLocal();
