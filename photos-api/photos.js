// load data
const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => displayData(data))
};
loadData();

// display data
const displayData = photos => {
    // console.log(photos);
    const photosParent = document.getElementById("photos-parent")
    photos.slice(0, 30).forEach(photo => {
        const div = document.createElement("div");
        div.innerHTML = `
    <div class="col">
    <div class="card h-100">
        <img src="${'https://cdn.siasat.com/wp-content/uploads/2019/08/masjid2.jpg'}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="">${photo.title}</h5>
          <a href="#details" class="btn btn-info" onclick=loadDetails(${photo.id})>Details</a>
        </div>
    </div>
    </div>`
        photosParent.appendChild(div);
    })
};

// load details
const loadDetails = id => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(res => res.json())
        .then(data => displayDetails(data))
};

// display details
const displayDetails = details => {
    document.getElementById("details").innerHTML = `
    <div class="col">
    <div class="card h-100">
        <img src="${'https://www.daily-bangladesh.com/media/imgAll/2021March/en/global-2106100514.jpg'}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body">
            <h5 class="text-center">${details.title}</h5>
        </div>
    </div>
    </div>`
};