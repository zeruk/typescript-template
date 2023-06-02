export function sendApples(howMany: number, toWho?: string) {
  // TODO: add reaction to negative howMany apples
  if (toWho) return `Just sent ${howMany} apples to nowhere`
  else return `${toWho} recieved ${howMany} apples I hope...`
}
