import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconError from '../img/iconError.svg'


const inputElem = document.getElementById('datetime-picker')
const startBtnElem = document.querySelector('[data-start]')
const daysElem = document.querySelector('[data-days]')
const hoursElem = document.querySelector('[data-hours]')
const minutesElem = document.querySelector('[data-minutes]')
const secondsElem = document.querySelector('[data-seconds]')

let userSelectedDate = null;

startBtnElem.setAttribute('disabled', 'true')

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
            startBtnElem.setAttribute('disabled', 'true')

            iziToast.show({
                message: 'Please choose a date in the future',
                backgroundColor: 'red',
                theme: 'dark',
                iconUrl: iconError,
                position: 'topRight',
            })

        } else {
            userSelectedDate = selectedDates[0]
            startBtnElem.removeAttribute('disabled')

        }
    },
};
flatpickr(inputElem, options);

startBtnElem.addEventListener('click', () => {

    startBtnElem.setAttribute('disabled', 'true');


    const timer = setInterval(() => {

        const diff = userSelectedDate - Date.now()
        const { days, hours, minutes, seconds } = convertMs(diff);
        
        daysElem.textContent = addStatZero(days)
        hoursElem.textContent = addStatZero(hours)
        minutesElem.textContent = addStatZero(minutes)
        secondsElem.textContent = addStatZero(seconds)

        if (diff <= 0) {
            clearInterval(timer)
            startBtnElem.removeAttribute('disabled')

            daysElem.textContent = '00';
            hoursElem.textContent = '00';
            minutesElem.textContent = '00';
            secondsElem.textContent = '00';
        }
    }, 1000)
})

function addStatZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num
    } else {
        return num
    }
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}