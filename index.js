// Базовый класс Transport
class Transport {
  constructor(type, brand, price, image) {
    this.type = type;
    this.brand = brand;
    this.price = price;
    this.image = image;
  }

  getInfo() {
    return `Тип: ${this.type}, Бренд: ${this.brand}`;
  }

  getPrice() {
    return `Цена: ${this.price.toLocaleString()} ₽`;
  }
}

// Класс Car (наследует Transport)
class Car extends Transport {
  constructor(brand, price, doors, image) {
    super("Автомобиль", brand, price, image);
    this.doors = doors;
  }

  getDoorsCount() {
    return `Количество дверей: ${this.doors}`;
  }
}

// Класс Bike (наследует Transport)
class Bike extends Transport {
  constructor(brand, price, maxSpeed, image) {
    super("Мотоцикл", brand, price, image);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return `Максимальная скорость: ${this.maxSpeed} км/ч`;
  }
}

// Данные о транспорте
const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

// Отображение транспорта на странице
const transportList = document.getElementById("transport-list");

data.forEach((item) => {
  let vehicle;
  if (item.type === "car") {
    vehicle = new Car(item.brand, item.price, item.doors, item.image);
  } else if (item.type === "bike") {
    vehicle = new Bike(item.brand, item.price, item.maxSpeed, item.image);
  }

  // Создаём карточку
  const card = document.createElement("div");
  card.classList.add("transport-card");

  card.innerHTML = `
      <img src="${vehicle.image}" alt="${vehicle.brand}">
      <h2>${vehicle.brand}</h2>
      <p>${vehicle.getInfo()}</p>
      <p>${vehicle.getPrice()}</p>
      <p>${
        vehicle.type === "Автомобиль"
          ? vehicle.getDoorsCount()
          : vehicle.getMaxSpeed()
      }</p>
  `;

  transportList.appendChild(card);
});
