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
    else {
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
            navigator.vibrate(400)
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            navigator.vibrate(400)
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});

function cals() {
    document.getElementsByClassName('cals')[0].style.opacity = 1;
    document.getElementsByClassName('cals')[0].style.zIndex = 2;
    document.getElementsByClassName('cals')[0].style.animation = 200;
}
function back() {
    document.getElementsByClassName('cals')[0].style.zIndex = -2;
    document.getElementsByClassName('cals')[0].style.animation = 200;
}
function back1() {
    document.getElementsByClassName('cam')[0].style.zIndex = -3;
}
let input = document.getElementById('inputBox');
let buttons = document.getElementsByClassName('num');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == '⌫') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }

    });
});

function cam() {
    document.getElementsByClassName('cam')[0].style.zIndex = 3;
}

// Camera Functionality
const video = document.getElementsByClassName('vid')[0];
const cameraSelect = document.getElementsByClassName('cameraSelect')[0];
const startButton = document.getElementById('startButton');

let stream;

// Function to enumerate video devices
async function getCameras() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');

        // Clear existing options
        cameraSelect.innerHTML = '';

        // Add options for each video device
        videoDevices.forEach((device, index) => {
            const option = document.createElement('option');
            option.value = device.deviceId;
            option.text = device.label || `Camera ${index + 1}`;
            cameraSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error enumerating devices: ', error);
    }
}

// Function to toggle the camera
async function toggleCamera() {
    if (stream) {
        // If stream exists, stop the camera
        stream.getTracks().forEach(track => track.stop());
        video.srcObject = null;
        stream = null;
    } else {
        // If stream does not exist, start the camera
        const selectedDeviceId = cameraSelect.value;
        const constraints = {
            video: {
                deviceId: selectedDeviceId ? { exact: selectedDeviceId } : undefined
            }
        };
        try {
            stream = await navigator.mediaDevices.getUserMedia(constraints);
            video.srcObject = stream;
        } catch (error) {
            console.error('Error accessing the camera: ', error);
        }
    }
}

// Add event listener to the start/stop button
startButton.addEventListener('click', toggleCamera);

// Get the list of cameras when the page loads
getCameras();

let play = document.querySelector('#play');
let previous = document.querySelector('#previous');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let slider = document.querySelector('#duration_slider');
let track_image = document.querySelector('#track_image');
let artist = document.querySelector('#artist');
let auto_play = document.querySelector('#auto');
let shuffleButton = document.querySelector('#shuffle');

let timer;
let autoplay = 0;
let shuffle = false;

let index_no = 0;
let Playing_song = false;

// Create audio element
let track = document.createElement('audio');

// All songs list
let All_song = [
    {
        name: "Populer Weekend",
        path: "./music/1.mp3",
        img: "./img/1.jpg",
        singer: "Weekend"
    },
    {
        name: "Malang Sajna",
        path: "./music/2.mp3",
        img: "./img/2.jpg",
        singer: "Sachet Parampara & Sachet Tandon"
    },
    {
        name: "Alag Aasmaan",
        path: "./music/3.mp3",
        img: "./img/3.jpg",
        singer: "Anuv jain"
    },
    {
        name: "Choo lo",
        path: "./music/4.mp3",
        img: "./img/4.jpg",
        singer: "The Local Train"
    },
    {
        name: "Hass Hass",
        path: "./music/5.mp3",
        img: "./img/5.jpg",
        singer: "Sia X Diljit Dosanjh"
    },
    {
        name: "Shikayat",
        path: "./music/6.mp3",
        img: "./img/6.jpg",
        singer: "AUR"
    }
];

// Load track
function load_track(index_no) {
    clearInterval(timer);
    reset_slider();

    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track_image.style.backgroundImage = `url(${All_song[index_no].img})`;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

    timer = setInterval(range_slider, 1000);
}

load_track(index_no);

// Play song
function playsong() {
    track.play();
    Playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

// Pause song
function pausesong() {
    track.pause();
    Playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}

// Toggle play/pause
function justplay() {
    if (Playing_song) {
        pausesong();
    } else {
        playsong();
    }
}

// Next song
function next_song() {
    if (shuffle) {
        shuffleNextSong();
    } else {
        if (index_no < All_song.length - 1) {
            index_no += 1;
        } else {
            index_no = 0;
        }
        load_track(index_no);
        playsong();
    }
}

// Previous song
function previous_song() {
    if (index_no > 0) {
        index_no -= 1;
    } else {
        index_no = All_song.length - 1;
    }
    load_track(index_no);
    playsong();
}

// Reset slider
function reset_slider() {
    slider.value = 0;
}

// Change duration
function change_duration() {
    let slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

// Update range slider
function range_slider() {
    let position = 0;
    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }

    // Auto play next song
    if (track.ended) {
        play.innerHTML = '<i class="fa fa-play"></i>';
        if (autoplay) {
            index_no += 1;
            load_track(index_no);
            playsong();
        }
    }
}

function autoplay_switch() {
    if (autoplay == 1) {
        autoplay = 0;
        auto_play.style.background = "rgba(255,255,255,0.2)";
    } else {
        autoplay = 1;
        auto_play.style.background = "red";
    }
}

function shuffleNextSong() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * All_song.length);
    } while (newIndex === index_no);
    index_no = newIndex;
    load_track(index_no);
    playsong();
}
function toggleShuffle() {
    shuffle = !shuffle;
    shuffleButton.style.color = shuffle ? "red" : "var(--black-font)";
}
function music() {
    document.getElementsByClassName('music_back')[0].style.zIndex = 3;
}
function back2() {
    document.getElementsByClassName('music_back')[0].style.zIndex = -3;
}

function initMap() {
    // Check if Geolocation is supported
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition, showError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Function to show the position
function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    var mapFrame = document.getElementById("mapFrame");
    var src = `https://www.google.com/maps/embed/v1/directions?
origin=current+location
&destination=current+location
&key=AIzaSyC-5CY9mOCeg5Y3IhPqi_Yd0-DZtWrJl-E`;
    mapFrame.src = src;
}

// Function to handle errors
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

// Initialize map on page load
window.onload = initMap;

function back3() {
    document.getElementsByClassName('map')[0].style.zIndex = -3;
}
function map() {
    document.getElementsByClassName('map')[0].style.zIndex = 3;
}