export class NavbarItems {
  static readonly COMPONENTS: any[] = [{
    id: 'button',
    path: 'button',
    title: 'Button'
  }];

  static readonly DIRECTIVES: any[] = [{
    id: 'remainingcharscount',
    path: 'remainingcharscount',
    title: 'Remaining Chars Count'
  }];

  static readonly GETSTARTED: any[] = [{
    hasChildren: false,
    id: 'getstarted',
    path: 'welcome',
    title: 'Welcome'
  }, {
    hasChildren: true,
    id: 'components',
    path: 'button',
    title: 'Components'
//  }, {
//    hasChildren: true,
//    id: 'directives',
//    path: 'remainingcharscount',
//    title: 'Directives'
//  }, {
//    hasChildren: true,
//    id: 'pipes',
//    path: 'searchhighlight',
//    title: 'Pipes'
//  }, {
//    hasChildren: true,
//    id: 'services',
//    path: 'notificationservice',
//    title: 'Services'
  }];

  static readonly PIPES: any[] = [{
    id: 'searchhighlight',
    path: 'searchhighlight',
    title: 'Search Highlight'
  }, {
    id: 'sortarray',
    path: 'sortarray',
    title: 'Sort Arrays'
  }, {
    id: 'truncate',
    path: 'truncate',
    title: 'Truncate Chars'
  }];

  static readonly SERVICES: any[] = [{
    id: 'copyservice',
    path: 'copyservice',
    title: 'Copy Service'
  }, {
    id: 'notificationservice',
    path: 'notificationservice',
    title: 'Notification Service'
  }];
}
