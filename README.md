# Sfy Hardhat Boilerplate 🚧

My personal boilerplate for Hardhat projects.

## Notes

1. Some ideas for future:

   - [ ] Put all constructor arguments in config.ts
   - [ ] Make config.ts a JSON-file and give it a more sensible name.
   - [ ] Add a flag for the deploy helper to NOT update the address in config.ts
   - [ ] Add a script to automatically deploy the template.
   - [ ] Fill out the "Usage" and "Demo" blocks.

2. Every my project from now on will have a following layout:

   ```
   .
   ├── config.ts            <-- All deployed contract addresses are here
   ├── contracts            <-- All contracts (.sol) are here
   ├── deploy               <-- Deploy scripts
   ├── docs                 <-- Docs generated from NatSpec by hardhat-dodoc
   ├── hardhat.config.ts    <-- Hardhat config
   ├── package.json         <-- NPM-specific package config
   ├── package-lock.json    <-- NPM-specific package config (lock)
   ├── README.md            <-- Project's README
   ├── tasks                <-- All Hardhat tasks are here
   ├── test                 <-- All contract tests are here
   └── tsconfig.json        <-- TypeScript config
   ```

3. There are helper functions for deployment and config updates in _deploy/utils_.

4. I would also structure all my READMEs the same way as I do here:

   ```
   # Title                  <-- Main project title with a nice emoji.
   ...

   ## Notes                 <-- General more detailed info, thoughts, etc.
   ...

   ## Usage                 <-- Sample deployment, usage, development, etc.
   ...

   ## Demo                  <-- Screenshots, GIFs, videos of the project's tests/usage
   ...
   ```

## Usage

TODO

## Demo

TODO
