const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

names.forEach((name) => console.log(name));

names.forEach((name, i) => console.log(`${name} (${provinces[i]})`));

const provincesUpper = provinces.map((province) => province.toUpperCase());
console.log(provincesUpper);

const characterCounts = names.map((name) => name.length);
console.log(characterCounts);

const sortedProvinces = provinces.toSorted();
console.log(sortedProvinces);

const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteredProvinces);

const containsS = names.map((name) =>
  name.split("").some((char) => char.toLowerCase() === "s")
);

console.log(containsS);

const provinceOfIndividual = names.reduce((acc, name, i) => {
  acc[name] = provinces[i];
  return acc;
}, {});

console.log(provinceOfIndividual);

// Products

const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

console.log({
  productNames: (() => {
    const names = [];
    products.forEach((product) => {
      names.push(product.product);
    });
    return names;
  })(),
  filteredProducts: products.filter((product) => product.product.length > 5),
  productsWithPrices: products
    .filter(
      (product) =>
        typeof product.price === "number" || product.price.trim() !== ""
    )
    .map((product) => {
      product.price =
        typeof product.price === "number"
          ? product.price
          : parseFloat(product.price);
      return product;
    }),
  combinedPrice: products
    .filter(
      (product) =>
        typeof product.price === "number" || product.price.trim() !== ""
    )
    .reduce((acc, product) => acc + parseFloat(product.price), 0),
  allProductNames: products.reduce((acc, product) => {
    if (acc === "") {
      return product.product;
    } else {
      return `${acc}, ${product.product}`;
    }
  }, ""),
  highestAndLowestPrices: products
    .filter(
      (product) =>
        typeof product.price === "number" || product.price.trim() !== ""
    )
    .reduce(
      (acc, product) => {
        if (product.price > acc.highest.price) {
          acc.highest = { price: product.price, name: product.product };
        }
        if (product.price < acc.lowest.price || acc.lowest.price === 0) {
          acc.lowest = { price: product.price, name: product.product };
        }
        return acc;
      },
      { highest: { price: 0, name: "" }, lowest: { price: 0, name: "" } }
    ),
  newObjectNames: products.map((product) => {
    return Object.entries(product).reduce((acc, [key, value]) => {
      const newName = "name";
      const newPrice = "cost";

      if (key === "product") {
        acc[newName] = value;
        return acc;
      } else if (key === "price") {
        acc[newPrice] = value;
        return acc;
      }
    }, {});
  }),
});

// products.forEach((product) => console.log(product.product));

// const filteredProducts = products.filter(
//   (product) => product.product.length > 5
// );
// console.log(filteredProducts);

// const productsWithPrices = products
//   .filter(
//     (product) =>
//       typeof product.price === "number" || product.price.trim() !== ""
//   )
//   .map((product) => {
//     product.price =
//       typeof product.price === "number"
//         ? product.price
//         : parseFloat(product.price);
//     return product;
//   });

// console.log(productsWithPrices);

// const combinedPrice = productsWithPrices.reduce(
//   (acc, product) => acc + product.price,
//   0
// );
// console.log(combinedPrice);

// const allProductNames = products.reduce((acc, product) => {
//   if (acc === "") {
//     return product.product;
//   } else {
//     return `${acc}, ${product.product}`;
//   }
// }, "");
// console.log(allProductNames);

// const result = productsWithPrices.reduce(
//   (acc, product) => {
//     if (product.price > acc.highest.price) {
//       acc.highest = { price: product.price, name: product.product };
//     }
//     if (product.price < acc.lowest.price || acc.lowest.price === 0) {
//       acc.lowest = { price: product.price, name: product.product };
//     }
//     return acc;
//   },
//   { highest: { price: 0, name: "" }, lowest: { price: 0, name: "" } }
// );

// console.log(`Highest: ${result.highest.name}. Lowest: ${result.lowest.name}.`);
