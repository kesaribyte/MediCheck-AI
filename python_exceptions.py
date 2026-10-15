
def get_symptom_count(answers):
    try:
        count = sum(answers.values())
        return count
    except (AttributeError, TypeError):
        return "Invalid symptom data"


symptoms = {
    "fever": True,
    "cough": False,
    "headache": True
}

print("Positive answers:", get_symptom_count(symptoms))

invalid_data = None
print("Invalid input:", get_symptom_count(invalid_data))
