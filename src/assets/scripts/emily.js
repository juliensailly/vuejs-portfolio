function emilyUI() {
  if (localStorage.getItem('6p') == 'true') {
    document.querySelector('html').classList.remove('dark')
    document.documentElement.style.setProperty('color-scheme', 'light');
    localStorage.theme = 'light'
    
    document.body.style.filter = 'hue-rotate(112deg)'
    document.querySelectorAll('img').forEach((img) => {
      img.style.filter = 'hue-rotate(-112deg)'
    })
  } else {
    document.body.style.filter = ''
    const inter = setInterval(() => {
      document.querySelectorAll('img').forEach((img) => {
        img.style.filter = ''
      })
    }, 10)
    setTimeout(() => {
      clearInterval(inter)
    }, 250)
  }
}

export default emilyUI
