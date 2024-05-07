//策略模式 Strategy Pattern

// 意图：定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。

// 主要解决：在有多种算法相似的情况下，使用 if...else 所带来的复杂和难以维护。

// 何时使用：一个系统有许多许多类，而区分它们的只是他们直接的行为。

// 如何解决：将这些算法封装成一个一个的类，任意地替换。

// 关键代码：实现同一个接口。

// 应用实例： 
// 1、诸葛亮的锦囊妙计，每一个锦囊就是一个策略。 
// 2、旅行的出游方式，选择骑自行车、坐汽车，每一种旅行方式都是一个策略。 

// 优点： 1、算法可以自由切换。 2、避免使用多重条件判断。 3、扩展性良好。

// 缺点： 1、策略类会增多。 2、所有策略类都需要对外暴露。

// 使用场景： 
// 1、如果在一个系统里面有许多类，它们之间的区别仅在于它们的行为，那么使用策略模式可以动态地让一个对象在许多行为中选择一种行为。 
// 2、一个系统需要动态地在几种算法中选择一种。 3、如果一个对象有很多的行为，如果不用恰当的模式，这些行为就只好使用多重的条件选择语句来实现。

// 注意事项：如果一个系统的策略多于四个，就需要考虑使用混合模式，解决策略类膨胀的问题。

// 策略模式包含以下几个核心角色：

// 环境（Context）：维护一个对策略对象的引用，负责将客户端请求委派给具体的策略对象执行。环境类可以通过依赖注入、简单工厂等方式来获取具体策略对象。
// 抽象策略（Abstract Strategy）：定义了策略对象的公共接口或抽象类，规定了具体策略类必须实现的方法。
// 具体策略（Concrete Strategy）：实现了抽象策略定义的接口或抽象类，包含了具体的算法实现。
// 策略模式通过将算法与使用算法的代码解耦，提供了一种动态选择不同算法的方法。客户端代码不需要知道具体的算法细节，而是通过调用环境类来使用所选择的策略。

class Strategy {
    calculatePrice(price) {
        throw new Error('Subclasses must implement calculatePrice().');
    }
}

class NormalStrategy extends Strategy {
    calculatePrice(price) {
        return price;
    }
}

class DiscountStrategy extends Strategy {
    constructor(discountRate) {
        super();
        this.discountRate = discountRate;
    }

    calculatePrice(price) {
        return price * (1 - this.discountRate);
    }
}

class ShoppingCart {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculateTotalPrice(items) {
        let totalPrice = 0;
        for (const item of items) {
            totalPrice += this.strategy.calculatePrice(item.price);
        }
        return totalPrice;
    }
}

let normalShoppingCart = new ShoppingCart(new NormalStrategy());
let discountedShoppingCart = new ShoppingCart(new DiscountStrategy(0.1));

let items = [{ price: 100 }, { price: 200 }, { price: 300 }];
console.log(normalShoppingCart.calculateTotalPrice(items)); // 输出 600

discountedShoppingCart.setStrategy(new DiscountStrategy(0.2));
console.log(discountedShoppingCart.calculateTotalPrice(items)); // 输出 480
