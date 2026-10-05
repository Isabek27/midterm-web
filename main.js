(function () {
    'use strict';

    var searchInput = document.getElementById('siteSearch');
    var filterButtons = document.querySelectorAll('.filter-btn');
    var emptyNote = document.getElementById('emptyNote');
    var currentFilter = 'all';

    function applyFilters() {
        var query = searchInput ? searchInput.value.trim().toLowerCase() : '';
        var items = document.querySelectorAll('[data-search]');
        var visible = 0;

        items.forEach(function (item) {
            var status = item.getAttribute('data-status');
            var matchesStatus = currentFilter === 'all' || status === currentFilter;
            var matchesText = item.textContent.toLowerCase().indexOf(query) !== -1;
            var show = matchesStatus && matchesText;

            item.hidden = !show;
            if (show) { visible++; }
        });

        if (emptyNote) {
            emptyNote.style.display = visible === 0 && items.length ? 'block' : 'none';
        }
    }

    filterButtons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            filterButtons.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter');
            applyFilters();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
})();
