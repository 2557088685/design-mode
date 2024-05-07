// 组合模式 Composite Pattern:

// 意图：将对象组合成树形结构以表示"部分-整体"的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。

// 主要解决：它在我们树型结构的问题中，模糊了简单元素和复杂元素的概念，客户程序可以像处理简单元素一样来处理复杂元素，从而使得客户程序与复杂元素的内部结构解耦。

// 何时使用：
// 1、您想表示对象的部分 - 整体层次结构（树形结构）。
// 2、您希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象。

// 如何解决：树枝和叶子实现统一接口，树枝内部组合该接口。

// 关键代码：树枝内部组合该接口，并且含有内部属性 List，里面放 Component。

// 应用实例： 1、算术表达式包括操作数、操作符和另一个操作数，其中，另一个操作数也可以是操作数、操作符和另一个操作数。 2、在 JAVA AWT 和 SWING 中，对于 Button 和 Checkbox 是树叶，Container 是树枝。

// 优点： 1、高层模块调用简单。 2、节点自由增加。

// 缺点：在使用组合模式时，其叶子和树枝的声明都是实现类，而不是接口，违反了依赖倒置原则。

// 使用场景：部分、整体场景，如树形菜单，文件、文件夹的管理。

// 注意事项：定义时为具体类。

// 组合模式的核心角色包括：

// 组件（Component）:

// 定义了组合中所有对象的通用接口，可以是抽象类或接口。它声明了用于访问和管理子组件的方法，包括添加、删除、获取子组件等。
// 叶子节点（Leaf）:

// 表示组合中的叶子节点对象，叶子节点没有子节点。它实现了组件接口的方法，但通常不包含子组件。
// 复合节点（Composite）:

// 表示组合中的复合对象，复合节点可以包含子节点，可以是叶子节点，也可以是其他复合节点。它实现了组件接口的方法，包括管理子组件的方法。
// 客户端（Client）:

// 通过组件接口与组合结构进行交互，客户端不需要区分叶子节点和复合节点，可以一致地对待整体和部分。

class Component {
    operation() {
        return '默认组件操作';
    }

    add(component) { }
    remove(component) { }
}

class Leaf extends Component {
    operation() {
        return '叶子节点操作';
    }
}

class Composite extends Component {
    children = [];

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        const index = this.children.indexOf(component);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    operation() {
        let result = '';
        for (const child of this.children) {
            result += child.operation();
        }
        return `复合组件操作: ${result}`;
    }
}

// 使用
let leaf = new Leaf();
console.log(leaf.operation()); // 输出："叶子节点操作"

let composite = new Composite();
composite.add(leaf);
console.log(composite.operation()); // 输出："复合组件操作: 叶子节点操作"
