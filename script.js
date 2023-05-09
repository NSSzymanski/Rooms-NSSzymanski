class Room {
  constructor(name, length, width) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.available = true;
    this.capacity = 15;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return this.length + this.width * 2;
  }
}

let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20);

console.log(room1.name);
console.log(room1.length);
console.log(room1.width);
console.log(room1.getArea());
console.log(room1.getPerimeter());

console.log(room2.name);
console.log(room2.length);
console.log(room2.width);
console.log(room2.getArea());
console.log(room2.getPerimeter());

room2.available = false;

console.log(room1.available);
console.log(room2.available);

room2.capacity = 18;

console.log(room1.capacity);
console.log(room2.capacity);
