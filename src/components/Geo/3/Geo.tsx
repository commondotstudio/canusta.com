import { CanvasObj } from "./Canvas";
import { GeoStateController } from "./Controllers/GeoStateController";

export default function Geo() {
  return (
    <>
      <GeoStateController />
      <CanvasObj />
    </>
  );
}
