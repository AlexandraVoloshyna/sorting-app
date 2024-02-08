import { applyIncludeRule } from './includeRule.js';
import { applyExcludeRule } from'./excludeRule.js';
import { applySortRule } from './sortRule.js';

function processData(inputData) {
  const conditions = inputData.condition;
  let result = inputData.data;

  const map = {
    "include": applyIncludeRule,
    "exclude": applyExcludeRule,
    "sortBy": applySortRule
  };

  for (const rule in conditions) {
    const ruleFn = map[rule];
    if (ruleFn) {
      result = ruleFn(result, conditions);
    } else {
      console.error("Unknown rule type:", rule);
    }
  }
  
    return { result };
  }
  const inputData = {
    "data": [
      {"user": "mike@mail.com", "rating": 20, "disabled": false},
      {"user": "greg@mail.com1", "rating": 14, "disabled": true},
      {"user": "john@mail.com", "rating": 25, "disabled": true},
      {"user": "john@mail.com", "rating": 14, "disabled": false},
    ],
    "condition": { "include": [{"disabled": true}, {"rating":14}], "sortBy": ["rating", "disabled"]}
  };
  
  const outputData = processData(inputData);
  console.log(outputData);
  //