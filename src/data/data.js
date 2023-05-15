// NOTE - Sidebar Items
class Item {
  constructor(id, icon, link, active) {
    this.id = id;
    this.icon = icon;
    this.link = link;
    this.active = active;
    this.style = this.active
      ? { background: "#252836" }
      : { background: "#1e1d2a" };
    this.wrapperStyle = this.active
      ? {
          background: "#EA7C69",
          boxShadow: "0px 8px 24px rgba(234, 124, 105, 0.32)",
        }
      : { background: "#1e1d2a", boxShadow: "0px 8px 24px #1e1d2a" };

    this.iconStyle = this.active
      ? { color: "#fff", fontSize: "20px", textDecoration: "none !important" }
      : {
          color: "#EA7C69",
          fontSize: "20px",
          textDecoration: "none important",
        };
  }
}

export const sidebarItems = {
  data: [
    new Item(1, "fa fa-home", "/", true),
    new Item(2, "fa fa-gg-circle", "/discount", false),
    new Item(3, "fa fa-tachometer", "/dashboard", false),
    new Item(4, "fa fa-bell", "/notification", false),
    new Item(5, "fa fa-envelope", "/message", false),
    new Item(6, "fa fa-cog", "/settings", false),
    new Item(7, "fa fa-sign-out", "/logout", false),
  ],
};

//NOTE - HOME CATEGORY
class Title {
  constructor(id, name, active, type) {
    this.id = id;
    this.name = name;
    this.active = active;
    this.style = (active) => {
      return (
        active
        ? { color: "#EA7C69", borderBottom: "2px solid #EA7C69" }
        : { color: "#fff", borderBottom: "2px solid transparent" }
      )
    };
  }
}

export const titles = [
  new Title(1453, "Hot Dishes", true),
  new Title(37682, "Cold Dishes", false),
  new Title(3234, "Soup", false),
  new Title(32344, "Grill", false),
  new Title(4565, "Appetizer", false),
  new Title(453366, "Dessert", false),
];

//  NOTE - Foods
class Food1 {
  constructor(img, name, type) {
    this.img = img;
    this.name = name;
    this.type = type;
    this.id = `${this.name}__${Math.round(Math.random() * 100000000)}`;
    this.number = Math.round(Math.random() * 10);
    this.price = Number(this.number.toFixed(2));
    this.bowl = Math.round(Math.random() * 100);
  }
}

export const foods = {
  data: [
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWo1GcR1FuoNhDmlEloWoSU6QIGTBCXoKjpwxKM7z0E_hAso9qF2a8gkqOousSRNc9Xlc&usqp=CAU",
      "Spicy seasoned seafood noodles",
      "Hot Dishes Appetizer"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6f7uWlsFgqv34uEnaCBwnf5lEwJbjAh9xmNjuzBMGj9idg-BCmYBtbm4U7lL03DgK3Y&usqp=CAU",
      "Salted Pasta with mushroom sauce",
      "Hot Dishes Grill"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfWCoY7OklLKQKxXfx0veL9JCPNOKs0Z86Zd54jeKwTNep2GD4XZaa4cv1lUBZjdk-9gA&usqp=CAU",
      "Beef dumpling in hot and sour soup",
      "Hot Dishes Soup"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZk5U7U3wLcCQY3k6i9zR7BchAatNTFxF7_mV0pje1YtSRtjgursUmlzniiNzq1TZXAgU&usqp=CAU",
      "Healthy noodle with spinach leaf",
      "Hot Dishes Soup"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnnHibvcoRrVO2pgngA4ExAV3HDHMg2yEtPVdZ2B59CFA1tS4nS6eF5mSzaVWR_6zAbUc&usqp=CAU",
      "Hot spicy fried rice with omelet",
      "Hot Dishes Grill"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAADbTjlA5h3S4_wxmZ4wtA-k7yI_dMjsMgxe_dpqbMu3q6pYOuWLNIYBlIm7IWKCHzW8&usqp=CAU",
      "Spicy instant noodle with special omelette",
      "Hot Dishes Appetizer"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDL-4qkurM3GsWiJYz1gLk5SwcfGqbcjXHppHrxTLbzp-Nce90HVW8Q-IPv3-x9K2y9I&usqp=CAU",
      "Hot spicy fried noodle with special omelette",
      "Hot Dishes Grill"
    ),

    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3wZirL-07-c0ejjpZVAVeh3sA9YLceGnOeFfcC9vX4jTQsIyl4FyVAFr2fT6T5d2GIs&usqp=CAU",
      "Kahlua icecream Dessert",
      "Cold Dishes Dessert"
    ),

    new Food1(
      "https://media.farandwide.com/0e/3f/0e3fe1230a094e0ebfff1e6edc1facd2.jpeg",
      "FarWude Dessert Most all time",
      "Cold Dishes Dessert"
    ),
    new Food1(
      "https://www.foodandwine.com/thmb/4GxVQDnRapxne7_QcnTgbiim4hg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RECIPE1215-XL-chocolate-peppermint-brownies-47f3aa7686d24869823ad190c73d9388.jpg",
      "Holiday Desserts Foowone",
      "Cold Dishes Dessert"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxYCN868ktzdzUMu9KmRxVRewkRERAw_ujMv4Zm9-C6x2adyvYWPRBh882NpkZIRgpe4&usqp=CAU",
      "Vegetarian soup best all time",
      "Cold Dishes Soup"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0kNQ4pkd2lQznSyMDtaHx-iFXfOgO0fULnT5WqFuc11O5NFJYGVK-rSC7i6Pg4z4t3A&usqp=CAU",
      "Owyure soup for sick",
      "Cold Dishes Soup"
    ),
    new Food1(
      "https://www.lecremedelacrumb.com/wp-content/uploads/2019/05/best-easy-grilled-chicken-2-500x375.jpg",
      "Best Grilled Chicken",
      "Cold Dishes Grill"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFLR2KdVhywiQMWUh5-2xNLqoxj9fOhPja77s-xzEe71_5usdL0gkyVZ-22nPpLNfV8g&usqp=CAU",
      "Chicken Breast Reak Daail",
      "Cold Dishes Grill"
    ),

    new Food1(
      "https://w0.peakpx.com/wallpaper/266/789/HD-wallpaper-delicious-grill-fire-food-summer-hot-heat.jpg",
      "Werkalipse Grilled Food1",
      "Grill"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSA5mnnWARx12M2vtqzpY5wNngEQoEtzYDsnB1_0wzOAy5vsx-AMJDqoVv8CY_ifuM0U&usqp=CAU",
      "Exploite Grilling Meat",
      "Grill"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXLiS_0OsMvGS7WdNviyuovgF04AA_Q-y0A&usqp=CAU",
      "Best Japanese Yakitori Grill",
      "Grill"
    ),
    new Food1(
      "https://caligirlinasouthernworld.com/wp-content/uploads/2021/12/Appetizer-Meatballs.jpg",
      "The Best MeatBalls Appetizer",
      "Appetizer"
    ),
    new Food1(
      "https://pinchofyum.com/wp-content/uploads/Bacon-Wrapped-Dates-Square.jpg",
      "Crown pinch of yam",
      "Appetizer"
    ),
    new Food1(
      "https://www.foodandwine.com/thmb/CMlX5hCPcjuhMYkAIVHv0TL0rcA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/HD-201305-r-bacon-wrapped-cherry-peppers-fa3e16fec4164211a8b245f1c3a1f691.jpg",
      "All American favourite menu starters",
      "Appetizer"
    ),
    new Food1(
      "https://e1.pxfuel.com/desktop-wallpaper/781/495/desktop-wallpaper-chicken-soup-food-hq-chicken-soup-chicken-soup.jpg",
      "Chicken Soup Japanese Haggo",
      "Soup"
    ),
    new Food1(
      "https://c4.wallpaperflare.com/wallpaper/937/735/645/soup-food-mushroom-spoon-hd-wallpaper-preview.jpg",
      "Flare German Soup Trainstain",
      "Soup"
    ),
    new Food1(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9C8qMLbRrbPqsO7PVf9qnRK87CjPpcAL3fHSzkT-RY5ee_evfl7priIoDGaJ4HSbAdrM&usqp=CAU",
      "Italian Mushroom soup for Vegan",
      "Soup"
    ),
    new Food1(
      "https://media.istockphoto.com/id/1410100969/photo/dark-chocolate-bundt-cake-with-ganache-icing-and-strawberry-on-dark-stone-or-concrete-table.jpg?b=1&s=170667a&w=0&k=20&c=lKU0AJZ1Dl5Fzi2sevhSsz8lO2W2roylUiRb3gU6yEs=",
      "American Dessert the Dragon",
      "Dessert"
    ),
    new Food1(
      "https://www.shutterstock.com/image-photo/peace-layered-souffle-dessert-chocolate-260nw-450399007.jpg",
      "The ShutterStock Canadian Dessert",
      "Dessert"
    ),
    new Food1(
      "https://i.pinimg.com/736x/5f/41/fe/5f41fe2af31b4c43445246b9f1e6acc5.jpg",
      "The Chocoburger Spain Dessert",
      "Dessert"
    ),
  ],
};
