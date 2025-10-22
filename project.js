const $ = document

const darkLight = $.querySelector('.darklight')


function percentageAnimation () {
    $.querySelectorAll('.percentage').forEach(percentage => {
        let target = +percentage.getAttribute('data-target')
        let current = 0
        setInterval(() => {
            if (current >= target) {
                clearInterval(interval)
                current = target
            } else {
                current++
            }
            percentage.textContent = toPersianNumber(current) + '%'
        }, 20)
    })
}

function toPersianNumber (num) {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹'
    return num.toString().replace(/\d/g, d => persianDigits[d])
}


window.addEventListener('load', () => {
    window.theme === 'dark' ? darkLight.classList.replace('fa-moon', 'fa-sun') : darkLight.classList.replace('fa-sun', 'fa-moon')
    $.body.style.overflow = 'auto'
    $.querySelector('.loading').style.display = 'none'
    percentageAnimation()
})

darkLight.addEventListener('click', event => {
    if (event.target.classList.contains('fa-moon')) {
        localStorage.setItem('theme', 'dark')
        event.target.classList.replace('fa-moon', 'fa-sun')
        window.linkElem.href = 'css/dark.css'
    } else {
        localStorage.setItem('theme', 'light')
        event.target.classList.replace('fa-sun', 'fa-moon')
        window.linkElem.href = 'css/light.css'
    }
})