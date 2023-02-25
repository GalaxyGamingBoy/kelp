const reviews = [
    {
        "title": "1st Review by ZeroQL",
        "text": "Congratulations on being the first business to open in hc land. ",
        "stars": [5, 4, 4]
    }
];

const calculateStars = (starCount) => {
    let stars = document.createElement("div");
    for (let i = 0; i < starCount; i++) {
        let star = document.createElement("i");
        star.className = "bi bi-star-fill";
        stars.appendChild(star);
    }
    return stars;
}

const calculateStarByArray = (starArray) => {
    let newStarArray = [];
    starArray.forEach(element => {
        newStarArray.push(calculateStars(element))
    })
    return newStarArray;
}

const createReviewTable = (reviewsParam) => {
    let newTable = document.createElement("table");
    newTable.className = "table";

    // # Table Head
    let tableHead = document.createElement("thead");
    let tableHeadTR = document.createElement("tr");
    let tableHeadElements = [document.createElement("th"), document.createElement("th"), document.createElement("th")];

    // Table Head Elements
    tableHeadElements[0].scope = "col";
    tableHeadElements[0].innerHTML = "Customer Service";
    tableHeadElements[1].scope = "col";
    tableHeadElements[1].innerHTML = "Stock";
    tableHeadElements[2].scope = "col";
    tableHeadElements[2].innerHTML = "Pricing";

    // Table Head TR 
    tableHeadElements.forEach(element => tableHeadTR.appendChild(element));
    tableHead.appendChild(tableHeadTR);

    // # Table Body
    let tableBody = document.createElement("tbody");
    let tableBodyTR = document.createElement("tr");
    let tableBodyElements = [document.createElement("td"), document.createElement("td"), document.createElement("td")];

    // Table Body Elements
    tableBodyElements[0].innerHTML = reviewsParam[0].innerHTML;
    tableBodyElements[1].innerHTML = reviewsParam[1].innerHTML;
    tableBodyElements[2].innerHTML = reviewsParam[2].innerHTML;

    // Table Body TR 
    tableBodyElements.forEach(element => tableBodyTR.appendChild(element));
    tableBody.appendChild(tableBodyTR);

    // # Table
    newTable.appendChild(tableHead);
    newTable.appendChild(tableBody);

    return newTable;
}

const createNewCard = (title, text, reviewsParam) => {
    let newCard = document.createElement("div");
    newCard.className = "card";

    // Header
    let headerCard = document.createElement("div");
    headerCard.className = "card-header";
    headerCard.innerHTML = "Review";

    // Body
    let bodyCard = document.createElement("div");
    let titleBodyCard = document.createElement("h5");
    let textBodyCard = document.createElement("p");

    bodyCard.className = "card-body";
    titleBodyCard.className = "card-title";
    textBodyCard.className = "card-text";

    titleBodyCard.innerHTML = title;
    textBodyCard.innerHTML = text;

    bodyCard.appendChild(titleBodyCard);
    bodyCard.appendChild(textBodyCard);

    // Create Card
    newCard.appendChild(headerCard);
    newCard.appendChild(bodyCard);
    newCard.appendChild(createReviewTable(reviewsParam));

    return newCard;
}

const reviewsDIV = document.getElementById("reviews");
const createReviews = () => {
    reviews.forEach(review => {
        reviewsDIV.appendChild(createNewCard(review.title, review.text, calculateStarByArray(review.stars)));
        reviewsDIV.appendChild(document.createElement("br"));
    })
};

createReviews();