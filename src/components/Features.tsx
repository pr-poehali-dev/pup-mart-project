const Features = () => {
  const features = [
    {
      emoji: "🌱",
      title: "Экологически чистые",
      description:
        "Все наши игрушки сделаны из натуральной бумаги и безопасных красок. Забота о природе и здоровье детей!",
      color: "bg-green-50 border-green-300",
    },
    {
      emoji: "🎨",
      title: "Ручная работа",
      description:
        "Каждая игрушка создается вручную с любовью и вниманием к деталям. Уникальные персонажи в каждой коробочке!",
      color: "bg-blue-50 border-blue-300",
    },
    {
      emoji: "💰",
      title: "Доступные цены",
      description:
        "Радость не должна быть дорогой! Наши цены позволяют дарить сюрпризы часто и с удовольствием.",
      color: "bg-yellow-50 border-yellow-300",
    },
    {
      emoji: "🎪",
      title: "Элемент неожиданности",
      description:
        "Никто не знает, какая игрушка попадется! Это делает каждую покупку захватывающим приключением.",
      color: "bg-purple-50 border-purple-300",
    },
  ];

  return (
    <section className="py-16 px-4 bg-red-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-font text-4xl md:text-5xl text-red-800 mb-4">
            ✨ Почему выбирают Пуп Март?
          </h2>
          <p className="text-xl text-red-600">
            Качественные бумажные игрушки, которые приносят радость!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} rounded-3xl p-8 border-4 bounce-hover`}
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="heading-font text-2xl text-red-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-red-700 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
