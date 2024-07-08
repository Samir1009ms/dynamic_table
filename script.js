'use strict';
const jsonData = [
  {
    name: "column 1",
    font_weight: "bold",
    font_style: "normal",
    orientation: "horizontal",
    text_align: "center",
    font_size: "12",
    place: "top",
    is_sub: "0",
    children: [
      {
        name: "column 1-1",
        font_weight: "normal",
        font_style: "normal",
        orientation: "horizontal",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "0",
        children: [
          {
            name: "column 1-1-1",
            font_weight: "normal",
            font_style: "normal",
            orientation: "horizontal",
            text_align: "center",
            font_size: "12",
            place: null,
            is_sub: "0",
            children: [
              {
                name: "column 1-1-1-1",
                font_weight: "normal",
                font_style: "normal",
                orientation: "horizontal",
                text_align: "center",
                font_size: 12,
                is_sub: "0",
                children: [],
              },
            ],
            id: 19,
          },
          {
            name: "column 1-1-2",
            font_weight: "normal",
            font_style: "normal",
            orientation: "horizontal",
            text_align: "center",
            font_size: "12",
            place: null,
            is_sub: "0",
            children: [],
            id: 20,
          },
        ],
        id: 5,
      },
      {
        name: "column 1-2",
        font_weight: "normal",
        font_style: "normal",
        orientation: "horizontal",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "0",
        children: [
          {
            name: "column 1-2-1",
            font_weight: "normal",
            font_style: "normal",
            orientation: "horizontal",
            text_align: "center",
            font_size: "12",
            place: null,
            is_sub: "0",
            children: [],
            id: 21,
          },
          {
            name: "column 1-2-2",
            font_weight: "normal",
            font_style: "normal",
            orientation: "horizontal",
            text_align: "center",
            font_size: "12",
            place: null,
            is_sub: "0",
            children: [],
            id: 22,
          },
        ],
        id: 6,
      },
    ],
    id: 1,
  },
  {
    name: "column 2",
    font_weight: "bold",
    font_style: "normal",
    orientation: "horizontal",
    text_align: "center",
    font_size: "12",
    place: "top",
    is_sub: "0",
    children: [],
    id: 2,
  },
  {
    name: "column 3",
    font_weight: "bold",
    font_style: "normal",
    orientation: "vertical",
    text_align: "center",
    font_size: "12",
    place: "top",
    is_sub: "0",
    children: [
      {
        name: "column 3-1",
        font_weight: "normal",
        font_style: "normal",
        orientation: "vertical",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "1",
        children: [],
        id: 24,
      },
      {
        name: "column 3-2",
        font_weight: "normal",
        font_style: "normal",
        orientation: "vertical",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "1",
        children: [],
        id: 25,
      },
      {
        name: "column 3-3",
        font_weight: "normal",
        font_style: "normal",
        orientation: "vertical",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "0",
        children: [],
        id: 26,
      },
    ],
    id: 23,
  },
  {
    name: "column 4",
    font_weight: "normal",
    font_style: "normal",
    orientation: "horizontal",
    text_align: "center",
    font_size: 12,
    place: "top",
    is_sub: "0",
    children: [
      {
        name: "column 4-1",
        font_weight: "normal",
        font_style: "normal",
        orientation: "horizontal",
        text_align: "center",
        font_size: 12,
        is_sub: "0",
        children: [],
      },
    ],
  },
  {
    name: "row 1",
    font_weight: "normal",
    font_style: "normal",
    orientation: "horizontal",
    text_align: "left",
    font_size: "12",
    place: "left",
    is_sub: "0",
    children: [
      {
        name: "row 1-1",
        font_weight: "normal",
        font_style: "normal",
        orientation: "horizontal",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "0",
        children: [],
        id: 7,
      },
      {
        name: "row 1-2",
        font_weight: "normal",
        font_style: "normal",
        orientation: "horizontal",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "0",
        children: [],
        id: 8,
      },
    ],
    id: 3,
  },
  {
    name: "row 2",
    font_weight: "normal",
    font_style: "normal",
    orientation: "horizontal",
    text_align: "left",
    font_size: "12",
    place: "left",
    is_sub: "0",
    children: [],
    id: 4,
  },
  {
    name: "row 3",
    font_weight: "bold",
    font_style: "normal",
    orientation: "vertical",
    text_align: "center",
    font_size: "12",
    place: "left",
    is_sub: "0",
    children: [
      {
        name: "row 3-1",
        font_weight: "normal",
        font_style: "normal",
        orientation: "horizontal",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "0",
        children: [
          {
            name: "row 3-1-1",
            font_weight: "normal",
            font_style: "normal",
            orientation: "horizontal",
            text_align: "center",
            font_size: "12",
            place: null,
            is_sub: "1",
            children: [],
            id: 29,
          },
          {
            name: "row 3-1-2",
            font_weight: "normal",
            font_style: "normal",
            orientation: "horizontal",
            text_align: "center",
            font_size: "12",
            place: null,
            is_sub: "1",
            children: [],
            id: 30,
          },
          {
            name: "row 3-1-3",
            font_weight: "normal",
            font_style: "normal",
            orientation: "horizontal",
            text_align: "center",
            font_size: "12",
            place: null,
            is_sub: "1",
            children: [],
            id: 31,
          },
        ],
        id: 28,
      },
      {
        name: "row 3-2",
        font_weight: "normal",
        font_style: "normal",
        orientation: "horizontal",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "0",
        children: [],
        id: 32,
      },
      {
        name: "row 3-3",
        font_weight: "normal",
        font_style: "normal",
        orientation: "horizontal",
        text_align: "center",
        font_size: "12",
        place: null,
        is_sub: "0",
        children: [],
        id: 33,
      },
    ],
    id: 27,
  },
  {
    name: "row 4",
    font_weight: "normal",
    font_style: "normal",
    orientation: "horizontal",
    text_align: "left",
    font_size: 12,
    place: "left",
    is_sub: "0",
    children: [
      {
        name: "row 4-1",
        font_weight: "normal",
        font_style: "normal",
        orientation: "horizontal",
        text_align: "center",
        font_size: 12,
        is_sub: "0",
        children: [],
      },
    ],
  },
];
const dynamicTableEl = document.querySelector("#dynamicTable");
const theadEl = dynamicTableEl.querySelector("thead");
const tbodyEl = dynamicTableEl.querySelector("tbody");

console.log(jsonData);

function setClassNames(fw, fs, or, ta) {
  let className = "";
  if (fw == "bold") className += " text-bold";
  if (fs == "italic") className += " text-italic";
  if (or == "vertical") className += " text-vertical";
  if (ta == "left") className += " text-left";
  return className;
}

function getMaxColAndRow(arr, place) {
  const maxCounts = [];

  function recursiveArr(arr, maxCount) {
    if (arr.length != 0) {
      maxCount++;
      arr.forEach((item) => {
        if (item.place == place || item.place == null) {
          recursiveArr(item.children, maxCount);
        }
      });
    } else {
      maxCounts.push(maxCount);
    }
  }

  recursiveArr(arr, 0);
  return place == "top"
    ? [maxCounts.length, Math.max(...maxCounts)]
    : [Math.max(...maxCounts), maxCounts.length];
}

let maxColAndRowTop = getMaxColAndRow(jsonData, "top");
let maxColAndRowLeft = getMaxColAndRow(jsonData, "left");


// for (let i = 0; i < maxColAndRowTop[1] + 1; i++) {
//   theadEl.innerHTML += "<tr></tr>";
// }
// for (let i = 0; i < maxColAndRowLeft[1]; i++) {
//   tbodyEl.innerHTML += "<tr></tr>";
// }
// const theadTr = theadEl.querySelectorAll("tr");
// const tbodyTr = tbodyEl.querySelectorAll("tr");

// theadTr[0].innerHTML += `
//     <td colspan="${maxColAndRowLeft[0]}" rowspan="${maxColAndRowTop[1]}"></td>
//     <td colspan="1" rowspan="${maxColAndRowTop[1]}">Setirler no</td>
//     `;
// theadTr[theadTr.length - 1].innerHTML += `
//     <td colspan="${maxColAndRowLeft[0]}" rowspan="${maxColAndRowTop[1]}">A</td>
//     <td colspan="1" rowspan="${maxColAndRowTop[1]}">B</td>
//     `;

function getCol(item) {
  let colCount = 0;

  function recursiveItem(item) {
    if (item.children.length == 0) {
      colCount++;
    }
    item.children.forEach((child) => {
      if (child.children.length != 0) {
        recursiveItem(child);
      } else {
        colCount++;
      }
    });
  }

  recursiveItem(item);

  return colCount;
}

const columnsLevelNumbers = []
function getColsAndRowsTop() {
  let maxLimit = maxColAndRowTop[1];
  let RowsAndCols = {};
  let count = 1;
  let countChild = 1;

  function recursiveItem(item, maxLimit) {
    let itemColNum = getCol(item);
    if (item.children.length == 0 && (item.place == "null" || item.is_sub == "1" || item.place != "left" && item.is_sub == "0")) {
      if (item.is_sub == "0") {
        columnsLevelNumbers.push(count++);
      } else {
        const lastValue = columnsLevelNumbers[columnsLevelNumbers.length - 1];
        let lastValueNumber = lastValue && typeof lastValue == "string" ? lastValue.split("-")[0] : lastValue;
        columnsLevelNumbers.push(lastValueNumber + "-" + countChild++);
      }
    }
    if (item.children.length != 0) {
      maxLimit--;
      RowsAndCols[item.name] = [itemColNum, 1];
      item.children.forEach((child) => {
        recursiveItem(child, maxLimit);
      });
    } else {
      RowsAndCols[item.name] = [itemColNum, maxLimit];
    }
  }

  jsonData.forEach((item) => {
    if (item.place == "top") {
      recursiveItem(item, maxLimit);
    }
  });

  return RowsAndCols;
}

const ColsAndRowsTop = getColsAndRowsTop();

function setColsAndRowsTop() {
  let level = 0;
  for (let i = 0; i < maxColAndRowTop[1]; i++) {
    theadEl.innerHTML += `
    <tr class="dynamic"></tr>
    `;
  }
  const trElements = document.querySelectorAll("thead>tr.dynamic");
  trElements[0].innerHTML += `
  <td colspan="3" rowspan="4"></td>
  <td colspan="1" rowspan="4">Setirler no</td>
  `;

  function recursiveItem(item, level) {
    const classNames = setClassNames(
      item.font_weight,
      item.font_style,
      item.orientation,
      item.ta
    );
    trElements[level].innerHTML += `
      <td class="${classNames}" style="font-size: ${item.font_size
      }px" colspan="${ColsAndRowsTop[item.name][0]}" rowspan="${ColsAndRowsTop[item.name][1]
      }">${item.name}</td>
      `;
    level++;
    if (item.children.length != 0) {
      item.children.forEach((child) => {
        recursiveItem(child, level);
      });
    }
  }

  jsonData.forEach((item) => {
    if (item.place == "top") {
      recursiveItem(item, level);
    }
  });
}

setColsAndRowsTop();

const rowsLevelNumbers = []
function getColsAndRowsLeft() {
  let maxLimit = 3;
  let RowsAndCols = {};
  let count = 1;
  let countChild = 1;
  function recursiveItem(item, maxLimit) {
    let itemColNum = getCol(item);

    if (item.children.length == 0 && (item.place == "null" || item.is_sub == "1" || item.place != "top" && item.is_sub == "0")) {
      if (item.is_sub == "0") {
        rowsLevelNumbers.push(count++);
      } else {
        const lastValue = rowsLevelNumbers[rowsLevelNumbers.length - 1];
        let lastValueNumber = lastValue && typeof lastValue == "string" ? lastValue.split("-")[0] : lastValue;
        rowsLevelNumbers.push(lastValueNumber + "-" + countChild++);
      }
    }
    if (item.children.length != 0) {
      maxLimit--;
      RowsAndCols[item.name] = [1, itemColNum];
      item.children.forEach((child) => {
        recursiveItem(child, maxLimit);
      });
    } else {
      RowsAndCols[item.name] = [maxLimit, itemColNum];
    }
  }

  jsonData.forEach((item) => {
    if (item.place == "left") {
      recursiveItem(item, maxLimit);
    }
  });

  return RowsAndCols;
}

const ColsAndRowsLeft = getColsAndRowsLeft();

function setColsAndRowsLeft() {
  let level = 1;
  for (let i = 0; i < maxColAndRowTop[0] + 1; i++) {
    tbodyEl.innerHTML += `
    <tr class="dynamic"></tr>
    `;
  }
  const trElements = document.querySelectorAll("tbody>tr.dynamic");
  trElements[0].innerHTML += `
  <td colspan="3" rowspan="1">A</td>
  <td colspan="1" rowspan="1">B</td>
  `;


  function recursiveItem(item) {
    const classNames = setClassNames(
      item.font_weight,
      item.font_style,
      item.orientation,
      item.ta
    );
    if (item.children.length != 0) {
      trElements[level].innerHTML += `
        <td class="${classNames}" style="font-size: ${item.font_size
        }px" colspan="${ColsAndRowsLeft[item.name][0]}" rowspan="${ColsAndRowsLeft[item.name][1]
        }">${item.name}</td>`;
      item.children.forEach((child) => {
        recursiveItem(child);
      });
    } else {
      trElements[level].innerHTML += `
      <td class="${classNames}" style="font-size: ${item.font_size
        }px" colspan="${ColsAndRowsLeft[item.name][0]}" rowspan="${ColsAndRowsLeft[item.name][1]
        }">${item.name}</td>`;
      level++;
    }
  }

  jsonData.forEach((item) => {
    if (item.place == "left") {
      recursiveItem(item);
    }
  });
  trElements.forEach((item, index) => {
    if (index !== 0) {
      trElements[0].innerHTML += `
        <td>${columnsLevelNumbers[index - 1]}</td>
        `;
      item.innerHTML += `
      <td>${rowsLevelNumbers[index - 1]}</td>
      `
      console.log(item)
      for (let i = 0; i < maxColAndRowTop[0]; i++) {
        item.innerHTML += `
        <td class="dashedBorder"></td>`;
      }
    }
  });
}

setColsAndRowsLeft();