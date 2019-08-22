# Random name generator

[![NPM version][npm-image]][npm-url]

## Demo link: [https://danielrichter91.github.io/random-names/demo/dist/](https://danielrichter91.github.io/random-names/demo/dist/)

## What does @helvetia/random-names do?

Returns a random item from a list of ancient greek names.


## Installation

`npm install --save @helvetia/random-names`

## Usage

### Basic
Random Male or Female name
```
import { single } from '@helvetia/random-names';

single();

// > 'Adonis'
```

### Male
```
import { single } from '@helvetia/random-names';

single('MALE');

// > 'Homer'
```

### Female
```
import { single } from '@helvetia/random-names';

single('FEMALE');

// > 'Athena'
```

## API

#### Arguments

| Argument | Type   | Default | Options      |
| -------- | ------ | ------- | -------      |
| gender   | String | None    | MALE, FEMALE |
