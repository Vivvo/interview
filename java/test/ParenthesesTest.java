import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ParenthesesTest {
    @Test
    public void one() {
        assertEquals("()", Parentheses.balance("()"));
    }

    @Test
    public void two() {
        assertEquals("a(b)c", Parentheses.balance("a(b)c"));
    }

    @Test
    public void three() {
        assertEquals("", Parentheses.balance(")("));
    }

    @Test
    public void four() {
        assertEquals("", Parentheses.balance("((((("));
    }

    @Test
    public void five() {
        assertEquals("()()", Parentheses.balance("(()()("));
    }

    @Test
    public void six() {
        assertEquals("(())", Parentheses.balance(")(())("));
    }

    @Test
    public void seven() {
        assertEquals("()()()", Parentheses.balance(")())(()()("));
    }
}