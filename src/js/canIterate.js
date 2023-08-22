export default function canIterate(object) {
    try {
      (function() {
        [...object]
      })();
      return true;
    } catch (e) {
      return false;
    }
  }
