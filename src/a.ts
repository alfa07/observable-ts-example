import {B} from './b'

export class A {
    say(n: number): string { return "A -> " + (new B()).say(n); }
}
