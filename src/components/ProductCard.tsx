interface ProductCardProps {
  title: string;
  price: string;
  rating: number;
  image: string;
  emoji: string;
  color: string;
}

const ProductCard = ({
  title,
  price,
  rating,
  image,
  emoji,
  color,
}: ProductCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? "text-red-500" : "text-gray-300"}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div className="toy-card">
      <div
        className={`w-full h-48 ${color} rounded-xl mb-4 flex items-center justify-center overflow-hidden`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <h3 className="heading-font text-xl text-red-800 mb-2">{title}</h3>

      <div className="star-rating mb-3">
        {renderStars(rating)}
        <span className="ml-2 text-sm text-red-600">({rating}/5)</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-red-700">{price}</span>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors">
          В корзину
        </button>
      </div>

      <div className="mt-3 text-center">
        <button className="text-red-600 text-sm hover:underline">
          📹 Посмотреть распаковку
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
