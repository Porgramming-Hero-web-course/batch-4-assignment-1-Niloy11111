{
  //

  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  function calculateShapeArea(input: Circle | Rectangle): number | string {
    if (
      "radius" in input &&
      !("width" in input) &&
      !("height" in input) &&
      input.shape === "circle"
    ) {
      const radius = (input as Circle).radius;
      const area = Math.PI * radius * radius;
      return parseFloat(area.toFixed(2));
    } else if (
      "width" in input &&
      "height" in input &&
      !("radius" in input) &&
      input.shape === "rectangle"
    ) {
      const width = (input as Rectangle).width;
      const height = (input as Rectangle).height;
      const area = width * height;
      return area;
    } else {
      return "Invalid Shape";
    }
  }

  const circleArea = calculateShapeArea({
    shape: "circle",
    radius: 5,
  });

  console.log(circleArea);

  //
}
