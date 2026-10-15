# 1. Create a dictionary
symptoms = {
    "fever": True,
    "cough": False,
    "headache": True,
    "sore_throat": False
}

# 2. Print the complete dictionary
print("All symptoms:", symptoms)

# 3. Access individual values
print("Fever:", symptoms["fever"])
print("Cough:", symptoms["cough"])

# 4. Add a new symptom
symptoms["body_pain"] = True
print("After adding body pain:", symptoms)

# 5. Update an existing value
symptoms["cough"] = True
print("After updating cough:", symptoms)

# 6. Remove a symptom
symptoms.pop("headache")
print("After removing headache:", symptoms)

# 7. Loop through the dictionary
print("\nSymptom report:")

for symptom, answer in symptoms.items():
    print(symptom, "=", answer)

# 8. Count symptoms marked True
count = 0

for answer in symptoms.values():
    if answer:
        count += 1

print("\nNumber of positive answers:", count)
