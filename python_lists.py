
# Python Lists and Loops

# 1. Create a list of symptoms
symptoms = ["fever", "cough", "headache", "sore throat"]

# 2. Print the complete list
print("All symptoms:", symptoms)

# 3. Access individual elements
print("First symptom:", symptoms[0])
print("Second symptom:", symptoms[1])

# 4. Add a new symptom
symptoms.append("body pain")
print("Updated symptoms:", symptoms)

# 5. Remove a symptom
symptoms.remove("headache")
print("After removing headache:", symptoms)

# 6. Count the number of symptoms
print("Total symptoms:", len(symptoms))

# 7. Loop through all symptoms
print("\nList of symptoms:")
for symptom in symptoms:
    print("-", symptom)

# 8. Check whether a symptom exists
if "fever" in symptoms:
    print("Fever is present in the list.")
else:
    print("Fever is not present in the list.")
