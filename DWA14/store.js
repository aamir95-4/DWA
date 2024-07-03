export class Store {
  constructor(maxCount = 10, minCount = 0) {
    this.maxCount = maxCount;
    this.minCount = minCount;
    this.count = 0;
    this.subscribers = [];
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  notify() {
    this.subscribers.forEach((callback) => callback());
  }

  increment() {
    if (this.count < this.maxCount) {
      this.count += 1;
      this.notify();
    }
  }

  decrement() {
    if (this.count > this.minCount) {
      this.count -= 1;
      this.notify();
    }
  }

  reset() {
    this.count = 0;
    this.notify();
  }

  getCount() {
    return this.count;
  }

  isAtMax() {
    return this.count >= this.maxCount;
  }

  isAtMin() {
    return this.count <= this.minCount;
  }
}

export const store = new Store();
