const radiusInput = document.getElementById('radius');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultSpan = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
      const radius = parseFloat(radiusInput.value); // берем число из input
      if (isNaN(radius)) {
        resultSpan.textContent = 'Введите число!';
        return;
      }
      const area = Math.PI * radius ** 2; // π * r^2
      resultSpan.textContent = area.toFixed(2); // 2 знака после запятой
    });