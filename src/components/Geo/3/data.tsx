import * as THREE from "three";

export const geoStates = {
  black: {
    bgColor: new THREE.Color(0x000000),
  },
  white: {
    bgColor: new THREE.Color(0xffffff),
  },
  color: {
    bgColor: new THREE.Color(0xE5DBFC),
  },
  custom: {
    bgColor: new THREE.Color(0x9f0712),
  },
};


export const data = {
  sphere: {
    radius: 1,
    distort: 0.6,
  },
  depthOfField: {
    focusDistance:0.1,
    focalLength: 0.1,
    bokehScale: 8,
    height:480,
    worldFocusRange :2,
    worldFocusDistance: 4
  },
  camera: {
    position : {
      z : {
        homeAnimationState1: 40,
        homeAnmiationState2: 4,
        far: 4,
        close: 1.5
      }
    }
  }

}