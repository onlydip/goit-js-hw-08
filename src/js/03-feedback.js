import throttle from 'lodash.throttle';

const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');
const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateForm();

function onFormSubmit(e) {
  e.preventDefault();

  try {
    if (textareaEl.value === '' || inputEl.value === '') {
      throw new Error('Enter something else');
    }

    console.log(formData);

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  } catch (error) {
    alert(error.message);
  }
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  try {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData && savedData.email) {
      inputEl.value = savedData.email;
      formData.email = savedData.email;
    }

    if (savedData && savedData.message) {
      textareaEl.value = savedData.message;
      formData.message = savedData.message;
    }
  } catch (error) {
    console.error(error);
  }
}

// console.log(populateForm)
//    console.log(formData);