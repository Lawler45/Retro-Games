const games = [
    {
      name: "Minesweeper",
      link: "minesweeper/index.html",
      image: "minesweeper/images/bomb.png",
    },
    {
      name: "Stacker",
      link: "stacker/index.html",
      image: "stacker/images/stacker.png",
    },
    {
      name: "Ducker",
      link: "ducker/index.html",
      image: "ducker/images/duck-standing.png",
    },
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("gameContainer");
  
    // Create cards dynamically
    games.forEach((game) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<h3>${game.name}</h3>`;
  
      const img = document.createElement("img");
      img.src = game.image;
      img.alt = game.name;
  
      // Add click event to navigate to the specific game
      card.addEventListener("click", function () {
        window.location.href = game.link;
      });
  
      card.appendChild(img); // Append the image to the card
      gameContainer.appendChild(card);
    });
  });
  