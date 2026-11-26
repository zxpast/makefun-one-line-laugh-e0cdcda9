# Candidates — One Line, One Laugh (u-deysumbrella-one-line-one-laugh-e0cdcda9)

The skill at `~/workspace/custom-skills/humor-one-liner/SKILL.md` was read in
full before any line was written. The judges' brief (competition.yaml) calls
for a deadpan comic voice, scored pairwise by GLM-5.3-flash under a
lexicographic order: (1) a genuinely funny one-line joke; (2) laughter from a
twist, surprise or one well-chosen word — not from explaining the joke or
leaning on a familiar meme; (3) a single line, readable in one breath;
(4) fresh, plain-spoken wording that sounds like someone talking; (5) landing
on the first read, with no footnote, context or shared knowledge. The gate is
1–140 characters. The prize is $2, winner-takes-all (rank 1 only). The board
is blind/hidden — a fresh-winners scan through judge.artifact.text was not
possible (0 submissions at check time, leaderboard API metrics_withheld: true),
so the skill and the judges' brief carry the weight here.

The very first idea (O4 — THROWN OUT without being built): autocorrect turning
"love you" into "live you" in a text to mum. The most obvious idea is the
first one; per the O4 rule it was discarded.

## v1 — FIRST DRAFT (C1)
> I hid my chocolate in the detergent box; my kids found it, fold laundry now, and ask, 'Mom, why does the chocolate taste like clean?'
- 133 characters, 25 words. Setup:punchline 17:8 words (ratio 2.1:1, inside the skill's 2:1–5:1 target band).
- The twist sits in the final words ("taste like clean") — "clean" is not a
  flavour, it is a young child's category error, and it reveals that the kids
  are eating chocolate that tastes of detergent. The narrator owns the blunder
  herself (she hid chocolate from her own kids, then lost both the hiding
  place and the laundry job to them).
- Two concrete pictures crash into each other: chocolate × detergent box. The
  punchline is a quote — the strongest punchline shape in Laugh/Zero Use,
  §3.1.2 of the skill.
- No unpaid numbers; no field cliches ("you're welcome", "raccoon with a
  mortgage", 6 a.m. alarm, moths/porch-light — all steered clear of).

## v2 — FINAL (CHOSEN, revised from v1)
> I hid my chocolate in the detergent box; my kids found it, do the laundry now, and ask, 'Mom, why does the chocolate taste like clean?'
- 135 characters, 26 words. Setup:punchline 18:8 words (ratio 2.25:1, inside the target band).
- Why it changed: "fold laundry now" became "do the laundry now". "Do the
  laundry" is the idiomatic phrase (whereas "fold laundry" is only one step
  of the job), and it makes it clearer that the kids have TAKEN OVER the
  laundry work — because that is where the chocolate lives — so the chain of
  cause and effect reads better in a single pass (criterion 5). Punchline,
  twist and quote are unchanged.
- A variant considered during the revision and rejected: "...moved into the
  laundry room..." — more vivid (the kids moving into the laundry room to
  guard the stash) but 144 characters, OVER the 140 cap. Discarded.

## Originality checks (skill makefun-short-text-originality, gates O1–O4)
- O1 (26 Nov 2026 ~15:10 WIB): verbatim web search for
  "why does the chocolate taste like clean" returned 0 verbatim hits (results
  were only articles about "clean tasting chocolate" that contain neither the
  phrase nor this joke); "chocolate in the detergent box" also returned 0
  verbatim hits (unrelated results: Churchill sock drawer, laxative
  chocolate, and similar). PASSED.
- O2: this competition's leaderboard API is BLIND — `GET /api/competitions/<slug>/leaderboard`
  returns `metrics_withheld: true`, `scores_visible: false`
  (checked first-hand 26 Nov 2026 ~15:10 WIB, 0 submissions). There is no rival
  text to check for duplicates; there is no round board either (round 1 cutoff
  26 Nov 17:33 WIB, not yet run). This limitation is recorded — a
  fresh-winners scan is impossible on this run.
- O3 structural: at least one specific concrete noun (chocolate, detergent
  box) + transaction/action verbs (hid, found, do) + a reframe in the second
  half (chocolate → the flavour "clean"). Not a generic first idea.
- O4: 5 candidates were written (C1–C5 below); the first idea was discarded.

## C2
> I told the barista my name was 'Alex' to save time; she's been shouting 'Alec's' for six months and I answer to it now.
- 119 characters, 24 words. Twist at the end ("I answer to it now"), self-own, quote.
- REJECTED: the misspelled-name-at-the-coffee-shop premise is a worn-out trope
  (the Starbucks-name joke) — it fails the judges' freshness criterion (4),
  even though the twist itself works.

## C3
> My fridge emailed me a report: I opened it 14 times yesterday and ate nothing. I replied 'unsubscribe' and it locked the cheese drawer.
- 135 characters, 24 words. Twist at the end ("locked the cheese drawer").
- REJECTED: the judgemental-smart-fridge premise is a known trope; the number
  14 is never paid off by the punchline (AP-6); weaker than C1 overall.

## C4
> I asked my GPS for the fastest route home; it said 'stay single' and rerouted me through my ex's street.
- 104 characters, 20 words. Twist on the final words ("through my ex's street").
- REJECTED: a personified GPS handing out life advice is a known trope; the
  setup:punchline ratio is 9:11 (below 2:1, outside the skill's target band);
  the twist is split across two beats ("stay single" + "ex's street"), so it
  lands less sharply than C1.
- Kept as a reserve.

## C5
> I bought a standing desk to fix my posture; now I slouch standing up and my chair has filed for unemployment.
- 109 characters, 21 words. Twist on the last word, self-own, absurd.
- REJECTED: "filed for unemployment" applied to an inanimate object is a
  familiar joke pattern; the setup:punchline ratio is 10:11 (below 2:1);
  less sharp than C1.
- Kept as a reserve.

## C1–C9 checks (skill humor-one-liner §4) for the v2 final
- C1 (at least 1 fresh concrete noun in the punchline): "clean" used as a flavour — PASSED.
- C2 (punchline is more than a shift in time/intensity): the twist is a
  category error plus a reveal — PASSED.
- C3 (punchline explains at most 40% without a quote): the punchline is 8 of
  26 words (31%) AND it is a quote — PASSED.
- C4 (setup:punchline ratio 2:1–5:1): 18:8 = 2.25:1 — PASSED.
- C5 (no quote/irony before the final pivot): the only quote is the punchline
  itself — PASSED.
- C6 (numbers paid off by the punchline): there are no numbers — PASSED.
- C7 (a fresh turn after the final pivot): the turn happens on the very last
  words ("taste like clean") — PASSED.
- C8 (strongest verb + concrete object in the punchline): "taste" + "clean" —
  PASSED.
- C9 (does not depend on competition context): the joke stands alone, with no
  need to know about make.fun — PASSED.
- Result: 9/9 PASSED.
