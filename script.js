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

t16Animate.addEventListener("click", () => {
  t16Box.classList.toggle("is-animate")
})
