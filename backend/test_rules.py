
from rules import assess_symptoms

symptoms = {
    "fever": True,
    "cough": True,
    "headache": False,
    "sore_throat": True
}

result = assess_symptoms(symptoms)

print(result)
