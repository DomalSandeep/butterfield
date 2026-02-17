// Wait for DOM to load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Initialize Chart
    const ctx = document.getElementById('donutChart');
    
    if (ctx) {
        const donutChart = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Savings', 'Investments', 'Chequing'],
                datasets: [{
                    data: [44, 32, 24],
                    backgroundColor: [
                        '#1a3a52',  // Dark blue
                        '#6b9bc3',  // Light blue
                        '#2d77b6'   // Blue
                    ],
                    borderWidth: 0,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            }
        });
    } else {
        console.error('Canvas element not found!');
    }
});