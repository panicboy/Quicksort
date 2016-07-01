## Quicksort

Quicksort works by dividing a list of numbers into 3 parts: a _pivot_ (number used to split the list), a list of numbers less than the pivot, and a list of numbers greater than the pivot. The less-than and greater than lists go through the quicksort process until they can't be divided any further. The less-than list, pivots and greater-than lists are merged in reverse order to get the sorted list.

### Pseudo code

1. Start with an array of numbers.
2. Pick a **pivot** from the middle of the array.
3. Partition the remaining numbers into _'less than pivot'_ and _'greater than or equal to pivot'_ arrays.
4. Repeat the previous 2 steps on any partition with more than one number.
5. When there are no partitions with more than one number left, recursively join the elements in this order: _less than_ **pivot** + **pivot** + _greater than_ **pivot**
6. _(optional)_ ParTAY!

#### Best case
The best case scenario for this algorithm is a list that always divides into equal greater-than-pivot and less-than-pivot parts. This will be very fast.

#### Worst case
The worst case scenario for this algorithm is a list where every pass ends with all the numbers greater than the pivot or all the numbers less than the pivot. Performance won't be great, but even the worst case is comparable to the best-case scenario for our pal *Bubble Sort*.

**Note:** *Quick Sort* and *Merge Sort* are difficult to visualize in the DOM. **Do these last.**

![quicksort gif](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif "Quicksort gif")
