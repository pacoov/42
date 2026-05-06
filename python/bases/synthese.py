A = {
    "name": "Alpha",
    "age": 18,
    "grade": 75
}

B = {
    "name": "Beta",
    "age": 20,
    "grade": 68,
}

C = {
    "name": "Charlie",
    "age": 19,
    "grade": 94,
}

D = {
    "name": "Delta",
    "age": 21,
    "grade": 42,
}

students = [A, B, C, D]

def average(students):
    total = 0
    for student in students:
        total += student["grade"]
    return total / len(students)

def best_student(students):
    best = students[0]
    for student in students:
        if student["grade"] > best["grade"]:
            best = student
    return best["name"]

x = average(students)
print(x)
print("\n")
y = best_student(students)
print(y)