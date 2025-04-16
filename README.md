# Maximum Additional Diners in a Cafeteria 🍽️

**Problem Source:** Meta (Facebook) Coding Interview  
**Difficulty:** Medium  
**Time Complexity:** O(M log M)  
**Space Complexity:** O(1)  

## Problem Statement
Given a cafeteria table with `N` seats and `M` diners seated at specific seats (`S`), determine the **maximum number of additional diners** that can be seated while maintaining social distancing guidelines:  
- Every diner (existing or new) must have **at least `K` empty seats** on both left and right.  
- Existing diners **cannot move**, and new diners must be seated optimally.

### Constraints
- `1 ≤ N ≤ 10^15`  
- `1 ≤ K ≤ N`  
- `1 ≤ M ≤ 500,000`  

## Solution Approach
### Key Insights
1. **Greedy Algorithm**: Maximize additional diners by seating them in the **earliest available slots** between existing diners and at the ends.
2. **Segmentation**: Divide the table into segments between existing diners and compute available seats in each segment using arithmetic.
3. **Edge Handling**: Account for seats at the start (before the first diner) and end (after the last diner).

### Algorithm Steps
1. **Sort Existing Diners**: Process seats in ascending order.
2. **Calculate Available Slots**:
   - **Left Segment (Seats 1 to first diner)**: `(S[0] - 1) // (K + 1)`
   - **Middle Segments (Between diners)**: `(S[i] - S[i-1] - K - 1) // (K + 1)`
   - **Right Segment (Last diner to seat N)**: `(N - S[M-1]) // (K + 1)`
3. **Sum Valid Slots**: Sum the results from all segments.

### Why It Works
- **Efficiency**: Sorting (`O(M log M)`) dominates the time complexity; each segment is processed in constant time.
- **Correctness**: The greedy approach ensures no valid seat is left unused without violating constraints.