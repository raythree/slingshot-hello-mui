import { getBoundActions, resetActionBinder } from '../store/actions';
import configureStore from '../store/configureStore';

let store, dispatch;

beforeEach(() => {
  resetActionBinder();
  store = configureStore();
  dispatch = store.dispatch;
});

it('should configure the store', function () {
  expect(typeof getBoundActions(dispatch).hello()).toBe('object');
  expect(typeof getBoundActions(dispatch).hello().sayHello).toBe('function');
  expect(typeof getBoundActions(dispatch).hello().sayHelloAsync).toBe('function');
});

it('should handle sync actions', function () {
  expect(store.getState().hello.message).toBe("");
  getBoundActions(dispatch).hello().sayHello("Hello World!");
  expect(store.getState().hello.message).toBe("Hello World!");
});

it('should handle async actions', function (done) {
  expect(store.getState().hello.message).toBe("");
  getBoundActions(dispatch).hello().sayHelloAsync("Hello World Async!");
  expect(store.getState().hello.message).toBe("");
  setTimeout(() => {
    expect(store.getState().hello.message).toBe("Hello World Async!");
    done();
  }, 1100);
});
