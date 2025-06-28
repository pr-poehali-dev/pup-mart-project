const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-500 to-red-700 py-16 px-4 text-center">
      <div className="container mx-auto">
        <div className="animate-bounce mb-8">
          <span className="text-6xl">🎪</span>
        </div>

        <h1 className="heading-font text-5xl md:text-7xl mb-6 drop-shadow-lg text-center mx-0 text-[#ffffff]">
          Добро пожаловать в Пуп Март
        </h1>

        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-semibold">
          Мы продаём бумажные коллекционные игрушки сделанные своими руками!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg bounce-hover shadow-lg hover:shadow-xl">
            🎁 Открыть сюрприз!
          </button>
          <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg bounce-hover shadow-lg hover:shadow-xl">
            📦 Посмотреть коллекцию
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-2xl mb-2">🚚</div>
            <div className="font-semibold">Быстрая доставка</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-2xl mb-2">⭐</div>
            <div className="font-semibold">Система рейтингов</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-2xl mb-2">📹</div>
            <div className="font-semibold">Видео-обзоры</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-semibold">Программа лояльности</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
