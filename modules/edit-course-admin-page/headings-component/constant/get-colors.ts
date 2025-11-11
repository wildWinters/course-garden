export function getColor(indexColor: number) {
  const colors = new Map([
    [1, "text-[rgba(157,130,253,1)]"],
    [2, "text-[rgba(186,186,186,1)]"],
  ]);

  return colors.get(indexColor);
}
