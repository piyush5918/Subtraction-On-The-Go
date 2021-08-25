# Subtraction-On-The-Go

## To Install All the Requirements Run:

npm install

## To Start the Server Run:

npm start

# API

## Subtract

Aim is to generate Multiple Choice Questions based on Subtraction at runtime.

```
Method: POST

Endpoint: /subtract

Body : { numberOfQuestions: 3, minuend : [2,3,4], subtrahend : [1,2,3], borrow : true}

```
CURL 

```

curl --location --request POST 'localhost:3080/subtract' \
--header 'Content-Type: application/json' \
--data-raw '{
    "borrow": true,
    "numberOfQuestions": 3,
    "minuend" : [2, 4, 3],
    "subtrahend": [2, 3, 4]
}'

```