const buttonClear = document.querySelector("#bottanClear");

export const clearButton = () => buttonClear.addEventListener("click", function () {
    
    localStorage.clear()

  });