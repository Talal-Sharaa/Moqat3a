const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission

      const searchTerm = searchInput.value.trim().toLowerCase();
      if (searchTerm !== '') {
        // Find the closest matching page name
        const pageNames = [
          'mcdonalds.html',
          'burger-king.html',
          'wendys.html',
          // Add more page names as needed
        ];

        let closestMatch = '';
        let closestMatchScore = -Infinity;

        pageNames.forEach(pageName => {
          const score = calculateMatchScore(searchTerm, pageName.toLowerCase());
          if (score > closestMatchScore) {
            closestMatch = pageName;
            closestMatchScore = score;
          }
        });

        // Redirect to the closest matching page
        window.location.href = closestMatch;
      }
    });

    function calculateMatchScore(searchTerm, pageName) {
      let score = 0;

      // Calculate the match score based on the similarity of characters
      for (let i = 0; i < searchTerm.length; i++) {
        if (pageName.includes(searchTerm[i])) {
          score++;
        }
      }

      return score;
    }