/**
 * Bài 1:
 * Đầu vào: Ngày;Tháng;Năm
 *
 * Xử lý:
 * Tạo 3 biến: day;month;year
 * Tạo biến nhuan
 * xét năm nhuận year% 4 == 0 && year % 100 != 0 || year %400 ==0
 * Khi người dùng chọn Ngày Mai thì chỉ cần tăng giá trị ngày lên 1. Ngược lại, chọn Ngày Hôm Qua thì trừ đi 1.
 * Kiểm tra các trường hợp ngày đầu tháng
 * Ngày nhập vào là ngày 1 của các tháng 5,7,10,12 thì Ngày Hôm Qua là ngày 30 của tháng trước
 * Ngày nhập vào là ngày 1 của các tháng 1,2,4,6,8,9,11 thì Ngày Hôm Qua là ngày 31 của tháng trước
 * Ngày nhập vào là ngày 1 của tháng 3 và là năm nhuận thì Ngày Hôm Qua là 29/2. Ngược lại, không phải năm nhuận thì Ngày Hôm Qua là 28/2
 * Kiểm tra các trường hợp ngày cuối tháng:
 * Ngày nhập vào là ngày 31 của các tháng 1,3,5,7,8,10,12 thì Ngày Mai là ngày 1 của tháng kế tiếp.
 * Ngày nhập vào là ngày 30 của các tháng 4,6,9,11 thì Ngày Mai là ngày 1 của tháng kế tiếp.
 * Nếu là tháng 2 và năm nhuận thì ngày mai của ngày 29/2 mới là 1/3
 * Nếu là tháng 2 và năm không nhuận thì ngày mai của ngày 28/2 mới là 1/3
 * Kiểm tra các trường hợp ngày đầu và cuối năm:
 * Nếu ngày đầu năm thì ngày hôm qua là ngày 31/12 của năm cũ
 * Nếu ngày cuối năm thì ngày mai sẽ là 1/1 của năm mới
 * Đầu ra:Ngày tháng năm của ngày tiếp theo;Ngày tháng năm của ngày trước đó
 */
document.getElementById("btnYesterday").onclick = function () {
  var day = Number(document.getElementById("day").value);
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  var nhuan = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  if (day == 1 && (month == 5 || month == 7 || month == 10 || month == 12)) {
    day = 30;
    month -= 1;
  } else if (
    day == 1 &&
    (month == 2 ||
      month == 4 ||
      month == 6 ||
      month == 8 ||
      month == 9 ||
      month == 11)
  ) {
    day = 31;
    month -= 1;
  } else if (day == 1 && month == 1) {
    day = 31;
    month = 12;
    year -= 1;
  } else if (day == 1 && month == 3 && nhuan) {
    day = 29;
    month = 2;
  } else if (day == 1 && month == 3) {
    day = 28;
    month = 2;
  } else {
    day -= 1;
  }
  result1 = day + "/" + month + "/" + year;
  document.getElementById("infoDate").innerHTML = result1;
};
document.getElementById("btnTomorrow").onclick = function () {
  var day = Number(document.getElementById("day").value);
  var month = Number(document.getElementById("month").value);
  var year = Number(document.getElementById("year").value);
  var nhuan = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  if (
    day == 31 &&
    (month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10)
  ) {
    day = 1;
    month += 1;
  } else if (
    day == 30 &&
    (month == 4 || month == 6 || month == 9 || month == 11)
  ) {
    day = 1;
    month += 1;
  } else if (day == 31 && month == 12) {
    day = 1;
    month = 1;
    year += 1;
  } else if (day == 29 && month == 2 && nhuan) {
    day = 1;
    month = 3;
  } else if (day == 28 && month == 2) {
    day = 1;
    month = 3;
  } else {
    day += 1;
  }
  result1 = day + "/" + month + "/" + year;
  document.getElementById("infoDate").innerHTML = result1;
};

/**
 * Bài 2:
 * Đầu vào:Tháng ; năm
 * Xử lý:
 * Tạo biến month2;year2 lấy thông tin user nhập
 * Tạo biến nhuan để xét năm nhuận: nhuan = (year2 % 4 == 0 && year2 % 100 != 0) || year2 % 400 == 0
 * switch case month2
 * tháng 1,3,5,7,8,10,12 sẽ có 31 ngày
 * tháng 4,6,9,11 sẽ có 30 ngày
 * tháng 2, nếu là năm nhuận sẽ có 29 ngày. Ngược lại là 28 ngày
 * Đầu ra: ngày
 */

document.getElementById("btnTinhngay").onclick = function () {
  var month2 = Number(document.getElementById("month2").value);
  var year2 = Number(document.getElementById("year2").value);
  var nhuan = (year2 % 4 == 0 && year2 % 100 != 0) || year2 % 400 == 0;
  switch (month2) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      {
        result2 =
          "<p> Tháng " + month2 + " năm " + year2 + " Có 31 ngày" + "</p>";
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      {
        result2 =
          "<p> Tháng " + month2 + " năm " + year2 + " Có 30 ngày" + "</p>";
      }
      break;
    default:
      break;
  }
  if (month2 == 2 && nhuan) {
    result2 = "<p> Tháng " + month2 + " năm " + year2 + " Có 29 ngày" + "</p>";
  } else if (month2 == 2) {
    result2 = "<p> Tháng " + month2 + " năm " + year2 + " Có 28 ngày" + "</p>";
  }
  document.getElementById("infoTinhngay").innerHTML = result2;
};

/**
 * Bài 3:
 * Đầu vào: số nguyên 3 chữ số
 *Xử lý: Tạo biến number3: lấy thông tin từ user
tạo biến hàng trăm: hundred = Math.floor(number3 / 100)
Tạo biến hàng chục: ten = Math.floor((number3 % 100) / 10)
Tạo biến hàng đơn vị: unit = number3 % 10
switch case thể hiện cách đọc
tạo biến result3: kết quả hundred + ten + unit
 * Đầu ra: Cách đọc
 */

document.getElementById("btnDocso").onclick = function () {
  var number3 = Number(document.getElementById("number3digit").value);
  var hundred = Math.floor(number3 / 100);
  var ten = Math.floor((number3 % 100) / 10);
  var unit = number3 % 10;

  switch (hundred) {
    case 1:
      {
        h = "Một trăm";
      }
      break;
    case 2:
      {
        h = "Hai trăm";
      }
      break;
    case 3:
      {
        h = "Ba trăm";
      }
      break;
    case 4:
      {
        h = "Bốn trăm";
      }
      break;
    case 5:
      {
        h = "Năm trăm";
      }
      break;
    case 6:
      {
        h = "Sáu trăm";
      }
      break;
    case 7:
      {
        h = "Bảy trăm";
      }
      break;
    case 8:
      {
        h = "Tám trăm";
      }
      break;
    case 9:
      {
        h = "Chín trăm";
      }
      break;
    default:
      break;
  }
  switch (ten) {
    case 0:
      {
        t = "";
        if (unit != 0) {
          t = " lẻ ";
        }
      }
      break;
    case 1:
      {
        t = " mười ";
      }
      break;
    case 2:
      {
        t = " hai mươi ";
      }
      break;
    case 3:
      {
        t = " ba mươi ";
      }
      break;
    case 4:
      {
        t = " bốn mươi ";
      }
      break;
    case 5:
      {
        t = " năm mươi ";
      }
      break;
    case 6:
      {
        t = " sáu mươi ";
      }
      break;
    case 7:
      {
        t = " bảy mươi ";
      }
      break;
    case 8:
      {
        t = " tám mươi ";
      }
      break;
    case 9:
      {
        t = " chín mươi ";
      }
      break;
    default:
      break;
  }
  switch (unit) {
    case 0:
      {
        u = "";
      }
      break;
    case 1:
      u = "một";
      break;
    case 2:
      u = "hai";
      break;
    case 3:
      u = "ba";
      break;
    case 4:
      u = "bốn";
      break;
    case 5:
      u = "năm";
      break;
    case 6:
      u = "sáu";
      break;
    case 7:
      u = "bảy";
      break;
    case 8:
      u = "tám";
      break;
    case 9:
      u = "chín";
      break;
    default:
      break;
  }
  var result3 = h + t + u;
  document.getElementById("infoDocso").innerHTML = result3;
};

/**
 * Bài 4:
 * Đầu vào: tọa độ; tên 3 sinh viên;tọa độ trường
 * Tạo biến xtruong;ytruong: tọa độ trường lấy thông tin từ user
 * tạo biến lấy thông tin từ user nhập vào của 3 sinh viên
 * Tạo biến d1 d2 d3 : khoảng cách từ trường đến nhà sinh viên áp dụng công thức tính đoạn thẳng theo tọa độ
 * Tạo biến max làm biến tạm để xác định khoảng cách của sinh viên nào là xa nhất
 * dùng if else if else để thông báo tên sinh viên
 * Tạo biến result4 in kết quả
 * Đầu ra: Tên sinh viên xa trường nhất
 */

document.getElementById("btnToado").onclick = function () {
  var xtruong = Number(document.getElementById("x4").value);
  var ytruong = Number(document.getElementById("y4").value);

  var ten1 = document.getElementById("ten1").value;
  var ten2 = document.getElementById("ten2").value;
  var ten3 = document.getElementById("ten3").value;

  var x1 = Number(document.getElementById("x1").value);
  var y1 = Number(document.getElementById("y1").value);

  var x2 = Number(document.getElementById("x2").value);
  var y2 = Number(document.getElementById("y2").value);

  var x3 = Number(document.getElementById("x3").value);
  var y3 = Number(document.getElementById("y3").value);

  var d1 = Math.sqrt(
    (xtruong - x1) * (xtruong - x1) + (ytruong - y1) * (ytruong - y1)
  );
  var d2 = Math.sqrt(
    (xtruong - x2) * (xtruong - x2) + (ytruong - y2) * (ytruong - y2)
  );
  var d3 = Math.sqrt(
    (xtruong - x3) * (xtruong - x3) + (ytruong - y3) * (ytruong - y3)
  );

  var max;
  if (d1 >= d2 && d1 >= d3) {
    max = d1;
  } else if (d2 >= d1 && d2 >= d3) {
    max = d2;
  } else {
    max = d3;
  }
  var result4 = "";

  if (max == d1) {
    result4 = "<p>Sinh viên xa trường nhất: " + ten1 + " </p>";
  } else if (max == d2) {
    result4 = "<p>Sinh viên xa trường nhất: " + ten2 + " </p>";
  } else {
    result4 = "<p>Sinh viên xa trường nhất: " + ten3 + " </p>";
  }
  document.getElementById("infoToado").innerHTML = result4;
};
