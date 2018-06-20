/*
 * An object containing properties for the button's style input
 */
export class ButtonStyle {
  /**
   * Danger style type
   */
  static readonly DANGER: string = 'danger';

  /**
   * Default style type
   */
  static readonly DEFAULT: string = 'default';

  /**
   * Information style type
   */
  static readonly PRIMARY: string = 'primary';

  /**
   * Success style type
   */
  static readonly SECONDARY: string = 'secondary';

  /**
   * Warning style type
   */
  static readonly TERTIARY: string = 'tertiary';

  /**
   * Link style type
   */
  static readonly LINK: string = 'link';

  /**
   * Action style type
   */
  static readonly ACTION: string = 'action';

  /**
   * Disabled style type
   */
  static readonly DISABLED: string = 'disabled';
}

/**
 * An object containing properties for the button's type input
 */
export class ButtonType {
  /**
   * The button is a clickable button
   */
  static readonly BUTTON: string = 'button';

  /**
   * The button is a reset button (resets the form-data to its initial values)
   */
  static readonly RESET: string = 'reset';

  /**
   * The button is a submit button (submits form-data)
   */
  static readonly SUBMIT: string = 'submit';
}

/**
 * An object containing properties for the button's formEncType input
 */
export class ButtonFormEncType {
  /**
   * All characters will be encoded before sent
   */
  static readonly APPLICATION_FORM_URLENCODED: string = 'application/x-www-form-urlencoded';

  /**
   * No characters are encoded (use this when you are using forms that have a file upload control)
   */
  static readonly MULTIPART_FORM_DATA: string = 'multipart/form-data';

  /**
   * Spaces are converted to "+" symbols, but no characters are encoded
   */
  static readonly TEXT_PLAIN: string = 'text/plain';
}

/**
 * An object containing properties for the button's formMethod input
 */
export class ButtonFormMethod {
  /**
   * Appends the form-data to the URL: URL?name=value&name=value
   */
  static readonly GET: string = 'get';

  /**
   * Sends the form-data as an HTTP post transaction
   */
  static readonly POST: string = 'post';
}

/**
 * An object containing properties for the button's formTarget input
 */
export class ButtonFormTarget {
  /**
   * Loads the response in a new window/tab
   */
  static readonly BLANK: string = '_blank';

  /**
   * Loads the response in the parent frame
   */
  static readonly PARENT: string = '_parent';

  /**
   * Loads the response in the same frame
   */
  static readonly SELF: string = '_self';

  /**
   * Loads the response in the full body of the window
   */
  static readonly TOP: string = '_top';
}
