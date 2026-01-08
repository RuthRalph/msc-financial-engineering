# Lesson 2: Counterparties and Credit Risk - Practice Questions & Solutions

**Purpose**: Deepen understanding through practical application and scenario analysis  
**Difficulty Levels**: Beginner (★), Intermediate (★★), Advanced (★★★)

---

## Section 1: Risks in Finance

### Question 1.1 (★)
Classify the following risks as either **systematic** or **non-systematic**:

a) A company's CEO is involved in a scandal, causing its stock price to drop
b) The Federal Reserve raises interest rates, affecting all bonds
c) A recession causes unemployment to rise across all industries
d) A pharmaceutical company's new drug fails FDA approval
e) Inflation increases, reducing purchasing power of all investments

**Solution:**

a) **Non-systematic** - Company-specific issue
b) **Systematic** - Affects entire bond market
c) **Systematic** - Affects entire economy
d) **Non-systematic** - Company-specific issue
e) **Systematic** - Affects all investments

---

### Question 1.2 (★★)
A bank issued 30-year mortgages at 4% interest rate in 2020. In 2023, market interest rates have risen to 7%. 

a) Who benefits from this situation?
b) Who is harmed?
c) What type of risk is this?

**Solution:**

a) **Mortgage borrowers benefit** - They're locked into lower 4% rate while market rates are 7%
b) **The bank is harmed** - It's earning 4% when it could be earning 7% on new loans
c) **Interest rate risk** - The bank faces risk from unfavorable interest rate changes

---

### Question 1.3 (★★)
You purchased a corporate bond with a 5% coupon rate. Six months later, the company issues new bonds with a 7% coupon rate due to improved credit rating.

a) What happens to the value of your bond?
b) If you sell your bond now, will you receive more or less than the face value?
c) What type of risk does this represent?

**Solution:**

a) **Bond value decreases** - Your bond pays 5% while new bonds pay 7%, making yours less attractive
b) **Less than face value** - You'll have to sell at a discount (below par) to compensate buyers for the lower coupon rate
c) **Interest rate risk** - Changes in market interest rates affect bond values

---

### Question 1.4 (★★★)
A quantitative analyst uses a Black-Scholes model to price options, but the model assumes constant volatility. In reality, volatility changes significantly during market stress.

a) What type of risk is this?
b) What are the potential consequences?
c) How should the analyst address this?

**Solution:**

a) **Model risk** - The model used (Black-Scholes) doesn't accurately reflect reality (volatility is not constant)
b) **Consequences**:
   - Incorrect option pricing
   - Suboptimal trading decisions
   - Potential losses
   - Model may fail during market stress
c) **Solutions**:
   - Use more sophisticated models that account for changing volatility
   - Validate models against real-world data
   - Be aware of model limitations
   - Consider what could go wrong
   - Use stress testing

---

## Section 2: Defaulting

### Question 2.1 (★)
Distinguish between an **overdue payment** and a **default**.

**Solution:**

**Overdue Payment**:
- Payment is late but may still be made
- Past the agreed payment date
- May result in late fees or increased interest rates
- Not yet a default

**Default**:
- More serious than overdue payment
- Failure to make interest and/or principal payments
- An overdue payment that remains unpaid
- May involve multiple missed payments
- Can trigger default on all loans (for businesses)
- May lead to bankruptcy

---

### Question 2.2 (★★)
A small business has three loans:
- Loan A: $100,000 from Bank X
- Loan B: $50,000 from Bank Y  
- Loan C: $75,000 from Bank Z

All three loans have financial covenants stating that default on any loan triggers default on all loans. The business defaults on Loan A.

a) What happens to Loans B and C?
b) What are the potential consequences for the business?
c) What could prevent bankruptcy?

**Solution:**

a) **Loans B and C also default** - The financial covenant triggers cross-default on all loans
b) **Potential consequences**:
   - All lenders can demand immediate repayment
   - Business must pay back all loans at once
   - Loss of creditworthiness
   - Difficulty obtaining future credit
   - Possible bankruptcy
c) **Prevention**:
   - Sufficient liquidity to pay all loans
   - Renegotiation with lenders
   - Restructuring debt
   - Emergency financing

---

### Question 2.3 (★★)
Explain the historical origin of the term "bankruptcy" and how modern bankruptcy laws differ from historical practices.

**Solution:**

**Historical Origin**:
- Term comes from Italian "banca rotta" meaning "broken bench"
- Money dealers worked from benches
- If dealer ran out of money, their bench was broken
- Symbolized being out of business

**Modern Bankruptcy Laws**:
- **Protect borrowers** (including small business owners)
- May allow business to **continue operating**
- Legally required payments may be **reduced**
- Avoids "debtor's prison" (historical practice)
- Provides legal framework for debt resolution

**Differences**:
- Historical: Punitive, business closure, potential imprisonment
- Modern: Protective, allows continuation, structured resolution

---

### Question 2.4 (★★★)
A lender is evaluating two potential borrowers:

**Borrower A**: 
- Excellent credit history
- Never missed a payment
- Stable employment for 10 years

**Borrower B**:
- Declared bankruptcy twice in the past 5 years
- Multiple late payments on previous loans
- Recently started new job

a) Which borrower should receive a lower interest rate? Why?
b) What factors should the lender consider?
c) How does this relate to credit risk?

**Solution:**

a) **Borrower A should receive lower interest rate**
   - Lower credit risk
   - Proven track record of repayment
   - More reliable payment history

b) **Factors to consider**:
   - Payment history
   - Credit score
   - Employment stability
   - Debt-to-income ratio
   - Collateral available
   - Purpose of loan
   - Economic conditions

c) **Credit risk relationship**:
   - Borrower B poses higher credit risk (uncertainty of repayment)
   - Lender requires higher interest rate to compensate for risk
   - This is the challenge of credit risk: assessing borrower's ability and willingness to repay

---

## Section 3: Credit Risk

### Question 3.1 (★)
An investor buys 10,000 shares of Company X at $15 per share. Six months later:
- Share price drops to $12
- Company decides not to pay dividends

A student claims this is credit risk. Is the student correct? Explain.

**Solution:**

**No, the student is incorrect.**

**Reasons**:
1. **No contractual obligation**: Buying shares (equity) doesn't create a contractual obligation for the company
2. **Dividends are discretionary**: Companies are not required to pay dividends
3. **No principal guarantee**: Unlike bonds, companies don't guarantee the value of equity investments
4. **This is equity risk, not credit risk**: Share price decline and dividend suspension are market/equity risks

**Credit risk requires**:
- Contractual obligations (like bonds or loans)
- Promise to pay interest and principal
- Legal commitment to repay

---

### Question 3.2 (★★)
You have $150,000 deposited in a U.S. bank account that is FDIC insured. The bank fails and declares that depositors should expect to receive 30 cents on the dollar.

a) How much should you expect to receive?
b) Explain why.
c) What if your account was not FDIC insured?

**Solution:**

a) **You should expect to receive the full $150,000**

b) **Reasoning**:
   - FDIC insurance protects deposits up to $250,000
   - Your $150,000 is below this limit
   - FDIC guarantees full repayment even if bank fails
   - This is the purpose of deposit insurance: to protect depositors

c) **If not FDIC insured**:
   - You would receive: $150,000 × 0.30 = **$45,000**
   - You would lose $105,000
   - This demonstrates the importance of deposit insurance

---

### Question 3.3 (★★)
Explain how credit risk converts deterministic financial problems into random problems.

**Solution:**

**Deterministic Problems** (without credit risk):
- Payments are guaranteed
- Amounts are known
- Timing is certain
- Example: Risk-free bond, insured deposit

**Random Problems** (with credit risk):
- Payments are **not guaranteed**
- Uncertainty in:
  - **Timing**: When (or if) payments will be made
  - **Size**: Full amount, partial amount, or nothing
  - **Probability**: Small probability associated with each payment

**Impact**:
- Financial calculations must account for probability of default
- Expected values replace certain values
- Risk assessment becomes critical
- Models must incorporate uncertainty

**Example**: 
- Without credit risk: $1,000 loan at 5% = $1,050 repayment (certain)
- With credit risk: $1,000 loan at 5% = $1,050 repayment (with probability < 1)

---

### Question 3.4 (★★★)
Compare and contrast credit risk from:
a) A depositor's perspective
b) A bank's perspective (when lending)

**Solution:**

**a) Depositor's Perspective**:

**Risk**: Bank may fail and not return deposits

**Mitigation**:
- Deposit insurance (FDIC, KDIC, etc.)
- Government backing
- Coverage up to specified limits
- Very safe investment

**Protection Level**: High (insured accounts)

**b) Bank's Perspective (Lending)**:

**Risk**: Borrower may default on loan

**Mitigation**:
- Creditworthiness assessment
- Collateral requirements
- Credit scoring
- Regulation and oversight
- No insurance backing for individual borrowers

**Protection Level**: Moderate (depends on borrower)

**Key Differences**:
- Depositors have insurance protection
- Borrowers don't have insurance backing
- Banks face uncertainty about individual borrowers
- Depositors face risk from bank failure (mitigated by insurance)

---

## Section 4: Collateral

### Question 4.1 (★)
Explain how collateral reduces credit risk for a lender.

**Solution:**

**How Collateral Works**:
1. **Asset backing**: Collateral is an asset that backs the loan
2. **Security**: If borrower defaults, lender can seize collateral
3. **Recovery**: Lender can sell collateral to recover loan amount
4. **Risk reduction**: Reduces uncertainty about loan repayment

**Example - Car Loan**:
- Car serves as collateral
- If borrower makes payments: Keeps car
- If borrower defaults: Bank takes car and sells it
- Bank recovers value through car sale

**Result**: Lower credit risk for lender because there's a backup asset.

---

### Question 4.2 (★★)
A borrower wants a $200,000 loan to start a business. The bank requires collateral.

a) What types of collateral might be acceptable?
b) Why might the bank prefer certain types of collateral?
c) What happens if the business fails and the borrower defaults?

**Solution:**

a) **Acceptable Collateral Types**:
   - Real estate (house, commercial property)
   - Business equipment
   - Inventory
   - Accounts receivable
   - Stocks/bonds
   - Cash deposits
   - Personal assets (if personal guarantee)

b) **Bank Preferences**:
   - **Liquid assets** (easier to sell): Stocks, bonds, cash
   - **Stable value**: Real estate (less volatile)
   - **Easy to value**: Cash, securities
   - **Easy to seize**: Physical assets with clear ownership
   - **Sufficient value**: Collateral worth more than loan amount

c) **If Business Fails and Borrower Defaults**:
   - Bank seizes collateral
   - Bank sells collateral to recover loan amount
   - If collateral value > loan: Bank recovers full amount
   - If collateral value < loan: Bank suffers loss
   - Borrower loses collateral and still owes any shortfall

---

### Question 4.3 (★★★)
A bank makes a $500,000 business loan secured by:
- $300,000 in equipment
- $200,000 in inventory

The business fails and defaults. The bank sells:
- Equipment for $250,000 (depreciated value)
- Inventory for $150,000 (some items unsellable)

a) How much does the bank recover?
b) What is the bank's loss?
c) What does this illustrate about collateral?

**Solution:**

a) **Bank Recovery**:
   - Equipment: $250,000
   - Inventory: $150,000
   - Total recovered: **$400,000**

b) **Bank's Loss**:
   - Loan amount: $500,000
   - Amount recovered: $400,000
   - Loss: **$100,000**

c) **Illustration**:
   - Collateral doesn't guarantee full recovery
   - Collateral value can decline (depreciation, market conditions)
   - Collateral reduces but doesn't eliminate credit risk
   - Banks must carefully assess collateral value and liquidity
   - This is why banks prefer liquid, stable-value collateral

---

## Section 5: Financial Institutions

### Question 5.1 (★)
Classify the following financial institutions:

a) A credit union that accepts deposits and makes personal loans
b) An insurance company that provides life insurance policies
c) A mutual fund that manages a portfolio of stocks
d) A bank that offers checking accounts, mortgages, and investment advisory services

**Solution:**

a) **Depository Institution** - Accepts deposits and makes loans
b) **Contractual Institution** - Provides long-term contractual services (insurance)
c) **Investment Institution** - Manages ongoing investments (mutual fund)
d) **Multinational Financial Institution** - Provides all three types of services:
   - Checking accounts (depository)
   - Mortgages (depository)
   - Investment advisory (investment)

---

### Question 5.2 (★★)
Explain the concept of "too big to fail" and why it's a concern for financial regulation.

**Solution:**

**Definition**: Certain large financial institutions are so important to the financial system that their failure could cause widespread economic damage.

**Why It's a Concern**:

**Potential Consequences of Failure**:
- Widespread fear and panic
- Depositors lose funds
- Insurance claims go unpaid
- Pension recipients lose retirement income
- Credit markets freeze
- Economic recession
- Contagion to other institutions

**Historical Context**:
- Prior to global recession, large institutions ran into trouble
- Required government assistance ("bailouts")
- Taxpayers bore the cost
- Created moral hazard (institutions take excessive risk knowing they'll be bailed out)

**Regulatory Response**:
- Stricter capital requirements
- Stress testing
- Resolution planning
- Oversight and monitoring
- Prevent problems before they occur

**Goal**: Ensure institutions don't become "too big to fail" or can fail safely without systemic damage.

---

### Question 5.3 (★★)
Compare traditional banks and FinTech companies in providing money transfer services.

**Solution:**

**Traditional Banks**:
- Charge **hefty wiring fees**
- May require branch visits
- Slower processing
- Established infrastructure
- Regulatory oversight
- Deposit insurance

**FinTech Companies**:
- **Low cost or free** transfers
- Smartphone apps (convenient)
- Faster processing
- Lower overhead costs
- Disrupting traditional banking
- May have less regulation

**Impact**:
- FinTech companies are disrupting traditional banking
- Providing services at fraction of cost
- More accessible and convenient
- Forcing banks to adapt and compete

**Example**: Money transfer apps that allow free or low-cost international transfers vs. bank wire fees of $25-50.

---

## Section 6: Regulation

### Question 6.1 (★)
Explain the purpose of financial regulation using the sports analogy from the lesson.

**Solution:**

**Sports Analogy (Football/Soccer)**:
- Rules ensure fair, safe, equitable game
- Referees enforce rules
- Rules are well-known by players
- Without rules: chaos, cheating, unfair play
- Builds confidence in spectators and sponsors

**Financial Regulation (Similar)**:
- Rules ensure safety and protection of stakeholders
- Regulatory bodies enforce rules
- Rules apply to all participants
- Without regulation: fraud, abuse, systemic risk
- Builds trust and confidence in financial system

**Key Point**: Just as sports need rules for fair play, finance needs regulation for fair, safe, and trustworthy operations.

---

### Question 6.2 (★★)
List the stakeholders protected by financial regulation and explain why each group needs protection.

**Solution:**

**Stakeholders**:
1. **Consumers** - Need protection from fraud, unfair practices
2. **Taxpayers** - May bear cost of bailouts if system fails
3. **Employers and Employees** - Depend on stable financial system for business operations
4. **Pension Holders** - Retirement savings must be protected
5. **Investors** - Need fair markets and disclosure
6. **Homeowners** - Need protection in mortgage transactions
7. **Small Businesses** - Need access to credit and fair lending
8. **Large Businesses** - Depend on stable financial markets
9. **Financial Institutions** - Need stable system to operate

**Why Protection Needed**:
- Asymmetric information (one party knows more)
- Systemic risk (failure affects everyone)
- Fraud and abuse prevention
- Market confidence
- Economic stability

---

### Question 6.3 (★★★)
Discuss the challenges regulators face in the modern financial system.

**Solution:**

**Challenges**:

1. **Determining Authority**:
   - Which regulatory body has jurisdiction?
   - Multiple agencies may be involved
   - International coordination needed

2. **Identifying Culprits**:
   - Markets have millions/billions of transactions
   - Complex trades and structures
   - Hard to trace wrongdoing

3. **Complexity**:
   - Complex financial products
   - Sophisticated trading strategies
   - Interconnected institutions

4. **Informational Asymmetries**:
   - Some parties have more information
   - Difficult to detect problems early

5. **New Scenarios**:
   - Financial innovation creates new situations
   - Scenarios never seen before
   - Regulations may lag behind innovation

6. **Enforcement Issues**:
   - Selective enforcement
   - Missed violations
   - Companies break rules and receive fines
   - Non-compliance with policies

**Result**: Regulation is challenging but essential for system stability.

---

## Section 7: Insured Accounts

### Question 7.1 (★)
Compare deposit insurance coverage in different countries:

a) United States (FDIC)
b) South Korea (KDIC)

**Solution:**

**United States (FDIC)**:
- Coverage: **$250,000 per depositor**
- Applies to: Savings accounts, checking accounts, CDs
- Government-backed
- Very high level of protection

**South Korea (KDIC)**:
- Coverage: **20 million Korean won per depositor**
- Additional: **50 million Korean won per insurance policy holder**
- Government-backed
- Protects Korean depositors

**Key Point**: Different countries have different coverage limits, but all provide government-backed protection.

---

### Question 7.2 (★★)
Explain how deposit insurance provides "two-way assurance" in the financial system.

**Solution:**

**From Lender's (Bank's) Perspective**:
- Regulation ensures **transparent loan qualifications**
- No-documentation loans harder to achieve
- Reduces aggregation of risky loans
- Assures stakeholders of **prudent lending practices**
- Protects bank's reputation and stability

**From Depositor's Perspective**:
- Deposit insurance corporations provide **protection**
- Guarantees deposits up to specified amounts
- Even if bank fails, depositors protected
- Provides **stability and trust**
- Allows depositors to "sleep well at night"

**Result**: 
- Banks can attract deposits (depositors trust system)
- Depositors feel safe (insurance protection)
- System maintains confidence
- Reduces risk of bank runs

**Two-Way**: Both lenders and depositors have assurance and protection.

---

## Section 8: Basics of Bonds

### Question 8.1 (★)
A corporation issues a bond with the following terms:
- Face Value: $1,000,000
- Coupon Rate: 6%
- Maturity: 5 years
- Payment Frequency: Annual

Calculate:
a) Annual coupon payment
b) Total interest payments over 5 years
c) Total amount repaid at maturity

**Solution:**

a) **Annual Coupon Payment**:
   - $1,000,000 × 0.06 = **$60,000 per year**

b) **Total Interest Payments**:
   - $60,000 × 5 years = **$300,000**

c) **Total Amount at Maturity**:
   - Final coupon: $60,000
   - Principal: $1,000,000
   - Total: **$1,060,000**

---

### Question 8.2 (★★)
A U.S. Treasury bond is issued with:
- Issue Date: January 1, 2024
- Maturity Date: December 31, 2026
- Coupon Rate: 5%
- Face Value: $10,000,000,000
- Payment Frequency: Semi-annual

Create the complete payment schedule.

**Solution:**

**Payment Schedule**:

| Date | Payment Type | Amount |
|------|-------------|--------|
| 6/30/2024 | Coupon | $250,000,000 |
| 12/31/2024 | Coupon | $250,000,000 |
| 6/30/2025 | Coupon | $250,000,000 |
| 12/31/2025 | Coupon | $250,000,000 |
| 6/30/2026 | Coupon | $250,000,000 |
| 12/31/2026 | Coupon + Principal | $250,000,000 + $10,000,000,000 |

**Calculations**:
- Annual coupon: $10,000,000,000 × 0.05 = $500,000,000
- Semi-annual coupon: $500,000,000 / 2 = $250,000,000

---

### Question 8.3 (★★)
Compare and contrast bonds and certificates of deposit (CDs).

**Solution:**

**Similarities**:
- Both are **fixed income investments**
- Provide **fixed interest rates**
- Generate **stream of income** (interest payments)
- Return **principal at maturity**
- Issuer commits to repay (assuming no default)

**Differences**:

| Feature | Certificate of Deposit | Bond |
|---------|----------------------|------|
| **Type** | Account | Asset |
| **Tradable** | No | Yes |
| **Market Price** | No | Yes |
| **Value** | Fixed | Can fluctuate |
| **Early Withdrawal** | Severe penalties | Can sell in market |
| **Liquidity** | Low | High |
| **Issuer** | Bank | Government/Corporation |

**Key Difference**: Bonds are **tradable assets** that can be sold before maturity, while CDs are accounts that must be held to maturity or face penalties.

---

### Question 8.4 (★★★)
Explain the three ways a bondholder can receive payment from holding a bond.

**Solution:**

**1. Coupon Payments**:
- Wait until coupon payment date
- Receive periodic interest payments
- Typically semi-annual or annual
- Fixed amount based on coupon rate

**2. Principal Repayment**:
- Hold bond until maturity date
- Receive face value (principal) back
- Final payment includes last coupon + principal
- Bond is fully paid off

**3. Market Sale**:
- Sell bond before maturity in secondary market
- Receive prevailing market price
- Price may be above or below face value
- Provides liquidity without waiting for maturity
- Price depends on market conditions, interest rates, credit risk

**Example**:
- Bond purchased at $1,000 face value
- Can receive: (1) Coupons every 6 months, (2) $1,000 at maturity, or (3) Sell for current market price (e.g., $980 or $1,020)

---

## Section 9: Comprehensive Scenarios

### Question 9.1 (★★★)
A multinational bank provides the following services:
- Checking and savings accounts
- Mortgage loans
- Life insurance policies
- Mutual fund management
- Investment advisory services

a) Classify each service by financial institution type
b) Explain why a single institution might offer all these services
c) What are the benefits and risks of this approach?

**Solution:**

a) **Classification**:
   - Checking/savings accounts: **Depository Institution**
   - Mortgage loans: **Depository Institution**
   - Life insurance: **Contractual Institution**
   - Mutual fund management: **Investment Institution**
   - Investment advisory: **Investment Institution**

b) **Why Offer All Services**:
   - **Convenience**: One-stop shop for customers
   - **Cross-selling**: Offer multiple products to same customer
   - **Revenue diversification**: Multiple income streams
   - **Competitive advantage**: Comprehensive service offering
   - **Economies of scale**: Shared infrastructure

c) **Benefits**:
   - Customer convenience
   - Diversified revenue
   - Cross-selling opportunities
   - Brand recognition

**Risks**:
   - "Too big to fail" concerns
   - Regulatory complexity
   - Conflicts of interest
   - Systemic risk if institution fails
   - Requires strong risk management

---

### Question 9.2 (★★★)
Analyze the following scenario:

A small business owner takes out a $500,000 loan to expand operations. The loan is secured by:
- $400,000 in business equipment
- $100,000 personal guarantee (home equity)

After 2 years:
- Business struggles due to economic downturn
- Owner defaults on loan
- Bank seizes equipment, sells for $300,000 (depreciated)
- Owner's home value has increased to $150,000

a) How much does the bank recover?
b) What is the bank's loss?
c) What happens to the business owner?
d) What does this illustrate about credit risk and collateral?

**Solution:**

a) **Bank Recovery**:
   - Equipment sale: $300,000
   - Home equity (up to guarantee): $100,000
   - Total recovered: **$400,000**

b) **Bank's Loss**:
   - Loan amount: $500,000
   - Amount recovered: $400,000
   - Loss: **$100,000**

c) **Business Owner**:
   - Loses business equipment
   - Loses $100,000 in home equity
   - Still owes $100,000 (if personal guarantee covers full shortfall)
   - Credit rating damaged
   - Difficulty obtaining future credit

d) **Illustrations**:
   - **Collateral reduces but doesn't eliminate credit risk**
   - **Collateral value can decline** (equipment depreciation)
   - **Economic conditions affect ability to repay**
   - **Personal guarantees increase recovery but don't guarantee full recovery**
   - **Credit risk is real and can result in losses for lenders**

---

## Quick Review Questions

### True/False

1. **Credit risk only applies to bonds, not stocks.** → **True** (stocks are equity, not debt)
2. **Deposit insurance eliminates all credit risk for depositors.** → **True** (up to coverage limits)
3. **All financial institutions are the same type.** → **False** (three main categories)
4. **Bonds can be sold before maturity.** → **True** (they're tradable assets)
5. **Collateral guarantees full loan recovery.** → **False** (value can decline)
6. **Systematic risk can be diversified away.** → **False** (affects entire market)
7. **Default always leads to bankruptcy.** → **False** (can be resolved other ways)
8. **FDIC insurance covers unlimited amounts.** → **False** (up to $250,000)

---

## Study Tips

1. **Distinguish Risk Types**: Credit risk requires contractual obligations; equity risk doesn't
2. **Understand Default Process**: Overdue → Default → Possible Bankruptcy
3. **Know Deposit Insurance**: Coverage limits vary by country
4. **Collateral Purpose**: Reduces but doesn't eliminate credit risk
5. **Financial Institutions**: Three categories with different functions
6. **Bonds vs. CDs**: Key difference is tradability
7. **Regulation Purpose**: Protects all stakeholders in financial system

---

## Answer Key Summary

| Section | Key Concept | Answer |
|---------|-------------|--------|
| 1.1 | Risk Classification | Systematic vs Non-systematic |
| 2.1 | Default vs Overdue | Default is more serious, involves unpaid obligations |
| 3.1 | Credit Risk | Requires contractual obligations, not equity risk |
| 4.1 | Collateral | Reduces credit risk by providing asset backup |
| 5.1 | Financial Institutions | Three categories: Depository, Contractual, Investment |
| 6.1 | Regulation | Ensures safety, fairness, trust (like sports rules) |
| 7.1 | Deposit Insurance | FDIC: $250K, KDIC: 20M won |
| 8.1 | Bond Payments | Coupons + Principal at maturity |

---

**Remember**: Understanding concepts is more important than memorizing facts. Focus on how these concepts work together in the financial system.

