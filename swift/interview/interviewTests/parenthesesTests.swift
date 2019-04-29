//
//  parenthesesTest.Swift
//

import XCTest
import interview

class interviewTests: XCTestCase {

    func testOne() {
        let balance = Parentheses.balance("()")
        XCTAssertEqual(balance, "()")
    }
    
    func testTwo() {
        let balance = Parentheses.balance("a(b)c")
        XCTAssertEqual(balance, "a(b)c")
    }
    
    func testThree() {
        let balance = Parentheses.balance(")(")
        XCTAssertEqual(balance, "")
    }

    func testFour() {
        let balance = Parentheses.balance("(((((")
        XCTAssertEqual(balance, "")
    }
    
    func testFive() {
        let balance = Parentheses.balance("(()()(")
        XCTAssertEqual(balance, "()()")
    }
    
    func testSix() {
        let balance = Parentheses.balance(")(())(")
        XCTAssertEqual(balance, "(())")
    }
    
    func testSeven() {
        let balance = Parentheses.balance(")())(()()(")
        XCTAssertEqual(balance, "()()()")
    }

}
