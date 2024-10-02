function validate() {
    const pattern = {
     username: /^[a-zA-Z0-9]{3,20}$/,
     email: /^.*@.*\..*$/,
     password: /^\w{5,15}$/,
     "confirm-password": /^\w{5,15}$/,
     companyNumber: /^\d{4}$/  // Компаниен номер: точно 4 цифри
    };
 
    const formEl = document.querySelector('#registerForm');
    const companyEl = document.querySelector('#company');
    const companyInfoEl = document.querySelector('#companyInfo');
    const validEl = document.querySelector('#valid');
 
    // Показване или скриване на полето за компаниен номер
    companyEl.addEventListener('change', (e) => {
       companyInfoEl.style.display = (e.target.checked) ? 'block' : 'none';
    });
 
    // Валидация при submit
    formEl.addEventListener('submit', (e) => {
       e.preventDefault();
       const invalidFields = [];
       
       // Селектиране на всички input елементи, които не са checkbox
       const inputFieldsForValidation = [...e.target.querySelectorAll('input:not([type="checkbox"])')];
 
       inputFieldsForValidation.forEach((fieldEl) => {
          const type = fieldEl.getAttribute('id');
          const passwordEl = e.target.querySelector('#password');
          
          // Прескачане на полето за компаниен номер, ако компания не е избрана
          if (type == 'companyNumber' && companyInfoEl.style.display == 'none') return;
 
          // Валидация на полетата
          if (!pattern[type].test(fieldEl.value)) {
             fieldEl.style.borderColor = 'red';
             invalidFields.push(fieldEl);
          } else {
             fieldEl.style.borderColor = '';
          }
 
          // Валидация на потвърждението на паролата
          if (type == 'confirm-password' && fieldEl.value != passwordEl.value) {
             invalidFields.push(fieldEl);
             invalidFields.push(passwordEl);
             fieldEl.style.borderColor = 'red';
             passwordEl.style.borderColor = 'red';
          }
       });
 
       // Показване на съобщението за валидност
       validEl.style.display = (invalidFields.length == 0) ? 'block' : 'none';
    });
 }
 