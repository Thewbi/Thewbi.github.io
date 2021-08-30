var theme = "dark";

function toggleTheme() {
  console.log('shit dobl ' + theme);

  if (theme == "dark") {
    theme = "light";
    setLightTheme();
  } else {
    theme = "dark";
    setDarkTheme();
  }


}

function setLightTheme() {
  let val =  getComputedStyle(document.documentElement)
    .getPropertyValue('--white-background');
  document.documentElement.style.setProperty('--background', val);

  val =  getComputedStyle(document.documentElement)
    .getPropertyValue('--light-grayish-blue-card-background');
  document.documentElement.style.setProperty('--card-background', val);

  val =  getComputedStyle(document.documentElement)
    .getPropertyValue('--very-dark-blue-text');
  document.documentElement.style.setProperty('--text-color', val);


}

function setDarkTheme() {
  let val =  getComputedStyle(document.documentElement)
    .getPropertyValue('--very-dark-blue-background');
  document.documentElement.style.setProperty('--background', val);


  val =  getComputedStyle(document.documentElement)
  .getPropertyValue('--dark-desaturated-blue-card-background');
document.documentElement.style.setProperty('--card-background', val);

val =  getComputedStyle(document.documentElement)
    .getPropertyValue('--white-text');
  document.documentElement.style.setProperty('--text-color', val);
}