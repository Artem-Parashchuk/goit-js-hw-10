import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import errorIcon from '../img/iconError.svg'
import checkIcon from '../img/iconChecked.svg'


const formElem = document.querySelector('.form')
const inputTime = document.querySelector('input[name="delay"]')
const inputFulfill = document.querySelector('input[value="fulfilled"]');
const inputReject = document.querySelector('input[value="rejected"]');


function fulfilledPromise(delay) {
    iziToast.success({
        title: 'OK',
        message: `Fulfilled promise in ${delay}ms`,
        backgroundColor: 'green',
        theme: 'dark',
        iconUrl: checkIcon,
        position: 'topRight',
    })
}

function rejectedPromise(delay) {
    iziToast.error({
        title: 'Error',
        message: ` Rejected promise in ${delay}ms`,
        backgroundColor: 'red',
        theme: 'dark',
        iconUrl: errorIcon,
        position: 'topRight',
    })
}


formElem.addEventListener('submit', event => {
    event.preventDefault()

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(inputFulfill.checked){
                resolve(inputTime.value)
            } else {
                reject(inputTime.value)
            }
        }, inputTime.value)
    })

    promise.then((time) => {
        fulfilledPromise(inputTime.value);
        console.log(`Fulfilled promise in ${time} ms`)
    }).catch((time) => {
        rejectedPromise(inputTime.value);
        console.log( `Rejected promise in ${time} ms`)
    }).finally(() => inputTime.value = '')

})