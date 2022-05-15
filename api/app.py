from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from random import randrange
from randomPasswordGenerator import RandomPasswordGenerator

origins = [
    'http://localhost:1234'
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

for i in range(5):
    print()


@app.get("/password")
async def root(length: int = 6):
    return {"password": RandomPasswordGenerator().generatePassword(length)}
