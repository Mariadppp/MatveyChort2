document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();
});

let t1Btn = document.querySelector("[data-js='t1-btn']")
let t1Hex = document.querySelector("[data-js='t1-hex']")

let t2Inp = document.querySelector("[data-js='t2-input']")
let t2Count = document.querySelector("[data-js='t2-count']")

let t3List = document.querySelector("[data-js='t3-list']")
let t3Input = document.querySelector("[data-js='t3-input']")
let t3Add = document.querySelector("[data-js='t3-add']")

let count = 0
let t4Minus = document.querySelector("[data-js='t4-minus']")
let t4Plus = document.querySelector("[data-js='t4-plus']")
let t4Out = document.querySelector("[data-js='t4-out']")
let t4Reset = document.querySelector("[data-js='t4-reset']")

let t5Open = document.querySelector("[data-js='t5-open']")
let t5Close = document.querySelector("[data-js='t5-close']")
let t5Modal = document.querySelector("[data-js='t5-modal']")
let t5Back = document.querySelector("[data-js='t5-backdrop']")

let t6btnA = document.querySelector("[data-tab='a']")
let t6btnB = document.querySelector("[data-tab='b']")
let t6btnC = document.querySelector("[data-tab='c']")
let t6paneA = document.querySelector("[data-pane='a']")
let t6paneB = document.querySelector("[data-pane='b']")
let t6paneC = document.querySelector("[data-pane='c']")

let t7Input = document.querySelector("[data-js='t7-input']")
let t7Run = document.querySelector("[data-js='t7-run']")
let t7Out = document.querySelector("[data-js='t7-out']")

let t8A = document.querySelector("[data-js='t8-a']")
let t8B = document.querySelector("[data-js='t8-b']")
let t8Add = document.querySelector("[data-js='t8-add']")
let t8Mul = document.querySelector("[data-js='t8-mul']")
let t8Out = document.querySelector("[data-js='t8-out']")

let t9Btn = document.querySelector("[data-js='t9-toggle']")
let t9Text = document.querySelector("[data-js='t9-text']")

let t10Range = document.querySelector("[data-js='t10-range']")
let t10Out  = document.querySelector("[data-js='t10-out']")
let t10Box = document.querySelector("[data-js='t10-box']")

let t11Seconds = document.querySelector("[data-js='t11-seconds")
let t11Start = document.querySelector("[data-js='t11-start']")
let t11Stop = document.querySelector("[data-js='t11-stop']")
let t11Out = document.querySelector("[data-js='t11-out']")

let t12Plus = document.querySelector("[data-js='t12-plus']")
let t12Label = document.querySelector("[data-js='t12-label']")
let t12Bar = document.querySelector("[data-js='t12-bar']")

let t13Input = document.querySelector("[data-js='t13-input']")
let t13Out = document.querySelector("[data-js='t13-out']")

let t14Btn = document.querySelector("[data-js='t14-next']")
let t14Out = document.querySelector("[data-js='t14-out']")

let t15Area = document.querySelector("[data-js='t15-area']")
let t15Coords = document.querySelector("[data-js='t15-coords']")
let t15Item = document.querySelector("[data-js='t15-item']")

let t16Animate = document.querySelector("[data-js='t16-animate']")
let t16Box = document.querySelector("[data-js='t16-box']")

let quotes = [
    "удали холлоу найт",
    "Мне нравится думать, что он флексит на твоей голове, отопучто там подушка похожа на твою шапку",
    "Хорошо что не Политех заканчивал",
    "Эээ унь пунь ээээ(пародия)",
    "чорт",
    "Хочу орешки биг боб. Я принесу на матвея.",
    "Чем дальше в лес скибиди доп ЕС ес",
    "газ",
    "дате орео",
    "тихо",
    "Надеюсь он упомянуть меня в своем новом прохождении фнаф 67",
    "Я хз почему не работает",
    "Бля когда я уже в валорант пойду"
];

t14Btn.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  t14Out.textContent = quotes[randomIndex];
})

t1Btn.addEventListener("click", () => {
  let r;
  let g;
  let b;
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  t1Btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

t1Hex.textContent = rgbToHex(r, g, b);
});
t2Inp.addEventListener("input", () => {
  var value = t2Inp.value;
  t2Count.textContent = `${value.length}`;
});

t3Add.addEventListener("click", () => {
  if(t3Input.value == "")
    return
  let product = document.createElement("li")
  product.textContent = t3Input.value
  t3List.appendChild(product)
  t3Input.value = ""
})

t4Minus.addEventListener("click", () => {
  count--;
  t4Out.textContent = count;
});
t4Plus.addEventListener("click", () => {
  count++;
  t4Out.textContent = count;
});
t4Reset.addEventListener("click", () => {
  count = 0;
  t4Out.textContent = 0;
});
t5Open.addEventListener("click", () => {
  t5Modal.style.display = 'block';
});
t5Close.addEventListener("click", () => {
  t5Modal.style.display = 'none';
});
t5Back.addEventListener("click", () => {
  t5Modal.style.display = 'none';
});
onkeydown = (event) => {
  if(event.key === 'Escape') {
    t5Modal.style.display = 'none';
  }
};

let active = "a"
function isActive () {
  if(active == "a") {
    t6btnA.classList.toggle("is-active")
    t6paneA.classList.toggle("is-active")
  }
  if(active == "b") {
    t6btnB.classList.toggle("is-active")
    t6paneB.classList.toggle("is-active")
  }
  if(active == "c") {
    t6btnC.classList.toggle("is-active")
    t6paneC.classList.toggle("is-active")
  }
}
t6btnA.addEventListener("click", () => {
  isActive()
  t6btnA.classList.toggle("is-active")
  t6paneA.classList.toggle("is-active")
  active = "a"
})
t6btnB.addEventListener("click", () => {
  isActive()
  t6btnB.classList.toggle("is-active")
  t6paneB.classList.toggle("is-active")
  active = "b"
})
t6btnC.addEventListener("click", () => {
  isActive()
  t6btnC.classList.toggle("is-active")
  t6paneC.classList.toggle("is-active")
  active = "c"
})

t7Run.addEventListener("click", () => {
  t7Out.value = t7Input.value.split("").reverse().join("")
})

function Add () {
  return parseFloat(t8A.value) + parseFloat(t8B.value);
}
function Mul () {
  return parseFloat(t8A.value) * parseFloat(t8B.value);
}
t8Add.addEventListener("click", () => {
  t8Out.textContent = Add();
})
t8Mul.addEventListener("click", () => {
  t8Out.textContent = Mul();
})

let win = "open"
t9Btn.addEventListener("click", () => {
  if(win == "open") {
    t9Text.style.display = 'none';
    t9Btn.textContent = "Показать";
    win = "close"
  } else {
    t9Text.style.display = '';
    t9Btn.textContent = "Скрыть";
    win = "open"
  }
})

t10Range.addEventListener("input", () => {
  t10Box.style.width = `${t10Range.value}px`
  t10Box.style.height = `${t10Range.value}px`
  t10Out.textContent = `${t10Range.value}px`
})

let time = 0
t11Start.addEventListener("click", () => {
  time = t11Seconds.value
  const timer = setInterval(() => {
    time--;
    t11Out.textContent = time;
    if(time <= 0) {
      t11Out.value = 0
      clearInterval(timer)
    }
  }, 1000)
})
t11Stop.addEventListener("click", () => {
  time = 0
})

let bar = 0
t12Plus.addEventListener("click", () => {
  bar = Math.min(bar + 10, 100)
  t12Bar.style.width = `${bar}%`
  t12Label.textContent = `${bar}%`
})

t13Input.addEventListener("keydown", (e) => {
  if (e.key === 'Escape'){
    t13Input.blur()
  }
})

function handleKeyDown(e) {
  const isCtrl = e.ctrlKey || e.metaKey;
  if (!isCtrl) return;
  e.preventDefault();
  let key = e.key.toLowerCase();
  if (key === 'k' || key === 'л') {
    e.preventDefault();
    if (e.shiftKey) {
      t13Input.value = ''
      t13Out.textContent = 'последняя комбинация: Ctrl+Shift+K' }
      else {
        t13Input.focus()
        t13Input.textContent = '(Ctrl+K)'
        t13Out.textContent = 'последняя комбинация: Ctrl+K'
      }
  }
}
document.addEventListener('keydown', handleKeyDown);

let down
let t15X
let t15Y
t15Item.addEventListener("mousedown", (e) => {
  let itemRect = t15Item.getBoundingClientRect()
  down = true
  t15X = e.clientX - itemRect.left
  t15Y = e.clientY - itemRect.top
})

document.addEventListener("mousemove", (e) => {
  let itemRect = t15Item.getBoundingClientRect()
  if(!down) return
  let areaRect = t15Area.getBoundingClientRect()
  let x = Math.min(Math.max(e.clientX - areaRect.left - t15X, 0), areaRect.width - itemRect.width);
  let y = Math.min(Math.max(e.clientY - areaRect.top  - t15Y, 0), areaRect.height - itemRect.height);
  t15Coords.textContent = `x: ${x}, y: ${y}`;
  t15Item.style.left = x + 'px';
  t15Item.style.top  = y + 'px';
})
document.addEventListener('mouseup', () => {
  down = false;
})

t16Animate.addEventListener("click", () => {
  t16Box.classList.toggle("is-animate")
})

let t17Area = document.querySelector("[data-js='t17-area']")

let t18Area = document.querySelector("[data-js='t18-area']")

let t19Area = document.querySelector("[data-js='t19-area']")

let t20Area = document.querySelector("[data-js='t20-area']")
let t20Score = document.querySelector("[data-js='t20-score']")
let score20 = 0

let t21Score = document.querySelector("[data-js='t21-score']")
let t21Lives = document.querySelector("[data-js='t21-lives']")
let t21Area = document.querySelector("[data-js='t21-area']")
let t21Restart = document.querySelector("[data-js='t21-restart']")
let t21GameOver = document.querySelector("[data-js='t21-game-over']")

function CreateDiv () {
  let x = Math.floor(Math.random() * 660)
  let y = Math.floor(Math.random() * 220)
  let div = document.createElement("div")
  div.style.position = 'absolute'
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.background = '#111'
  div.style.backgroundImage = 'url(assets/img.jpg)'
  div.style.backgroundSize = 'cover'
  div.style.left = `${x}px`
  div.style.bottom = `${y}px`
  t17Area.append(div)
}
setInterval(CreateDiv, 1000)

setInterval(CreateDiv18, 2000)
function CreateDiv18 () {
  let x = t18Area.clientWidth
  let newDiv18 = document.createElement("div")
  newDiv18.style.position = 'absolute'
  newDiv18.style.width = '140px'
  newDiv18.style.height = '120px'
  newDiv18.style.background = '#111'
  newDiv18.style.backgroundImage = 'url(assets/img2.jpg)'
  newDiv18.style.backgroundSize = 'cover'
  newDiv18.style.left = `${x}px`
  newDiv18.style.bottom = '100px'
  t18Area.append(newDiv18)
  requestAnimationFrame(() => animateDiv(newDiv18))
}
function animateDiv(newDiv18) {
    let currentLeft = parseInt(newDiv18.style.left);
    let nextLeft = currentLeft - 1;
    newDiv18.style.left = `${nextLeft}px`;
    if (nextLeft + newDiv18.offsetWidth <= 0) {
      newDiv18.remove();
      return;
    }

    requestAnimationFrame(() => animateDiv(newDiv18));
  }

  setInterval(createDivAndMove, 1000);

  function createDivAndMove() {
    let newDiv19 = document.createElement("div");
    newDiv19.className = "box";
    newDiv19.style.position = 'absolute'
    newDiv19.style.width = '120px'
    newDiv19.style.height = '100px'
    newDiv19.style.background = '#111'
    newDiv19.style.backgroundImage = 'url(assets/img3.jpg)'
    newDiv19.style.backgroundSize = 'cover'
    t19Area.append(newDiv19);
    newDiv19.style.position = "absolute";
    let randomHeight = Math.floor(Math.random()*(t19Area.clientHeight - 100));
    newDiv19.style.top = `${randomHeight}px`;
    newDiv19.style.left = `${t19Area.clientWidth}px`;
    requestAnimationFrame(() => animateDiv(newDiv19));
  }
  function animateDiv(newDiv19) {
    let currentLeft = parseInt(newDiv19.style.left);
    let nextLeft = currentLeft - 1;
    newDiv19.style.left = `${nextLeft}px`;
    if (nextLeft + newDiv19.offsetWidth <= 0) {
      newDiv19.remove();
      return;
    }

    requestAnimationFrame(() => animateDiv(newDiv19));
  }

setInterval(CreateDiv20, 500)

function CreateDiv20 () {
  let x = Math.floor(Math.random() * 660)
  let y = Math.floor(Math.random() * 220)
  let newDiv20 = document.createElement("div20")
  newDiv20.style.position = 'absolute'
  newDiv20.style.width = '100px'
  newDiv20.style.height = '100px'
  newDiv20.style.background = '#111'
  newDiv20.style.backgroundImage = 'url(assets/img4.jpg)'
  newDiv20.style.backgroundSize = 'cover'
  newDiv20.style.left = `${x}px`
  newDiv20.style.bottom = `${y}px`
  t20Area.append(newDiv20)
  newDiv20.addEventListener("click", () => {
    newDiv20.remove()
    score20++
    t20Score.textContent = score20
    if(score20 == 67) {
      let Img = document.createElement("div")
      Img.style.position = 'absolute'
      Img.style.width = '400px'
      Img.style.height = '400px'
      Img.style.backgroundImage = ('url(assets/img5.jpg')
      Img.style.backgroundSize = 'cover'
      Img.style.left = `200px`
      Img.style.bottom = `0`
      t20Area.append(Img)
    }
  })
}


let lives = 3;
let score = 0;
let gameInterval;
let gameActive = true;

function updateUI() {
  t21Score.textContent = score;
  t21Lives.textContent = lives;
}

gameInterval = setInterval(createDivAndMove1, 500);

function createDivAndMove1() {
  if (!gameActive || lives <= 0) return;

  let newDiv21 = document.createElement("div");
  newDiv21.className = "box";
  newDiv21.style.position = 'absolute';
  newDiv21.style.width = '120px';
  newDiv21.style.height = '120px';
  newDiv21.style.backgroundImage = 'url(assets/img6.jpg)';
  newDiv21.style.backgroundSize = 'cover';
  t21Area.append(newDiv21);

  newDiv21.addEventListener("click", () => {
  newDiv21.remove()
    score++
    updateUI()
  })
  
  let randomHeight = Math.floor(Math.random() * (t21Area.clientHeight - 100));
  newDiv21.style.top = `${randomHeight}px`;
  newDiv21.style.left = `${t21Area.clientWidth}px`;

  requestAnimationFrame(() => animateDiv1(newDiv21));
}

function animateDiv1(newDiv21) {
  if (!gameActive || lives <= 0) {
    return;
  }
  if (!document.body.contains(newDiv21)) {
    return;
  }
  let currentLeft = parseInt(newDiv21.style.left);
  let nextLeft = currentLeft - 3;
  newDiv21.style.left = `${nextLeft}px`;

  if (nextLeft + newDiv21.offsetWidth <= 0) {
    newDiv21.remove();
    lives -= 1;
    console.log(lives);
    updateUI();

    if (lives === 0) {
      gameActive = false;
      clearInterval(gameInterval);
      t21GameOver.style.display = 'block';
      t21Restart.style.display = 'block'
    }
    return;
  }

  requestAnimationFrame(() => animateDiv1(newDiv21));
}

function restartGame() {
  lives = 3;
  score = 0;
  gameActive = true;
  
  updateUI();

  document.querySelectorAll('.box').forEach(box => box.remove());
  
  t21GameOver.style.display = 'none';
  
  if (gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(createDivAndMove1, 1300);
}
t21Restart.addEventListener('click', restartGame);
