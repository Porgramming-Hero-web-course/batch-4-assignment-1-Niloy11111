{
  //

  type Input = {
    shape: "circle" | "rectangle";
    radius?: number;
    width?: number;
    height?: number;
  };

  function calculateShapeArea(input: Input): number | string {
    if (input.shape.toLocaleLowerCase() === "circle") {
      const radius = input.radius;
      const value = Math.PI * radius * radius;
      return parseFloat(value.toFixed(2));
    } else if (input.shape.toLocaleLowerCase() === "rectangle") {
      const width = input.width;
      const height = input.height;
      const value = width * height;
      return value;
    } else {
      return "Invalid Input";
    }
  }

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(rectangleArea);

  //
}
