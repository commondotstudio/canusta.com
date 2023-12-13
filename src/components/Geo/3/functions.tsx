import * as THREE from "three";

export const colorLerp = (start: THREE.Color, end: THREE.Color, amt: number) => {
  var r = THREE.MathUtils.lerp(start.r, end.r, amt);
  var g = THREE.MathUtils.lerp(start.g, end.g, amt);
  var b = THREE.MathUtils.lerp(start.b, end.b, amt);
  return new THREE.Color(r, g, b);
}