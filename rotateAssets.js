let isRotate = false;

document.addEventListener('keypress', (callback) => {
    if (callback.code === 'KeyB' && callback.ctrlKey && !callback.altKey && !callback.shiftKey && !callback.metaKey) {
        if (isRotate) {
            document.getElementsByTagName('body')[0].style.transform = 'rotate(180deg)'
        } else {
            document.getElementsByTagName('body')[0].style.transform = 'rotate(0deg)'
        };
        isRotate = !isRotate;
    };
})