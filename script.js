function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user && pass) {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('recommendation-page').style.display = 'block';
  } else {
    alert('Please enter both username and password');
  }
}

function getRecommendations() {
  const results = document.getElementById('results');
  results.innerHTML = '';

  const sampleMovie = {
    name: 'Sample Movie',
    picture: 'https://via.placeholder.com/100',
    rating: '8.5',
    duration: '2h 10min',
    platform: 'Netflix',
    description: 'A thrilling adventure with top-notch performances.',
    director: 'Jane Doe'
  };

  for (let i = 0; i < 3; i++) {
    results.innerHTML += `
      <div class="movie-card">
        <img src="${sampleMovie.picture}" alt="Movie Poster" />
        <div class="movie-info">
          <h3>${sampleMovie.name}</h3>
          <p><strong>Rating:</strong> ${sampleMovie.rating}</p>
          <p><strong>Duration:</strong> ${sampleMovie.duration}</p>
          <p><strong>Available on:</strong> ${sampleMovie.platform}</p>
          <p><strong>Director:</strong> ${sampleMovie.director}</p>
          <p>${sampleMovie.description}</p>
        </div>
      </div>
    `;
  }
}