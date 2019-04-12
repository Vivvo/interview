import java.util.HashMap;
import java.util.Map;

class Fibonacci {
  private Map<Integer, Long> cache = new HashMap<>();

  long calc(int n) {
    if (n == 1 || n == 2) {
      return 1;
    }
    if (cache.containsKey(n)) {
      return cache.get(n);
    }

    long res = calc(n - 1) + calc(n - 2);
    cache.put(n, res);
    return res;
  }
}
