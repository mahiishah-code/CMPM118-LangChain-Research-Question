import "dotenv/config";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  model: "openrouter:z-ai/glm-5.3-flash",
  apiKey: process.env.BAYLEAF_API_KEY,
  configuration: {
    baseURL: "https://api.bayleaf.dev/v1",
  },
});

const question =
  "Does using AI coding assistants help university students complete programming assignments faster?";

async function main() {
  console.log("CMPM 118 - LangChain Demo\n");

  console.log("Research Question:");
  console.log(question);
  console.log();

  // First request: analyze the research question
  const response1 = await model.invoke(
    `Look at this research question and give me:
- a possible hypothesis
- the independent variable
- the dependent variable
- one limitation

Keep the answer short and easy to understand.

Research question:
${question}`
  );

  const analysis = response1.content.toString();

  console.log("FIRST RESPONSE:");
  console.log(analysis);
  console.log();

  // Second request: use the first response to create an experiment plan
  const response2 = await model.invoke(
    `Based on the research question and the analysis below,
create a simple 5-step experiment plan.

Research question:
${question}

Analysis:
${analysis}

Keep it practical for a university research project.`
  );

  console.log("SECOND RESPONSE:");
  console.log(response2.content.toString());
}

main().catch((error) => {
  console.error("Something went wrong:");
  console.error(error.message);
});