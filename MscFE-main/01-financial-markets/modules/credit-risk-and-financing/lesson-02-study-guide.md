# Lesson 2: Counterparties and Credit Risk - Study Guide

**Reading Time**: 90 minutes  
**Keywords**: Credit Risk, Collateral, Regulation, Deposit Insurance, Bonds  
**Prior Knowledge**: Interest rates, time value of money

---

## 1. Risks in Finance

### Core Concept
Finance involves risks that cannot be completely avoided. Quantitative analysts recognize, measure, and hedge risks.

### Risk Categories

#### Systematic Risk
- Affects the **entire market**
- Cannot be diversified away
- Examples: economic recessions, interest rate changes, inflation

#### Non-Systematic Risk
- **Asset-specific** risk
- Can be reduced through diversification
- Examples: company-specific issues, management problems

---

### Main Types of Risk

#### 1. Economic Risk
**Definition**: Risk that adverse changes in economic conditions negatively impact businesses, industries, or entire economies.

**Key Points**:
- Investors must pay attention to economic conditions of countries where they invest
- Economic downturns can affect multiple sectors simultaneously
- Global economic events can have widespread impacts

---

#### 2. Equity Risk
**Definition**: Risk that stock prices will change in an unfavorable manner.

**Key Points**:
- Investors expect returns exceeding the risk-free rate
- Stock prices are volatile and can decline
- No guarantee of positive returns
- Different from credit risk (equity holders are owners, not creditors)

---

#### 3. Interest Rate Risk
**Definition**: Risk that interest rates can change in an unfavorable manner.

**Examples**:

**For Banks (Lenders)**:
- Bank provides 30-year mortgage at 5%
- Interest rates rise to 8%
- Bank locked into lower rate, loses potential income
- **Result**: Bank unhappy, consumer happy

**For Bond Investors**:
- You own bond paying 4.5% coupon
- New bonds issued at 6.4% coupon
- Your bond becomes less valuable
- If you sell, you must sell below par value
- **Result**: Capital loss for investor

---

#### 4. Model Risk
**Definition**: Risk that we use the wrong model to analyze a specific investment.

**Key Points**:
- Wrong model → suboptimal solutions
- Quantitative analysts must:
  - Use reliable modeling techniques
  - Be aware of model limitations
  - Consider what could go wrong
  - Validate models against real-world data

---

## 2. Defaulting

### Overdue Payments

**Definition**: Any payment that is past a clearly defined and agreeable payment date.

**Characteristics**:
- Payment is late but may still be made
- Can occur due to:
  - Holidays/weekends delaying processing
  - Operational errors
  - Borrower simply not making payment
- **Not yet a default** - just late

**Consequences**:
- Late fees may be assessed
- Interest rates may be raised
- Can be a precursor to actual default

---

### Default

**Definition**: Failure to make some combination of interest payments, principal payments, or both.

**Key Characteristics**:
- More serious than overdue payment
- An overdue payment that remains unpaid
- May involve multiple payments in default
- Borrower fails to honor the implied promise to return funds in full

**For Commercial Businesses**:
- Multiple debts may exist
- Debts have **financial covenants** (restrictions in lending agreements)
- Default on one loan can trigger default on all loans
- Can lead to bankruptcy if company lacks liquidity

---

### Bankruptcy

**Etymology**: From Italian "banca rotta" = "broken bench"
- Historical context: Money dealers worked from benches
- If dealer ran out of money, bench was broken
- Symbolized being out of business

**Modern Bankruptcy Laws**:
- Protect borrowers (including small business owners)
- May allow business to continue operating
- Legally required payments may be reduced
- Avoids "debtor's prison" (historical practice)

**Consequences for Defaulters**:
- Credit becomes less favorable
- Higher interest rates on future loans
- Difficulty obtaining credit
- Financial setback, but not criminal penalties

**Example**: Lender choosing between two borrowers:
- Borrower A: Excellent payment history
- Borrower B: Multiple bankruptcies
- **Result**: Borrower A gets better interest rate

---

## 3. Credit Risk

### Definition
**Credit risk** is the risk to the lender that the lender does not receive the full amount of principal and interest payments initially spelled out in the loan.

**Key Characteristics**:
- Risk of expected loss due to borrower's inability or unwillingness to repay
- Affects the **lender**, not the borrower
- Requires **contractual obligations** (not market risk)
- Should not be confused with equity risk or market risk

---

### Credit Risk vs. Other Risks

**Important Distinction**:
- **Credit Risk**: Requires contractual obligations (bonds, loans)
- **Equity Risk**: No contractual obligation (stocks are ownership, not debt)
- **Market Risk**: Price fluctuations, not default risk

**Example**: Buying company shares (equity) vs. bonds (debt)
- Shares: No guarantee of dividends or price maintenance
- Bonds: Contractual obligation to pay coupons and principal

---

### Credit Risk from Depositor's Perspective

**The Problem**:
- Banks don't keep all deposits locked away
- Banks invest deposits in opportunities
- Some investments may be unprofitable
- Bank runs can occur (depositors rush to withdraw)
- Early depositors may get funds, late depositors may lose

**Historical Context**:
- Bank failures have occurred throughout history
- Depositors lost funds when banks failed
- Created lack of trust in banking system

---

### Deposit Insurance

**Purpose**: Minimize credit risk for depositors

**International Framework**:
- **IADI**: International Association of Depositors Insurers
- Many countries participate in deposit insurance systems

**Examples by Country**:
- **United States**: FDIC (Federal Deposit Insurance Corporation)
- **South Korea**: KDIC (Korea Deposit Insurance Corporation)
- Many other countries have similar systems

**How It Works**:
- Government-backed insurance
- Guarantees deposits up to a certain amount
- Even if bank goes bankrupt, depositors are protected
- Maintains trust and confidence in financial system

**Coverage Limits**:
- **US**: Up to $250,000 per depositor
- **South Korea**: Up to 20 million Korean won per depositor
- **South Korea**: Up to 50 million Korean won per insurance policy holder

**Example Problem**:
- You have $100,000 in FDIC-insured account
- Bank fails, declares 40 cents on the dollar
- **FDIC Insured**: Receive full $100,000
- **Not Insured**: Receive only $40,000

---

### Credit Risk from Bank's Perspective

**When Lending to Individuals/Small Businesses**:
- No deposit insurance backing for borrowers
- Creditworthiness based on reputation and payment history
- Unexpected events can cause default:
  - Job loss
  - Medical expenses
  - Unforeseen circumstances

**Key Point**: Any circumstance that hinders borrower's ability to repay is credit risk.

---

### Credit Risk and Uncertainty

**Impact on Finance**:
- Converts deterministic problems to **random problems**
- Payments are not guaranteed
- Uncertainty in:
  - Timing of payments
  - Size of payments
  - Whether payments will be made at all

**Probability**: Small probability associated with each payment's timing and/or size.

**Endemic Nature**: Credit risk exists in virtually all transactions with counterparties.

---

## 4. Collateral

### Definition
**Collateral** is a financial or physical asset that serves as a backup for the credit risk of the borrower.

### How It Works

**Example - Car Loan**:
- Borrower takes $1,000 loan to buy car
- Car serves as collateral
- If borrower makes timely payments: Keeps car
- If borrower defaults: Bank takes ownership of car
- Car collateralizes the loan

**Purpose**:
- Reduces credit risk for lender
- Provides security if borrower defaults
- Lender can recover value through collateral

### Types of Collateral

**Physical Collateral**:
- Real estate (mortgages)
- Vehicles (auto loans)
- Equipment (business loans)
- Inventory (commercial loans)

**Financial Collateral**:
- Stocks
- Bonds
- Cash deposits
- Other securities

### Bank's Perspective

**Banks Don't Want Collateral**:
- Banks are in financial industry, not other industries
- Prefer timely payments over seizing collateral
- Focus on core business: servicing accounts and lending

**Goal**: Measure credit risk carefully to minimize defaults and focus on core business.

---

## 5. Financial Institutions

### Three Main Categories

#### 1. Depository Institutions
**Definition**: Institutions that accept deposits and provide loans.

**Examples**:
- Banks
- Savings and loan companies
- Credit unions
- Trust companies
- Mortgage loan companies

**Primary Function**: Accept deposits and make loans.

---

#### 2. Contractual Institutions
**Definition**: Institutions providing long-term contractual services.

**Examples**:
- Insurance companies
- Pension funds

**Primary Function**: Provide long-term contractual financial services.

---

#### 3. Investment Institutions
**Definition**: Institutions that originate or manage ongoing investments.

**Examples**:
- Underwriters
- Investment banks
- Mutual funds
- Closed-end funds
- Hedge funds
- Unit investment trusts

**Primary Function**: Originate and manage investments.

---

### Multinational Financial Institutions

**Characteristics**:
- Can provide all three types of services:
  - Loans/mortgages (depository)
  - Insurance (contractual)
  - Investment management (investment)
- Offer multitude of services under one roof
- Examples: Large multinational banks

### Specialized Institutions

**Examples**:
- Mutual fund specializing in bond management
- FinTech companies providing specific services
- Companies focusing on one service type

### FinTech Disruption

**Example - Money Transfer**:
- Traditional banks: Charge hefty wiring fees
- FinTech companies: Low cost or free transfers via smartphone apps
- Disrupting traditional banking services

---

### "Too Big to Fail"

**Concept**:
- Certain large financial institutions are critical to financial system
- Their failure could cause widespread:
  - Fear and panic
  - Unpaid insurance claims
  - Failed pension payments
  - Loss of depositor funds

**Historical Context**:
- Prior to global recession, institutions ran into trouble
- Required government assistance ("bailouts")
- Term: "Too big to fail"

**Solution**: Regulation to minimize this risk and prevent problems.

---

## 6. Regulation

### Purpose of Financial Regulation

**Analogy - Sports**:
- Football (soccer) has rules enforced by referees
- Rules ensure fair, safe, equitable game
- Builds confidence in spectators and sponsors
- Without rules: chaos, cheating, unfair play

**Financial Regulation**:
- Similar to sports rules
- Ensures safety and protection of stakeholders
- Includes rules, practices, and enforcement

---

### Stakeholders Protected by Regulation

**Includes**:
- Consumers
- Taxpayers
- Employers and employees
- Pension holders
- Investors
- Homeowners
- Small businesses
- Large businesses
- Financial institutions themselves

**Goal**: Protect everyone in the financial system.

---

### Regulatory Challenges

**Complexity**:
- Difficult to determine regulatory authority
- Hard to identify culprits in markets with millions/billions of transactions
- Complex trades, investments, disclosures
- Informational asymmetries
- New scenarios never seen before

**Enforcement Issues**:
- Similar to sports: selective enforcement, missed violations, bad calls
- Some companies break rules, receive fines
- Non-compliance with mandated policies

**Goal**: Ensure financial system works smoothly and trustworthily.

---

## 7. Insured Accounts

### Two-Way Assurance

**From Lender's Perspective**:
- Regulation ensures transparent loan qualifications
- No-documentation loans harder to achieve
- Reduces credit risk aggregation
- Assures stakeholders of prudent lending

**From Depositor's Perspective**:
- Deposit insurance corporations provide protection
- Many countries have deposit insurance systems
- Guarantees deposits up to specified amounts
- Provides stability and trust

---

### Deposit Insurance Coverage

**Examples**:
- **South Korea**: 
  - 20 million Korean won per depositor
  - 50 million Korean won per insurance policy holder
- **United States**: $250,000 per depositor (FDIC)

**Impact**:
- Depositors can "sleep well at night"
- Very safe investment
- Applies to:
  - Savings accounts
  - Certificates of deposit
  - Other insured accounts

---

## 8. Basics of Bonds

### Definition
A **bond** is a debt security by which the issuer/borrower is committed to paying back to the bondholder/lender:
1. The cash amount borrowed (principal/notional)
2. Periodic interest calculated on the principal during a given period

---

### Bond Components

**Key Characteristics**:
- **Issuer/Borrower**: Entity that borrows money
- **Bondholder/Lender**: Entity that lends money
- **Principal/Notional**: Amount borrowed
- **Coupon Rate**: Interest rate on bond
- **Maturity Date**: When principal is repaid
- **Coupon Payments**: Periodic interest payments

---

### Example: U.S. Treasury Bond

**Given**:
- Issue Date: 1/1/2024
- Maturity Date: 12/31/2025
- Coupon Rate: 4%
- Nominal Amount: $20,000,000,000
- Payment Frequency: Semi-annual

**Calculations**:

**Coupon Payment**:
- Annual coupon = $20,000,000,000 × 0.04 = $800,000,000
- Semi-annual coupon = $800,000,000 / 2 = $400,000,000

**Payment Schedule**:
- 6/30/2024: $400,000,000 (coupon)
- 12/31/2024: $400,000,000 (coupon)
- 6/30/2025: $400,000,000 (coupon)
- 12/31/2025: $400,000,000 (coupon) + $20,000,000,000 (principal)

**Note**: For semi-annual coupons, divide coupon rate by 2.

---

### Why Issue Bonds?

**Government (U.S. Treasury)**:
- Finance public interest projects
- Examples: Roads, bridges, schools
- Raise funds for government spending

**Corporations**:
- Finance investment projects
- Cost (interest rate) lower than return on projects
- Raise capital for expansion, operations

---

### Bond as I.O.U.

**Concept**:
- Borrower issues I.O.U. to bond buyer
- Borrower receives face value (notional) up front
- In exchange, borrower commits to:
  - Timely interest payments (coupons)
  - Return of principal at maturity

---

### Bonds vs. Certificates of Deposit

**Similarities**:
- Both are **fixed income investments**
- Fixed rates provided
- Stream of income (interest payments)
- Return of principal at maturity
- Issuer commits to repay (assuming no default)

**Differences**:

| Feature | Certificate of Deposit | Bond |
|---------|----------------------|------|
| **Type** | Account | Asset |
| **Tradable** | No | Yes |
| **Market Price** | No | Yes |
| **Value Fluctuation** | Fixed | Can fluctuate |
| **Early Withdrawal** | Severe penalties | Can sell in market |
| **Liquidity** | Low | High |

---

### Three Ways to Get Paid from Bonds

1. **Coupon Payments**: Wait until coupon date to receive interest payment
2. **Principal Repayment**: Wait until maturity to receive principal back
3. **Market Sale**: Sell bond before maturity at prevailing market price

---

### Bond Trading

**Key Characteristics**:
- Bonds are **tradable assets**
- Can be sold in marketplace before maturity
- Price can fluctuate with market conditions
- Provides liquidity to bondholders

**What Drives Bond Prices?**
- Interest rates
- Credit risk
- Time to maturity
- Market conditions
- (Topic of next lesson)

---

## 9. Key Takeaways

1. **Risk Categories**: Systematic (market-wide) vs. Non-systematic (asset-specific)
2. **Main Risk Types**: Economic, Equity, Interest Rate, Model Risk
3. **Default Process**: Overdue payments → Default → Possible Bankruptcy
4. **Credit Risk**: Risk lender doesn't receive full payment; requires contractual obligations
5. **Deposit Insurance**: Protects depositors (FDIC, KDIC, etc.)
6. **Collateral**: Assets backing loans to reduce credit risk
7. **Financial Institutions**: Depository, Contractual, Investment
8. **Regulation**: Ensures safety, fairness, and trust in financial system
9. **Bonds**: Tradable debt securities with fixed income streams
10. **Bonds vs. CDs**: Bonds are tradable assets; CDs are accounts

---

## Important Concepts Summary

### Credit Risk Factors
- Borrower's ability to repay
- Borrower's willingness to repay
- Economic conditions
- Unexpected events (job loss, medical expenses)
- Lack of collateral

### Risk Mitigation Tools
1. **Deposit Insurance**: Protects depositors
2. **Collateral**: Secures loans
3. **Regulation**: Ensures prudent practices
4. **Creditworthiness Assessment**: Evaluates borrower's ability to repay

### Bond Characteristics
- Fixed income security
- Contractual obligation to pay
- Tradable asset
- Periodic coupon payments
- Principal repayment at maturity

---

## Study Tips

1. **Distinguish Risk Types**: Understand difference between credit risk, equity risk, and market risk
2. **Default Process**: Know the progression from overdue payment to default to bankruptcy
3. **Deposit Insurance**: Remember coverage limits and how it protects depositors
4. **Collateral Purpose**: Understand how collateral reduces credit risk
5. **Financial Institutions**: Know the three categories and their functions
6. **Bond Basics**: Master bond components and payment calculations
7. **Bonds vs. CDs**: Understand key differences, especially tradability

---

## Next Lesson Preview
The next lesson will expand on bonds, covering what drives bond prices and how they are valued in the market.

