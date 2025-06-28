import ProductCard from "./ProductCard";

const PopularProducts = () => {
  const products = [
    {
      title: "Космические Приключения",
      price: "299₽",
      rating: 5,
      image: "space-toy.jpg",
      emoji: "🚀",
      color: "bg-blue-200",
    },
    {
      title: "Принцессы Сказок",
      price: "349₽",
      rating: 5,
      image: "princess-toy.jpg",
      emoji: "👸",
      color: "bg-pink-200",
    },
    {
      title: "Динозавры Юрского",
      price: "279₽",
      rating: 4,
      image: "dino-toy.jpg",
      emoji: "🦕",
      color: "bg-green-200",
    },
    {
      title: "Морские Обитатели",
      price: "319₽",
      rating: 5,
      image: "sea-toy.jpg",
      emoji: "🐙",
      color: "bg-cyan-200",
    },
    {
      title: "Лесные Друзья",
      price: "259₽",
      rating: 4,
      image: "forest-toy.jpg",
      emoji: "🦊",
      color: "bg-orange-200",
    },
    {
      title: "Супергерои",
      price: "399₽",
      rating: 5,
      image: "hero-toy.jpg",
      emoji: "🦸",
      color: "bg-purple-200",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-font text-4xl md:text-5xl text-gray-800 mb-4">
            🔥 Популярные Сюрпризы
          </h2>
          <p className="text-xl text-gray-600">
            Самые любимые коллекции наших маленьких покупателей!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
