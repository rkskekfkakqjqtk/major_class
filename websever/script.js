document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { title: "게시물 1", tags: ["태그1", "태그2"] },
        { title: "게시물 2", tags: ["태그2", "태그3"] },
        // 여기에 더 많은 게시물을 추가할 수 있습니다.
    ];

    function updateList(items) {
        const listContainer = document.getElementById('listContainer');
        listContainer.innerHTML = '';

        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.title;

            item.tags.forEach(tag => {
                const span = document.createElement('span');
                span.classList.add('tag');
                span.textContent = tag;
                li.appendChild(span);
            });

            listContainer.appendChild(li);
        });
    }

    function filterItems(query) {
        return items.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
    }

    document.getElementById('searchBox').addEventListener('input', function(e) {
        const filteredItems = filterItems(e.target.value);
        updateList(filteredItems);
    });

    updateList(items); // 초기 리스트 로드
});
