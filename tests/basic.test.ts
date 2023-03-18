import { assert, expect, test } from "vitest";

test("Sample should work great xD", () => {
  const target = {
    message1: "hello",
    message2: "everyone",
  };

  const handler3 = {
    get(target, prop, receiver) {
      if (prop === "message2") {
        return "world";
      }
      //   @ts-ignore
      return Reflect.get(...arguments);
    },
  };

  const proxy3 = new Proxy(target, handler3);

  console.log(proxy3.message1); // hello
  console.log(proxy3.message2); // world
});
