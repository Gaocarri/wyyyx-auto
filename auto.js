timer = setInterval(() => {
    wyyouxi.click()
}, 500)
setInterval(() => {
    window.clearInterval(timer)
    timer = setInterval(() => {
        wyyouxi.click()
    }, 500)
}, 10000)