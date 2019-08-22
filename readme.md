# Random name generator

# Demo link: [https://danielrichter91.github.io/random-names/dist/](https://danielrichter91.github.io/random-names/dist/)

## What does @helvetia/random-names do?

Returns a random item from a list of ancient greek names.


## Installation

`npm install --save @helvetia/random-names`

## Usage

### Basic
Random Male or Female name
```
import randomNames from '@helvetia/random-names';

randomNames();

// > 'Adonis'
```

### Male
```
import randomNames from '@helvetia/random-names';

randomNames('MALE');

// > 'Homer'
```

### Female
```
import randomNames from '@helvetia/random-names';

randomNames('FEMALE');

// > 'Athena'
```

## API

#### Arguments

| Argument | Type   | Default | Options      |
| -------- | ------ | ------- | -------      |
| gender   | String | None    | MALE, FEMALE |
