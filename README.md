# `pnpm` & `parcel` monorepo test

A repository for trying a JS/TS npm library monorepo setup using `pnpm` as package manager and `parcel` as a build tool.

## Usage

### Setting up the development environment

Install the dependencies:

```shell
pnpm install
```

- automatically runs recursively for the workspace, cf. https://pnpm.io/cli/install
- Alias: `pnpm i`
- `npm ci`-equivalent: `pnpm i --frozen-lockfile` (automatically true in CI environment)

### Installing dependencies to packages

Run commands in the package's directory:

#### External dependencies

```shell
pnpm add [-D] @fliegwerk/logsemts
```

#### Other packages from monorepo

```shell
pnpm add [-D] --workspace [package-name]
```

- `--workspace` ensures that it is installed from the workspace directory.
- by default installs as `workspace:^[version]`. I recommend adjusting this to `workspace:^` afterwards to make it an easier workflow for updates (this "version specifier" gets replaced automatically with the correct version on publish)

### Installing development dependencies to root

In root directory:

```shell
pnpm add -D -w @parcel/core
```

- `-w` "enables" running this in the workspace root (otherwise forbidden to ensure that you don't accidentally install it in the workspace root)

### Building packages

In root directory:

```shell
pnpm build
```

### Development flow (watching for changes and re-building)

In root directory:

```shell
pnpm watch
```

### Testing packages manually (REPL)

Install all pacakges in the workspace root (like the development dependencies, but without the `-D` argument).
Then, simply run `node` in the root directory, and you can `require()` all packages.

### Building documentation

In root directory:

```shell
pnpm docs
```

### Publishing packages

**After adjusting package versions (TODO: find a way to automate this):**

In root directory:

```shell
pnpm publish -r
```

- package versions in subpackages' `package.json` files get replaced automatically in the published version
- requires a clean git tree

## TODO

- Find a way to use conventional commits for automatically adjusting package versions
- Integrate ESLint
- Integrate Prettier
- Integrate jest-based unit testing
