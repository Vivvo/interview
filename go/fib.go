package main

type Fib struct {
	cache map[int]int64
}

func NewFib() Fib {
	fib := Fib{}
	fib.cache = make(map[int]int64, 0)
	return fib
}

func (f *Fib) calc(num int) int64 {
	if num == 1 || num == 2 {
		return 1
	}

	if f.cache[num] > 0 {
		return f.cache[num]
	}

	res := f.calc(num-1) + f.calc(num-2)
	f.cache[num] = res
	return res
}
