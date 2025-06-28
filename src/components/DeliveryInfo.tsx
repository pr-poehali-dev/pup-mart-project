const DeliveryInfo = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-500 to-red-700">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-font text-4xl md:text-5xl text-white mb-4">
            🚚 Доставка и Оплата
          </h2>
          <p className="text-xl text-white">
            Быстро, надежно, удобно — как и должно быть в мире детских грез!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center text-white">
            <div className="text-5xl mb-4">🚚</div>
            <h3 className="heading-font text-2xl mb-4">Быстрая Доставка</h3>
            <p className="text-lg mb-4">По Москве — от 1 дня</p>
            <p className="text-lg mb-4">По России — 3-5 дней</p>
            <p className="text-sm opacity-90">Бесплатно от 1500₽</p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center text-white">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="heading-font text-2xl mb-4">Способы Оплаты</h3>
            <p className="text-lg mb-2">💎 Картой онлайн</p>
            <p className="text-lg mb-2">📱 СБП и PayPal</p>
            <p className="text-lg mb-2">💰 Наличными курьеру</p>
            <p className="text-sm opacity-90">100% безопасно</p>
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
