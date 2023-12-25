console.log(
  'hello bro  , i am fuckking nooobs shit fuck with me and i am done u noob aa  ass'
);

class Task {
  constructor(name) {
    this.name = name;
  }

  perform() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          ` i have fucking done with my task u nooob shit ${this.name} `
        );
        resolve();
      }, Math.random() * 1000);
    });
  }
}

async function performTaskBaby() {
  const a = new Task('A');
  const b = new Task('B');
  const c = new Task('C');
  const d = new Task('D');
  const e = new Task('E');

  await Promise.all([a.perform(), b.perform(), c.perform()]);

  await d.perform();

  await e.perform();
}

performTaskBaby();
