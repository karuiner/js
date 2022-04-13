const p1d1 = require("./problem1_day-1.json");
const p1d2 = require("./problem1_day-2.json");
const p1d3 = require("./problem1_day-3.json");
const p2d1 = require("./problem2_day-1.json");
const p2d2 = require("./problem2_day-2.json");
const p2d3 = require("./problem2_day-3.json");

const { default: axios } = require("axios");

const x_auth_token = "f16e6973d6dbdda3ea92486e5715205c";
const BASEURL =
  "https://kox947ka1a.execute-api.ap-northeast-2.amazonaws.com/prod/users";

//이전의 데이터를 바탕으로 현재의 요청을 최적화 하는 방법은?

async function app() {
  let rst = await axios
    .post(
      BASEURL + "/start",
      { problem: 2 },
      {
        headers: {
          "X-Auth-Token": x_auth_token,
          "Content-Type": "application/json",
        },
      }
    )
    .then((rst) => rst.data);
  const auth_key = rst.auth_key;
  let time = rst.time;
  let loc_data = await axios
    .get(BASEURL + "/locations", {
      headers: {
        Authorization: auth_key,
        "Content-Type": "application/json",
      },
    })
    .then((rst) => rst.data.locations);
  let truck_data = await axios
    .get(BASEURL + "/trucks", {
      headers: {
        Authorization: auth_key,
        "Content-Type": "application/json",
      },
    })
    .then((rst) => rst.data.trucks);
  console.log(truck_data);
  let k = 0;
  let dummy = [];
  for (let i of truck_data) {
    dummy.push({ truck_id: i.id, command: [0, 0, 0, 0, 0] });
  }
  while (k < 720) {
    let rst = await axios
      .put(
        BASEURL + "/simulate",
        { commands: dummy },
        {
          headers: {
            Authorization: auth_key,
            "Content-Type": "application/json",
          },
        }
      )
      .then((rst) => rst.data);
    k++;
  }

  let score = await axios
    .get(BASEURL + "/score", {
      headers: {
        Authorization: auth_key,
        "Content-Type": "application/json",
      },
    })
    .then((rst) => rst.data);
  console.log(score);
}
//app();
console.log(p1d1[0]);
