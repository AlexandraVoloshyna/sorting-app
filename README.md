# Додаток для сортування та відбору даних за визначеними правилами

Вхідні параметри:
{"data": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "john@mail.com", "rating": 25, "disabled": true}],
"condition": {"exclude": [{"disabled": true}], "sortBy": ["rating"]}}

Вихідні дані:
{"result": [{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "mike@mail.com", "rating": 20, "disabled": false}]}
