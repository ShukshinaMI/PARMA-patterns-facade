import './style.css';

var Mortgage = function (name) {
  this.name = name;
};

Mortgage.prototype = {
  applyFor: function (amount) {
    let result = 'approved';
    if (!new Bank().verify(this.name, amount)) {
      result = 'denied';
    } else if (!new Credit().get(this.name)) {
      result = 'denied';
    } else if (!new Background().check(this.name)) {
      result = 'denied';
    }
    return (
      this.name + ' has been ' + result + ' for a $' + amount + ' mortgage'
    );
  },
};

const Bank = function () {
  this.verify = function (name, amount) {
    return amount > 100 || name === 'Masha Shukshina';
  };
};

const Credit = function () {
  this.get = function (name) {
    return name === 'Masha Shukshina';
  };
};

const Background = function () {
  this.check = function (name) {
    return name !== 'Masha';
  };
};

function getMortgageData() {
  const mortgage = new Mortgage('Masha Shukshina');
  const result = mortgage.applyFor(100);

  console.log(result);
}

getMortgageData();
