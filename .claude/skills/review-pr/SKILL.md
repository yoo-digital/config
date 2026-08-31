---
name: review-pr
description: Use when reviewing a pull request in this config monorepo (yoo-digital/config) — checking a given PR number or GitHub PR link for outdated configuration, contradictory settings between packages, stale examples, GitHub Actions/repo setup drift, or inconsistent conventions across packages/eslint-config-*, packages/prettier, packages/stylelint-config-*, and examples/*. Requires an explicit PR number or link from the user — never guesses or lists PRs.
---

# Reviewing Config Monorepo PRs

## Overview

This repo (`@yoo-digital/config`) is a pnpm/turbo monorepo publishing shared config packages (ESLint, Prettier, Stylelint) consumed by other projects, plus `examples/*` apps that exercise them. A PR review here is a consistency and currency audit across packages, not a single-package code review: does this PR keep every package's config clean, non-contradictory, and on the same conventions as its siblings, keep the examples honest, and keep CI/repo setup current.

## Hard Gate: GitHub CLI Required

**Before doing anything else, verify `gh` is available and authenticated:**

```bash
gh --version && gh auth status
```

If either command fails (not installed, or not authenticated), **STOP immediately**. Tell the user `gh` is required for this review and cannot proceed without it. Do not attempt to review the PR by reading local diffs alone as a substitute — file/line references must trace back to the actual PR diff via `gh`, and PR metadata (checks, linked issues, existing review comments) is only available through it.

**No exceptions:**

- Don't fall back to `git diff`/`git log` and call it a PR review — that's a code review of a branch, not a PR review, and misses CI status and existing discussion.
- Don't proceed "partially" and caveat the gap later. Stop at the gate.

## Hard Gate: Explicit PR Number Required

**The user must give you a specific PR number, or a GitHub URL that contains one** (e.g. `https://github.com/yoo-digital/config/pull/42`). If neither is present in the request, **STOP immediately** and ask the user for the PR number. Do not proceed in any other way.

**No exceptions:**

- Don't run `gh pr list` to find "the" PR to review, even when only one is open, even when the branch name or recent commits make it obvious which PR is meant. Listing PRs to pick one is guessing.
- Don't infer the PR from the current branch (`gh pr view` with no argument uses the checked-out branch) unless the user explicitly said "review the PR for this branch."
- Don't treat "review the latest PR" or "review my PR" as sufficient — those still require you to look one up. Ask for the number instead.
- A vague request ("can you review the config PR") is a stop condition, not a search task.

## Rule: No Local Lint/Format/Test Runs

**Never run `pnpm lint`, `pnpm format`/`pnpm format:check`, `pnpm build`, `pnpm test`, or any package-level equivalent (`turbo run ...`, `eslint`, `prettier --check`, `stylelint`, `vitest`, etc.) during a review.** CI (the `Lint project` workflow, and the `Format check`/`Linting` steps within it) already runs these on every PR — that's what `gh pr checks <number>` reports. Re-running them locally duplicates CI, doesn't tell you anything `gh pr checks` didn't already, and risks reviewing a different tree state (uncommitted local changes, a stale checkout) than what CI actually validated.

- Use `gh pr checks <number>` to see whether lint/format/build/test passed — that result _is_ the check, don't reproduce it.
- If you want to "verify" a finding (e.g. confirm a rule really is deprecated, or a config really would conflict), do it by reading the relevant files/docs, not by executing the project's own lint/format/test commands against the repo.
- This applies even if a check is failing and you want to "see the real error" — report the failure from `gh pr checks`/the linked run, don't re-run it locally to investigate further.

## Workflow

1. **Identify the target and load it** (the PR number/link from the user — see gate above):

   ```bash
   gh pr view <number> --json title,body,baseRefName,headRefName,files,url
   gh pr diff <number>
   gh pr checks <number>
   ```

2. **Check CI status.** If `gh pr checks` shows failures, note them as a finding — don't review past a failing lint/build/test job as if it weren't there.

3. **Pull the changed-file list and read each changed file in full context** (not just the diff hunk) when judging cross-package consistency — a diff hunk alone won't show you whether the surrounding config now contradicts a sibling package.

   ```bash
   gh pr diff <number> --name-only
   ```

4. **Run the review checklist** (below) against the changed files.

5. **Report findings** per the format below. **Do not post comments on the PR.** Report only to the user in your response.

## Review Checklist

**Configuration currency**

- "Up-to-date" means current _for the major version the package actually pins_, not necessarily the tool's latest major — the wider ecosystem (plugins, peer configs) is often slow to catch up, so don't flag a PR for not jumping to a new major on its own. Check the pinned major in the changed `package.json`/lockfile before judging currency.
- Within that pinned major, no deprecated or outdated options: no syntax/APIs that major version itself has deprecated (e.g. ESLint's own deprecated config keys within the v8 line, not just pre-flat-config legacy on a v9 pin). Check the tool's changelog/deprecation notices for that major if unsure.
- No dead/unreachable rules (e.g. a rule set then immediately overridden to `off` in the same ruleset for no stated reason).
- Dependency versions bumped in `package.json` actually match what's used/assumed in the config (e.g. syntax only valid in a newer minor/patch than the declared peer range) — flag mismatches within the pinned major, not just cross-major gaps.

**Contradictions**

- No rule enabled in one part of a config and disabled/contradicted elsewhere in the same file or a file it extends.
- Prettier and ESLint/Stylelint stylistic rules don't fight (e.g. an ESLint formatting rule re-enabled that `eslint-config-prettier`-style setups intend to defer to Prettier).
- `tsconfig.json` compiler options don't contradict the base config they extend (`packages/*/tsconfig.json` vs. the root/shared tsconfig).

**Cross-package consistency**

- Same shape of config across `eslint-config-angular`, `eslint-config-base`, `eslint-config-react` unless the divergence is framework-required — flag unexplained structural differences (e.g. one package uses flat-config exports differently, or has an extra unexplained field in `package.json`).
- `package.json` metadata fields (license, repository, `engines`, `peerDependencies` ranges) consistent across sibling packages.
- Versioning follows the repo's changeset flow — check `.changeset/` for an added changeset when `packages/*` source changed:
  ```bash
  gh pr diff <number> --name-only | grep '^\.changeset/'
  ```
  A package.json/behavior change with no changeset is a finding.

**Examples**

- `examples/*` apps import the packages via the workspace (`workspace:*` / local package names), not a stale pinned npm version, unless the PR is intentionally testing a published version.
- Example code actually demonstrates the current config surface — if a rule/option was renamed or removed, check the corresponding example still runs against it (README snippets included).
- No example left referencing a package/rule that no longer exists in `packages/*`.

**Repository setup & GitHub Actions**

- Workflow files (`.github/workflows/*.yaml`) pin actions to a version consistent with the rest of the repo's pinning convention (don't introduce `@main`/unpinned when siblings pin exact tags).
- Node/pnpm versions in workflows match `.nvmrc` / `packageManager` field in root `package.json` — no drift between CI and local dev.
- `turbo.json` pipeline (`tasks`) stays consistent with any new script added to a package's `package.json` (a new package script with no corresponding turbo task, or vice versa).

## Severity Levels for Findings

Report every finding tagged with one of:

- **Blocking** — contradictory or broken config that will misbehave for consumers, an unpinned/unsafe CI action, or an example that no longer works.
- **Should-fix** — inconsistency with sibling packages, a missing changeset, stale example content that isn't outright broken, deprecated-but-functional config.
- **Nit** — cosmetic/wording issues, minor metadata mismatches with no functional effect.

## Reporting Findings

- **Never post comments on the PR autonomously** (no `gh pr comment`, `gh pr review --comment`, `gh api ... /comments`). Findings are reported to the user in your reply; the user decides whether and how to post them.
- Every finding must cite the concrete file and line: `path/to/file:123`. Pull exact line numbers from `gh pr diff <number>` (unified diff hunk headers give you the line offsets) — don't approximate.
- Group findings by severity (Blocking, then Should-fix, then Nit). Within a group, order by package/file.
- For each finding: one-line summary, file:line, and the concrete reason it's wrong (what breaks, what it contradicts, or which sibling package it diverges from) — not just "looks off."
- If there are zero findings in a severity tier, state that explicitly rather than omitting the tier (makes clear the tier was checked, not skipped).

## Common Mistakes

| Mistake                                                                                 | Fix                                                                                        |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Reviewing via local `git diff` because `gh` "isn't strictly needed"                     | Hard gate — stop instead                                                                   |
| Running `gh pr list` to guess which PR the user means                                   | Hard gate — ask for the PR number/link instead                                             |
| Treating "review my PR" / "the latest one" as enough to proceed                         | Stop and ask for the specific number or link                                               |
| Posting findings straight to the PR via `gh pr comment`                                 | Report to the user only; never comment autonomously                                        |
| Judging a package's config in isolation                                                 | Always diff against sibling packages under `packages/*` for the same tool                  |
| Citing "somewhere in the file"                                                          | Always cite `file:line` from the actual diff                                               |
| Treating a missing changeset as a nit                                                   | It's Should-fix at minimum — it breaks the release flow                                    |
| Flagging a PR for not being on the tool's latest major                                  | Judge currency against the pinned major, not the tool's latest — ecosystem lag is expected |
| Waving off deprecated options because "it's not the latest version anyway"              | Deprecated-within-the-pinned-major is still a finding                                      |
| Running `pnpm lint`/`pnpm format:check`/`pnpm build`/`pnpm test` "just to double-check" | Don't — CI already ran it, read the result via `gh pr checks` instead                      |
| Re-running a failing CI check locally "to see the real error"                           | Read the failure from `gh pr checks`/the linked run, don't reproduce it locally            |
