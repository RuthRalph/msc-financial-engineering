

SAVING AND BORROWING
Reading Time	150 minutes
Prior Knowledge	None
Keywords	Time Value of Money, Interest Rate, Principal, Time to Maturity, Spot Rate, Forward Rate, Simple Interest, Compound Interest, Yield Curve.
In this lesson, we will examine how you can either earn interest as a depositor or pay interest as a borrower. We'll show how you can calculate the amounts of interest under different types of compounding. We'll also discuss how these interest rates differ regarding how long you're willing to maintain the investment. While the lesson is a bit technical, it only requires a modicum of algebra.

1. Time Value of Money
A very important financial concept is that of time value of money. Stated in a rigorous manner, this financial principle says that the value of $1 today is worth more than the value of $1 in the future.

There are at least two ways to convince ourselves that the notion makes sense:

If we received $1,000 today and we could invest it, say at a 5% rate of return, then in 1 year, we would have $1,050. Therefore, it seems reasonable that we would prefer $1,000 today to $1,000 in 1 year. Alternatively, we would be indifferent toward either $1,000 today or $1,050 in one year.
Another way to think about this concept is to consider that we are willing to forego the utility we derive from spending the $1,000 today only if we are able to spend more in 1 year's time as economic agents exhibit a preference for instant gratification. In other words, we forego spending in favor of saving or investing that money if we expect that a sufficient increased amount of money will be available to us to spend in one year's time.
2. Interest Rates
Interest rates are a measure of the cost of a loan to a borrower or the compensation we want to receive in order to save or invest a specific amount of money instead of spending it.

When we take out a loan, we must repay the
principal value of that loan and, in addition, we have to make periodic interest payments to the lender. Usually, the interest payments are specified in terms of an annual rate and depend upon the amount of the loan and its duration. Essentially, the lenders determine interest rates based on the purpose of the loan, market conditions, financial reputation of the borrower, and the amount of the loan.

We should consider that the lender wants to be compensated for giving up immediate consumption, but the lender also wants to be compensated for the risks that the interest payments are not made and/or that the borrower defaults on their obligation to repay the principal. The longer the duration of a loan and the larger the amount of the loan, the riskier it is considered. Economic conditions play an important role too. If, for example, the borrower used the money to start a new business and an economic recession comes along, this can make the success of the new busines less likely and the repayment of the loan more uncertain. Furthermore, banks may compete with each other to offer loans to companies and private investors and may offer lower interest rates to attract new business.

3. Mathematics of Present and Forward Values
To be able to perform the correct financial calculations, we must be able to compute the value of investments or financial obligations at different moments in time.

This depends first of all on the way the interest to pay or receive is calculated. There are two types of methods: simple interest and compound interest.

The simple interest can be defined as the annual percentage of a loan amount that must be paid to the lender in addition to the principal amount of the loan. The total dollar amount of interest depends on the length of time it takes for the loan to be repaid. The key formula is the following:

where  is the principal amount (amount borrowed),  the annual interest rate, and  the term of the loan in years.

The compound interest rate is more complicated because interest is accrued (i.e., accumulated over time) and interest is earned on the principal plus any interest that was paid previously. The key formula is the following:

where  is again the principal amount,  the annual interest rate, and  the number of years applied.

Students should notice that:

simple interest is interest earned only on the initial investment amount; and
compound interest is interest earned on the initial investment amount and on interests received. In other words, interest earns interest.
Example. Assume that we can deposit a sum of $100,000 in bank A that promises to pay us a  annualized interest rate using simple interest. Alternatively, we could deposit the same amount of money with bank B, which pays an annual interest rate of  but using compound interest. Where should we deposit our money if we plan to keep our money as a deposit for 10 years?

Answer. The calculations are simple. If we deposit our $100,000 with bank A, then after 10 years, we will receive the following dollar amount:

On the other hand, if we deposited our money in bank B, the dollar amount we receive as interest would be

Hence, despite the fact that bank A pays a higher annualized interest rate, we are better off depositing our money with bank B as the compound interest grows much faster than simple interest over time. On the other hand, if we were borrowing the money, we would prefer to be charged a simple interest rather than a compound interest.

Figure 1: Impact of Compounding Interest Rates

Difference between the simple and compounded interest

FM_M1_L1_simple_vs_compound_interest.png
If we think of an interest rate as the proportion of a loan that is charged as interest to a borrower, it is the cost of borrowing money (if seen from the point of view of the borrower) or the return on investment (if observed from the point of view of the lender). For the time being, we assume that this interest rate is fixed, but interest rates can be variable as well. For example, the interest on a loan could be paid every 6 months based on the 3-month LIBOR rate for the period that ends 1 month before the payment is due plus 3%. For the time being, we will not address this type of situation.

Example. An economic agent has $1,000, and she is willing to lend the money to a different economic agent, as long as she is compensated 5% in a year. In this case, 5% is the expected rate of return she desires. The borrower agrees to compensate her 5% for 1 year. How much money will she receive in 1 year if the interest rate is compound?

Answer. This is a very simple problem. In fact, the amount she expects to receive back is easily calculated as:

i.e., the lender expects to receive back $1,050 in one year.

NOTE. From now on, unless stated otherwise, we assume that interest is compounded when working on applications. The most common type of interest is compound, but there are instances where simple interest is used (e.g., certificates of deposits, among others).

If we'd like to be reasonably formal, we can introduce the notions of present value (PV) and forward value (FV). We also agree to measure time (t) in years, use  for the number of years, and express the desired interest rate/rate of return (r) as an annual percentage. Then, we have the following formulae:

For simple interest rate:

For compound interest rate, instead, we have:

In the course, we will use mostly compound interest; thus, we will spend a little more time on it. The formula given earlier can also be reversed to yield

and, when required, it could also be used to recover the required interest rate given PV and FV as:

Example. Suppose that we lend $1,000 dollars and in two years receive back $1,250. What is our return on our investment?

Answer. In this case, we have FV=1250,
PV=1,000, t=2 and we want to find  Using the appropriate formula, we find

rounding to the fourth decimal.

The formulae learned so far are enough to do a lot of financial calculations, but we need a few more to be able to solve all problems.

There is nothing special about annual rates, and two parties could enter into a lending/borrowing agreement where interest is compounded with quarterly, or monthly frequencies instead. So another important skill to master is that of converting a nominal interest rate from one compounding frequency to another while keeping the effective interest rate constant.

Suppose that  is the periodic nominal rate compounded  times per period ( is yearly,  is quarterly,  is monthly, etc.), and suppose that  is the equivalent periodic nominal rate compounded  times per period. Then, we have the following formula:

To understand the logics behind this formula, assume  (one year). If we agree that something is to be compounded  times a year than the future value would be:

If we compound it  times a year, then the future value would be:

Now we want to find  so that  otherwise someone would have an advantage and the other party a disadvantage. This means that we want to solve the following equation:

with respect to  Let's take the power of  on both sides. This yields:

and now with some simple algebra we find the formula given above.

Example. Suppose that we deposit a sum of money at the local bank that pays us an annual interest rate of 5% that compounds monthly, i.e.,  Nevertheless, we have agreed with the bank that payments will be made quarterly, i.e.,  payments. What is the equivalent annual rate that coincides with quarterly compounding?

Answer. In this case,     Using the formula we wrote earlier, the calculation is simple:

Let's check our calculations. Assume that we deposited $10,000. If the interest rate were compounded monthly and credited to our account monthly, then after one year, the value would be:

On the other hand, if the interest rate is compounded and paid quarterly, then we find:

as expected.

It is possible to compound the interest yearly, semi-yearly, quarterly, monthly, daily, every second, and ideally in a continuous manner. Assume that  so that  is the yearly interest. And we assume that we compound the interest  times a year. If we start with a principal,  then the forward value,  over a period of length  assuming that we compound the interests  times, is given by:

Now, if we take the natural log on both sides we get

We want to see what happens when  i.e. we compound interest with an infinite frequency. It is easy to see that

and this is the key for our derivation. In fact. we have

or, with some routine algebraic manipulations,

Thus we have shown that (using properties of logarithms):

Hence,

Example. Consider an investment of $10,000 that draws an interest rate of  a year continuously compounded. How many years does it take to double our investment?

Answer. Using the formula above, we need to solve the following equation:

with respect to  This equation can now be written as

and taking the natural log on both sides,

or

Hence, it takes a little longer than 11.5 years to double our investment. Note that the result is independent from the amount invested.

Compounding is an amazing thing. In fact, Albert Einstein himself is reported to have said "Compound interest is the eighth wonder of the world. He who understands it, earns it, ...., he who does not pays it."
See "10 Reasons Why Compounding Interest is the 8th Wonder of the World" for some optional reading on that topic.

Students can also utilize this Shiny application to comprehend the exponential nature of compound interest. You will be able to visualize the growth of investments over time, attributable to the compounding effect. It is interesting how the nearly linear growth observed with low interest rates and fewer compounding periods transitions to an exponential growth pattern when higher interest rates, more frequent compounding periods, and extended time frames are applied.

4. Yield Curve
Short-term interest rates are usually lower than long-term interest rates because typically long-term investments are riskier and investors want to be compensated to take the additional risk. However, this is not always so, and in some periods, the opposite could be true. A good indication of the difference in rates between short- and long-term investments can be investigated via the yield curve.

The yield curve refers to the relationship between the short- and long-term interest rates of fixed income securities (bonds) issued by the U.S. Treasury. In Figure 2, we can look at three different yield curves that were available on three different dates.

Figure 2: Three Snapshots of the Yield Curve at Different Dates

FM_M1_L1_Yield_Curves.png
As mentioned at the beginning of this section, the yield curve typically has a positive slope. In some cases, we may observe what is called an inverted yield curve, in which short-term interest rates are higher than long-term interest rates. An inverted yield curve is telling us that near-term investments are riskier than the long-term ones. Often, an inverted (Treasury) yield curve is a leading indicator of the approaching of an economic recession (for those with no background in Economics, imagine that the government wants to stimulate the economy to counter a recession and one way to do this is to lower interest rates; that is the cost of money for those who are willing to invest).

5. Spot and Forward Rates
To complete this lesson, we'll use an example to illustrate another important issue that is relevant in a number of practical problems. Before doing that, we'll introduce two important concepts.

A spot interest rate is the current rate at which we can invest our money. We may be told that if we invest for 1 year, the annual interest rate is, for instance,  if we invest for 2 years, the annual rate of interest rate is  and if we invest for 3 years, then the annual interest rate is going to be  This is in line with what we said earlier about longer durations requiring higher interest rates. These are all examples of spot rates for different maturities of the proposed investment as they are known right now at time 

However, while we may be interested in investing for just 2 years, we are not willing to invest our money immediately. We want to invest for two years starting at the end of the first year. So we cannot assume that we will receive  We want to find out what interest rate we are going to earn on such an investment in order to make comparisons. This leads us to deal with the concept of forward interest rate when dealing with an investment that will not take place until a predetermined period.

For this topic, notation is very important to avoid confusion, so we will use heavy notation that does not leave much room for guessing. Suppose that  is the price (market price, as we assume that the bonds are traded) at time 0 of a bond that pays $1 at time  Similarly, we use  to denote the annual interest rate for an investment in which we enter today and that matures at time  Using the principle of compound interest, we find:

We could either solve this equation or, perhaps, we can get  from a yield curve.

If  is the rate at which we can invest today in a  period bond, we can define an implied forward rate between the years  and  with  as the interest rate that applied to an investment we enter into at time  and that last  i.e., reaches maturity at time  We indicate this implied forward rate using the notation  Then, the formula for the forward rate in terms of the spot rates is given by:

and  is the forward rate as seen from date  starting at time  and with maturity at time  in  years.

Going back to our example, we should be able to recognize immediately that for us   and 
Then, the formula just introduced yields

 is the interest rate that we were looking for for our investment.
Hence, if we invest for 2 years, at the end of year 1, or equivalently at the beginning of year 2, given the structure of spot rates, we are going to earn an annual return of 

Example. In the same setup of the example we just discussed, compute 

Answer. Note the following: here   and therefore  Then, using the formula for the implied forward interest rate, we find

We are not going to insist on this, but as general knowledge, the ambitious student should be able to recognize that the following formula holds:

and that the formula can be used to derive implied forward rates.

6. Variable Interest Rates
Suppose now that your banker suggests that you invest in a variable interest rate. More specifically, the banker suggests that you invest in a variable-rate certificate of deposit (also called a flex CD). A variable rate CD allows you to put your money into a secure protected account (in the U.S., they are protected by the FDIC up to $250,000) where it will earn interest over the life of its terms (typically 12, 24, or 36 months). A flex CD pays an interest rate that can go up and down during the life of such a security (the exact factors that determine the actual interest rates are not important right now).

Example. The banker suggests that we invest in a 24-month flex CD, which offers a rate based on the federal funds rate minus 0.3%. Currently, the federal funds rate is 3%, and we decide to open this account. Then, our flex CD account starts earning 2.7%. After one month, the federal funds rate goes up to 3.5%. Hence, now, our flex CD account earns 3.2%. Assume that the federal funds rate continues to increase, and after 6 months, it is 4%. Then, after 6 months, our flex CD account earns 3.7%. Going forward, after 6 more months, the federal funds rate goes to 3.8%. Then, at this point, our account earns 3.5%, and so on.

Let’s consider a few facts. While CDs usually pay monthly compound interest, we assume here for simplicity that they pay simple interest. Then, assuming an investment of $1,000, each month we receive:

where here  indicates that we do not know the unknown rate to be used.

Since the rate is unknown, we cannot calculate with certainty what the earned interest will be. We cannot calculate for sure how much we will have in three months, or six months, or 24 months. However, we can estimate using some rates. If you think interest rates will increase, you may opt for a variable rate to take advantage of higher interest rates leading to more interest. On the other hand, if you think interest rates will decrease, you may opt for a fixed rate to lock in a higher rate. Note that even for a simple loan, there are many decisions that must be made:

The amount of principal to deposit
The amount of time to "lock up" the money
The choice of a fixed or variable rate
Mortgages can also be had with fixed or variable rates. In this case, the opposite is true if you ask the bank for a mortgage, and we would prefer the option that allows us to pay the least each month.

In either case, these decisions may not be as simple as they seem.

First, do we know how much we can lock up right now? What do we know about our future income and expenses?

Second, are we sure that the amount of time the money is locked up for is reasonable? Will we need the funds sooner? In the case of CDs, for instance, there might be harsh penalites for withdrawing the money before maturity.

Third, we can anticipate rates going higher (or lower), but what if we are wrong?

Certainly, these decisions are related. Would I be willing to take a lower fixed rate for a shorter amount of time? Or could I split my deposit across different times so that I can take advantage of not only some shorter times but also some higher rates?

Much of finance involves making decisions under uncertainty. Indeed, this will be a theme we will see well beyond this course and in the very heart of financial engineering itself.

7. Nominal Rates vs. Real Rates
There is even more to the story since the value of money changes over time.
Economists use the Fisher effect to describe the relationship between real and nominal interest rates. Before delving into the technicalities, letʻs try to understand the difference between the concepts of real and nominal interest rates.

Based on only wanting to secure the funds for three months, you decided to save $1,000 $ for three months. You receive your $5 $. With your first successful interest payment, you decide to celebrate with a Big Mac at McDonald's. Note that for vegetarians, the Impossible Burger version of the Big Mac is forthcoming! As an optional reading, “The Big Mac Index” shows how that $5 works to buy a Big Mac.

You realize, however, that you live in a part of the world where that amount of interest is not enough to buy a Big Mac. What happened? Inflation! Inflation is a rise in prices of good and services, resulting in a drop in the purchasing power of money. Inflation is a thief, making the money you have less valuable, due to higher prices for the same goods and services. The Big Mac Index represents purchasing power in regional economies. Suppose over those 3 months, inflation rose 2%. Indeed, as we are still in a COVID-19 economy, you can see high inflation rates in different economies. How do we know if the interest we earn is sufficient to offset the reduced purchasing power of our funds? Let us compute another form of rate called the nominal rate.

The nominal rate is the actual interest rate you earn. Assume that in a 6-month period, we earn 3%.

The inflation rate is the rate at which prices increase. Let’s assume that it is 2%.

Both rates are annualized, so they would prorate to the same 6-month amount.

Then, the inflation-adjusted or real interest rate can be found approximately using what is called the Fisher equation:

real interest rate = nominal rate – inflation rate

The real interest rate is 1%. Although it feels like you earned 3%, in fact the $1,000 became less valuable six months later due to inflation. That interest payment was simply an amount that just barely outperformed inflation. Indeed, if the interest you received, say, was only 2%, then you would have had a real interest rate of 0. You would not have increased your purchasing power at all. But it can get worse: suppose the inflation rate was 5% over the 3-month period. Then, the real interest rate is

real interest rate = nominal rate – inflation rate

Here, the real interest rate is negative. This means you had more purchasing power at the beginning of the 3-month period than you did at the end of it. It would have been easier to have the french fries (or chips) now instead of later. Typically, nominal rates exceed inflation. Otherwise, it pays to spend today.

In introducing the real interest rate, we gave what we stated is an approximate formula. If we let  and  be the nominal and real interest rates, respectively, and call  the expected inflation, then the correct equation to use employs periodic compounding and is as follows:

that is,

or

The Fisher equation we described earlier is in symbols:

This is an approximation to the correct formula immediately above it. The difference in  using the two formulae is usually small. However, the discrepancy can become relatively large if either  or  are not small.

Why do we bother with this? Well, imagine that as an investor you want to achieve a certain return. It seems plausible that you will look at the real return you can realize and therefore demand a higher nominal rate in order to compensate for what is expected inflation. Essentially, that is the content of the Fisher effect: it describes the tendency for nominal interest rates to change based on the expected inflation. This is because investors ask for real rate of returns and not nominal for the very simple reason we saw in the simple examples within this section.

8. Rate of Saving vs. Rate of Borrowing
Let's say that you deposit $10,000 in your savings account at your local bank. Let's also say that the bank offers you an annual interest rate of 3%.

Now, suppose instead that you have a great investment idea, so you walk to the same local bank and ask for a $10,000 loan. The bank, upon satisfying itself that you fulfill their criteria to be extended a loan, will tell you that you need to pay a 7.5% annual interest rate on the loan. If you were to borrow via your credit card, the rate could even be 18% in some cases or even more if you had a poor credit history. In any case, the rate you pay as a borrower is considerably more than the rate the bank was paying you. Assuming a simple interest to keep things simple, as a depositor you would earn

of interest.

However, as a borrower, you would pay

in interest.

Why are the rates of saving so different from the rates for borrowing? Well, for one thing, banks make money because they pay relatively little to borrow money (your deposit) and charge relatively high amounts to lend out money (their loan to you). Like any other business, banks need to charge more for their products than their raw materials. Do you see how many depositors are providing banks with the funds they need? In turn, banks perform and provide myriad financial services and charge substantially higher.

Typically, banks will receive savings accounts from depositors, which are short term, and lend money out, like with mortgage loans, which are long term. Indeed, the term to maturity is one of the primary influences that determines the interest rate. Let’s take a look at the first of these in the next section.

9. Term to Maturity
If you had deposited $10,000 into a certificate of deposit, you agreed to "lock up" your funds for say a 3-month period. That 3-month period is known as the term to maturity. Likewise, if you were willing to purchase a 6-month CD, then six months would be the term to maturity. Term to maturity refers to how long the holding period lasts. It is a unit of time that starts today and goes to some future time when you receive your principal back.

For certain types of accounts, like a certificate of deposit, the term to maturity is well specified. Please note there are other accounts, like a simple savings account, that do not require a term to maturity because you can withdraw your funds at any time. However, these savings accounts typically have very low rates. At the time of writing, the typical savings account rate is a fraction of one percent!

10. Different Maturities Have Different Interest Rates
Generally speaking, the longer the term to maturity, the greater the interest rate. This means that when you agree to save for a longer time, you will be earning more interest for that entire period. Indeed, different maturities have different interest rates.

Let’s consider two intuitive reasons why this may be. The first is that it is more desirable to spend money sooner rather than later. If you were to save for one month, there is likely not going to be much difference between now and one month from now. In one month, the inflation rate will likely be similar, if not the same. In one month from now, there will be less uncertainty about the overall economy than, say, one year from now. Consequently, the 1-year lock up has more uncertainty associated with it. Delaying access to your funds deserves a higher rate.

11. Default
Another reason why interest rates vary is due to the ability and likelihood of the borrower to pay. For example, suppose you have a 1-month loan from the bank. The bank is concerned that you won’t repay the loan. In one month's time, you could lose your income, or overspend, but the reality is that in one month, the bank will see if you are able to make your repayment. Compare that to the scenario where you borrow funds from the bank for one year. That means you may not owe any payments until one year from now. This time is substantially longer, where both your ability to repay, as well as the economy, can worsen. In other words, there is more uncertainty about your ability to repay. What happens if you don't pay? This is considered a default.

12. Applied Problems Requiring the Use of Time Value of Money
In this section, we will see how to use time value of money and the mathematics of present and forward values to solve important applied problems. These problems can be solved using a spreadsheet or using mathematical formulae.

PROBLEM A. Robert is 25 years old and a recent graduate of WQU's Financial Engineering program who was recently hired (in 2024) by a prestigious investment bank. Robert decided that he wants to retire at end of 2064 with $1,000,000 in today's money in his retirement account. Robert believes that a suitable discount rate is 3% and plans to do a suitable contribution every year at the end of the year from 2024 to 2063. He will not contribute any amount n 2064, the year he retires. In addition, Robert is convinced that the money he invests can achieve a return rate of 5% every year. How much money should Robert deposit in his retirement account every year to achieve his stated goal??

Answer. The important thing is to understand how much $1,000,000 today is worth in 40 years. Given the relevant interest rate of 3%, this is a simple problem of FV, and we find that the amount Robert needs to have saved by the time he retires is

Now, he is going to make a contribution of $H every year, starting in 2024 and finishing in 2063 to retire at the end of 2064. Each contribution earns 5% every year it is deposited. Hence, to find H, we need to solve the following equation

The left-hand side can be written as

Hence

So, Robert needs to save $25,717.79 each year to achieve his goal to retire with $1,000,000 in today's money. The same solution can be found using the following
spreadsheet

PROBLEM B. Robert is re-thinking his retirement strategy. He decided that instead of aiming for $1,000,000 in 2024 money at the moment of retiring, he wants to be able to spend $150,000 a year for 20 years from the moment he retires. How much should Robert deposit each year from 2024 to 2063 (no deposit in 2064) to be able to spend $150,000 each year from 2065 to 2084?

Answer. In this case we rely completely on a spreadsheet. It is possible to do the calculations, but there is a certain amount of merit to learning how to use spreadsheets for complex problems.

13. Conclusion
In this first lesson, we considered the all-important concept of time value, which is essential in finance, and investigated the world of interest rates and how they allow us to model time value. To do this, we looked at the mathematics of present and forward values. Furthermore, we considered how interest works from the perspective of both a borrower and a lender. Finally, we analyzed how interest rates vary with the term to maturity, in regards to inflation, and with the creditworthiness of the borrower. In the next lesson, we'll see how this notion of default affects the ongoing relationship between borrower and lender.