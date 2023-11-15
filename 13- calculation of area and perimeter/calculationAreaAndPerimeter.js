class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error('Не удается создать экземпляр абстрактного класса');
        }
    }

    // Метод для расчета площади
    getArea(){
        throw new Error('Метод getArea должен быть реализован');
    }
    // Метод для расчета периметра
    getPerimeter(){
        throw new Error('Метод getPerimeter должен быть реализован');
    }
}

// Площадь и периметр прямоугольника
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getArea() {
        const w = this.width;
        const h = this.height;
        return w * h
    }
    getPerimeter() {
        const w = this.width;
        const h = this.height;
        return 2 * (w + h);
    }
}

// Площадь и периметр круга
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        const r = this.radius
        return Math.PI * r * r;
    }
    getPerimeter() {
        const r = this.radius
        return 2 * Math.PI * r;
    }
}


// Площадь и периметр треугольника
class Triangle extends Shape {
    constructor(side1, side2, side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getArea() {
        const a = this.side1;
        const b = this.side2;
        const c = this.side3;
        // Формулу Герона для расчета площади треугольника
        const p = (a + b + c) / 2
        return Math.sqrt(p * (p - a) * (p - b) * (p - c))
    }
    getPerimeter() {
        const a = this.side1;
        const b = this.side2;
        const c = this.side3;
        return a + b + c;
    }
}

const rectangle = new Rectangle(5, 10);
console.log('Are', rectangle.getArea());
console.log('Perimeter', rectangle.getPerimeter());

const circle = new Circle(5);
console.log('Are', circle.getArea());
console.log('Perimeter', circle.getPerimeter());

const triangle = new Triangle(5, 10, 15);
console.log('Are', triangle.getArea());
console.log('Perimeter', triangle.getPerimeter());

//13.	Задача на классы и наследование: создайте базовый класс Shape (фигура), который имеет методы для расчета площади и периметра.
//      Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник.
//      Реализуйте методы расчета площади и периметра для каждой фигуры.