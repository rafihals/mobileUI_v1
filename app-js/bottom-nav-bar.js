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





document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('double-doughnut-chart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [15, 25, 35],
        backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb'],
        borderWidth: 0
      }, {
        data: [10, 20, 30],
        backgroundColor: ['#8B0000', '#FF8C00', '#FFD700'],
        borderWidth: 0
      }],
      labels: ['Yellow', 'Red', 'Orange']
    },
    
    
    options: {
      cutoutPercentage: 70,
      responsive: true,
      legend: {
        display: true
      },
      animation: {
        animateRotate: true,
        animateScale: true
      }
    }
  });
});

