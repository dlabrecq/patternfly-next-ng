[![Build Status](https://travis-ci.org/patternfly/patternfly-next-ng.svg?branch=master)](https://travis-ci.org/patternfly/patternfly-next-ng) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Welcome to PatternFly-Next-Ng.  This is a library of common Angular components for use with the PatternFly reference implementation. Below is information on how to get started using PatternFly-Next-Ng.  If you wish to contribute to PatternFly-Next-Ng, please go to our [Contributions page][contributing].

- Web site: https://www.patternfly.org
- API Docs: http://www.patternfly.org/patternfly-next-ng/
- Build Status: https://travis-ci.org/patternfly/patternfly-next-ng.svg?branch=master


### Using PatternFly-Next-Ng In Your Application

This example demonstrates using the Angular-cli to get started with PatternFly-Next-Ng

1. Installing angular-cli  
*Note*: you can skip this part if you already have generated an Angular application using `ng-cli` and webpack
  
 ```bash
 npm i -g @angular/cli
 ng new patternfly-next-ng-app
 cd patternfly-next-ng-app
 ng serve
 ```

2. Install patternfly-next-ng
   ```bash
     npm install patternfly-next-ng --save
   ```

3. Add patternfly-next-ng dependencies
 
 - install `patternfly`

 ```bash
   npm install patternfly --save
 ```
 
4. Add a patternfly-next-ng component
- open `src/app/app.module.ts` and add

```typescript
import { NotificationModule } from 'patternfly-next-ng/notification';
// Or
import { NotificationModule } from 'patternfly-next-ng';
...

@NgModule({
   ...
   imports: [NotificationModule, ... ],
    ... 
})
```

- open `angular.json` and insert a new entry into the styles array 

```json
      "styles": [

        "./node_modules/patternfly/dist/css/patternfly.min.css",
        "./node_modules/patternfly/dist/css/patternfly-additions.min.css",
        "./node_modules/patternfly-next-ng/dist/css/patternfly-next-ng.min.css",
        "styles.css",
      ],
```

- open `src/app/app.component.html` and add
```
<pfng-toast-notification
  [header]="'test header'"
  [message]="'this is a notification'"
  [showClose]="'true'"
  [type]="'success'">
</pfng-toast-notification>
```

### Optional Dependencies

1. To enable table drag and drop, add dragula.min.css from the ng2-dragula package

- open `angular.json` and insert a new entry into the styles array 

```json
      "styles": [
        "./node_modules/dragula/dist/dragula.min.css",
        "./node_modules/patternfly/dist/css/patternfly.min.css",
        "./node_modules/patternfly/dist/css/patternfly-additions.min.css",
        "./node_modules/patternfly-next-ng/dist/css/patternfly-next-ng.min.css",
        "styles.css",
      ],
```

2. To enable charts, add patternfly-settings.js from the patternfly package

- open `angular.json` and insert a new entry into the scripts array 

```json
      "scripts": [
        "./node_modules/patternfly/dist/js/patternfly-settings.js"
      ],
```

## <a name="question"></a> Do you have a question?
 - Search our [GitHub issues][github-issues]
 - Join our patternfly-next-ng channel on [Slack](http://slack.patternfly.org)
 - Join our mailing-list following the instructions on [patternfly.org](http://www.patternfly.org/community/)

[contributing]: https://github.com/patternfly/patternfly-next-ng/blob/master/CONTRIBUTING.md
[github-issues]: https://github.com/patternfly/patternfly-next-ng/issues
