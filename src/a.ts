interface Person {
  name: string;
  like(sth: string): string;
}
interface Person {
  age: number;
  like(sth: number): number;
  like(sth: string[]): string[];
  // name: number; // error
}

let lily: Person = {
  age: 18,
  name: "lily",
  like(sth: any) {
    return sth;
  },
};
