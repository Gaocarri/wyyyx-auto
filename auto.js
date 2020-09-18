// 排队连点
timer = setInterval(() => {
    wyyouxi.click()
}, 500)
setInterval(() => {
    window.clearInterval(timer)
    timer = setInterval(() => {
        wyyouxi.click()
    }, 500)
}, 10000)

// 早上六点自动排队
function auto() {
    let date = new Date()
    if (date.getHours() === 6) {
        wyyouxi.click()
        window.clearInterval(timeId)
    }
}
let timeId = setInterval(() => {
    auto()
}, 360000)