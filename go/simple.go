package main

type Simple struct{}

func (s *Simple) Sum(nums []int) int {
	var sum = 0

	for _, n := range nums {
		sum += n
	}

	return sum
}
