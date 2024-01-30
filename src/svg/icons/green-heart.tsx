import * as React from "react";
const SVGComponent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={28} height={28} fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_717_21" transform="scale(0.0138889)" />
      </pattern>
      <image
        id="image0_717_21"
        width={72}
        height={72}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC/VBMVEUAAAASpR4RnhsTox0asyUSnxsSnxwTph8YsCMXriMNkRUOkxYYsSQasyUUph8NkhYZsiQNkRUXryMPlxgaryMPlRYctSYZsCMPmRkZsiQYryIZsyUOkhUXsCMYsCMXsSQOlBYNlBYZryMVph8arCAQmhkbsyQUoh0OkhUXsCMNkBQMkBUYsSQXryMWrSIPlRcQlhcYsSQPlRYYph4fuCgMkBUMjhQQmhkYsSQNkhYSnRoNkxYRmRgYsiQctCYUnhoRnxsXqB8YpR0YsSQXsCQZoxwWqiEaph4ZsiVNzzRIzi5FzStCzCdEzClR0DhLzjJKzjBAyydd00ZT0TpX0j9V0T1PzzY+yidg1Eta00NCyypQzzc9ySY7yCUbsyRFzC02xCQdqh0tvCQXoRgRmhgMjhQruiEZpBsQlhZk1U9i1U0TnBiE3nNn1lMPkxWB3XA/yik0wiQZsiQjsR+g5pNr11ZZ0kE5xiQzwSMfrB1y2V9f1EhT0Tw+ySYetiYouCIRmBbF9bu887Nu2Ftl1VEwwCQgtyMuviIbqBsaphoUnxrB9LeX44iN4H183Gp02mFp11Q5xCYgrx+x7aep6p6Z44t93Gx622d32mRIzDEhrhwUnhkNkRTN9cQ5xicltSEpuCCs7KCR4oOQ4YBw2V1X0EMhuSgywSYtvCEnth8ksx8mtB6U4oaK4Htt2FgxvyLP9ce68a+176yi55WI33crwisdtSTU9syy76iG33Z82XJ22Wlo1VtAyC4txS06xyY0xCUovSUZrSAWqB8VoxzI9cCv7KSe5ZAmvispwCkkuygkuiQhsyMZsCLZ9tKl6p6o6Zul55ib5I9SzEY+xTU5wTQ7xiwvuyw2wiqT4Ytp02E/wjwyyC+38qyM34OI3nxz1W1w1mZi0Vhe0VNXzVBT1Exb0EtIxkROzD5KyzdEyDY6zTOG3IBx32hZ2k5Gyj49zDcyvy4ptyeV6Ixu1mFm3F5f2VdD0juL5YGH5X55429v4GVk1l9Jz0NI1UKLJxdzAAAASXRSTlMAAgoQ+hsVBlCO9+6/Mi8psYx0RCnk4uDZ08S3tqOYgn1iXCL49vDrvqynoWdIOzb65tHPycaZk4hwaVT97NO3q6h7bUD45djNh5RTqgAACClJREFUWMPM1WtIU2Ecx/G02RRmiEhhkkJFEVQQ9aI3RTe6l7WZaMKJehEYiXHI6GInbGsEVmqlrRdR6bYo1Ja55eZmTDPnNls575r3+93ud/o9z47jVFZv+6qo5/J5/ueZw2n/fz5iX7HY5x9X+Ip9/o74+UfMDZOELQ5YEug79SXTl20ID5JIgsKDN874IxO4KlTEsoyB4zjRrKB5U1w4P1iymmEYg4Fh2YVzgudP6fhFzAaitVfqS0r0eptWJPEX/zLNhlARp7XhfIm+0s4xotAl0393lklYhrPrx3vejYy8G/0w1KK3LwzwE14xM0iktZUMfX8/8vnzl9EPLZVaRjT3t6H8Z7OcvaXnY1G57vFjXUrRx9FxUGEh07wtXcPZSsbfvTmne450BZ96WmwcK5n5s7N0NqOt/JadqtPd5Et9MzpUYlsZ6F1pltbW8t5V/tgTrJRPHyo5dk6I0AkMZbT6989S+FJpRSMCCU7luPFcOYkupEOuHkhBMwS7uBjzfL16jvSQ9opUdGRIb18ZQieepbWOvcHpVE8ptPKrPVZOFOHjhZaIOHu36+pkz9AdWmKdVUtWDFzDWccuFhQVeHqIgCLXmINZvtH7wm9hlDWNLtc10gv08uXLR+jYsWPFDQ4uQDwjjHPUtJKzHh8LYb0iVNA6wbFzfb0DGRxN1dXH+CoqKqozMzMvotxc83nlQv9gkbLBVFFBzz5CWAjL0XVdXQ5m9TKP4xvGGmqHGxsbMxG9Ozc7JyfnEimvzW1Vhs5SWs3Z2bm5F0mZpOrqCgLDHK43sKv4P7TljLJ7uLU1G1EgL6+w0Gg8Qku8POhQKh3uRGNhYV4esXMQVMISsLFPyc6ZTqF5IsbRNNzW1pZHBdycmJiVlXUZXb9+vdjcYLXWvi2+nIXD1DbCpCgFGzuVzPJACkWwTH27yXSEF8jtKpUqLe1U2imklrvP3+02q0+lqVRwCY9VKGoshNbabjWI5lEovIqpBWSCAYIIarVcLs/Pz09KSkpPTzhsGexSJCQlydVqwGlIhWBmQTO2mSYMbARxfOZWMc3txUgFggC4HfcnJCgU8fGHD8fEJGt6Yw7HKxLSAYPHImqYGJFaplolG0ChxVWGvvaODjyIPB+EB/AQp09LpdJYjUYTKz0NCxgpHYGUq4mVZapRsuE8xPR1dLx9S5gEOgQIgsCIPR4VFbV3b1RUbKyUWCgegVQAxNOmFRfXKBlMhMijNTWZzUlQQEAgBlWOQ0lOlslksI6DguUNJKFOdQBaRaGAUqYZDmUg8AYis8hku2iyZELB4oOJAfEayJuwR8EUCi6tmujs7FSQPYGBKEKGIUxcXHR0tEcCJYjMF68wd07gTUQh/wVVr7u7umJiJveEIggMnOitCBJ9PlhRkx3Hw2Ko3oPO2SEUmrmp1NnX3dsr1WgAeMLO8AwcAsURKdl7Eu0l+yY93dV/yMm/RabPKa1qdrvxIpNrZHxgeMcr7RKeor/t1Wh6a846w33AoICy0vo+dz9FdgnC7oDgoei4OMFxhAPYOI377q0FeIfwm1TqbB7r749D9IrJH6gjpPDlPRi5NRpz9g8e4rcI+a3ASM2DAwMDW6cqEh8/H4iM3I0i0cBAw9kr68RAJp/NWVszeANFkgS38P2CbPOE6y0H7+PJJlu2CCPV1lks+2/QyGIUEayN8H23V9m+fT+yNNy+ssLPC/muKytz1jdA2oeT225s2z11QHgF7dy5b58l49D9A+uF/2gXlR14DanOsg8UwdBu+ilMqIA5eibjwb2Tm0MEkO/ap2UnXx+8m1F39KiA+guzY8+ZM08yTty+cgEDCfrRe72zpg7GcRzPsajQQqWI4OBgKdLSDi09tKUX6FnO1HZwckkgqYkJBKSSwWQouogxmx2NWDdvgy9B4fjCzu95Em/1Ui/QL65++OefBJ4Ejwf/PohUG1FzCVd5jsPhynpKE34fTUH+m8HA1HKvjUy59g6JUE8I//4SHDAJ6jQ7wt87ZrpA2BoIkLqQWAyFnuYhYIjDsj0ejiE/zhy17mJEqr8WxtLLrOOOw3JZvttsGfJxcPaU+Ue1ZKOdg8TXem+gIL3gz+OgIMfJdJudimxF55xu98MTUo1NUOqLAmbopFqVkv0492R7GFOtkiuVe2MJAn4jhx074XNmXp6bB9EyPz5Tr4VGv1zjEm+Jt3j8eTI4YHg4nUrJit0tOLZ7T0R1QKVio8/XMFQiDmnG0R3n4cbDLOg8DEn4+MyNJVCTDHWKxEmKES+zsPs90R5JfbJyOtR4nKFjJsXL/WUfI7cx0ZYFDRIWhaE4R0Kuk9GbdeqEgsyyPAcXUxLunrMpgHDKQ0fdO8Sil+U7UyCRq0u5Ese+vyfwbjm3y3Uuon7mm7wRRbRcqVjI9Pksx4Jy1gOnTZ0DD/NtgStHatOh9Ayf7XHIWXOrbcDJn/qYFTq/dCTNHYrns4jPEEejDm78SgVDVDK0z1YOkg4KTJc6JTgngVU/a++pZBp0qCYoXS8UsWZNgKNc4g1bVTrcI/fOxOW1W3VQxWIT66lQJxxkVs9/S6QkhqoQCrU6miHIlqiE4KwjRXfTeTUplwQDF6i1NY2MY+eV0P2vtSA84pBEG5QpABMEU8aa0+SBXrMdSEpetUAhWU7aorKJA+m6miZD2UmSrebh3PqZDfKdSVUMJapIBFPdjXo2cSCdUgmB2dxBXiKlFYUw0u4BnI2liFStpsEQZ4fZoqOIJFXBSNI1nG0KnAAZOdtLZ75tHUhXjrN9+1en1Nm+gJf5wf4DMGyTSxWnOH8AAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);
export default SVGComponent;
