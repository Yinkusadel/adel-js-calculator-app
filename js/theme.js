document.themeForm.addEventListener('change', (e) => {
  const currentRadioButton = e.target.value;
  document.body.className = currentRadioButton;
});
