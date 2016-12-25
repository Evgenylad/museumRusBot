const botBuilder = require('claudia-bot-builder');
const telegramTemplate = require('claudia-bot-builder').telegramTemplate;

module.exports = botBuilder(function (message, originalApiRequest) {
  if (message.text === '/start')
    return [
      'Добрый день! Я помогу вам выбрать музей и купить электронный билет. Например, прямо сейчас есть отличное предложение:',
      new telegramTemplate.Photo('https://s5.postimg.org/5foo9o0l3/Исторический.jpg')
        .get(),
      new telegramTemplate.Venue(55.7537523, 37.6203281, 'Исторический музей', 'Билеты: 400 - 700 рублей')
        .addInlineKeyboard([
          [{
            text: 'Купить',
            callback_data: 'BUY'
          }]
        ])
        .get(),
      new telegramTemplate.Text('Если хотите посмотреть другие варианты, воспользуйтесь клавиатурой')
        .addReplyKeyboard([['Показать другие варианты'], ['Выбрать по категории']], true)
        .get()
    ];

  if (message.text === 'Купить')
    return new telegramTemplate.Text('Вы выбрали сходить в <Название>, <Дата>.')
      .addReplyKeyboard([['Оформить N билетов'],['Добавить билетов']])
      .get()

  if (message.text === 'Показать другие варианты') {
      return [
        new telegramTemplate.Photo('https://s5.postimg.org/k2u852ol3/Космонавтики.jpg', 'Музей Космонавтики')
          .addInlineKeyboard([
            [{
              text: 'Купить',
              callback_data: 'BUY'
            }]
          ])
          .get(),
        new telegramTemplate.Photo('https://s5.postimg.org/hmser86if/Москвы.jpg', 'Музей Москвы')
          .addInlineKeyboard([
            [{
              text: 'Купить',
              callback_data: 'BUY'
            }]
          ])
          .get()
        ]
    }

  if (message.text === 'Выбрать по категории') {
    return new telegramTemplate.Text('Давайте выберем музей по категории?')
      .addReplyKeyboard([['Исторические'],['Искусство'], ['Развлекательные']])
      .get()
  }

  if (message.text === 'Искусство') {
    return [
      new telegramTemplate.Photo('https://s5.postimg.org/bpt4o5erb/Голицыных.jpg', 'Голицыных')
        .addInlineKeyboard([
          [{
            text: 'Купить',
            callback_data: 'BUY'
          }]
        ])
        .get(),
      new telegramTemplate.Photo('https://s5.postimg.org/436z7s35j/Царицыно.jpg', 'Царицыно')
        .addInlineKeyboard([
          [{
            text: 'Купить',
            callback_data: 'BUY'
          }]
        ])
        .get(),
      new telegramTemplate.Text('Еще варианты?')
        .addReplyKeyboard([['Показать другие варианты'], ['Выбрать по категории']])
        .get()
      ]
  }

  if (message.text === 'Исторические') {
    return [
      new telegramTemplate.Photo('https://s5.postimg.org/i23ok8sfr/Археологии.jpg', 'Археологии')
        .addInlineKeyboard([
          [{
            text: 'Купить',
            callback_data: 'BUY'
          }]
        ])
        .get(),
      new telegramTemplate.Photo('https://s5.postimg.org/o1rfnwd87/Английский_двор.jpg', 'Английский двор')
        .addInlineKeyboard([
          [{
            text: 'Купить',
            callback_data: 'BUY'
          }]
        ])
        .get(),
      new telegramTemplate.Text('Еще варианты?')
        .addReplyKeyboard([['Показать другие варианты'], ['Выбрать по категории']])
        .get()
      ]
  }

}, { platforms: ['telegram'] });
