const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent form submission

      const searchTerm = searchInput.value.trim();
      if (searchTerm !== '') {
        // Redirect to the search term page
        const filename = searchTerm.toLowerCase().replace(/[^a-z0-9]/g, '') + '.html';
        window.location.href = filename;
      }
    });