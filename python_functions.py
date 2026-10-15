
def count_symptoms(symptoms):
    count = 0

    for answer in symptoms.values():
        if answer:
            count += 1

    return count


def assess_symptoms(symptoms):
    count = count_symptoms(symptoms)

    if count == 0:
        return "No symptoms reported."
    elif count <= 2:
        return "Some symptoms reported."
    else:
        return "Multiple symptoms reported. Consider consulting a healthcare professional."


symptoms = {
    "fever": True,
    "cough": True,
    "headache": False,
    "sore_throat": True
}

result = assess_symptoms(symptoms)
print(result)
