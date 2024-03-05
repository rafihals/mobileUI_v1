const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
new Chart(document.getElementById('pie-chart'), {
    type: 'pie',
    data: {
      labels: ["Motorik Halus", "Motorik Kasar", "Sosialisasi dan Kemandirian", "Bicara dan Bahasa"],
      datasets: [{
        backgroundColor: ["#e63946", "#254BDD", "#ffbe0b", "#1d3557"],
        data: [15, 20, 30, 3]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Tumbuh Kembang Bayi Pie Chart'
      },
      responsive: true
    }
});
