import { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

import { Counter } from "../src/Counter";

type CounterProps = ComponentPropsWithoutRef<typeof Counter>;

const a: CounterProps = {
  numb: 10,
};
