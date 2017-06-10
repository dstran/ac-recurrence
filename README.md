# ac-recurrence

ac-recurrence is an AngularJS frequency picker directive for recurring events.  It is modeled after Apple Calendar's picker for repeating calendar events.

It allows you to drop an element into your markup like so:

```html
<ac-recurrence ng-model="$ctrl.frequency"></ac-recurrence>
```

to display a recurrence picker and get back an RRULE string, e.g. 'FREQ=YEARLY;INTERVAL=1;BYMONTH=6;BYMONTHDAY=1' (every 1 year on June 1st) into `$ctrl.frequency` or whatever you bound to `ng-model`

RRULEs, as specified by [RFC 5545](https://tools.ietf.org/html/rfc5545), are a versatile way of specifying repeating intervals in a format that can be stored, retreived, and transmitted to other software.

## Installation

Install via yarn or npm (recommended)

```shell
yarn add ac-recurrence --save
```

-- or --

```shell
npm install --save ac-recurrence
```

Install via bower (deprecated)

```shell
bower install ac-recurrence
```

## Usage

See demo app.

## Development

Install Gulp via npm if you don't have it
```shell
npm install -g gulp
```

### Available Commands

* `gulp connect`: build the project and run a dev server
* `gulp build`: build the project
* `npm test`: run tests

## License
MIT
