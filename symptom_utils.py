
def count_symptoms(symptoms):
    return sum(symptoms.values())


def assess_symptoms(symptoms):
    count = count_symptoms(symptoms)

    if count == 0:
        return "No symptoms reported."
    elif count <= 2:
        return "Some symptoms reported."
    else:
        return "Multiple symptoms reported."
