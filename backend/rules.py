
def assess_symptoms(symptoms):
    positive_symptoms = [
        symptom
        for symptom, answer in symptoms.items()
        if answer is True
    ]

    symptom_count = len(positive_symptoms)

    if symptom_count == 0:
        category = "no_symptoms_reported"
        message = "No listed symptoms were reported."
        guidance = (
            "If you still feel unwell, consider speaking "
            "with a healthcare professional."
        )
    elif symptom_count == 1:
        category = "symptoms_reported"
        message = "One listed symptom was reported."
        guidance = (
            "Monitor how you feel. Seek medical advice "
            "if symptoms persist or worsen."
        )
    else:
        category = "multiple_symptoms_reported"
        message = f"{symptom_count} listed symptoms were reported."
        guidance = (
            "Consider discussing your symptoms with a "
            "qualified healthcare professional."
        )

    if symptoms.get("shortness_of_breath") is True:
        guidance = (
            "Shortness of breath can be serious. Seek prompt "
            "medical assessment; get emergency help if severe "
            "or accompanied by chest pain."
        )

    return {
        "positive_symptoms": positive_symptoms,
        "symptom_count": symptom_count,
        "category": category,
        "message": message,
        "guidance": guidance,
        "assessment_type": "rule_based"
    }
