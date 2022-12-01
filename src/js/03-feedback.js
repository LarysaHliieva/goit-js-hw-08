import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateForm();

function onFormInput(e) {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

  const text = savedText ? { ...savedText } : {};

  if (e.target.name === 'email') {
    text.email = e.target.value;
  }

  if (e.target.name === 'message') {
    text.message = e.target.value;
  }

  console.log(text);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(text));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
  const savedText = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedText) {
    const { email, message } = savedText;
    refs.input.value = email;
    refs.textarea.value = message;
  }
}
