window.onload = function() {

    let n_pages = document.getElementById("pageviews");
    let price = document.getElementById("price");
    let slider = document.getElementById("range-pageviews");
    let toggle = document.getElementById("switch-discount-plan");
    slider.value = 10;
    toggle.checked = false;

    slider.oninput = function() {
        plan(this.value);
    }
    slider.addEventListener("input", function() {
        slider.style.backgroundImage = `linear-gradient(to right, hsl(174, 77%, 80%) ${parseInt(slider.value * 100 / slider.max)}%, hsl(224, 65%, 95%) 1%`;
    });


    toggle.addEventListener("change", function() {
        if (this.checked) {
            document.getElementById("monthly").className = "plan-off";
            document.getElementById("yearly").className = "plan-on";
            document.getElementById("plan").innerHTML = "/year";
            plan(slider.value);

        } else {
            document.getElementById("monthly").className = "plan-on";
            document.getElementById("yearly").className = "plan-off";
            document.getElementById("plan").innerHTML = "/month";
            plan(slider.value);
        }
    });

    function plan(val) {
        let prices = [8, 12, 16, 24, 36];
        if (val >= 0 && val < 50) {
            n_pages.innerHTML = val + "K PAGEVIEWS";
            if (toggle.checked) {
                price.innerHTML = "$" + (prices[0] - (prices[0] * .25)).toFixed(2);
            } else {
                price.innerHTML = "$" + prices[0].toFixed(2);
            }
        } else if (val >= 50 && val < 100) {
            n_pages.innerHTML = val + "K PAGEVIEWS";
            if (toggle.checked) {
                price.innerHTML = "$" + (prices[1] - (prices[1] * .25)).toFixed(2);
            } else {
                price.innerHTML = "$" + prices[1].toFixed(2);
            }
        } else if (val >= 100 && val < 500) {
            n_pages.innerHTML = val + "K PAGEVIEWS";

            if (toggle.checked) {
                price.innerHTML = "$" + (prices[2] - (prices[2] * .25)).toFixed(2);
            } else {
                price.innerHTML = "$" + prices[2].toFixed(2);
            }
        } else if (val >= 500 && val < 1000) {
            n_pages.innerHTML = val + "K PAGEVIEWS";

            if (toggle.checked) {
                price.innerHTML = "$" + (prices[3] - (prices[3] * .25)).toFixed(2);
            } else {
                price.innerHTML = "$" + prices[3].toFixed(2);
            }
        } else if (val >= 1000) {
            n_pages.innerHTML = 1 + "M PAGEVIEWS";

            if (toggle.checked) {
                price.innerHTML = "$" + (prices[4] - (prices[4] * .25)).toFixed(2);
            } else {
                price.innerHTML = "$" + prices[4].toFixed(2);
            }
        }
    }
}