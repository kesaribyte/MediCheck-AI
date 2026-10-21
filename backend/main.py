
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from rules import assess_symptoms

app = FastAPI(
    title="MediCheck AI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


class SymptomAnswers(BaseModel):
    fever: bool
    cough: bool
    headache: bool
    sore_throat: bool
    fatigue: bool
    body_aches: bool
    runny_nose: bool
    sneezing: bool
    nausea: bool
    vomiting: bool
    diarrhea: bool
    dizziness: bool
    chills: bool
    shortness_of_breath: bool


@app.get("/")
def home():
    return {"message": "MediCheck AI backend is running!"}


@app.post("/assess")
def assess(answers: SymptomAnswers):
    symptoms = answers.model_dump()
    return assess_symptoms(symptoms)
