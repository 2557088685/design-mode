// 享元模式 Flyweight Pattern

// 意图：运用共享技术有效地支持大量细粒度的对象。

// 主要解决：在有大量对象时，有可能会造成内存溢出，我们把其中共同的部分抽象出来，如果有相同的业务请求，直接返回在内存中已有的对象，避免重新创建。

// 何时使用： 
// 1、系统中有大量对象。 
// 2、这些对象消耗大量内存。 
// 3、这些对象的状态大部分可以外部化。
// 4、这些对象可以按照内蕴状态分为很多组，当把外蕴对象从对象中剔除出来时，每一组对象都可以用一个对象来代替。
// 5、系统不依赖于这些对象身份，这些对象是不可分辨的。

// 如何解决：用唯一标识码判断，如果在内存中有，则返回这个唯一标识码所标识的对象。

// 关键代码：用 HashMap 存储这些对象。

// 应用实例： 1、数据库的连接池。

// 优点：大大减少对象的创建，降低系统的内存，使效率提高。

// 缺点：提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，不应该随着内部状态的变化而变化，否则会造成系统的混乱。

// 使用场景： 1、系统有大量相似对象。 2、需要缓冲池的场景。

// 注意事项： 1、注意划分外部状态和内部状态，否则可能会引起线程安全问题。 2、这些类必须有一个工厂对象加以控制。

// 享元模式包含以下几个核心角色：

// 享元工厂（Flyweight Factory）:
// 负责创建和管理享元对象，通常包含一个池（缓存）用于存储和复用已经创建的享元对象。

// 抽象享元（Flyweight）:
// 定义了具体享元和非共享享元的接口，通常包含了设置外部状态的方法。

// 具体享元（Concrete Flyweight）:
// 实现了抽象享元接口，包含了内部状态和外部状态。内部状态是可以被共享的，而外部状态则由客户端传递。

// 客户端（Client）:
// 使用享元工厂获取享元对象，并通过设置外部状态来操作享元对象。客户端通常不需要关心享元对象的具体实现。

// 享元工厂类
function FlyweightFactory() {
    this.flyweights = {};
}

FlyweightFactory.prototype.getFlyweight = function (key) {
    if (!this.flyweights[key]) {
        this.flyweights[key] = new ConcreteFlyweight(key);
    }
    return this.flyweights[key];
};

// 具体享元类
function ConcreteFlyweight(key) {
    this.key = key;
}

ConcreteFlyweight.prototype.operation = function (uniqueKey) {
    console.log(`${this.key} ${uniqueKey}`);
};

// 使用
const factory = new FlyweightFactory();
const fw1 = factory.getFlyweight('shared');
const fw2 = factory.getFlyweight('shared');

fw1.operation('unique1'); // 输出: shared unique1
fw2.operation('unique2'); // 输出: shared unique2