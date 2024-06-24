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
                const innerBattery = document.getElementsByClassName("inner_battery")[0];

                if (battery.level >= 0.90) {
                    innerBattery.style.background = "#006400";
                    innerBattery.style.fontSize = "clamp(0.4rem, 1.4vh, 0.9rem)";
                    innerBattery.innerText = "..◜ᴗ◝..";
                }
                else if (battery.level >= 0.70) {
                    innerBattery.style.background = "#228B22";
                    innerBattery.style.fontSize = "clamp(0.5rem, 1.5vh, 1rem)";
                    innerBattery.innerText = "(˶ᵔ ᵕ ᵔ˶)";
                }
                else if (battery.level >= 0.70) {
                    innerBattery.style.background = "#2E8B57";
                    innerBattery.style.fontSize = "clamp(0.5rem, 1.5vh, 1rem)";
                    innerBattery.innerText = "•⩊•";
                }
                else if (battery.level >= 0.60) {
                    innerBattery.style.background = "#3CB371";
                    innerBattery.style.fontSize = "clamp(0.5rem, 1.5vh, 1rem)";
                    innerBattery.innerText = "( •⌄• )";
                }
                else if (battery.level >= 0.50) {
                    innerBattery.style.background = "#556B2F";
                    innerBattery.style.fontSize = "clamp(0.5rem, 1.5vh, 1rem)";
                    innerBattery.innerText = "(´･_･`)";
                }
                else if (battery.level >= 0.40) {
                    innerBattery.style.background = "#808000";
                    innerBattery.style.fontSize = "clamp(0.5rem, 1.5vh, 1rem)";
                    innerBattery.innerText = "(⊙_⊙)";
                }
                else if (battery.level >= 0.30) {
                    innerBattery.style.background = "#8B4513";
                    innerBattery.style.fontSize = "clamp(0.5rem, 1.5vh, 1rem)";
                    innerBattery.innerText = "(>﹏<)";
                }
                else if (battery.level >= 0.20) {
                    innerBattery.style.background = "#A0522D";
                    innerBattery.style.fontSize = "clamp(0.75rem, 1.75vh, 1.5rem)";
                    innerBattery.innerText = "ಠಿ‸ಠ";
                }
                else if (battery.level >= 0.10) {
                    innerBattery.style.background = "8B0000";
                    innerBattery.style.fontSize = "clamp(0.5rem, 1.5vh, 1rem)";
                    innerBattery.innerText = "(×_×)";
                }
            }

            // Initial update
            updateBatteryStatus();

            // Update on battery level change
            battery.addEventListener('levelchange', updateBatteryStatus);
        });
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
            navigator.vibrate(1000)
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            navigator.vibrate(1000)
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
    }
    else {
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


const url =
    'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
    'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
    weatherFn('delhi');
});

async function weatherFn(cName) {
    const temp =
        `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

}

function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#temperature').
        html(`${data.main.temp}°C`);
    $('#description').
        text(data.weather[0].description);
    $('#wind-speed').
        html(`Wind Speed: ${data.wind.speed} m/s`);

    $('#weather-info').fadeIn();
}



function weather() {
    document.getElementsByClassName('weather')[0].style.zIndex = 3;
}
function back4() {
    // document.getElementsByClassName('weather')[0].style.animation= 'weather_ani 0.5s';
    document.getElementsByClassName('weather')[0].style.zIndex = -3;
}





document.addEventListener('DOMContentLoaded', () => {
    const boardElement = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    const multiPlayerBtn = document.getElementById('multi-player');
    const singlePlayerBtn = document.getElementById('single-player');
    const difficultyElement = document.getElementById('difficulty');
    const easyBtn = document.getElementById('easy');
    const mediumBtn = document.getElementById('medium');
    const hardBtn = document.getElementById('hard');
    const newGameBtn = document.querySelector("#new-btn");
    const restart = document.querySelector('.restart-btn');
    const ticBack = document.getElementById('ticBack');
    const Return = document.getElementById('back2');
    const msgContainer = document.querySelector(".msg-container");

    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameActive = true;
    let isMultiplayer = false;
    let difficulty = 'easy';

    singlePlayerBtn.classList.remove('hide');
    multiPlayerBtn.classList.remove('hide');
    ticBack.classList.remove('hide');
    Return.classList.add('hide');
    msgContainer.classList.add('hide');

    Return.addEventListener('click', () => {
        multiPlayerBtn.classList.remove('hide');
        singlePlayerBtn.classList.remove('hide');
        ticBack.classList.remove('hide');
        Return.classList.add('hide');
        boardElement.classList.add('hide');
        restart.classList.add('hide');
        difficultyElement.classList.add('hide');
        msgContainer.classList.add('hide');
    });

    multiPlayerBtn.addEventListener('click', () => {
        isMultiplayer = true;
        resetGame();
        boardElement.classList.remove('hide');
        restart.classList.remove('hide');
        multiPlayerBtn.classList.add('hide');
        singlePlayerBtn.classList.add('hide');
        ticBack.classList.add('hide');
        Return.classList.remove('hide');
        msgContainer.classList.add('hide');
        
    });

    singlePlayerBtn.addEventListener('click', () => {
        isMultiplayer = false;
        resetGame();
        difficultyElement.classList.remove('hide');
        multiPlayerBtn.classList.add('hide');
        singlePlayerBtn.classList.add('hide');
        restart.classList.add('hide');
        ticBack.classList.add('hide');
        Return.classList.remove('hide');
    });

    easyBtn.addEventListener('click', () => startGame('easy'));
    mediumBtn.addEventListener('click', () => startGame('medium'));
    hardBtn.addEventListener('click', () => startGame('hard'));

    cells.forEach(cell => {
        cell.addEventListener('click', () => handleCellClick(cell));
    });

    function startGame(selectedDifficulty) {
        difficulty = selectedDifficulty;
        difficultyElement.classList.add('hide');
        boardElement.classList.remove('hide');
        restart.classList.remove('hide');
        ticBack.classList.add('hide');
        Return.classList.remove('hide');
    }

    function handleCellClick(cell) {
        const index = cell.getAttribute('data-index');
        if (board[index] !== '' || !gameActive) {
            return;
        }
        makeMove(index, currentPlayer);
        if (checkWinner(currentPlayer)) {
            msg.innerText = `Winner: ${currentPlayer}`;
            msgContainer.classList.remove("hide");
            gameActive = false;
            return;
        } else if (board.every(cell => cell !== '')) {
            msg.innerText = 'It\'s a draw!';
            msgContainer.classList.remove("hide");
            gameActive = false;
            return;
        }

        if (isMultiplayer) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        } else if (gameActive) {
            currentPlayer = 'O';
            setTimeout(computerMove, 1000);
        }
    }

    function makeMove(index, player) {
        board[index] = player;
        document.querySelector(`.cell[data-index="${index}"]`).textContent = player;
    }

    function computerMove() {
        if (!gameActive) return;
        let index;
        if (difficulty === 'easy') {
            index = getRandomMove();
        } else if (difficulty === 'medium') {
            index = getMediumMove();
        } else {
            index = getHardMove();
        }
        makeMove(index, 'O');
        if (checkWinner('O')) {
            msg.innerText = `Winner: O`;
            msgContainer.classList.remove("hide");
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            msg.innerText = 'It\'s a draw!';
            msgContainer.classList.remove("hide");
            gameActive = false;
        } else {
            currentPlayer = 'X';
        }
    }

    function getRandomMove() {
        const emptyCells = board.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }

    function getMediumMove() {
        const winningMove = findWinningMove('O');
        if (winningMove !== null) return winningMove;
        const blockingMove = findWinningMove('X');
        if (blockingMove !== null) return blockingMove;
        return getRandomMove();
    }

    function getHardMove() {
        return getMediumMove(); // Placeholder for now
    }

    function findWinningMove(player) {
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = player;
                const isWinning = checkWinner(player);
                board[i] = '';
                if (isWinning) return i;
            }
        }
        return null;
    }

    function checkWinner(player) {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === player);
        });
    }

    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        cells.forEach(cell => cell.textContent = '');
        msgContainer.classList.add('hide');
    }

    function newGame() {
        resetGame();
        restart.classList.remove('hide');
    }

    restart.addEventListener("click", newGame);
});


function back5() {
    document.getElementsByClassName('ticTac')[0].style.zIndex = -2;
    document.getElementsByClassName('gamesFolder')[0].style.zIndex = 2;
}

function tic() {
    document.getElementsByClassName('ticTac')[0].style.zIndex = 3;
}

function games() {
    document.getElementsByClassName('gamesFolder')[0].style.zIndex = 3;
}

function back6() {
    document.getElementsByClassName('gamesFolder')[0].style.zIndex = -2;
}


    let stream1 = null;
    let track1 = null;
    let isFlashlightOn = false;

    async function initCamera() {
      try {
        stream1 = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: "environment" } } });
        track1 = stream1.getVideoTracks()[0];
      } catch (err) {
        console.error("Error accessing camera: ", err);
      }
    }

    async function toggleFlashlight() {
      if (!track1) {
        await initCamera();
      }
      if (!track1) {
        alert("Camera access required to control the flashlight.");
        return;
      }

      try {
        isFlashlightOn = !isFlashlightOn;
        await track1.applyConstraints({
          advanced: [{ torch: isFlashlightOn }]
        });
        document.getElementById('flashlightToggle').innerHTML = isFlashlightOn ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#000000" fill="yellow"><path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M14 10C13.3875 10.6432 12.7111 11 12 11C11.2889 11 10.6125 10.6432 10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" stroke="currentColor" stroke-width="1.5" /><path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" stroke="currentColor" stroke-width="1.5" /><path d="M12 15.5V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#000000" fill="none"><path d="M5.14286 14C4.41735 12.8082 4 11.4118 4 9.91886C4 5.54539 7.58172 2 12 2C16.4183 2 20 5.54539 20 9.91886C20 11.4118 19.5827 12.8082 18.8571 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M14 10C13.3875 10.6432 12.7111 11 12 11C11.2889 11 10.6125 10.6432 10 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" /><path d="M7.38287 17.0982C7.291 16.8216 7.24507 16.6833 7.25042 16.5713C7.26174 16.3343 7.41114 16.1262 7.63157 16.0405C7.73579 16 7.88105 16 8.17157 16H15.8284C16.119 16 16.2642 16 16.3684 16.0405C16.5889 16.1262 16.7383 16.3343 16.7496 16.5713C16.7549 16.6833 16.709 16.8216 16.6171 17.0982C16.4473 17.6094 16.3624 17.8651 16.2315 18.072C15.9572 18.5056 15.5272 18.8167 15.0306 18.9408C14.7935 19 14.525 19 13.9881 19H10.0119C9.47495 19 9.2065 19 8.96944 18.9408C8.47283 18.8167 8.04281 18.5056 7.7685 18.072C7.63755 17.8651 7.55266 17.6094 7.38287 17.0982Z" stroke="currentColor" stroke-width="1.5" /><path d="M15 19L14.8707 19.6466C14.7293 20.3537 14.6586 20.7072 14.5001 20.9866C14.2552 21.4185 13.8582 21.7439 13.3866 21.8994C13.0816 22 12.7211 22 12 22C11.2789 22 10.9184 22 10.6134 21.8994C10.1418 21.7439 9.74484 21.4185 9.49987 20.9866C9.34144 20.7072 9.27073 20.3537 9.12932 19.6466L9 19" stroke="currentColor" stroke-width="1.5" /><path d="M12 15.5V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />';
      } catch (err) {
        console.error("Error toggling flashlight: ", err);
        alert("Flashlight control not supported on this device.");
      }
    }

    document.getElementById('flashlightToggle').addEventListener('click', toggleFlashlight);

    // Clean up camera stream on page unload
    window.addEventListener('unload', () => {
      if (track1) {
        track1.stop();
      }
      if (stream1) {
        stream1.getTracks().forEach(t => t.stop());
      }
    });