## Quicksort

Quicksort description:

1. Pick an element (called a 'pivot') from an array of elements
2. Divide the array into 2 partitions of elements that are less than and greater than the pivot
  1. If either partition has only one element, that becomes a pivot
  2. If a partition has multiple elements, repeat the preceding 3 steps to divide each partition into successively smaller partitions
3. When no further partitions are possible, the partitions and pivots are rejoined in reverse order of creation to create a sorted array of elements

Algorithm:

1. Start with an array of numbers.
2. Pick a pivot from the middle of the array.
3. Partition the remaining numbers into 'less than pivot' and 'greater than or equal to pivot' arrays.
4. Repeat the previous 2 steps on any partition with more than one number.
5. When there are no partitions with more than one number left, recursively join the elements in this order: [less than pivot + pivot + greater than pivot]
6. (optional) ParTAY!


In your own words, describe the performance of the alogirthm for the following cases:
    1. Best case scenario
    2. Worst case scenario

3. Stretch Goal - Create a web app that visually sorts a randomized group via with DOM manipulation. Your web app should be able to be used based on user input. Your site doesn't need to be to fancy, here is an example of how it might look [Sorting Algorithms Visualized](https://www.youtube.com/watch?v=kPRA0W1kECg).
Note: Quick Sort and Merge Sort are difficult to visualize in the DOM. Do these last.

![quicksort gif](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif "Quicksort gif")