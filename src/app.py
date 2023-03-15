from flask import Flask, request, jsonify
from itertools import combinations

app = Flask(__name__)

@app.route('/', methods=['POST'])
def find_combination():
    data = request.get_json()
    values = data['values']
    target = int(data['target'])

    # Use itertools to generate all possible combinations of values
    # that can be added together to equal the target value
    combos = []
    for i in range(len(values)):
        for c in combinations(values, i+1):
            if sum(c) == target:
                combos.append(c)

    # Return the results as a JSON object
    return jsonify(combos)

if __name__ == '__main__':
    app.run()
