# Python Finance Cheat Sheet

Quick reference for common Python libraries and operations used in financial engineering.

## NumPy

```python
import numpy as np

# Arrays
arr = np.array([1, 2, 3])
arr_2d = np.array([[1, 2], [3, 4]])

# Common operations
np.mean(arr)
np.std(arr)
np.var(arr)
np.max(arr)
np.min(arr)
np.sum(arr)

# Random numbers
np.random.randn(10)  # Standard normal
np.random.normal(mean, std, size)
```

## Pandas

```python
import pandas as pd

# Reading data
df = pd.read_csv('file.csv')
df = pd.read_excel('file.xlsx')

# Basic operations
df.head()
df.info()
df.describe()
df.columns
df.index

# Selection
df['column_name']
df[['col1', 'col2']]
df.loc[row_index]
df.iloc[row_position]

# Filtering
df[df['column'] > value]
df.query('column > value')

# Grouping
df.groupby('column').mean()
df.groupby('column').agg({'col1': 'mean', 'col2': 'sum'})

# Time series
df['date'] = pd.to_datetime(df['date'])
df.set_index('date', inplace=True)
df.resample('D').mean()
df.pct_change()  # Percentage change
df.diff()  # Difference
```

## Financial Data (yfinance)

```python
import yfinance as yf

# Download data
ticker = yf.Ticker("AAPL")
data = ticker.history(period="1y")

# Multiple tickers
tickers = yf.download(["AAPL", "MSFT", "GOOGL"], period="1y")

# Get info
ticker.info
ticker.financials
ticker.balance_sheet
```

## Matplotlib & Seaborn

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Basic plot
plt.plot(x, y)
plt.scatter(x, y)
plt.bar(x, y)
plt.hist(data, bins=30)

# Labels
plt.xlabel('X Label')
plt.ylabel('Y Label')
plt.title('Title')
plt.legend()

# Show
plt.show()
plt.savefig('plot.png')

# Seaborn
sns.lineplot(data=df, x='x', y='y')
sns.scatterplot(data=df, x='x', y='y')
sns.histplot(data=df, x='column')
sns.heatmap(correlation_matrix)
```

## Scikit-learn

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Model
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)

# Evaluation
mse = mean_squared_error(y_test, predictions)
r2 = r2_score(y_test, predictions)
```

## Statistical Analysis

```python
from scipy import stats

# Descriptive statistics
stats.describe(data)

# Tests
stats.ttest_1samp(data, popmean)
stats.ttest_ind(group1, group2)
stats.pearsonr(x, y)  # Correlation
stats.linregress(x, y)  # Linear regression
```

## Common Financial Calculations

```python
# Returns
returns = prices.pct_change()

# Log returns
log_returns = np.log(prices / prices.shift(1))

# Cumulative returns
cumulative_returns = (1 + returns).cumprod()

# Volatility (annualized)
volatility = returns.std() * np.sqrt(252)

# Sharpe Ratio
sharpe = (returns.mean() / returns.std()) * np.sqrt(252)

# Moving averages
ma_20 = prices.rolling(window=20).mean()
ma_50 = prices.rolling(window=50).mean()
```

