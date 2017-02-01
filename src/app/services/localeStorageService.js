export class LocalStorageService {
  constructor() {

  }

  setItem(itemName, itemValue) {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  }

  getItem(itemName) {
    var allUsers = localStorage.getItem(itemName);
    return allUsers != "undefined" && allUsers? $.parseJSON(allUsers) : '';
  }

}
