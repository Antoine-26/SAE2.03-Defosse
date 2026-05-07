let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hstoriming, hHome) {
  let html = template;
  html = html.replace("{{hstoriming}}", hstoriming);
  return html;
};

export { NavBar };
