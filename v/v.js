const k = new URLSearchParams(window.location.search).get('k')
const txt = document.getElementById("txt")
if (k) {
    JsBarcode("#bc", k, {format: "CODE128A"})
    hidetxt()
}

function hidetxt() {
    txt.hidden = true
}

let list = []
let idx = 0

function load() {
    const raw = txt.value
    list = raw.split(/[\n,]/).map((x) => x.trim()).filter((x) => x)

    idx = 0
    show()
    hidetxt()
}

function show() {
    if (list.length === 0) return

    JsBarcode("#bc", list[idx], {format: "CODE128A"})
    // 控制按鈕狀態
    document.getElementById("btnPrev").disabled = idx === 0
    document.getElementById("btnNext").disabled = idx === list.length - 1
}

function prev() {
    if (idx > 0) {
        idx--
        show()
    }
}

function next() {
    if (idx < list.length - 1) {
        idx++
        show()
    }
}