import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class SimpleTest {

    @Test
    public void sum() {
    Simple s = new Simple();

        int sum = s.sum(new int[]{1, 7, 4, 1, 11, 22});
        assertEquals(46, sum);
    }
}