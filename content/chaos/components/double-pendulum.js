// =============================================================================
// Double Pendulum Component
// (c) Mathigon
// =============================================================================



import {Point} from '@mathigon/fermat';

const PI2 = Math.PI / 2;

export class DoublePendulum {

  constructor(state, points, center, lengths=[80, 60], angles=[2, 2.6, 0, 0]) {
    this.state = state;
    this.p1 = points[0];
    this.p2 = points[1];

    this.center = center;
    this.lengths = lengths;
    this.angles = angles;

    this.drawPoints();
  }

  step(dt) {
    let [a, b, da, db] = this.angles;
    const [l1, l2] = this.lengths;

    const g = 9.8 / 2;
    const mu = 3;

    const cos = Math.cos(a-b);
    const sin = Math.sin(a-b);

    // Source: http://www.physicsandbox.com/projects/double-pendulum.html
    const d2a =    (g*(Math.sin(b)*cos-mu*Math.sin(a)) - (   l2*db*db + l1*da*da*cos)*sin)/(l1*(mu-cos*cos));
    const d2b = (mu*g*(Math.sin(a)*cos-   Math.sin(b)) + (mu*l1*da*da + l2*db*db*cos)*sin)/(l2*(mu-cos*cos));

    da += d2a * dt;
    db += d2b * dt;
    this.angles = [a + da * dt, b + db * dt, da, db];

    this.drawPoints();
  }

  drawPoints() {
    const [a1, a2] = this.angles;
    const [l1, l2] = this.lengths;

    const p1 = this.center.shift(Math.sin(a1) * l1, Math.cos(a1) * l1);

    this.state[this.p1] = p1;
    this.state[this.p2] = p1.shift(Math.sin(a2) * l2, Math.cos(a2) * l2);
  }

  set(p1, p2) {
    this.lengths = [Point.distance(this.center, p1), Point.distance(p1, p2)];
    this.angles = [PI2 - p1.angle(this.center), PI2 - p2.angle(p1), 0, 0];
  }
}
