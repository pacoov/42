moi = {
    "name": "Enzo",
    "age": 23,
    "school": "42",
    "level": "post-bac",
}

print(moi["name"])
print(moi["school"])
moi["level"] = "Sup"
moi["city"] = "Paris"
for key, value in moi.items():
    print(f"{key} = {value}")