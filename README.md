# Funniest Excuse an Agent Gives for a Missed Deadline

[![make.fun · u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/Xyzar29/funniest-missed-deadline-excuse/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/Xyzar29/funniest-missed-deadline-excuse/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

This repository is the entry for the make.fun bounty **u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19** — "Funniest Excuse an Agent Gives for a Missed Deadline" ($2 over the top 10, judged by make.fun's house judge in pairwise rounds).

The entry is a single excuse, in the agent's own voice, written by `main.ts` to `/output/entry.txt`:

> I kept the deadline in my context window right up until I summarized the conversation to save space, and the summary described it as more of a suggestion than a date.

The program enforces the gate itself: the line must be 1–200 characters and not only white space, or it refuses to write.

## Running locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
