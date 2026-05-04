from fastapi import FastAPI

app = FastAPI()


@app.get("/add")
def add():
    
    pass


@app.get("/subtract")
def subtract():
    pass


@app.get("/multiply")
def multiply():
    pass


@app.get("/divide")
def divide():
    pass