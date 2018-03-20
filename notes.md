Topics

* Finite State Machine and Publisher/Subscriber patterns.
* Redux
  * Store
    * initial state
    * register and notify listeners/subscribers of state changes
    * get state
    * update state: disptaching actions
  * Reducers + Root Reducer
  * Actions and Action Creators
* React Bindings for Redux

State Management Library

* predictable

React ----- Redux
[UI] + [Data (State)]

data = store = applicationState = { isLocked: true, isOpen: true }

Component = (optionalData) => UI.

A _state machine_ is a mathematical model of computation.

A machine can have a finite number of states, but it is only in one state at a given time.

There are different types of state machines, but for building UIs (and understaning Redux) we'll concentrate on the type that has an initial state and the next state is calculated based on input and the current state.

For our purposes, a State Machine has:

* initial state (store).
* current state (store).
* inputs or actions (action creators) that trigger transitions (reducers) to the next state.

It helps to think in terms of _states_ instead of _transitions_.

Redux is **NOT** a finite state machine, but the thinking in states help understand how Redux works.

Redux think in transitions first.
FSM think about your states first.

| current state   | action (input) | new state       |
| :-------------- | :------------: | :-------------- |
| locked closed   |     unlock     | unlocked closed |
| unlocked closed |      lock      | locked closed   |
| unlocked closed |      open      | unlocked open   |
| unlocked open   |     close      | locked closed   |
| unlocked open   |      lock      | locked open     |
| locked open     |     unlock     | unlocked open   |

We want to share state across siblings: lift state up is the vanilla react solution, but Redux (or any other state management library) can also help us with that.

## Sample Flow

* define state and transitions (actions)
* define application state shape
* write actions and action creators
* write reducers for each _slice_ of state
* combine reducers into root reducer
* create store (more to come for this step)
* wrap root component with `<Provider></Provider>` passing it the store
* connect components to the store
* profit!

Action: An object that must have a type, normally a string.

Action Creator: function that returns an action object.

Component - dispatches an action -> Reducers - update -> Application State Tree (Store)
