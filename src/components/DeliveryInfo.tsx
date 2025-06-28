const DeliveryInfo = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-500 to-red-700">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-font text-4xl md:text-5xl text-white mb-4">
            📦 Бережная доставка
          </h2>
          <p className="text-xl text-white">
            Особая упаковка для хрупких бумажных игрушек — ваши сюрпризы
            прибудут в идеальном состоянии!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center text-white">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="heading-font text-2xl mb-4">Бережная упаковка</h3>
            <p className="text-lg mb-4">Многослойная защита</p>
            <p className="text-lg mb-4">Мягкие материалы</p>
            <p className="text-sm opacity-90">Игрушки не пострадают</p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center text-white">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="heading-font text-2xl mb-4">Быстрая доставка</h3>
            <p className="text-lg mb-2">🏠 По Москве — 1-2 дня</p>
            <p className="text-lg mb-2">🌍 По России — 3-7 дней</p>
            <p className="text-lg mb-2">🎁 Бесплатно от 999₽</p>
            <p className="text-sm opacity-90">Курьер и ПВЗ</p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center text-white">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="heading-font text-2xl mb-4">Гарантии</h3>
            <p className="text-lg mb-2">✅ Возврат 14 дней</p>
            <p className="text-lg mb-2">🛡️ Страховка доставки</p>
            <p className="text-lg mb-2">📞 Поддержка 24/7</p>
            <p className="text-sm opacity-90">Довольны на 100%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
