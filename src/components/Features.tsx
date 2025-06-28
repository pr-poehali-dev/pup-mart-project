const Features = () => {
  const features = [
    {
      emoji: "⭐",
      title: "Система Рейтингов",
      description:
        "Честные отзывы от других родителей помогут выбрать лучшие игрушки для вашего малыша",
      color: "bg-white border-red-300",
    },
    {
      emoji: "📹",
      title: "Видео-Обзоры Распаковки",
      description:
        "Смотрите, как другие дети радуются новым игрушкам! Настоящие эмоции, без постановки",
      color: "bg-white border-red-300",
    },
    {
      emoji: "🎯",
      title: "Программа Лояльности",
      description:
        "Копите звездочки за покупки и обменивайте на скидки и эксклюзивные сюрпризы",
      color: "bg-red-200 border-red-400",
    },
    {
      emoji: "🎪",
      title: "Тематические Коллекции",
      description:
        "Каждый месяц новая тема: от пиратов до единорогов, всегда есть что-то особенное",
      color: "bg-red-50 border-red-200",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-font text-4xl md:text-5xl text-red-800 mb-4">
            ✨ Почему Пуп Март?
          </h2>
          <p className="text-xl text-red-600">
            Мы делаем каждую покупку незабываемым приключением!
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
