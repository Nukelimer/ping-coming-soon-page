const warningText = document.querySelector('.warning-text');
const approvedText = document.querySelector('.approved-text');
const submitBtn = document.querySelector('.btn');
const textField = document.querySelector('#input');



submitBtn.addEventListener('click', () => {
  if ( textField.value.includes('.com') || textField.value.includes('@')) {
    approvedText.style.display = 'inline-block';
    textField.style.border = '1px solid green';
      warningText.style.display = '';
    
  } else {
    warningText.style.display = 'block';
    textField.style.border = '1px solid red';
      approvedText.style.display = '';
    }
    
});
