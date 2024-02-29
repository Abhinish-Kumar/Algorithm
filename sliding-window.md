# Sliding window for array

A sliding window is a common technique used in computer science and programming for analyzing subarrays within a larger array.
It involves moving a fixed-size window through the array, one element at a time, and performing some operation on the elements within that window.

## step-by-step explanation of how a sliding window works:

1. Initialization: Define the size of the window and initialize the window with the first set of elements from the beginning of the array.
2. Process Window: Perform some operation on the elements within the window. This operation could be anything depending on the problem you're solving, such as finding the maximum or minimum value, calculating the sum, or applying a specific algorithm.
3. Slide the Window: Move the window by one element to the right (or left, depending on the problem). This means removing the leftmost element from the window and adding the next element from the array to the right end of the window.
4. Repeat: Repeat steps 2 and 3 until the window reaches the end of the array.
5. Output: Collect the results of the operations performed on each window as needed.

Sliding windows are particularly useful for solving problems involving contiguous subarrays because they allow you to avoid redundant computations by reusing information from previous windows. This can lead to more efficient algorithms compared to naive approaches that examine every possible subarray independently.

Example:- Let's say we have an array [1, 3, -1, -3, 5, 3, 6, 7] and we want to find the maximum value of each subarray of size 3.

1. Initialize the window with the first three elements: [1, 3, -1]
2. Process the window: Find the maximum value, which is 3.
3. Slide the window by one element to the right: [3, -1, -3]
4. Process the window: Find the maximum value, which is 3.
5. Slide the window again: [-1, -3, 5].
6. Process the window: Find the maximum value, which is 5.
7. Continue sliding and processing until the end of the array is reached.

