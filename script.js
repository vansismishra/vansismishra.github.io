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

//For Today's Date:
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'long' });

const dateTodayElement = document.getElementById("date_today");
dateTodayElement.textContent = `${day}th ${month}`;
  
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

//For Radial Progress Bar
$(".progress").each(function(){
  
  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});