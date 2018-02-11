class GerasContract {
  private parts: string[] = [null, null];

  constructor() { }

  init(contract:string) {
    const split = contract.split('-');

    split.some((item, index) => {
      if (index > 1) {
        return true;
      }
      this.parts[index] = split[index];
      return false;
    });
  }

  isValid() {
    return this.parts[0] !== null && this.parts[1] !== null && this.parts[0].length === 8 && this.parts[1].length === 5;
  }

  getContract() {
    if (!this.isValid()) {
      return '';
    }

    return `${this.parts[0]}-${this.parts[1]}`;
  }
}
