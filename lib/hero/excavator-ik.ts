const DEG = 180 / Math.PI;
const RAD = Math.PI / 180;

export const EXCAVATOR_ARM = {
  pivot: { x: 292, y: 178 },
  boomLength: 232,
  stickLength: 112,
  bucketLength: 58,
  rest: { boom: -42, stick: 68, bucket: 32 },
  limits: {
    boom: { min: -78, max: 8 },
    stick: { min: 18, max: 115 },
    bucket: { min: -20, max: 75 },
  },
} as const;

export type ArmAngles = {
  boom: number;
  stick: number;
  bucket: number;
};

export type SvgPoint = {
  x: number;
  y: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function clampArmAngles(angles: ArmAngles): ArmAngles {
  const { limits } = EXCAVATOR_ARM;
  return {
    boom: clamp(angles.boom, limits.boom.min, limits.boom.max),
    stick: clamp(angles.stick, limits.stick.min, limits.stick.max),
    bucket: clamp(angles.bucket, limits.bucket.min, limits.bucket.max),
  };
}

export function solveExcavatorArm(target: SvgPoint, pivot = EXCAVATOR_ARM.pivot): ArmAngles {
  const { boomLength: L1, stickLength: L2, bucketLength: L3 } = EXCAVATOR_ARM;

  const dx = target.x - pivot.x;
  const dy = target.y - pivot.y;
  const distToMouse = Math.hypot(dx, dy);

  const bucketApproach = clamp(distToMouse - L3 * 0.55, 40, L1 + L2 - 10);
  const angleToTarget = Math.atan2(dy, dx);

  const cos2 = clamp((bucketApproach * bucketApproach - L1 * L1 - L2 * L2) / (2 * L1 * L2), -1, 1);
  const sin2 = Math.sqrt(Math.max(0, 1 - cos2 * cos2));
  const stickRad = Math.atan2(sin2, cos2);

  const k1 = L1 + L2 * cos2;
  const k2 = L2 * sin2;
  const boomRad = angleToTarget - Math.atan2(k2, k1);

  const pinX = pivot.x + L1 * Math.cos(boomRad) + L2 * Math.cos(boomRad + stickRad);
  const pinY = pivot.y + L1 * Math.sin(boomRad) + L2 * Math.sin(boomRad + stickRad);

  const bucketRad = Math.atan2(target.y - pinY, target.x - pinX);
  const bucket = bucketRad - (boomRad + stickRad);

  return clampArmAngles({
    boom: boomRad * DEG,
    stick: stickRad * DEG,
    bucket: bucket * DEG,
  });
}

export function clientToSvgPoint(svg: SVGSVGElement, clientX: number, clientY: number): SvgPoint {
  const point = svg.createSVGPoint();
  point.x = clientX;
  point.y = clientY;
  const matrix = svg.getScreenCTM();

  if (!matrix) {
    return { x: EXCAVATOR_ARM.pivot.x + 220, y: EXCAVATOR_ARM.pivot.y - 80 };
  }

  const transformed = point.matrixTransform(matrix.inverse());
  return { x: transformed.x, y: transformed.y };
}

export function getBucketTip(angles: ArmAngles, pivot = EXCAVATOR_ARM.pivot): SvgPoint {
  const { boomLength: L1, stickLength: L2, bucketLength: L3 } = EXCAVATOR_ARM;
  const boomRad = angles.boom * RAD;
  const stickRad = (angles.boom + angles.stick) * RAD;
  const bucketRad = (angles.boom + angles.stick + angles.bucket) * RAD;

  const pinX = pivot.x + L1 * Math.cos(boomRad) + L2 * Math.cos(stickRad);
  const pinY = pivot.y + L1 * Math.sin(boomRad) + L2 * Math.sin(stickRad);

  return {
    x: pinX + L3 * Math.cos(bucketRad),
    y: pinY + L3 * Math.sin(bucketRad),
  };
}

export function getDefaultTarget(): SvgPoint {
  return getBucketTip(EXCAVATOR_ARM.rest);
}
