// 建造者模式Builder Pattern:

// 意图：将一个复杂的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。

// 主要解决：
// 主要解决在软件系统中，有时候面临着"一个复杂对象"的创建工作，其通常由各个部分的子对象用一定的算法构成；
// 由于需求的变化，这个复杂对象的各个部分经常面临着剧烈的变化，但是将它们组合在一起的算法却相对稳定。

// 何时使用：一些基本部件不会变，而其组合经常变化的时候。

// 如何解决：将变与不变分离开。

// 关键代码：建造者：创建和提供实例，导演：管理建造出来的实例的依赖关系。

// 应用实例：
// 就如同组装一台电脑，你可以选择不同配置的CPU、内存、硬盘等配件，最后由装机员按照你的配置清单来组装。
// 组装过程（Builder）是固定的，但最终产出的电脑配置各异。

// 优点：
// 分离构建过程和表示，使得构建过程更加灵活，可以构建不同的表示。
// 可以更好地控制构建过程，隐藏具体构建细节。
// 代码复用性高，可以在不同的构建过程中重复使用相同的建造者。

// 缺点：
// 如果产品的属性较少，建造者模式可能会导致代码冗余。
// 建造者模式增加了系统的类和对象数量。、

// 使用场景：
// 1、需要生成的对象具有复杂的内部结构。
// 2、需要生成的对象内部属性本身相互依赖。

// 建造者模式在创建复杂对象时非常有用，特别是当对象的构建过程涉及多个步骤或参数时。它可以提供更好的灵活性和可维护性，同时使得代码更加清晰可读。
// 注意事项：与工厂模式的区别是：建造者模式更加关注与零件装配的顺序。

class ComputerBuilder {
    constructor() {
        this.computer = {
            cpu: '',
            memory: '',
            hardDrive: ''
        }
    }
    setCPU(cpu) {
        this.computer.cpu = cpu;
        return this;
    }
    setMemory(memory) {
        this.computer.memory = memory;
        return this;
    }
    setHardDrive(hardDrive) {
        this.computer.hardDrive = hardDrive;
        return this;
    }
    build() {
        return this.computer;
    }
}

class DesktopComputerBuilder extends ComputerBuilder {
    //添加桌面电脑特有的一些内容
}

const desktopBuilder = new DesktopComputerBuilder().setCPU('Intel Core i7')
    .setMemory('32GB DDR4')
    .setHardDrive('1TB SSD');

const computer = desktopBuilder.build();