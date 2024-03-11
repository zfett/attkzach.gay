---
---
const ARTWORK_DATA = { {% for art in site.data.artwork %}{% if forloop.last %}"{{ art.image }}":{"name":"{{ art.name }}","year":"{{ art.year }}","image":"/assets/image/artwork/{{ art.image }}.webp","link":"{{ art.link }}","writeup":"{{art.writeup}}"} {% else %}"{{ art.image }}":{"name":"{{ art.name }}","year":"{{ art.year }}","image":"/assets/image/artwork/{{ art.image }}.webp","link":"{{ art.link }}","writeup":"{{art.writeup}}"},{% endif %}{% endfor %} };

let currentModalId = "";

function showModal(name) {
    var artObject = ARTWORK_DATA[name];
    var randStr = (Math.random() + 1).toString(36).substring(3);
    var modalId = `modal-${name}-${randStr}`;

    if (currentModalId !== "") {
        closeModal(currentModalId);
    }

    currentModalId = modalId;

    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    
    temp.classList.add("artworkModal");
    temp.id = modalId;

    if (artObject.writeup !== "") {
        temp.innerHTML = `<div id="modalContainer"><button id="modalCloseButton" onclick="closeModal('${modalId}')">Close Modal</button><div id="modalArtworkContainer"><div class="text"><span>${artObject.name} (${artObject.year}) — <a href="/writeup/${artObject.writeup}/">Read Write-up</a></span></div><img src="${artObject.image}" alt="${artObject.name}" class="image"></div></div>`;
    } else {
        temp.innerHTML = `<div id="modalContainer"><button id="modalCloseButton" onclick="closeModal('${modalId}')">Close Modal</button><div id="modalArtworkContainer"><div class="text"><span>${artObject.name} (${artObject.year}) — <a href="${artObject.link}" target="_blank">View on Behance</a></span></div><img src="${artObject.image}" alt="${artObject.name}" class="image"></div></div>`;
    }

    document.body.insertBefore(temp, document.body.childNodes[0]);
}

function closeModal(id) {
    var targetModal = document.getElementById(id);

    targetModal.parentNode.removeChild(targetModal);

    currentModalId = "";
}