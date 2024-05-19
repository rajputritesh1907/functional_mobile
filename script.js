function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    // hours = hours % 12;
    // hours = hours ? hours : 12;
    var day = now.toLocaleDateString('en-US', { weekday: 'short' });
    var month = now.toLocaleDateString('en-US', { month: 'numeric' });
    var year = now.toLocaleDateString('en-US', { year: 'numeric' });
    var date = now.getDate();



    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes;
    var minString = minutes;
    var hourString = hours;
    var secString = seconds;
    var dateString = year + '/ ' + month + '/ ' + date + ' ' + day;
    var daysString = date + 246 + ' days';

    document.getElementById('time').textContent = timeString;
    document.getElementById('minutes').textContent = minString;
    document.getElementById('hours').textContent = hourString;
    document.getElementById('seconds').textContent = secString;
    document.getElementById('date').textContent = dateString;
    document.getElementById('days').textContent = daysString;

    if (hours > 5 && hours <= 6) {
        document.getElementsByClassName('box')[0].style.backgroundImage = "url('./img/sunset.jpg')";
        document.getElementById('time').style.boxShadow = 'inset 5px 5px 10px #800004,inset -5px -5px 10px #ae0006';
        document.getElementsByClassName('box')[0].style.boxShadow = '5px 5px 10px #800004,-5px -5px 10px #ae0006';
        document.getElementById('date2').style.color = "#ffff8f";
    }
    else if (hours > 7 && hours <= 11) {
        document.getElementsByClassName('box')[0].style.backgroundImage = "url('./img/8to12.jpg')";
        document.getElementById('time').style.boxShadow = '5px 5px 10px #800004, -5px -5px 10px #ae0006';
    }
    else if (hours > 11 && hours <= 15) {
        document.getElementsByClassName('box')[0].style.backgroundImage = "url('./img/12to16.jpg')";
        document.getElementById('time').style.boxShadow = 'inset 5px 5px 10px #bb692c,inset -5px -5px 10px #fd8f3c';
        document.getElementsByClassName('box')[0].style.boxShadow = '5px 5px 10px #bb692c,-5px -5px 10px #fd8f3c';
    }
    else if (hours > 15 && hours <= 17) {
        document.getElementsByClassName('box')[0].style.backgroundImage = "url('./img/16to18.jpg')";
        document.getElementById('time').style.boxShadow = 'inset 5px 5px 10px #bb692c,inset -5px -5px 10px #fd8f3c';
        document.getElementsByClassName('box')[0].style.boxShadow = '5px 5px 10px #bb692c,-5px -5px 10px #fd8f3c';
    }
    else if (hours > 17 && hours <= 19) {
        document.getElementsByClassName('box')[0].style.backgroundImage = "url('./img/18to20.jpg')";
        document.getElementById('time').style.boxShadow = 'inset 5px 5px 10px #bb692c,inset -5px -5px 10px #fd8f3c';
        document.getElementsByClassName('box')[0].style.boxShadow = '5px 5px 10px #bb692c,-5px -5px 10px #fd8f3c';
    }
    else{
        document.getElementsByClassName('box')[0].style.backgroundImage = "url('./img/else.jpg')";
        document.getElementById('time').style.boxShadow = 'inset 5px 5px 10px #1a3653,inset -5px -5px 10px #244871';
        document.getElementsByClassName('box')[0].style.boxShadow = '5px 5px 10px #1a3653,-5px -5px 10px #244871';
    }

}

setInterval(updateClock, 1000);

var plusString = 0;
function click1() {
    var teaString = plus + 1;
    document.getElementById('add').textContent = teaString;
    console.log(teaString);
}

function increment() {
    let textElement = document.getElementsByClassName("add_tea1")[0];
    let textValue = parseInt(textElement.innerText);
    if (textValue == 8) {
        textElement.innerText = textValue + "/" + "8";
    }
    else {
        textElement.innerText = textValue + 1 + "/" + "8";
    }
}

function decrement() {
    let textElement = document.getElementsByClassName("add_tea1")[0];
    let textValue = parseInt(textElement.innerText);
    if (textValue == 0) {
        textElement.innerText = textValue + "/" + "8";
    }
    else {
        textElement.innerText = textValue - 1 + "/" + "8";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (navigator.getBattery) {
        navigator.getBattery().then(function (battery) {
            function updateBatteryStatus() {
                const batteryPercentage = Math.round(battery.level * 100) + "%";
                document.getElementsByClassName("percentage_battery")[0].innerText = "Charge " + batteryPercentage;
                if (batteryPercentage >= 90) {
                    document.getElementsByClassName("inner_battery")[0].style.background = "#98c1bd";
                    document.getElementsByClassName("inner_battery")[0].style.textContent = "(..◜ᴗ◝..)";
                }
                else if (batteryPercentage >= 80) {
                    document.getElementsByClassName("inner_battery")[0].style.background = "#98A3C1";
                    document.getElementsByClassName("inner_battery")[0].style.Content = "(˶ᵔ ᵕ ᵔ˶)";
                }
                else if (batteryPercentage >= 70) {
                    document.getElementsByClassName("inner_battery")[0].style.background = "#98c1a8";
                    document.getElementsByClassName("inner_battery")[0].style.Content = "•⩊•";
                }
                else if (batteryPercentage >= 60) {
                    document.getElementsByClassName("inner_battery")[0].style.background = "#a1c198";
                    document.getElementsByClassName("inner_battery")[0].style.Content = "( •⌄• )";
                }
                else if (batteryPercentage >= 50) {
                    document.getElementsByClassName("inner_battery")[0].style.background = "b3c198";
                    document.getElementsByClassName("inner_battery")[0].style.Content = "(´･_･`)";
                }
                else if (batteryPercentage >= 40) {
                    document.getElementsByClassName("inner_battery")[0].style.background = "#c0c198";
                    document.getElementsByClassName("inner_battery")[0].style.Content = "(⊙_⊙)";
                }
                else if (batteryPercentage >= 30) {
                    document.getElementsByClassName("inner_battery")[0].style.background = "#c1b598";
                    document.getElementsByClassName("inner_battery")[0].style.Content = "(,,>﹏<,,)";
                }
                else if (batteryPercentage >= 20) {
                    document.getElementsByClassName("inner_battery")[0].style.background = "#c1a998";
                    document.getElementsByClassName("inner_battery")[0].style.Content = "( ˵ •̀ □ •́ ˵ )";
                }
                else if (batteryPercentage >= 10) {
                    document.getElementsByClassName("inner_battery")[0].style.background = "#c19d98";
                    document.getElementsByClassName("inner_battery")[0].style.Content = "☠️";
                }
            }

            // Update battery status on page load
            updateBatteryStatus();

            // Update battery status on battery level change
            battery.addEventListener("levelchange", updateBatteryStatus);
        });
    } else {
        document.getElementsByClassName("percentage_battery")[0];
    }

});
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('checkbox');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggle.checked = true;
        }
    }

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});
