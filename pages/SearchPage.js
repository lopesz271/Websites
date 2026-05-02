function toggleFav(el){
    el.classList.toggle("active");
}

function toggleTheme(btn) {
    document.body.classList.toggle("dark");

    // adiciona animação
    btn.classList.add("rotate");

    setTimeout(() => {
        if (document.body.classList.contains("dark")) {
            btn.innerText = "☾";
        } else {
            btn.innerText = "☼";
        }

        btn.classList.remove("rotate");
    }, 200);
}

const cards = [
   {
    img: "/image/image1.avif",
    price: "$1.300.800,00",
    type: "Motel",
    people: "1-7",
    location: "UK - United Kingdom",
    text: "The United Kingdom is a constitutional monarchy in northwestern Europe, made up of England, Scotland, Wales, and Northern Ireland."
  },
  {
    img: "/image/images.jfif",
    price: "$900.000,00",
    type: "Casa",
    people: "1-4",
    location: "Brasil",
    text:"Brazil is the largest country in South America, known for its cultural diversity, rich natural resources, and mixed population.It has a history of Portuguese colonization and plays an important role as an emerging economy on the global stage."
  },
  {
    img:"/image/image7.jpg",
    price:"$500.000,00",
    type:"House",
    people: "1-4",
    location:"Norway",
    text:"Norway is a Scandinavian country known for its dramatic landscapes of fjords, mountains, and northern lights.It has a high standard of living and a strong economy based on oil, fishing, and renewable energy.Its culture blends Viking history with modern design, outdoor life, and a deep connection to nature."
  },
  {
    img:"/image/image5.jfif",
    price:"$200.000,00",
    type:"Hotel",
    people:"1-3",
    location:"Finland",
    text:"Finland is a Nordic country known for its vast forests, thousands of lakes, and stunning northern lights.It has a high quality of life, with strong education, technology, and social welfare systems.Finnish culture values simplicity, sauna traditions, and a deep connection to nature."
  },
  {
    img:"/image/image6.webp",
    price:"$150.000,00",
    type:"Hotel",
    people:"1-2",
    location:"France",
    text:"France is a European country known for its rich history, iconic landmarks like the Eiffel Tower, and world-famous cuisine.It has a strong cultural influence in art, fashion, and literature, especially centered in Paris.France combines historic charm with modern life, offering diverse landscapes from vineyards to coastlines."
  },
  {
    img:"/image/image4.webp",
    price:"$250.000,00",
    type:"Hotel",
    people:"1-4",
    location:"Austria",
    text:"Austria is a Central European country known for its Alpine landscapes, historic cities, and classical music heritage.It has a high quality of life and a strong economy based on tourism, industry, and services.Austrian culture blends imperial history, traditional cuisine, and a deep appreciation for arts and music."
  },
  {
    img:"/image/image3.jpg",
    price:"$300.000,00",
    type:"House",
    people:"1-3",
    location:"Germany",
    text:"Germany is a Central European country known for its strong economy, engineering, and historic cities.It has a rich cultural heritage in philosophy, music, and science, with figures like Goethe and Einstein.Germany blends modern innovation with tradition, offering diverse landscapes from forests to vibrant urban centers."
  },
  {
    img:"/image/image2.jpg",
    price:"$400.000,00",
    type:"Hotel",
    people:"1-2",
    location:"Argentina",
    text:"Argentina is a South American country known for its vast landscapes, from the Andes mountains to the Pampas plains.It has a rich cultural identity shaped by European influences, famous for tango, football, and cuisine like asado.Argentina combines vibrant cities like Buenos Aires with natural wonders such as Patagonia and Iguazú Falls."
  },

];

  const container = document.getElementById("container");

cards.forEach(card => {
  container.innerHTML += `
    <div class="card">
      <div class="img">
        <img src="${card.img}">
        <button class="favbtn" onclick="toggleFav(this)">❤</button>
      </div>

      <div class="Price">
        <h3>${card.price}</h3>
      </div>

      <div class="info">
        <div class="Llimg">
          <img id="fav" src="/image/home.png">
          <span>${card.type}</span>
        </div>

        <div class="Llimg">
          <img id="fav" src="/image/users-alt.png">
          <span>${card.people}</span>
        </div>

        <div class="Llimg">
          <img id="fav" src="/image/marker.png">
          <span>${card.location}</span>
        </div>
        <div class="Text"><span>${card.text}</span></div>
    </div>
  `;
});

document.querySelectorAll(".dropdown button").forEach(btn => {
  btn.addEventListener("click", () => {
    const menu = btn.nextElementSibling;
    menu.style.display =
      menu.style.display === "block" ? "none" : "block";
  });
});


