package main

import "testing"

func TestSum(t *testing.T) {
	s := Simple{}
	sum := s.Sum([]int{1, 7, 4, 1, 11, 22})
	if sum != 46 {
		t.Fatalf("Expected: %d, Actual: %d", 46, sum)
	}
}
