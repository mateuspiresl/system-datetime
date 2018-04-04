# Set System Timezone

## Example:

```javascript
var SystemDatetime = require('set-system-timezone');
SystemDatetime.timezone.get()
  .then(timezone => {
    console.log('Current timezone:', timezone);
    return SystemDatetime.timezone.set('America/New_York');
  })
  .then(() => {
    console.log('Timezone changed to America/New_York');
    return SystemDatetime.datetime.get();
  })
  .then(datetime => {
    console.log('Current datetime:', datetime);
    return SystemDatetime.datetime.set('2018-04-04 08:04');
  })
  .then(() => {
    console.log('Datetime changed to 2018-04-04 08:04');
  });
```
