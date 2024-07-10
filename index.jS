function toggleContent(id) {
  var content = document.getElementById(id);
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
function tagID(id) {
  return document.getElementById(id);
}
//.................................................................................................................................................//
var arrNumber = [];

document.getElementById("addNumber").onclick = function () {
  var inputNumber = parseFloat(document.getElementById("addInput").value);

  // Kiểm tra xem giá trị nhập vào có phải là số hợp lệ hay không
  if (isNaN(inputNumber)) {
    alert("Vui lòng nhập một số hợp lệ!");
    return;
  }
  // Thêm số vào mảng
  arrNumber.push(inputNumber);
  // Hiển thị kết quả
  document.getElementById("result").innerHTML = arrNumber.join(", ");
  // Xóa giá trị trong input
  document.getElementById("addInput").value = "";
  console.log(arrNumber);
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// Bài 1 : tổng các số dương trong mảng
document.getElementById("sumPositiveNumber").onclick = function () {
  // input lấy giá trị từ mảng
  // output trả về tổng số dương trong mảng
  // process xử lý để các phần tử trong mảng lớn hơn 0 rồi mới cộng
  var sum = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      sum = sum + arrNumber[index];
    }
  }
  document.getElementById(
    "result1"
  ).innerHTML = `kết quả tổng số dương là ${sum}`;
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// bài 2 : đếm số dương
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

document.getElementById("coutPositiveNumber").onclick = function () {
  // input lấy giá trị từ mảng
  // output trả về các số dương
  // process xử lý để các phần tử trong mảng được đếm
  var count = 0;
  for (var index1 = 0; index1 < arrNumber.length; index1++) {
    if (arrNumber[index1] > 0) {
      count++;
    }
  }
  document.getElementById(
    "result2"
  ).innerHTML = `kết quả số dương là  ${count}`;
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// bài 3 tìm số nhất nhất trong bảng
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

document.getElementById("minNumberrrrrrr").onclick = function () {
  // input lấy giá trị từ mảng
  // tìm số nhỏ nhất trong mảng
  // process xử lý để các phần tử trong mảng được đếm
  var minNumber = Math.min(...arrNumber);
  document.getElementById(
    "result3"
  ).innerHTML = `kết quả số nhỏ nhất là  ${minNumber}`;
};
/*
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
bài 4 tìm số dương nhỏ nhất */
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
minPositiveNumber;
document.getElementById("minPositiveNumber").onclick = function () {
  // input lấy giá trị từ mảng
  // output trả về số dương nhỏ nhất
  // process xử lý để các phần tử trong mảng được đếm
  var minPositiveNumber = Number.MAX_SAFE_INTEGER;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0 && minPositiveNumber > arrNumber[index]) {
      minPositiveNumber = arrNumber[index];
    }
  }
  if (minPositiveNumber === Number.MAX_SAFE_INTEGER) {
    document.getElementById("result4").innerHTML =
      "Không có số dương trong mảng.";
  } else
    document.getElementById(
      "result4"
    ).innerHTML = `Số dương nhỏ nhất là ${minPositiveNumber}`;
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// bài 5 : tìm số chẵn cuối cùng
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
document.getElementById("findLastEven").onclick = function () {
  // input lấy giá trị từ mảng
  // output trả về số dương nhỏ nhất
  // process xử lý để các phần tử trong mảng được đếm
  var findLastEven = -1;
  for (var i = arrNumber.length - 1; i >= 0; i--) {
    if (arrNumber[i] % 2 === 0) {
      findLastEven = arrNumber[i];
      break;
    }
  }
  document.getElementById(
    "result5"
  ).innerHTML = `Số chẵn cuối cùng là  ${arrNumber[i]}`;
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// bài 6 : đổi chỗ
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
changeLocation;
location1;
document.getElementById("changeLocation").onclick = function () {
  var location1 = Number(document.getElementById("location1").value);
  var location2 = Number(document.getElementById("location2").value);

  [arrNumber[location1], arrNumber[location2]] = [
    arrNumber[location2],
    arrNumber[location1],
  ];

  document.getElementById(
    "result6"
  ).innerHTML = `mảng sau khi đổi chỗ ${arrNumber}`;
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// bài 7 : đổi chỗ theo thứ tự tăng dần 
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
document.getElementById('fromMinToMax').onclick = function(){
  var n =arrNumber.length;
  
  for(var i = 0; i < n-1 ; i++){
    for(var j = 0 ; j <n-i-1; j++ ){
      if(arrNumber[j] > arrNumber[j+1])
        // hoán đổi vị trí phần tử 
      [arrNumber[j], arrNumber[j + 1]] = [arrNumber[j + 1], arrNumber[j]];
    }
  }
  document.getElementById(
    "result7"
  ).innerHTML = `mảng sau khi đổi chỗ ${arrNumber}`;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// bài 8 :tìm số nguyên tố đầu tiên
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById('findPrimeNumber').onclick = function(){
  // for(var index = 0; index < arrNumber.length ; index ++){

  //   if(isNaN(arrNumber[index])||arrNumber[index]<2 || arrNumber[index]% Math.sqrt(arrNumber[index]===0)){
  //     alert(`đây không phải số nguyên tố `)


  //   }else {
  //     console.log(`${arrNumber[index]}`);
  //     break;

  //   }
  // }
  // document.getElementById(
  //   "result8"
  // ).innerHTML = `số nguyên tố là ${arrNumber[index]}`;
  //..................................................................................................



  //................................................................//
  
  var firstPrime = null; // Biến lưu số nguyên tố đầu tiên, ban đầu là null

  // Duyệt qua từng phần tử trong mảng arrNumber
  for (var index = 1; index < arrNumber.length; index++) {
    var number = arrNumber[index];

    // Kiểm tra số nguyên tố
    if (isNaN(number) || number < 2 || isDivisibleBySqrt(number)) {
      // Nếu không phải số, nhỏ hơn 2, hoặc không phải số nguyên tố
      console.log(`Phần tử tại vị trí ${index} không phải là số nguyên tố.`);
    } else {
      // Nếu là số nguyên tố
      firstPrime = number;
      console.log(`Số nguyên tố đầu tiên trong mảng là: ${firstPrime}`);
      break; // Dừng vòng lặp sau khi tìm thấy số nguyên tố đầu tiên
    }
  }

  // Cập nhật kết quả lên HTML
  document.getElementById("result8").innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${firstPrime}`;
}

// Hàm kiểm tra tính chia hết cho căn bậc hai
function isDivisibleBySqrt(number) {
  var sqrtNumber = Math.sqrt(number);
  return number % sqrtNumber === 0;
}


