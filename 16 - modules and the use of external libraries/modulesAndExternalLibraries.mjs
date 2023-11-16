import moment from 'moment'

export const modulesWorkDate= (date, format) => {
    return moment(date).format(format);
}


modulesWorkDate()

//16.	Задача на модули и использование внешних библиотек: напишите модуль, который экспортирует функцию для работы с датами.
//      Внутри модуля используйте внешнюю библиотеку Moment.js для удобной работы с датами.