function cyprienUI() {
  if (localStorage.getItem('6p') == 'true') {
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

export default cyprienUI
