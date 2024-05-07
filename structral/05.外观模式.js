// 外观模式 Facade Pattern:

// 意图：外观模式为子系统中的一组接口提供一个统一的高层接口，简化了该子系统的使用。

// 主要解决：降低访问复杂系统的内部子系统时的复杂度，简化客户端之间的接口。

// 何时使用： 1、客户端不需要知道系统内部的复杂联系，整个系统只需提供一个"接待员"即可。 2、定义系统的入口。

// 如何解决：客户端不与系统耦合，外观类与系统耦合。

// 关键代码：在客户端和复杂系统之间再加一层，这一层将调用顺序、依赖关系等处理好。

// 应用实例：去医院看病，可能要去挂号、门诊、划价、取药，让患者或患者家属觉得很复杂，如果有提供接待人员，只让接待人员来处理，就很方便。

// 优点： 1、减少系统相互依赖。 2、提高灵活性。 3、提高了安全性。

// 缺点：不符合开闭原则，如果要改东西很麻烦，继承重写都不合适。

// 使用场景： 1、为复杂的模块或子系统提供外界访问的模块。 2、子系统相对独立。 3、预防低水平人员带来的风险。

// 注意事项：在层次化结构中，可以使用外观模式定义系统中每一层的入口。

// 外观模式涉及以下核心角色：

// 外观（Facade）:
// 提供一个简化的接口，封装了系统的复杂性。外观模式的客户端通过与外观对象交互，而无需直接与系统的各个组件打交道。

// 子系统（Subsystem）:
// 由多个相互关联的类组成，负责系统的具体功能。外观对象通过调用这些子系统来完成客户端的请求。

// 客户端（Client）:
// 使用外观对象来与系统交互，而不需要了解系统内部的具体实现。

class SubSystemOne {
    method1() {
      console.log('子系统1的方法1被调用');
    }
  }
  
  class SubSystemTwo {
    method2() {
      console.log('子系统2的方法2被调用');
    }
  }
  
  class Facade {
    subsystemOne;
    subsystemTwo;
    constructor() {
      this.subsystemOne = new SubSystemOne();
      this.subsystemTwo = new SubSystemTwo();
    }
   //facadeMethod...
}