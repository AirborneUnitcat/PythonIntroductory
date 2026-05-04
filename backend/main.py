from fastapi import FastAPI

app = FastAPI()


@app.get("/hello-world")
def hello_world(name: str | None = None):
    if name is None:
        return {"result": "Hello World"}
    return {"result": f"Hello {name}"}


@app.get("/add")
def add(number1: int, number2:int):
    return {"result": number1+number2}


@app.get("/subtract")
def subtract(number1: int, number2:int):
    return {"result": number1-number2}


@app.get("/multiply")
def multiply(number1: int, number2:int):
    return {"result": number1*number2}


@app.get("/divide")
def divide(number1: int, number2:int):
    if number2 == 0:
        return {"error": "You can't divide by zero, please provide a non-zero divisor"}
    return {"result": number1/number2}