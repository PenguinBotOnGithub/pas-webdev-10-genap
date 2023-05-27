async function getData() {
  try {
    const rawJson = await fetch("https://api.jikan.moe/v4/seasons/now");
    const objectJson = await rawJson.json();
    return objectJson["data"];
  } catch (error) {
    alert(`${error.name}\n${error.message}`);
    console.log(error.stack);
  }
}

function getStudios(studios) {
  let names = "";

  if (studios.length < 2) {
    names = studios[0].name;
    return names;
  }

  for (let i = 0; i < studios.length; i++) {
    if (i === 0) {
      names = names + studios[i].name;
    } else {
      names = names + `, ${studios[i].name}`;
    }
  }

  return names;
}

export { getData, getStudios };
