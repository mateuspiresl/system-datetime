# SystemDatetime

_**ALERT**: Setting methods require **superuser permission**. This package is not suitable for most applications._

How to use:

```javascript
const systemdtz = require('system-datetime');
```

## Datetime

Provides methods to get and set the system's date and time.

```javascript
// Getting the date and time
systemdtz.datetime.get()
  .then(datetime => {
    // The date and time comes in a Date instance
    datetime;

    // Setting the date and time with a Date instance
    return systemdtz.datetime.set(datetime);
  })
  .then(datetime => {
    // The setting method also gets the date and time in a Date instance
  });
```

## Timezone

Provides methods to get and set the system's timezone.

```javascript
// Getting the timezone
systemdtz.timezone.get()
  .then(timezone => {
    // The timezone comes as a string with a content like America/Recife
    timezone;

    // Setting the date and time with a string with content like America/Recife
    return systemdtz.timezone.set(timezone);
  })
  .then(() => {
    // The timezone setting method returns nothing
  });
```
