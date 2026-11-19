# GTA 6 Meme — "Waited 13 Years"

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![Rank](https://make.fun/badge/gta6-meme-x-01/jonsonbmth/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![Reward](https://make.fun/badge/gta6-meme-x-01/jonsonbmth/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for make.fun's [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01) bounty ($500).

## The joke

Waited 13 years for GTA 6 — and the download still says 47 hours left. The make.fun ghost waits on the couch with him.

## Files

- `meme.png` — the meme (first picture of the post)
- `CAPTION.txt` — the exact post text for X
- `POST.json` — the post's address on X (placeholder until the post is live)
- `main.ts` — copies `POST.json` to the output directory (Node 22, standard library only)

## How to post

1. Post `meme.png` on X from a public account with the text in `CAPTION.txt`.
2. Copy the post's address (`https://x.com/<handle>/status/<id>`) into `POST.json`.
3. Run `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts` to check the program.

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
