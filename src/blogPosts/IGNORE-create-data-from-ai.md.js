export const metadata = {
  title: 'Create Data using Generative AI',
  date: '2024-11-23',
  image: '/images/data-from-ai.jpeg' // Add this line
};

export const content = `
  # Create Data using Generative AI

*Posted by Prashant Lonikar on November 23, 2024*

I recently asked myself a question: How much sustainability data could I create for under $5? As someone who works in both climate finance and generative AI, I know how much climate data costs, as well as how cheap AI is nowadays. So I wanted to test how far I could push automation and cost-optimisation for this kind of work. I ran a small experiment, and the results were pretty exciting.

## The Experiment: Can AI Make Data Collection Cheap and Fast?

To test this, I chose three companies from different industries:

- **NVIDIA** (technology)
- **Saudi Aramco** (oil and gas)
- **Volkswagen** (automotive)

For each company, I grabbed two documents: their latest annual report and sustainability report, making it a total of six documents and 1,011 pages.

I built a system using Anthropic's API to process these documents. The system extracts sustainability metrics and organises them into a structured format. Setting it up took about 1.5 hours, and here’s the structure I specified for the data output:

- **Metric type**: Is it past data, current status, or a future target?
- **Metric name**: What the metric is (e.g., Scope 1 CO₂ emissions, percentage of women on the board).
- **Value**: The actual number.
- **Unit**: Units like tonnes of CO2e or percentage.
- **Year**: The year the data relates to.

The system processed all six documents and output the data into a well-formatted CSV file.

## The Results

To my (pleasant) surprise, I got the final output with minimal hiccups. This shows that the models and systems are becoming more reliable overall. The data itself looked clean and well-formatted, and spot checks didn’t reveal any hallucinations. In other words, the data can be considered "true", at least as much as one can trust company disclosures.

![Data from AI](/images/data-from-ai-spreadsheet.png)

### Some key highlights:

- **Cost**: Processing all three companies cost me $2.98, which is well below my $5 target. I guess I could try more companies or docs, but it's 1 am and besides, I feel I have proven the cost point of the argument already. Across the three companies, the system extracted 148 metrics, or nearly 50 metrics per company, all neatly formatted in a spreadsheet. Compare that to manual work: I would estimate it would (very optimistically) take around 30 minutes to manually extract similar metrics for one company, so about 1.5 hours to do the same exercise that Claude did. Assuming an average salary of $40,000 per year for an analyst, their hourly rate would be around $19. So this exercise would cost $19x1.5 = $28.5. This would mean the AI system was roughly 9 times cheaper (!).

- **Speed**: The system took 26 minutes to process all six documents, compared to the 1.5 hours it would’ve taken an analyst to manually extract metrics from each company. This makes it 3.5 times faster than traditional methods.

- **Hands-off**: The process after getting the downloads was completely hands-off, i.e. the model could do its extractions without any human intervention, which is why the speed improvements are not an apples-to-apples comparison. While the code is running, I could do other things, which is an advantage over doing the same exercise manually.

- **Customisability**: For this experiment, I kept it broad, asking the system to extract any sustainability-related metric it could find. But it’s easy to adjust the setup to focus on specific data (e.g., just emissions or diversity stats) or output it in a format that fits a company’s exact needs. A few tweaks to the prompts are all it takes.

## The Challenges

It wasn’t perfect, though. Here are some of the challenges I ran into:

- **Exhaustiveness**: While the system pulled a lot of data, I can’t say for sure it captured everything in the documents. For example, if there were metrics hidden deep in tables or poorly formatted sections, the system might have missed them. That said, I’ve found that being more specific in your instructions (e.g., focusing on emissions data only) helps improve results.

- **Accuracy**: The system’s output depends heavily on the quality of the source documents. Inconsistently formatted or vague text in reports can lead to errors or omissions. I did not find any errors in my spot checks though, but certainly some omissions of numbers that are embedded in images for example.

- **Technical Limitations**: I used a personal account, which comes with slower speeds and stricter rate limits. Using an organisational account with higher API priority would improve both speed and cost efficiency.

## Improvements and Next Steps

- **Faster Processing**: With some technical optimisations, like running tasks in parallel and improving error handling, I could reduce the processing time even further. My focus was primarily on costs, and so my second focus was on making the code work more than making it optimal. For example, the timeout durations I set up to avoid rate limiting were probably unnecessarily long, so that I could get the data out. I feel there are ways to make it faster, not just from a code perspective but also by upgrading the organisation's priority levels in Claude etc.

- **Smarter Prompts**: For this test, I kept the prompts simple and broad. More tailored instructions would yield better-targeted results.

- **Automating Document Collection**: I manually downloaded the reports, but this step could be automated with a script to scrape documents directly from company websites or central databases, making the process completely hands-off.

## The Big Picture

For $3, I managed to extract 148 metrics from 1011 pages of reports across three companies, all in just 26 minutes. That’s fast, cheap, and surprisingly effective. Traditional methods would have cost significantly more and taken much longer.

This experiment is a small but powerful example of how generative AI can transform data collection. Analysts and companies can now focus on analysis and insights instead of spending hours manually collecting data. And with the ability to customise outputs and automate workflows, the potential for scaling this is enormous.

I’m excited to explore how far we can take this. Have you tried something similar with generative AI? I’d love to hear about your experiences and ideas!
  `;