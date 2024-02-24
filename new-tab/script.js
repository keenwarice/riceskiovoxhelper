        document.querySelector('.searchbar').addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });

        function performSearch() {
            let inputValue = document.querySelector('.searchbar').value.trim();


            // Check if the entered value looks like a URL
            if (/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(inputValue)) {
                    window.location.href = inputValue + '#translate.google.com';
            } else {
                    window.location.href = 'https://google.com/search?q=' + inputValue + "#translate.google.com";
            }
        }
        

        function redirectToYouTube() {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }
