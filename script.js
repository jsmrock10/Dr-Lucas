document.addEventListener('DOMContentLoaded', () => {
  const liningInput = document.getElementById('lining-input');
  const liningPreview = document.getElementById('lining-preview');

  liningInput.addEventListener('change', () => {
    const file = liningInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      liningPreview.innerHTML = `<img src="${e.target.result}" alt="Lining preview" />`;
    };
    reader.readAsDataURL(file);
  });
});
