// 桥接模式 Bridge Pattern:

// 意图：将抽象部分与实现部分分离，使它们都可以独立的变化。

// 主要解决：在有多种可能会变化的情况下，用继承会造成类爆炸问题，扩展起来不灵活。

// 何时使用：实现系统可能有多个角度分类，每一种角度都可能变化。

// 如何解决：把这种多角度分类分离出来，让它们独立变化，减少它们之间耦合。

// 关键代码：抽象类依赖实现类。

// 应用实例： 
// 1、猪八戒从天蓬元帅转世投胎到猪，转世投胎的机制将尘世划分为两个等级，即：灵魂和肉体，前者相当于抽象化，后者相当于实现化。
//    生灵通过功能的委派，调用肉体对象的功能，使得生灵可以动态地选择。
// 2、墙上的开关，可以看到的开关是抽象的，不用管里面具体怎么实现的。

// 优点： 1、抽象和实现的分离。 2、优秀的扩展能力。 3、实现细节对客户透明。

// 缺点：桥接模式的引入会增加系统的理解与设计难度，由于聚合关联关系建立在抽象层，要求开发者针对抽象进行设计与编程。

// 使用场景：
// 1、如果一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性，避免在两个层次之间建立静态的继承联系，通过桥接模式可以使它们在抽象层建立一个关联关系。
// 2、对于那些不希望使用继承或因为多层次继承导致系统类的个数急剧增加的系统，桥接模式尤为适用。
// 3、一个类存在两个独立变化的维度，且这两个维度都需要进行扩展。

// 注意事项：对于两个独立变化的维度，使用桥接模式再适合不过了。

// 以下是桥接模式的几个关键角色：
// 抽象（Abstraction）：定义抽象接口，通常包含对实现接口的引用。
// 扩展抽象（Refined Abstraction）：对抽象的扩展，可以是抽象类的子类或具体实现类。
// 实现（Implementor）：定义实现接口，提供基本操作的接口。
// 具体实现（Concrete Implementor）：实现实现接口的具体类。


// 抽象类
function Abstraction(implementation) {
    this.implementation = implementation;
}
 
Abstraction.prototype.operation = function() {
    // 这里是具体实现交由具体的实现类处理
    return "Abstraction operation with " + this.implementation.operationImpl();
};
 
// 实现类接口
function Implementation() {}
Implementation.prototype.operationImpl = function() {
    return "Implementation operation";
};
 
// 客户端代码
var impl = new Implementation();
var abs = new Abstraction(impl);
console.log(abs.operation()); // 输出：Abstraction operation with Implementation operation