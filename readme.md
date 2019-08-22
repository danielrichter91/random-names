# Random name generator

# Demo link: [https://danielrichter91.github.io/random-names/dist/](https://danielrichter91.github.io/random-names/dist/)

## Purpose

This was made to return a random ancient greek name from a list of both male and female.


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

#### Arguments

| Argument | Type   | Default | Options      |
| -------- | ------ | ------- | -------      |
| gender   | String | None    | MALE, FEMALE |
