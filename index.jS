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
    if (arrNumber[i] % 2 === 0 && arrNumber[i] >0  ) {
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
  document.getElementById('findPrimeNumber').onclick = function () {
    var firstPrime = null; // Biến lưu số nguyên tố đầu tiên, ban đầu là null
   

    // Duyệt qua từng phần tử trong mảng arrNumber
    for (var index = 0; index < arrNumber.length; index++) {
        var number = arrNumber[index];

        // Kiểm tra số nguyên tố
        if (isPrime(number)) {
            // Nếu là số nguyên tố
            firstPrime = number;
            console.log(`Số nguyên tố đầu tiên trong mảng là: ${firstPrime}`);
            break; // Dừng vòng lặp sau khi tìm thấy số nguyên tố đầu tiên
        } else {
            console.log(`Phần tử tại vị trí ${index} không phải là số nguyên tố.`);
        }
    }

    document.getElementById("result8").innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${firstPrime}`;
}

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// bài 9 :đếm số nguyên tố 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById('countPrime').onclick = function(){
  var count =0; 
  var index = 0; 
  var arr = arrNumber;
  
  while(index < arr.length){
    if(isNaN(arr[index]) ||arr[index] < 2 ||!isPrime(arr[index]) ){
      console.log(`${arr[index]} , không phải là số nguyên tố `);

    }else {
      console.log(`${arr[index]} là số nguyên tố.`);
      count ++;
    }
    index ++;
  }
  document.getElementById("result9").innerHTML = `đếm các số nguyên tố là: ${count}`;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
// bài 10 :so sánh số lượng số âm số dương
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// các bước làm bài 
/*
b1 : truyền mảng vào từng check posi, negati
b2 : lấy số return từ posi, negati
b3 : so sánh  
*/
function checkPositiveNumber(arrNumber) {
  var count = 0;
  for (var index = 0; index < arrNumber.length; index++) {
      if (arrNumber[index] > 0) {
          count++;
      }
  }
  return count;
}

function checkNegativeNumber(arrNumber) {
  var count = 0;
  for (var index = 0; index < arrNumber.length; index++) {
      if (arrNumber[index] < 0) {
          count++;
      }
  }
  return count;
}

document.getElementById('checkNumber1').onclick = function () {
  
  var positiveCount = checkPositiveNumber(arrNumber);
  var negativeCount = checkNegativeNumber(arrNumber);

  if (positiveCount > negativeCount) {
      document.getElementById("result10").innerHTML = `Số dương là: ${positiveCount}, > số âm là: ${negativeCount}`;
  } else if (positiveCount < negativeCount) {
      document.getElementById("result10").innerHTML = `Số dương là: ${positiveCount}, < số âm là: ${negativeCount}`;
  } else if (positiveCount === negativeCount) {
      document.getElementById("result10").innerHTML = `Số dương là: ${positiveCount}, = số âm là: ${negativeCount}`;
  } else {
      document.getElementById("result10").innerHTML = `Số không hợp lệ`;
  }
}

