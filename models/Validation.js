var Validation = function () {
  this.kiemTraRong = function (value, name, selectorError) {
    if (value.trim() == "") {
      document.querySelector(selectorError).innerHTML = `${name} khong hop le`;
      return false;
    } else {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
  };

  this.kiemTraChu = function (value, name, selectorError) {
    var letters = /^[A-Z a-z]+$/;

    if (letters.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(
      selectorError
    ).innerHTML = `${name} khong dung dinh dang`;
    return false;
  };

  this.kiemTraMail = function (value, name, selectorError) {
    var lettersMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (lettersMail.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(
      selectorError
    ).innerHTML = `${name} khong dung dinh dang`;
    return false;
  };

  this.kiemTraSo = function (value, name, selectorError) {
    var allNumber = /^[0-9]+$/;

    if (allNumber.test(value)) {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
    document.querySelector(
      selectorError
    ).innerHTML = `${name} khong dung dinh dang`;
    return false;
  };

  this.kiemTraDoDai = function (
    value,
    name,
    selectorError,
    minLength,
    maxLength
  ) {
    if (value.trim().length > maxLength || value.trim().length < minLength) {
      // neu do dai gia tri nhap vao lon hon do dai cho phep hoac nho hon do dai toi thieu => khong hop le
      document.querySelector(
        selectorError
      ).innerHTML = `${name} tu ${minLength} den ${maxLength}`;
      return false;
    }

    document.querySelector(selectorError).innerHTML = "";
    return true;
  };

  this.kiemTraGiaTri = function (
    value,
    name,
    selectorError,
    minLength,
    maxLength
  ) {
    if (Number(value) > maxLength || Number(value) < minLength) {
      // neu gia tri nhap vao nam ngoai pham vi cho phep thi bao loi
      document.querySelector(
        selectorError
      ).innerHTML = `${name} tu ${minLength} den ${maxLength}`;
      return false;
    }

    document.querySelector(selectorError).innerHTML = "";
    return true;
  };
};
