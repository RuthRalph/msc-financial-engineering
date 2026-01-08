# Lesson 1: Saving and Borrowing - Study Guide

**Reading Time**: 150 minutes  
**Keywords**: Time Value of Money, Interest Rate, Principal, Time to Maturity, Spot Rate, Forward Rate, Simple Interest, Compound Interest, Yield Curve

---

## 1. Time Value of Money

### Core Concept
**The value of $1 today is worth more than the value of $1 in the future.**

### Two Perspectives:
1. **Investment Opportunity**: If we receive $1,000 today and invest it at 5%, we'd have $1,050 in 1 year. Therefore, $1,000 today ≈ $1,050 in one year.
2. **Preference for Instant Gratification**: We forego spending today only if we expect to spend more in the future.

---

## 2. Interest Rates

### Definition
Interest rates measure:
- **For borrowers**: The cost of a loan
- **For lenders**: Compensation for saving/investing instead of spending

### Factors Affecting Interest Rates:
- Purpose of the loan
- Market conditions
- Financial reputation of the borrower
- Amount of the loan
- Duration of the loan
- Economic conditions
- Competition among lenders

### Components of Interest Rate:
1. **Compensation for delayed consumption**
2. **Risk premium** (default risk, economic uncertainty)

---

## 3. Mathematics of Present and Forward Values

### Simple Interest

**Formula:**
```
Interest = P × r × t
```

Where:
- `P` = principal amount (amount borrowed/invested)
- `r` = annual interest rate (as decimal)
- `t` = term of the loan in years

**Future Value with Simple Interest:**
```
FV = P(1 + rt)
```

**Key Characteristic**: Interest earned only on the initial investment amount.

---

### Compound Interest

**Formula:**
```
FV = P(1 + r)^t
```

Where:
- `P` = principal amount
- `r` = annual interest rate (as decimal)
- `t` = number of years

**Key Characteristic**: Interest earned on the initial investment amount AND on previously earned interest (interest earns interest).

**Present Value (from FV):**
```
PV = FV / (1 + r)^t
```

**Interest Rate (from PV and FV):**
```
r = (FV/PV)^(1/t) - 1
```

**Note**: Unless stated otherwise, assume compound interest in applications.

---

### Compounding Frequency Conversion

**Formula for converting between compounding frequencies:**
```
(1 + r₁/m₁)^(m₁) = (1 + r₂/m₂)^(m₂)
```

Where:
- `r₁` = periodic nominal rate compounded `m₁` times per period
- `r₂` = equivalent periodic nominal rate compounded `m₂` times per period
- `m₁, m₂` = compounding frequencies (1 = yearly, 4 = quarterly, 12 = monthly, etc.)

**Example**: Converting monthly (m₁=12) to quarterly (m₂=4) compounding:
```
(1 + r₁/12)^12 = (1 + r₂/4)^4
```

---

### Continuous Compounding

**Formula:**
```
FV = P × e^(rt)
```

Where:
- `P` = principal
- `r` = annual interest rate
- `t` = time in years
- `e` = Euler's number (≈ 2.71828)

**Derivation**: As compounding frequency `n` approaches infinity:
```
lim(n→∞) P(1 + r/n)^(nt) = P × e^(rt)
```

**Time to Double Investment (Rule of 72 approximation):**
```
t = ln(2) / r ≈ 0.693 / r
```

For continuous compounding at 6%: `t = ln(2)/0.06 ≈ 11.55 years`

---

## 4. Yield Curve

### Definition
The relationship between short-term and long-term interest rates of fixed income securities (U.S. Treasury bonds).

### Typical Shape
- **Normal/Positive Slope**: Short-term rates < Long-term rates
  - Longer maturities are riskier
  - Investors require higher compensation for longer commitments

### Inverted Yield Curve
- **Inverted Slope**: Short-term rates > Long-term rates
- **Implication**: Near-term investments are riskier than long-term ones
- **Economic Indicator**: Often a leading indicator of approaching recession

---

## 5. Spot and Forward Rates

### Spot Rate (`r_t`)
The current interest rate for an investment that starts today and matures at time `t`.

**Relationship:**
```
P(0,t) = 1 / (1 + r_t)^t
```

Where `P(0,t)` is the price at time 0 of a bond paying $1 at time `t`.

---

### Forward Rate (`f_{t₁,t₂}`)
The interest rate for an investment that starts at time `t₁` and matures at time `t₂`.

**Formula:**
```
(1 + r_{t₂})^t₂ = (1 + r_{t₁})^t₁ × (1 + f_{t₁,t₂})^(t₂ - t₁)
```

Solving for forward rate:
```
f_{t₁,t₂} = [(1 + r_{t₂})^t₂ / (1 + r_{t₁})^t₁]^(1/(t₂ - t₁)) - 1
```

**Notation**: `f_{t₁,t₂}` = forward rate from time `t₁` to `t₂`

**Example**: If `r₁ = 0.05` and `r₂ = 0.06`, then:
```
f_{1,2} = [(1.06)² / (1.05)¹]^1 - 1 = 0.0701 = 7.01%
```

---

## 6. Variable Interest Rates

### Variable Rate CDs (Flex CDs)
- Interest rate changes during the life of the security
- Typically based on a benchmark rate (e.g., federal funds rate) plus/minus a spread
- **Risk**: Cannot calculate future value with certainty

### Decision Factors:
1. **Amount of principal** to deposit
2. **Term to maturity** (lock-up period)
3. **Fixed vs. Variable rate** choice
   - Variable: Benefit if rates increase
   - Fixed: Lock in rate if rates decrease

### Considerations:
- Future income and expenses
- Early withdrawal penalties
- Uncertainty about rate movements
- Opportunity to split deposits across different terms

---

## 7. Nominal Rates vs. Real Rates

### Nominal Interest Rate
The actual interest rate you earn (not adjusted for inflation).

### Real Interest Rate
The inflation-adjusted interest rate (purchasing power).

### Fisher Equation (Approximate):
```
Real Rate ≈ Nominal Rate - Inflation Rate
```

### Fisher Equation (Exact):
```
(1 + r_real) = (1 + r_nominal) / (1 + π)
```

Or equivalently:
```
r_real = (1 + r_nominal) / (1 + π) - 1
```

Where:
- `r_nominal` = nominal interest rate
- `r_real` = real interest rate
- `π` = expected inflation rate

**Note**: The approximate formula is usually sufficient when rates are small.

### Fisher Effect
Nominal interest rates tend to change based on expected inflation because investors demand real returns, not nominal returns.

### Key Insight:
- If real rate < 0: You lose purchasing power (inflation > nominal rate)
- If real rate = 0: Purchasing power unchanged
- If real rate > 0: Purchasing power increases

---

## 8. Rate of Saving vs. Rate of Borrowing

### Key Observation
**Borrowing rates > Saving rates**

**Example**:
- Savings account: 3% annual rate
- Loan: 7.5% annual rate
- Credit card: 18%+ annual rate

### Why the Difference?
1. **Bank's Business Model**: Banks pay less to borrow (deposits) and charge more to lend (loans)
2. **Spread**: The difference is the bank's profit margin
3. **Services**: Banks provide financial services and charge accordingly

### Term Structure:
- **Deposits**: Typically short-term (savings accounts)
- **Loans**: Often long-term (mortgages)
- **Term to maturity** is a primary factor in determining interest rates

---

## 9. Term to Maturity

### Definition
The length of time from today until the principal is returned.

**Examples**:
- 3-month CD: term to maturity = 3 months
- 6-month CD: term to maturity = 6 months
- Savings account: no fixed term (can withdraw anytime, but lower rates)

---

## 10. Different Maturities Have Different Interest Rates

### General Rule
**Longer term to maturity → Higher interest rate**

### Reasons:
1. **Time Preference**: More desirable to spend money sooner
2. **Uncertainty**: Longer periods have more economic uncertainty
3. **Inflation Risk**: Longer periods face more inflation risk
4. **Liquidity**: Longer lock-up periods deserve higher compensation

---

## 11. Default

### Definition
Failure to repay a loan or meet financial obligations.

### Impact on Interest Rates:
- **Higher default risk → Higher interest rate**
- Longer-term loans have more default risk (more time for borrower's situation to worsen)
- Economic conditions affect default probability

### Factors:
- Borrower's ability to repay
- Economic conditions
- Loan duration
- Loan amount

---

## 12. Applied Problems

### Problem A: Retirement Planning (Fixed Target)
**Scenario**: Save for retirement with a fixed target amount in today's dollars.

**Steps**:
1. Calculate future value of target amount using discount rate
2. Set up annuity equation for annual contributions
3. Solve for annual contribution amount

**Key Formulas**:
- Future value of target: `FV_target = PV_target × (1 + discount_rate)^years`
- Annuity future value: `FV = PMT × [(1 + r)^n - 1] / r`
- Solve for PMT (payment)

### Problem B: Retirement Planning (Annual Spending)
**Scenario**: Save to provide annual spending during retirement.

**Approach**: Use spreadsheets for complex cash flow calculations involving:
- Annual contributions during working years
- Annual withdrawals during retirement
- Different interest rates for accumulation vs. distribution phases

---

## 13. Key Takeaways

1. **Time Value of Money**: Money today is worth more than money in the future
2. **Compound Interest**: "The eighth wonder of the world" - interest earns interest
3. **Interest Rate Components**: Compensation for time + risk premium
4. **Yield Curve**: Shows relationship between short and long-term rates
5. **Spot vs. Forward Rates**: Current rates vs. future implied rates
6. **Real vs. Nominal**: Always consider inflation when evaluating returns
7. **Term Structure**: Longer maturities typically have higher rates
8. **Default Risk**: Affects interest rates significantly
9. **Decision Making**: Finance involves making decisions under uncertainty

---

## Important Formulas Summary

### Simple Interest
```
FV = P(1 + rt)
```

### Compound Interest
```
FV = P(1 + r)^t
PV = FV / (1 + r)^t
r = (FV/PV)^(1/t) - 1
```

### Continuous Compounding
```
FV = P × e^(rt)
```

### Compounding Frequency Conversion
```
(1 + r₁/m₁)^(m₁) = (1 + r₂/m₂)^(m₂)
```

### Forward Rate
```
f_{t₁,t₂} = [(1 + r_{t₂})^t₂ / (1 + r_{t₁})^t₁]^(1/(t₂ - t₁)) - 1
```

### Real Interest Rate (Exact)
```
r_real = (1 + r_nominal) / (1 + π) - 1
```

### Real Interest Rate (Approximate)
```
r_real ≈ r_nominal - π
```

---

## Study Tips

1. **Practice Calculations**: Work through all examples manually
2. **Understand Context**: Know when to use simple vs. compound interest
3. **Visualize**: Use spreadsheets or graphing tools to see exponential growth
4. **Compare Scenarios**: Always compare different investment/borrowing options
5. **Consider Inflation**: Always think about real returns, not just nominal
6. **Time Matters**: Longer periods amplify the effects of compounding

---

## Next Lesson Preview
The next lesson will explore how the concept of default affects the ongoing relationship between borrower and lender.

