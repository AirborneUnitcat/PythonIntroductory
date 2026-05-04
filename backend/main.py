from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # allow all methods
    allow_headers=["*"],  # allow all headers
)

@app.get("/hello-world")
def hello_world(name: str | None = None):
    if name is None:
        return {"result": "Hello World"}
    return {"result": f"Hello, Lady {name} of CatVille. Its' nice to meet you!"}


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
        return {"error": "You can't divide by zero, please provide a non-zero second number"}
    return {"result": number1/number2}