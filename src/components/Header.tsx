import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎁</span>
            </div>
            <h1 className="heading-font text-3xl text-red-600">Пуп Март</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 font-semibold transition-colors"
            >
              Игрушки
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 font-semibold transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 font-semibold transition-colors"
            >
              Доставка
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-600 font-semibold transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Icon
                name="ShoppingCart"
                className="w-6 h-6 text-gray-700 hover:text-red-600 cursor-pointer transition-colors"
              />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
            <Icon
              name="Menu"
              className="w-6 h-6 text-gray-700 md:hidden cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
