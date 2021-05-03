let randomNumber = Math.floor(Math.random() * 100) + 1; // Tạo số ngẫu nhiên
const playBtn = document.getElementsByClassName('play-again')[0];
const submitBtn = document.querySelector('.guess-submit'); // Nút bấm "Đoán"
const previousGuess = document.querySelector('.previous-guess');
const field = document.querySelector("input[type='text']");
const comment = document.querySelector('.comment');
var count = 0;

playBtn.disabled = true;

submitBtn.onclick = checkNumber;
playBtn.onclick = reset;

function checkNumber() {
  let guess = Number(field.value);
  // check
  if (guess === randomNumber) {
    submitBtn.disabled = true;
    field.disabled = true;
    playBtn.disabled = false;
    previousGuess.insertAdjacentHTML('beforeend', "<span class='right'>" + guess + '</span>');
    comment.textContent = 'CHÍNH XÁC!';
  } else {
    previousGuess.insertAdjacentHTML('beforeend', "<span class='wrong'>" + guess + '</span>');
    if (guess > randomNumber) {
      comment.innerHTML = 'Số bạn đoán <b>lớn hơn</b> số ngẫu nhiên';
    } else if (guess < randomNumber) {
      comment.innerHTML = 'Số bạn đoán <b>nhỏ hơn</b> số ngẫu nhiên';
    }
  }
  field.value = '';
  count = count + 1;
  if (count == 10) {
    submitBtn.disabled = true;
    field.disabled = true;
    playBtn.disabled = false;
  }
}

function reset() {
  // Mở field & submit; disable reset
  submitBtn.disabled = false;
  field.disabled = false;
  playBtn.disabled = true;

  // Xoá các content
  previousGuess.innerText = '';
  comment.textContent = '';

  field.focus();
  randomNumber = Math.floor(Math.random() * 100) + 1;

  count = 0;
}

console.log(randomNumber);

/* 
1. Tạo số ngẫu nhiên
2. Lấy số lượt chơi từ text trong <span> có id="moves"
3. Thêm event khi bấm nút 'Đoán'
  - Nếu đoán đúng:
    - Disable nút 'Đoán' và trường input
    - Hiện nút 'Chơi lại'
  - Nếu đoán sai: thêm số đoán vào <p> 'Các số đã đoán: '
  - Xoá value của trường input
  - Gọi countMove
4. Khi hết lượt: disable nút 'Đoán' & trường input
5. Nếu người chơi bấm nút 'Chơi lại': gọi hàm reset
*/
