// 装饰器模式 Decorator Pattern:

// 意图：动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。

// 主要解决：一般的，我们为了扩展一个类经常使用继承方式实现，由于继承为类引入静态特征，并且随着扩展功能的增多，子类会很膨胀。

// 何时使用：在不想增加很多子类的情况下扩展类。

// 如何解决：将具体功能职责划分，同时继承装饰者模式。

// 关键代码： 1、Component 类充当抽象角色，不应该具体实现。 2、修饰类引用和继承 Component 类，具体扩展类重写父类方法。

// 应用实例：
// 1、孙悟空有 72 变，当他变成"庙宇"后，他的根本还是一只猴子，但是他又有了庙宇的功能。 
// 2、不论一幅画有没有画框都可以挂在墙上，但是通常都是有画框的，并且实际上是画框被挂在墙上。在挂在墙上之前，
//    画可以被蒙上玻璃，装到框子里；这时画、玻璃和画框形成了一个物体。

// 优点：装饰类和被装饰类可以独立发展，不会相互耦合，装饰模式是继承的一个替代模式，装饰模式可以动态扩展一个实现类的功能。

// 缺点：多层装饰比较复杂。

// 使用场景： 1、扩展一个类的功能。 2、动态增加功能，动态撤销。

// 注意事项：可代替继承。

// 装饰器模式包含以下几个核心角色：

// 抽象组件（Component）：定义了原始对象和装饰器对象的公共接口或抽象类，可以是具体组件类的父类或接口。
// 具体组件（Concrete Component）：是被装饰的原始对象，它定义了需要添加新功能的对象。
// 抽象装饰器（Decorator）：继承自抽象组件，它包含了一个抽象组件对象，并定义了与抽象组件相同的接口，同时可以通过组合方式持有其他装饰器对象。
// 具体装饰器（Concrete Decorator）：实现了抽象装饰器的接口，负责向抽象组件添加新的功能。具体装饰器通常会在调用原始对象的方法之前或之后执行自己的操作。
// 装饰器模式通过嵌套包装多个装饰器对象，可以实现多层次的功能增强。每个具体装饰器类都可以选择性地增加新的功能，同时保持对象接口的一致性。

// 定义一个装饰器基类
class Decorator {
    constructor(component) {
        this._component = component;
    }

    operation() {
        return this._component.operation();
    }
}

// 具体装饰器类
class ConcreteDecoratorA extends Decorator {
    operation() {
        console.log('在操作之前执行的具体装饰器A的特定代码');
        let result = super.operation(); // 调用父类的操作
        console.log('在操作之后执行的具体装饰器A的特定代码');
        return result;
    }
}

// 具体装饰器类
class ConcreteDecoratorB extends Decorator {
    operation() {
        console.log('在操作之前执行的具体装饰器B的特定代码');
        let result = super.operation(); // 调用父类的操作
        console.log('在操作之后执行的具体装饰器B的特定代码');
        return result;
    }
}

// 组件类
class Component {
    operation() {
        console.log('原始操作代码');
    }
}

// 创建一个组件实例
const component = new Component();

// 创建装饰器实例并将组件包装起来
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

// 调用被装饰过的操作
decoratorB.operation();