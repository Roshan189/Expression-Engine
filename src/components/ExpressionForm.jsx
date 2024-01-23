import React, { useState } from "react";

const ExpressionForm = () => {
  const [connectorType, setConnectorType] = useState("AND");
  const [expressions, setExpressions] = useState([
    { ruleType: "Age", operator: ">", value: "", score: "" },
  ]);

  const handleConnectorChange = (e) => {
    setConnectorType(e.target.value);
  };

  const handleExpressionChange = (index, field, value) => {
    const updatedExpressions = [...expressions];
    updatedExpressions[index][field] = value;
    setExpressions(updatedExpressions);
  };

  const addExpression = () => {
    setExpressions([
      ...expressions,
      { ruleType: "Age", operator: ">", value: "", score: "" },
    ]);
  };

  const deleteExpression = (index) => {
    const updatedExpressions = [...expressions];
    updatedExpressions.splice(index, 1);
    setExpressions(updatedExpressions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ connectorType, expressions });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="connectorType" className="form-label">
            Connector Type
          </label>
          <select
            id="connectorType"
            className="form-select"
            value={connectorType}
            onChange={handleConnectorChange}
          >
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </select>
        </div>

        {expressions.map((expression, index) => (
          <div key={index} className="mb-3">
            <label className="form-label">Expression {index + 1}</label>
            <div className="row">
              <div className="col">
                <select
                  className="form-select"
                  value={expression.ruleType}
                  onChange={(e) =>
                    handleExpressionChange(index, "ruleType", e.target.value)
                  }
                >
                  <option value="Age">Age</option>
                  <option value="Credit Score">Credit Score</option>
                  <option value="Account Balance">Account Balance</option>
                </select>
              </div>
              <div className="col">
                <select
                  className="form-select"
                  value={expression.operator}
                  onChange={(e) =>
                    handleExpressionChange(index, "operator", e.target.value)
                  }
                >
                  <option value=">">{">"}</option>
                  <option value="<">{"<"}</option>
                  <option value="≥">{"≥"}</option>
                  <option value="≤">{"≤"}</option>
                  <option value="=">{"="}</option>
                </select>
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Value"
                  value={expression.value}
                  onChange={(e) =>
                    handleExpressionChange(index, "value", e.target.value)
                  }
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Score"
                  value={expression.score}
                  onChange={(e) =>
                    handleExpressionChange(index, "score", e.target.value)
                  }
                />
              </div>
              <div className="col">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteExpression(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="btn btn-primary add-btn"
          onClick={addExpression}
        >
          Add Expression
        </button>

        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpressionForm;
