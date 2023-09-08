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
    let tempValue : Int = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("Amount too large, current value less than 0");
    };
  };

  // topUp();
};
