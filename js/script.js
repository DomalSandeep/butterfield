// Wait for DOM to load before running scripts
document.addEventListener('DOMContentLoaded', function () {

    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // For  Chart
    const ctx = document.getElementById('donutChart');

    if (ctx) {
        const donutChart = new Chart(ctx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Investments', 'Savings', 'Chequing'],
                datasets: [{
                    data: [44, 24, 32],
                    backgroundColor: [
                        '#0D233E',  // Dark blue
                        '#2366B4',  // Light blue
                        '#769AC4'   // Blue
                    ],
                    borderWidth: 1,
                    borderRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                cutout: '80%',
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

// For Drop down 

function toggleAccountDropdown(header) {
    const accountRow = header.parentElement;
    const allRows = document.querySelectorAll('.account-row');

    // Close all other dropdowns
    allRows.forEach(row => {
        if (row !== accountRow && row.classList.contains('active')) {
            row.classList.remove('active');
        }
    });

    // Toggle current dropdown
    accountRow.classList.toggle('active');
}


// toggle button 
function toggleFilter(button) {
    const parent = button.parentElement;
    const allButtons = parent.querySelectorAll('.last, .upcoming');

    allButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Add your filter logic here
    if (button.classList.contains('last')) {
        console.log('Show last transactions');
        // filterTransactions('last');
    } else {
        console.log('Show upcoming transactions');
        // filterTransactions('upcoming');
    }
}



// view all 

function toggleTransactions(button) {
    const table = button.closest('.transaction-history-table');
    const isExpanded = table.classList.toggle('expanded');

    button.querySelector('h4').textContent = isExpanded ? 'View Less' : 'View All';
}

//menu 3 dots
function toggleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.menu-dots')) {
        var dropdowns = document.getElementsByClassName("menu-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//admin user visibility 

const urlParam = new URLSearchParams(document.location.search);
const getRole = urlParam.get("user");

const drTopMain = document.querySelector('#approval');

if (drTopMain) {
    if (getRole === "retail") {
        drTopMain.style.display = "block";
    } else {
        drTopMain.style.display = "none";
    }
}



//nav dropdown test
function toggleDropdown(element) {
    // Toggle the 'active' class on the clicked header
    element.classList.toggle('active');

    // Close other dropdowns (Optional: remove if you want multiple open)
    // const allHeaders = document.querySelectorAll('.dashcont');
    // allHeaders.forEach(header => {
    //     if (header !== element) {
    //         header.classList.remove('active');
    //     }
    // });
}


function toggleMain(el) {
    el.classList.toggle('active');
}

function toggleSub(el) {
    el.classList.toggle('active');
    // Close other subs if preferred
}