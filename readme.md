# Random name generator

[![Build Status](https://travis-ci.org/danielrichter91/random-names.svg?branch=master)](https://travis-ci.org/danielrichter91/random-names)
[![Coverage Status](https://coveralls.io/repos/github/danielrichter91/random-names/badge.svg?branch=master)](https://coveralls.io/github/danielrichter91/random-names?branch=master)
[![version](https://img.shields.io/npm/v/@helvetia/random-names)](https://www.npmjs.com/package/@helvetia/random-names)

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

### List
```
import { list } from '@helvetia/random-names';

list(5);

// > ['Krista', 'Euripides', 'Phyllis', 'Agesilaus', 'Denys']
```

## API
Available functions

### single

#### Arguments

| Argument | Type   | Default | Options      |
| -------- | ------ | ------- | -------      |
| gender   | String | None    | MALE, FEMALE |

### list

#### Arguments

| Argument | Type   | Default |
| -------- | ------ | ------- |
| length   | Number | 0       |
