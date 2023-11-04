
const loadTempInit = () => {
    const template = `
        <div id="list-prod" class="row">
        </div>
    `
    const main = document.getElementById('main');
    main.innerHTML = template;
}

const getProd = async () => {
    const temp = prod => { 
        return `
        <div class="tarjeta">
        <div class="img">
          <img src="${prod.image}" alt="">
        </div>
        <div class="titulo">
          <h1>${prod.nombre}</h1>
        </div>
        <ul class="list-ingr">
            ${prod.ingredientes.map(ing => `<li>${ing}</li>`).join("")}
        </ul>
        <ul class="precio">
          <li>Individual</li>
          <li>$${prod.precio.individual}</li>
          <li>Familiar</li>
          <li>$${prod.precio.familiar}</li>
        </ul>
      </div>
        `
    }

    const template = prod => {
       return  `
        <div class="card mb-3 me-3 mt-5 ps-0" style="max-width: 600px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${prod.image}" class="img-fluid rounded-start" alt="...";>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h1 class="card-title" >${prod.nombre}</h1>
                    <ul clas="list-group list-group-flush">
                        ${prod.ingredientes.map(ing => `<li class="list-group-item">${ing}</li>`).join("")}
                    </ul>
                    <ul class="list-group" >
                        <li>precio individual: ${prod.precio.individual}</li>
                        <li>precio familiar: ${prod.precio.familiar}</li>
                    </ul>
                  
                    <div style="display: flex; justify-content:center;">
                        <button class="btn btn-primary px-5">pedir</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    const template2 = prod => {
        `
        <div class="card mb-3 me-2 mt-5 pe-0" style="max-width: 640px;">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">nombre de la pizza</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    <button class="btn btn-primary">pedir</button>
                    </div>
                </div>
                <div class="col-md-4">
                    <img src="${prod.image}" class="img-fluid rounded-start" alt="..." style="height:254px";>
                </div>
            </div>
        </div>
        `
    }
    const prodList = document.getElementById('list-prod');
    prodList.innerHTML = productos.map(Element => temp(Element)).join("");
    console.log(productos)
}

// window.addEventListener("load", function (event) {
//   setCookies();
// })

// function setCookies() {
//   document.cookie = "promo_shown=1";
//   document.cookie = "SameSite=Strict";
// }

window.onload = () => {
    loadTempInit();
    getProd();
}