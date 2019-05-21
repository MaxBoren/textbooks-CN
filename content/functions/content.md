# Functions

## Notation, Domain and Range

Here is an interactive numberline:

    include ./components/numberline
    x-numberline

---
> sectionId: slope
> id: slope
> goals: make-point slide-point

## Equations of Linear Functions

::: .theorem
__Common Core Standard 8.EE.6__  
Use similar triangles to explain why the slope _m_ is the same between any two
distinct points on a non-vertical line in the coordinate plane; derive the
equation `y=mx` for a line through the origin and the equation `y=mx+b` for a
line intercepting the vertical axis at _b_.
:::

Here you can see a [coordinate system](gloss:coordinate-system), with a straight
line that goes through its [origin](gloss:coordinate-system-origin). To get
started, pick a point anywhere on the line.

::: column(width=360 parent="padded-thin")

    x-coordinate-system.c-system(width=360 height=440 x-axis="-5|5|1" y-axis="-6|6|1" no-crosshairs margins="5 5 5 5")
    x-gesture(target="#slope x-coordinate-system" offset="63,-107")

::: column.grow

{.reveal(when="make-point")} We can draw a right-angled triangle between this
point and the origin of the coordinate system.

{.reveal(when="make-point" delay=1500)} Try sliding the point along the line:
notice how different points form differently sized triangles, but they are all
[[similar|congruent|equilateral]]. _{.lgrey.reveal(when="blank-0")} The best way
to see this is to look at the two angles along the x-axis. They are always the
same size, so by the [AA-condition](gloss:triangle-aa) the triangles must all
be similar._

{.reveal(when="blank-0" delay=1500)} Now we can use one of the results we know
about similar triangles: the ratio of two of the sides is always constant. Move
the point again, and watch what happens:

    p.text-center.reveal(when="blank-0" delay=3000): span.math
      mfrac
        mrow: span.step-target.pill.var.green(data-to="dy") ${p.y}
        mrow: span.step-target.pill.var.blue(data-to="dx") ${p.x}
      mo(value="=") =
      mn.var ${p.y/p.x || '???'}

{.reveal(when="slide-point")} But the opposite is also true: any point (_x_, _y_)
that satisfies this equation must lie somewhere on the line. Therefore we now
have an “equation” for the line:

    p.text-center.reveal(when="slide-point" delay=1000): span.math
      mfrac
        mrow: mi.step-target.pill.green(data-to="dy") y
        mrow: mi.step-target.pill.blue(data-to="dx") x
      mo(value="=") =
      mn 1.5
    
    p.r.text-center.reveal(when="slide-point" delay=2000)
      span.math
        mo(value="⇔") ⇔
        mi.step-target.pill.green(data-to="dy") y
        mo(value="=") =
        mn 1.5
        mi.step-target.pill.blue(data-to="dx") x
      button.next-step Continue


:::

---
> id: questions-1

It turns out that _every line_ that goes through the origin of a coordinate
system has an equation of the form `y = mx`, where _m_ is called the
[__slope__](gloss:line-slope).

If you’re given a line, you can find the corresponding value of _m_ by picking
any point that lies on the line and simply dividing its _y_ and _x_ value. Here
are a few examples:

::: column(width=230 parent="padded-thin")

    x-coordinate-system(width=230 height=180 x-axis="-5|5|1" y-axis="-4|4|1" no-labels margins="5 5 5 5" crosshair-grid=1)

{.text-center} _m_ = [[0.5]]

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5|5|1" y-axis="-4|4|1" no-labels margins="5 5 5 5" crosshair-grid=1)

{.text-center} _m_ = [[3]]

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5|5|1" y-axis="-4|4|1" no-labels margins="5 5 5 5" crosshair-grid=1)

{.text-center} _m_ = [[-1]]

:::

---
> id: intercept

But what about lines that _don’t_ go through the origin of the coordinate
system? In that case we need one more component: we can take the line with the
same slope that goes through the origin, and shift it along the _y_-axis by
adding or subtracting a number:

    svg(style="width: 0; height: 0; position: absolute;"): defs
      marker#blue-arrow(refX=2 refY=2 markerWidth=4 markerHeight=4 orient="auto")
        path(d="M 0 0 L 4 2 L 0 4 z" fill="#ff941f")
      marker#blue-circle(refX="2" refY="2" markerWidth="4" markerHeight="4" orient="auto")
        circle( cx=2 cy=2 r=1.5 fill="#ff941f")

    x-coordinate-system(width=400 height=320 x-axis="-8|8|1" y-axis="-6|6|1" no-crosshairs margins="5 5 5 5")
    x-gesture(target="#intercept x-var" slide="100,0")

{.text-center} `y = 2/3 x` ${sign(a)} ${abs(a)}{a|0|-4,4,1}

{.reveal(when="var-0")} As you can see above, the number added to the value of
_y_ is the same as the distance between the origin of the coordinate system, and
the point where the line crosses the [[_y_-axis|_x_-axis]].

---
> id: equation

We now have an equation for _any_ (non-vertical) line in the coordinate plane:

    p.text-center: span.math
      mi y
      mo(value="=") =
      mtext.b.i.orange m
      mi x
      mo +
      mtext.b.i.cyan b
      mtext ,

{.r} where _{.b.orange}m_ and _{.b.cyan}b_ are two numbers we have to fill in.
As you saw before, _{.b.orange}m_ is the __{.orange}slope__ of the line, and
_{.b.cyan}b_ is the __{.cyan}*y*-axis intercept__.
_{button.next-step} Continue_

---
> id: equation-1

::: column(width=360 parent="padded-thin")

    x-coordinate-system(width=360 height=360 x-axis="-5|5|1" y-axis="-4|6|1" no-crosshairs margins="5 5 5 5")

::: column.grow

If you’re given any line, like the one on the left, you can find the value of
_{.b.cyan}b_ by looking at the point where the line crosses the _y_-axis. In
this example, _{.b.cyan}b_ = [[2]].

{.reveal(when="blank-0")} Similarly, you can find the slope _{.b.orange}m_ by
drawing any triangle below the line, and dividing its height and base. In this
example, the slope is _{.b.orange}m_ = [[0.75]].

{.reveal(when="blank-1")} In other words, the equation of this line is

{.text-center.reveal(when="blank-1")} `y=` _{x-equation(solution="3/4 x+2")}_

:::

---
> id: questions-2

Here are a few more exercises. Can you find the slope and _y_-intercept in
each case, and write down the equation of the line?

::: column(width=230 parent="padded-thin")

    x-coordinate-system(width=230 height=180 x-axis="-5|5|1" y-axis="-4|4|1" no-labels margins="5 5 5 5" crosshair-grid=1)

{.text-center} `y=` _{x-equation(solution="3/2 x-2")}_

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5|5|1" y-axis="-4|4|1" no-labels margins="5 5 5 5" crosshair-grid=1)

{.text-center} `y=` _{x-equation(solution="2x+1")}_

::: column(width=230)

    x-coordinate-system(width=230 height=180 x-axis="-5|5|1" y-axis="-2|6|1" no-labels margins="5 5 5 5" crosshair-grid=1)

{.text-center} `y=` _{x-equation(solution="-1/2 x+3")}_

:::

---
> sectionStatus: dev

## Piecewise Functions

{.todo} TODO

---
> sectionStatus: dev

## Interpreting Functions

{.todo} TODO

---
> sectionStatus: dev

## Numeric Solutions

{.todo} TODO

---
> sectionStatus: dev

## Rate of Change and Area under the Curve

{.todo} TODO
