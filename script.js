document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;

    // Display thank you message and spinner
    const message = document.getElementById('message');
    const spinner = document.getElementById('spinner');
    message.innerHTML = 'Thank you for using our website! 😀';
    message.classList.add('animated');
    spinner.classList.add('animated');

    // Wait for 3 seconds before redirecting to Bing with the search query
    setTimeout(function () {
        window.location.href = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    }, 3000);
});
