window.onload = function () {
  let listItems = document.querySelectorAll("li");
  listItems.forEach((li) => {
    let githubLink = li.querySelector('a[href*="github"]').href;
    let githubUsername = githubLink.split("/").pop();
    let githubImage = `https://github.com/${githubUsername}.png`;
    let newImage = document.createElement("img");
    newImage.src = githubImage;
    newImage.alt = githubUsername;
    let div = li.querySelector("div");
    li.insertBefore(newImage, div);
  });
};
