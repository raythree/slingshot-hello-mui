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
  expect(typeof getBoundActions(dispatch).hello().setName).toBe('function');
  expect(typeof getBoundActions(dispatch).hello().sayHelloAsync).toBe('function');
});

it('should handle sync actions', function () {
  expect(store.getState().hello.message).toBe("");
  getBoundActions(dispatch).hello().sayHello();
  expect(store.getState().hello.message).toBe("Hello World!!!");

  getBoundActions(dispatch).hello().setName('Bill');  
  expect(store.getState().hello.message).toBe("Hello Bill!!!");
});

it('should handle async actions', function (done) {
  expect(store.getState().hello.message).toBe("");
  getBoundActions(dispatch).hello().sayHelloAsync();
  //expect(store.getState().hello.message).toBe("");
  console.log("SETTING TIMEOUT====>")
  setTimeout(() => {
    console.log("TIMEOUT DONE")
    expect(store.getState().hello.message).toBe("Hello World!!!");
    done();
  }, 1100);
});
