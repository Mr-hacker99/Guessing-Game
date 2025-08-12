function ReturnPromise(name, time) {
  return new Promise((res) => {
    setTimeout(() => {
      res(`this promise has resolved! ${name}`);
    }, time);
  });
}

async function callPromise() {
  console.log("this is to be called first");

  let x = await ReturnPromise("first", 3000);
  console.log("console 1");

  await ReturnPromise("two", 3000);
  console.log("console 2");

  await ReturnPromise("three", 3000);
  console.log("console 3");
}

// callPromise();

async function FetchData(url, api_key) {
  console.log("this is inside the FetchData");
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  return data;
}

async function createProfile() {
  let dataFetched = await FetchData("https://randomuser.me/api/");
  let data = dataFetched.results[0];
  let image = document.createElement("img");
  image.src = data.picture.large;
  document.body.appendChild(image);
}

// createProfile();

async function UsersFn() {
  let dataFetched = await FetchData("https://dummyjson.com/users");
  console.log("Inside usersFetched", dataFetched);
  let users = dataFetched.users;

  for (let user = 0; user < 4; user++) {
    console.log("user", users[user]);
    let userP = document.createElement("p");
    userP.textContent = users[user].firstName + " " + users[user].lastName;
    document.body.appendChild(userP);
  }
}

UsersFn();

async function ErrorInFetching() {
  let dataFetched;
  try {
    dataFetched = await FetchData("https://randomuser.me/api/");
    console.log("this data came from fetch", dataFetched);
    let data = dataFetched.results[0];
    creatingProfile(data);
  } catch (error) {
    console.log("Something went wrong!", error);
  }
}

//ErrorInFetching();

function creatingProfile(props) {
  console.log("this is from the createProfile", props);
  let Div = document.createElement("div");
  Div.classList.add("box");
  let image = document.createElement("img");
  image.classList.add("profile");
  image.src = props.picture.large;
  Div.appendChild(image);
  document.body.appendChild(Div);
}

async function NinjaFetch() {
  const url = "https://api.api-ninjas.com/v1/commodityprice?name=platinum";
  const apiKey = ""; // Get this from API Ninjas dashboard

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();
  console.log("data from Nanja API", data);
}

NinjaFetch();