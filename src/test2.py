import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import sys
import json

# reading the data
df = pd.read_csv("cleanCredit.csv", delimiter=",")
df = df.apply(pd.to_numeric, errors='coerce')
df = df.dropna()
df = df.reset_index(drop=True)

# Assigns X and y for training
X = df.drop(['Credit_Utilization_Ratio', 'Total_EMI_per_month', 'Num', 'Credit_Score'], axis='columns')
y1 = df['Credit_Score']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# trains the model
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y1, test_size=0.2, random_state=0)

# input the best params
rfr_best_model = RandomForestRegressor(n_estimators=100, max_features='sqrt', criterion='squared_error')
rfr_best_model.fit(X_train, y_train)
y_pred = rfr_best_model.predict(X_test)

df = pd.DataFrame({'Actual': y_test, 'Predicted': y_pred})
print(df)

testdata = [[27, 50000, 2500, 1, 2, 4, 4, 3, 50000, 0, 500]]

# Make prediction
predicted_risk_level = rfr_best_model.predict(testdata)
print(predicted_risk_level)

if predicted_risk_level[0] > 2.49:
    print("Good")
elif 2.49 > predicted_risk_level[0] > 1.49:
    print("Standard")
else:
    print("Bad")

# Parse JSON data from command line arguments
testdata = json.loads(sys.argv[1])  # Parse JSON data from command line arguments

# Filter out non-numeric columns
numerical_columns = [col for col in df.columns if pd.api.types.is_numeric_dtype(df[col])]
testdata_numeric = {key: value for key, value in testdata.items() if key in numerical_columns}

numerical_values = [testdata_numeric[key] for key in sorted(testdata_numeric.keys())]
predicted_risk_level = rfr_best_model.predict([numerical_values])
print(predicted_risk_level[0])

