// 시도 1
// 요구하는 기능 모두 구현 하지 못함.

const searchinput = document.querySelector(".SearchInput__input");
const seleng = document.querySelector(".SelectedLanguage");
const App = document.querySelector(".App");
let searchdata = { seleng: {}, searchtext: "", searchlist: [] };
const url =
  "https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=";
let dummy = null;
if ("searchdata" in localStorage) {
  searchdata = JSON.parse(localStorage["searchdata"]);
}

function mkel(tag, value = "") {
  let el = document.createElement(tag);
  el.textContent = value;
  return el;
}

function input_selleng(text) {
  let pnode = seleng.children[0];
}

function input_sgtitem(arr) {
  let suggetion = document.querySelector(".Suggestion");
  if (suggetion === null) {
    suggetion = mkel("div");
    suggetion.className = "Suggestion";
    App.append(suggetion);
  }
  let pnode = mkel("ul");
  if (suggetion.firstElementChild) {
    pnode = suggetion.children[0];
  } else {
    suggetion.append(pnode);
  }
  remove_child(pnode);
  console.log(pnode.children);
  for (let i of arr) {
    let node = mkel("li", i);
    node.onclick = () => {
      window.alert(`${i}`);
      if (searchdata.seleng[i] === undefined) {
        searchdata.seleng[i] = true;
        insert_seleng(i);
      } else {
        replace_seleng(i);
      }
    };
    pnode.append(node);
  }
}

function insert_seleng(text) {
  let pnode = seleng.children[0];
  let li = mkel("li", text);
  if (pnode.children.length < 5) {
    pnode.append(li);
  } else {
    replace_seleng(text, pnode.firstElementChild);
  }
}
function replace_seleng(text, el2 = null) {
  let pnode = seleng.children[0];
  let el = mkel("li", text);
  if (el2 === null) {
    let target = null;
    for (let i of pnode.children) {
      if (i.textContent === text) {
        target = i;
        break;
      }
    }
    pnode.removeChild(target);
    pnode.append(el);
  } else {
    pnode.removeChild(el2);
    pnode.append(el);
  }
}

function remove_child(pnode) {
  while (pnode.firstElementChild) {
    pnode.removeChild(pnode.firstElementChild);
  }
}
function remove_sgt() {
  let l = App.children.length;
  if (l > 2) {
    App.removeChild(App.children[2]);
  }
}

searchinput.addEventListener("keyup", (event) => {
  searchdata.searchtext = searchinput.value;
  if (searchdata.searchtext.length > 0) {
    window
      .fetch(url + searchdata.searchtext)
      .then((res) => res.json())
      .then((data) => {
        searchdata.searchlist = [...data];
        input_sgtitem(data);
      })
      .catch(console.log);
  } else {
    remove_sgt();
  }
});
