interface SortStrategy<T> {
  sort(dataset: T[]): T[];
}

class BubbleSortStrategy<T> implements SortStrategy<T> {
  public sort(dataset: T[]): T[] {
    console.log("Sorting using bubble sort");

    // Do sorting
    return dataset;
  }
}

class QuickSortStrategy<T> implements SortStrategy<T> {
  public sort(dataset: T[]): T[] {
    console.log("Sorting using quick sort");

    // Do sorting
    return dataset;
  }
}

class Sorter<T> {
  public constructor(protected sorter: SortStrategy<T>) {}

  public sort(dataset: T[]): T[] {
    return this.sorter.sort(dataset);
  }
}

const dataset = [1, 5, 4, 3, 2, 8];

const sorter1 = new Sorter<number>(new BubbleSortStrategy<number>());
sorter1.sort(dataset);

const sorter2 = new Sorter<number>(new QuickSortStrategy<number>());
sorter2.sort(dataset);

export {};
