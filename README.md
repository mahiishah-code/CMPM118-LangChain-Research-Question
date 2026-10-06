# CMPM 118 - LangChain Research Question Analyzer

## Description

This project demonstrates how to use LangChain with JavaScript to send requests to a large language model and receive responses.

The program takes a research question about AI coding assistants and first asks the LLM to identify a hypothesis, variables, and a limitation.

It then takes the first response and sends it to the LLM again to create a practical five-step experiment plan.

This demonstrates a simple chained LLM workflow where the output of one request is used as input for a second request.

## Example Research Question

Does using AI coding assistants help university students complete programming assignments faster?

## How to Run

Install the dependencies:

```bash
npm install