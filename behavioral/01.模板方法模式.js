// 模板方法模式 Template Method Pattern

// 意图：定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。

// 主要解决：一些方法通用，却在每一个子类都重新写了这一方法。

// 何时使用：有一些通用的方法。

// 如何解决：将这些通用算法抽象出来。

// 关键代码：在抽象类实现，其他步骤在子类实现。

// 应用实例： 1、在造房子的时候，地基、走线、水管都一样，只有在建筑的后期才有加壁橱加栅栏等差异。 2、西游记里面菩萨定好的 81 难，这就是一个顶层的逻辑骨架。 

// 优点： 1、封装不变部分，扩展可变部分。 2、提取公共代码，便于维护。 3、行为由父类控制，子类实现。

// 缺点：每一个不同的实现都需要一个子类来实现，导致类的个数增加，使得系统更加庞大。

// 使用场景： 1、有多个子类共有的方法，且逻辑相同。 2、重要的、复杂的方法，可以考虑作为模板方法。

class AbstractClass {
    templateMethod() {
      this.baseOperation1();
      this.optionalOperation1(); // 子类可覆盖此方法
      this.requiredOperation();
      this.optionalOperation2(); // 子类可覆盖此方法
    }
  
    baseOperation1() {
      console.log('基本操作1');
    }
  
    requiredOperation() {
      console.log('必须执行的操作');
    }
  
    optionalOperation1() { /* 子类可覆盖 */ }
    optionalOperation2() { /* 子类可覆盖 */ }
  }
  
  class ConcreteClass extends AbstractClass {
    optionalOperation1() {
      console.log('具体类实现的操作1');
    }
  
    optionalOperation2() {
      console.log('具体类实现的操作2');
    }
  }
  
  let concrete = new ConcreteClass();
  concrete.templateMethod();
