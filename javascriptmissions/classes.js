class Materializer {
  constructor(targetItem) {
    this.target = targetItem;
    this.activated = false;
  }

  activate() {
    this.activated = true;
  }
  materialize() {
    if (this.activate) {
      return this.target;
    } else {
      return undefined;
    }
  }
}

const m = new Materializer("Kevin");
console.log(m.activated);

m.activate();
console.log(m.activated);

console.log(m.materialize());
