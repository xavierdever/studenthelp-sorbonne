export interface ContactInterface {
  name: string;
  email: string;
  inbox: {
    subject: string;
    message: string;
  };
}

export class Contact {
  private _name: string;
  private _email: string;
  private _subject: string;
  private _message: string;


  constructor(name: string, email: string, subject: string, message: string) {
    this._name = name;
    this._email = email;
    this._subject = subject;
    this._message = message;
  }

  /**
   * Getter name
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Getter email
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Setter email
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Getter subject
   */
  public get subject(): string {
    return this._subject;
  }

  /**
   * Setter subject
   */
  public set subject(value: string) {
    this._subject = value;
  }

  /**
   * Getter message
   */
  public get message(): string {
    return this._message;
  }

  /**
   * Setter message
   */
  public set message(value: string) {
    this._message = value;
  }

}
