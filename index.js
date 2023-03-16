(function() {
  let calScreen = document.querySelector('.cal_screen');
  let buttons = document.querySelectorAll('.btn');
  let clearBtn = document.querySelector('.clear_btn');
  let equalBtn = document.querySelector('.equal_btn');

  buttons.forEach(function (button) {
    button.addEventListener('click', function(e) {
      let value = e.target.dataset.num;
      calScreen.value += value;
    })
  });

  equalBtn.addEventListener('click', function(e) {
    calScreen.value = calScreen.value.replace(/%/g, "/100*");
    if (calScreen.value === '') {
      calScreen.value = '0';
    } else {
      let answer = eval(calScreen.value);
      calScreen.value = answer;
    }
  })
  clearBtn.addEventListener('click', function(e) {
    calScreen.value = "";
  })
  
})()

function percentage() {
const part = 10;
  const whole = 10;
  const percentage = eval(`$(part)/100*$(whole)`);
}
