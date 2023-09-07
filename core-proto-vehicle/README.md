# Train 🚄 or Truck 🚚

![sceenshot](readme-assets/truck.jpeg)

### Release 0

Итак, добро пожаловать в мир поездов и грузовиков.
Сейчас тут все хаотично и каждый думает только о себе и своей функции-конструкторе. Пора навести порядок и оптимизировать процесс! 💪👮🤘

Тебе надо познакомиться с файлом `train-or-truck` и с тестами в папке `spec`.

Возможно, ты уже заметил, что функция-конструктор `Vehicle` нигде не применяется. В то время как `Train` и `Truck` повторяют друг друга и перенагруженны свойствами и методами.

```js
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}
```

Тебе нужно решить какие свойства и методы уникальны и нужны только в конкретной функции-конструкторе, а какие общие для `Train` и `Truck`.

### Release 1

Время действовать✨

В функции-конструкторе `Vehicle` тебе нужно назначить методы и свойства общие для `Train` и `Truck`. И, соответственно, убрать лишнее из `Train` и `Truck`.

### Release 2

Супер!
Теперь давай разберемся с наследованием.
Тебе надо сделать наследование. Определись что должно быть в `prototype`, каким должен быть `constuctor`.
