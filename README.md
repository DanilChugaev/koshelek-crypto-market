# koshelek-crypto-market
## Тестовое задание

Разработать приложение на Vue.js по заданию ниже
 + по возможности использовать VUE 3 версии.

Результат прислать в виде двух ссылок:
 - На репозиторий с кодом.
 - Ссылку c результатом на GitHub Pages или Firebase Hosting.

Дополнительно (если успеваете):
 - Добавить SSR.(Заливать результат в облако тогда не требуется).

### --- ПРИЛОЖЕНИЕ ---

Разработать адаптивное приложение для десктоп и мобильных платформ, состоящие из:
 + Хедера. В хедере добавить произвольный логотип и меню для двух страниц(Настройки / Order Book).
 + Области для отрисовки страниц. Страницы должны подгружаться динамически отдельными чанками по мере необходимости.
 - Бизнес логики, работы с api и данными, вынесенными в стор и разбитыми на модули.
 + В качестве ui библиотки желательно использовать vuetify, именование классов если потребуется реализовать по БЭМу.
   
### --- ДАННЫЕ ---

 - В качестве источника данных необходимых для реализации страниц используем api Binance. 
 - А именно 2 метода: получить биржевой стакан по определенной валютной паре по REST и подписаться на обновления стакана по WS. 

(См. раздел Diff. Depth Stream в документации: https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md).

Обратить внимание на
   https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#how-to-manage-a-local-order-book-correctly.

Цены должны последовательно в стакане находиться + консистентность соблюдать

### --- СТРАНИЦЫ ---

#### Страница с настройкой валютной пары и лог изменений.

 - Реализовать селект с выбором валютной пары (Захардкодить список из BTCUSDT, BNBBTC, ETHBTC. По умолчанию выбрана BTCUSDT).
 - При выборе обновляем данные в сторе(метод rest) и подключаемся по ws для обновления данных по валютной паре. 
 - Блок с логом наших действий по изменение валютной пары. С какой на какую мы изменили и во сколько времени.

*Пример ордер бука и его правильной работы на https://www.binance.com/ru/trade/BTC_USDT

#### Страница с таблице(Order Book).
 - Выводим две таблицы рядом для двух массивов(Bids и Asks) с колонками: Price, Quantity, Total(Price * Quantity).
 - В мобильной версии отображать только две колонки(Price, Total).
 - Селект с выбором кол-ва элементов в таблице(100, 500, 1000).
 - Требования к таблицам: на десктопе и на мобилке вместе две таблицы не должны превышать высоту экрана устройства 
   - Скрол должен быть внутри таблиц.
   - При скроле шапка с разбивкой по колонкам должна оставаться на месте.
 - С точки зрения стиля (цвета, скругления, отступы) всё на собственный взгляд, но что бы выглядело опрятно.
