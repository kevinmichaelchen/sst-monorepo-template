# SST Monorepo Template

A better SST monorepo template.

- Initially forked from [`sst-monorepo`][sst-monorepo].
- Influenced by [OrbitKit][orbitkit].
- Uses [TurboRepo][turborepo].
- Compiles packages for [optimal LSP performance][lsp].
- Uses [Biome][biome] instead of Prettier and ESLint (see [benchmarks][biome-benchmarks]).
- Uses the Biome-[recommended][biome-hook-rec] [`Lefthook`][lefthook] project for Git hooks.

[biome]: https://biomejs.dev/
[biome-benchmarks]: https://github.com/biomejs/biome/blob/cli/v1.9.4/benchmark/README.md
[biome-hook-rec]: https://biomejs.dev/recipes/git-hooks/
[lefthook]: https://github.com/evilmartians/lefthook
[lsp]: https://orbitkit.dev/decision-reasoning/why-all-built#the-orbitkit-approach
[orbitkit]: https://github.com/ixahmedxi/orbitkit
[sst-monorepo]: https://github.com/sst/monorepo-template
[turborepo]: https://turbo.build/repo/docs
