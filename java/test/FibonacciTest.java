import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class FibonacciTest {

  private Fibonacci fibonacci;

  @Before
  public void setup() {
    fibonacci = new Fibonacci();
  }

  @Test
  public void fib1() {
    assertEquals(1, fibonacci.calc(1));
  }

  @Test
  public void fib2() {
    assertEquals(1, fibonacci.calc(2));
  }

  @Test
  public void fib3() {
    assertEquals(2, fibonacci.calc(3));
  }

  @Test
  public void fib4() {
    assertEquals(3, fibonacci.calc(4));
  }

  @Test
  public void fib5() {
    assertEquals(5, fibonacci.calc(5));
  }

  @Test
  public void fib6() {
    assertEquals(8, fibonacci.calc(6));
  }

  @Test
  public void fib90() {
    assertEquals(2880067194370816120L, fibonacci.calc(90));
  }
}
