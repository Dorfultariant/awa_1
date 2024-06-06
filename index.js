
// Descriptions were generated with GPT 4
const information = {

    "dog_breeds": [
        {
            "breed": "German Shepherd",
            "description": "The German Shepherd is a versatile working dog known for its agility, intelligence, and noble character. Developed in Germany, it stands 22 to 26 inches (56 to 66 cm) tall at the withers and weighs 75 to 95 pounds (34 to 43 kg). With a strong build and a coarse outer coat ranging from white or pale gray to black and tan, German Shepherds are loyal, confident, and courageous companions.",
            "src": "https://dog.ceo/api/breed/germanshepherd/images/random",
            "img": ""
        },
        {
            "breed": "Appenzeller",
            "description": "Appenzeller is a Swiss cheese that fits the prototype of \"Swiss cheese\" with its characteristic large holes. Unlike Alpine cheeses, Appenzeller is produced in a hilly region rather than the mountains. It has a raw, firm, cow's milk base with a washed rind, resulting in a pronounced flavor often described as \"spicy.\" The secret herbal brine recipe used during production contributes to its unique tangy taste.",
            "src": "https://dog.ceo/api/breed/appenzeller/images/random",
            "img": ""
        },
        {
            "breed": "Weimaraner",
            "description": "The Weimaraner, also known as the \"Gray Ghost,\" hails from Germany. This sleek and athletic dog breed has a steel gray coat, oversized floppy ears, and soulful blue eyes. Originally bred for hunting, Weimaraners are friendly, obedient, and enjoy plenty of exercise and quality time with their human companions.",
            "src": "https://dog.ceo/api/breed/weimaraner/images/random",
            "img": ""
        },
        {
            "breed": "Coonhound",
            "description": "The Coonhound is a skilled hunting dog known for its exceptional sense of smell and endurance. There are several Coonhound breeds, including the Black and Tan Coonhound, Redbone Coonhound, and Bluetick Coonhound. These dogs excel in tracking raccoons and other game. They are friendly, loyal, and make great companions for active families.",
            "src": "https://dog.ceo/api/breed/coonhound/images/random",
            "img": ""
        },
        {
            "breed": "Eskimo",
            "description": "The Eskimo dog, also known as the American Eskimo Dog, is a small to medium-sized breed with a thick double coat. Despite its name, it has no direct connection to Eskimos. These dogs are intelligent, alert, and agile. They make excellent watchdogs and enjoy being part of a loving family. Their playful nature and striking appearance make them popular pets.",
            "src": "https://dog.ceo/api/breed/eskimo/images/random",
            "img": ""
        }
    ]

};

function addWikiItem(item) {
    // The "root" item tag
    const wikiItem = document.createElement("div");
    wikiItem.classList.add("wiki-item");

    const wikiHeader = document.createElement("h1");
    wikiHeader.classList.add("wiki-header");
    wikiHeader.textContent = item.breed;

    const wikiContent = document.createElement("div");
    wikiContent.classList.add("wiki-content");

    const wikiText = document.createElement("p");
    wikiText.classList.add("wiki-text");
    wikiText.textContent = item.description;


    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const wikiImg = document.createElement("img");
    wikiImg.classList.add("wiki-img");

    wikiImg.src = item.img;
    wikiImg.alt = "Img should be here";


    // Append the correct structure:
    imgContainer.appendChild(wikiImg);
    wikiContent.appendChild(wikiText);
    wikiContent.appendChild(imgContainer);
    wikiItem.appendChild(wikiHeader);
    wikiItem.appendChild(wikiContent);

    return wikiItem;
}


async function fetchImgSrc(breed) {
    const response = await fetch(breed.src);
    const data = await response.json();
    breed.img = data.message;
}

async function populateSite() {
    const container = document.getElementById("wiki-container");
    const breeds = information.dog_breeds;

    // Populate with items
    for (const breed of breeds) {
        await fetchImgSrc(breed);
        const newItem = addWikiItem(breed);
        container.appendChild(newItem)
    }

};


document.addEventListener("DOMContentLoaded", populateSite);
