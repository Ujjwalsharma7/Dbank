import Debug "mo:base/Debug";

actor DBank {
  var currentValue = 300;
  currentValue := 100;

  let id = 23456789;

  // Debug.print(debug_show (id));

  public func topUp(amount : Nat) {
    currentValue += amount;

    Debug.print(debug_show (currentValue));
  };

  public func decrease(amount : Nat) {
    currentValue -= amount;

    Debug.print(debug_show (currentValue));
  };

  // topUp();
};
