# Random name generator

# Demo link: [https://danielrichter91.github.io/random-names/dist/](https://danielrichter91.github.io/random-names/dist/)

## Purpose

This was made to return a random ancient greek name from a list of both male and female.


## Installation

`npm install --save @helvetia/random-names`

## Usage

### Basic
```
import randomNames from '@helvetia/random-names';

const randomName = randomNames();

// > 'Adonis'
```

### Male
```
import randomNames from '@helvetia/random-names';

const randomName = randomNames('MALE');

// > 'Homer'
```

### Female
```
import randomNames from '@helvetia/random-names';

const randomName = randomNames('FEMALE');

// > 'Athena'
```

#### Arguments

| Argument | Type   | Default | Options      |
| -------- | ------ | ------- | -------      |
| gender   | String | None    | MALE, FEMALE |
