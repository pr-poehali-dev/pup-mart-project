import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-xl">🎁</span>
              </div>
              <h3 className="heading-font text-2xl text-red-300">Пуп Март</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Мир детских сюрпризов и радости. Создаем незабываемые моменты для
              ваших малышей!
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Instagram"
                className="w-6 h-6 text-gray-400 hover:text-red-300 cursor-pointer transition-colors"
              />
              <Icon
                name="MessageCircle"
                className="w-6 h-6 text-gray-400 hover:text-red-300 cursor-pointer transition-colors"
              />
              <Icon
                name="Youtube"
                className="w-6 h-6 text-gray-400 hover:text-red-300 cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Покупателям</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-red-300 transition-colors">
                  Как заказать
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300 transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300 transition-colors">
                  Возврат товара
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-red-300 transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300 transition-colors">
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300 transition-colors">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-300 transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" className="w-4 h-4" />
                <span>8 (800) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" className="w-4 h-4" />
                <span>hello@pupmart.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" className="w-4 h-4" />
                <span>Ежедневно 9:00-21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 Пуп Март. Все права защищены. Создано с ❤️ для детей и
            их родителей.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
