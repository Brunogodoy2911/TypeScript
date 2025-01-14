/**
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */

function useState<T extends number | string>() {
  let state: T;

  function get() {
    return state;
  }

  function set(newValue: T) {
    state = newValue;
  }

  return { get, set };
}

let newState = useState();

newState.get();
newState.set("Bruno");
// newState.set(12); => O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'string'.
