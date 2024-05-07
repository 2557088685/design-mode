//职责链模式 Chain of Responsibility Pattern

// 意图：避免请求发送者与接收者耦合在一起，让多个对象都有可能接收请求，将这些对象连接成一条链，并且沿着这条链传递请求，直到有对象处理它为止。

// 主要解决：职责链上的处理者负责处理请求，客户只需要将请求发送到职责链上即可，无须关心请求的处理细节和请求的传递，所以职责链将请求的发送者和请求的处理者解耦了。

// 何时使用：在处理消息的时候以过滤很多道。

// 如何解决：拦截的类都实现统一接口。

// 关键代码：Handler 里面聚合它自己，在 HandlerRequest 里判断是否合适，如果没达到条件则向下传递，向谁传递之前 set 进去。

// 应用实例： 1、红楼梦中的"击鼓传花"。 2、JS 中的事件冒泡。 

// 优点： 
// 1、降低耦合度。它将请求的发送者和接收者解耦。 
// 2、简化了对象。使得对象不需要知道链的结构。 
// 3、增强给对象指派职责的灵活性。通过改变链内的成员或者调动它们的次序，允许动态地新增或者删除责任。 
// 4、增加新的请求处理类很方便。

// 缺点： 
// 1、不能保证请求一定被接收。 
// 2、系统性能将受到一定影响，而且在进行代码调试时不太方便，可能会造成循环调用。 
// 3、可能不容易观察运行时的特征，有碍于除错。

// 使用场景： 
// 1、有多个对象可以处理同一个请求，具体哪个对象处理该请求由运行时刻自动确定。 
// 2、在不明确指定接收者的情况下，向多个对象中的一个提交一个请求。 
// 3、可动态指定一组对象处理请求。

// 主要涉及到以下几个核心角色：

// 抽象处理者（Handler）:
// 定义一个处理请求的接口，通常包含一个处理请求的方法（如 handleRequest）和一个指向下一个处理者的引用（后继者）。

// 具体处理者（ConcreteHandler）:
// 实现了抽象处理者接口，负责处理请求。如果能够处理该请求，则直接处理；否则，将请求传递给下一个处理者。

// 客户端（Client）:
// 创建处理者对象，并将它们连接成一条责任链。通常，客户端只需要将请求发送给责任链的第一个处理者，无需关心请求的具体处理过程。

class Approver {
    constructor(successor) {
        this.successor = successor;
    }

    processRequest(request) {
        if (this.canApprove(request)) {
            console.log(`${this.name} approved the request.`);
        } else if (this.successor) {
            this.successor.processRequest(request);
        } else {
            console.log('No one can approve this request.');
        }
    }

    canApprove(request) {
        throw new Error('Subclasses must implement canApprove().');
    }
}

class Manager extends Approver {
    constructor(successor) {
        super(successor);
        this.name = 'Manager';
    }

    canApprove(request) {
        return request <= 5; // 经理只能批准5天内的请假申请
    }
}

class Director extends Approver {
    constructor(successor) {
        super(successor);
        this.name = 'Director';
    }

    canApprove(request) {
        return request <= 10 && request > 5; // 总监只能批准5-10天内的请假申请
    }
}

class CEO extends Approver {
    constructor() {
        super(null);
        this.name = 'CEO';
    }

    canApprove(request) {
        return request <= 15 && request > 10; // 总裁可以批准10-15天内的请假申请
    }
}

let ceo = new CEO();
let director = new Director(ceo);
let manager = new Manager(director);

manager.processRequest(3); // 输出 "Manager approved the request."
manager.processRequest(7); // 输出 "Director approved the request."
manager.processRequest(12); // 输出 "CEO approved the request."
manager.processRequest(18); // 输出 "No one can approve this request."
