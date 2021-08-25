# Subtraction-On-The-Go

## To Install All the Requirements Run:

npm install

## To Start the Server Run:

npm start

## Docker setup:

docker build -t <docker_name> .
docker run -p 8002:3080 <docker_name>
# API

## Subtract

Aim is to generate Multiple Choice Questions based on Subtraction at runtime.

```
Method: POST

Endpoint: https://floating-shore-98807.herokuapp.com/operations/subtract

Body : { numberOfQuestions: 3, minuend : [2,3,4], subtrahend : [1,2,3], borrow : true}

```
CURL 

```

curl --location --request POST 'https://floating-shore-98807.herokuapp.com/operations/subtract' \
--header 'Content-Type: application/json' \
--data-raw '{
    "borrow": true,
    "numberOfQuestions": 3,
    "minuend" : [2, 4, 3],
    "subtrahend": [2, 3, 4]
}'

```