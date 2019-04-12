package main

import (
	"fmt"
	"testing"
)

func TestSuite(t *testing.T) {
	tests := []struct {
		num    int
		result int64
	}{
		{1, 1},
		{2, 1},
		{3, 2},
		{4, 3},
		{5, 5},
		{6, 8},
		{90, 2880067194370816120},
	}

	for _, tt := range tests {
		t.Run(fmt.Sprintf("Fib %d", tt.num), func(t *testing.T) {
			fib := NewFib()
			res := fib.calc(tt.num)
			if res != tt.result {
				t.Fatalf("Expected: %d, Actual: %d", tt.result, res)
			}
		})
	}
}
