interface Bird {
  type: "bird";
  name: string;
  highFly: number;
}

interface Lion {
  type: "lion";
  name: string;
  speedRun: number;
}

type Animals = Bird | Lion;

const Zoo = (
  animal: Animals = { type: "lion", speedRun: 100, name: "Hugo" }
) => {
  switch (animal.type) {
    case "bird":
      return `My Bird ${animal.name} fly ${animal.highFly}m`;
    case "lion":
      return `My Lion ${animal.name} running ${animal.speedRun}m`;
  }
};

console.log(Zoo({ type: "bird", highFly: 500, name: "Picky" }));
