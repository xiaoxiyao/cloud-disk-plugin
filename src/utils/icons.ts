import type { IRenderOptions } from "@/utils/render";

type TIcon = IRenderOptions & { children: IRenderOptions | IRenderOptions[] };

const down: TIcon = {
  type: "svg",
  props: {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z",
    },
  },
};

const edit: TIcon = {
  type: "svg",
  props: {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "64 64 896 896",
  },
  children: {
    type: "path",
    props: {
      d: "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z",
    },
  },
};
const editCircle: TIcon = {
  type: "svg",
  props: {
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "64 64 896 896",
  },
  children: [
    {
      type: "path",
      props: {
        d: "M712.533333 288c-25.6-25.6-66.133333-25.6-89.6 0L362.666667 546.133333c-6.4 6.4-12.8 14.933333-17.066667 23.466667l-53.333333 117.333333c-14.933333 32 19.2 66.133333 51.2 51.2l117.333333-53.333333c8.533333-4.266667 17.066667-10.666667 23.466667-17.066667l258.133333-258.133333c25.6-25.6 25.6-66.133333 0-89.6l-29.866667-32zM448 631.466667c-2.133333 2.133333-6.4 4.266667-10.666667 6.4l-85.333333 38.4 38.4-85.333334c2.133333-4.266667 4.266667-6.4 6.4-10.666666l194.133333-194.133334 49.066667 49.066667-192 196.266667z m258.133333-258.133334l-27.733333 27.733334-49.066667-49.066667 27.733334-27.733333c4.266667-4.266667 12.8-4.266667 17.066666 0l29.866667 29.866666c6.4 4.266667 6.4 12.8 2.133333 19.2z",
      },
    },
    {
      type: "path",
      props: {
        d: "M512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512s192 426.666667 426.666667 426.666667 426.666667-192 426.666667-426.666667S746.666667 85.333333 512 85.333333z m0 802.133334c-206.933333 0-375.466667-168.533333-375.466667-375.466667S305.066667 136.533333 512 136.533333 887.466667 305.066667 887.466667 512 718.933333 887.466667 512 887.466667z",
      },
    },
  ],
};

const info: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-blue)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 224m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0ZM544 392h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z",
    },
  },
};
const infoCircle: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-blue)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zM512 336m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM536 448h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z",
    },
  },
};
const infoCircleFilled: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-blue)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z",
    },
  },
};

const check: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-green)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474c-6.1-7.7-15.3-12.2-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1 0.4-12.8-6.3-12.8z",
    },
  },
};
const checkCircle: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-green)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c12.7 17.7 39 17.7 51.7 0l210.6-292c3.9-5.3 0.1-12.7-6.4-12.7zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
    },
  },
};
const checkCircleFilled: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-green)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z",
    },
  },
};

const close: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-red)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M563.8 512l262.5-312.9c4.4-5.2 0.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9c-4.4 5.2-0.7 13.1 6.1 13.1h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z",
    },
  },
};
const closeCircle: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-red)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 0.3L512 465.6l-99.3-118.4-66.1-0.3c-4.4 0-8 3.5-8 8 0 1.9 0.7 3.7 1.9 5.2l130.1 155L340.5 670c-1.2 1.5-1.9 3.3-1.9 5.2 0 4.4 3.6 8 8 8l66.1-0.3L512 564.4l99.3 118.4 66 0.3c4.4 0 8-3.5 8-8 0-1.9-0.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2zM512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
    },
  },
};
const closeCircleFilled: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-red)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z",
    },
  },
};

const error: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-red)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 720m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM480 416v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zM955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48z m-783.5-27.9L512 239.9l339.8 588.2H172.2z",
    },
  },
};
const errorFilled: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-red)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416z m32 352c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z",
    },
  },
};

const warning: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-yellow)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 804m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0ZM480 636h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z",
    },
  },
};
const warningCircle: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-yellow)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zM512 688m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z",
    },
  },
};
const warningCircleFilled: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-yellow)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296z m32 440c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z",
    },
  },
};

const timeCircle: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-blue)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zM686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z",
    },
  },
};
const timeCircleFilled: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-blue)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m176.5 585.7l-28.6 39c-2.6 3.6-7.6 4.3-11.2 1.7L483.3 569.8c-2.1-1.5-3.3-3.9-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z",
    },
  },
};

const frown: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-red)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M336 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM688 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2-44.3-18.7-84.1-45.6-118.3-79.8-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8c18.7-44.3 45.6-84.1 79.8-118.3 34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2 44.3 18.7 84.1 45.6 118.3 79.8 34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8c-18.7 44.3-45.6 84.1-79.8 118.2zM512 533c-85.5 0-155.6 67.3-160 151.6-0.2 4.6 3.4 8.4 8 8.4h48.1c4.2 0 7.8-3.2 8.1-7.4C420 636.1 461.5 597 512 597s92.1 39.1 95.8 88.6c0.3 4.2 3.9 7.4 8.1 7.4H664c4.6 0 8.2-3.8 8-8.4-4.4-84.3-74.5-151.6-160-151.6z",
    },
  },
};
const frownFilled: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-red)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m376 272h-48.1c-4.2 0-7.8-3.2-8.1-7.4C604 636.1 562.5 597 512 597s-92.1 39.1-95.8 88.6c-0.3 4.2-3.9 7.4-8.1 7.4H360c-4.6 0-8.2-3.8-8-8.4 4.4-84.3 74.5-151.6 160-151.6s155.6 67.3 160 151.6c0.2 4.6-3.4 8.4-8 8.4z m24-224c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z",
    },
  },
};

const meh: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-yellow)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M336 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM688 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2-44.3-18.7-84.1-45.6-118.3-79.8-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8c18.7-44.3 45.6-84.1 79.8-118.3 34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2 44.3 18.7 84.1 45.6 118.3 79.8 34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8c-18.7 44.3-45.6 84.1-79.8 118.2zM664 565H360c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",
    },
  },
};
const mehFilled: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-yellow)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m384 200c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v48z m16-152c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z",
    },
  },
};

const smile: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-green)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M336 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM688 421m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0ZM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2-44.3-18.7-84.1-45.6-118.3-79.8-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8c18.7-44.3 45.6-84.1 79.8-118.3 34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2 44.3 18.7 84.1 45.6 118.3 79.8 34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8c-18.7 44.3-45.6 84.1-79.8 118.2zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-0.3-4.2-3.9-7.4-8.1-7.4H360c-4.6 0-8.2 3.8-8 8.4 4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6c0.2-4.6-3.4-8.4-8-8.4z",
    },
  },
};
const smileFilled: TIcon = {
  type: "svg",
  props: {
    fill: "var(--cdp-color-green)",
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    version: "1.1",
    viewBox: "0 0 1024 1024",
  },
  children: {
    type: "path",
    props: {
      d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM288 421c0-26.5 21.5-48 48-48s48 21.5 48 48-21.5 48-48 48-48-21.5-48-48z m224 272c-85.5 0-155.6-67.3-160-151.6-0.2-4.6 3.4-8.4 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c0.3-4.2 3.9-7.4 8.1-7.4H664c4.6 0 8.2 3.8 8 8.4-4.4 84.3-74.5 151.6-160 151.6z m176-224c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z",
    },
  },
};

const loading: TIcon = {
  type: "svg",
  props: {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 50 50",
  },
  children: [
    {
      type: "g",
      props: {
        fill: "none",
        strokeLinecap: "round",
      },
      children: [
        {
          type: "circle",
          props: {
            r: "20",
            cx: "25",
            cy: "25",
            stroke: "var(--cdp-color-gray-50)",
            "stroke-width": "3.5",
          },
        },
        {
          type: "circle",
          props: {
            r: "20",
            cx: "25",
            cy: "25",
            stroke: "var(--cdp-color-blue)",
            "stroke-width": "3.5",
            strokeDasharray: "90, 150",
            strokeDashoffset: "0",
          },
          children: [
            {
              type: "animate",
              props: {
                dur: "1.5s",
                values: "1,200;90,150;90,150",
                repeatCount: "indefinite",
                attributeName: "stroke-dasharray",
              },
            },
            {
              type: "animate",
              props: {
                dur: "1.5s",
                values: "0;-40;-120",
                repeatCount: "indefinite",
                attributeName: "stroke-dashoffset",
              },
            },
            {
              type: "animateTransform",
              props: {
                to: "360 25 25",
                dur: "2s",
                type: "rotate",
                from: "0 25 25",
                repeatCount: "indefinite",
                attributeName: "transform",
              },
            },
          ],
        },
      ],
    },
  ],
};

// const success: TIcon = {
//   type: "svg",
//   props: {
//     fill: "var(--cdp-color-green)",
//     xmlns: "http://www.w3.org/2000/svg",
//     width: "1em",
//     height: "1em",
//     viewBox: "0 0 1024 1024",
//   },
//   children: {
//     type: "path",
//     props: {
//       d: "M512,72C269,72,72,269,72,512s197,440,440,440s440-197,440-440S755,72,512,72L512,72z M758.9,374 c-48.5,48.6-81.2,76.9-172.3,186.8c-52.6,63.4-102.3,131.5-102.7,132L462.1,720c-4.6,6.1-13.5,6.8-19.1,1.6L267.9,558.9 c-17.8-16.5-18.8-44.4-2.3-62.2s44.4-18.8,62.2-2.3l104.9,97.5c5.5,5.1,14.1,4.5,18.9-1.3c16.2-20.1,38.4-44.5,62.4-68.6 c90.2-90.9,145.6-139.7,175.2-161.3c36-26.2,77.3-48.6,87.3-36.2C792,343.9,782.5,350.3,758.9,374L758.9,374z",
//     },
//   },
// };

const icons: { [key: string]: TIcon } = {
  down,

  edit,
  editCircle,

  info,
  infoCircle,
  infoCircleFilled,

  check,
  checkCircle,
  checkCircleFilled,

  close,
  closeCircle,
  closeCircleFilled,

  error,
  errorFilled,

  warning,
  warningCircle,
  warningCircleFilled,

  timeCircle,
  timeCircleFilled,

  frown,
  frownFilled,
  meh,
  mehFilled,
  smile,
  smileFilled,

  loading,
};

export default icons;
