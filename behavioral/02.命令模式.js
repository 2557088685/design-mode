//命令模式 Command Pattern

// 意图：将一个请求封装成一个对象，从而使您可以用不同的请求对客户进行参数化。

// 主要解决：在软件系统中，行为请求者与行为实现者通常是一种紧耦合的关系，但某些场合，比如需要对行为进行记录、
//          撤销或重做、事务等处理时，这种无法抵御变化的紧耦合的设计就不太合适。

// 何时使用：在某些场合，比如要对行为进行"记录、撤销/重做、事务"等处理，这种无法抵御变化的紧耦合是不合适的。
//          在这种情况下，如何将"行为请求者"与"行为实现者"解耦？将一组行为抽象为对象，可以实现二者之间的松耦合。

// 如何解决：通过调用者调用接受者执行命令，顺序：调用者→命令→接受者。

// 关键代码：定义三个角色：1、received 真正的命令执行对象 2、Command 3、invoker 使用命令对象的入口

// 应用实例：struts 1 中的 action 核心控制器 ActionServlet 只有一个，相当于 Invoker，
//          而模型层的类会随着不同的应用有不同的模型类，相当于具体的 Command。

// 优点： 1、降低了系统耦合度。 2、新的命令可以很容易添加到系统中去。

// 缺点：使用命令模式可能会导致某些系统有过多的具体命令类。

// 使用场景：认为是命令的地方都可以使用命令模式，比如： 1、GUI 中每一个按钮都是一条命令。 2、模拟 CMD。

// 注意事项：系统需要支持命令的撤销（Undo）操作和恢复（Redo）操作，也可以考虑使用命令模式，见命令模式的扩展。

// 主要涉及到以下几个核心角色：

// 命令（Command）:
// 定义了执行操作的接口，通常包含一个 execute 方法，用于调用具体的操作。

// 具体命令（ConcreteCommand）:
// 实现了命令接口，负责执行具体的操作。它通常包含了对接收者的引用，通过调用接收者的方法来完成请求的处理。

// 接收者（Receiver）:
// 知道如何执行与请求相关的操作，实际执行命令的对象。

// 调用者/请求者（Invoker）:
// 发送命令的对象，它包含了一个命令对象并能触发命令的执行。调用者并不直接处理请求，而是通过将请求传递给命令对象来实现。

// 客户端（Client）:
// 创建具体命令对象并设置其接收者，将命令对象交给调用者执行。

class Receiver {
  executeCommand() {
    console.log('接收者执行命令');
  }
}

class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    this.receiver.executeCommand();
  }

  undo() {
    console.log('撤销命令');
  }
}

class Invoker {
  command = null;

  setCommand(command) {
    this.command = command;
  }

  invoke() {
    if (this.command) {
      this.command.execute();
    }
  }

  undoInvoke() {
    if (this.command) {
      this.command.undo();
    }
  }
}

let receiver = new Receiver();
let command = new Command(receiver);
let invoker = new Invoker();
invoker.setCommand(command);
invoker.invoke(); // 输出 "接收者执行命令"
invoker.undoInvoke(); // 输出 "撤销命令"
