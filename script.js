"use strict";

const list = document.getElementById("list");

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.slice(0, 5).forEach((coin) => {
      const li = document.createElement("li");

      if (coin.price_change_percentage_24h > 0) {
        li.style.color = "green";
      } else if (coin.price_change_percentage_24h < 0) {
        li.style.color = "red";
      }

      const img = document.createElement("img");
      img.src = coin.image;
      img.width = 20;

      li.appendChild(img);
      li.appendChild(
        document.createTextNode(
          `  ${coin.name}: ${coin.current_price} (${coin.price_change_percentage_24h.toFixed(2)}%)`,
        ),
      );

      list.appendChild(li);
    });
  });
