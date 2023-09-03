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

    // Retrieve user name from localStorage
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
        userNameSpan.textContent = savedUserName;
    }

    // Open the modal
    openModalIcon.addEventListener('click', () => {
        nameModal.classList.remove('hidden');
    });

    // Close the modal
    nameSubmitButton.addEventListener('click', () => {
      submitName();
  });

  nameInput.addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
          submitName();
      }
  });

  function submitName() {
      const enteredName = nameInput.value.trim();
      if (enteredName !== '') {
          userNameSpan.textContent = enteredName;

          // Save the user's name in localStorage
          localStorage.setItem('userName', enteredName);
      }
      nameModal.classList.add('hidden');
  }

    


//For Profile Picture

//const imagePreview = document.getElementById('imagePreview');

/*imagePreview.addEventListener('paste', (event) => {
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
});*/

const avatarImage = document.getElementById('avatar-image');
const fileInput = document.getElementById('avatar-upload');

// Check if avatar data exists in localStorage and set it if available
const savedAvatarData = localStorage.getItem('userAvatar');
if (savedAvatarData) {
    avatarImage.src = savedAvatarData;
}

function updateAvatar() {
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const avatarData = e.target.result;

            // Update the avatar image
            avatarImage.src = avatarData;

            // Save the avatar data to localStorage
            localStorage.setItem('userAvatar', avatarData);
        };

        reader.readAsDataURL(file);
    }
}

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