export function sendApples(howMany: number, toWho?: string) {
  // TODO: add reaction to negative howMany apples
  return toWho
    ? `${toWho} recieved ${howMany} apples I hope...`
    : `Just sent ${howMany} apples to nowhere`
}
