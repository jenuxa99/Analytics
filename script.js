"use strict";

// Проверка паролей

const formEl = document.querySelector('.reg__inputs');
const passEl = document.querySelector('#pass');
const repeatedPassEl = document.querySelector('#repeat__pass');
const passwordsEl = document.querySelectorAll('.passwords');

formEl.addEventListener('input', () => {
    if (repeatedPassEl.value !== passEl.value) {
        passwordsEl.forEach(element => {
            element.classList.remove('ready__check')
            element.classList.add('error');
        });
    } else {
        passwordsEl.forEach(element => {
            element.classList.remove('error')
            element.classList.add('ready__check');
        });
    };
});

formEl.addEventListener('input', () => {
    passwordsEl.forEach(element => {
        if (!element.value) {
            element.classList.remove('ready__check');
            element.classList.add('error');
        }

    });
});

// Звёздный рейтинг

const ratingFormEl = document.querySelector('.rating');
const starEl = document.querySelectorAll('.rating__ipt');
const labelEl = document.querySelectorAll('.rating__label');

starEl.forEach((radio) => {
    radio.addEventListener('change', () => {
        const checkedNumber = document.querySelector('.rating__ipt:checked').value || undefined;

        starEl.forEach((item) => {
            const currentLabel = item.previousElementSibling;

            item.value <= checkedNumber
                ? currentLabel.classList.add('check')
                : currentLabel.classList.remove('check');
        });
    });
});


labelEl.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        const checkedLabel = document.querySelector('.rating__label:hover').id || undefined;

        labelEl.forEach((item) => {
            item.id <= checkedLabel
                ? item.classList.add('mouseover')
                : item.classList.remove('mouseover');
        });
    });
    
    element.addEventListener('mouseout', (e) => {
        labelEl.forEach((item) => {
        item.classList.remove('mouseover');
        });
    });
});
