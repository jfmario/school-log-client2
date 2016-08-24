
## Development #

### Dev Server #

`ng serve`

### Logging #

The `LoggingService` is located in `app/shared/lib`. Use it to log stuff.
The logging level can be (from most inclusive to most restrictive):

* 0 - No Logs
* 1 (ERROR) - Errors only
* 2 (WARN) - Errors and warnings
* 3 (DEBUG) - Debug messages, errors, and warnings
* 4 (INFO) - Information, debug messages, errors, and warnings.
* 5 (LOG) - Logs, information, debug messages, errors, and warnings.
* 6 (TRACE) - All logs

The level is set in the constructor for `AppComponent` and starts at TRACE.

## Distribution #

Create the output folder with:

```
ng build --prod
```
