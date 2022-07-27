# Paidy RN take home assignment

## Pre-request
This project is base on Expo, so you need `expo-cli` and related environment (nodejs, android, ios). 
Please check the [document](https://docs.expo.dev/get-started/installation/) for more information.

## Run
```
yarn install
yarn run start
```

## Test
```
yarn run test
```

## User story
* [x] User can add task.
* [x] User can update task (by click the task).
* [x] User can delete task.

## Design
* To keep it as simple as possible, it uses memory to storage tasks.
* Before add / update / delete, the application will request for authentication. 
* To avoid duplicate action, the authentication status will be stored.

## Author
[Eddie Hsu](https://github.com/apolkingg8)
