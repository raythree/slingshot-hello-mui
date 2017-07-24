# slingshot-hello
React-slingshot is the best React starter project out there, with everything you need for development and production environments. However, the demo app is not going to fit everyone's needs, and after running the ```remove-demo``` script you now have to manually wire up your index.js, store, routes, initial container/components, and third-party packages that you use in production to get a functioning app. 

The solution is to create your own starter app, structured the way you want, and drop that into the slingshot starter project after removing the demo.

I wanted an app that was ready to run, and could be turned into the start of a production app in under a minute, just by renaming a couple of components. This starter has the following:

* An index.js that loads everything.
* A configured store (hello.js "duck") that handles async actions, with one action (sayHello) and one async action (sayHelloAsync).
* A single container (HelloContainer).
* A single component (HelloComponent).
* A style sheet with 1 style.
* The default routes ready to go, with a blank App and a NotFound component.
* A single test spec that verifies the initial store.

**NOTE:** The goal was not touch any of the slingshot files. Currently, this starter does make very minor modifications to ```src/store/configureStore.js``` but this is easy to keep in sync should slingshot enhance this file in the futurte. 

## quickstart

Clone react-slingshot project and remove the demo. Clone slingshot-hello repo and run the setup script, giving it the path to the empty react-slingshot project:

```
git clone https://github.com/coryhouse/react-slingshot.git

cd react-slingshot
npm run setup
npm run remove-demo

cd ..
git clone https://github.com/raythree/slingshot-hello.git
cd slingshot-hello
npm run setup -- ../react-slingshot
```

After the setup script completes:

```
cd ../react-slingshot
npm start -s
```
Rename/edit the contents of the "src/hello" folder to fit your real app.







