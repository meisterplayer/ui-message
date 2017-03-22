Message plugin for meister
=========

This plugin displays an error message to the user when the player could not recover from the error. It works using the meisterPlayer.error() method.

Getting started
---------

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Message: {}
});

// Continue meister configuration
meisterPlayer.setItem(...);
```

Config options
---------

### defaultHeadTitle [String] (default: 'Whoops, something went wrong...') ###

The default head title. This will be the default title for each error message.

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Message: {
        defaultHeadTitle: 'Something went wrong',
    }
});

// Continue meister configuration
meisterPlayer.setItem(...);

// Throw an error
meisterPlayer.error('An error message.');

```

### Error options ###

You can give options with the Meister error function. This allow for modifications with error messages (Such as title and headTitle)

You can do that with the following snippet:

``` JavaScript
var meisterPlayer = new Meister('#player', {
    Message: {
        defaultHeadTitle: 'Something went wrong',
    }
});

// Continue meister configuration
meisterPlayer.setItem(...);

// Throw an error
meisterPlayer.error('An error message.', 'ERR-9001', {
    title: 'An error occurred',
    headTitle: 'Woops something went wrong',
});

```
