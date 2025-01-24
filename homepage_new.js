let text_random_quotes = document.getElementById('text_random_quotes');
let mountain_white = document.getElementById('mountain_white');
let mountain_green_l = document.getElementById('mountain_green_l');
let mountain_green_r = document.getElementById('mountain_green_r');
let about_btn = document.getElementById('about_btn');
let bg_about = document.getElementById('bg_about');
let grass_floor = document.getElementById('grass_floor');
let grass_floor_thick = document.getElementById('grass_floor_thick');
let grass_floor_thicker = document.getElementById('grass_floor_thicker');
let status_day_lable = document.getElementById('status_day_lable')

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        text_random_quotes.style.marginTop = value * 1.2 + 'px';
        //mountain_white.style.left = value * -0.5 + 'px';
        mountain_green_l.style.left = value * 0.5 + 'px';
        mountain_green_r.style.left = value * -0.5 + 'px';
        
        if (window.scrollY >= document.querySelector('.home_page').offsetHeight) {
            

        }
    });
});

about_btn.addEventListener('click', function(event) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
