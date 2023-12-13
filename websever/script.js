document.addEventListener('DOMContentLoaded', function() {
    let items = [
        { title: "게시물 1", tags: ["태그1", "태그2"] },
        { title: "게시물 2", tags: ["태그2", "태그3"] },
        // 여기에 더 많은 게시물을 추가할 수 있습니다.
    ];

    

    // 링크 추가 기능
    document.getElementById('addLink').addEventListener('click', function() {
        const linkInput = document.getElementById('linkInput');
        const link = linkInput.value;
        if (link) {
            // 새로운 아이템을 리스트에 추가
            items.push({ title: `링크: ${link}`, tags: ["링크"] });
            updateList(items);
            linkInput.value = ''; // 입력 필드 초기화
        }
    });

    // 리스트 업데이트 함수
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

    // 검색 필터 함수
    function filterItems(query) {
        return items.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        );
    }

    // 검색 기능
    document.getElementById('searchBox').addEventListener('input', function(e) {
        const filteredItems = filterItems(e.target.value);
        updateList(filteredItems);
    });

     function updateTagsList() {
        const tagsList = document.getElementById('tagsList');
        tagsList.innerHTML = '';
        const allTags = new Set(items.flatMap(item => item.tags));

        allTags.forEach(tag => {
            const li = document.createElement('li');
            li.textContent = tag;
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => filterByTag(tag));
            tagsList.appendChild(li);
        });
    }

    // 태그로 필터링
    function filterByTag(tag) {
        const filteredItems = items.filter(item => item.tags.includes(tag));
        updateList(filteredItems);
    }

    // 태그 추가 및 수정 기능 (예시)
    function addOrEditTag(itemTitle, newTag) {
        const item = items.find(item => item.title === itemTitle);
        if (item) {
            if (!item.tags.includes(newTag)) {
                item.tags.push(newTag);
            }
            // 여기에 태그 수정 로직을 추가할 수 있습니다.
        }
        updateList(items);
        updateTagsList();
    }

    // 초기 태그 목록 로드
    updateTagsList();
});

    // 초기 리스트 로드
    updateList(items);
});
