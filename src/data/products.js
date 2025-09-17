export function fetchProducts(setProducts) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      const formatted = data.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        rating: Math.round(item.rating.rate),
        tag: item.category,
        image: item.image,
      }));
      setProducts(formatted);
    })
    .catch((err) => console.error("Erro ao buscar produtos:", err));
}
