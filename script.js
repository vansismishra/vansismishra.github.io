const apiKey = '235bab7cab9bdebaa75e491bf208080a';

function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Weather data retrieved from the API
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

const cityName = prompt('Enter a city:');
fetchWeather(cityName);


//For User Name:
    const userNameSpan = document.getElementById('userName');
    const openModalIcon = document.getElementById('openModal');
    const nameModal = document.getElementById('nameModal');
    const nameInput = document.getElementById('nameInput');
    const nameSubmitButton = document.getElementById('nameSubmit');

    // Open the modal
    openModalIcon.addEventListener('click', () => {
        nameModal.classList.remove('hidden');
    });

    // Close the modal
    nameSubmitButton.addEventListener('click', () => {
        const enteredName = nameInput.value.trim();
        if (enteredName !== '') {
            userNameSpan.textContent = enteredName;
        }
        nameModal.classList.add('hidden');
    });


//For Profile Picture

const imagePreview = document.getElementById('imagePreview');

imagePreview.addEventListener('paste', (event) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;
    for (const item of items) {
        if (item.kind === 'file' && item.type.startsWith('image/')) {
            const blob = item.getAsFile();
            const imageUrl = URL.createObjectURL(blob);

            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.classList.add('pasted-image');

            imagePreview.innerHTML = '';
            imagePreview.appendChild(imageElement);
        }
    }
});