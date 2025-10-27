
    const form = document.getElementById('myForm');
    const input = document.getElementById('userInput');
    const output = document.getElementById('output');

        form.addEventListener('submit', function(e) {
      e.preventDefault(); // sprječava ponovno učitavanje stranice
      const text = input.value.trim();
      
      if (text !== '') {
        output.textContent = text;
        input.value = ''; // isprazni input
      } else {
        output.textContent = 'Molimo unesite neki tekst.';
      }
    });