import { render } from "@testing-library/react";
export const sum = (a: number, b: number) => a + b;

type Props = { label: string };

export const Button = ({ label }: Props) => {
  return <button>{label}</button>;
};

test("sum snapshot", () => {
  expect(sum(2, 3)).toMatchSnapshot();
});

test("Button snapshot", () => {
  const { asFragment } = render(<Button label="Click me" />);
  expect(asFragment()).toMatchSnapshot();
});
